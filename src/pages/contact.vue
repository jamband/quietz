<script setup lang="ts">
import { APP_REPOSITORY_URL } from "~/constants/app";
</script>

<template>
  <div>
    <ThePage title="Contact" />
    <h1>Contact</h1>
    <p>
      Please to the message via
      <NuxtLink href="https://twitter.com/livejam_db" target="_blank"
        ><IconTwitter /> Twitter</NuxtLink
      >
      or
      <NuxtLink :href="`${APP_REPOSITORY_URL}/issues`" target="_blank"
        ><IconGitHub /> GitHub Issues</NuxtLink
      >.
    </p>
  </div>
</template>
