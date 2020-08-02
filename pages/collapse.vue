<template>
  <div>
    <button
      type="button"
      class="btn btn-light btn-sm w-25 shadow-sm"
      data-toggle="collapse"
      data-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapse"
      @click="show()"
    >
      {{ button }}
    </button>
    <div id="collapseExample" class="collapse mt-3">
      <div class="p-3 shadow-sm bg-light rounded">
        <IconInfoCircleFill />
        <span class="pl-1">Toggle the visibility of content across your project.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      button: 'Show',
      toggle: true
    }
  },
  mounted () {
    import('bootstrap/js/dist/collapse')
  },
  methods: {
    show () {
      this.button = this.toggle ? 'Hide' : 'Show'
      this.toggle = !this.toggle
    }
  }
}
</script>
