---
title: Getting Started | Guide
---

# Getting Started

## Overview

Vitify Admin is an opinionated admin starter template.

You can learn more about the rationale behind the project in the [Why Vitify Admin](./why) section.

## Trying Vitify Online

You can try Vitify Admin online on [Netlify](https://vitify-admin.netlify.app/). Enter any username and password in demo login page to enter the home page.

## Try Vitify Admin now!

:::tip
Vitify Admin requires Node >=v16
:::

### Github Template

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

Just run and visit localhost:9527

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

```
pnpm typecheck
```

### Testing

```
pnpm test:unit
```

For E2E test, you need to build the project first

```
pnpm build
pnpm test:e2e
```
