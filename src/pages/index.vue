<script lang="ts" setup>
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
    <ul class="list-inline">
      <li v-for="route in routes" :key="route.name" class="mb-3">
        <div class="h2">
          <NuxtLink :to="{ name: route.name }" class="text-decoration-none"
            >{{ route.text }} <IconChevronRight size="0.5em"
          /></NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>
