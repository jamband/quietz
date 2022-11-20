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
        <IconBootstrapFill
          :style="{
            marginRight: '0.125rem',
            height: '1em',
            width: '1em',
            verticalAlign: '-0.125em',
          }"
        />Bootstrap 5</NuxtLink
      >.
    </p>
    <p>
      This website is an open source project. See
      <NuxtLink :href="appConfig.repository.url" target="_blank"
        ><IconGitHub
          :style="{
            marginRight: '0.125rem',
            height: '1em',
            width: '1em',
            verticalAlign: '-0.125em',
          }"
        />GitHub {{ appConfig.repository.name }}</NuxtLink
      >
      for details.
    </p>
  </div>
</template>
