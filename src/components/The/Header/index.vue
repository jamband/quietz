<script lang="ts" setup>
import { APP_NAME } from "~/constants/app";
</script>

<template>
  <header class="fixed-top py-3 text-center bg-light">
    <nav class="container" aria-label="Header navigation">
      <NuxtLink :to="{ name: 'index' }" class="p-3 text-decoration-none">{{
        APP_NAME
      }}</NuxtLink>
    </nav>
  </header>
</template>
