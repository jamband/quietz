<script setup lang="ts">
const { notification, showNotification } = useNotification();

const now = () => {
  const date = new Date();

  const weekday = date.toLocaleDateString("en", {
    weekday: "short",
  });

  const time = date.toLocaleTimeString("en", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${weekday} ${time}`;
};

const show = () => {
  showNotification({
    message: now(),
    delay: 5000,
  });
};
</script>

<template>
  <div>
    <ThePage title="Toast" />
    <h1>Toast</h1>
    <button
      :disabled="notification.show"
      type="button"
      class="btn btn-primary"
      @click="show()"
    >
      Show Current Time
    </button>
    <div class="alert my-3 bg-light shadow-sm">
      <IconInfoCircleFill />
      This notification will continue to be displayed for a certain period of
      time no matter which page you go to.
    </div>
  </div>
</template>
