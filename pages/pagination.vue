<template>
  <div>
    <p class="text-center">
      {{ content }}
    </p>
    <PaginationMinimal :current-page="currentPage" :page-count="pageCount" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: '.'.repeat(26)
    }
  },
  computed: {
    content () {
      return this.data.slice(0, this.currentPage)
    },
    currentPage () {
      return Number(this.$route.query.page) || 1
    },
    pageCount () {
      return this.data.length
    }
  }
}
</script>
