module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["text.html.derivative"],
        settings: {
          foreground: colors.text_black_dark,
        },
      },
      {
        scope: ["entity.other.attribute-name.html"],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html",
        ],
        settings: {
          foreground: colors.text_blue_light_ultra,
        },
      },
      {
        scope: [
          "punctuation.definition.string",
          "punctuation.separator.key-value.html",
          "string.quoted.double.html",
        ],
        settings: {
          foreground: colors.text_blue_medium,
        },
      },
      {
        scope: ["entity.name.tag.html"],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: [
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
        ],
        settings: {
          foreground: colors.text_red_light,
        },
      },
    ],
  };
};
