<template>
  <div>
    <div v-if="$fetchState.pending" class="text-center">
      <AppLoading />
    </div>
    <div v-else>
      <p class="text-center">
        {{ content }}
      </p>
      <PaginationMinimal :current-page="currentPage" :page-count="pageCount" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  fetch () {
    this.content = '.'.repeat(this.currentPage)
  },
  fetchDelay: 500,
  computed: {
    currentPage () {
      return Number(this.$route.query.page) || 1
    },
    pageCount () {
      return 26
    }
  },
  watch: {
    '$route.query': '$fetch'
  }
}
</script>
