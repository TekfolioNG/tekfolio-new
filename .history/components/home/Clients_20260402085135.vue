<template>
    <section class="relative w-full bg-gradient-to-b from-white to-gray-200">

        <!-- Section Heading -->
        <div class="w-full py-12 md:py-16 text-center">
            <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                   <span class="text-gradient">Forward-Thinking Organizations</span>
                    <span class="text-gray-900"> Love Us</span>
                </h2>
            </div>
        </div>

        <!-- Main Testimonial Section with Gradient Background -->
        <div
            class="w-full relative bg-linear-to-r from-purple-900/95 to-blue-900/95 border-purple-700/30 pt-1 pb-8 md:pb-12">

            <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

                <!-- Light content box extending beyond gradient at top -->
                <div
                    class="bg-linear-to-b from-white to-gray-200 pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-6 md:px-10 lg:px-12 -mt-6 md:-mt-8">

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        <!-- Left Side - Client Info (3 columns on desktop) -->
                        <div class="lg:col-span-3 text-center lg:text-left">
                            <div class="space-y-2">
                                <h3 class="text-lg md:text-xl font-bold text-gray-900">
                                    {{ testimonials[currentTestimonial].name }}
                                </h3>
                                <p class="text-base md:text-lg font-semibold text-gradient">
                                    {{ testimonials[currentTestimonial].designation }}
                                </p>
                                <p class="text-sm md:text-base text-gray-900">
                                    {{ testimonials[currentTestimonial].company }}
                                </p>
                            </div>
                        </div>

                        <!-- Right Side - Testimonial Quote Only (9 columns on desktop) -->
                        <div class="lg:col-span-9">
                            <div class="relative">
                                <svg class="absolute -top-4 -left-2 w-10 h-10 text-purple-500 opacity-25"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p
                                    class="text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed pl-8 font-normal italic">
                                    {{ testimonials[currentTestimonial].quote }}
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- Navigation Controls -->
                    <div class="flex items-center justify-center gap-4 mt-12 md:mt-16">
                        <!-- Previous Button -->
                        <button @click="previousTestimonial" class="nav-button" aria-label="Previous testimonial">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <!-- Indicator Dots -->
                        <div class="flex gap-2">
                            <button v-for="(testimonial, index) in testimonials" :key="index"
                                @click="goToTestimonial(index)" class="indicator-dot"
                                :class="{ 'active': index === currentTestimonial }"
                                :aria-label="`Go to testimonial ${index + 1}`"></button>
                        </div>

                        <!-- Next Button -->
                        <button @click="nextTestimonial" class="nav-button" aria-label="Next testimonial">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <!-- Bottom Section: Client Logos Scrolling -->
                    <div class="w-full pt-12 md:pt-16 overflow-hidden border-t border-gray-300 mt-12 md:mt-16">
                        <div class="logo-scroll-container">
                            <div class="logo-scroll-track">
                                <!-- First set of logos -->
                                <a v-for="logo in clientLogos" :key="logo.name" :href="logo.url" target="_blank"
                                    rel="noopener noreferrer" class="logo-item">
                                    <img :src="logo.src" :alt="logo.name" class="client-logo" />
                                </a>
                                <!-- Duplicate set for seamless loop -->
                                <a v-for="logo in clientLogos" :key="`${logo.name}-dup`" :href="logo.url"
                                    target="_blank" rel="noopener noreferrer" class="logo-item">
                                    <img :src="logo.src" :alt="logo.name" class="client-logo" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';

// Import logos with correct path format
import akorite from '../assets/img/akorite.png';
import botintegrated from '../assets/img/bot-integrated.png';
import ecoplatinum from '../assets/img/ecoplatinum.png';
import literaforge from '../assets/img/lliteraforge.png';
import megafield from '../assets/img/megafield.png';
import petabiz from '../assets/img/petabiz.png';
import ppil from '../assets/img/ppil.png';
import sefa from '../assets/img/sefa.png';
import syntanium from '../assets/img/syntanium.png';
import veraverde from '../assets/img/veraverde.png';
import wilsonsamson from '../assets/img/wilsonsamson.png';
import xstrato from '../assets/img/xstrato.png';
import pebbles from '../assets/img/pebblessuites.png';

const currentTestimonial = ref(0);

