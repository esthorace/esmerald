module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["constant.numeric.decimal.go"],
        settings: {
          foreground: colors.rojoClaroBrillante2,
        },
      },
      {
        scope: ["variable.other.property.go"],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "keyword.control.import.go",
          "keyword.map.go",
          "keyword.package.go",
          "keyword.struct.go",
          "keyword.type.go",
          "keyword.var.go",
          "source.go keyword.function",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "punctuation.definition.begin.bracket.curly.go",
          "punctuation.definition.begin.bracket.round.go",
          "punctuation.definition.end.bracket.curly.go",
          "punctuation.definition.end.bracket.round.go",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: ["keyword.control.go", "keyword.operator.address.go"],
        settings: {
          foreground: colors.text_violet,
        },
      },
      {
        scope: ["keyword.operator.comparison.go"],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: [
          "constant.language.boolean.go",
          "source.go keyword.operator.assignment",
        ],
        settings: {
          foreground: colors.text_white_light,
        },
      },
      {
        scope: ["entity.name.type.package.go"],
        settings: {
          foreground: colors.text_white_light,
          fontStyle: "",
        },
      },
      {
        scope: ["entity.name.import.go"],
        settings: {
          foreground: colors.verdeMedioBrillante9,
          fontStyle: "italic",
        },
      },
    ],
  };
};
