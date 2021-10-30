<template>
  <button type="button" class="btn btn-primary me-2 ps-1 pe-3 py-1 rounded-pill">
    <img :src="src" width="30" height="30" class="me-2 rounded-pill" alt="">
    <div class="position-relative d-inline-block" style="top: 2px;">
      {{ text }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      src: require(`~/assets/image/${this.image}`)
    }
  }
}
</script>
