module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["punctuation.terminator.statement"],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "meta.arrow.js meta.block.js meta.brace.round.js",
          "meta.function.js meta.block.js meta.brace.round.js",
          "meta.function.js meta.parameters.js punctuation.definition.parameters.begin.js",
          "meta.function.js meta.parameters.js punctuation.definition.parameters.end.js",
          "storage.type.function.arrow.js",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "punctuation.definition.string.template.begin.js",
          "punctuation.definition.string.template.end.js",
          "string.quoted.double.js punctuation.definition.string.begin.js",
          "string.quoted.double.js punctuation.definition.string.end.js",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "keyword.operator.expression.of.js",
          "keyword.operator.new.js",
          "meta.function.js meta.block.js meta.block.js meta.var.expr.js keyword.control.flow.js",
          "meta.var.expr.js storage.type",
          "storage.modifier.async.js",
          "storage.type.function.js",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          foreground: colors.text_red,
          fontStyle: "italic",
        },
      },
      {
        scope: ["punctuation.accessor.js"],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "keyword.operator.arithmetic.js",
          "keyword.operator.comparison.js",
          "keyword.operator.logical.js",
          "keyword.operator.spread.js",
          "keyword.operator.ternary.js",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: [
          "entity.name.type.module.js",
          "meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js",
          "meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js",
          "meta.brace.square.js",
          "meta.objectliteral.js punctuation.definition.block.js",
        ],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
    semanticTokenColors: {
      "variable.defaultLibrary:javascript": colors.text_turquoise,
      "namespace:javascript": colors.text_white_light,
    },
  };
};
