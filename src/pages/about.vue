<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <div>
    <ThePage title="About" />
    <h1>About</h1>
    <p>
      {{ appConfig.name }} is my private playground for
      <NuxtLink href="https://nuxtjs.org" target="_blank">Nuxt.js</NuxtLink>
      and
      <NuxtLink href="https://getbootstrap.com" target="_blank">
        <IconBootstrapFill />
        Bootstrap 5</NuxtLink
      >.
    </p>
    <p>
      This website is an open source project. See
      <NuxtLink :href="appConfig.repository.url" target="_blank"
        ><IconGitHub /> GitHub {{ appConfig.repository.name }}</NuxtLink
      >
      for details.
    </p>
  </div>
</template>
