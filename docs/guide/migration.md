# Migration from Vue CLI

:::tip NOTE
This guide assumes that you are familiar with Vite. A good way to start learning more is to read the [Why Vite Guide](https://vitejs.dev/guide/why.html), and [Next generation frontend tooling with ViteJS](https://www.youtube.com/watch?v=UJypSr8IhKY), a stream where [Evan You](https://twitter.com/youyuxi) did a demo explaining the main concepts.
:::

Vue CLI has entered maintainance mode. Vue team recommend Vite for new Vue projects. However, Vuetify 2 does not have an official vite plugin to serve the same role as [Vuetify loader](https://github.com/vuetifyjs/vuetify-loader) in Webpack. It doesn't matter, with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) and built-in css pre-processing features of Vite. We can easily migrate our Vuetify 2 project to Vite.

## Auto Import Vuetify 2 components

First install the plugin

```bash
pnpm install unplugin-vue-components -D
```

Then add the plugin in `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

defineComponent({
  plugins: [
     vue2(),
     Components({
        resolvers: [VuetifyResolver()],
     })
  ]
})
```

### Custom Resolver

Note the [built-in Vuetify resolver](https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/vuetify.ts) in this plugin is quite brutal, all the components whose name begin with V and a captial letter will be considered as Vuetify components, for example `<VChart />`. So I define a custom resolver which can exclude specific components.

```ts
Components({
  resolvers: [
    {
      type: 'component',
      resolve: (name: string) => {
        const blackList = ['VChart', 'VHeadCard']
        if (name.match(/^V[A-Z]/) && !blackList.includes(name))
          return { name, from: 'vuetify/lib' }
      },
    },
  ],
  dts: false,
  types: [],
}),
```
In the above example, `<VChart />` and `<VHeadCard />` will not be considered as Vuetify components and not auto imported.

## Custom Sass variables

Another feature of Vuetify Loader is loading [custom Sass variables](https://vuetifyjs.com/en/features/sass-variables/) of Vuetify. This can be achieved by [CSS Pre-processors](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions) of Vite.

```ts
defineComponent({
  css: {
    // https://vitejs.dev/config/#css-preprocessoroptions
    preprocessorOptions: {
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/styles/variables.scss"',
          '',
        ].join('\n'),
      },
    },
  },
})
```
