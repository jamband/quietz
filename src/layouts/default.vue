<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <div class="d-flex flex-column min-vh-100 py-7">
    <Html lang="en">
      <Head>
        <Meta name="og:type" content="website" />
        <Meta name="og:site_name" :content="appConfig.name" />
        <Meta name="og:url" :content="appConfig.url + $route.path" />
        <Link rel="icon" href="/favicon.png" />
      </Head>
    </Html>
    <TheLoading />
    <TheNotification />
    <TheHeader />
    <TheBreadcrumb />
    <div class="container flex-grow-1">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
