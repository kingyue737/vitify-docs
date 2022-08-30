# API mocking

API mocking is an integral part of the front-end development, the key link to separate the front and back-end development. By pre-agreed with the server-side interface, analog request data and even logic, can make the front-end development independent, will not be blocked by the development of the server.

## Mock Service Worker

[Mock Service Worker (msw)](https://github.com/mswjs/msw) is the only library that I recommend to mock API, which brings the ability of [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to capture requests and enables API mocking on the highest level of the network communication chain, allowing you to use it without changing any of your application code. It is the closest thing to a mocking server without having to create one.

### Auto Tree-shaking mock service in production

In Vitify Admin, Mock Service Worker is conditionally imported into our application's code and will be totally removed in final bundle. You don't need to change any code in application source in order to build a production bundle.

```ts
// src/main.ts
if (import.meta.env.VITE_MOCK && import.meta.env.DEV) {
  ;(await import('./mocks')).worker.start({
    onUnhandledRequest: 'bypass',
  })
}
```
:::tip NOTE
In source code of Vitify Admin, I don't include `import.meta.env.DEV` in condition check so that all the data in [online demo](https://vitify-admin.netlify.app/) come from mock worker instance. As a result, the online demo can only be viewed in browsers supporting [top level await](https://caniuse.com/mdn-javascript_operators_await_top_level). Don't forget to add `import.meta.env.DEV` in your own code to ensure no mock service in production bundle.
:::

### Unit Testing

Mock Service Worker can run not only on browser side but also in Node. It is also recommended by [Vitest](https://vitest.dev/) to mock API in unit testing. Refer to the [example](https://vitest.dev/guide/mocking.html#requests) in Vitest documentation for how to mock network requests in testing environment.
