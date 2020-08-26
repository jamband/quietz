<template>
  <nav class="container mt-4" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(route, index) in routes"
        :key="index"
        :aria-current="isCurrent(index) ? 'page' : null"
        :class="{ active: isCurrent(index) }"
        class="breadcrumb-item"
      >
        <template v-if="isCurrent(index)">
          {{ route.text }}
        </template>
        <template v-else>
          <NLink :to="{ name: route.name }">{{ route.text }}</NLink>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script>
import { capitalize } from '~/plugins/format'

export default {
  computed: {
    routes () {
      const name = this.$route.name
      if (name === null) {
        return []
      }
      const home = { name: 'index', text: 'Home' }
      if (name === 'index') {
        return [home]
      }
      return [
        home,
        { name, text: capitalize(name) }
      ]
    }
  },
  methods: {
    isCurrent (index) {
      return this.routes.length === index + 1
    }
  }
}
</script>
