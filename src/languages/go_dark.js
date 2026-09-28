module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.string.begin.go",
          "punctuation.definition.string.end.go",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "keyword.channel.go",
          "keyword.const.go",
          "keyword.control.conditional.go",
          "keyword.control.defer.go",
          "keyword.control.go",
          "keyword.control.go.go",
          "keyword.control.import.go",
          "keyword.control.repeat.go",
          "keyword.control.statement.go",
          "keyword.function.go",
          "keyword.import.go",
          "keyword.interface.go",
          "keyword.map.go",
          "keyword.package.go",
          "keyword.struct.go",
          "keyword.type.go",
          "keyword.var.go",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: ["entity.name.type.go", "keyword.operator.address.go"],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "entity.name.type.any.go",
          "storage.type.boolean.go",
          "storage.type.numeric.go",
          "storage.type.string.go",
        ],
        settings: {
          foreground: colors.text_violet,
        },
      },
      {
        scope: [
          "constant.language.boolean.go",
          "constant.language.null.go",
          "constant.numeric.decimal.go",
          "keyword.operator.arithmetic.go",
          "keyword.operator.logical.go",
          "punctuation.definition.begin.bracket.curly.go",
          "punctuation.definition.begin.bracket.round.go",
          "punctuation.definition.end.bracket.curly.go",
          "punctuation.definition.end.bracket.round.go",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: ["entity.name.type.package.go", "keyword.operator.channel.go"],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
  };
};
