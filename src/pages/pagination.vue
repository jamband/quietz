<script setup lang="ts">
const route = useRoute();
const content = ref(".");
const currentPage = ref(1);
const isLoading = ref(false);

watchEffect(() => {
  currentPage.value = Number(route.query.page) || 1;
  content.value = ".".repeat(currentPage.value);
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 500);
});
</script>

<template>
  <div>
    <ThePage title="Pagination"></ThePage>
    <h1>Pagination</h1>
    <div v-if="isLoading" class="text-center">
      <AppLoading />
    </div>
    <div v-else>
      <p class="text-center">{{ content }}</p>
      <PaginationMinimal :current-page="currentPage" :page-count="26" />
    </div>
  </div>
</template>
