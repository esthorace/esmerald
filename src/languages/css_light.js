module.exports = function createColors(colors) {
  return {
    tokenColors: [
      {
        scope: ["source.css variable"],
        settings: {
          foreground: colors.text_blue_dark,
        },
      },
      {
        scope: [
          "entity.name.tag.css",
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.scss",
          "source.css entity.other.attribute-name.class",
          "source.css entity.other.attribute-name.pseudo-class",
          "source.css.less entity.other.attribute-name.id",
        ],
        settings: {
          foreground: colors.text_gold,
        },
      },
    ],
  };
};
