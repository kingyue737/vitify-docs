# Icon

[Material Design Icons (MDI)](https://materialdesignicons.com/) is the SVG icon set used in this template, which is one of the [presets](https://vuetifyjs.com/en/features/icon-fonts/) in Vuetify.

## Usage

To use any of icons from MDI, you need to first import and register it in [`icons.ts`](https://github.com/kingyue737/vitify-admin/blob/main/src/plugins/icons.ts) in module folder.

```ts
// src/plugins/icons.ts
import {
  mdiAlert,
  mdiEye,
  mdiEyeOff,
  mdiBell,
} from '@mdi/js'

// icons in `mdi` object will be registered in Vuetify
const mdi = {
  mdiAlert,
  mdiEye,
  mdiEyeOff,
  mdiBell,
}
```

Then you can simply use the registered icons in `<v-icon>` component with the `$mdi-` prefix followed by the icon name in kebab case.
```vue-html
<v-icon>$mdi-alert</v-icon>
```

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
    import.meta.glob<Component>('@/assets/icons/*.svg', {
      eager: true,
      import: 'default',
    })
  ).map(([k, v]) => [filename(k), { component: v }])
)
```

Then all the SVG icons imported will be compiled to Vue components by [`vite-plugin-vue2-svg`](https://github.com/pakholeung37/vite-plugin-vue2-svg), and registered in Vuetify.
