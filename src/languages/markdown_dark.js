module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "heading.4.markdown",
          "heading.4.markdown punctuation.definition.heading.markdown",
          "string.other.link.title.markdown",
        ],
        settings: {
          foreground: colors.azulClaroBrillante,
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
          "markup.fenced_code.block.markdown punctuation.definition.markdown",
          "markup.italic.markdown punctuation.definition",
          "punctuation.definition.bold.markdown",
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
          "punctuation.definition.raw.markdown",
        ],
        settings: {
          foreground: colors.azulMedioVivo12,
          fontStyle: "italic",
        },
      },
      {
        scope: [
          "markup.underline.link.markdown",
          "punctuation.definition.metadata.markdown",
        ],
        settings: {
          foreground: colors.azulMedioVivo3,
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
        scope: ["markup.quote punctuation.definition.blockquote.markdown"],
        settings: {
          foreground: colors.azulOscuroVivo2,
        },
      },
      {
        scope: [
          "heading.1.markdown",
          "heading.1.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.blanco,
        },
      },
      {
        scope: ["string meta.image.inline.markdown"],
        settings: {
          foreground: colors.grisClaroSuave3,
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
        scope: [
          "heading.3.markdown",
          "heading.3.markdown punctuation.definition.heading.markdown",
          "punctuation.definition.list.begin.markdown",
        ],
        settings: {
          foreground: colors.naranjaClaroBrillante2,
        },
      },
      {
        scope: [
          "heading.2.markdown",
          "heading.2.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.rojoClaroBrillante3,
        },
      },
      {
        scope: [
          "markup.bold.markdown",
          "markup.italic.markdown",
          "markup.raw.block.fenced.markdown",
          "punctuation.definition.list_item.markdown",
          "text.html.markdown",
          "variable.language.fenced.markdown",
        ],
        settings: {
          foreground: colors.textoSecundario,
        },
      },
      {
        scope: ["markup.inline.raw.string.markdown"],
        settings: {
          foreground: colors.verdeClaroBrillante,
        },
      },
      {
        scope: ["markup.fenced_code.block.markdown"],
        settings: {
          foreground: colors.verdeClaroSuave,
        },
      },
      {
        scope: ["punctuation.definition.quote.begin.markdown"],
        settings: {
          foreground: colors.verdeMedioSuave,
        },
      },
      {
        scope: [
          "string.other.link.description.title.markdown",
          "text.html.markdown markup.inline.raw.markdown",
        ],
        settings: {
          foreground: colors.violetaClaroBrillante2,
        },
      },
    ],
  };
};
