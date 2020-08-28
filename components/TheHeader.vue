<template>
  <header class="fixed-top py-3 text-center bg-light">
    <nav class="container" aria-label="Header navigation">
      <NLink :to="{ name: 'index' }" class="text-decoration-none">{{ app.name }}</NLink>
    </nav>
  </header>
</template>

<script>
import { APP_NAME } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        name: APP_NAME
      }
    }
  }
}
</script>
