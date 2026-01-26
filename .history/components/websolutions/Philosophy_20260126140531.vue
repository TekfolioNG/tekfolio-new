<template>
    <section class="py-32 lg:py-36 px-8 sm:px-12 lg:px-16 bg-white">
        <div class="max-w-7xl mx-auto">

            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    <!-- Text Content - Left Column -->
                    <div>
                        <!-- Section Title with accent -->
                        <div class="mb-6">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                                <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">From
                                    Prototype Design to Web App</span>
                            </div>
                            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight italic"
                                style="line-height: 1.2;">
                                Custom‑Built Experiences
                                <br>for Performance & Usability
                            </h2>
                        </div>

                        <!-- Content with refined typography -->
                        <div class="space-y-5 text-gray-900">
                            <p class="text-lg md:text-xl leading-relaxed font-medium text-gray-900">
                                Tekfolio builds reliable, scalable digital solutions for modern organizations.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                We work at the intersection of clean engineering, thoughtful design, and practical
                                problem-solving. We're Nigeria-based, but our standards, thinking, and delivery are
                                global.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                Every product we build is designed to last, adapt, and support real business growth—not
                                just look.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                From digital platforms to cloud systems and data-driven tools, our goal is to help
                                clients and their customers work, live, and think better.
                            </p>

                            <div class="pt-4 border-l-4 border-purple-700 pl-6 my-6">
                                <p class="text-base md:text-lg leading-relaxed font-medium text-gray-800">
                                    That's why we build with intention from day one. We ask the right questions early.
                                    We design for people, not just screens. We engineer for reliability, not shortcuts.
                                </p>
                            </div>

                            <p class="text-base md:text-lg leading-relaxed">
                                We approach every engagement as a long-term partnership, not a one-off transaction. We
                                work with forward-thinking businesses, institutions, and organizations that value
                                clarity, long-term thinking, and engineering discipline over shortcuts and hype.
                            </p>
                        </div>
                    </div>

                    <!-- Image - Right Column -->
                    <div class="relative">
                        <!-- Image container with hover effect -->
                        <div
                            class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                            <!-- Skeleton/Placeholder for section image -->
                            <div v-if="!sectionImageLoaded"
                                class="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse aspect-[3/4]">
                            </div>

                            <picture>
                                <source :srcset="whoWeAre" type="image/avif" />
                                <source :srcset="whoWeAre.replace('.avif', '.webp')" type="image/webp" />
                                <img :src="whoWeAre" alt="Tekfolio Team"
                                    class="w-full h-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                                    :class="{ 'opacity-0': !sectionImageLoaded, 'opacity-100': sectionImageLoaded }"
                                    @load="handleSectionImageLoad" />
                            </picture>

                            <!-- Subtle gradient overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
                        </div>

                        <!-- Floating accent card - visible on all screens -->
                        <div
                            class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-purple-700 to-blue-600 text-white p-4 md:p-6 rounded-xl shadow-2xl max-w-[180px] md:max-w-[220px] z-10 animate-float">
                            <div class="text-sm md:text-base font-bold mb-1">We Build Systems</div>
                            <div class="text-xs md:text-sm text-white/95 leading-snug">...you can rely on long
                                after launch.</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';
import whoWeAre from '~/assets/img/whoweare-tekfolio.avif';

const heroImageLoaded = ref(false);
const sectionImageLoaded = ref(false);

const handleHeroImageLoad = () => {
    heroImageLoaded.value = true;
};

const handleSectionImageLoad = () => {
    sectionImageLoaded.value = true;
};
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Sharp image rendering */
.sharp-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Floating animation for accent card */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Image zoom on hover */
.group:hover img {
    transform: scale(1.05);
}

/* Custom responsive adjustments */
@media (max-width: 768px) {
    h1 {
        letter-spacing: 0.025em;
    }
}
</style>