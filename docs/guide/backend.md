# Backend

This guide is working in progress...

## Python

A [FastAPI](https://fastapi.tiangolo.com/) backend template for Vitify Admin is under construction.

### Name convention conflict

While in frontend we name variables and keys of objects with [camel case](https://en.wikipedia.org/wiki/Camel_case), [snake case](https://en.wikipedia.org/wiki/Snake_case) should be used for them in Python according to [PEP 8](https://peps.python.org/pep-0008/#function-and-variable-names). [`axios-case-converter`](https://github.com/mpyw/axios-case-converter) is an Axios transformer/interceptor which can convert _snake_case/camelCase_, avoiding mixing two name conventions in your source code.

Apply this transformer to axios instance:

```ts
// @/utils/request.ts
import applyCaseMiddleware from "axios-case-converter";

const service = applyCaseMiddleware(
  axios.create({
    /* axios config */
  })
);
```
