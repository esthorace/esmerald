module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "meta.method.declaration.ts",
          "meta.parameters.ts",
          "punctuation.definition.parameters.begin.ts",
          "punctuation.definition.parameters.end.ts",
        ],
        settings: {
          foreground: colors.text_blue,
          fontStyle: "",
        },
      },
      {
        scope: [
          "comment.block.documentation.ts storage.type.class.jsdoc",
          "comment.block.documentation.ts variable.other.jsdoc",
          "meta.method.declaration.ts",
          "meta.parameters.ts",
        ],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "comment.block.documentation.ts entity.name.type.instance.jsdoc",
          "comment.block.documentation.ts storage.type.class.jsdoc",
          "comment.block.documentation.ts variable.other.jsdoc",
        ],
        settings: {
          foreground: colors.text_blue_dark,
          fontStyle: "none",
        },
      },
      {
        scope: ["punctuation.terminator.statement.ts"],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "meta.arrow.js meta.parameters.js punctuation.definition.parameters.begin.ts",
          "meta.arrow.js meta.parameters.js punctuation.definition.parameters.end.ts",
          "meta.arrow.ts meta.block.ts meta.brace.round.ts",
          "meta.function.ts meta.block.ts meta.brace.round.ts",
          "meta.function.ts meta.parameters.ts punctuation.definition.parameters.begin.ts",
          "meta.function.ts meta.parameters.ts punctuation.definition.parameters.end.ts",
          "storage.type.function.arrow.ts",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "punctuation.definition.string.template.begin.ts",
          "punctuation.definition.string.template.end.ts",
          "string.quoted.double.ts punctuation.definition.string.begin.ts",
          "string.quoted.double.ts punctuation.definition.string.end.ts",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "keyword.operator.expression.delete.ts",
          "keyword.operator.expression.in.ts",
          "keyword.operator.expression.instanceof.ts",
          "keyword.operator.expression.of.ts",
          "keyword.operator.expression.typeof.ts",
          "keyword.operator.expression.void.ts",
          "keyword.operator.new.ts",
          "meta.class.ts storage.modifier.ts",
          "meta.function.ts meta.block.ts meta.block.ts meta.var.expr.ts keyword.control.flow.ts",
          "meta.var.expr.ts storage.type",
          "storage.modifier.async.ts",
          "storage.modifier.ts",
          "storage.type.function.ts",
          "variable.language.super.ts",
          "variable.language.this.ts",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "source.ts constant.other.object.key.ts string.unquoted.label.ts",
        ],
        settings: {
          foreground: colors.text_red,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "keyword.operator.type.annotation.ts",
          "punctuation.accessor.optional.ts",
          "punctuation.accessor.ts",
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
          foreground: colors.text_violet,
        },
      },
      {
        scope: [
          "comment.block.documentation.ts punctuation.definition.comment.ts",
        ],
        settings: {
          foreground: colors.text_violet_deep,
        },
      },
      {
        scope: ["comment.block.documentation.ts"],
        settings: {
          foreground: colors.text_violet_deep_2,
        },
      },
      {
        scope: [
          "constant.language.boolean.false.ts",
          "constant.language.boolean.true.ts",
          "constant.language.null.ts",
          "constant.language.undefined.false.ts",
          "constant.numeric.decimal.ts",
          "keyword.operator.arithmetic.ts",
          "keyword.operator.comparison.ts",
          "keyword.operator.increment.ts",
          "keyword.operator.logical.ts",
          "keyword.operator.spread.ts",
          "keyword.operator.ternary.ts",
          "punctuation.terminator.statement.ts",
          "storage.type.numeric.bigint.ts",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: [
          "entity.name.type.module.ts",
          "meta.arrow.ts meta.parameters.ts punctuation.definition.parameters.begin.ts",
          "meta.arrow.ts meta.parameters.ts punctuation.definition.parameters.end.ts",
          "meta.brace.square.ts",
          "meta.objectliteral.ts punctuation.definition.block.ts",
        ],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
    semanticTokenColors: {
      "enumMember:typescript": colors.text_blue,
      "interface:typescript": colors.text_violet,
      "namespace:typescript": colors.text_white_light,
      "parameter.declaration:typescript": colors.text_blue_dark,
      "type:typescript": colors.text_violet,
      "typeParameter:typescript": colors.text_violet,
      "variable.declaration.readonly:typescript": colors.text_blue,
      "variable.readonly:typescript": colors.text_blue,
      "variable.defaultLibrary:typescript": colors.text_turquoise,
    },
  };
};
