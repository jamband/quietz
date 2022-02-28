<script setup lang="ts">
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
      <LinkExternal href="https://nuxtjs.org">Nuxt.js</LinkExternal>
      and
      <LinkExternal href="https://getbootstrap.com">
        <IconBootstrapFill />
        Bootstrap 5</LinkExternal
      >.
    </p>
    <p>
      This website is an open source project. See
      <LinkExternal :href="APP_REPOSITORY_URL"
        ><IconGitHub /> GitHub {{ APP_REPOSITORY_NAME }}</LinkExternal
      >
      for details.
    </p>
  </div>
</template>
