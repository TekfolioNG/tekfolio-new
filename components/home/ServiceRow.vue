<!-- components/home/ServiceRow.vue -->
<template>
    <div ref="rowRef"
        class="grid grid-cols-1 items-start gap-12 py-14 first:pt-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20 lg:first:pt-8">

        <div :class="['order-1', reverse ? 'lg:order-1' : 'lg:order-2', 'relative mb-8 lg:mb-0']">
            <div class="relative h-[19rem] overflow-hidden rounded-2xl sm:h-[21rem] lg:h-[23rem]">
                <img :src="image" :alt="imageAlt" decoding="async"
                    class="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover"
                    :style="{ transform: `translateY(${parallaxY}px)` }" />
                <div aria-hidden="true"
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B14] via-[#0B0B14]/15 to-transparent" />
                <div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-[#0B0B14]/35" />
            </div>

            <div ref="statRef" :class="[
                'stat-reveal absolute -bottom-6 max-w-[14rem] rounded-xl border border-[#2FB6FF]/30 bg-[#0B0B14]/85 p-5 shadow-2xl shadow-black/50 backdrop-blur-md',
                reverse ? 'right-6 lg:right-10' : 'left-6 lg:left-10',
                { 'is-visible': visible }
            ]">
                <p class="text-3xl font-bold text-[#FAFBFC] lg:text-4xl">{{ statValue }}</p>
                <p class="mt-1 text-sm leading-snug text-[#E5E8ED]/70">{{ statLabel }}</p>
                <p class="mt-2 text-[11px] uppercase tracking-wider text-[#E5E8ED]/40">{{ statSource }}</p>
            </div>
        </div>

        <div :class="['order-2', reverse ? 'lg:order-2' : 'lg:order-1', 'flex flex-col justify-center']">
            <div ref="contentRef" :class="['content-block max-w-md', { 'is-visible': visible }]">
                <p class="category reveal-item text-xs text-[#2FB6FF]/80" style="--d: 0ms">{{ category }}</p>
                <h3 class="display reveal-item mt-4 text-2xl font-bold leading-tight text-[#FAFBFC] sm:text-3xl"
                    style="--d: 120ms">
                    {{ heading }}
                </h3>
                <p class="reveal-item mt-4 text-base leading-relaxed text-[#E5E8ED]/85" style="--d: 240ms">
                    {{ body }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
    category: { type: String, required: true },
    heading: { type: String, required: true },
    body: { type: String, required: true },
    statValue: { type: String, required: true },
    statLabel: { type: String, required: true },
    statSource: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    reverse: { type: Boolean, default: false }
})

const rowRef = ref(null)
const contentRef = ref(null)
const statRef = ref(null)
const visible = ref(false)
const parallaxY = ref(0)

let revealObserver
let parallaxObserver
let ticking = false
let parallaxActive = false

function updateParallax() {
    ticking = false
    if (!parallaxActive || !rowRef.value) return
    const rect = rowRef.value.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    // -1 (row centered above the viewport) .. 1 (row centered below it), 0 = row centered in view
    const progress = (rect.top + rect.height / 2 - vh / 2) / vh
    const maxOffset = 26 // px — stays inside the image's 8%/16% overscan, see template
    parallaxY.value = Math.max(-maxOffset, Math.min(maxOffset, progress * maxOffset * -1))
}

function onScroll() {
    if (!ticking) {
        ticking = true
        requestAnimationFrame(updateParallax)
    }
}

onMounted(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    revealObserver = new IntersectionObserver(
        ([entry]) => {
            visible.value = entry.isIntersecting
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )
    if (rowRef.value) revealObserver.observe(rowRef.value)

    // Parallax: only listens to scroll while the row is near the viewport (perf),
    // and is skipped entirely under prefers-reduced-motion.
    if (!reduceMotion) {
        parallaxObserver = new IntersectionObserver(
            ([entry]) => {
                parallaxActive = entry.isIntersecting
                if (parallaxActive) {
                    window.addEventListener('scroll', onScroll, { passive: true })
                    updateParallax()
                } else {
                    window.removeEventListener('scroll', onScroll)
                }
            },
            { rootMargin: '30% 0px 30% 0px' }
        )
        if (rowRef.value) parallaxObserver.observe(rowRef.value)
    }
})

onBeforeUnmount(() => {
    revealObserver?.disconnect()
    parallaxObserver?.disconnect()
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.category {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 500;
}

.reveal-item {
    opacity: 0;
    transform: translateY(48px);
    transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
}

.content-block.is-visible .reveal-item {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--d, 0ms);
}

/* Stat box: arrives last, after the text has landed */
.stat-reveal {
    opacity: 0;
    transform: translateY(32px) scale(0.94);
    transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
}

.stat-reveal.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition-delay: 480ms;
}

@media (prefers-reduced-motion: reduce) {

    .reveal-item,
    .stat-reveal {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
</style>