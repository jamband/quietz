<script lang="ts" setup>
type ToggleButtonText = "Continue" | "Start" | "Pause";

const bar = ref(0);
const toggleButtonText = ref<ToggleButtonText>("Start");
const intervalId = ref(0);

const toggle = () => {
  if (["Start", "Continue"].includes(toggleButtonText.value)) {
    toggleButtonText.value = "Pause";

    intervalId.value = window.setInterval(() => {
      if (bar.value === 100) return;
      bar.value++;
    }, 100);
  } else {
    toggleButtonText.value = "Continue";
    stop();
  }
};

const stop = () => {
  clearInterval(intervalId.value);
};

const clear = () => {
  bar.value = 0;
  toggleButtonText.value = "Start";
  stop();
};
</script>

<template>
  <div>
    <ThePage title="Progress" />
    <h1>Progress</h1>
    <div
      class="btn-group btn-group-sm my-3 w-50"
      role="group"
      aria-label="Progress"
    >
      <button
        :disabled="bar === 100"
        type="button"
        class="btn btn-primary w-50"
        @click="toggle()"
      >
        {{ toggleButtonText }}
      </button>
      <button
        :disabled="bar === 0"
        type="button"
        class="btn btn-primary w-50"
        @click="clear()"
      >
        Clear
      </button>
    </div>
    <div class="progress mt-3" :class="$style.bar">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: `${bar}%` }"
        :aria-valuenow="bar"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
    <div class="text-center font-monospace small">{{ bar }}%</div>
  </div>
</template>

<style module lang="scss">
.bar {
  height: 1px;
}
</style>
