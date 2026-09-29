<!-- app/components/global/Footer.vue -->
<script setup>
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next'

const year = new Date().getFullYear()

const expertise = [
  { title: 'Cloud Architecture', path: '/expertise#cloud-architecture' },
  { title: 'Enterprise AI', path: '/expertise#enterprise-ai' },
  { title: 'Data & BI', path: '/expertise#data-bi' }
]

const company = [
  { title: 'About', path: '/about' },
  { title: 'Case Studies', path: '/case-studies' },
  { title: 'Training', path: '/training' },
  { title: 'Blog', path: '/blog' }
]

const legal = [
  { title: 'Privacy', path: '/privacy' },
  { title: 'Terms', path: '/terms' },
  { title: 'Cookies', path: '/cookies' }
]

const partnerBadges = [
  {
    file: 'gemini-enterprise-agent-dev.png',
    alt: 'Gemini Enterprise Certified Partner Specialist — Agent Development'
  },
  {
    file: 'gemini-enterprise-deployment.png',
    alt: 'Gemini Enterprise Certified Partner Specialist — Deployment'
  }
]

const contact = {
  phone: '+234 708 854 7450',
  phoneHref: 'tel:+2347088547450',
  email: 'contact@tekfolio.ng'
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/tekfolio-ng', icon: Linkedin },
  { name: 'X', href: 'https://x.com/tekfoliong', iconSvg: 'x' },
  { name: 'Facebook', href: 'https://web.facebook.com/tekfolio/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/tekfoliong/', icon: Instagram },
  { name: 'YouTube', href: 'https://www.youtube.com/@Tekfoliong', icon: Youtube }
]

// Organization structured data, written as plain JSON-LD via core Nuxt's
// useHead — no schema.org module dependency required. Ties the footer's
// public contact points and socials into one machine-readable record.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Tekfolio',
        url: 'https://tekfolio.ng',
        logo: 'https://tekfolio.ng/img/tekfolio-logo.png',
        telephone: contact.phone,
        email: contact.email,
        sameAs: socialLinks.map((s) => s.href)
      })
    }
  ]
})
</script>

<template>
  <footer class="relative bg-[#0B0B14]">
    <!-- Brand-gradient hairline -->
    <div aria-hidden="true" class="hairline h-px w-full" />

    <div class="mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-10 lg:px-8 lg:pt-16">
      <div class="grid gap-12 text-center lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.4fr] lg:gap-10 lg:text-left">

        <!-- Brand -->
        <div class="flex flex-col items-center lg:items-start">
          <NuxtLink to="/" class="focus-ring inline-block" aria-label="Tekfolio — Home">
            <img src="/img/tekfolio-logo3.png" alt="Tekfolio" class="h-18 w-auto" loading="lazy" decoding="async">
          </NuxtLink>
          <p class="tagline mt-6 text-[11px] text-[#E5E8ED]/70 sm:text-xs">
            Engineering Enterprise Intelligence
          </p>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-[#E5E8ED]/55">
            Translating the ambitions of African organizations into secure, scalable digital infrastructure.
          </p>

          <!-- Social -->
          <div class="mt-6 flex items-center gap-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
              rel="noopener noreferrer" :aria-label="`Tekfolio on ${social.name}`"
              class="social-link flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E8ED]/15 text-[#E5E8ED]/60">
              <component :is="social.icon" v-if="social.icon" class="h-4 w-4" stroke-width="1.75" />
              <svg v-else-if="social.iconSvg === 'x'" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Link lists: side by side on mobile, separate columns on desktop -->
        <div class="grid grid-cols-2 gap-8 lg:contents">
          <nav aria-label="Expertise">
            <h2 class="col-heading">Expertise</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in expertise" :key="item.path">
                <NuxtLink :to="item.path" class="foot-link">{{ item.title }}</NuxtLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 class="col-heading">Company</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in company" :key="item.path">
                <NuxtLink :to="item.path" class="foot-link">{{ item.title }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Partnership: company level partner specialisations -->
        <div class="flex flex-col items-center lg:items-start">
          <h2 class="col-heading">Google Cloud Certified Partner</h2>
          <ul class="mt-5 flex items-center justify-center gap-5 lg:justify-start" aria-label="Partner specialisations">
            <li v-for="badge in partnerBadges" :key="badge.file">
              <img :src="`/img/${badge.file}`" :alt="badge.alt" :title="badge.alt"
                class="partner-badge h-36 w-auto object-contain lg:h-40" loading="lazy" decoding="async">
            </li>
          </ul>
          <p class="mt-5 max-w-[16rem] text-xs leading-relaxed text-[#E5E8ED]/55">
            Tekfolio is a Google Cloud Gemini Enterprise Certified Partner Specialist (CSP)
          </p>
        </div>
      </div>

      <!-- Legal bar: copyright/legal left, contact centred, tagline right on desktop -->
      <div
        class="mt-14 grid grid-cols-1 items-center gap-4 border-t border-[#E5E8ED]/10 pt-6 text-xs text-[#E5E8ED]/45 lg:grid-cols-3">
        <p class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
          <span>© {{ year }} Tekfolio</span>
          <template v-for="item in legal" :key="item.path">
            <span aria-hidden="true">·</span>
            <NuxtLink :to="item.path" class="contact-link">{{ item.title }}</NuxtLink>
          </template>
        </p>

        <p class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#E5E8ED]/55">
          <a :href="contact.phoneHref" class="contact-link">{{ contact.phone }}</a>
          <span aria-hidden="true">·</span>
          <a :href="`mailto:${contact.email}`" class="contact-link">{{ contact.email }}</a>
        </p>

        <p class="text-center lg:text-right">Africa-rooted. Global standard.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hairline {
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(74, 21, 164, 0.95) 30%,
      rgba(117, 19, 140, 0.95) 70%,
      transparent 100%);
}

.tagline {
  font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-weight: 500;
}

.col-heading {
  font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: rgba(229, 232, 237, 0.5);
}

.foot-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: rgba(229, 232, 237, 0.6);
  transition: color 0.2s ease;
}

.foot-link::before {
  content: '';
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1.5px solid rgba(229, 232, 237, 0.4);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.foot-link:hover,
.foot-link:focus-visible {
  color: #FAFBFC;
}

.foot-link:hover::before,
.foot-link:focus-visible::before {
  border-color: #2FB6FF;
  background-color: #2FB6FF;
}

.contact-link {
  transition: color 0.2s ease;
}

.contact-link:hover,
.contact-link:focus-visible {
  color: #FAFBFC;
}

/* Social icons: outline only, brighten + border lifts to Cyber Blue on hover/focus */
.social-link {
  transition: color 0.2s ease, border-color 0.2s ease;
}

.social-link:hover,
.social-link:focus-visible {
  color: #FAFBFC;
  border-color: #2FB6FF;
}

.foot-link:focus-visible,
.contact-link:focus-visible,
.social-link:focus-visible,
.focus-ring:focus-visible {
  outline: 2px solid rgba(47, 182, 255, 0.7);
  outline-offset: 4px;
  border-radius: 4px;
}

.partner-badge {
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35));
  transition: transform 0.3s ease-out;
}

.partner-badge:hover {
  transform: scale(0.95);
}

@media (prefers-reduced-motion: reduce) {

  .foot-link,
  .foot-link::before,
  .contact-link,
  .social-link,
  .partner-badge {
    transition: none;
  }
}
</style>