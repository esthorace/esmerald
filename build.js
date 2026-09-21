const fs = require("fs");
const path = require("path");

const darkPalette = require("./src/dark_palette");
const lightPalette = require("./src/light_palette");

function loadFactory(fileName, colors) {
  return require(path.join(__dirname, fileName))(colors);
}

function buildTheme(themeName, themeType, uiFile, languageFile, colors) {
  return {
    name: themeName,
    type: themeType,
    semanticHighlighting: true,
    ...loadFactory(uiFile, colors),
    ...loadFactory(languageFile, colors),
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
    buildTheme(
      "Esmerald",
      "dark",
      "src/ui_dark.js",
      "src/languages/_dark_base.js",
      darkPalette,
    ),
    null,
    2,
  ),
);

fs.writeFileSync(
  path.join(outputDir, "esmerald-light.json"),
  JSON.stringify(
    buildTheme(
      "Esmerald Light",
      "light",
      "src/ui_light.js",
      "src/languages/_light_base.js",
      lightPalette,
    ),
    null,
    2,
  ),
);

console.log(
  "✅ Temas compilados con tokenColors y semanticTokenColors unificados.",
);
