<script lang="ts" setup>
import type { Props } from "./types";

const props = defineProps<Props>();

const appConfig = useAppConfig();
const route = useRoute();

const title = props.title
  ? `${props.title} ･ ${appConfig.name}`
  : appConfig.name;

const routeName = route.name?.toString() || "";

const description = ["404", "index", "about", "contact"].includes(routeName)
  ? appConfig.description
  : `${props.title} example for Nuxt.js and Bootstrap 5`;
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
        <Meta name="og:title" :content="title" />
        <Meta name="og:description" :content="description" />
        <slot />
      </Head>
    </Html>
  </div>
</template>
