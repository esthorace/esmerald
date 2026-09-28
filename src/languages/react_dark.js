module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.tag.begin.js.jsx",
          "punctuation.definition.tag.end.js.jsx",
        ],
        settings: {
          foreground: colors.rojoMedioVivo,
        },
      },
      {
        scope: [
          "entity.other.attribute-name.jsx",
          "meta.embedded.expression.jsx entity.name.function.jsx",
          "meta.embedded.expression.jsx entity.name.type.class.jsx",
          "meta.embedded.expression.jsx entity.other.inherited-class.jsx",
          "meta.embedded.expression.jsx new.expr.jsx meta.brace.round.jsx",
          "meta.embedded.expression.jsx punctuation.definition.parameters.begin.jsx",
          "meta.embedded.expression.jsx punctuation.definition.parameters.end.jsx",
          "meta.embedded.expression.jsx variable.other.object.jsx",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx punctuation.terminator.statement.jsx",
          "meta.tag.attributes.js.jsx string.quoted.double.js.jsx punctuation.definition.string.begin.js.jsx",
          "meta.tag.attributes.js.jsx string.quoted.double.js.jsx punctuation.definition.string.end.js.jsx",
          "punctuation.separator.key-value.jsx",
          "string.quoted.double.js.jsx",
          "string.quoted.single.js.jsx",
        ],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "punctuation.definition.string.begin.jsx",
          "punctuation.definition.string.end.jsx",
        ],
        settings: {
          foreground: colors.text_blue_light,
        },
      },
      {
        scope: ["invalid.deprecated.entity.other.attribute-name.jsx"],
        settings: {
          foreground: colors.text_blue_light,
          fontStyle: "strikethrough",
        },
      },
      {
        scope: [
          "entity.name.tag.component.jsx",
          "meta.embedded.expression.jsx meta.arrow.jsx meta.block.jsx meta.brace.round.jsx",
          "meta.embedded.expression.jsx meta.arrow.jsx meta.parameters.jsx punctuation.definition.parameters.begin.jsx",
          "meta.embedded.expression.jsx meta.arrow.jsx meta.parameters.jsx punctuation.definition.parameters.end.jsx",
          "meta.embedded.expression.jsx meta.function.jsx meta.block.jsx meta.brace.round.jsx",
          "meta.embedded.expression.jsx meta.function.jsx meta.parameters.jsx punctuation.definition.parameters.begin.jsx",
          "meta.embedded.expression.jsx meta.function.jsx meta.parameters.jsx punctuation.definition.parameters.end.jsx",
          "meta.embedded.expression.jsx storage.type.function.arrow.jsx",
          "support.class.component.jsx",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx punctuation.definition.string.template.begin.jsx",
          "meta.embedded.expression.jsx punctuation.definition.string.template.end.jsx",
          "meta.embedded.expression.jsx punctuation.definition.template-expression.begin.jsx",
          "meta.embedded.expression.jsx punctuation.definition.template-expression.end.jsx",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx keyword.operator.expression.delete.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.in.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.instanceof.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.of.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.typeof.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.void.jsx",
          "meta.embedded.expression.jsx keyword.operator.new.jsx",
          "meta.embedded.expression.jsx meta.class.jsx storage.modifier.jsx",
          "meta.embedded.expression.jsx meta.var.expr.jsx storage.type",
          "meta.embedded.expression.jsx storage.modifier.async.jsx",
          "meta.embedded.expression.jsx storage.modifier.jsx",
          "meta.embedded.expression.jsx storage.type.function.jsx",
          "meta.embedded.expression.jsx variable.language.super.jsx",
          "meta.embedded.expression.jsx variable.language.this.jsx",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx keyword.operator.type.annotation.jsx",
          "meta.embedded.expression.jsx punctuation.accessor.jsx",
          "meta.embedded.expression.jsx punctuation.accessor.optional.jsx",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx entity.name.type.alias.jsx",
          "meta.embedded.expression.jsx entity.name.type.enum.jsx",
          "meta.embedded.expression.jsx entity.name.type.interface.jsx",
          "meta.embedded.expression.jsx entity.name.type.jsx",
          "meta.embedded.expression.jsx support.type.primitive.jsx",
        ],
        settings: {
          foreground: colors.text_violet,
        },
      },
      {
        scope: ["comment.block.jsx", "punctuation.definition.comment.jsx"],
        settings: {
          foreground: colors.text_violet_deep,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx constant.language.boolean.false.jsx",
          "meta.embedded.expression.jsx constant.language.boolean.true.jsx",
          "meta.embedded.expression.jsx constant.language.null.jsx",
          "meta.embedded.expression.jsx constant.language.undefined.jsx",
          "meta.embedded.expression.jsx constant.numeric.decimal.jsx",
          "meta.embedded.expression.jsx keyword.operator.arithmetic.jsx",
          "meta.embedded.expression.jsx keyword.operator.comparison.jsx",
          "meta.embedded.expression.jsx keyword.operator.logical.jsx",
          "meta.embedded.expression.jsx keyword.operator.spread.jsx",
          "meta.embedded.expression.jsx keyword.operator.ternary.jsx",
          "meta.embedded.expression.jsx storage.type.numeric.bigint.jsx",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: [
          "entity.name.tag.jsx",
          "meta.jsx.children.jsx",
          "text.html.jsx",
          "text.jsx",
        ],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
    semanticTokenColors: {
      "variable.defaultLibrary:javascriptreact": colors.text_turquoise,
      "variable.defaultLibrary:typescriptreact": colors.text_turquoise,
      "class:javascriptreact": colors.text_violet,
      "class:typescriptreact": colors.text_violet,
      "interface:javascriptreact": colors.text_violet,
      "interface:typescriptreact": colors.text_violet,
      "type:javascriptreact": colors.text_violet,
      "type:typescriptreact": colors.text_violet,
      "enumMember:javascriptreact": colors.text_blue,
      "enumMember:typescriptreact": colors.text_blue,
      "namespace:javascriptreact": colors.text_white_light,
      "namespace:typescriptreact": colors.text_white_light,
      "parameter.declaration:javascriptreact": colors.text_blue_dark,
      "parameter.declaration:typescriptreact": colors.text_blue_dark,
      "variable.declaration.readonly:javascriptreact": colors.text_blue,
      "variable.declaration.readonly:typescriptreact": colors.text_blue,
      "variable.readonly:javascriptreact": colors.text_blue,
      "variable.readonly:typescriptreact": colors.text_blue,
    },
  };
};
