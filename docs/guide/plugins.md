# Plugins

All the TypeScript source files in `src/plugins` folder will be auto imported. This is a custom user plugin system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import type { InstallPlugin } from '@/utils/types'

export const install: InstallPlugin = (vue) => {
  // do something
}
```

The advantage of wrap install logic and global registeration in a function which receive a `Vue` instance, instead of directly call
```
Vue.use(Plugin)
// or
Vue.component(MyComponent)
```
is not only for auto importing. We can reuse them in unit/component testing setup. As in testing, we should install plugins on a `localVue` instead of global vue instance. For example, reuse the same I18n config of application code in unit testing (refer to more information in [testing section](./testing)):

```ts
import { createLocalVue, mount } from '@vue/test-utils'
import Component from '../Component.vue'
import { install as installI18n } from '@/plugins/i18n'
import { render } from '@testing-library/vue'

// vue-test-utils
const localVue = createLocalVue()
const i18n = installI18n(localVue)
const mountOptions = { localVue, i18n }
mount(Component, mountOptions)


// @testing-library/vue
render(
  component,
  { ...options },
  (vue) => {
    const i18n = installI18n(vue)
    return { i18n }
  }
)
```
