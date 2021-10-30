<template>
  <footer class="fixed-bottom py-3 text-center bg-light">
    <nav class="container" :class="$style.contents" aria-label="Footer navigation">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <NLink :to="{ name: 'about' }" class="px-2 py-2">About</NLink>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'contact' }" class="px-2 py-2">Contact</NLink>
        </li>
        <li class="list-inline-item">
          <a :href="app.repositoryUrl" class="px-2 py-2" rel="noopener" target="_blank">GitHub</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import { APP_REPOSITORY_URL } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        repositoryUrl: APP_REPOSITORY_URL
      }
    }
  }
}
</script>

<style lang="scss" module>
.contents {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
