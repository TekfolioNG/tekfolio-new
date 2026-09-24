<!-- app/components/home/Hero.vue -->
<script setup>
const capabilities = [
  'Cloud Architecture & Infrastructure',
  'Data & Business Intelligence',
  'Enterprise AI & Automation'
]

// Monochrome credential strip. `label` is what shows; `full` is the official name,
// used for the hover title and screen readers.
// Swap in unaltered vendor artwork later via an optional `src` field.
const badges = [
  {
    label: 'GCP-Gemini Certified Partner Specialist (CSP)',
    full: 'Google Cloud Gemini Enterprise Certified Partner Specialist (Deployment and Agent Development)'
  },
  { label: 'GCP-PCA', full: 'Google Cloud Certified Professional Cloud Architect' },
  { label: 'GCP-PDE', full: 'Google Cloud Certified Professional Data Engineer' },
  { label: 'GCP-GAIL', full: 'Google Cloud Certified Generative AI Leader' }
]

/* ---- Rotating capability line ---- */
const active = ref(0)
const prev = ref(-1)
let timer

function phraseState(i) {
  if (i === active.value) return 'is-active'
  if (i === prev.value) return 'is-prev'
  return ''
}

onMounted(() => {
  timer = setInterval(() => {
    prev.value = active.value
    active.value = (active.value + 1) % capabilities.length
  }, 3400)
})

onUnmounted(() => clearInterval(timer))

