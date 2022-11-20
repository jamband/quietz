<script lang="ts" setup>
import type { SVGAttributes } from "vue";

const props = defineProps<{
  fill: SVGAttributes["fill"];
  viewBox: SVGAttributes["viewBox"];
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :fill="props.fill"
    :viewBox="props.viewBox"
    class="d-inline-block"
  >
    <slot />
  </svg>
</template>
