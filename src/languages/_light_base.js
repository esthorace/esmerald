module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["keyword.operator.assignment"],
        settings: {
          foreground: colors.text_black_dark,
        },
      },
      {
        scope: ["variable"],
        settings: {
          foreground: colors.text_black_light,
        },
      },
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: colors.text_gray,
          fontStyle: "italic",
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: ["punctuation.definition.string"],
        settings: {
          foreground: colors.text_green_light,
        },
      },
      {
        scope: [
          "keyword.control",
          "keyword.function",
          "keyword.type",
          "storage.type",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
    ],
  };
};
