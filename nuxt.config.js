export default {
  ssr: true,
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
    ],
    link: [
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
  purgeCSS: {
    // enabled: true,
    paths: [
      './icons/**/*.vue',
      './node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    extractors: () => []
  }
}
