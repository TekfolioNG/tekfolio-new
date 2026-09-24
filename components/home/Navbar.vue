<!-- app/components/global/Navbar.vue -->
<script setup>
const menuitems = [
  { title: 'Expertise', path: '/expertise' },
  { title: 'Case Studies', path: '/case-studies' },
  { title: 'Training', path: '/training' },
  { title: 'About', path: '/about' }
]

const open = ref(false)
const isScrolled = ref(false)
const route = useRoute()

// The whole bar (logo, links, CTA) only exists once the visitor has scrolled,
// or while the mobile menu is open.
const showBar = computed(() => isScrolled.value || open.value)

function onScroll() {
  isScrolled.value = window.scrollY > 80
}

function onKeydown(e) {
  if (e.key === 'Escape') open.value = false
}

let mq
function onBreakpoint(e) {
  // Desktop layout has no drawer, so make sure it's closed when resizing up
  if (e.matches) open.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  mq = window.matchMedia('(min-width: 1024px)')
  mq.addEventListener('change', onBreakpoint)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  mq?.removeEventListener('change', onBreakpoint)
  document.documentElement.style.overflow = ''
})

// Lock page scroll while the mobile drawer is open
watch(open, (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
})

watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <!-- The bar: slides in on scroll, slides out at the top of the page -->
    <Transition name="bar">
      <div v-show="showBar" class="relative">
        <!-- Background layer (separate so backdrop-blur never affects the mobile drawer) -->
        <div aria-hidden="true"
          class="pointer-events-none absolute inset-0 border-b border-[#E5E8ED]/10 transition-colors duration-300"
          :class="open
            ? 'bg-[#0B0B14]'
            : 'bg-[#0B0B14]/85 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.75)] backdrop-blur-xl'" />
        <!-- Brand-gradient hairline -->
        <div aria-hidden="true" class="hairline pointer-events-none absolute inset-x-0 bottom-0 h-px" />

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid h-[72px] grid-cols-[1fr_auto] items-center lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
            <!-- Logo -->
            <NuxtLink to="/" class="logo-link justify-self-start" aria-label="Tekfolio — Home">
              <img src="/img/tekfolio-logo.png" alt="Tekfolio" decoding="async" class="h-11 w-auto lg:h-14">
            </NuxtLink>

            <!-- Desktop nav (truly centred) -->
            <nav class="hidden justify-self-center lg:flex lg:items-center lg:gap-11" aria-label="Primary">
              <NuxtLink v-for="item in menuitems" :key="item.path" :to="item.path" active-class="is-active"
                class="nav-link relative py-2 text-[15px] font-medium tracking-[0.01em] text-[#FAFBFC]/70 transition-colors duration-200 hover:text-[#FAFBFC] focus-visible:text-[#FAFBFC] focus-visible:outline-none">
                {{ item.title }}
              </NuxtLink>
            </nav>

            <!-- CTA + mobile toggle -->
            <div class="flex items-center justify-self-end gap-2 sm:gap-3">
              <NuxtLink to="/contact"
                class="cta group relative hidden h-10 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-[#4A15A4] to-[#75138C] px-5 text-sm font-semibold text-[#FAFBFC] shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:scale-[0.97] hover:brightness-110 hover:shadow-2xl hover:shadow-[#75138C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] active:scale-95 sm:inline-flex lg:h-11 lg:px-6">
                <span class="relative z-10">Get in Touch</span>
                <span class="shine" aria-hidden="true" />
              </NuxtLink>

              <button type="button"
                class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E8ED]/10 text-[#FAFBFC] transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]/70 lg:hidden"
                :aria-expanded="open" aria-controls="mobile-menu" aria-label="Toggle navigation menu"
                @click="open = !open">
                <span class="relative block h-4 w-5" aria-hidden="true">
                  <span
                    class="absolute left-0 top-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300"
                    :class="open && 'translate-y-[7.25px] rotate-45'" />
                  <span
                    class="absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200"
                    :class="open && 'opacity-0'" />
                  <span
                    class="absolute bottom-0 left-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300"
                    :class="open && '-translate-y-[7.25px] -rotate-45'" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Phones/tablets only: keeps navigation reachable at the top of the page while the bar is hidden -->
    <Transition name="fab">
      <button v-if="!showBar" type="button"
        class="fixed right-4 top-[14px] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E8ED]/15 bg-[#0B0B14]/60 text-[#FAFBFC] backdrop-blur-md transition-colors hover:bg-[#0B0B14]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]/70 sm:right-6 lg:hidden"
        aria-controls="mobile-menu" aria-label="Open navigation menu" @click="open = true">
        <span class="relative block h-4 w-5" aria-hidden="true">
          <span class="absolute left-0 top-0 block h-[1.5px] w-full rounded-full bg-current" />
          <span class="absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 rounded-full bg-current" />
          <span class="absolute bottom-0 left-0 block h-[1.5px] w-full rounded-full bg-current" />
        </span>
      </button>
    </Transition>

    <!-- Mobile / tablet drawer -->
    <Transition name="menu">
      <div v-if="open" id="mobile-menu"
        class="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain bg-[#0B0B14] lg:hidden">
        <nav class="mx-auto flex min-h-full max-w-7xl flex-col px-4 pb-8 pt-2 sm:px-6" aria-label="Mobile">
          <ul>
            <li v-for="(item, i) in menuitems" :key="item.path">
              <NuxtLink :to="item.path" active-class="is-active"
                class="m-item group flex items-center gap-4 border-b border-[#E5E8ED]/10 py-5 text-xl font-medium text-[#FAFBFC]/75 transition-colors hover:text-[#FAFBFC] focus-visible:text-[#FAFBFC] focus-visible:outline-none [&.is-active]:text-[#FAFBFC]"
                :style="{ '--i': i }">
                <!-- Node motif bullet -->
                <span
                  class="h-2 w-2 shrink-0 rounded-full border-[1.5px] border-[#E5E8ED]/35 transition-colors duration-200 group-hover:border-[#2FB6FF] group-focus-visible:border-[#2FB6FF] group-[.is-active]:border-[#FAFBFC] group-[.is-active]:bg-[#FAFBFC]"
                  aria-hidden="true" />
                <span class="flex-1">{{ item.title }}</span>
                <svg
                  class="h-5 w-5 text-[#E5E8ED]/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#FAFBFC]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </NuxtLink>
            </li>
          </ul>

          <div class="m-item mt-auto pt-10" :style="{ '--i': menuitems.length }">
            <NuxtLink to="/contact"
              class="cta group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-[#4A15A4] to-[#75138C] text-base font-semibold text-[#FAFBFC] shadow-lg shadow-black/20 transition-all duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]/70">
              <span class="relative z-10">Get in Touch</span>
              <span class="shine" aria-hidden="true" />
            </NuxtLink>
            <p class="tagline mt-6 text-center text-[11px] uppercase tracking-[0.28em] text-[#E5E8ED]/40">
              Engineering Enterprise Intelligence
            </p>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ---------- Bar entrance / exit ---------- */
.bar-enter-active,
.bar-leave-active {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}

.bar-enter-from,
.bar-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fab-enter-active,
.fab-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* ---------- Brand-gradient hairline ---------- */
.hairline {
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(74, 21, 164, 0.95) 30%,
      rgba(117, 19, 140, 0.95) 70%,
      transparent 100%);
}

