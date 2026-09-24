module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "constant.character.escape.python",
          "meta.item-access.python punctuation.definition.arguments.begin.python",
          "meta.item-access.python punctuation.definition.arguments.end.python",
          "storage.type.format.python",
          "storage.type.imaginary.number.python",
          "storage.type.string.python",
        ],
        settings: {
          foreground: colors.text_black_light,
        },
      },
      {
        scope: [
          "entity.name.function.python",
          "entity.name.type.class.python",
          "meta.class.inheritance.python",
          "meta.function-call.generic.python",
          "meta.function-call.python punctuation.definition.arguments.begin.python",
          "meta.function-call.python punctuation.definition.arguments.end.python",
          "meta.function-call.python punctuation.definition.parameters.begin.python",
          "meta.function-call.python punctuation.definition.parameters.end.python",
          "meta.function-call.python punctuation.separator.parameters.python",
          "meta.function-call.python support.function.builtin.python",
          "meta.function.parameters.python punctuation.definition.arguments.begin.python",
          "meta.function.parameters.python punctuation.definition.parameters.end.python",
          "meta.function.parameters.python punctuation.separator.parameters.python",
          "punctuation.definition.parameters.begin.python",
          "punctuation.section.function.begin.python",
          "punctuation.separator.annotation.result.python",
          "support.function.magic.python",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "meta.fstring.python meta.member.access.python support.variable.magic.python",
        ],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "entity.name.function.decorator.python",
          "meta.function.decorator.python punctuation.definition.arguments.begin.python",
          "meta.function.decorator.python punctuation.definition.arguments.end.python",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "keyword.operator.logical.python",
          "storage.modifier.declaration.python",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: [
          "constant.character.format.placeholder.other.python",
          "meta.fstring.python",
          "support.variable.magic.python",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.text_violet_light,
        },
      },
      {
        scope: ["string.quoted.docstring.multi.python"],
        settings: {
          foreground: colors.text_violet_medium,
        },
      },
    ],
    semanticTokenColors: {
      "variable.builtin:python": colors.text_blue_deep,
      "class.decorator.builtin:python": colors.text_gold,
      "variable.declaration.callable:python": colors.text_blue_dark,
      "variable.callable:python": colors.text_blue_dark,
      "function.declaration:python": colors.text_blue_dark,
      "class.builtin:python": colors.text_blue_dark,
      "parameter.keywordArgument:python": colors.text_blue_deep,
      "parameter:python": colors.text_blue_deep,
      "parameter.variable.parameter:python": colors.text_blue_deep,
      "property:python": colors.text_blue_deep,
      "builtinConstant.readonly.builtin:python": colors.text_black_light,
      "builtinConstant.typeHint.readonly.builtin:python":
        colors.text_violet_dark,
      "class.typeHint:python": colors.text_violet_dark,
      "class.typeHint.builtin:python": colors.text_violet_dark,
      "typeParameter.typeHint:python": colors.text_violet_dark,
      "module:python": colors.text_black_dark,
    },
  };
};
