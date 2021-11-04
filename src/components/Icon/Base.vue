<script setup lang="ts">
type Props = {
  size?: `${string}em`;
};

const props = withDefaults(defineProps<Props>(), {
  size: "1em",
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    :style="{ display: 'inline-block', verticalAlign: '-0.125em' }"
  >
    <slot />
  </svg>
</template>
