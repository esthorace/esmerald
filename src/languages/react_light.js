module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.tag.begin.js.jsx",
          "punctuation.definition.tag.end.js.jsx",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: ["keyword.operator.logical.js.jsx"],
        settings: {
          foreground: colors.text_violet_dark,
        },
      },
      {
        scope: ["meta.jsx.children.js.jsx"],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
  };
};
