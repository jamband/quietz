<template>
  <div>
    <div class="text-end">
      <button type="button" class="btn btn-primary" @click="reload()">Reload</button>
    </div>
    <div class="alert alert-dismissible fade show my-3 bg-light shadow-sm" role="alert">
      <IconInfoCircleFill />
      {{ app.description }}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" />
    </div>
  </div>
</template>

<script>
import { APP_DESCRIPTION } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        description: APP_DESCRIPTION
      }
    }
  },
  mounted () {
    import('bootstrap/js/dist/alert')
  },
  methods: {
    reload () {
      location.reload()
    }
  }
}
</script>
