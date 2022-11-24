<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <header class="fixed-top py-3 text-center bg-light border-bottom border-dark">
    <nav class="container" aria-label="Header navigation">
      <NuxtLink :to="{ name: 'index' }" class="p-3 text-decoration-none">{{
        appConfig.name
      }}</NuxtLink>
    </nav>
  </header>
</template>
