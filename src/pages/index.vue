<script setup lang="ts">
const { data: routes } = await useFetch("/api/routes");
</script>

<template>
  <div>
    <ThePage></ThePage>
    <h1>Home</h1>
    <nav aria-label="Main navigation">
      <ul class="list-inline">
        <li v-for="route in routes" :key="route.name" class="list-inline-item">
          <NuxtLink :to="{ name: route.name }">{{ route.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
