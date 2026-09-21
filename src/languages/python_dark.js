module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "constant.language.python",
          "meta.function-call.arguments.python keyword.operator.assignment.python",
          "meta.structure.dictionary.key.python",
        ],
        settings: {
          foreground: colors.azulClaroBrillante,
        },
      },
      {
        scope: [
          "keyword.operator.logical.python",
          "variable.parameter.function.language.special.cls.python",
          "variable.parameter.function.language.special.self.python",
        ],
        settings: {
          foreground: colors.azulCodigo,
        },
      },
      {
        scope: ["meta.function-call.arguments.python"],
        settings: {
          foreground: colors.azulMedioBrillante11,
        },
      },
      {
        scope: [
          "comment.line.number-sign.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.azulMedioVivo12,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "string.quoted.docstring.multi.python",
          "string.quoted.docstring.single.python",
        ],
        settings: {
          foreground: colors.azulMedioVivo15,
        },
      },
      {
        scope: [
          "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.azulMedioVivoTransparente2,
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
          foreground: colors.blanco,
        },
      },
      {
        scope: ["variable.legacy.builtin.python"],
        settings: {
          foreground: colors.grisClaroSuave3,
        },
      },
      {
        scope: ["keyword.operator.bitwise.python"],
        settings: {
          foreground: colors.grisClaroSuave5,
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
          foreground: colors.naranjaClaroBrillante2,
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
          foreground: colors.rojoClaroBrillante3,
        },
      },
      {
        scope: [
          "keyword.operator.logical.python",
          "storage.modifier.declaration.python",
          "storage.type.class.python",
          "storage.type.function.async.python",
          "storage.type.function.python",
        ],
        settings: {
          foreground: colors.rojoMedioBrillante,
        },
      },
      {
        scope: [
          "keyword.operator.arithmetic.python",
          "keyword.operator.assignment.python",
          "keyword.operator.bitwise.python",
          "keyword.operator.comparison.python",
          "keyword.operator.unpacking.arguments.python",
          "meta.function-call.generic.python",
          "meta.function.parameters.python punctuation.definition.list.begin.python",
          "meta.function.parameters.python punctuation.definition.list.end.python",
          "meta.function.python punctuation.definition.list.begin.python",
          "meta.function.python punctuation.definition.list.end.python",
          "punctuation.definition.decorator.python",
          "punctuation.separator.annotation.python",
          "punctuation.separator.dict.python",
          "punctuation.separator.period.python",
        ],
        settings: {
          foreground: colors.textoSecundario,
        },
      },
      {
        scope: [
          "meta.function-call.arguments.python punctuation.definition.list.begin.python",
          "meta.function-call.arguments.python punctuation.definition.list.end.python",
          "meta.function.python punctuation.definition.list.begin.python",
          "meta.function.python punctuation.definition.list.end.python",
          "meta.item-access.python punctuation.definition.arguments.begin.python",
          "meta.item-access.python punctuation.definition.arguments.end.python",
        ],
        settings: {
          foreground: colors.turquesaMedioBrillante3,
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
          foreground: colors.verdeClaroBrillante,
        },
      },
      {
        scope: [
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.verdeMedioSuave3,
        },
      },
      {
        scope: ["constant.character.escape.python"],
        settings: {
          foreground: colors.violetaClaroBrillante,
        },
      },
    ],
    semanticTokenColors: {
      "class.typeHint.builtin:python": colors.turquesaMedioBrillante3,
      "class.decorator.builtin:python": colors.turquesaMedioVivo,
      "function.decorator.builtin:python": colors.turquesaMedioVivo,
    },
  };
};
