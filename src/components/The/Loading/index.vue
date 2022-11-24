<script lang="ts" setup>
const { afterEach, beforeEach } = useRouter();
const state = ref<"initial" | "start" | "complete">("initial");

beforeEach(() => {
  state.value = "start";
});

afterEach(() => {
  setTimeout(() => {
    state.value = "complete";
  }, 100);

  setTimeout(() => {
    state.value = "initial";
  }, 500);
});
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

<style module lang="scss" src="./styles.scss" />
