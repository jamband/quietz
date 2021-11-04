<script setup lang="ts">
type Props = {
  size?: `${string}em`;
};

const props = withDefaults(defineProps<Props>(), {
  size: "1em",
});
</script>

<template>
  <IconBase :size="props.size">
    <path
      fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
    />
    <path
      fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </IconBase>
</template>
