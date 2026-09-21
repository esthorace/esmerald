module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["constant.regexp"],
        settings: {
          foreground: colors.azulMedioSuave4,
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
        scope: ["keyword.control.anchor.regexp", "keyword.operator.or.regexp"],
        settings: {
          foreground: colors.rojoMedioSuave,
        },
      },
      {
        scope: [
          "constant.character",
          "constant.other.option",
          "entity.name.function.preprocessor",
          "keyword.operator.alignas",
          "keyword.operator.alignof",
          "keyword.operator.cast",
          "keyword.operator.expression",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
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
          "text.html.derivative string.quoted.double.html",
          "text.html.django meta.tag.block.any.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.end.html",
          "text.html.django meta.tag.inline.any.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.end.html",
          "text.html.jinja punctuation.definition.string",
          "text.html.jinja string.quoted.double.html",
          "variable.language",
          "variable.parameter.function.language.special.cls.python",
          "variable.parameter.function.language.special.self.python",
        ],
        settings: {
          foreground: colors.azulCodigo,
        },
      },
      {
        scope: ["entity.name.label"],
        settings: {
          foreground: colors.grisClaroSuave,
        },
      },
      {
        scope: ["token.info-token"],
        settings: {
          foreground: colors.azulMedioBrillante14,
        },
      },
      {
        scope: ["token.warn-token"],
        settings: {
          foreground: colors.naranjaMedioVivo2,
        },
      },
      {
        scope: ["token.error-token"],
        settings: {
          foreground: colors.rojoMedioBrillante,
        },
      },
      {
        scope: ["token.debug-token"],
        settings: {
          foreground: colors.violetaMedioBrillante5,
        },
      },
      {
        scope: [
          "meta.embedded",
          "meta.template.expression",
          "source.groovy.embedded",
          "storage.modifier.import.java",
          "storage.modifier.package.java",
          "string meta.image.inline.markdown",
          "variable.language.wildcard.java",
          "variable.legacy.builtin.python",
        ],
        settings: {
          foreground: colors.grisClaroSuave3,
        },
      },
      {
        scope: [
          "constant.language.boolean.go",
          "constant.other.ellipsis.python",
          "entity.name.namespace",
          "heading.1.markdown",
          "heading.1.markdown punctuation.definition.heading.markdown",
          "keyword.operator.assignment.python",
          "meta.jsx.children.js.jsx",
          "punctuation.definition",
          "punctuation.definition.dict.begin.python",
          "punctuation.definition.dict.end.python",
          "punctuation.definition.inheritance.begin.python",
          "punctuation.definition.inheritance.end.python",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "punctuation.parenthesis.begin.python",
          "punctuation.parenthesis.end.python",
          "punctuation.separator",
          "punctuation.separator.arguments.python",
          "punctuation.separator.element.python",
          "punctuation.separator.slice.python",
          "source.astro meta.embedded.expression.astro",
          "source.go keyword.operator.assignment",
          "text.astro",
          "text.html.derivative",
          "text.html.django",
          "text.html.jinja",
        ],
        settings: {
          foreground: colors.blanco,
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.namespace",
          "entity.name.tag",
          "entity.name.type",
          "entity.other.attribute",
          "heading.2.markdown",
          "heading.2.markdown punctuation.definition.heading.markdown",
          "keyword.control.flow.python",
          "keyword.control.import.python",
          "keyword.operator.assignment",
          "keyword.operator.logical.python",
          "meta.function.js meta.block.js meta.block.js meta.var.expr.js keyword.control.flow.js",
          "storage.modifier.async.js",
          "storage.modifier.declaration.python",
          "storage.type.class.python",
          "storage.type.function.async.python",
          "storage.type.function.python",
          "support.class",
        ],
        settings: {
          foreground: colors.rojoClaroBrillante3,
        },
      },
      {
        scope: [
          "entity.name.function",
          "entity.name.operator.custom-literal",
          "entity.name.tag.css",
          "entity.name.tag.less",
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.parent.less",
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.scss",
          "heading.3.markdown",
          "heading.3.markdown punctuation.definition.heading.markdown",
          "keyword.operator.getter.django",
          "meta.function.decorator.python entity.name.function.decorator.python",
          "meta.variable.structure.django",
          "punctuation.definition.arguments.begin.python",
          "punctuation.definition.arguments.end.python",
          "punctuation.definition.decorator.python",
          "punctuation.definition.list.begin.markdown",
          "punctuation.definition.parameters.begin.python",
          "punctuation.definition.parameters.end.python",
          "punctuation.section.function.begin.python",
          "punctuation.separator.annotation.result.python",
          "punctuation.separator.arguments.python",
          "punctuation.separator.parameters.python",
          "source.css entity.other.attribute-name.class",
          "source.css entity.other.attribute-name.pseudo-class",
          "source.css.less entity.other.attribute-name.id",
          "source.powershell variable.other.member",
          "support.constant.handlebars",
          "support.function",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.begin.html",
          "text.html.django storage.type.templatetag.django string.unquoted.tag-string.django",
          "text.html.django storage.type.variable.django string.unquoted.tag-string.django",
          "variable.other.django",
        ],
        settings: {
          foreground: colors.naranjaClaroBrillante2,
        },
      },
      {
        scope: [
          "constant.language.python",
          "constant.other.placeholder",
          "entity.name.variable",
          "entity.other.attribute-name",
          "heading.4.markdown",
          "heading.4.markdown punctuation.definition.heading.markdown",
          "meta.definition.variable.name",
          "meta.function-call.arguments.python keyword.operator.assignment.python",
          "meta.object-literal.key",
          "meta.structure.dictionary.key.python",
          "source.coffee.embedded",
          "source.css variable",
          "string.other.link.title.markdown",
          "support.function.git-rebase",
          "support.type.property-name",
          "support.type.vendored.property-name",
          "support.variable",
          "variable",
          "variable.other.constant",
        ],
        settings: {
          foreground: colors.azulClaroBrillante,
        },
      },
      {
        scope: [
          "constant.character.escape.regexp",
          "constant.numeric",
          "keyword.operator.arithmetic.python",
          "keyword.operator.assignment.python",
          "keyword.operator.bitwise.python",
          "keyword.operator.comparison.go",
          "keyword.operator.comparison.python",
          "keyword.operator.unpacking.arguments.python",
          "markup.bold.markdown",
          "markup.italic.markdown",
          "markup.raw.block.fenced.markdown",
          "markup.table",
          "meta.function-call.generic.python",
          "meta.function.parameters.python punctuation.definition.list.begin.python",
          "meta.function.parameters.python punctuation.definition.list.end.python",
          "meta.function.python punctuation.definition.list.begin.python",
          "meta.function.python punctuation.definition.list.end.python",
          "punctuation.definition.decorator.python",
          "punctuation.definition.list_item.markdown",
          "punctuation.section.class.end",
          "punctuation.separator.annotation.python",
          "punctuation.separator.dict.python",
          "punctuation.separator.period.python",
          "text.html.markdown",
          "variable.language.fenced.markdown",
          "variable.other.enummember",
        ],
        settings: {
          foreground: colors.textoSecundario,
        },
      },
      {
        scope: [
          "keyword.control.go",
          "keyword.operator.address.go",
          "keyword.operator.logical.js.jsx",
          "markup.raw.block",
          "string.other.link.description.title.markdown",
          "text.html.markdown markup.inline.raw.markdown",
        ],
        settings: {
          foreground: colors.violetaClaroBrillante2,
        },
      },
      {
        scope: [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
          "variable.language.fenced.markdown",
        ],
        settings: {
          foreground: colors.azulOscuroSuave5,
        },
      },
      {
        scope: ["markup.italic"],
        settings: {
          foreground: colors.azulCodigo,
          fontStyle: "italic",
        },
      },
      {
        scope: ["markup.bold", "markup.bold string"],
        settings: {
          foreground: colors.magentaMedioBrillante2,
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
          foreground: colors.rojoClaroBrillante3,
          fontStyle: "bold",
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          foreground: colors.violetaClaroBrillante2,
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.quote punctuation.definition.blockquote.markdown"],
        settings: {
          foreground: colors.azulOscuroVivo2,
        },
      },
      {
        scope: ["emphasis", "markup.italic", "markup.quote"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["constant.other.reference.link.markdown"],
        settings: {
          foreground: colors.azulMedioBrillante13,
        },
      },
      {
        scope: [
          "markup.raw.block.fenced.markdown",
          "punctuation.definition.fenced.markdown",
        ],
        settings: {
          foreground: colors.grisOscuroSuaveTransparente2,
        },
      },
      {
        scope: ["punctuation.definition.quote.begin.markdown"],
        settings: {
          foreground: colors.verdeMedioSuave,
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
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.bold", "markup.heading"],
        settings: {
          foreground: colors.azulCodigo,
          fontStyle: "bold",
        },
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough",
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
          foreground: colors.verdeMedioSuave4,
        },
      },
      {
        scope: ["punctuation.definition.tag"],
        settings: {
          foreground: colors.grisMedioSuave,
        },
      },
      {
        scope: [
          "entity.other.inherited-class",
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.constant.dom",
          "support.constant.json",
          "support.constant.math",
        ],
        settings: {
          foreground: colors.turquesaMedioVivo2,
        },
      },
      {
        scope: ["invalid"],
        settings: {
          foreground: colors.rojoError,
        },
      },
      {
        scope: ["keyword.operator", "keyword.operator.bitwise.python"],
        settings: {
          foreground: colors.grisClaroSuave5,
        },
      },
      {
        scope: ["strong"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python",
          "string",
          "string.quoted",
          "string.quoted.double.python",
          "string.quoted.single.python",
          "string.regexp.quoted.single.python",
          "string.template",
          "string.unquoted",
        ],
        settings: {
          foreground: colors.verdeClaroBrillante,
        },
      },
      {
        scope: ["comment"],
        settings: {
          foreground: colors.azulMedioSuave3,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "comment.block",
          "string.quoted.docstring.multi.python",
          "string.quoted.docstring.single.python",
        ],
        settings: {
          foreground: colors.azulMedioVivo15,
        },
      },
      {
        scope: [
          "punctuation.definition.comment",
          "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
          "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
        ],
        settings: {
          foreground: colors.azulMedioVivoTransparente2,
        },
      },
      {
        scope: [
          "constant.language",
          "meta.function-call.arguments.python",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.other.property.go",
          "variable.parameter",
        ],
        settings: {
          foreground: colors.azulMedioBrillante11,
        },
      },
      {
        scope: [
          "keyword.control",
          "keyword.control.import.go",
          "keyword.map.go",
          "keyword.operator.logical.python",
          "keyword.package.go",
          "keyword.struct.go",
          "keyword.type.go",
          "keyword.var.go",
          "source.go keyword.function",
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
          "constant.character.escape.python",
          "keyword.control.django",
          "text.html.django storage.type.templatetag.django keyword.operator.django",
        ],
        settings: {
          foreground: colors.violetaClaroBrillante,
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
          "punctuation.accessor.js",
          "punctuation.definition.begin.bracket.curly.go",
          "punctuation.definition.begin.bracket.round.go",
          "punctuation.definition.end.bracket.curly.go",
          "punctuation.definition.end.bracket.round.go",
        ],
        settings: {
          foreground: colors.turquesaMedioBrillante3,
        },
      },
      {
        scope: [
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.end.html",
        ],
        settings: {
          foreground: colors.verdeMedioSuave3,
        },
      },
      {
        scope: [
          "punctuation.definition.tag.begin.astro",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.begin.js.jsx",
          "punctuation.definition.tag.end.astro",
          "punctuation.definition.tag.end.html",
          "punctuation.definition.tag.end.js.jsx",
        ],
        settings: {
          foreground: colors.rojoMedioVivo,
        },
      },
      {
        scope: [
          "fenced_code.block.language",
          "markup.underline.link.markdown",
          "punctuation.definition.metadata.markdown",
          "punctuation.definition.string.begin.astro",
          "punctuation.definition.string.end.astro",
          "punctuation.separator.key-value.astro",
          "punctuation.separator.key-value.html",
          "text.html.derivative punctuation.definition.string",
        ],
        settings: {
          foreground: colors.azulMedioVivo3,
        },
      },
      {
        scope: ["invalid.deprecated.entity.other.attribute-name.html"],
        settings: {
          foreground: colors.azulClaroBrillante,
          fontStyle: "strikethrough",
        },
      },
      {
        scope: [
          "comment.block.html",
          "comment.line.number-sign.python",
          "fenced_code.block.language",
          "markup.fenced_code.block.markdown punctuation.definition.markdown",
          "markup.italic.markdown punctuation.definition",
          "punctuation.definition.bold.markdown",
          "punctuation.definition.comment",
          "punctuation.definition.comment.html",
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
          "punctuation.definition.raw.markdown",
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
          "text.html.derivative string.quoted.double.html meta.tag.structure.django ",
        ],
        settings: {
          foreground: colors.naranjaClaroBrillante2,
          fontStyle: "",
        },
      },
      {
        scope: [
          "storage.type.customtemplatetag.django",
          "storage.type.templatetag.django",
          "storage.type.templatetag.django entity.tag.tagbraces.django",
          "storage.type.variable.django",
        ],
        settings: {
          foreground: colors.turquesaMedioBrillante,
        },
      },
      {
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          foreground: colors.rojoClaroBrillante3,
          fontStyle: "italic",
        },
      },
      {
        scope: ["markup.fenced_code.block.markdown"],
        settings: {
          foreground: colors.verdeClaroSuave,
        },
      },
      {
        scope: ["constant.numeric.decimal.go"],
        settings: {
          foreground: colors.rojoClaroBrillante2,
        },
      },
      {
        scope: ["entity.name.type.package.go"],
        settings: {
          foreground: colors.blanco,
          fontStyle: "",
        },
      },
      {
        scope: ["entity.name.import.go"],
        settings: {
          foreground: colors.verdeMedioBrillante9,
          fontStyle: "italic",
        },
      },
    ],
    semanticTokenColors: {
      "variable.defaultLibrary:javascript": colors.turquesaMedioBrillante3,
      "class.typeHint.builtin:python": colors.turquesaMedioBrillante3,
      "class.decorator.builtin:python": colors.turquesaMedioVivo,
      "function.decorator.builtin:python": colors.turquesaMedioVivo,
      "function.decorator": colors.naranjaMedioSuave3,
    },
  };
};
