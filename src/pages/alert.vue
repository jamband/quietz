<script lang="ts" setup>
useAlert();
const appConfig = useAppConfig();

const reload = () => location.reload();
</script>

<template>
  <div>
    <ThePage title="Alert" />
    <h1>Alert</h1>
    <div class="text-end">
      <button type="button" class="btn btn-primary" @click="reload()">
        Reload
      </button>
    </div>
    <div
      class="alert alert-dismissible fade show my-3 bg-light shadow-sm"
      role="alert"
    >
      <IconInfoCircleFill />
      {{ appConfig.description }}.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      />
    </div>
  </div>
</template>
