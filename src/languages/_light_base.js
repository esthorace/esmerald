module.exports = function createColors(colors) {
  return {
  "semanticTokenColors": {
    "class.typeHint": colors.azulMedioVivo13,
    "builtinConstant.typeHint.readonly.builtin": colors.azulMedioVivo13,
    "parameter": {
      "foreground": colors.azulMedioVivo4,
      "fontStyle": ""
    },
    "parameter.definition": {
      "foreground": colors.negro,
      "fontStyle": ""
    },
    "parameter.declaration": {
      "foreground": colors.negro,
      "fontStyle": ""
    },
    "method": {
      "foreground": colors.naranjaMedioSuave2,
      "fontStyle": ""
    },
    "function.declaration.async": colors.rojoMedioBrillante4,
    "function.definition.async": colors.rojoMedioBrillante4,
    "function.declaration": colors.rojoMedioBrillante4,
    "function.definition": colors.rojoMedioBrillante4,
    "method.declaration": {
      "foreground": colors.rojoMedioBrillante4,
      "fontStyle": ""
    },
    "method.definition": {
      "foreground": colors.rojoMedioBrillante4,
      "fontStyle": ""
    },
    "class.declaration": colors.rojoMedioBrillante4,
    "class.definition": colors.rojoMedioBrillante4
  },
  "tokenColors": [
    {
      "scope": [
        "comment",
        "comment.block",
        "comment.line"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante16,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "carriage-return"
      ],
      "settings": {
        "foreground": colors.azulClaroVivo3,
        "fontStyle": "italic underline"
      }
    },
    {
      "scope": [
        "brackethighlighter.unmatched",
        "markup.deleted",
        "message.error",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      "settings": {
        "foreground": colors.magentaMedioBrillante
      }
    },
    {
      "scope": [
        "constant.character.format.placeholder.other.python",
        "keyword.operator.getter.django",
        "markup.inserted",
        "markup.quote",
        "meta.diff.header.to-file",
        "meta.variable.structure.django",
        "punctuation.definition.inserted",
        "punctuation.definition.string",
        "punctuation.definition.string.begin.python",
        "punctuation.definition.string.end.python",
        "string punctuation.section.embedded source",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
        "string.regexp.character-class",
        "support.function.django",
        "text.html.django meta.tag.block.any.html",
        "text.html.django meta.tag.block.any.html entity.other.attribute-name.html",
        "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.begin.html",
        "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.end.html",
        "text.html.django meta.tag.inline.any.html",
        "text.html.django meta.tag.inline.any.html entity.other.attribute-name.html",
        "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.begin.html",
        "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.end.html",
        "variable.other.django"
      ],
      "settings": {
        "foreground": colors.verdeExito
      }
    },
    {
      "scope": [
        "storage.modifier.import",
        "storage.modifier.package",
        "storage.type.java",
        "string source",
        "support.variable.js"
      ],
      "settings": {
        "foreground": colors.textoPrincipal
      }
    },
    {
      "scope": [
        "constant",
        "entity.name.constant",
        "entity.name.function",
        "heading.1.markdown",
        "heading.1.markdown entity.name.section.markdown",
        "heading.1.markdown punctuation.definition.heading.markdown",
        "ref.matchtext",
        "string variable",
        "text.html.derivative",
        "text.html.django",
        "variable",
        "variable.language",
        "variable.mermaid",
        "variable.other",
        "variable.other.constant"
      ],
      "settings": {
        "foreground": colors.negro
      }
    },
    {
      "scope": [
        "delimiter.bracket.mermaid",
        "entity.name.type.class",
        "heading.4.markdown entity.name.section.markdown",
        "heading.4.markdown punctuation.definition.heading.markdown",
        "keyword.control.transition.mermaid",
        "meta.diff.header",
        "meta.module-reference",
        "meta.output",
        "meta.property-name",
        "support",
        "support.constant",
        "support.variable"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo
      }
    },
    {
      "scope": [
        "variable.parameter.function",
        "variable.parameter.function-call.python"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante
      }
    },
    {
      "scope": [
        "entity",
        "entity.name",
        "keyword.control.django",
        "keyword.control.tag-name.django",
        "meta.tag.structure.django",
        "source.css",
        "storage.type.templatetag.django entity.tag.tagbraces.django",
        "storage.type.variable.django entity.tag.tagbraces.django",
        "string.quoted.single.begin.django",
        "string.quoted.single.end.django",
        "support.type.tag.begin.django",
        "support.type.tag.end.django",
        "support.type.variable.begin.django",
        "support.type.variable.end.django",
        "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.variable.django entity.tag.tagbraces.django",
        "text.html.django storage.type.templatetag.django",
        "text.html.django storage.type.templatetag.django entity.tag.tagbraces.django",
        "text.html.django storage.type.variable.django entity.tag.tagbraces.django"
      ],
      "settings": {
        "foreground": colors.violetaEnlace
      }
    },
    {
      "scope": [
        "entity.name.class",
        "entity.name.namespace",
        "entity.name.scope-resolution",
        "entity.name.type",
        "entity.name.type.go",
        "entity.other.attribute",
        "punctuation.definition",
        "punctuation.separator",
        "storage.type.annotation.groovy",
        "storage.type.annotation.java",
        "storage.type.boolean.go",
        "storage.type.byte.go",
        "storage.type.cs",
        "storage.type.error.go",
        "storage.type.generic.cs",
        "storage.type.generic.groovy",
        "storage.type.generic.java",
        "storage.type.groovy",
        "storage.type.java",
        "storage.type.mermaid",
        "storage.type.modifier.cs",
        "storage.type.numeric.go",
        "storage.type.object.array.groovy",
        "storage.type.object.array.java",
        "storage.type.parameters.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.array.java",
        "storage.type.primitive.groovy",
        "storage.type.primitive.java",
        "storage.type.rune.go",
        "storage.type.string.go",
        "storage.type.token.java",
        "storage.type.uintptr.go",
        "storage.type.variable.cs",
        "support.class",
        "support.type"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante5
      }
    },
    {
      "scope": [
        "annotation",
        "entity.name.tag",
        "entity.name.tag.html",
        "heading.2.markdown entity.name.section.markdown",
        "heading.2.markdown punctuation.definition.heading.markdown",
        "keyword",
        "keyword.control.go",
        "keyword.operator",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.function.begin.python",
        "storage",
        "storage.type"
      ],
      "settings": {
        "foreground": colors.rojoMedioBrillante4
      }
    },
    {
      "scope": [
        "token.info-token"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo6
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
        "token.error-token"
      ],
      "settings": {
        "foreground": colors.rojoMedioVivo4
      }
    },
    {
      "scope": [
        "token.debug-token"
      ],
      "settings": {
        "foreground": colors.magentaOscuroBrillante
      }
    },
    {
      "scope": [
        "source.regexp",
        "string.regexp"
      ],
      "settings": {
        "foreground": colors.verdeMedioBrillante4
      }
    },
    {
      "scope": [
        "string.regexp constant.character.escape"
      ],
      "settings": {
        "foreground": colors.verdeExito,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "markup.heading",
        "markup.heading entity.name",
        "meta.separator"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "markup.italic"
      ],
      "settings": {
        "foreground": colors.textoPrincipal,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "markup.bold"
      ],
      "settings": {
        "foreground": colors.violetaMedioVivo3,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "entity.name.import.go",
        "markup.raw",
        "string",
        "string.quoted.single.python"
      ],
      "settings": {
        "foreground": colors.verdeOscuroBrillante2
      }
    },
    {
      "scope": [
        "constant.other.reference.link",
        "string.other.link"
      ],
      "settings": {
        "foreground": colors.verdeExito,
        "fontStyle": "underline"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name.html",
        "markup.changed",
        "punctuation.definition.changed",
        "punctuation.definition.list.begin.markdown"
      ],
      "settings": {
        "foreground": colors.naranjaMedioVivo6
      }
    },
    {
      "scope": [
        "entity.name.function.member",
        "heading.3.markdown entity.name.section.markdown",
        "heading.3.markdown punctuation.definition.heading.markdown"
      ],
      "settings": {
        "foreground": colors.naranjaMedioBrillante3
      }
    },
    {
      "scope": [
        "markup.ignored",
        "markup.untracked"
      ],
      "settings": {
        "foreground": colors.fondoPanelClaro
      }
    },
    {
      "scope": [
        "meta.diff.range"
      ],
      "settings": {
        "foreground": colors.violetaEnlace,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "brackethighlighter.angle",
        "brackethighlighter.curly",
        "brackethighlighter.quote",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.tag"
      ],
      "settings": {
        "foreground": colors.azulMedioSuave2
      }
    },
    {
      "scope": [
        "punctuation.definition.comment",
        "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
        "string.quoted.docstring.multi.python punctuation.definition.string.end.python"
      ],
      "settings": {
        "foreground": colors.azulClaroVivo2
      }
    },
    {
      "scope": [
        "string.quoted.docstring.multi.python"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante16,
        "fontStyle": ""
      }
    },
    {
      "scope": [
        "entity.name.namespace"
      ],
      "settings": {
        "foreground": colors.verdeOscuroSuave,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "keyword.control.flow.python",
        "keyword.control.import.python",
        "keyword.operator.arithmetic.go",
        "keyword.operator.comparison.go",
        "keyword.operator.increment.go",
        "keyword.operator.logical.python",
        "punctuation.separator.colon.python"
      ],
      "settings": {
        "foreground": colors.violetaMedioVivo3
      }
    },
    {
      "scope": [
        "meta.fstring.python constant.character.format.placeholder.other.python",
        "punctuation.definition.decorator.python",
        "punctuation.separator.annotation.python",
        "punctuation.separator.annotation.result.python",
        "punctuation.separator.slice.python"
      ],
      "settings": {
        "foreground": colors.naranjaMedioBrillante4
      }
    },
    {
      "scope": [
        "punctuation.definition.parameters.begin.python",
        "punctuation.definition.parameters.end.python",
        "punctuation.separator.arguments.python",
        "punctuation.separator.dict.python",
        "punctuation.separator.element.python",
        "punctuation.separator.parameters.python",
        "punctuation.separator.period.python",
        "support.function.magic.python"
      ],
      "settings": {
        "foreground": colors.azulOscuroBrillante3
      }
    },
    {
      "scope": [
        "keyword.operator.arithmetic.python",
        "keyword.operator.bitwise.python",
        "keyword.operator.comparison.python"
      ],
      "settings": {
        "foreground": colors.turquesaMedioSuave
      }
    },
    {
      "scope": [
        "entity.name.function.decorator.python",
        "meta.function.decorator.python"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo7,
        "fontStyle": ""
      }
    },
    {
      "scope": [
        "source.python constant.character.escape",
        "storage.type.string.python"
      ],
      "settings": {
        "foreground": colors.azulMedioSuave6
      }
    },
    {
      "scope": [
        "variable.parameter.function.language.special.cls.python",
        "variable.parameter.function.language.special.self.python"
      ],
      "settings": {}
    },
    {
      "scope": [
        "punctuation.definition.string.begin.html",
        "punctuation.definition.string.begin.html source.css",
        "punctuation.definition.string.end.html",
        "punctuation.definition.string.end.html source.css",
        "punctuation.separator.key-value.html",
        "string.quoted.double.begin.django",
        "string.quoted.double.end.django",
        "string.quoted.double.html"
      ],
      "settings": {
        "foreground": colors.azulCodigo
      }
    },
    {
      "scope": [
        "string.quoted.double.django",
        "string.quoted.single.django"
      ],
      "settings": {
        "foreground": colors.rojoClaroBrillante4
      }
    },
    {
      "scope": [
        "heading.2.markdown",
        "heading.2.markdown punctuation.definition.heading.markdown"
      ],
      "settings": {
        "foreground": colors.rojoClaroBrillante3
      }
    },
    {
      "scope": [
        "heading.3.markdown",
        "heading.3.markdown punctuation.definition.heading.markdown"
      ],
      "settings": {
        "foreground": colors.naranjaClaroBrillante2
      }
    },
    {
      "scope": [
        "heading.4.markdown",
        "heading.4.markdown punctuation.definition.heading.markdown"
      ],
      "settings": {
        "foreground": colors.azulClaroBrillante
      }
    },
    {
      "scope": [
        "punctuation.definition.tag"
      ],
      "settings": {
        "foreground": colors.rojoClaroBrillante
      }
    },
    {
      "scope": [
        "entity.name.tag.js.jsx"
      ],
      "settings": {
        "foreground": colors.rojoMedioBrillante10
      }
    },
    {
      "scope": [
        "storage.type.class.python",
        "storage.type.function.async.python",
        "storage.type.function.python"
      ],
      "settings": {
        "foreground": colors.rojoMedioBrillante9
      }
    },
    {
      "scope": [
        "entity.name.function.member"
      ],
      "settings": {
        "foreground": colors.negro,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "meta.function-call.arguments.python variable.parameter.function-call.python"
      ],
      "settings": {
        "foreground": colors.grisOscuroSuave2,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "entity.name.type.class",
        "storage.type.boolean.go",
        "storage.type.byte.go",
        "storage.type.chan.go",
        "storage.type.const.go",
        "storage.type.error.go",
        "storage.type.func.go",
        "storage.type.interface.go",
        "storage.type.map.go",
        "storage.type.numeric.go",
        "storage.type.rune.go",
        "storage.type.string.go",
        "storage.type.struct.go",
        "storage.type.type.go",
        "storage.type.uintptr.go",
        "storage.type.var.go"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante3
      }
    },
    {
      "scope": [
        "constant.language.python"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante8
      }
    },
    {
      "scope": [
        "comment.line"
      ],
      "settings": {
        "foreground": colors.azulClaroVivo,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "string"
      ],
      "settings": {
        "foreground": colors.verdeMedioVivo
      }
    },
    {
      "scope": [
        "entity.name.type.package.go"
      ],
      "settings": {
        "foreground": colors.negro,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "entity.name.function.support.builtin.go",
        "entity.name.function.support.go"
      ],
      "settings": {
        "foreground": colors.azulMedioVivo9
      }
    },
    {
      "scope": [
        "constant.language.boolean.go",
        "constant.numeric.decimal.go"
      ],
      "settings": {
        "foreground": colors.azulMedioBrillante9
      }
    },
    {
      "scope": [
        "keyword.operator.address.go"
      ],
      "settings": {
        "foreground": colors.turquesaMedioBrillante2
      }
    },
    {
      "scope": [
        "punctuation.definition.begin.bracket.curly.go",
        "punctuation.definition.begin.bracket.round.go",
        "punctuation.definition.end.bracket.curly.go",
        "punctuation.definition.end.bracket.round.go",
        "punctuation.other.comma.go",
        "punctuation.other.period.go"
      ],
      "settings": {
        "foreground": colors.naranjaMedioSuave
      }
    },
    {
      "scope": [
        "constant.character.escape.go"
      ],
      "settings": {
        "foreground": colors.amarilloMedioVivo
      }
    },
    {
      "scope": [
        "constant.other.placeholder.go"
      ],
      "settings": {
        "foreground": colors.violetaMedioSuave
      }
    }
  ]
};
};
