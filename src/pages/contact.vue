<script lang="ts" setup>
const appConfig = useAppConfig();
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
      <NuxtLink :href="`${appConfig.repository.url}/issues`" target="_blank"
        ><IconGitHub /> GitHub Issues</NuxtLink
      >.
    </p>
  </div>
</template>
