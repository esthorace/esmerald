module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "string.quoted.double.begin.django",
          "string.quoted.double.end.django",
        ],
        settings: {
          foreground: colors.azulCodigo,
        },
      },
      {
        scope: ["text.html.django"],
        settings: {
          foreground: colors.negro,
        },
      },
      {
        scope: ["string.quoted.double.django", "string.quoted.single.django"],
        settings: {
          foreground: colors.rojoClaroBrillante4,
        },
      },
      {
        scope: [
          "keyword.operator.getter.django",
          "meta.variable.structure.django",
          "support.function.django",
          "text.html.django meta.tag.block.any.html",
          "text.html.django meta.tag.block.any.html entity.other.attribute-name.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.block.any.html string.quoted.double.html punctuation.definition.string.end.html",
          "text.html.django meta.tag.inline.any.html",
          "text.html.django meta.tag.inline.any.html entity.other.attribute-name.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html punctuation.definition.string.end.html",
          "variable.other.django",
        ],
        settings: {
          foreground: colors.verdeExito,
        },
      },
      {
        scope: [
          "keyword.control.django",
          "keyword.control.tag-name.django",
          "meta.tag.structure.django",
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
          "text.html.django storage.type.variable.django entity.tag.tagbraces.django",
        ],
        settings: {
          foreground: colors.violetaEnlace,
        },
      },
    ],
  };
};
