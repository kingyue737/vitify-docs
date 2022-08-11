# Migration from Vue CLI

Vue CLI has entered maintainance mode. Vue team recommend Vite for new Vue projects. However, Vuetify 2 does not have an official vite plugin to serve the same role as [Vuetify loader](https://github.com/vuetifyjs/vuetify-loader) in Webpack. It doesn't matter, with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) and built-in css pre-processing features of Vite. We can easily migrate our Vuetify 2 project to Vite.
