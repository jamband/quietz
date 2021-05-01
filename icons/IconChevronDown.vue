<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    :style="{ display: 'inline-block', verticalAlign: '-0.125em' }"
  >
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '1em'
    }
  }
}
</script>
