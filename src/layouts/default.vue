<script setup lang="ts">
import { APP_URL } from "~/constants/app";
</script>

<template>
  <div class="d-flex flex-column min-vh-100 py-7">
    <Head>
      <Meta name="og:url" :content="APP_URL + $route.path" />
    </Head>
    <TheNotification />
    <TheHeader />
    <TheBreadcrumb />
    <div class="container flex-grow-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
