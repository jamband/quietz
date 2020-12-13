<template>
  <div>
    <button
      type="button"
      class="btn btn-primary btn-sm w-24"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapse"
      @click="toggleButtonText()"
    >
      {{ buttonText }}
    </button>
    <div id="collapseExample" class="collapse mt-3">
      <div class="p-3 shadow-sm bg-light rounded">
        <IconInfoCircleFill />
        <span class="ps-1">Toggle the visibility of content across your project.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Show'
    }
  },
  mounted () {
    import('bootstrap/js/dist/collapse')
  },
  methods: {
    toggleButtonText () {
      this.buttonText = this.buttonText === 'Show'
        ? 'Hide'
        : 'Show'
    }
  }
}
</script>
