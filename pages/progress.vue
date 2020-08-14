<template>
  <div>
    <div class="row">
      <div class="btn-group btn-group-sm d-flex my-3 col-6 col-md-4" role="group" aria-label="Progress">
        <button type="button" class="btn btn-light flex-even shadow-sm" @click="toggle()">{{ toggleButtonText }}</button>
        <button type="button" class="btn btn-light flex-even shadow-sm" @click="clear()">Clear</button>
      </div>
    </div>
    <div class="progress mt-3" style="height: 1px;">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: `${bar}%` }"
        :aria-valuenow="bar"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
    <div class="text-center small">
      {{ bar }}%
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bar: 0,
      toggleButtonText: 'Start',
      intervalId: 0
    }
  },
  methods: {
    toggle () {
      if (/^(Start|Continue)$/.test(this.toggleButtonText)) {
        this.toggleButtonText = 'Pause'

        this.intervalId = window.setInterval(() => {
          if (this.bar === 100) { return }
          this.bar++
        }, 100)
      } else {
        this.toggleButtonText = 'Continue'
        this.stop()
      }
    },
    stop () {
      clearInterval(this.intervalId)
    },
    clear () {
      this.bar = 0
      this.toggleButtonText = 'Start'
      this.stop()
    }
  }
}
</script>
