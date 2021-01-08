module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jörg Vorholt | Ingeneurbüro für Arbeitssicherheit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-title', content: 'Jörg Vorholt | Ingeneurbüro für Arbeitssicherheit' },
      { name: 'application-name', content: 'Schlosserei Boike' },
      { name: 'msapplication-TileColor', content: '#A9C937' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'Damit Ihre Mitarbeiter motiviert und mit einem sicheren Gefühl arbeiten.' },
      { hid: 'robots', name: 'robots', content: 'index, follow, max-snippet:[120], max-image-preview:[large]' },
      { hid: 'keywords', name: 'keywords', content:  'Arbeitssicherhit, Brandschutz, Arbeitsunfälle       '}
    ],
    link: [
      { rel: 'apple-touch-icon',sizes: '180x180', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'icon',sizes: '32x32',type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon',sizes: '16x16',type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#A9C937' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#003996' },
  loading: false,
  /*
  ** Build configuration
  */
 performance: {
  hints: false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
},
 router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-open',
  },
  css: [
    '~/assets/Sass/screen.scss'
   ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

