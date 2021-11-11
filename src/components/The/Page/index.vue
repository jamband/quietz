<script lang="ts" setup>
import { APP_DESCRIPTION, APP_NAME } from "~/constants/app";

type Props = {
  title?: string;
};

const props = defineProps<Props>();
const route = useRoute();

const title = props.title ? `${props.title} ･ ${APP_NAME}` : APP_NAME;

const routeName = route.name?.toString() || "";

const description = ["404", "index", "about", "contact"].includes(routeName)
  ? APP_DESCRIPTION
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
