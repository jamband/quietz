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
  buildModules: ['@nuxt/postcss8'],
  messages: {
    error_404: 'Page not found'
  },
  build: {
    // analyze: true
  },
  generate: {
    fallback: '404.html',
    routes: ['/']
  }
  // top level options for packages
}
