module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "constant.numeric.decimal.ts",
          "keyword.control.anchor.regexp",
          "keyword.operator.arithmetic.ts",
          "keyword.operator.logical.ts",
          "keyword.operator.ternary.ts",
          "meta.definition.variable.ts",
          "storage.type.numeric.bigint.ts",
          "variable.other.constant.object.ts",
          "variable.other.readwrite.ts",
        ],
        settings: {
          foreground: colors.text_black_light,
        },
      },
      {
        scope: [
          "comment.block.documentation.ts storage.type.class.jsdoc",
          "comment.block.documentation.ts variable.other.jsdoc",
          "punctuation.terminator.statement.ts",
        ],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "entity.name.function.ts",
          "entity.name.type.class.ts",
          "entity.other.inherited-class.ts",
          "new.expr.ts meta.brace.round.ts",
          "punctuation.definition.parameters.begin.ts",
          "punctuation.definition.parameters.end.ts",
          "variable.other.object.ts",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "variable.object.property.ts",
          "variable.other.property.ts",
          "variable.parameter.ts",
        ],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "punctuation.definition.string.template.begin.ts",
          "punctuation.definition.string.template.end.ts",
        ],
        settings: {
          foreground: colors.text_green_light,
        },
      },
      {
        scope: [
          "keyword.operator.expression.delete.ts",
          "keyword.operator.expression.in.ts",
          "keyword.operator.expression.instanceof.ts",
          "keyword.operator.expression.typeof.ts",
          "keyword.operator.expression.void.ts",
          "keyword.operator.new.ts",
          "meta.class.ts storage.modifier.ts",
          "storage.modifier.async.ts",
          "storage.modifier.ts",
          "variable.language.super.ts",
          "variable.language.this.ts",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: ["variable.language.this.ts"],
        settings: {
          foreground: colors.text_red_light,
        },
      },
      {
        scope: [
          "keyword.operator.type.annotation.ts",
          "punctuation.accessor.optional.ts",
          "punctuation.definition.template-expression.begin.ts",
          "punctuation.definition.template-expression.end.ts",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "entity.name.type.alias.ts",
          "entity.name.type.enum.ts",
          "entity.name.type.interface.ts",
          "entity.name.type.ts",
          "support.type.primitive.ts",
        ],
        settings: {
          foreground: colors.text_violet_dark,
        },
      },
      {
        scope: [
          "comment.block.documentation.ts punctuation.definition.comment.ts",
        ],
        settings: {
          foreground: colors.text_violet_light,
        },
      },
      {
        scope: ["comment.block.documentation.ts"],
        settings: {
          foreground: colors.text_violet_medium,
        },
      },
    ],
    semanticTokenColors: {
      "enumMember:typescript": colors.text_blue_light,
      "interface:typescript": colors.text_violet_dark,
      "parameter.declaration:typescript": colors.text_blue_deep,
      "type:typescript": colors.text_violet_dark,
      "typeParameter:typescript": colors.text_violet_dark,
      "variable:typescript": colors.text_blue_light,
    },
  };
};
