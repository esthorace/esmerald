module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["meta.jsx.children.js.jsx"],
        settings: {
          foreground: colors.blanco,
        },
      },
      {
        scope: [
          "punctuation.definition.tag.begin.js.jsx",
          "punctuation.definition.tag.end.js.jsx",
        ],
        settings: {
          foreground: colors.rojoMedioVivo,
        },
      },
      {
        scope: ["keyword.operator.logical.js.jsx"],
        settings: {
          foreground: colors.violetaClaroBrillante2,
        },
      },
    ],
  };
};
