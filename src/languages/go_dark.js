module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["variable.other.property.go"],
        settings: {
          foreground: colors.azulMedioBrillante11,
        },
      },
      {
        scope: [
          "constant.language.boolean.go",
          "source.go keyword.operator.assignment",
        ],
        settings: {
          foreground: colors.blanco,
        },
      },
      {
        scope: ["entity.name.type.package.go"],
        settings: {
          foreground: colors.blanco,
          fontStyle: "",
        },
      },
      {
        scope: ["constant.numeric.decimal.go"],
        settings: {
          foreground: colors.rojoClaroBrillante2,
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
          foreground: colors.rojoMedioBrillante,
        },
      },
      {
        scope: ["keyword.operator.comparison.go"],
        settings: {
          foreground: colors.textoSecundario,
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
          foreground: colors.turquesaMedioBrillante3,
        },
      },
      {
        scope: ["entity.name.import.go"],
        settings: {
          foreground: colors.verdeMedioBrillante9,
          fontStyle: "italic",
        },
      },
      {
        scope: ["keyword.control.go", "keyword.operator.address.go"],
        settings: {
          foreground: colors.violetaClaroBrillante2,
        },
      },
    ],
  };
};