function scrollToExpertise(e) {
  const el = document.getElementById('expertise')
  if (!el) return
  e.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

/* ---- Node network shaped as mainland Africa ----
   Coordinates are [longitude, latitude], projected to the 560x560 viewBox.
   A third entry names a point that becomes a node. Islands are left out on purpose. */
const project = ([lon, lat]) => [52 + (lon + 17.6) * 6.6, 42 + (37.3 - lat) * 6.6]
const fmt = (n) => Math.round(n * 10) / 10

const outline = [
  [-5.9, 35.8, 'Tangier'], [-2.5, 35.2], [3.0, 36.8, 'Algiers'], [7.8, 36.9], [9.9, 37.3, 'Bizerte'],
  [11.0, 37.0], [10.1, 33.9], [11.5, 33.1], [13.2, 32.9, 'Tripoli'], [15.2, 32.4], [16.6, 31.2],
  [19.0, 30.3], [20.1, 32.1, 'Benghazi'], [22.2, 32.9], [24.0, 32.1], [25.1, 31.6], [29.9, 31.2, 'Alexandria'],
  [32.3, 31.3], [32.6, 29.9], [33.1, 28.4], [33.8, 27.3], [35.6, 23.9], [37.2, 19.6, 'PortSudan'],
  [39.5, 15.6], [42.7, 13.0], [43.2, 11.6, 'Djibouti'], [45.0, 10.4], [49.2, 11.3], [51.3, 11.8, 'Guardafui'],
  [51.0, 10.4], [49.8, 8.0], [48.5, 5.3], [45.3, 2.0, 'Mogadishu'], [42.5, -0.4], [40.9, -2.3],
  [39.7, -4.0, 'Mombasa'], [39.3, -6.8], [40.2, -10.3], [40.5, -14.5], [36.9, -17.9], [34.8, -19.8, 'Beira'],
  [35.5, -23.9], [32.6, -25.9, 'Maputo'], [32.4, -28.4], [31.0, -29.9], [27.9, -33.0], [25.6, -34.0],
  [22.0, -34.2], [20.0, -34.8, 'Agulhas'], [18.5, -34.3], [18.0, -32.8], [16.5, -28.6], [15.2, -26.6, 'Luderitz'],
  [14.5, -22.9], [11.8, -17.3], [12.1, -15.2], [13.5, -12.4], [13.2, -8.8, 'Luanda'], [12.3, -6.0],
  [11.0, -4.0], [8.8, -0.7], [9.4, 0.4, 'Libreville'], [9.7, 4.0], [8.3, 4.9], [6.0, 4.3], [3.4, 6.4, 'Lagos'],
  [1.2, 6.1], [-0.2, 5.5], [-1.8, 4.9], [-7.7, 4.4], [-10.8, 6.3, 'Monrovia'], [-13.2, 8.5], [-13.7, 9.5],
  [-15.6, 11.9], [-17.5, 14.7, 'Dakar'], [-16.5, 16.0], [-16.0, 18.1], [-17.0, 20.9, 'Nouadhibou'],
  [-15.9, 23.7], [-13.2, 27.1], [-12.9, 27.9], [-9.6, 30.4, 'Agadir'], [-7.6, 33.6], [-6.8, 34.0]
]

// Madagascar, clockwise from the northern tip
const madagascar = [
  [49.3, -12.0], [49.3, -12.3, 'Antsiranana'], [50.15, -14.3], [50.3, -14.9], [49.7, -15.4], [49.8, -16.2],
  [49.4, -18.15, 'Toamasina'], [48.8, -19.9], [48.35, -21.2], [48.0, -22.15], [47.8, -22.8],
  [47.0, -25.0, 'FortDauphin'], [45.15, -25.6], [43.7, -23.35, 'Toliara'], [43.4, -21.75], [44.3, -20.3],
  [44.0, -18.05], [46.3, -15.7, 'Mahajanga'], [47.4, -14.9], [48.3, -13.3]
]

const inland = {
  Antananarivo: [47.5, -18.9],
  Bamako: [-8.0, 12.6],
  Tamanrasset: [5.5, 22.8],
  NDjamena: [15.0, 12.1],
  Khartoum: [32.5, 15.6],
  Addis: [38.7, 9.0],
  Nairobi: [36.8, -1.3],
  Kinshasa: [15.3, -4.3],
  Johannesburg: [28.0, -26.2]
}

const spokes = [
  ['Lagos', 'Bamako'], ['Lagos', 'NDjamena'], ['Lagos', 'Kinshasa'],
  ['NDjamena', 'Khartoum'], ['NDjamena', 'Tamanrasset'], ['Tamanrasset', 'Algiers'],
  ['Khartoum', 'PortSudan'], ['Khartoum', 'Addis'], ['Addis', 'Djibouti'], ['Addis', 'Nairobi'],
  ['Nairobi', 'Mombasa'], ['Kinshasa', 'Luanda'], ['Kinshasa', 'Johannesburg'], ['Johannesburg', 'Maputo'],
  ['Beira', 'Mahajanga'], ['Mahajanga', 'Antananarivo'], ['Antananarivo', 'Toamasina'], ['Antananarivo', 'Toliara']
]

const coords = { ...inland }
  ;[outline, madagascar].forEach((shape) =>
    shape.forEach((p) => { if (p[2]) coords[p[2]] = [p[0], p[1]] })
  )

const outlinePaths = [outline, madagascar].map(
  (shape) => shape.map((p, i) => `${i ? 'L' : 'M'}${project(p).map(fmt).join(' ')}`).join(' ') + ' Z'
)

const spokePaths = spokes.map(([a, b]) => {
  const [ax, ay] = project(coords[a]).map(fmt)
  const [bx, by] = project(coords[b]).map(fmt)
  return `M${ax} ${ay} L${bx} ${by}`
})

// Pulse delays are spread irregularly so only a few nodes are pulsing at any moment.
const nodes = Object.keys(coords).map((name, i) => {
  const [x, y] = project(coords[name]).map(fmt)
  const hub = name === 'Lagos'
  return {
    name,
    x,
    y,
    hub,
    r: hub ? 7.5 : name in inland ? 4.5 : 4,
    d: ((i * 37) % 55) / 10
  }
})
</script>

<template>
  <section class="hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#0B0B14]">
    <!-- Ambient glow -->
    <div class="glow-left pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[34rem] w-[34rem]"
      aria-hidden="true" />

    <div class="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
      <!-- Mobile order: intro, visual, actions. Desktop: text column left, visual right. -->
      <div
        class="grid items-center gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.14fr)] lg:grid-rows-[auto_auto] lg:gap-x-8 lg:gap-y-0">

        <!-- Intro -->
        <div
          class="relative z-10 mx-auto max-w-2xl text-center lg:col-start-1 lg:row-start-1 lg:mx-0 lg:self-end lg:text-left">
          <!-- Eyebrow: the tagline, set as the brand book specifies -->
          <p class="eyebrow reveal flex items-center justify-center gap-3 text-xs text-[#E5E8ED]/70 sm:text-[13px] lg:justify-start"
            style="--d: 0ms">
            <span class="h-2 w-2 shrink-0 rounded-full border-[1.5px] border-[#E5E8ED]/60" aria-hidden="true" />
            Engineering Enterprise Intelligence
          </p>

          <h1
            class="display reveal mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#FAFBFC] sm:text-5xl lg:text-6xl xl:text-[4rem]"
            style="--d: 100ms">
            <span class="block">Google-Certified Architecture.</span>
            <span class="block">Built for African Enterprises.</span>
          </h1>

          <!-- Rotating capabilities: all phrases share one grid cell, so the box never resizes -->
          <div class="rotator-wrap">
            <p class="rotator display reveal mt-7 flex flex-wrap items-baseline justify-center gap-x-2.5 text-xl font-medium sm:text-2xl lg:flex-nowrap lg:justify-start"
              style="--d: 350ms">
              <span class="text-[#E5E8ED]/55">Engineering</span>
              <span class="sr-only">{{ capabilities.join(', ') }}</span>
              <span class="inline-grid" aria-hidden="true">
                <span v-for="(item, i) in capabilities" :key="item"
                  class="phrase col-start-1 row-start-1 text-center text-[#FAFBFC] lg:whitespace-nowrap lg:text-left"
                  :class="phraseState(i)">
                  {{ item }}
                </span>
              </span>
            </p>
          </div>
        </div>

        <!-- Visual: sparse node/connector network in the shape of Africa -->
        <div
          class="reveal relative mx-auto w-full max-w-[380px] sm:max-w-[460px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[600px] xl:max-w-[660px] lg:justify-self-end"
          style="--d: 300ms">
          <div class="glow-visual pointer-events-none absolute inset-0 -z-10 scale-110" aria-hidden="true" />

          <svg viewBox="0 0 560 560" class="h-auto w-full" role="img"
            aria-label="Network of connected nodes forming a map of Africa">
            <!-- Tile echo -->
            <rect x="20" y="20" width="520" height="520" rx="44" fill="none" stroke="#E5E8ED" stroke-opacity="0.08"
              stroke-width="1.5" />

            <!-- Continent and Madagascar silhouettes -->
            <path v-for="p in outlinePaths" :key="p" :d="p" fill="#4A15A4" fill-opacity="0.14" stroke="#FAFBFC"
              stroke-opacity="0.5" stroke-width="1.75" stroke-linejoin="round" />

            <!-- Inland connectors -->
            <path v-for="d in spokePaths" :key="d" :d="d" fill="none" stroke="#E5E8ED" stroke-opacity="0.2"
              stroke-width="1.25" stroke-linecap="round" />

            <!-- Nodes: pulse ring (animated) + solid node. Lagos is the hub. -->
            <g v-for="n in nodes" :key="n.name">
              <circle class="node-ring" :cx="n.x" :cy="n.y" :r="n.r" fill="none" stroke="#FAFBFC" stroke-width="1.5"
                :style="{ '--d': `${n.d}s` }" />
              <circle :cx="n.x" :cy="n.y" :r="n.r" :fill="n.hub ? '#75138C' : '#0B0B14'" stroke="#FAFBFC"
                :stroke-opacity="n.hub ? 1 : 0.85" stroke-width="1.5" />
            </g>
          </svg>
        </div>

        <!-- Actions + credentials (after the visual on mobile) -->
        <div class="relative z-10 mx-auto max-w-2xl lg:col-start-1 lg:row-start-2 lg:mx-0 lg:self-start">
          <div
            class="reveal flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8 lg:mt-10 lg:justify-start"
            style="--d: 500ms">
            <NuxtLink to="/contact"
              class="cta group relative inline-flex h-12 w-full max-w-xs items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-[#4A15A4] to-[#75138C] px-8 text-base font-semibold text-[#FAFBFC] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_24px_-14px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] active:scale-[0.98] active:brightness-95 sm:w-auto sm:max-w-none lg:hover:scale-[0.97] lg:hover:brightness-110 lg:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_36px_-12px_rgba(117,19,140,0.6)] lg:active:scale-95">
              <span class="relative z-10">Start Your Build</span>
              <span class="shine" aria-hidden="true" />
            </NuxtLink>

            <a href="#expertise"
              class="text-link group inline-flex items-center justify-center gap-2 py-2 text-base font-medium text-[#FAFBFC]/80 transition-colors duration-200 hover:text-[#FAFBFC] focus-visible:text-[#FAFBFC] focus-visible:outline-none"
              @click="scrollToExpertise">
              <span class="text-link-label relative">Review Core Expertise</span>
              <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" fill="none"
                stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>

          <!-- Certified expertise: monochrome, full credential names -->
          <ul
            class="reveal mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 border-t border-[#E5E8ED]/10 pt-5 sm:gap-x-7 lg:mt-12 lg:justify-start lg:pt-6"
            style="--d: 650ms" aria-label="Certified expertise">
            <li v-for="(badge, i) in badges" :key="badge.label"
              class="flex items-center justify-center gap-2 text-center text-[13px] font-medium leading-snug text-[#E5E8ED]/60 sm:gap-2.5 lg:justify-start lg:text-left"
              :class="i === 0 ? 'w-full' : ''" :title="badge.full">
              <svg class="h-4 w-4 shrink-0 text-[#E5E8ED]/45" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.75Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span aria-hidden="true">{{ badge.label }}</span>
              <span class="sr-only">{{ badge.full }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Type ---------- */
.display,
.eyebrow {
  font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-weight: 500;
}

/* ---------- Glows ---------- */
.glow-left {
  background: radial-gradient(closest-side, rgba(74, 21, 164, 0.35), transparent);
}

.glow-visual {
  background: radial-gradient(closest-side, rgba(117, 19, 140, 0.35), rgba(74, 21, 164, 0.15) 55%, transparent);
}

/* ---------- Load sequence ---------- */
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  opacity: 0;
  animation: rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--d, 0ms);
}

