<script lang="ts" setup>
const route = useRoute();

const content = ref(".");
const isLoading = ref(false);
const currentPage = computed(() => Number(route.query.page || 1));

watchEffect(() => {
  content.value = ".".repeat(currentPage.value);
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 500);
});
</script>

<template>
  <div>
    <ThePage title="Pagination" />
    <h1 class="mb-5">Pagination</h1>
    <div v-if="isLoading" class="mb-5 text-center">
      <AppLoading />
    </div>
    <div v-else>
      <p class="mb-5 text-center">{{ content }}</p>
      <PaginationMinimal :current-page="currentPage" :page-count="26" />
    </div>
  </div>
</template>
