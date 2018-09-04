const path = require(`path`)

const pkg = require(`./package.json`)

const SERVICE_WORKER_NAME = `nuxtpwatest-service-worker.js`
const isProd = process.env.NODE_ENV === `production`
const isDev = !isProd

const baseURL = isProd ? `https://127.0.0.1:8080/` : `http://127.0.0.1:3000/`

module.exports = {
  head: {
    title: pkg.name,
    titleTemplate: pkg.name,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { 'http-equiv': `X-UA-Compatible`, content: `IE=edge` },
    ],
  },
  router: {
    linkExactActiveClass: 'navigation__item--active',
  },
  loading: false,
  env: {
    baseURL,
  },
  modules: [
    [
      `@nuxtjs/pwa`,
      {
        workbox: {
          cacheId: `nuxtpwatest-cache-v1`,
          // change workbox file name
          swDest: path.join(__dirname, `static`, SERVICE_WORKER_NAME),
          // need this parameter for automatic SW registration
          routerBase: baseURL,
          importWorkboxFrom: `local`,
          swURL: `${SERVICE_WORKER_NAME}`,
          globPatterns: [`**/*.{js,css,json}`],
          debug: true,
          skipWaiting: false,
          clientsClaim: false,
          runtimeCaching: [
            {
              // Match any same-origin request that contains 'api'.
              urlPattern: `${baseURL}api/.*`,
              // Apply a network-first strategy.
              handler: 'networkFirst',
              strategyOptions: {
                // Fall back to the cache after 1 seconds.
                networkTimeoutSeconds: 1,
                // Configure custom cache expiration.
                // expiration: {
                //   maxEntries: 5,
                //   maxAgeSeconds: 60,
                // },
              },
            },
            // https://stackoverflow.com/questions/49117416/website-using-nuxt-and-nuxtjs-pwa-not-caching-google-fonts#answer-49210901
            {
              urlPattern: `https://fonts.googleapis.com/.*`,
              handler: `cacheFirst`,
              method: `GET`,
              strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
            },
          ],
        },
        manifest: {
          version: pkg.version,
          name: pkg.name,
          short_name: pkg.name,
          description: pkg.description,
        },
      },
    ],
  ],
  plugins: [`@/plugins/global-components.js`],
  build: {
    publicPath: baseURL,
    babel: {
      plugins: [`transform-object-rest-spread`],
    },
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            // processing custom properties make them fail
            customProperties: false,
          },
        },
      },
    },
  },
  generate: {
    dir: `dist`,
    fallback: true,
  },
}
