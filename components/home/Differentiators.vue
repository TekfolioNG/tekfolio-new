<!-- components/home/Differentiators.vue -->
<template>
    <section class="relative overflow-x-clip bg-[#0B0B14] pb-12 pt-2 lg:pb-16 lg:pt-4">
        <div class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8">
            <div class="border-t border-[#E5E8ED]/10 pb-2" />
            <p class="eyebrow mt-6 text-center text-xs text-[#2FB6FF]/80 lg:text-left">Why Us</p>
        </div>
        <div class="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
            <div class="border-t border-[#E5E8ED]/10 pb-2" />

            <!-- Eyebrow + heading -->

            <div ref="headRef" :class="['head-reveal', { 'is-visible': headVisible }]">
                <h2
                    class="display mt-8 text-center text-3xl font-bold leading-tight text-[#FAFBFC] sm:text-4xl lg:text-left">
                    The <span class="accent">Tekfolio</span> Advantage
                </h2>
            </div>

            <!-- Cards: left column drifts in from the left, right column from the right (desktop only) -->
            <div ref="gridRef" class="mt-8 grid grid-cols-1 gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-6">
                <article v-for="(item, i) in items" :key="item.title" :class="[
                    'card',
                    i % 2 === 0 ? 'from-left' : 'from-right',
                    { 'card-highlight': item.highlight, 'is-visible': gridVisible }
                ]" :style="{ '--d': `${Math.floor(i / 2) * 500 + (i % 2) * 380}ms` }">
                    <!-- Node motif marker, echoing the logo's connector nodes -->
                    <div class="node" aria-hidden="true">
                        <span class="node-dot" />
                        <span class="node-line" />
                    </div>
                    <h3 class="display mt-5 text-xl font-bold leading-snug text-[#FAFBFC] lg:text-2xl">
                        {{ item.title }}
                    </h3>
                    <p class="mt-3 text-base leading-relaxed text-[#E5E8ED]/80">
                        {{ item.body }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Order fills the 2x2 grid left to right, top to bottom.
// The Partner Advantage point is intentionally left out until the Google Cloud partner tier is confirmed;
// add it here as a fifth object when ready.
const items = [
    {
        title: 'Boutique agility, enterprise precision.',
        body: 'Multi-certified engineering, delivered by a modern, approachable team rather than a rigid corporate vendor.'
    },
    {
        title: 'Business first, then build.',
        body: 'We start as business analysts and strategists, and design your market position before we deploy a single server. Clients call us a partner, not a vendor.'
    },
    {
        title: 'Certified, Well-Architected delivery.',
        body: 'Every build follows the Security, Reliability and Cost Optimisation pillars, backed by named Google Cloud credentials, not a badge for show.',
        highlight: true
    },
    {
        title: 'Africa-rooted, global standard.',
        body: 'Regional cost efficiency with a global engineering standard. The advantage is structural, not a discount.'
    }
]

const headRef = ref(null)
const gridRef = ref(null)
const headVisible = ref(false)
const gridVisible = ref(false)

let observer

onMounted(() => {
    // Replays every time the heading or grid enters or leaves the viewport (scroll down or up).
    observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.target === headRef.value) headVisible.value = entry.isIntersecting
                else if (entry.target === gridRef.value) gridVisible.value = entry.isIntersecting
            }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    if (headRef.value) observer.observe(headRef.value)
    if (gridRef.value) observer.observe(gridRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.eyebrow {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}

/* Heading block rises first */
.head-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
}

.head-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Heading emphasis: a gradient underline that draws in left to right after the heading lands */
.accent {
    padding-bottom: 0.12em;
    background-image: linear-gradient(90deg, #75138C, #4A15A4);
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 0% 4px;
    transition: background-size 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.head-reveal.is-visible .accent {
    background-size: 100% 4px;
    transition-delay: 0.7s;
}

/* Cards. --tx / --ty set the starting offset; mobile rises only (no sideways travel). */
.card {
    --tx: 0px;
    --ty: 40px;
    position: relative;
    padding: 1.75rem;
    border-radius: 1rem;
    border: 1px solid rgba(229, 232, 237, 0.1);
    background: #0B0B14;
    opacity: 0;
    transform: translate(var(--tx), var(--ty));
    transition:
        opacity 0.5s ease,
        transform 0.5s ease,
        translate 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
    will-change: opacity, transform;
}

@media (min-width: 1024px) {
    .card {
        padding: 2rem;
    }

    /* Small directional drift: the two columns move toward each other and settle */
    .card.from-left {
        --tx: -64px;
        --ty: 24px;
    }

    .card.from-right {
        --tx: 64px;
        --ty: 24px;
    }
}

/* Cards arrive after the heading, left then right, row by row. Delays sit on the
   opacity/transform entries only, so hover (which uses `translate`) responds instantly. */
.card.is-visible {
    opacity: 1;
    transform: translate(0, 0);
    transition:
        opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) calc(300ms + var(--d, 0ms)),
        transform 1.3s cubic-bezier(0.22, 1, 0.36, 1) calc(300ms + var(--d, 0ms)),
        translate 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

/* Hover: Cyber Blue is reserved for interactive states. */
.card.is-visible:hover {
    translate: 0 -4px;
    border-color: rgba(47, 182, 255, 0.4);
    box-shadow: 0 18px 40px -20px rgba(47, 182, 255, 0.25);
}

/* Highlight: thin Magenta-to-Indigo gradient border */
.card-highlight {
    border: 1px solid transparent;
    background:
        linear-gradient(#0B0B14, #0B0B14) padding-box,
        linear-gradient(135deg, #75138C, #4A15A4) border-box;
    box-shadow: 0 20px 50px -30px rgba(117, 19, 140, 0.55);
}

.card-highlight.is-visible:hover {
    border-color: transparent;
    box-shadow: 0 0 0 1px rgba(47, 182, 255, 0.45), 0 18px 40px -20px rgba(47, 182, 255, 0.25);
}

/* Node motif: a dot with a short connector trace */
.node {
    display: flex;
    align-items: center;
    gap: 0;
}

.node-dot {
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 9999px;
    background: #75138C;
    box-shadow: 0 0 14px rgba(117, 19, 140, 0.7);
}

.node-line {
    width: 2.25rem;
    height: 1px;
    background: linear-gradient(to right, #75138C, rgba(117, 19, 140, 0));
}

@media (prefers-reduced-motion: reduce) {

    .head-reveal,
    .card {
        opacity: 1;
        transform: none;
        transition: none;
    }

    .accent {
        background-size: 100% 4px;
        transition: none;
    }
}
</style>