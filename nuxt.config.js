export default {
  srcDir: 'src/',
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
  components: true,
  buildModules: [
    '@nuxt/postcss8',
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
    paths: [
      '../node_modules/bootstrap/js/dist/alert.js',
      '../node_modules/bootstrap/js/dist/button.js',
      '../node_modules/bootstrap/js/dist/collapse.js',
      '../node_modules/bootstrap/js/dist/dropdown.js',
      '../node_modules/bootstrap/js/dist/modal.js',
      '../node_modules/bootstrap/js/dist/offcanvas.js',
      '../node_modules/bootstrap/js/dist/toast.js'
    ],
    extractors: () => []
  }
}
