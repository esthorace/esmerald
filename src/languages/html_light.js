module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html",
          "punctuation.separator.key-value.html",
          "string.quoted.double.html",
        ],
        settings: {
          foreground: colors.azulCodigo,
        },
      },
      {
        scope: ["entity.other.attribute-name.html"],
        settings: {
          foreground: colors.naranjaMedioVivo6,
        },
      },
      {
        scope: ["text.html.derivative"],
        settings: {
          foreground: colors.negro,
        },
      },
      {
        scope: [
          "entity.name.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
        ],
        settings: {
          foreground: colors.rojoMedioBrillante4,
        },
      },
    ],
  };
};
