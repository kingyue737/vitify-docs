import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vitify Admin",
  base: "/vitify-docs/",
  description: "Vite + Vuetify, Opinionated Admin Starter Template",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.svg",

    editLink: {
      pattern: "https://github.com/vitest-dev/vitest/tree/main/docs/:path",
      text: "Suggest changes to this page",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT Yue JIN, NuStar Nuclear",
    },

    nav: [{ text: "Guide", link: "/guide/" }],
    sidebar: {
      "/": [
        {
          text: "Guide",
          items: [
            {
              text: "Why Vitify",
              link: "/guide/why",
            },
            {
              text: "Getting Started",
              link: "/guide/",
            },
            {
              text: "Migration from Vue CLI",
              link: "/guide/migration",
            },
            {
              text: "I18n",
              link: "/guide/i18n",
            },
            {
              text: "Theme",
              link: "/guide/theme",
            },
          ],
        },
      ],
    },
  },
});
