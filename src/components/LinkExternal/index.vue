<script setup lang="ts">
type Props = {
  href: string;
};

const props = defineProps<Props>();
</script>

<template>
  <a :href="props.href" rel="noopener noreferrer" target="_blank"><slot /></a>
</template>
