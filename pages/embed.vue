<template>
  <div>
    <div class="row justify-content-center">
      <p class="btn btn-group btn-group-sm col-8" role="group" aria-label="Aspect ratio list">
        <button
          v-for="ratio in ratioList"
          :key="ratio"
          :aria-label="ratio"
          type="button"
          class="btn btn-light shadow-sm"
          @click="show(ratio)"
        >
          {{ ratio }}
        </button>
      </p>
    </div>
    <div v-if="selector" :class="selector" class="embed-responsive">
      <img
        class="embed-responsive-item rounded"
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
      ratioList: ['21:9', '16:9', '4:3', '1:1'],
      selector: '',
      embeds: [
        {
          ratio: '21:9',
          selector: 'embed-responsive-21by9'
        },
        {
          ratio: '16:9',
          selector: 'embed-responsive-16by9'
        },
        {
          ratio: '4:3',
          selector: 'embed-responsive-4by3'
        },
        {
          ratio: '1:1',
          selector: 'embed-responsive-1by1'
        }
      ]
    }
  },
  methods: {
    show (ratio) {
      const { selector } = this.embeds.find(embed => embed.ratio === ratio)
      this.selector = selector
    }
  }
}
</script>
