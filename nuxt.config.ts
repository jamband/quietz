import { defineNuxtConfig } from "nuxt3";
import purgecssConfig from "./purgecss.config";

export default defineNuxtConfig({
  srcDir: "src/",
  components: ["~/src/components"],
  typescript: {
    shim: false,
    strict: true,
  },
  css: ["~/assets/css/app.scss"],
  postcss: {
    plugins: {
      "@fullhuman/postcss-purgecss": purgecssConfig,
    },
  },
});
