<script lang="ts" setup>
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
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </IconBase>
</template>
