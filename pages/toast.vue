<template>
  <div>
    <button type="button" class="btn btn-primary" @click="show()">Show</button>
    <div :class="$style.toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header border-bottom-primary">
        <strong class="me-auto">Toast</strong>
        <small>from version 4.2</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" />
      </div>
      <div class="toast-body">
        Push notifications to your visitors with a toast,
        a lightweight and easily customizable alert message.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    import('bootstrap/js/dist/toast').then((module) => {
      const element = document.querySelector('.toast')
      const Toast = module.default
      this.toast = new Toast(element, { delay: 5000 })
    })
  },
  methods: {
    show () {
      this.toast.show()
    }
  }
}
</script>

<style lang="scss" module>
@import "../assets/css/variables";

.toast {
  position: absolute;
  top: 1rem;
  z-index: $zindex-toast;

  @media (max-width: $breakpoint-sm-down) {
    left: 0;
    margin: auto;
    right: 0;
  }

  @media (min-width: $breakpoint-sm) {
    right: 1rem;
  }
}
</style>
