<template>
  <div>
    <p>
      {{ app.name }} is my private playground for
      <a href="https://nuxtjs.org" rel="noopener" target="_blank">Nuxt.js</a> and
      <a href="https://getbootstrap.com" rel="noopener" target="_blank">Bootstrap 5</a>.
    </p>
    <p>
      This website is an open source project. See
      <a
        :href="app.repositoryUrl"
        rel="noopener"
        target="_blank"
      ><IconGitHub /> GitHub {{ app.repositoryName }}</a>
      for details.
    </p>
  </div>
</template>

<script>
import { APP_NAME, APP_REPOSITORY_URL, APP_REPOSITORY_NAME } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        name: APP_NAME,
        repositoryName: APP_REPOSITORY_NAME,
        repositoryUrl: APP_REPOSITORY_URL
      }
    }
  }
}
</script>
