<script lang="ts" setup>
const error = useError();

const isNotFound = Number(error.value?.statusCode || 500) === 404;
const title = isNotFound ? "Not Found" : "An Error Occurred";
const message = isNotFound ? "Page not found." : error.value?.message;
</script>

<template>
  <div>
    <NuxtLayout>
      <ThePage :title="title" />
      <h1>{{ title }}</h1>
      <p>
        <IconInfoCircleFill />
        {{ message }}
      </p>
      <div class="my-5 text-center">
        <NuxtLink to="/" class="p-4">Back to Home</NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>
