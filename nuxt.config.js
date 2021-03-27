import { APP_NAME, APP_DESCRIPTION, APP_URL } from './plugins/constants'

export default {
  ssr: true,
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'og:site_name', property: 'og:site_name', content: APP_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: APP_URL }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    './assets/css/app.scss'
  ],
  plugins: [
  ],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/icons', pathPrefix: false }
  ],
  buildModules: [
    '@nuxtjs/pwa',
    'nuxt-purgecss'
  ],
  messages: {
    error_404: 'Page not found'
  },
  build: {
    // analyze: true
  },
  generate: {
    fallback: '404.html',
    routes: ['/']
  },
  // top level options for packages
  manifest: {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    lang: 'en-US',
    background_color: '#fff',
    display: 'standalone',
    start_url: '/'
  },
  purgeCSS: {
    // enabled: true,
    paths: [
      './node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    extractors: () => []
  }
}
