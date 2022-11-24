<script lang="ts" setup>
const props = defineProps<{
  currentPage: number;
  pageCount: number;
}>();

const disabled = (part: string) => {
  return ["first", "previous"].includes(part)
    ? props.currentPage < 2
    : props.currentPage >= props.pageCount;
};

const itemClass = (part: string) => {
  let selector = "page-item flex-fill";
  if (disabled(part)) {
    selector += " disabled";
  }
  return selector;
};

const link = (part: string) => {
  let page = 1;

  if (part === "previous" && props.currentPage > 1) {
    page = props.currentPage - 1;
  } else if (part === "next" && props.currentPage === props.pageCount) {
    page = props.pageCount;
  } else if (part === "next" && props.currentPage !== props.pageCount) {
    page = props.currentPage + 1;
  } else if (part === "last") {
    page = props.pageCount;
  }

  return { query: { page } };
};
</script>

<template>
  <nav class="text-center" aria-label="Page navigation">
    <ul class="pagination">
      <li :class="itemClass('first')">
        <NuxtLink
          :to="link('first')"
          class="page-link"
          aria-label="First"
          :aria-disabled="disabled('first')"
          :tabindex="disabled('first') ? -1 : 0"
        >
          <IconChevronDoubleLeft
            :style="{
              marginRight: '0.125rem',
              height: '1em',
              width: '1em',
              verticalAlign: '-0.125em',
            }"
          />
        </NuxtLink>
      </li>
      <li :class="itemClass('previous')">
        <NuxtLink
          :to="link('previous')"
          class="page-link"
          :aria-disabled="disabled('previous')"
          aria-label="Previous"
          :tabindex="disabled('previous') ? -1 : 0"
        >
          <IconChevronLeft
            :style="{
              marginRight: '0.125rem',
              height: '1em',
              width: '1em',
              verticalAlign: '-0.125em',
            }"
          />
        </NuxtLink>
      </li>
      <li :class="itemClass('next')">
        <NuxtLink
          :to="link('next')"
          class="page-link"
          aria-label="Next"
          :aria-disabled="disabled('next')"
          :tabindex="disabled('next') ? -1 : 0"
        >
          <IconChevronRight
            :style="{
              marginRight: '0.125rem',
              height: '1em',
              width: '1em',
              verticalAlign: '-0.125em',
            }"
          />
        </NuxtLink>
      </li>
      <li :class="itemClass('last')">
        <NuxtLink
          :to="link('last')"
          class="page-link"
          aria-label="Last"
          :aria-disabled="disabled('last')"
          :tabindex="disabled('last') ? -1 : 0"
        >
          <IconChevronDoubleRight
            :style="{
              marginRight: '0.125rem',
              height: '1em',
              width: '1em',
              verticalAlign: '-0.125em',
            }"
          />
        </NuxtLink>
      </li>
    </ul>
    <div
      :class="[$style.information, 'fw-bold font-monospace']"
      aria-label="Page information"
    >
      {{ currentPage }}/{{ pageCount }}
    </div>
  </nav>
</template>

<style module lang="scss" src="./styles.scss" />
