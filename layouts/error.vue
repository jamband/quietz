<template>
  <div>
    <h1>#{{ error.statusCode }}</h1>
    <IconInfoCircleFill /> {{ error.message }}.
    <p class="mt-5 text-center">
      <NLink :to="{ name: 'index' }">Back to Home</NLink>
    </p>
  </div>
</template>

<script>
import { APP_NAME } from '~/plugins/constants'

export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: `${this.error.message} · ${APP_NAME}`
    }
  }
}
</script>
