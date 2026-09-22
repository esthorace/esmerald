module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.string.begin.html source.css",
          "punctuation.definition.string.end.html source.css",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: ["source.css"],
        settings: {
          foreground: colors.violetaEnlace,
        },
      },
    ],
  };
};
