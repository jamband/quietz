import { defineNuxtConfig } from "nuxt";
import purgecssConfig from "./purgecss.config";

export default defineNuxtConfig({
  srcDir: "src/",
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
