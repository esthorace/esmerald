# Guía rápida de desarrollo

Este proyecto es un tema de colores para Visual Studio Code. Los archivos dentro de `src/` son las fuentes editables y los archivos dentro de `themes/` son los temas JSON que VS Code consume.

El flujo de trabajo es:

1. Editar una paleta o una regla de resaltado en `src/`.
2. Ejecutar el build para generar los temas JSON en `themes/`.
3. Ejecutar las validaciones para comprobar que no falten colores ni existan referencias inválidas.
4. Revisar el resultado en VS Code.
5. Empaquetar la extensión en un archivo `.vsix` cuando esté lista.

Las paletas están separadas por tema:

- `src/dark_palette.js`: colores utilizados por el tema oscuro.
- `src/light_palette.js`: colores utilizados por el tema claro.

Las reglas de interfaz están en `src/ui_dark.js` y `src/ui_light.js`. Las reglas de sintaxis están en `src/languages/_dark_base.js` y `src/languages/_light_base.js`. El archivo `build.js` combina estas fuentes y genera `themes/esmerald.json` y `themes/esmerald-light.json`.

El build descubre automáticamente todos los archivos `.js` de `src/languages`:

- Un archivo que termine en `_dark.js` o `_dark_base.js` se agrega al tema oscuro.
- Un archivo que termine en `_light.js` o `_light_base.js` se agrega al tema claro.
- Cualquier otro archivo `.js` produce un error para evitar que una regla quede fuera del build por accidente.

Por ejemplo, `python_dark.js`, `javascript_light.js`, `_dark_base.js` y `_light_base.js` son nombres válidos.

## Comandos principales

```bash
pnpm build
pnpm validate
pnpm check
```

- `pnpm build` genera los dos temas JSON.
- `pnpm validate` comprueba las paletas, las referencias de colores y la estructura de los temas.
- `pnpm check` ejecuta ambos comandos en orden.

## VSCE

VSCE es la herramienta que empaqueta la extensión de VS Code. Está declarada como dependencia del proyecto y se ejecuta mediante los scripts de `package.json`.

```bash
pnpm install
pnpm package
pnpm publish
```

## Cambiar un color

1. Editar el valor hexadecimal en la paleta correspondiente:
  - `src/dark_palette.js` para el tema oscuro.
  - `src/light_palette.js` para el tema claro.
2. Guardar el archivo y ejecutar la verificación completa:

```bash
pnpm check
```

Este comando regenera `themes/esmerald.json` y `themes/esmerald-light.json`, y comprueba que los colores usados pertenezcan a la paleta correcta.

3. Revisar visualmente el tema en VS Code. Si la extensión está instalada, ejecutar `Developer: Reload Window` después de regenerar los temas.
4. Si el resultado es correcto, empaquetar la extensión:

```bash
pnpm package
```

5. Antes de publicar, comprobar que el archivo `.vsix` se haya generado correctamente. Para publicar:

```bash
pnpm publish
```

### Cambios en scopes

Usar este comando únicamente después de modificar las reglas de scopes en `src/languages/_dark_base.js` o `src/languages/_light_base.js`:

```bash
pnpm group
pnpm check
```

No ejecutar `pnpm group` solo por cambiar un color: ese comando reagrupa y reescribe las reglas `tokenColors`.
