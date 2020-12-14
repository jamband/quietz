<template>
  <div>
    <div class="row justify-content-center">
      <p class="btn btn-group btn-group-sm col-8" role="group" aria-label="Aspect ratio list">
        <button
          v-for="ratio in ratioList"
          :key="ratio"
          :aria-label="ratio"
          type="button"
          class="btn btn-primary"
          @click="setRatioSelector(ratio)"
        >
          {{ ratio }}
        </button>
      </p>
    </div>
    <div v-if="ratioSelector" :class="ratioSelector" class="ratio">
      <img
        class="rounded"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89eDpfwAI2wOgwxlaYQAAAABJRU5ErkJggg=="
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratioSelector: ''
    }
  },
  computed: {
    ratioList () {
      return ['21x9', '16x9', '4x3', '1x1']
    }
  },
  methods: {
    setRatioSelector (ratio) {
      const { selector } = [
        { ratio: '21x9', selector: 'ratio-21x9' },
        { ratio: '16x9', selector: 'ratio-16x9' },
        { ratio: '4x3', selector: 'ratio-4x3' },
        { ratio: '1x1', selector: 'ratio-1x1' }
      ].find(_ => _.ratio === ratio)

      this.ratioSelector = selector
    }
  }
}
</script>
