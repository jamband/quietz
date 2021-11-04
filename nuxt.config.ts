import { defineNuxtConfig } from "nuxt3";
import purgecssConfig from "./purgecss.config";
import { APP_NAME } from "./src/constants/app";

export default defineNuxtConfig({
  srcDir: "src/",
  meta: {
    htmlAttrs: { lang: "en" },
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    link: [{ rel: "icon", href: "/favicon.ico" }],
    meta: [
      { name: "og:type", content: "website" },
      { name: "og:site_name", content: APP_NAME },
    ],
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
