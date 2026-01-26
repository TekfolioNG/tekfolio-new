export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    public: {
    sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '',
    sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
    web3formsKey: process.env.NUXT_PUBLIC_WEB3FORMS_KEY || 'fd76f0eb-7783-4a9d-a008-dd3da20c621e',
    },
    // Private keys (only available on server-side)
  
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/ui", 
    "@nuxt/image",
  ],

  image: {
    format: ['webp', 'avif', 'jpg', 'png', 'svg'],
    quality: 85,
    densities: [1, 2],
    domains: [],
  },

  app: {
    baseURL: "/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
        }
      ]
    }
  },

  vite: {
    server: {
      hmr: {
        timeout: 30000,
      },
      watch: {
        usePolling: true,
        interval: 1000
      }
    },
    build: {
      chunkSizeWarningLimit: 1000
    }
  },

  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
      serverDir: '.output/server'
    },
    prerender: {
      failOnError: false,
      crawlLinks: false,
      routes: ['/'],
    },
    cloudflare: {
      pages: {
        routes: {
          include: ['/*'],
          exclude: [
            '/favicon.ico',
            '/assets/*',
            '/_nuxt/*',
            '/api/*'
          ]
        }
      }
    }
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2025-01-25",
});
