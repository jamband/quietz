<script setup lang="ts">
import { APP_REPOSITORY_URL } from "~/constants/app";
</script>

<template>
  <div>
    <ThePage title="Contact" />
    <h1>Contact</h1>
    <p>
      Please to the message via
      <LinkExternal href="https://twitter.com/livejam_db"
        ><IconTwitter /> Twitter</LinkExternal
      >
      or
      <LinkExternal :href="`${APP_REPOSITORY_URL}/issues`"
        ><IconGitHub /> GitHub Issues</LinkExternal
      >.
    </p>
  </div>
</template>
