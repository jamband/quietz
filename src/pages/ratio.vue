<script setup lang="ts">
type Ratio = "21x9" | "16x9" | "4x3" | "1x1";

const ratio = ref<Ratio>();
const ratios: Array<Ratio> = ["21x9", "16x9", "4x3", "1x1"];
const setRatio = (value: Ratio) => (ratio.value = value);
</script>

<template>
  <div>
    <ThePage title="Ratio"></ThePage>
    <h1>Ratio</h1>
    <div class="row justify-content-center">
      <p
        class="btn btn-group btn-group-sm col-8"
        role="group"
        aria-label="Aspect ratio list"
      >
        <button
          v-for="_ratio in ratios"
          :key="_ratio"
          :aria-label="_ratio"
          type="button"
          class="btn btn-primary"
          @click="setRatio(_ratio)"
        >
          {{ _ratio }}
        </button>
      </p>
    </div>
    <div class="ratio" :class="`ratio-${ratio}`">
      <ImagePlaceholder
        :text="ratio || ''"
        text-size="5em"
        text-fill="#6b7279"
        rect-fill="#bec7ce"
        class="rounded shadow-sm font-monospace"
      />
    </div>
  </div>
</template>
