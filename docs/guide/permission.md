# Permission

Vitify Admin implements route-level permission via [Navigation Guards](https://v3.router.vuejs.org/guide/advanced/navigation-guards.html). Before entering a route, user's role is compared with its meta info `route.meta.roles` to determine whether allowed to enter.

```ts
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  // Determine whether the user has logged in
  if (userStore.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // Check whether the user has obtained his permission roles
      if (userStore.roles.length === 0) {
        try {
          await userStore.getUserInfo()
        } catch (e) {
          // Remove token and redirect to login page
          userStore.resetToken()
          Message.error(e)
          next('/login')
          return
        }
      }
      // If user's role is permitted, go
      if (!to.meta?.roles || isPermitted(to.meta.roles)) {
        next()
        return
      }
      // Redirect to 404 error page if not permitted
      next({ name: 'all' })
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
```

## Why not Dynamic Routes?

The implementation of some popular project's permission like [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/permission.html#permission) is: compare the routing table by obtaining the current user's permission, and generate the routing table accessible by the current user with the permission, and dynamically mount it to router through [`router.addRoute`](https://v3.router.vuejs.org/api/#router-addroute). However, you cannot debug routes with [Vue Devtools](https://github.com/vuejs/devtools) as it does not support debugging dynamic routing [#917](https://github.com/vuejs/devtools/issues/917).

## Permission Utils

With permission util function, you can easily and quickly implement button-level permission judgment. In the following example, only user with `admin` role can click the button.

```vue
<template>
  <v-btn :disabled="!permitted"></v-btn>
</template>

<script setup lang="ts">
import { isPermitted } from '@/utils/permission'
const permitted = computed(() => isPermitted(['admin']))
</script>
```
