<script setup lang="ts">
import { capitalize } from "~/utils/format";

const routes = () => {
  const name = useRoute().name?.toString() || "";
  if (name === "") return [];

  const home = { name: "index", text: "Home" };

  if (name === "404") return [home, { name, text: "Not Found" }];
  if (name === "index") return [home];

  return [home, { name, text: capitalize(name) }];
};

const isCurrent = (index: number) => {
  return routes().length === index + 1;
};
</script>

<template>
  <nav class="container" aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(route, index) in routes()"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: isCurrent(index) }"
      >
        <template v-if="isCurrent(index)">
          {{ route.text }}
        </template>
        <NuxtLink v-else :to="{ name: route.name }">{{ route.text }}</NuxtLink>
      </li>
    </ol>
  </nav>
</template>
