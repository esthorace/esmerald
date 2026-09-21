module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "meta.function.js meta.block.js meta.block.js meta.var.expr.js keyword.control.flow.js",
          "storage.modifier.async.js",
        ],
        settings: {
          foreground: colors.rojoClaroBrillante3,
        },
      },
      {
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          foreground: colors.rojoClaroBrillante3,
          fontStyle: "italic",
        },
      },
      {
        scope: ["punctuation.accessor.js"],
        settings: {
          foreground: colors.turquesaMedioBrillante3,
        },
      },
    ],
    semanticTokenColors: {
      "variable.defaultLibrary:javascript": colors.turquesaMedioBrillante3,
    },
  };
};
