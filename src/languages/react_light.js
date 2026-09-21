module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["entity.name.tag.js.jsx"],
        settings: {
          foreground: colors.rojoMedioBrillante10,
        },
      },
    ],
  };
};
