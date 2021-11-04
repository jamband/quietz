<script setup lang="ts">
type Props = {
  text: string;
  textSize: `${string}em` | `${string}rem`;
  textFill: `#${string}`;
  rectFill: `#${string}`;
  height: number;
};
const props = withDefaults(defineProps<Props>(), {
  height: 140,
});
</script>

<template>
  <svg
    :class="$style.base"
    width="100%"
    :height="props.height"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Placeholder: Image cap"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    :style="`font-size: ${props.textSize};`"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" :fill="props.rectFill" />
    <text x="50%" y="50%" :fill="props.textFill" dy="0.3em">
      {{ props.text }}
    </text>
  </svg>
</template>

<style module lang="scss" src="./styles.scss"></style>
