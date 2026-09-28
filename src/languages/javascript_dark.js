module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.parameters.begin.js",
          "punctuation.definition.parameters.end.js",
        ],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "comment.block.documentation.js entity.name.type.instance.jsdoc",
          "comment.block.documentation.js storage.type.class.jsdoc",
          "comment.block.documentation.js variable.other.jsdoc",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: ["punctuation.terminator.statement"],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "meta.arrow.js meta.block.js meta.brace.round.js",
          "meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.js",
          "meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.js",
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
          "keyword.operator.expression.delete.js",
          "keyword.operator.expression.in.js",
          "keyword.operator.expression.instanceof.js",
          "keyword.operator.expression.of.js",
          "keyword.operator.expression.typeof.js",
          "keyword.operator.expression.void.js",
          "keyword.operator.new.js",
          "meta.class.js storage.modifier.js",
          "meta.function.js meta.block.js meta.block.js meta.var.expr.js keyword.control.flow.js",
          "meta.var.expr.js storage.type",
          "storage.modifier.async.js",
          "storage.modifier.js",
          "storage.type.function.js",
          "variable.language.super.js",
          "variable.language.this.js",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "constant.language.boolean.false.js",
          "constant.language.boolean.true.js",
          "constant.language.null.js",
          "constant.language.undefined.false.js",
          "constant.language.undefined.js",
          "constant.numeric.decimal.js",
          "keyword.operator.arithmetic.js",
          "keyword.operator.comparison.js",
          "keyword.operator.increment.js",
          "keyword.operator.logical.js",
          "keyword.operator.spread.js",
          "keyword.operator.ternary.js",
          "punctuation.terminator.statement.js",
          "storage.type.numeric.bigint.js",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
    ],
    semanticTokenColors: {
      "enumMember:javascript": colors.text_blue,
      "interface:javascript": colors.text_violet,
      "namespace:javascript": colors.text_white_light,
      "parameter.declaration:javascript": colors.text_blue_dark,
      "type:javascript": colors.text_violet,
      "typeParameter:javascript": colors.text_violet,
      "variable.declaration.readonly:javascript": colors.text_blue,
      "variable.readonly:javascript": colors.text_blue,
      "variable.defaultLibrary:javascript": colors.text_turquoise,
    },
  };
};
