<template>
  <nav class="text-center" aria-label="Page navigation">
    <ul class="pagination">
      <li :class="itemClass('first')">
        <NLink
          :to="link('first')"
          class="page-link"
          aria-label="First"
          :aria-disabled="disabled('first')"
          :tabindex="disabled('first') ? -1 : 0"
        >
          <IconChevronDoubleLeft size="0.8em" />
        </NLink>
      </li>
      <li :class="itemClass('previous')">
        <NLink
          :to="link('previous')"
          class="page-link"
          :aria-disabled="disabled('previous')"
          aria-label="Previous"
          :tabindex="disabled('previous') ? -1 : 0"
        >
          <IconChevronLeft size="0.8em" />
        </NLink>
      </li>
      <li :class="itemClass('next')">
        <NLink
          :to="link('next')"
          class="page-link"
          aria-label="Next"
          :aria-disabled="disabled('next')"
          :tabindex="disabled('next') ? -1 : 0"
        >
          <IconChevronRight size="0.8em" />
        </NLink>
      </li>
      <li :class="itemClass('last')">
        <NLink
          :to="link('last')"
          class="page-link"
          aria-label="Last"
          :aria-disabled="disabled('last')"
          :tabindex="disabled('last') ? -1 : 0"
        >
          <IconChevronDoubleRight size="0.8em" />
        </NLink>
      </li>
    </ul>
    <div :class="$style.information" aria-label="Page information">
      {{ currentPage }}/{{ pageCount }}
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    disabled (part) {
      return ['first', 'previous'].includes(part)
        ? this.currentPage < 2
        : this.currentPage >= this.pageCount
    },
    itemClass (part) {
      let selector = 'page-item flex-fill'
      if (this.disabled(part)) {
        selector += ' disabled'
      }
      return selector
    },
    link (part) {
      let page = 1

      if (part === 'previous' && this.currentPage > 1) {
        page = this.currentPage - 1
      } else if (part === 'next' && this.currentPage === this.pageCount) {
        page = this.pageCount
      } else if (part === 'next' && this.currentPage !== this.pageCount) {
        page = this.currentPage + 1
      } else if (part === 'last') {
        page = this.pageCount
      }

      return { query: { page } }
    }
  }
}
</script>

<style module>
.information {
  bottom: 3.6em;
  color: darkgray;
  font-size: 75%;
  position: relative;
  z-index: -1;
}
</style>
