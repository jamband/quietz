<script lang="ts" setup>
const { collapseRef, disabled, isCollapsed, ready, toggleCollapse } =
  useCollapse();
</script>

<template>
  <div>
    <ThePage title="Collapse" />
    <h1>Collapse</h1>
    <button
      :disabled="disabled || !ready"
      type="button"
      class="btn btn-primary btn-sm w-25"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapse"
      @click="toggleCollapse()"
    >
      {{ isCollapsed ? "Show" : "Hide" }}
    </button>
    <div id="collapseExample" ref="collapseRef" class="collapse mt-3">
      <div class="p-3 shadow-sm bg-light rounded">
        <IconInfoCircleFill
          :style="{
            height: '1em',
            width: '1em',
            verticalAlign: '-0.125em',
          }"
        />
        Toggle the visibility of content across your project.
      </div>
    </div>
  </div>
</template>
