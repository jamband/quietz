<template>
  <div class="d-flex flex-column min-vh-100">
    <TheHeader />
    <TheBreadcrumb />
    <div class="container flex-grow-1">
      <h1 v-if="hasRouteName">{{ headerTitle }}</h1>
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import { APP_NAME, APP_DESCRIPTION } from '~/plugins/constants'
import { capitalize } from '~/plugins/format'

export default {
  computed: {
    hasRouteName () {
      return this.$route.name !== null
    },
    isHome () {
      return this.$route.name === 'index'
    },
    headerTitle () {
      return this.isHome
        ? 'Home'
        : capitalize(this.$route.name || '')
    }
  },
  head () {
    const title = this.isHome || !this.hasRouteName
      ? APP_NAME
      : `${this.headerTitle} · ${APP_NAME}`

    const description = /^(index|about|contact)$/.test(this.$route.name || '') || !this.hasRouteName
      ? APP_DESCRIPTION
      : `${this.headerTitle} example for Nuxt.js and Bootstrap 5`

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description }
      ]
    }
  }
}
</script>
