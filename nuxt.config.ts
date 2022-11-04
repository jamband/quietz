import purgecssConfig from "./purgecss.config";

export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    shim: false,
  },
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
  },
  css: ["~/assets/css/app.scss"],
  postcss: {
    plugins: {
      "@fullhuman/postcss-purgecss": purgecssConfig,
    },
  },
});
