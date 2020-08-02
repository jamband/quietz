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
        : this.$format.capitalize(this.$route.name)
    }
  },
  head () {
    const title = this.isHome || !this.hasRouteName
      ? this.$app.name
      : `${this.headerTitle} · ${this.$app.name}`

    const description = /^(index|about|contact)$/.test(this.$route.name) || !this.hasRouteName
      ? this.$app.description
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
