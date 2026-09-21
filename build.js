const fs = require("fs");
const path = require("path");

const darkPalette = require("./src/dark_palette");
const lightPalette = require("./src/light_palette");
const languageDir = path.join(__dirname, "src", "languages");
const colorMarker = /^__COLOR__([A-Za-z_$][A-Za-z0-9_$]*)__$/;

function classifyLanguageFile(file) {
  if (!file.endsWith(".js")) return null;
  if (/_dark\.js$|_dark_base\.js$/.test(file)) return "dark";
  if (/_light\.js$|_light_base\.js$/.test(file)) return "light";
  throw new Error(
    `Archivo de lenguaje no clasificable: src/languages/${file}. ` +
      "Debe terminar en _dark.js, _dark_base.js, _light.js o _light_base.js.",
  );
}

function trackedColors(colors) {
  return new Proxy(colors, {
    get(target, property) {
      if (typeof property !== "string") return undefined;
      return `${"__COLOR__"}${property}__`;
    },
  });
}

function resolveColors(value, colors) {
  if (typeof value === "string") {
    const match = value.match(colorMarker);
    if (!match) return value;
    if (!(match[1] in colors)) {
      throw new Error(`Variable de color inexistente: colors.${match[1]}`);
    }
    return colors[match[1]];
  }
  if (Array.isArray(value))
    return value.map((item) => resolveColors(item, colors));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        resolveColors(item, colors),
      ]),
    );
  }
  return value;
}

function languageFiles(themeType) {
  return fs
    .readdirSync(languageDir)
    .filter((file) => classifyLanguageFile(file) === themeType)
    .sort();
}

function sortSemanticTokenColors(semanticTokenColors) {
  return Object.fromEntries(
    Object.entries(semanticTokenColors).sort(([left], [right]) =>
      left < right ? -1 : left > right ? 1 : 0,
    ),
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

function groupTokenColors(tokenColors) {
  const groups = new Map();

  for (const rule of tokenColors) {
    const settings = rule.settings || {};
    const key = JSON.stringify(stableValue(settings));
    if (!groups.has(key)) {
      groups.set(key, { scope: new Set(), settings });
    }

    const scopes = Array.isArray(rule.scope) ? rule.scope : [rule.scope];
    scopes.forEach((scope) => groups.get(key).scope.add(scope));
  }

  return [...groups.values()].map(({ scope, settings }) => ({
    scope: [...scope].sort(),
    settings,
  }));
}

function sortTokenColors(tokenColors) {
  return groupTokenColors(tokenColors)
    .map((rule, index) => ({ rule, index }))
    .sort(
      (
        { rule: left, index: leftIndex },
        { rule: right, index: rightIndex },
      ) => {
        const leftName =
          left.settings?.foreground?.match(colorMarker)?.[1] || "";
        const rightName =
          right.settings?.foreground?.match(colorMarker)?.[1] || "";
        if (!leftName && !rightName) return leftIndex - rightIndex;
        if (!leftName) return 1;
        if (!rightName) return -1;
        return leftName < rightName
          ? -1
          : leftName > rightName
            ? 1
            : leftIndex - rightIndex;
      },
    )
    .map(({ rule }) => rule);
}

function loadLanguageRules(themeType, colors) {
  const tokenColors = [];
  const semanticTokenColors = {};

  for (const file of languageFiles(themeType)) {
    const rules = require(path.join(languageDir, file))(trackedColors(colors));
    tokenColors.push(...(rules.tokenColors || []));
    Object.assign(semanticTokenColors, rules.semanticTokenColors || {});
  }

  return {
    tokenColors: sortTokenColors(tokenColors),
    semanticTokenColors: sortSemanticTokenColors(semanticTokenColors),
  };
}

function buildTheme(themeName, themeType, uiFile, colors) {
  const ui = require(path.join(__dirname, uiFile))(colors);
  const languageRules = loadLanguageRules(themeType, colors);
  return {
    name: themeName,
    type: themeType,
    semanticHighlighting: true,
    ...ui,
    ...resolveColors(languageRules, colors),
  };
}

// Crear carpeta de salida
const outputDir = path.join(__dirname, "themes");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Compilar temas
fs.writeFileSync(
  path.join(outputDir, "esmerald.json"),
  JSON.stringify(
    buildTheme("Esmerald", "dark", "src/ui_dark.js", darkPalette),
    null,
    2,
  ),
);

fs.writeFileSync(
  path.join(outputDir, "esmerald-light.json"),
  JSON.stringify(
    buildTheme("Esmerald Light", "light", "src/ui_light.js", lightPalette),
    null,
    2,
  ),
);

console.log(
  "✅ Temas compilados con tokenColors y semanticTokenColors unificados.",
);
