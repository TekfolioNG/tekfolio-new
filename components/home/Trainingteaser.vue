<!-- components/home/TrainingTeaser.vue -->
<template>
    <section class="relative overflow-x-clip bg-[#0B0B14] pb-12 pt-2 lg:pb-16 lg:pt-4">
        <div class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8">
            <div class="border-t border-[#E5E8ED]/10 pb-2" />
            <p class="eyebrow mt-6 text-center text-xs text-[#2FB6FF]/80 lg:text-left">Training &amp; Development</p>
        </div>

        <div class="mx-auto mt-8 max-w-6xl px-6 sm:px-10 lg:mt-10 lg:px-16">
            <div ref="panelRef" class="panel grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <!-- Text -->
                <div :class="['fade-up', { 'is-visible': visible }]">
                    <h2
                        class="display text-center text-3xl font-bold leading-tight text-[#FAFBFC] sm:text-4xl lg:text-left">
                        Skills for the Future of Work.
                    </h2>
                    <p
                        class="mx-auto mt-5 max-w-lg text-center text-base leading-relaxed text-[#E5E8ED]/80 lg:mx-0 lg:text-left">
                        We are a Google Cloud Partner and Gemini Enterprise Certified Partner Specialist (CPS), held
                        to the highest standards of technical skill, delivery and reliability. Our trainers hold
                        verifiable industry credentials, including from <strong>Cisco and the Linux Foundation</strong>,
                        spanning cloud, data, AI and security — so you're learning from firsthand
                        expertise.
                    </p>
                    <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <NuxtLink to="/training" class="btn-primary">Explore training</NuxtLink>
                        <NuxtLink to="/contact" class="link-soft">Partner with us <span aria-hidden="true">&rarr;</span>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Cards -->
                <div class="flex flex-col gap-5">
                    <article v-for="(card, i) in cards" :key="card.title"
                        :class="['card', 'fade-up', { 'is-visible': visible }]" :style="{ '--d': `${i * 140}ms` }">
                        <div class="node" aria-hidden="true">
                            <span class="node-dot" />
                            <span class="node-line" />
                        </div>
                        <h3 class="display mt-4 text-lg font-bold text-[#FAFBFC] lg:text-xl">{{ card.title }}</h3>
                        <p class="mt-2 text-base leading-relaxed text-[#E5E8ED]/80">{{ card.body }}</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// No numbers or outcomes are shown here on purpose: add them only when they can be evidenced.
const cards = [
    {
        title: 'For enterprise teams & managers',
        body: 'Practical, high-impact digital skills that help managers and teams work smarter and grow a modern enterprise.'
    },
    {
        title: 'For governments, NGOs & CSR',
        body: 'Partnership-based skills programmes with governments, NGOs and CSR initiatives.'
    }
]

const panelRef = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
    // Replays every time the panel enters or leaves the viewport (scroll down or up).
    observer = new IntersectionObserver(
        ([entry]) => { visible.value = entry.isIntersecting },
        { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )
    if (panelRef.value) observer.observe(panelRef.value)
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

/* Panel surface: faint Indigo glow fading into Ink */
.panel {
    padding: 2rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(229, 232, 237, 0.1);
    background: radial-gradient(120% 140% at 0% 0%, rgba(74, 21, 164, 0.28) 0%, rgba(11, 11, 20, 0) 60%), #0B0B14;
}

@media (min-width: 1024px) {
    .panel {
        padding: 3rem;
    }
}

/* Entrance: a simple vertical fade-up with stagger, distinct from the
   diagonal slide-in already used in the Differentiators section above this one. */
.fade-up {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.3s ease, transform 0.3s ease, translate 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    will-change: opacity, transform;
}

.fade-up.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition:
        opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0ms),
        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0ms),
        translate 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

/* Cards */
.card {
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid rgba(229, 232, 237, 0.1);
    background: rgba(11, 11, 20, 0.7);
    backdrop-filter: blur(6px);
}

/* Hover: Cyber Blue is reserved for interactive states */
.card.is-visible:hover {
    translate: 0 -4px;
    border-color: rgba(47, 182, 255, 0.4);
    box-shadow: 0 18px 40px -20px rgba(47, 182, 255, 0.25);
}

/* Node motif */
.node {
    display: flex;
    align-items: center;
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

/* Buttons */
.btn-primary {
    display: inline-block;
    padding: 0.85rem 1.75rem;
    border-radius: 0.75rem;
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    font-weight: 600;
    color: #FAFBFC;
    background: linear-gradient(135deg, #75138C, #4A15A4);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover,
.btn-primary:focus-visible {
    box-shadow: 0 0 0 2px rgba(47, 182, 255, 0.6), 0 12px 30px -12px rgba(47, 182, 255, 0.4);
    transform: translateY(-2px);
    outline: none;
}

.link-soft {
    font-weight: 500;
    color: rgba(229, 232, 237, 0.85);
    transition: color 0.3s ease;
}

.link-soft:hover,
.link-soft:focus-visible {
    color: #2FB6FF;
    outline: none;
}

@media (prefers-reduced-motion: reduce) {

    .fade-up {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
</style>