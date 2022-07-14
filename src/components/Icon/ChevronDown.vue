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
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </IconBase>
</template>
