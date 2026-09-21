module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["comment.line"],
        settings: {
          foreground: colors.azulClaroVivo,
          fontStyle: "italic",
        },
      },
      {
        scope: ["punctuation.definition.comment"],
        settings: {
          foreground: colors.azulClaroVivo2,
        },
      },
      {
        scope: ["carriage-return"],
        settings: {
          foreground: colors.azulClaroVivo3,
          fontStyle: "italic underline",
        },
      },
      {
        scope: ["variable.parameter.function"],
        settings: {
          foreground: colors.azulMedioBrillante,
        },
      },
      {
        scope: ["comment", "comment.block", "comment.line"],
        settings: {
          foreground: colors.azulMedioBrillante16,
          fontStyle: "italic",
        },
      },
      {
        scope: ["entity.name.type.class"],
        settings: {
          foreground: colors.azulMedioBrillante3,
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.namespace",
          "entity.name.scope-resolution",
          "entity.name.type",
          "entity.other.attribute",
          "punctuation.definition",
          "punctuation.separator",
          "storage.type.annotation.groovy",
          "storage.type.annotation.java",
          "storage.type.cs",
          "storage.type.generic.cs",
          "storage.type.generic.groovy",
          "storage.type.generic.java",
          "storage.type.groovy",
          "storage.type.java",
          "storage.type.mermaid",
          "storage.type.modifier.cs",
          "storage.type.object.array.groovy",
          "storage.type.object.array.java",
          "storage.type.parameters.groovy",
          "storage.type.primitive.array.groovy",
          "storage.type.primitive.array.java",
          "storage.type.primitive.groovy",
          "storage.type.primitive.java",
          "storage.type.token.java",
          "storage.type.variable.cs",
          "support.class",
          "support.type",
        ],
        settings: {
          foreground: colors.azulMedioBrillante5,
        },
      },
      {
        scope: [
          "brackethighlighter.angle",
          "brackethighlighter.curly",
          "brackethighlighter.quote",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.tag",
        ],
        settings: {
          foreground: colors.azulMedioSuave2,
        },
      },
      {
        scope: [
          "delimiter.bracket.mermaid",
          "entity.name.type.class",
          "keyword.control.transition.mermaid",
          "meta.diff.header",
          "meta.module-reference",
          "meta.output",
          "meta.property-name",
          "support",
          "support.constant",
          "support.variable",
        ],
        settings: {
          foreground: colors.azulMedioVivo,
        },
      },
      {
        scope: [
          "markup.heading",
          "markup.heading entity.name",
          "meta.separator",
        ],
        settings: {
          foreground: colors.azulMedioVivo,
          fontStyle: "bold",
        },
      },
      {
        scope: ["token.info-token"],
        settings: {
          foreground: colors.azulMedioVivo6,
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: colors.fondoPanelClaro,
        },
      },
      {
        scope: [
          "brackethighlighter.unmatched",
          "markup.deleted",
          "message.error",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          foreground: colors.magentaMedioBrillante,
        },
      },
      {
        scope: ["token.debug-token"],
        settings: {
          foreground: colors.magentaOscuroBrillante,
        },
      },
      {
        scope: ["entity.name.function.member"],
        settings: {
          foreground: colors.naranjaMedioBrillante3,
        },
      },
      {
        scope: ["token.warn-token"],
        settings: {
          foreground: colors.naranjaMedioVivo2,
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          foreground: colors.naranjaMedioVivo6,
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "entity.name.function",
          "ref.matchtext",
          "string variable",
          "variable",
          "variable.language",
          "variable.mermaid",
          "variable.other",
          "variable.other.constant",
        ],
        settings: {
          foreground: colors.negro,
        },
      },
      {
        scope: ["entity.name.function.member"],
        settings: {
          foreground: colors.negro,
          fontStyle: "italic",
        },
      },
      {
        scope: ["punctuation.definition.tag"],
        settings: {
          foreground: colors.rojoClaroBrillante,
        },
      },
      {
        scope: [
          "annotation",
          "entity.name.tag",
          "keyword",
          "keyword.operator",
          "storage",
          "storage.type",
        ],
        settings: {
          foreground: colors.rojoMedioBrillante4,
        },
      },
      {
        scope: ["token.error-token"],
        settings: {
          foreground: colors.rojoMedioVivo4,
        },
      },
      {
        scope: [
          "storage.modifier.import",
          "storage.modifier.package",
          "storage.type.java",
          "string source",
        ],
        settings: {
          foreground: colors.textoPrincipal,
        },
      },
      {
        scope: ["markup.italic"],
        settings: {
          foreground: colors.textoPrincipal,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "markup.inserted",
          "markup.quote",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
          "string.regexp.character-class",
        ],
        settings: {
          foreground: colors.verdeExito,
        },
      },
      {
        scope: ["string.regexp constant.character.escape"],
        settings: {
          foreground: colors.verdeExito,
          fontStyle: "bold",
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: colors.verdeExito,
          fontStyle: "underline",
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: colors.verdeMedioBrillante4,
        },
      },
      {
        scope: ["string"],
        settings: {
          foreground: colors.verdeMedioVivo,
        },
      },
      {
        scope: ["markup.raw", "string"],
        settings: {
          foreground: colors.verdeOscuroBrillante2,
        },
      },
      {
        scope: ["entity.name.namespace"],
        settings: {
          foreground: colors.verdeOscuroSuave,
          fontStyle: "bold",
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: colors.violetaEnlace,
        },
      },
      {
        scope: ["meta.diff.range"],
        settings: {
          foreground: colors.violetaEnlace,
          fontStyle: "bold",
        },
      },
      {
        scope: ["markup.bold"],
        settings: {
          foreground: colors.violetaMedioVivo3,
          fontStyle: "bold",
        },
      },
    ],
    semanticTokenColors: {
      "class.typeHint": colors.azulMedioVivo13,
      "builtinConstant.typeHint.readonly.builtin": colors.azulMedioVivo13,
      parameter: {
        foreground: colors.azulMedioVivo4,
        fontStyle: "",
      },
      "parameter.definition": {
        foreground: colors.negro,
        fontStyle: "",
      },
      "parameter.declaration": {
        foreground: colors.negro,
        fontStyle: "",
      },
      method: {
        foreground: colors.naranjaMedioSuave2,
        fontStyle: "",
      },
      "function.declaration.async": colors.rojoMedioBrillante4,
      "function.definition.async": colors.rojoMedioBrillante4,
      "function.declaration": colors.rojoMedioBrillante4,
      "function.definition": colors.rojoMedioBrillante4,
      "method.declaration": {
        foreground: colors.rojoMedioBrillante4,
        fontStyle: "",
      },
      "method.definition": {
        foreground: colors.rojoMedioBrillante4,
        fontStyle: "",
      },
      "class.declaration": colors.rojoMedioBrillante4,
      "class.definition": colors.rojoMedioBrillante4,
    },
  };
};
