# Why Vitify

:::tip NOTE
This guide assumes that you are familiar with Vite and have already tried Vuetify. A good way to start learning more is to read the Why Vite Guide, and Next generation frontend tooling with ViteJS, a stream where Evan You did a demo explaining the main concepts.
:::

## The need for a Vue 2.7 starter template

I made this starter template for promptly scaffolding admin projects of my company, along with some good practices I've learned during making these apps.

As TypeScript gets more and more popular, Volar becomes the new official VSCode extension of Vue. Vuetify 2, however, [does not support Volar officially](https://github.com/vuetifyjs/vuetify/issues/14798). Therefore, I tried generating components types from `web-types` of Vuetify and successfully bring intellisense and type check to Vuetify project.

Currently, plenty of awesome Vue 2 librarys have not migrated to Vue 3 ecosystem, maybe never 😭. There is still a long way to go before the release of version Vuetify v3.1 which includes all components of Vuetify 2. So I struggle with bridging perfect DX of Vue 3 to my Vuetify 2 projects. It's strongly opinionated, but hope it can help you to avoid detours.
