# Why Vitify

## The need for a Vue 2.7 starter template

::: tip NOTE
We now have a template of Vue 3 version. Try it on github [kingyue737/vitify-next](https://github.com/kingyue737/vitify-next).

Recommend the new Nuxt 3 + Vuetify 3 template [vitify-nuxt](https://github.com/kingyue737/vitify-next) with the best DX 🔥🔥🔥
:::

I made this starter template for promptly scaffolding admin projects of my company, along with some good practices I've learned during making these apps.

As TypeScript gets more and more popular, Volar becomes the new official VSCode extension of Vue. Vuetify 2, however, [does not support Volar officially](https://github.com/vuetifyjs/vuetify/issues/14798). Therefore, I tried generating components types from `web-types` of Vuetify and successfully bring intellisense and type check to Vuetify project.

Currently, plenty of awesome Vue 2 librarys have not migrated to Vue 3 ecosystem, maybe never 😭. There is still a long way to go before Vuetify v3 to include all components of Vuetify 2. So I struggle with bridging perfect DX of Vue 3 to my Vuetify 2 projects. It's strongly opinionated, but hope it can help you to avoid detours.

## How is Vitify Admin Different from X

Vitify Admin is based on Vue 2 to profit the large part ecosystem of Vue 2 which has not support Vue 3 yet, while try backporting as much as possible the features from Vue 3 ecosystem. This is a concise starter template that works out of the box including only essential plugins and components from my perspective. It's up to you to add more features according to your purpose.

Here is a [slide](https://docs.nustarnuclear.com/vitify-slide/) I used to introduce this template to my colleagues, which is made by Slidev but in Chinese.

## Preparation

You need to install [node](http://nodejs.org/) and [git](https://git-scm.com/) locally. The project is based on ES2022, TypeScript, [Vite](https://vitejs.dev/), [Vue](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/), [Pinia](https://pinia.vuejs.org/), [Vue Router](https://router.vuejs.org/), [Vitest](https://vitest.dev/) and [axios](https://axios-http.com/docs/intro), all request data is simulated using [Mock Service Worker](https://mswjs.io/). Understanding and learning these knowledge in advance will greatly help the use of this project.
