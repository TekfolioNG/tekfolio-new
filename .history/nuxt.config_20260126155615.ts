export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '',
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
      web3formsKey: process.env.NUXT_PUBLIC_WEB3FORMS_KEY || 'fd76f0eb-7783-4a9d-a008-dd3da20c621e',
    },
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

  ui: {
   // Only import components you use for better performance
    fonts: true
  },

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
        // Removed usePolling for better performance
        ignored: ['**/node_modules/**', '**/.git/**']
      }
    },
    build: {
      chunkSizeWarningLimit: 1000
    },
    optimizeDeps: {
      include: ['@nuxt/ui']
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
      crawlLinks: true, // Changed to true for better route discovery
      routes: [
        '/',
        '/web-solutions',
        '/mobile-apps',
        '/data-engineering',
        '/seo-performance',
        '/about-us',
        '/careers',
        '/case-studies',
        '/blog',
        '/contact'
      ],
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
    },
    routeRules: {
      // Prerender static pages
      '/': { prerender: true },
      '/web-solutions': { prerender: true },
      '/mobile-apps': { prerender: true },
      '/data-engineering': { prerender: true },
      '/seo-performance': { prerender: true },
      '/about-us': { prerender: true },
      '/careers': { prerender: true },
      '/case-studies': { prerender: true },
      '/blog': { prerender: true },
      '/contact': { prerender: true },
      // Cache Sanity API calls
      '/api/sanity/**': { 
        swr: 3600, // Cache for 1 hour
      },
      // CORS for API routes
      '/api/**': { 
        cors: true,
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept'
        }
      }
    }
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2025-01-25",
});