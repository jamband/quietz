import purgecssConfig from "./purgecss.config";

export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/app.scss"],
  postcss: {
    plugins: {
      "@fullhuman/postcss-purgecss": purgecssConfig,
    },
  },
});
