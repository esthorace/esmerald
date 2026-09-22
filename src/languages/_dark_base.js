module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["emphasis", "markup.italic", "markup.quote"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough",
        },
      },
      {
        scope: ["strong"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: ["token.info-token"],
        settings: {
          foreground: colors.azulMedioBrillante14,
        },
      },
      {
        scope: ["constant.regexp"],
        settings: {
          foreground: colors.azulMedioSuave4,
        },
      },
      {
        scope: ["meta.separator"],
        settings: {
          foreground: colors.azulOscuroSuave5,
          fontStyle: "bold",
        },
      },
      {
        scope: ["invalid", "token.error-token"],
        settings: {
          foreground: colors.error,
        },
      },
      {
        scope: [""],
        settings: {
          foreground: colors.grisClaroSuave,
        },
      },
      {
        scope: [
          "meta.embedded",
          "meta.template.expression",
          "source.groovy.embedded",
        ],
        settings: {
          foreground: colors.grisClaroSuave3,
        },
      },
      {
        scope: ["keyword.operator"],
        settings: {
          foreground: colors.grisClaroSuave5,
        },
      },
      {
        scope: ["punctuation.definition.tag"],
        settings: {
          foreground: colors.grisMedioSuave,
        },
      },
      {
        scope: ["token.warn-token"],
        settings: {
          foreground: colors.naranjaMedioVivo2,
        },
      },
      {
        scope: [
          "constant.character.escape",
          "constant.other.color.rgb-value",
          "constant.other.rgb-value",
          "keyword.operator.negation.regexp",
          "keyword.operator.quantifier.regexp",
          "markup.deleted",
          "markup.inline.raw",
          "meta.preprocessor.string",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.group.regexp",
          "string.tag",
          "string.value",
          "support.constant.color",
          "support.constant.font-name",
          "support.constant.media",
          "support.constant.media-type",
          "support.constant.property-value",
          "support.other.parenthesis.regexp",
        ],
        settings: {
          foreground: colors.naranjaMedioVivo3,
        },
      },
      {
        scope: ["keyword.control.anchor.regexp", "keyword.operator.or.regexp"],
        settings: {
          foreground: colors.rojoMedioSuave,
        },
      },
      {
        scope: ["variable.parameter"],
        settings: {
          foreground: colors.text_blue,
        },
      },
      {
        scope: [
          "constant.character",
          "constant.other.option",
          "keyword.operator",
          "markup.changed",
          "meta.diff.header",
          "meta.preprocessor",
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
          "punctuation.terminator.statement",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: ["markup.italic"],
        settings: {
          foreground: colors.text_blue_dark,
          fontStyle: "italic",
        },
      },
      {
        scope: ["markup.bold", "markup.heading"],
        settings: {
          foreground: colors.text_blue_dark,
          fontStyle: "bold",
        },
      },
      {
        scope: [
          "constant.language",
          "constant.other.placeholder",
          "entity.name.variable",
          "entity.other.attribute-name",
          "meta.definition.variable.name",
          "meta.object-literal.key",
          "source.coffee.embedded",
          "support.function.git-rebase",
          "support.type.property-name",
          "support.type.vendored.property-name",
          "support.variable",
          "variable",
          "variable.other.constant",
          "variable.other.enummember",
        ],
        settings: {
          foreground: colors.text_blue_light,
        },
      },
      {
        scope: [
          "entity.name.function",
          "entity.name.operator.custom-literal",
          "entity.name.tag.less",
          "entity.other.attribute-name.parent.less",
          "source.powershell variable.other.member",
          "support.constant.handlebars",
          "support.function",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "string",
          "string.quoted",
          "string.template",
          "string.unquoted",
        ],
        settings: {
          foreground: colors.text_green_light,
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.namespace",
          "entity.name.tag",
          "entity.name.type",
          "entity.other.attribute",
          "keyword.control",
          "markup.bold",
          "markup.bold string",
          "storage",
          "storage.modifier",
          "storage.type",
        ],
        settings: {
          foreground: colors.text_red,
        },
      },
      {
        scope: [
          "entity.other.inherited-class",
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.class",
          "support.constant.dom",
          "support.constant.json",
          "support.constant.math",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: ["markup.raw.block", "token.debug-token"],
        settings: {
          foreground: colors.text_violet,
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          foreground: colors.text_violet,
          fontStyle: "underline",
        },
      },
      {
        scope: [
          "comment",
          "fenced_code.block.language",
          "punctuation.definition.comment",
        ],
        settings: {
          foreground: colors.text_violet_deep,
          fontStyle: "italic",
        },
      },
      {
        scope: ["comment.block"],
        settings: {
          foreground: colors.text_violet_deep_2,
        },
      },
      {
        scope: [
          "markup.bold markup.italic",
          "markup.bold markup.italic string",
          "markup.italic markup.bold",
          "markup.italic markup.bold string",
          "markup.quote markup.bold",
          "markup.quote markup.bold string",
        ],
        settings: {
          foreground: colors.text_white_dark,
          fontStyle: "bold",
        },
      },
      {
        scope: [
          "constant.character.escape.regexp",
          "constant.numeric",
          "markup.table",
          "punctuation.definition",
          "punctuation.section.class.end",
          "punctuation.separator",
        ],
        settings: {
          foreground: colors.text_white_dark,
        },
      },
      {
        scope: [
          "entity.name.label",
          "entity.name.namespace",
          "keyword.operator.assignment",
        ],
        settings: {
          foreground: colors.text_white_light,
        },
      },
      {
        scope: [
          "constant.character.character-class.regexp",
          "constant.character.set.regexp",
          "constant.other.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "string.regexp",
        ],
        settings: {
          foreground: colors.verdeMedioBrillante9,
        },
      },
      {
        scope: [
          "constant.sha.git-rebase",
          "keyword.other.unit",
          "markup.inserted",
          "meta.preprocessor.numeric",
        ],
        settings: {
          foreground: colors.verdeMedioSuave,
        },
      },
    ],
  };
};
