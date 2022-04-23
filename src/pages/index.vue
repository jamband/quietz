<script setup lang="ts">
const routes = [
  { name: "alert", text: "Alert" },
  { name: "collapse", text: "Collapse" },
  { name: "dropdown", text: "Dropdown" },
  { name: "form", text: "Form" },
  { name: "modal", text: "Modal" },
  { name: "offcanvas", text: "Offcanvas" },
  { name: "pagination", text: "Pagination" },
  { name: "progress", text: "Progress" },
  { name: "ratio", text: "Ratio" },
  { name: "toast", text: "Toast" },
];
</script>

<template>
  <div>
    <ThePage />
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
