# Environment Variables

Vite exposes env variables on the special `import.meta.env` object. During production, these env variables are statically replaced. Refer to the [documentations](https://vitejs.dev/guide/env-and-mode.html#env-variables) for more details.

:::tip NOTE
To prevent accidentally leaking env variables to the client, only variables prefixed with `VITE_` are exposed to your Vite-processed code.
:::

## Example

In this template, we have already defined two environment variables:
- `VITE_MOCK` controls the switch of [API mocking](./mock), a truthy value will turn on the mock worker.
- `VITE_API_URL` set url of backend server, default is `${window.location.protocol}//${window.location.hostname}:9529/api/v1`

If you want to add new environment variables, you can get their types and intellisense by adding them in `env.d.ts`:

```ts
// env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_MOCK: string
  /* add more environment variables here */
}
```