/* ---------- Desktop link: hover underline + active node ---------- */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1.5px;
  border-radius: 999px;
  background: #2FB6FF;
  /* AI Cyber Blue: hover/focus only */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

/* Active page = the logo's connector node */
.nav-link.is-active::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -12px;
  width: 5px;
  height: 5px;
  margin-left: -2.5px;
  border-radius: 999px;
  background: #FAFBFC;
  box-shadow: 0 0 0 3px rgba(250, 251, 252, 0.1);
}

/* ---------- Get in Touch: shine sweep (same mechanics as the hero CTA) ---------- */
.shine {
  position: absolute;
  inset: 0 auto 0 -60%;
  width: 45%;
  pointer-events: none;
  background: linear-gradient(100deg, transparent, rgb(255 255 255 / 0.35), transparent);
  transform: skewX(-18deg);
  transition: left 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.cta:hover .shine,
.cta:focus-visible .shine {
  left: 115%;
}

/* ---------- Mobile drawer transition (staggered items) ---------- */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.menu-enter-active .m-item {
  transition: opacity 0.35s ease calc(var(--i) * 50ms + 80ms),
    transform 0.35s ease calc(var(--i) * 50ms + 80ms),
    color 0.2s ease;
}

.menu-enter-from .m-item {
  opacity: 0;
  transform: translateY(10px);
}

.tagline {
  font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

/* ---------- Accessibility ---------- */
.logo-link:focus-visible {
  outline: 2px solid rgba(47, 182, 255, 0.7);
  outline-offset: 6px;
  border-radius: 6px;
}

@media (prefers-reduced-motion: reduce) {

  .bar-enter-active,
  .bar-leave-active,
  .fab-enter-active,
  .fab-leave-active,
  .menu-enter-active,
  .menu-leave-active,
  .menu-enter-active .m-item,
  .nav-link::after,
  .shine,
  .cta {
    transition: none !important;
  }
}
</style>