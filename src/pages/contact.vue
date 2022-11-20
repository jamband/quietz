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
        ><IconTwitter
          :style="{
            marginRight: '0.125rem',
            height: '1em',
            width: '1em',
            verticalAlign: '-0.125em',
          }"
        />Twitter</NuxtLink
      >
      or
      <NuxtLink :href="`${appConfig.repository.url}/issues`" target="_blank"
        ><IconGitHub
          :style="{
            marginRight: '0.125rem',
            height: '1em',
            width: '1em',
            verticalAlign: '-0.125em',
          }"
        />GitHub Issues</NuxtLink
      >.
    </p>
  </div>
</template>
