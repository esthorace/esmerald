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
          foreground: colors.text_blue_dark,
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
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "text.html.derivative string.quoted.double.html meta.tag.structure.django ",
        ],
        settings: {
          foreground: colors.text_gold,
          fontStyle: "",
        },
      },
      {
        scope: [
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.begin.html",
          "text.html.django meta.tag.inline.any.html string.quoted.double.html storage.type.templatetag.django string.quoted.single.html punctuation.definition.string.end.html",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "meta.tag.structure.django support.type.tag.begin.django",
          "meta.tag.structure.django support.type.tag.end.django",
          "meta.variable.structure.django support.type.variable.begin.django",
          "meta.variable.structure.django support.type.variable.end.django",
          "storage.type.customtemplatetag.django",
          "storage.type.templatetag.django",
          "storage.type.templatetag.django entity.tag.tagbraces.django",
          "storage.type.variable.django",
        ],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "keyword.control.django",
          "text.html.django storage.type.templatetag.django keyword.operator.django",
        ],
        settings: {
          foreground: colors.text_violet,
        },
      },
      {
        scope: ["text.html.django"],
        settings: {
          foreground: colors.text_white_light,
        },
      },
    ],
  };
};
