const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const darkPalette = require(path.join(root, "src", "dark_palette"));
const lightPalette = require(path.join(root, "src", "light_palette"));
const languageDir = path.join(root, "src", "languages");
const hexPattern = /^#[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?$/;
const invalidHexPattern = /#[0-9a-fA-F]+/g;

function collectValues(value, result = []) {
  if (typeof value === "string") {
    if (hexPattern.test(value)) result.push(value.toLowerCase());
    return result;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectValues(item, result));
    return result;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectValues(item, result));
  }

  return result;
}

function paletteValues(palette) {
  return new Set(
    Object.entries(palette)
      .filter(([name, value]) => name !== "dark" && name !== "light")
      .map(([, value]) => value.toLowerCase()),
  );
}

function validateFactory(file, colors, expectedKeys) {
  const factory = require(path.join(root, file));
  const value = factory(colors);
  const missing = expectedKeys.filter((key) => !(key in value));
  if (missing.length) {
    throw new Error(`${file}: faltan propiedades ${missing.join(", ")}`);
  }
  return value;
}

function validateNoHexLiterals(file) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const literals = source.match(invalidHexPattern) || [];
  if (literals.length) {
    throw new Error(
      `${file}: contiene literales hexadecimales ${literals.join(", ")}`,
    );
  }
}

function languageFiles(themeType) {
  return fs
    .readdirSync(languageDir)
    .filter((file) => {
      if (!file.endsWith(".js")) return false;
      if (/_dark\.js$|_dark_base\.js$/.test(file)) return themeType === "dark";
      if (/_light\.js$|_light_base\.js$/.test(file))
        return themeType === "light";
      throw new Error(
        `Archivo de lenguaje no clasificable: src/languages/${file}`,
      );
    })
    .sort();
}

function validateLanguageFactories(themeType, palette) {
  const files = languageFiles(themeType);
  if (!files.length)
    throw new Error(`No hay archivos de lenguaje para ${themeType}`);

  files.forEach((file) => {
    const value = validateFactory(
      path.join("src", "languages", file),
      palette,
      ["tokenColors"],
    );
    validateNoHexLiterals(path.join("src", "languages", file));
    if (!Array.isArray(value.tokenColors)) {
      throw new Error(`${file}: tokenColors debe ser un array`);
    }
  });
}

const darkColors = paletteValues(darkPalette);
const lightColors = paletteValues(lightPalette);
const darkUi = validateFactory("src/ui_dark.js", darkPalette, [
  "name",
  "type",
  "colors",
]);
const lightUi = validateFactory("src/ui_light.js", lightPalette, [
  "name",
  "type",
  "colors",
]);
validateLanguageFactories("dark", darkPalette);
validateLanguageFactories("light", lightPalette);

const activeFiles = ["src/ui_dark.js", "src/ui_light.js"];
activeFiles.forEach(validateNoHexLiterals);

const generated = ["themes/esmerald.json", "themes/esmerald-light.json"];

for (const file of generated) {
  const output = JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
  const used = collectValues(output);
  const colors = file.includes("light") ? lightColors : darkColors;
  const missing = [...new Set(used)].filter((color) => !colors.has(color));
  if (missing.length) {
    throw new Error(
      `${file}: colores ausentes en su paleta: ${missing.join(", ")}`,
    );
  }
  if (!output.colors || !output.tokenColors || !output.semanticTokenColors) {
    throw new Error(`${file}: estructura de tema incompleta`);
  }
}

const examples = [
  [darkPalette, "blanco", "#ffffff"],
  [darkPalette, "verdeClaroSuave", "#a7c075"],
  [darkPalette, "verdeClaroBrillante", "#ccfa97"],
];
for (const [palette, name, value] of examples) {
  if (palette[name] !== value) {
    throw new Error(`${name} debe conservar ${value}`);
  }
}

console.log(
  `OK: ${darkColors.size} colores oscuros y ${lightColors.size} claros exportados y usados.`,
);
