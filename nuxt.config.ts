import { defineNuxtConfig } from "nuxt3";
import purgecssConfig from "./purgecss.config";

export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    strict: true,
  },
  css: ["~/assets/css/app.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "@fullhuman/postcss-purgecss": purgecssConfig,
        },
      },
    },
  },
});
