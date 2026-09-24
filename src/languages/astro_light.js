module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.string.begin.astro",
          "punctuation.definition.string.end.astro",
          "punctuation.separator.key-value.astro",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: ["source.astro meta.embedded.expression.astro", "text.astro"],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
  };
};
