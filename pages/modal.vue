<template>
  <div>
    <ImageBadge
      v-for="image in images"
      :key="image"
      :image="`${image}-thumb.jpg`"
      :text="image"
      data-toggle="modal"
      data-target="#modalImage"
      @click.native="show(image)"
    />
    <div id="modalImage" class="modal fade" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg text-center">
        <img :src="src" class="img-fluid rounded">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '',
      images: ['boat', 'city', 'butterfly']
    }
  },
  mounted () {
    import('bootstrap/js/dist/modal')
  },
  methods: {
    show (image) {
      this.src = require(`~/assets/image/${image}.jpg`)
    }
  }
}
</script>
