<template>
  <div>
    <h1>#{{ error.statusCode }}</h1>
    <IconInfoCircleFill />
    <span class="pl-1">{{ error.message }}.</span>
    <p class="mt-5 text-center">
      <NLink :to="{ name: 'index' }">Back to Home</NLink>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: `(#${this.error.statusCode}) ${this.error.message} · ${this.$app.name}`
    }
  }
}
</script>
