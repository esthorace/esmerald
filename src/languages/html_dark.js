module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
        ],
        settings: {
          foreground: colors.rojoMedioVivo,
        },
      },
      {
        scope: [
          "text.html.derivative string.quoted.double.html",
          "text.html.jinja punctuation.definition.string",
          "text.html.jinja string.quoted.double.html",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "punctuation.separator.key-value.html",
          "text.html.derivative punctuation.definition.string",
        ],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: ["invalid.deprecated.entity.other.attribute-name.html"],
        settings: {
          foreground: colors.text_blue_light,
          fontStyle: "strikethrough",
        },
      },
      {
        scope: ["comment.block.html", "punctuation.definition.comment.html"],
        settings: {
          foreground: colors.text_violet_deep,
          fontStyle: "italic",
        },
      },
      {
        scope: ["text.html.derivative", "text.html.jinja"],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
  };
};
