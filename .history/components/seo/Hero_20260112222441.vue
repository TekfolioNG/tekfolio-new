<template>
    <div class="bg-white">

        <!-- Hero Section - 2 Columns on Desktop -->

        <section class="relative w-full h-64 md:h-[400px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <!-- Skeleton/Placeholder Background -->
                <div v-if="!imageLoaded"
                    class="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
                </div>

                <picture>
                    <source :srcset="seoHero" type="image/avif" />
                    <source :srcset="seoHero.replace('.avif', '.webp')" type="image/webp" />
                    <img :src="seoHero" alt="CaseStudies - Tekfolio"
                        class="w-full h-full object-cover sharp-image transition-opacity duration-500"
                        :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }" @load="handleImageLoad"
                        loading="eager" fetchpriority="high" />
                </picture>
            </div>

            <!-- Subtle overlay for depth -->
            <!-- Enhanced overlay for better text contrast -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent">
            </div>

            <!-- Content Overlay - Bottom Left -->
            <div class="relative z-10 h-full flex items-end">
                <div class="container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                    <div class="max-w-[280px] md:max-w-xl">
                        <!-- Card with clip path for unique shape -->
                        <div class="text-shadow-strong">
                            <h1
                                class="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                                SEO & Performance
                            </h1>
                            <h2
                                class="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight italic drop-shadow-lg">
                                Reach. Conversion. Results
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref } from 'vue';
// Import images from assets directory
import seoHero from '~/assets/img/seohero.avif';

const imageLoaded = ref(false);

const handleImageLoad = () => {
    imageLoaded.value = true;
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

/* Custom responsive adjustments */
@media (max-width: 768px) {
    h1 {
        letter-spacing: 0.025em;
    }
}

/* Hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>