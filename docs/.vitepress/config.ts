import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vitify Admin",
  base: "/vitify-docs/",
  description: "Vite + Vuetify, Opinionated Admin Starter Template",
  head: [
    [
      "link",
      { rel: "icon", href: "/vitify-docs/favicon.svg", type: "image/svg+xml" },
    ],
  ],
  ignoreDeadLinks: true,
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
              text: "TypeScript",
              link: "/guide/typescript",
            },
            {
              text: "Plugins",
              link: "/guide/plugins",
            },
            {
              text: "Router & Nav",
              link: "/guide/router",
            },
            {
              text: "Permission",
              link: "/guide/permission",
            },
            {
              text: "Style",
              link: "/guide/style",
            },
            {
              text: "API Mocking",
              link: "/guide/mock",
            },
            {
              text: "Build & Deploy",
              link: "/guide/deploy",
            },
            {
              text: "Environment Variables",
              link: "/guide/environment-variables",
            },
            {
              text: "Testing",
              link: "/guide/testing",
            },
          ],
        },
        {
          text: "Advanced",
          items: [
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
              text: "Chart",
              link: "/guide/chart",
            },
            {
              text: "ESLint",
              link: "/guide/eslint",
            },
            {
              text: "Formatter",
              link: "/guide/formatter",
            },
          ],
        },
      ],
    },
  },
});
