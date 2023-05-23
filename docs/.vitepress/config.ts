import { defineConfig } from "vitepress";

const ogTitle = "Vitify Admin";
const ogDescription = "Vite + Vuetify, Opinionated Admin Starter Template";
const ogImage = "https://kingyue737.github.io/vitify-docs/og.jpg";
const ogUrl = "https://kingyue737.github.io/vitify-docs/";

export default defineConfig({
  title: ogTitle,
  base: "/vitify-docs/",
  description: ogDescription,
  head: [
    [
      "link",
      { rel: "icon", href: "/vitify-docs/favicon.svg", type: "image/svg+xml" },
    ],
    ["meta", { name: "author", content: "Yue JIN" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vuetify, vite, typescript, vue, pinia, vitest, cypress, admin, template, starter, i18n",
      },
    ],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "theme-color", content: "#0d90ee" }],
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  appearance: "dark",
  themeConfig: {
    logo: "/favicon.svg",
    outline: [2, 3],

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

    algolia: {
      appId: "YGFDNKGJ79",
      apiKey: "0fb927520e36348631e0297ef9c16cd7",
      indexName: "vitify",
    },

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
            {
              text: "Backend",
              link: "/guide/backend",
            },
          ],
        },
      ],
    },
  },
});
