<script setup lang="ts">
type Props = {
  image: string;
  text: string;
};

const props = defineProps<Props>();
</script>

<template>
  <button
    type="button"
    class="btn btn-primary me-2 ps-1 pe-3 py-1 rounded-pill"
  >
    <img
      :src="`/images/${props.image}`"
      width="30"
      height="30"
      class="me-2 rounded-pill"
      alt=""
    />
    <div class="position-relative d-inline-block" :class="$style.text">
      {{ props.text }}
    </div>
  </button>
</template>

<style module lang="scss" src="./styles.scss" />