const testimonials = [

    {
        name: "Emeka Uchela",
        designation: "CEO",
        company: "Syntanium Energy Ltd",
        quote: "Tekfolio is just an awesome company; they have handled over 4 projects for me, and they all turned out amazing 👏. I had a wonderful experience working with them. Kudos"
    },
    {
        name: "Wilson Samson",
        designation: "Managing Partner",
        company: "LiteraForge Ltd",
        quote: "My experience with Tekfolio Ltd has been remarkable. I greatly commend the team for their creativity, excellence, and customer-centric approach during conversations to ensure their clients feel heard, valued, and understood."
    },
    {
        name: "Regina Obi",
        designation: "Managing Director",
        company: "Sefa Energy Global Ltd",
        quote: "Exceptional and swift service delivery."
    },
    {
        name: "Gbolahan Shelika",
        designation: "Managing Partner",
        company: "Elevation Consulting Ltd",
        quote: "Tekfolio embodies everything a competent and professional digital partner should be. They took time to understand what we needed and made the whole process easy from start to finish. Communication was clear, they were patient with our requests, and the final result met our expectations. We would gladly recommend Tekfolio to any business looking to build a solid web or mobile app."
    },
    {
        name: "James Ladipo",
        designation: "CEO",
        company: "Petabiz Nigeria",
        quote: "Tekfolio felt more like a partner than a vendor. Communication was clear, delivery met expectations, and they actually hit their deadlines."
    }
];

const clientLogos = [
    { name: "EcoPlatinum", src: ecoplatinum, url: "https://ecoplatinumgroup.com/" },
    { name: "LiteraForge", src: literaforge, url: "https://www.literaforge.com/" },
    { name: "PetaBiz", src: petabiz, url: "https://petabiz.com" },
    { name: "PPIL", src: ppil, url: "https://ppil.com.ng/" },
    { name: "Syntanium", src: syntanium, url: "https://syntaniumenergy.com/" },
    { name: "Sefa", src: sefa, url: "https://sefaenergy.com/" },
    { name: "VeraVerde", src: veraverde, url: "https://veraverde.org/" },
    { name: "Megafield", src: megafield, url: "https://megafieldsolicitors.com/" },
    { name: "Pebblesgold", src: pebbles, url: "https://pebblesgoldsuites.com/" },
    { name: "Wilson & Samson", src: wilsonsamson, url: "https://wilsonsamson.com/" },
    { name: "BotIntegrated", src: botintegrated, url: "https://botintegratedservices.com/" },
    { name: "Xstrato", src: xstrato, url: "https://xstratoprime.com/" }, { name: "Akorite", src: akorite, url: "https://akoritetravels.com/" }
];

const nextTestimonial = () => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
};

const previousTestimonial = () => {
    currentTestimonial.value = currentTestimonial.value === 0
        ? testimonials.length - 1
        : currentTestimonial.value - 1;
};

const goToTestimonial = (index) => {
    currentTestimonial.value = index;
};
</script>

<style scoped>
/* Brand gradient */
.text-gradient {
    background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Navigation Buttons */
.nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.05);
    color: #6B7280;
    transition: all 0.3s ease;
    border: 1.5px solid #D1D5DB;
    cursor: pointer;
}

.nav-button:hover {

    color: #7C3AED;
    border-color: #7C3AED;
    background: transparent;
}

.nav-button:active {
    transform: scale(0.95);
}

/* Navigation Indicator Dots */
.indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #D1D5DB;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.indicator-dot:hover {
    background: #9CA3AF;
}

.indicator-dot.active {
    background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
    width: 24px;
    border-radius: 4px;
}

/* Logo scrolling animation */
.logo-scroll-container {
    overflow: hidden;
    position: relative;
    width: 100%;
}

.logo-scroll-track {
    display: flex;
    align-items: center;
    animation: scroll 30s linear infinite;
    width: fit-content;
}

.logo-item {
    flex-shrink: 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    cursor: pointer;
    text-decoration: none;
}

.client-logo {
    height: 50px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    transition: all 0.3s ease;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

.logo-item:hover .client-logo {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* Pause animation on hover */
.logo-scroll-container:hover .logo-scroll-track {
    animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .logo-item {
        padding: 0 0.875rem;
        min-width: 120px;
    }

    .client-logo {
        height: 40px;
        max-width: 130px;
    }

    .nav-button {
        width: 32px;
        height: 32px;
    }
}

@media (max-width: 640px) {
    .logo-item {
        padding: 0 0.75rem;
        min-width: 100px;
    }

    .client-logo {
        height: 35px;
        max-width: 110px;
    }

    .nav-button {
        width: 28px;
        height: 28px;
    }

    .nav-button svg {
        width: 14px;
        height: 14px;
    }

    .indicator-dot {
        width: 6px;
        height: 6px;
    }

    .indicator-dot.active {
        width: 18px;
    }
}
</style>