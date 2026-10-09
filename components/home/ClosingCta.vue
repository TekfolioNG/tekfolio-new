<!-- components/home/ClosingCta.vue -->
<template>
    <section ref="sectionRef" class="relative bg-[#0B0B14] py-14 lg:py-20">
        <div class="mx-auto max-w-3xl px-6 sm:px-10">
            <div
                :class="['cta-card relative overflow-hidden rounded-2xl border border-white/10 px-8 py-10 text-center sm:px-14 sm:py-12 lg:py-14', { 'is-visible': visible }]">
                <!-- Brand-gradient hairline along the top edge, echoing the Navbar and Footer -->
                <div aria-hidden="true" class="hairline" />

                <div class="relative z-10">
                    <h2 class="display reveal text-3xl font-bold leading-tight text-[#FAFBFC] sm:text-4xl"
                        style="--d: 150ms">
                        Tell us what you're building.
                    </h2>

                    <p class="reveal mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#E5E8ED]/80 sm:text-lg"
                        style="--d: 300ms">
                        Share where you want to get to. We'll map the architecture, the timeline and the cost
                        before a single server is deployed.
                    </p>

                    <div class="reveal mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8"
                        style="--d: 450ms">
                        <NuxtLink :to="CTA_HREF"
                            class="cta-btn group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md border border-white/10 bg-gradient-to-r from-[#4A15A4] to-[#75138C] px-7 py-4 text-base font-semibold text-[#FAFBFC] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[0.97] hover:brightness-110 hover:shadow-2xl hover:shadow-[#75138C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] active:scale-95 sm:w-auto">
                            <span class="relative z-10">Start Your Build</span>
                            <span class="shine" aria-hidden="true" />
                        </NuxtLink>

                        <NuxtLink to="/contact"
                            class="text-sm font-medium text-[#E5E8ED]/75 underline decoration-white/25 underline-offset-4 transition-colors duration-200 hover:text-[#FAFBFC] hover:decoration-[#2FB6FF] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]">
                            Or just ask us a question
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Match this to the hero button's destination.
const CTA_HREF = '/contact'

const sectionRef = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') {
        visible.value = true
        return
    }
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                visible.value = true
                observer.disconnect() // fade in once, no looping — this is a closing section, not a scroll-through one
            }
        },
        { threshold: 0.25 }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

/* Ink surface with a soft Indigo/Magenta glow from the top — matches every
   other card on the site (TrainingTeaser's panel, AboutCredentials, etc.)
   rather than a full saturated gradient fill. */
.cta-card {
    background:
        radial-gradient(120% 160% at 50% -10%, rgba(117, 19, 140, 0.32) 0%, rgba(74, 21, 164, 0.16) 42%, rgba(11, 11, 20, 0) 72%),
        #0B0B14;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.cta-card.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.hairline {
    position: absolute;
    inset: 0 0 auto 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #4A15A4 25%, #75138C 50%, #4A15A4 75%, transparent 100%);
    opacity: 0.8;
}

/* Inner content fades in after the card, one beat at a time */
.reveal {
    opacity: 0;
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--d, 0ms);
}

.cta-card.is-visible .reveal {
    opacity: 1;
}

/* Shine sweep — identical mechanics to the Hero and Navbar's primary CTA,
   so this button reads as the same action reappearing, not a new one. */
.shine {
    position: absolute;
    inset: 0 auto 0 -60%;
    width: 45%;
    pointer-events: none;
    background: linear-gradient(100deg, transparent, rgb(255 255 255 / 0.55), transparent);
    transform: skewX(-18deg);
    transition: left 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.cta-btn:hover .shine,
.cta-btn:focus-visible .shine {
    left: 115%;
}

@media (prefers-reduced-motion: reduce) {

    .cta-card,
    .reveal,
    .shine,
    .cta-btn {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
</style>