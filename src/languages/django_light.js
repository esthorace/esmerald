module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "keyword.control.django",
          "keyword.operator.argument.django",
          "keyword.operator.filter.django",
          "support.function.django",
          "support.type.tag.begin.django",
          "support.type.tag.end.django",
          "support.type.variable.begin.django",
          "support.type.variable.end.django",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "keyword.operator.assignment.django",
          "meta.tag.structure.django",
          "meta.variable.structure.django",
          "variable.other.django",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
    ],
  };
};
