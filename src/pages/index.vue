<script lang="ts" setup>
const routes = [
  { path: "/alert", text: "Alert" },
  { path: "/collapse", text: "Collapse" },
  { path: "/dropdown", text: "Dropdown" },
  { path: "/form", text: "Form" },
  { path: "/modal", text: "Modal" },
  { path: "/offcanvas", text: "Offcanvas" },
  { path: "/pagination", text: "Pagination" },
  { path: "/progress", text: "Progress" },
  { path: "/ratio", text: "Ratio" },
  { path: "/toast", text: "Toast" },
];
</script>

<template>
  <div>
    <ThePage />
    <ul class="list-inline">
      <li v-for="route in routes" :key="route.path" class="mb-3">
        <div class="h2">
          <NuxtLink :to="route.path" class="text-decoration-none"
            >{{ route.text }} <IconChevronRight size="0.5em"
          /></NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>