/* ---------- Rotating capability ----------
   Desktop: "Engineering" and the phrase share one line. The font size scales with the
   text column's width so the longest phrase always fits. Mobile/tablet keep the stacked layout. */
@media (min-width: 1024px) {
  .rotator-wrap {
    container-type: inline-size;
  }

  .rotator {
    font-size: 1rem;
    /* fallback for browsers without container units */
    font-size: clamp(1rem, 3.5cqw, 1.5rem);
  }
}

.phrase {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.phrase.is-active {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.12s;
}

.phrase.is-prev {
  opacity: 0;
  transform: translateY(-10px);
}

/* ---------- Node pulses: scale + fade only, never rotate ---------- */
.node-ring {
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0;
  animation: pulse 5.5s ease-out infinite;
  animation-delay: var(--d, 0s);
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  6% {
    opacity: 0.5;
  }

  40%,
  100% {
    opacity: 0;
    transform: scale(3.2);
  }
}

/* ---------- Start Your Build: shine sweep on desktop only ----------
   Below 1024px the button stays still (press feedback only), which is calmer on touch screens. */
.shine {
  display: none;
}

@media (min-width: 1024px) {
  .shine {
    display: block;
    position: absolute;
    inset: 0 auto 0 -60%;
    width: 45%;
    pointer-events: none;
    background: linear-gradient(100deg, transparent, rgb(255 255 255 / 0.55), transparent);
    transform: skewX(-18deg);
    transition: left 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .cta:hover .shine,
  .cta:focus-visible .shine {
    left: 115%;
  }
}

/* ---------- Text link underline (Cyber Blue: hover/focus only) ---------- */
.text-link-label::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 1.5px;
  border-radius: 999px;
  background: #2FB6FF;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.text-link:hover .text-link-label::after,
.text-link:focus-visible .text-link-label::after {
  transform: scaleX(1);
}

.text-link:focus-visible {
  outline: 2px solid rgba(47, 182, 255, 0.7);
  outline-offset: 4px;
  border-radius: 6px;
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    animation: none;
    transform: none;
  }

  .node-ring {
    animation: none;
  }

  .phrase,
  .phrase.is-active,
  .phrase.is-prev {
    transform: none;
    transition: opacity 0.3s ease;
  }

  .shine,
  .cta,
  .text-link-label::after {
    transition: none !important;
  }
}
</style>