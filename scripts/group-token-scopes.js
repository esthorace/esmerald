const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const markerPrefix = "__COLOR_REFERENCE__";

function createColorProxy() {
  return new Proxy(
    {},
    {
      get(target, property) {
        if (typeof property !== "string") return undefined;
        return `${markerPrefix}${property}__`;
      },
    },
  );
}

function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stableValue(value[key])]),
    );
  }
  return value;
}

function scopeList(scope) {
  return Array.isArray(scope) ? scope : [scope];
}

function colorMarkers(value, palette) {
  if (
    typeof value === "string" &&
    /^colors\.[A-Za-z_$][A-Za-z0-9_$]*$/.test(value)
  ) {
    return `${markerPrefix}${value.slice("colors.".length)}__`;
  }
  if (
    typeof value === "string" &&
    /^#[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?$/.test(value)
  ) {
    const entry = Object.entries(palette).find(
      ([name, color]) =>
        name !== "dark" &&
        name !== "light" &&
        color.toLowerCase() === value.toLowerCase(),
    );
    if (!entry) throw new Error(`Color sin variable: ${value}`);
    return `${markerPrefix}${entry[0]}__`;
  }
  if (Array.isArray(value))
    return value.map((item) => colorMarkers(item, palette));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        colorMarkers(item, palette),
      ]),
    );
  }
  return value;
}

function groupTokenColors(tokenColors) {
  const groups = new Map();

  tokenColors.forEach((rule) => {
    const settings = rule.settings || {};
    const key = JSON.stringify(stableValue(settings));
    const scopes = scopeList(rule.scope);

    if (!groups.has(key)) {
      groups.set(key, {
        scope: new Set(),
        settings,
      });
    }

    scopes.forEach((scope) => groups.get(key).scope.add(scope));
  });

  return [...groups.values()].map(({ scope, settings }) => ({
    scope: [...scope].sort(),
    settings,
  }));
}

function serialize(value) {
  return JSON.stringify(value, null, 2).replace(
    new RegExp(`"${markerPrefix}([A-Za-z_$][A-Za-z0-9_$]*)__"`, "g"),
    "colors.$1",
  );
}

function transform(file, paletteFile) {
  const filePath = path.join(root, file);
  const palette = require(path.join(root, paletteFile));
  const source = colorMarkers(require(filePath)(createColorProxy()), palette);

  if (!Array.isArray(source.tokenColors)) {
    throw new Error(`${file}: tokenColors debe ser un array`);
  }

  const transformed = {
    ...source,
    tokenColors: groupTokenColors(source.tokenColors),
  };

  const output = `module.exports = function createColors(colors) {\n  return ${serialize(transformed)};\n};\n`;
  fs.writeFileSync(filePath, output);
  console.log(
    `${file}: ${source.tokenColors.length} -> ${transformed.tokenColors.length} reglas`,
  );
}

transform("src/languages/_dark_base.js", "src/dark_palette");
transform("src/languages/_light_base.js", "src/light_palette");
