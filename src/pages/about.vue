<script lang="ts" setup>
import {
  APP_NAME,
  APP_REPOSITORY_NAME,
  APP_REPOSITORY_URL,
} from "~/constants/app";
</script>

<template>
  <div>
    <ThePage title="About" />
    <h1>About</h1>
    <p>
      {{ APP_NAME }} is my private playground for
      <NuxtLink href="https://nuxtjs.org" target="_blank">Nuxt.js</NuxtLink>
      and
      <NuxtLink href="https://getbootstrap.com" target="_blank">
        <IconBootstrapFill />
        Bootstrap 5</NuxtLink
      >.
    </p>
    <p>
      This website is an open source project. See
      <NuxtLink :href="APP_REPOSITORY_URL" target="_blank"
        ><IconGitHub /> GitHub {{ APP_REPOSITORY_NAME }}</NuxtLink
      >
      for details.
    </p>
  </div>
</template>
