<template>
  <footer class="fixed-bottom py-3 text-center bg-light">
    <nav class="container" aria-label="Footer navigation">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <a :href="app.repositoryUrl" rel="noopener" target="_blank">GitHub</a>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'contact' }">Contact</NLink>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'about' }">About</NLink>
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
