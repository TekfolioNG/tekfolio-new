<!-- app/components/global/Footer.vue -->
<script setup>
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

// Address is left empty until confirmed; the line only renders when it has a value.
const contact = {
  address: '',
  phone: '+234 708 854 7450',
  phoneHref: 'tel:+2347088547450',
  email: 'contact@tekfolio.ng'
}
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
            <img src="/img/tekfolio-logo3.png" alt="Tekfolio" class="h-18 w-auto" loading="lazy"
              decoding="async">
          </NuxtLink>
          <p class="tagline mt-6 text-[11px] text-[#E5E8ED]/70 sm:text-xs">
            Engineering Enterprise Intelligence
          </p>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-[#E5E8ED]/55">
            Translating the ambitions of African organizations into secure, scalable digital infrastructure.
          </p>
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
                class="partner-badge h-32 w-auto object-contain lg:h-36" loading="lazy" decoding="async">
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

/* Tagline: Space Grotesk caps, generous letter-spacing, verbatim per brand book */
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

/* Link with the logo's connector-node as its bullet */
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

/* AI Cyber Blue: hover and focus only */
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

.foot-link:focus-visible,
.contact-link:focus-visible,
.focus-ring:focus-visible {
  outline: 2px solid rgba(47, 182, 255, 0.7);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Partner badges: same settle on hover as the credentials section */
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
  .partner-badge {
    transition: none;
  }
}
</style>