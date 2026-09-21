module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["invalid.deprecated.entity.other.attribute-name.html"],
        settings: {
          foreground: colors.azulClaroBrillante,
          fontStyle: "strikethrough",
        },
      },
      {
        scope: [
          "text.html.derivative string.quoted.double.html",
          "text.html.jinja punctuation.definition.string",
          "text.html.jinja string.quoted.double.html",
        ],
        settings: {
          foreground: colors.azulCodigo,
        },
      },
      {
        scope: ["comment.block.html", "punctuation.definition.comment.html"],
        settings: {
          foreground: colors.azulMedioVivo12,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "punctuation.separator.key-value.html",
          "text.html.derivative punctuation.definition.string",
        ],
        settings: {
          foreground: colors.azulMedioVivo3,
        },
      },
      {
        scope: ["text.html.derivative", "text.html.jinja"],
        settings: {
          foreground: colors.blanco,
        },
      },
      {
        scope: [
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
        ],
        settings: {
          foreground: colors.rojoMedioVivo,
        },
      },
    ],
  };
};
