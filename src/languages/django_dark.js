module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "text.html.django meta.tag.block.any.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.end.html",
          "text.html.django meta.tag.inline.any.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.end.html",
        ],
        settings: {
          foreground: colors.azulCodigo,
        },
      },
      {
        scope: ["text.html.django"],
        settings: {
          foreground: colors.blanco,
        },
      },
      {
        scope: [
          "keyword.operator.getter.django",
          "meta.variable.structure.django",
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
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.end.html",
        ],
        settings: {
          foreground: colors.verdeMedioSuave3,
        },
      },
      {
        scope: [
          "keyword.control.django",
          "text.html.django storage.type.templatetag.django keyword.operator.django",
        ],
        settings: {
          foreground: colors.violetaClaroBrillante,
        },
      },
    ],
  };
};
