<template>
  <div class="d-flex flex-column min-vh-100 py-7">
    <TheHeader />
    <TheBreadcrumb />
    <div class="container flex-grow-1">
      <h1 v-if="hasRouteName">{{ title }}</h1>
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
    routeName () {
      return this.$route.name || ''
    },
    hasRouteName () {
      return this.routeName !== ''
    },
    isHome () {
      return this.routeName === 'index'
    },
    title () {
      return this.isHome
        ? 'Home'
        : capitalize(this.routeName)
    }
  },
  head () {
    const title = this.isHome || !this.hasRouteName
      ? APP_NAME
      : `${this.title} · ${APP_NAME}`

    const description = /^(index|about|contact)$/.test(this.routeName) || !this.hasRouteName
      ? APP_DESCRIPTION
      : `${this.title} example for Nuxt.js and Bootstrap 5`

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
