module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["meta.function-call.arguments.python"],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "constant.character.escape.python",
          "meta.fstring.python string.interpolated.python string.quoted.single.python storage.type.string.python",
          "variable.parameter.function.language.special.cls.python",
          "variable.parameter.function.language.special.self.python",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "constant.language.python",
          "meta.structure.dictionary.key.python",
        ],
        settings: {
          foreground: colors.text_blue_light,
        },
      },
      {
        scope: [
          "meta.function.decorator.python entity.name.function.decorator.python",
          "punctuation.definition.arguments.begin.python",
          "punctuation.definition.arguments.end.python",
          "punctuation.definition.decorator.python",
          "punctuation.definition.parameters.begin.python",
          "punctuation.definition.parameters.end.python",
          "punctuation.section.function.begin.python",
          "punctuation.separator.annotation.result.python",
          "punctuation.separator.arguments.python",
          "punctuation.separator.parameters.python",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "meta.fstring.python punctuation.definition.string.begin.python string.interpolated.python string.quoted.single.python",
          "meta.fstring.python punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python",
          "string.quoted.double.python",
          "string.quoted.single.python",
          "string.regexp.quoted.single.python",
        ],
        settings: {
          foreground: colors.text_green_light,
        },
      },
      {
        scope: [
          "keyword.control.flow.python",
          "keyword.control.import.python",
          "keyword.operator.logical.python",
          "storage.modifier.declaration.python",
          "storage.type.class.python",
          "storage.type.function.async.python",
          "storage.type.function.python",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "entity.name.type.class",
          "meta.function-call.arguments.python punctuation.definition.list.begin.python",
          "meta.function-call.arguments.python punctuation.definition.list.end.python",
          "meta.function.python punctuation.definition.list.begin.python",
          "meta.function.python punctuation.definition.list.end.python",
          "meta.item-access.python punctuation.definition.arguments.begin.python",
          "meta.item-access.python punctuation.definition.arguments.end.python",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "comment.line.number-sign.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.text_violet_deep,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "string.quoted.docstring.multi.python",
          "string.quoted.docstring.single.python",
        ],
        settings: {
          foreground: colors.text_violet_deep_2,
        },
      },
      {
        scope: [
          "keyword.operator.arithmetic.python",
          "keyword.operator.assignment.python",
          "keyword.operator.bitwise.python",
          "keyword.operator.comparison.python",
          "keyword.operator.unpacking.arguments.python",
          "meta.function-call.arguments.python keyword.operator.assignment.python",
          "meta.function-call.generic.python",
          "meta.function.parameters.python punctuation.definition.list.begin.python",
          "meta.function.parameters.python punctuation.definition.list.end.python",
          "meta.function.python punctuation.definition.list.begin.python",
          "meta.function.python punctuation.definition.list.end.python",
          "punctuation.separator.annotation.python",
          "punctuation.separator.colon.python",
          "punctuation.separator.dict.python",
          "punctuation.separator.period.python",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: [
          "constant.other.ellipsis.python",
          "keyword.operator.assignment.python",
          "punctuation.definition.dict.begin.python",
          "punctuation.definition.dict.end.python",
          "punctuation.definition.inheritance.begin.python",
          "punctuation.definition.inheritance.end.python",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "punctuation.parenthesis.begin.python",
          "punctuation.parenthesis.end.python",
          "punctuation.separator.arguments.python",
          "punctuation.separator.element.python",
          "punctuation.separator.slice.python",
        ],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
    semanticTokenColors: {
      "builtinConstant.typeHint.readonly.builtin:python": colors.text_violet,
      "class.builtin.typeHint:python": colors.text_violet,
      "class.decorator.builtin:python": colors.text_turquoise,
      "class.decorator.library:python": colors.text_turquoise,
      "class.typeHint:python": colors.text_violet,
      "class.typeHint.builtin:python": colors.text_violet,
      "parameter.keywordArgument:python": colors.text_blue_dark,
      "function.decorator.builtin:python": colors.text_gold,
      "function.decorator.library:python": colors.text_gold,
    },
  };
};
