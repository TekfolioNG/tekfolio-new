<!-- components/home/ClientLogos.vue -->
<template>
    <section ref="sectionRef" class="relative bg-[#0B0B14] pb-16 pt-4 lg:pb-20">
        <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
            <div class="border-t border-[#E5E8ED]/10" />
        </div>

        <div :class="['fade-in', { 'is-visible': visible }]">
            <h2 class="eyebrow mt-10 text-center text-xs text-[#E5E8ED]/55">
                Organisations we've worked with
            </h2>

            <div class="logo-mask mt-10">
                <div class="logo-track">
                    <ul class="logo-set" aria-label="Organisations we've worked with">
                        <li v-for="logo in logos" :key="logo.name" class="logo-item">
                            <img :src="logo.src" :alt="logo.name" :style="{ '--s': logo.scale ?? 1 }" loading="lazy"
                                decoding="async" class="logo-img" />
                        </li>
                    </ul>
                    <!-- Duplicate set makes the loop seamless; hidden from screen readers -->
                    <ul class="logo-set logo-set--clone" aria-hidden="true">
                        <li v-for="logo in logos" :key="`clone-${logo.name}`" class="logo-item">
                            <img :src="logo.src" alt="" :style="{ '--s': logo.scale ?? 1 }" loading="lazy"
                                decoding="async" class="logo-img" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import akorite from '~/assets/img/logos/akorite.png'
import botintegrated from '~/assets/img/logos/botintegrated.png'
import ecoplatinum from '~/assets/img/logos/ecoplatinum.png'
import eventgrande from '~/assets/img/logos/eventgrande.png'
import literaforge from '~/assets/img/logos/literaforge.png'
import megafield from '~/assets/img/logos/megafield.png'
import pebbles from '~/assets/img/logos/pebbles.png'
import petabiz from '~/assets/img/logos/petabiz.png'
import ppil from '~/assets/img/logos/ppil.png'
import sefa from '~/assets/img/logos/sefa.png'
import syntanium from '~/assets/img/logos/syntanium.png'
import wilsonsamson from '~/assets/img/logos/wilsonsamson.png'
import xstrato from '~/assets/img/logos/xstrato.png'

// scale is a per-logo size multiplier (1 = base size). It evens out logos whose
// files carry different amounts of empty padding. Tune each number by eye.
const logos = [
    { name: 'Megafield', src: megafield, scale: 1.6 },
    { name: 'Literaforge', src: literaforge, scale: 1.2 },
    { name: 'Pebbles', src: pebbles, scale: 1.2 },
    { name: 'EcoPlatinum', src: ecoplatinum, scale: 1.2 },
    { name: 'PPIL', src: ppil, scale: 1.4 },
    { name: 'Syntanium', src: syntanium, scale: 1.2 },
    { name: 'SEFA', src: sefa, scale: 1.2 },
    { name: 'Akorite', src: akorite, scale: 1.2 },
    { name: 'Xstrato Prime', src: xstrato, scale: 1.4 },
    { name: 'BotIntegrated', src: botintegrated, scale: 1.2 },
    { name: 'Wilson Samson', src: wilsonsamson, scale: 1.4 },
    { name: 'EventGrande', src: eventgrande, scale: 1.4 },
    { name: 'PetaBiz', src: petabiz, scale: 1 }
]

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
                observer.disconnect()
            }
        },
        { threshold: 0.15 }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.eyebrow {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}

.fade-in {
    opacity: 0;
    transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-in.is-visible {
    opacity: 1;
}

.logo-mask {
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

/* Each set has identical width (padding on items, not gaps between them),
   so shifting the track by exactly -50% loops with no visible jump. */
.logo-track {
    display: flex;
    width: max-content;
    animation: logo-scroll 50s linear infinite;
}

.logo-mask:hover .logo-track {
    animation-play-state: paused;
}

.logo-set {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}

.logo-item {
    padding: 0 2rem;
}

@media (min-width: 640px) {
    .logo-item {
        padding: 0 2.5rem;
    }
}

/* Every logo becomes one uniform soft white so mixed colours read as a single set.
   Needs transparent backgrounds: an opaque PNG background turns into a white block.
   Height and width cap both scale with the per-logo --s value. */
.logo-img {
    display: block;
    height: calc(2.25rem * var(--s, 1));
    width: auto;
    max-width: calc(9rem * var(--s, 1));
    object-fit: contain;
    filter: brightness(0) invert(1);
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

@media (min-width: 640px) {
    .logo-img {
        height: calc(2.75rem * var(--s, 1));
    }
}

.logo-img:hover {
    opacity: 1;
}

@keyframes logo-scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

/* Reduced motion: static, centred, wrapped; the clone set and edge fade are dropped */
@media (prefers-reduced-motion: reduce) {
    .fade-in {
        opacity: 1;
        transition: none;
    }

    .logo-mask {
        -webkit-mask-image: none;
        mask-image: none;
    }

    .logo-track {
        animation: none;
        width: 100%;
        justify-content: center;
    }

    .logo-set {
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 1.5rem;
    }

    .logo-set--clone {
        display: none;
    }

    .logo-img {
        transition: none;
    }
}
</style>