module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "constant.numeric.decimal.js",
          "keyword.control.anchor.regexp",
          "keyword.operator.arithmetic.js",
          "keyword.operator.logical.js",
          "keyword.operator.ternary.js",
          "meta.definition.variable.js",
          "storage.type.numeric.bigint.js",
          "variable.other.constant.object.js",
          "variable.other.readwrite.js",
        ],
        settings: {
          foreground: colors.text_black_light,
        },
      },
      {
        scope: [
          "comment.block.documentation.js storage.type.class.jsdoc",
          "comment.block.documentation.js variable.other.jsdoc",
          "punctuation.terminator.statement.js",
        ],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "entity.name.function.js",
          "entity.name.type.class.js",
          "entity.other.inherited-class.js",
          "new.expr.js meta.brace.round.js",
          "punctuation.definition.parameters.begin.js",
          "punctuation.definition.parameters.end.js",
          "variable.other.object.js",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: ["variable.other.property.js", "variable.parameter.js"],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "punctuation.definition.string.template.begin.js",
          "punctuation.definition.string.template.end.js",
        ],
        settings: {
          foreground: colors.text_green_light,
        },
      },
      {
        scope: [
          "keyword.operator.expression.delete.js",
          "keyword.operator.expression.in.js",
          "keyword.operator.expression.instanceof.js",
          "keyword.operator.expression.typeof.js",
          "keyword.operator.expression.void.js",
          "keyword.operator.new.js",
          "meta.class.js storage.modifier.js",
          "storage.modifier.async.js",
          "variable.language.super.js",
          "variable.language.this.js",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: ["variable.language.this.js"],
        settings: {
          foreground: colors.text_red_light,
        },
      },
      {
        scope: [
          "punctuation.accessor.optional.js",
          "punctuation.definition.template-expression.begin.js",
          "punctuation.definition.template-expression.end.js",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: ["entity.name.type.js"],
        settings: {
          foreground: colors.text_violet_dark,
        },
      },
      {
        scope: [
          "comment.block.documentation.js punctuation.definition.comment.js",
        ],
        settings: {
          foreground: colors.text_violet_light,
        },
      },
      {
        scope: ["comment.block.documentation.js"],
        settings: {
          foreground: colors.text_violet_medium,
        },
      },
    ],
    semanticTokenColors: {
      "parameter.declaration:javascript": colors.text_blue_deep,
      "variable:javascript": colors.text_blue_deep,
    },
  };
};
