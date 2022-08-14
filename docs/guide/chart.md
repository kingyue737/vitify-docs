# Chart

Data visualization with charts is common requirement in an admin platform. In Vitify Admin, we use [vue-echarts](https://github.com/ecomfe/vue-echarts), a Vue.js component for [Apache ECharts](https://echarts.apache.org/en/index.html). Vue-ECharts component auto resizes ECharts instance when the size of its parent container changes and bind ECharts events with Vue's `v-on` directive.

We encourage manually importing components and charts from ECharts for smaller bundle size. See all supported renderers/charts/components [here →](https://github.com/apache/echarts/blob/master/src/echarts.all.ts). According your requirement, adjusting which features of ECharts to included in [`src/plugins/echarts.ts`](https://github.com/kingyue737/vitify-admin/blob/main/src/plugins/echarts.ts).

## Configure Contextual Options

Vue-ECharts provides provide/inject API for theme, init-options, update-options and loading-options to help configuring contextual options.
You can notice that reactive state of `locale` and `theme` are provided from `App.vue` to control dark mode and locale of all ECharts instances.

```ts
const vuetify = useVuetify()
const { locale } = useI18n()
provide(
  THEME_KEY,
  computed(() => (vuetify?.theme.dark ? 'dark' : undefined))
)
provide(
  INIT_OPTIONS_KEY,
  computed(() => ({ locale: locale.value.toUpperCase() }))
)
```
