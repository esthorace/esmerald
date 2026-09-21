module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: [
          "heading.4.markdown",
          "heading.4.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.azulClaroBrillante,
        },
      },
      {
        scope: [
          "heading.4.markdown entity.name.section.markdown",
          "heading.4.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.azulMedioVivo,
        },
      },
      {
        scope: [
          "heading.3.markdown",
          "heading.3.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.naranjaClaroBrillante2,
        },
      },
      {
        scope: [
          "heading.3.markdown entity.name.section.markdown",
          "heading.3.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.naranjaMedioBrillante3,
        },
      },
      {
        scope: ["punctuation.definition.list.begin.markdown"],
        settings: {
          foreground: colors.naranjaMedioVivo6,
        },
      },
      {
        scope: [
          "heading.1.markdown",
          "heading.1.markdown entity.name.section.markdown",
          "heading.1.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.negro,
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
          "heading.2.markdown entity.name.section.markdown",
          "heading.2.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: colors.rojoMedioBrillante4,
        },
      },
    ],
  };
};
