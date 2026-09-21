module.exports = function createColors(colors) {
  return {
  "tokenColors": [
    {
      "scope": [
        "emphasis",
        "markup.italic",
        "markup.quote"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "markup.underline"
      ],
      "settings": {
        "fontStyle": "underline"
      }
    },
    {
      "scope": [
        "markup.strikethrough"
      ],
      "settings": {
        "fontStyle": "strikethrough"
      }
    },
    {
      "scope": [
        "strong"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
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
        "variable.other.constant"
      ],
      "settings": {
        "foreground": colors.azulClaroBrillante
      }
    },
    {
      "scope": [
        "constant.character",
        "constant.other.option",
        "entity.name.function.preprocessor",
        "keyword.operator.alignas",
        "keyword.operator.alignof",
        "keyword.operator.cast",
        "keyword.operator.expression",
        "keyword.operator.instanceof",
        "keyword.operator.new",
        "keyword.operator.noexcept",
        "keyword.operator.sizeof",
        "keyword.operator.typeid",
        "keyword.operator.wordlike",
        "markup.changed",
        "meta.diff.header",
        "meta.preprocessor",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php",
        "punctuation.terminator.statement",
        "storage",
        "storage.modifier",
        "storage.type",
        "variable.language"
      ],
      "settings": {
        "foreground": colors.azulCodigo
      }
    },
    {
      "scope": [
        "markup.italic"
      ],
      "settings": {
        "foreground": colors.azulCodigo,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "markup.bold",
        "markup.heading"
      ],
      "settings": {
        "foreground": colors.azulCodigo,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "constant.language",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.parameter"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante11
      }
    },
    {
      "scope": [
        "token.info-token"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante14
      }
    },
    {
      "scope": [
        "comment"
      ],
      "settings": {
        "foreground": colors.azulMedioSuave3,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "constant.regexp"
      ],
      "settings": {
        "foreground": colors.azulMedioSuave4
      }
    },
    {
      "scope": [
        "fenced_code.block.language",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo12,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "comment.block"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo15
      }
    },
    {
      "scope": [
        "fenced_code.block.language",
        "punctuation.definition.string.begin.astro",
        "punctuation.definition.string.end.astro",
        "punctuation.separator.key-value.astro"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo3
      }
    },
    {
      "scope": [
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": colors.azulMedioVivoTransparente2
      }
    },
    {
      "scope": [
        "meta.separator"
      ],
      "settings": {
        "foreground": colors.azulOscuroSuave5,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "entity.name.namespace",
        "punctuation.definition",
        "punctuation.separator",
        "source.astro meta.embedded.expression.astro",
        "text.astro"
      ],
      "settings": {
        "foreground": colors.blanco
      }
    },
    {
      "scope": [
        "entity.name.label"
      ],
      "settings": {
        "foreground": colors.grisClaroSuave
      }
    },
    {
      "scope": [
        "meta.embedded",
        "meta.template.expression",
        "source.groovy.embedded",
        "storage.modifier.import.java",
        "storage.modifier.package.java",
        "variable.language.wildcard.java"
      ],
      "settings": {
        "foreground": colors.grisClaroSuave3
      }
    },
    {
      "scope": [
        "keyword.operator"
      ],
      "settings": {
        "foreground": colors.grisClaroSuave5
      }
    },
    {
      "scope": [
        "punctuation.definition.tag"
      ],
      "settings": {
        "foreground": colors.grisMedioSuave
      }
    },
    {
      "scope": [
        "markup.bold",
        "markup.bold string"
      ],
      "settings": {
        "foreground": colors.magentaMedioBrillante2
      }
    },
    {
      "scope": [
        "entity.name.function",
        "entity.name.operator.custom-literal",
        "entity.name.tag.less",
        "entity.other.attribute-name.parent.less",
        "source.powershell variable.other.member",
        "support.constant.handlebars",
        "support.function"
      ],
      "settings": {
        "foreground": colors.naranjaClaroBrillante2
      }
    },
    {
      "scope": [
        "token.warn-token"
      ],
      "settings": {
        "foreground": colors.naranjaMedioVivo2
      }
    },
    {
      "scope": [
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
        "support.other.parenthesis.regexp"
      ],
      "settings": {
        "foreground": colors.naranjaMedioVivo3
      }
    },
    {
      "scope": [
        "entity.name.class",
        "entity.name.namespace",
        "entity.name.tag",
        "entity.name.type",
        "entity.other.attribute",
        "keyword.operator.assignment",
        "support.class"
      ],
      "settings": {
        "foreground": colors.rojoClaroBrillante3
      }
    },
    {
      "scope": [
        "markup.bold markup.italic",
        "markup.bold markup.italic string",
        "markup.italic markup.bold",
        "markup.italic markup.bold string",
        "markup.quote markup.bold",
        "markup.quote markup.bold string"
      ],
      "settings": {
        "foreground": colors.rojoClaroBrillante3,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "invalid"
      ],
      "settings": {
        "foreground": colors.rojoError
      }
    },
    {
      "scope": [
        "keyword.control",
        "token.error-token"
      ],
      "settings": {
        "foreground": colors.rojoMedioBrillante
      }
    },
    {
      "scope": [
        "keyword.control.anchor.regexp",
        "keyword.operator.or.regexp"
      ],
      "settings": {
        "foreground": colors.rojoMedioSuave
      }
    },
    {
      "scope": [
        "punctuation.definition.tag.begin.astro",
        "punctuation.definition.tag.end.astro"
      ],
      "settings": {
        "foreground": colors.rojoMedioVivo
      }
    },
    {
      "scope": [
        "constant.character.escape.regexp",
        "constant.numeric",
        "markup.table",
        "punctuation.section.class.end",
        "variable.other.enummember"
      ],
      "settings": {
        "foreground": colors.textoSecundario
      }
    },
    {
      "scope": [
        "entity.other.inherited-class",
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.dom",
        "support.constant.json",
        "support.constant.math"
      ],
      "settings": {
        "foreground": colors.turquesaMedioVivo2
      }
    },
    {
      "scope": [
        "string",
        "string.quoted",
        "string.template",
        "string.unquoted"
      ],
      "settings": {
        "foreground": colors.verdeClaroBrillante
      }
    },
    {
      "scope": [
        "constant.character.character-class.regexp",
        "constant.character.set.regexp",
        "constant.other.character-class.regexp",
        "constant.other.character-class.set.regexp",
        "string.regexp"
      ],
      "settings": {
        "foreground": colors.verdeMedioBrillante9
      }
    },
    {
      "scope": [
        "constant.sha.git-rebase",
        "keyword.other.unit",
        "markup.inserted",
        "meta.preprocessor.numeric"
      ],
      "settings": {
        "foreground": colors.verdeMedioSuave4
      }
    },
    {
      "scope": [
        "markup.raw.block"
      ],
      "settings": {
        "foreground": colors.violetaClaroBrillante2
      }
    },
    {
      "scope": [
        "markup.underline"
      ],
      "settings": {
        "foreground": colors.violetaClaroBrillante2,
        "fontStyle": "underline"
      }
    },
    {
      "scope": [
        "token.debug-token"
      ],
      "settings": {
        "foreground": colors.violetaMedioBrillante5
      }
    }
  ],
  "semanticTokenColors": {
    "function.decorator": colors.naranjaMedioSuave3
  }
};
};
