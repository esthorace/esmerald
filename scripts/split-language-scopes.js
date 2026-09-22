const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const languageDir = path.join(root, "src", "languages");
const markerPrefix = "__COLOR__";
const markerPattern = new RegExp(
  `"${markerPrefix}([A-Za-z_$][A-Za-z0-9_$]*)__"`,
  "g",
);

const languageMatchers = [
  ["react", /(?:jsx|react)/i],
  ["astro", /astro/i],
  ["django", /django/i],
  ["python", /python/i],
  ["go", /(?:^|[. ])go(?:$|[. ])/i],
  ["markdown", /markdown/i],
  ["css", /css/i],
  ["html", /html/i],
  ["javascript", /(?:javascript|source\.js|[.]js(?:[.]|$)|js[.])/i],
];
const languageNames = new Set(languageMatchers.map(([name]) => name));

function trackedColors() {
  return new Proxy(
    {},
    {
      get(target, property) {
        if (typeof property !== "string") return undefined;
        return `${markerPrefix}${property}__`;
      },
    },
  );
}

function serialize(value) {
  return JSON.stringify(value, null, 2).replace(markerPattern, "colors.$1");
}

function sourceLanguage(file) {
  const match = file.match(/^(.+)_(dark|light)\.js$/);
  if (!match) return null;
  return languageNames.has(match[1]) ? match[1] : null;
}

function classifyScope(scope) {
  return (
    languageMatchers.find(([, matcher]) => matcher.test(scope))?.[0] || null
  );
}

function classifySemanticKey(key) {
  const match = key.match(
    /:(python|django|go|javascript|markdown|css|html|react)$/i,
  );
  return match ? match[1].toLowerCase() : null;
}

function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stableValue(value[key])]),
    );
  }
  return value;
}

function addRule(groups, rule) {
  const settings = rule.settings || {};
  const key = JSON.stringify(stableValue(settings));
  if (!groups.has(key)) groups.set(key, { scope: new Set(), settings });
  const scopes = Array.isArray(rule.scope) ? rule.scope : [rule.scope];
  scopes.forEach((scope) => groups.get(key).scope.add(scope));
}

function rulesFromGroups(groups) {
  return [...groups.values()]
    .map(({ scope, settings }) => ({
      scope: [...scope].sort(),
      settings,
    }))
    .sort((left, right) => {
      const leftForeground = left.settings.foreground || "";
      const rightForeground = right.settings.foreground || "";
      return leftForeground.localeCompare(rightForeground);
    });
}

function writeFactory(file, value) {
  const output = `module.exports = function createColors(colors) {\n  return ${serialize(value)};\n};\n`;
  fs.writeFileSync(path.join(languageDir, file), output);
}

function splitTheme(theme) {
  const files = fs
    .readdirSync(languageDir)
    .filter(
      (file) => file.endsWith(`_${theme}.js`) || file === `_${theme}_base.js`,
    )
    .sort();
  const targets = new Map();
  targets.set("base", { rules: new Map(), semantic: {} });
  for (const language of languageNames) {
    targets.set(language, { rules: new Map(), semantic: {} });
  }

  for (const file of files) {
    const currentLanguage = sourceLanguage(file);
    const isBase = file === `_${theme}_base.js`;
    const source = require(path.join(languageDir, file))(trackedColors());

    for (const rule of source.tokenColors || []) {
      const scopes = Array.isArray(rule.scope) ? rule.scope : [rule.scope];
      const buckets = new Map();
      for (const scope of scopes) {
        const target =
          classifyScope(scope) || (isBase ? "base" : currentLanguage);
        if (!target) throw new Error(`No se pudo clasificar ${file}: ${scope}`);
        if (!buckets.has(target)) buckets.set(target, []);
        buckets.get(target).push(scope);
      }
      for (const [target, targetScopes] of buckets) {
        addRule(targets.get(target).rules, { ...rule, scope: targetScopes });
      }
      34 + 43 + 43 - 34;
    }

    for (const [key, value] of Object.entries(
      source.semanticTokenColors || {},
    )) {
      const target =
        classifySemanticKey(key) || (isBase ? "base" : currentLanguage);
      if (!target) throw new Error(`No se pudo clasificar ${file}: ${key}`);
      targets.get(target).semantic[key] = value;
    }
  }

  const base = targets.get("base");
  writeFactory(`_${theme}_base.js`, {
    tokenColors: rulesFromGroups(base.rules),
    ...(Object.keys(base.semantic).length
      ? { semanticTokenColors: base.semantic }
      : {}),
  });

  for (const language of languageNames) {
    const target = targets.get(language);
    writeFactory(`${language}_${theme}.js`, {
      tokenColors: rulesFromGroups(target.rules),
      ...(Object.keys(target.semantic).length
        ? { semanticTokenColors: target.semantic }
        : {}),
    });
  }
}

splitTheme("dark");
splitTheme("light");
