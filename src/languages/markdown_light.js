module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
        ],
        settings: {
          fontStyle: "",
        },
      },
      {
        scope: ["markup.italic.markdown"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["markup.bold.markdown"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: [
          "heading.1.markdown",
          "heading.1.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.text_black_dark,
        },
      },
      {
        scope: [
          "markup.bold.markdown",
          "markup.italic.markdown",
          "markup.quote punctuation.definition.blockquote.markdown",
          "markup.raw.block.fenced.markdown",
          "punctuation.definition.fenced.markdown",
          "punctuation.definition.list_item.markdown",
          "text.html.markdown",
          "variable.language.fenced.markdown",
        ],
        settings: {
          foreground: colors.text_black_light,
        },
      },
      {
        scope: [
          "constant.other.reference.link.markdown",
          "heading.4.markdown",
          "heading.4.markdown punctuation.definition.heading.markdown",
          "string.other.link.title.markdown",
        ],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "markup.underline.link.markdown",
          "punctuation.definition.metadata.markdown",
        ],
        settings: {
          foreground: colors.text_blue_deep,
        },
      },
      {
        scope: [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
          "variable.language.fenced.markdown",
        ],
        settings: {
          foreground: colors.text_blue_medium,
        },
      },
      {
        scope: [
          "heading.3.markdown",
          "heading.3.markdown punctuation.definition.heading.markdown",
          "punctuation.definition.list.begin.markdown",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
      {
        scope: [
          "markup.fenced_code.block.markdown",
          "markup.inline.raw.string.markdown",
          "punctuation.definition.quote.begin.markdown",
        ],
        settings: {
          foreground: colors.text_green_dark,
        },
      },
      {
        scope: [
          "heading.2.markdown",
          "heading.2.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.text_red_dark,
        },
      },
      {
        scope: ["string meta.image.inline.markdown"],
        settings: {
          foreground: colors.text_turquoise,
        },
      },
      {
        scope: [
          "fenced_code.block.language",
          "markup.fenced_code.block.markdown punctuation.definition.markdown",
          "markup.italic.markdown punctuation.definition",
          "punctuation.definition.bold.markdown",
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
          "punctuation.definition.raw.markdown",
          "string.other.link.description.title.markdown",
          "text.html.markdown markup.inline.raw.markdown",
        ],
        settings: {
          foreground: colors.text_violet_dark,
        },
      },
    ],
  };
};
