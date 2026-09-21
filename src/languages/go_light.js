module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["constant.character.escape.go"],
        settings: {
          foreground: colors.amarilloMedioVivo,
        },
      },
      {
        scope: [
          "storage.type.boolean.go",
          "storage.type.byte.go",
          "storage.type.chan.go",
          "storage.type.const.go",
          "storage.type.error.go",
          "storage.type.func.go",
          "storage.type.interface.go",
          "storage.type.map.go",
          "storage.type.numeric.go",
          "storage.type.rune.go",
          "storage.type.string.go",
          "storage.type.struct.go",
          "storage.type.type.go",
          "storage.type.uintptr.go",
          "storage.type.var.go",
        ],
        settings: {
          foreground: colors.azulMedioBrillante3,
        },
      },
      {
        scope: [
          "entity.name.type.go",
          "storage.type.boolean.go",
          "storage.type.byte.go",
          "storage.type.error.go",
          "storage.type.numeric.go",
          "storage.type.rune.go",
          "storage.type.string.go",
          "storage.type.uintptr.go",
        ],
        settings: {
          foreground: colors.azulMedioBrillante5,
        },
      },
      {
        scope: ["constant.language.boolean.go", "constant.numeric.decimal.go"],
        settings: {
          foreground: colors.azulMedioBrillante9,
        },
      },
      {
        scope: [
          "entity.name.function.support.builtin.go",
          "entity.name.function.support.go",
        ],
        settings: {
          foreground: colors.azulMedioVivo9,
        },
      },
      {
        scope: [
          "punctuation.definition.begin.bracket.curly.go",
          "punctuation.definition.begin.bracket.round.go",
          "punctuation.definition.end.bracket.curly.go",
          "punctuation.definition.end.bracket.round.go",
          "punctuation.other.comma.go",
          "punctuation.other.period.go",
        ],
        settings: {
          foreground: colors.naranjaMedioSuave,
        },
      },
      {
        scope: ["entity.name.type.package.go"],
        settings: {
          foreground: colors.negro,
          fontStyle: "bold",
        },
      },
      {
        scope: ["keyword.control.go"],
        settings: {
          foreground: colors.rojoMedioBrillante4,
        },
      },
      {
        scope: ["keyword.operator.address.go"],
        settings: {
          foreground: colors.turquesaMedioBrillante2,
        },
      },
      {
        scope: ["entity.name.import.go"],
        settings: {
          foreground: colors.verdeOscuroBrillante2,
        },
      },
      {
        scope: ["constant.other.placeholder.go"],
        settings: {
          foreground: colors.violetaMedioSuave,
        },
      },
      {
        scope: [
          "keyword.operator.arithmetic.go",
          "keyword.operator.comparison.go",
          "keyword.operator.increment.go",
        ],
        settings: {
          foreground: colors.violetaMedioVivo3,
        },
      },
    ],
  };
};
