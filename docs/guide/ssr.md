# SSR

We now have a stater template [Vitify Nuxt](https://github.com/kingyue737/vitify-nuxt) based on [Nuxt 3](https://nuxt.com/). It has configured with SSR functionality out of the box, powered by [Vuetify Nuxt module](https://github.com/userquin/vuetify-nuxt-module).

SSR is not turned on by default in `vitify-nuxt` since there is a [layout bug](https://github.com/vuetifyjs/vuetify/issues/15202) in Vuetify related with SSR. You can set `ssr: true` in [`nuxt.config.ts`](https://github.com/kingyue737/vitify-nuxt/blob/main/nuxt.config.ts) to enable it.

Nuxt 3 also works perfectly with SPA or SSG. It's highly recommend to use Nuxt 3 for better Vue developer experience and more consistent maintenance.
