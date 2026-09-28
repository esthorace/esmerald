module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["meta.jsx.children.jsx", "text.html.jsx", "text.jsx"],
        settings: {
          foreground: colors.text_black_dark,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx constant.numeric.decimal.jsx",
          "meta.embedded.expression.jsx keyword.control.anchor.regexp",
          "meta.embedded.expression.jsx keyword.operator.arithmetic.jsx",
          "meta.embedded.expression.jsx keyword.operator.logical.jsx",
          "meta.embedded.expression.jsx keyword.operator.ternary.jsx",
          "meta.embedded.expression.jsx meta.definition.variable.jsx",
          "meta.embedded.expression.jsx storage.type.numeric.bigint.jsx",
          "meta.embedded.expression.jsx variable.other.constant.object.jsx",
          "meta.embedded.expression.jsx variable.other.readwrite.jsx",
        ],
        settings: {
          foreground: colors.text_black_light,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx comment.block.documentation.jsx storage.type.class.jsdoc",
          "meta.embedded.expression.jsx comment.block.documentation.jsx variable.other.jsdoc",
          "meta.embedded.expression.jsx punctuation.terminator.statement.jsx",
        ],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
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
          "entity.other.attribute-name.jsx",
          "meta.embedded.expression.jsx variable.object.property.jsx",
          "meta.embedded.expression.jsx variable.other.property.jsx",
          "meta.embedded.expression.jsx variable.parameter.jsx",
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
          foreground: colors.text_blue_light_ultra,
        },
      },
      {
        scope: [
          "punctuation.definition.string.jsx",
          "punctuation.separator.key-value.jsx",
          "string.quoted.double.jsx",
          "string.quoted.single.jsx",
        ],
        settings: {
          foreground: colors.text_blue_medium,
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
        ],
        settings: {
          foreground: colors.text_green_light,
        },
      },
      {
        scope: [
          "entity.name.tag.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.delete.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.in.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.instanceof.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.typeof.jsx",
          "meta.embedded.expression.jsx keyword.operator.expression.void.jsx",
          "meta.embedded.expression.jsx keyword.operator.new.jsx",
          "meta.embedded.expression.jsx meta.class.jsx storage.modifier.jsx",
          "meta.embedded.expression.jsx storage.modifier.async.jsx",
          "meta.embedded.expression.jsx storage.modifier.jsx",
          "meta.embedded.expression.jsx variable.language.super.jsx",
          "meta.embedded.expression.jsx variable.language.this.jsx",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx variable.language.this.jsx",
          "punctuation.definition.tag.begin.jsx",
          "punctuation.definition.tag.end.jsx",
        ],
        settings: {
          foreground: colors.text_red_light,
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx keyword.operator.type.annotation.jsx",
          "meta.embedded.expression.jsx punctuation.accessor.optional.jsx",
          "meta.embedded.expression.jsx punctuation.definition.template-expression.begin.jsx",
          "meta.embedded.expression.jsx punctuation.definition.template-expression.end.jsx",
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
          foreground: colors.text_violet_dark,
        },
      },
      {
        scope: ["invalid.deprecated.entity.other.attribute-name.jsx"],
        settings: {
          foreground: colors.text_violet_light,
          fontStyle: "strikethrough",
        },
      },
      {
        scope: ["comment.block.jsx", "punctuation.definition.comment.jsx"],
        settings: {
          foreground: colors.text_violet_light,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "meta.embedded.expression.jsx comment.block.documentation.jsx punctuation.definition.comment.jsx",
        ],
        settings: {
          foreground: colors.text_violet_light,
        },
      },
      {
        scope: ["meta.embedded.expression.jsx comment.block.documentation.jsx"],
        settings: {
          foreground: colors.text_violet_medium,
        },
      },
    ],
    semanticTokenColors: {
      "variable.defaultLibrary:javascriptreact": colors.text_turquoise,
      "variable.defaultLibrary:typescriptreact": colors.text_turquoise,
      "class:javascriptreact": colors.text_violet_dark,
      "class:typescriptreact": colors.text_violet_dark,
      "interface:javascriptreact": colors.text_violet_dark,
      "interface:typescriptreact": colors.text_violet_dark,
      "type:javascriptreact": colors.text_violet_dark,
      "type:typescriptreact": colors.text_violet_dark,
      "enumMember:javascriptreact": colors.text_blue_light,
      "enumMember:typescriptreact": colors.text_blue_light,
      "namespace:javascriptreact": colors.text_black_dark,
      "namespace:typescriptreact": colors.text_black_dark,
      "parameter.declaration:javascriptreact": colors.text_blue_deep,
      "parameter.declaration:typescriptreact": colors.text_blue_deep,
      "variable:javascriptreact": colors.text_blue_light,
      "variable:typescriptreact": colors.text_blue_light,
      "variable.declaration.readonly:javascriptreact": colors.text_blue_light,
      "variable.declaration.readonly:typescriptreact": colors.text_blue_light,
      "variable.readonly:javascriptreact": colors.text_blue_light,
      "variable.readonly:typescriptreact": colors.text_blue_light,
    },
  };
};
