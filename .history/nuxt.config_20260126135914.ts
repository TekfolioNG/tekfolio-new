export default defineNuxtConfig({
  ssr: true,

  // Development optimizations
  devtools: { enabled: false }, // Disable devtools in dev for speed
  
  // Speed up type checking
  typescript: {
    typeCheck: false, // Disable type checking during dev
    shim: false
  },

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
    "@nuxt/image",
    // Move @nuxt/ui to the end - it's slow and should load last
    //"@nuxt/ui", 
  ],

  image: {
    provider: 'ipx',
    format: ['webp', 'avif', 'jpg', 'png'],
    quality: 85,
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    ipx: {
      maxAge: 60 * 60 * 24 * 365
    }
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
        ignored: ['**/.nuxt/**', '**/node_modules/**', '**/.output/**']
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router'],
      exclude: ['@nuxt/ui-templates']
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
      crawlLinks: true, // Changed to true
      routes: [
        '/',
        '/about-us',
        '/careers',
        '/case-studies',
        '/blog',
        '/web-solutions',
        '/mobile-apps',
        '/data-engineering',
        '/seo-performance',
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
            '/_ipx/*',
            '/api/*'
          ]
        }
      }
    },
    // Add this to handle static assets better
    publicAssets: [
      {
        baseURL: 'assets',
        dir: 'public/assets',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      }
    ]
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2025-01-25",
});