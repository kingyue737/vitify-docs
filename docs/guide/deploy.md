# Build & Deploy

## Build

When projects are completed, you can build your application with the following command:

```sh
pnpm build
```

### Chunking Strategy

By default, we include the official [`splitVendorChunkPlugin`](https://vitejs.dev/guide/build.html#chunking-strategy) to divide the chunks into `index` and `vendor`. However, it may not be a good solution for every Vite target use case. You can remove this plugin or customize the strategy according to your own case.

### Browser Compatibility

Browser compatibility consists of transpilation and polyfill. By specifying custom targets via the [`build.target` config options](https://vitejs.dev/config/build-options.html#build-target), where the lowest target is `es2015`, Vite can handle the transpilation and transform syntax to what can be understand by the target browsers.

For polyfills, there are two solutions. Vite recommend [Polyfill.io](https://polyfill.io/v3/) which is a service that automatically generates polyfill bundles based on the user's browser UserAgent string. However, it may not be a good solution if you are building product for instituts or governments which do not have access to internet, which is common for admin projects.

In Vitify Admin, we support legacy browsers via [`@vitejs/plugin-legacy`](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy), which will automatically generate legacy chunks and corresponding ES language feature polyfills. The legacy chunks are conditionally loaded only in browsers that do not have native ESM support.

Note that there are several issues with `@vitejs/plugin-legacy`, it doesn't read your `browserslist` config to decide the browsers to support, which is a long-lived bug [#2476](https://github.com/vitejs/vite/issues/2476). You need to manually set `target` in config of this plugin. Secondly, `modernpolyfills` always targets to all browsers supporting ESM, no matter what `targets` in plugin config are set [#6922](https://github.com/vitejs/vite/issues/6922)
. Thirdly, `@vitejs/plugin-legacy` always generates modern bundles. There is no way to make it only output the legacy bundles that support all target browsers (loaded via plain `<script>`s) [#9050](https://github.com/vitejs/vite/issues/9050).
#### Check Whether Browser is Supported on Client Side

Sometimes we want to test if the user's browser is supported by our application and give a warning if not. [`vite-plugin-browserslist-useragent`](https://github.com/kingyue737/vite-plugin-browselist-useragent/) can find if a given user agent match your browselist query. You can remove this plugin if you don't need check browser client.

## Deploy

### GitHub Actions

Vitify Admin has already setuped [GitHub Actions](https://github.com/features/actions) for type checking, linting, unit testing and E2E testing in .

Once you push code to `main` branch or any pull request is created for `main` branch, GitHub will automate the workflows for you.

#### Cypress Dashboard

The [Cypress Dashboard](https://dashboard.cypress.io/) Service is an optional web-based companion to the Cypress app. It provides timely, simple and powerful insights on all your tests run at a glance.

Go to Cypress Dashboard, create a new project and add its `projectId` as `${CYPRESS_PROJECT_ID}`, its `record key` as `$CYPRESS_RECORD_KEY` in your repositry secrets (https://github.com/your-name/project-name/settings/secrets/actions).

If you don't want to use Cypress Dashboard, remove `record: true` and the entire `env` block from [`.github/workflows/ci.yml`](https://github.com/kingyue737/vitify-admin/blob/main/.github/workflows/ci.yml):

```yaml{7,9-15}
- name: Cypress
  uses: cypress-io/github-action@v4
  with:
    install-command: echo
    build: pnpm run build
    start: pnpm run preview
    record: true
    command-prefix: '--'
  env:
    # pass the Dashboard record key as an environment variable
    CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
    # pass GitHub token to allow accurately detecting a build vs a re-run build
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    # pass the project ID from the secrets through environment variable
    CYPRESS_PROJECT_ID: ${{ secrets.CYPRESS_PROJECT_ID }}
```

GitHub actions will still run E2E testing for you, but you can no longer watch the video and screenshots of tests.

### Netlify

The [online demo](https://vitify-admin.netlify.app) of Vitify Admin is deployed by Netlify. All you need to deploy your own app online is to go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your app will be live in a minute. Deploy config [`netlify.toml`]() has already been included in this template.
