# ESLint

Whether it's a multi-person collaboration or personal projects, code specifications are important. It can not only avoids basic syntax errors, but also ensures the readability of the code.


## Config

The ESLint config of Vitify Admin is based on [`@vue/eslint-config-typescript`](https://github.com/vuejs/eslint-config-typescript) which uses [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) to parse `.vue` file and extends [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) to parse `.ts` file. The config also extends [`@vue/eslint-config-prettier`](https://github.com/vuejs/eslint-config-prettier) which turns off rules of ESLint conflicting with Prettier.

## Auto Linting on Save

Just install Microsoft's [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VSCode extension.

## Lint with CLI command

```
pnpm lint
```
