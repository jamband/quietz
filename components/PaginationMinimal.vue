<template>
  <nav class="text-center" aria-label="Page navigation">
    <ul class="pagination d-flex">
      <li :class="disabledSelector('first')" class="flex-fill page-item">
        <NLink
          :to="pageLink(1)"
          :aria-current-value="null"
          :aria-disabled="disabled('first')"
          :tabindex="disabled('first') ? -1 : 0"
          class="page-link"
          aria-label="First"
        >
          <IconChevronDoubleLeft size="0.8em" />
        </NLink>
      </li>
      <li :class="disabledSelector('prev')" class="flex-fill page-item">
        <NLink
          :to="pageLink(currentPage - 1)"
          :aria-current-value="null"
          :aria-disabled="disabled('prev')"
          :tabindex="disabled('prev') ? -1 : 0"
          class="page-link"
          aria-label="Previous"
        >
          <IconChevronLeft size="0.8em" />
        </NLink>
      </li>
      <li :class="disabledSelector('next')" class="flex-fill page-item">
        <NLink
          :to="pageLink(currentPage + 1)"
          :aria-current-value="null"
          :aria-disabled="disabled('next')"
          :tabindex="disabled('next') ? -1 : 0"
          class="page-link"
          aria-label="Next"
        >
          <IconChevronRight size="0.8em" />
        </NLink>
      </li>
      <li :class="disabledSelector('last')" class="flex-fill page-item">
        <NLink
          :to="pageLink(pageCount)"
          :aria-current-value="null"
          :aria-disabled="disabled('last')"
          :tabindex="disabled('last') ? -1 : 0"
          class="page-link"
          aria-label="Last"
        >
          <IconChevronDoubleRight size="0.8em" />
        </NLink>
      </li>
    </ul>
    <div :class="$style.information" aria-label="Page Information">
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
      if (/^(first|prev)$/.test(part)) {
        return this.currentPage < 2
      } else {
        return this.currentPage >= this.pageCount
      }
    },
    disabledSelector (part) {
      return this.disabled(part) ? 'disabled' : ''
    },
    pageLink (page) {
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
