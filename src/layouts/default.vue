<script lang="ts" setup>
import { APP_NAME, APP_URL } from "~/constants/app";
</script>

<template>
  <div class="d-flex flex-column min-vh-100 py-7">
    <Html lang="en-US">
      <Head>
        <Meta name="og:type" content="website" />
        <Meta name="og:site_name" :content="APP_NAME" />
        <Meta name="og:url" :content="APP_URL + $route.path" />
        <Link rel="icon" href="/favicon.png" />
      </Head>
    </Html>
    <NuxtLoadingIndicator color="#008f55" />
    <TheNotification />
    <TheHeader />
    <TheBreadcrumb />
    <div class="container flex-grow-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
