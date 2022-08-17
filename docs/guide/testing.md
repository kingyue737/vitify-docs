# Testing

Documentation coming soon...

## Unit/Component Testing

## E2E Testing


### Cypress Download Speed

Downloading Cypress binary can be extremely slow, which is a long-lived issue bothers users all around the world [#7251](https://github.com/cypress-io/cypress/issues/7251) [#17652](https://github.com/cypress-io/cypress/issues/17652) [#19612](https://github.com/cypress-io/cypress/issues/19612) [#20032](https://github.com/cypress-io/cypress/issues/20032).

Since v10.6.0, Cypress enhanced the [`CYPRESS_DOWNLOAD_PATH_TEMPLATE`](https://docs.cypress.io/guides/references/advanced-installation#Environment-variables) environment variable interpolation to accept and replace `${version}` to allow version-specific download paths to be honored. Therefore, for developers in China, we can set environment variables to download the binary from [npmmirror](https://npmmirror.com/) instead of the orginal snail-slow Cloudflare. Add the following environment variable to your system:
```ini
CYPRESS_DOWNLOAD_PATH_TEMPLATE=https://cdn.npmmirror.com/binaries/cypress/${version}/${platform}-${arch}/cypress.zip
```
