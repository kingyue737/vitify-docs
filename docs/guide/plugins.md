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
// vue-test-utils
```
