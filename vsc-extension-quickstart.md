# VSCE

package.json:

```json
  "scripts": {
    "package": "pnpm vsce package --no-dependencies",
    "publish": "pnpm vsce publish --no-dependencies"
}
```

```bash
pnpm install @vscode/vsce
pnpm run package
pnpm run publish
```
