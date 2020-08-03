<template>
  <div>
    <div class="text-right">
      <button type="button" class="btn btn-light shadow-sm" @click="reload()">Reload</button>
    </div>
    <div class="alert alert-dismissible fade show my-3 bg-light shadow-sm" role="alert">
      <IconInfoCircleFill />
      <span class="pl-1">{{ $app.description }}.</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
