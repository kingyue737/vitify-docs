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
      pattern: "https://github.com/kingyue737/vitify-docs/tree/main/docs/:path",
      text: "Suggest changes to this page",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/kingyue737/vitify-admin" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT Yue JIN, NuStar Nuclear",
    },

    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "NuStar Nuclear", link: "https://www.nustarnuclear.com" },
    ],
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
            {
              text: "Icon",
              link: "/guide/icon",
            },
            {
              text: "API mocking",
              link: "/guide/mock",
            },
            {
              text: "Chart",
              link: "/guide/chart",
            },
          ],
        },
      ],
    },
  },
});
