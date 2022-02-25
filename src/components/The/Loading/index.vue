<script setup lang="ts">
const { state } = usePageLoading();
</script>

<template>
  <div
    :class="[
      $style.initial,
      state === 'start' && $style.start,
      state === 'complete' && $style.complete,
    ]"
    role="status"
  />
</template>

<style module lang="scss" src="./style.scss" />
