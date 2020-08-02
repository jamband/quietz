<template>
  <div>
    <div class="row">
      <div class="btn-group btn-group-sm my-3 col-6 col-md-4" role="group" aria-label="Progress">
        <button type="button" class="w-50 btn btn-light shadow-sm" @click="push()">{{ button }}</button>
        <button type="button" class="w-50 btn btn-light shadow-sm" @click="clear()">Clear</button>
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
      button: 'Start',
      intervalId: 0
    }
  },
  methods: {
    push () {
      if (this.button === 'Start') {
        this.button = 'Pause'
        this.start()
        return
      }
      if (this.button === 'Pause') {
        this.button = 'Continue'
        this.stop()
        return
      }
      if (this.button === 'Continue') {
        this.button = 'Pause'
        this.start()
      }
    },
    start () {
      this.intervalId = setInterval(() => {
        if (this.bar === 100) {
          return
        }
        this.bar++
      }, 100)
    },
    stop () {
      clearInterval(this.intervalId)
    },
    clear () {
      this.bar = 0
      this.button = 'Start'
      this.stop()
    }
  }
}
</script>
