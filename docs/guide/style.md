# Style

## CSS Pre-processor

Vite provides built-in support for `.scss`, `.sass`, `.less`, `.styl` and `.stylus` files. As Vuetify styles are written in [Sass](https://sass-lang.com/), we choose SCSS which has out-of-the-box support in VSCode.

## Styles Folder Structure

All global styles of Vitify Admin are set in the `@/assets/styles` directory.

```
├── styles
│   ├── _overrides.scss          # global style overrides vuetify predefined style
│   ├── _scrollbar.scss          # custom scrollbar style (only works in chromium)
│   ├── _utils.scss              # style utils
│   ├── index.scss               # entry point of global styles
│   ├── variables.scss           # custom Sass variables
│   └── vuetify-variables.scss   # custom Vuetify Sass variables
```

The common workflow is that the global styles are written in the `@/assets/styles` directory and each page's own style is written in its own `.vue` file.

```vue
<style scoped lang="scss">
/* local styles */
</style>
```

## PostCSS

Valid PostCSS config (any format supported by [postcss-load-config](https://github.com/postcss/postcss-load-config), e.g. `postcss.config.ts`), will be automatically applied to all imported CSS. Vitify Admin includes [PostCSS Preset Env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) which converts modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers (retrieve from [Browserslist](https://github.com/browserslist/browserslist)) or runtime environments. It also packs [Autoprefixer](https://github.com/postcss/autoprefixer) within and shares the list with it, so prefixes are only applied when you're going to need them given your browser support list.
