module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["support.variable.js"],
        settings: {
          foreground: colors.textoPrincipal,
        },
      },
    ],
  };
};
