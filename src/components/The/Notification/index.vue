<script lang="ts" setup>
const toastRef = ref<HTMLDivElement>();
const { clearNotification, notification } = useNotification();

const clear = () => {
  if (toastRef.value) {
    toastRef.value.addEventListener("hidden.bs.toast", () => {
      clearNotification();
    });
  }
};

watchEffect(() => {
  if (notification.value.show) {
    import("bootstrap/js/dist/toast").then((module) => {
      if (toastRef.value) {
        new module.default(toastRef.value).show();
        clear();
      }
    });
  }
});
</script>

<template>
  <div
    ref="toastRef"
    class="toast"
    :class="$style.toast"
    :data-bs-delay="notification.delay"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex">
      <div class="ms-2 toast-body font-monospace">
        {{ notification.message }}
      </div>
      <button
        class="me-3 m-auto btn btn-close btn-close-white"
        data-bs-dismiss="toast"
        @click="clear()"
      />
    </div>
  </div>
</template>

<style module lang="scss" src="./styles.scss"></style>
