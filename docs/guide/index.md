---
title: Getting Started | Guide
---

# Getting Started

## Overview

Vitify Admin is an opinionated admin starter template.

You can learn more about the rationale behind the project in the [Why Vitify Admin](./why) section.

## Trying Vitify Online

You can try Vitify Admin online on [Netlify](https://vitify-admin.netlify.app/). Enter any username and password in demo login page to enter the home page.

## Project Structure

```bash
├── .github               # GitHub Actions workflows
├── .vscode               # settings of VSCode workspace
├── cypress               # E2E spec files
├── dist                  # output folder of production bundle
├── patches               # patches for packages in node_modules
├── public                # pure static assets (directly copied)
├── scripts               # scripts
├── src                   # application code
│   ├── api               # API service
│   ├── assets            # assets
│   │   ├─ icons          # SVG icons
│   │   ├─ images         # images
│   │   └─ styles         # global Sass/CSS
│   ├── components        # components
│   ├── composables       # global composables
│   ├── layouts           # layout components
│   ├── locales           # i18n locale messages
│   ├── mocks             # API mocking data
│   ├── pages             # pages
│   ├── plugins           # third-party plugins
│   ├── stores            # pinia stores
│   ├── App.vue           # root component
│   ├── auto-imports.d.ts # type declaration generated by `unplugin-auto-import`
│   ├── components.d.ts   # type declaration for global components
│   ├── main.ts           # JavaScript entry point
│   ├── route-meta.ts     # type declaration for route meta
│   ├── shim.d.ts         # shim missing types in dependencies
│   └── vuetify2.d.ts     # type declaration for Vuetify2 components
├── test                  # unit testing setup and helper files
├── .editorconfig         # EditorConfig settings
├── .env                  # environment variables
├── .env.local            # local environment variables
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # git intentionally untracked files settings
├── .npmrc                # pnpm/npm/yarn configuration
├── .prettierrc           # Prettier configuration
├── cypress.config.ts     # Cypress configuration
├── env.d.ts              # type declaration for `import.meta.env`
├── index.html            # entry point
├── LICENSE               # license
├── netlify.toml          # Netlify deployment configuration
├── package.json          # project metadata
├── pnpm-lock.yaml        # pnpm lock file
├── postcss.config.ts     # PostCSS configuration
├── README.md             # README file
├── tsconfig.app.json     # TypeScript options for application code
├── tsconfig.cypress.json # TypeScript options for Cypress spec files
├── tsconfig.json         # TypeScript options root file
├── tsconfig.config.json  # TypeScript options for Vite configuration
├── tsconfig.vitest.json  # TypeScript options for Vitest files
└── vite.config.ts        # Vite configuration
```

## Use Vitify Admin to Start your Project

:::tip
Vitify Admin requires Node >=v16
:::

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kingyue737/vitify-admin/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit kingyue737/vitify-admin my-vitify-app
cd my-vitify-app
pnpm i
```

> Vitify Admin requires [`pnpm patch`](https://pnpm.io/cli/patch) to fix bugs in dependencies before maintainers release them. If you are using `yarn`, you can use [`yarn patch`](https://yarnpkg.com/cli/patch). For `npm` users, [`patch-package`](https://github.com/ds300/patch-package) is required as `npm` has no built-in patching functionality.

## Usage

### Development

Just run and visit <a href="http://localhost:9527" target="_blank" rel="noreferrer">localhost:9527</a>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Type Check

```bash
pnpm typecheck
```

### Testing

```bash
pnpm test:unit
```

For E2E test, you need to build the project first

```bash
pnpm build
pnpm test:e2e
```

## Contribution

The repository of documentation is [vitify-docs](https://github.com/kingyue737/vitify-docs) based on [VitePress](https://vitepress.vuejs.org/).

There may be some spelling or translation errors in the course of writing this document. It is welcome to point out by issue or PR.

Vitify Admin is also continuing to iterate, include more features and incorporate best practices. Once Vuetify v3.1 is released, I will create a new branch for Vue 3. This project is also very much looking forward to your participation and [feedback](https://github.com/kingyue737/vitify-admin/issues). Don't hesitate to open a [discussion](https://github.com/kingyue737/vitify-admin/discussions) if you have any question.
