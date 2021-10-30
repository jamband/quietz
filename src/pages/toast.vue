<template>
  <div>
    <button type="button" class="btn btn-primary" @click="show()">Show</button>
    <div
      ref="toast"
      class="toast"
      :class="$style.toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header border-bottom-primary">
        <strong class="me-auto">Toast</strong>
        <small>from version 4.2</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" />
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show () {
      /* eslint-disable new-cap */
      import('bootstrap/js/dist/toast').then((module) => {
        new module.default(this.$refs.toast).show()
      })
    }
  }
}
</script>

<style lang="scss" module>
@import "../assets/css/variables";
@import "../../node_modules/bootstrap/scss/mixins/breakpoints";

.toast {
  position: absolute;
  top: 1rem;
  z-index: $zindex-toast;

  @include media-breakpoint-down(sm) {
    left: 0;
    margin: auto;
    right: 0;
  }

  @include media-breakpoint-up(sm) {
    right: 1rem;
  }
}
</style>
