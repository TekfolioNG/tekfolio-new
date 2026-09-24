export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  ssr: true,

  runtimeConfig: {
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '',
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
      web3formsKey: process.env.NUXT_PUBLIC_WEB3FORMS_KEY || '',
    },
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui', '@nuxt/image'],

  image: {
    format: ['webp', 'avif'],
    quality: 85,
    densities: [1, 2],
  },

  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  vite: {
    server: {
      hmr: { timeout: 30000 },
      watch: { ignored: ['**/node_modules/**', '**/.git/**'] },
    },
    build: { chunkSizeWarningLimit: 1000 },
  },

  nitro: {
    preset: 'cloudflare-pages',
    output: { publicDir: '.output/public', serverDir: '.output/server' },
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/', '/expertise', '/certified-expertise', '/case-studies',
        '/training', '/about', '/contact', '/blog',
      ],
    },
    cloudflare: {
      pages: {
        routes: {
          include: ['/*'],
          exclude: ['/favicon.ico', '/assets/*', '/_nuxt/*', '/api/*'],
        },
      },
    },
    routeRules: {
      '/': { prerender: true },
      '/expertise': { prerender: true },
      '/certified-expertise': { prerender: true },
      '/case-studies': { prerender: true },
      '/training': { prerender: true },
      '/about': { prerender: true },
      '/contact': { prerender: true },
      '/blog': { prerender: true },
      '/api/sanity/**': { swr: 3600 },
      '/api/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept',
        },
      },
    },
  },

  experimental: {
    payloadExtraction: false,
    appManifest: false,
  },

  compatibilityDate: '2026-09-23',
})