module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "variable.parameter.function.language.special.cls.python",
          "variable.parameter.function.language.special.self.python",
        ],
        settings: {},
      },
      {
        scope: [
          "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.azulClaroVivo2,
        },
      },
      {
        scope: ["variable.parameter.function-call.python"],
        settings: {
          foreground: colors.azulMedioBrillante,
        },
      },
      {
        scope: ["string.quoted.docstring.multi.python"],
        settings: {
          foreground: colors.azulMedioBrillante16,
          fontStyle: "",
        },
      },
      {
        scope: ["constant.language.python"],
        settings: {
          foreground: colors.azulMedioBrillante8,
        },
      },
      {
        scope: [
          "source.python constant.character.escape",
          "storage.type.string.python",
        ],
        settings: {
          foreground: colors.azulMedioSuave6,
        },
      },
      {
        scope: [
          "entity.name.function.decorator.python",
          "meta.function.decorator.python",
        ],
        settings: {
          foreground: colors.azulMedioVivo7,
          fontStyle: "",
        },
      },
      {
        scope: [
          "punctuation.definition.parameters.begin.python",
          "punctuation.definition.parameters.end.python",
          "punctuation.separator.arguments.python",
          "punctuation.separator.dict.python",
          "punctuation.separator.element.python",
          "punctuation.separator.parameters.python",
          "punctuation.separator.period.python",
          "support.function.magic.python",
        ],
        settings: {
          foreground: colors.azulOscuroBrillante3,
        },
      },
      {
        scope: [
          "meta.function-call.arguments.python variable.parameter.function-call.python",
        ],
        settings: {
          foreground: colors.grisOscuroSuave2,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "meta.fstring.python constant.character.format.placeholder.other.python",
          "punctuation.definition.decorator.python",
          "punctuation.separator.annotation.python",
          "punctuation.separator.annotation.result.python",
          "punctuation.separator.slice.python",
        ],
        settings: {
          foreground: colors.naranjaMedioBrillante4,
        },
      },
      {
        scope: ["punctuation.section.function.begin.python"],
        settings: {
          foreground: colors.rojoMedioBrillante4,
        },
      },
      {
        scope: [
          "storage.type.class.python",
          "storage.type.function.async.python",
          "storage.type.function.python",
        ],
        settings: {
          foreground: colors.rojoMedioBrillante9,
        },
      },
      {
        scope: [
          "keyword.operator.arithmetic.python",
          "keyword.operator.bitwise.python",
          "keyword.operator.comparison.python",
        ],
        settings: {
          foreground: colors.turquesaMedioSuave,
        },
      },
      {
        scope: [
          "constant.character.format.placeholder.other.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.verdeExito,
        },
      },
      {
        scope: ["string.quoted.single.python"],
        settings: {
          foreground: colors.verdeOscuroBrillante2,
        },
      },
      {
        scope: [
          "keyword.control.flow.python",
          "keyword.control.import.python",
          "keyword.operator.logical.python",
          "punctuation.separator.colon.python",
        ],
        settings: {
          foreground: colors.violetaMedioVivo3,
        },
      },
    ],
  };
};
