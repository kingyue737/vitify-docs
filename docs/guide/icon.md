# Icon

[Material Design Icons (MDI)](https://materialdesignicons.com/) is the SVG icon set used in this template, which is one of the [presets](https://vuetifyjs.com/en/features/icon-fonts/) in Vuetify.

## Inline SVG replacement

We use `@mdi/js` instead of `@mdi/font` to significantly reduce bundle size, by avoiding including all the icons in the final bundle. SVG icon is also a better choice than icon Fonts in the world of modern web. All the Material Design Icon names existing in source files will be replaced by SVG path via [@rollup/plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace). For example,

```vue-html
<v-icon>mdi-bell</v-icon>
```

will become

```vue-html
<v-icon>M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21</v-icon>
```

We've already configured it for you. Just use `<v-icon>` as mentioned in Vuetify official docs.

If you still want to use `@mdi/font` instead of `@mdi/js`, remove this plugin from `vite.config.ts`.

## Custom SVG icons

If you don't find desired icon in MDI, you can add any SVG icons in `src/assets/icons` folder. The icons in this folder will be auto registered as Vuetify icon with the same name as the filename of `.svg`. For example, in this template, we already have `nustar.svg` in icons folder. We can directly use it:

```vue-html
<v-icon>$nustar</v-icon>
```

Auto registering all the SVGs in the folder is implemented by [Glob Import](https://vitejs.dev/guide/features.html#glob-import) of Vite:

```ts
// src/plugins/icons.ts
const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob<Component>("@/assets/icons/*.svg", {
      eager: true,
      import: "default",
    })
  ).map(([k, v]) => [filename(k), { component: v }])
);
```

Then all the SVG icons imported will be compiled to Vue components by [`vite-plugin-vue2-svg`](https://github.com/pakholeung37/vite-plugin-vue2-svg), and registered in Vuetify.
