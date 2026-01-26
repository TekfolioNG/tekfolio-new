<template>

    <!-- Hero Section - 2 Columns on Desktop -->

    <section class="relative w-full h-64 md:h-[400px] overflow-hidden">
        <!-- Background Image - Full Width -->
        <div class="absolute inset-0">
            <!-- Skeleton/Placeholder Background -->
            <div v-if="!imageLoaded"
                class="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            </div>

            <img :src="contactHero" alt="ContactHero - Tekfolio"
                class="w-full h-full object-cover sharp-image transition-opacity duration-500"
                :class="{ 'opacity-0': !heroImageLoaded, 'opacity-100': heroImageLoaded }" @load="handleHeroImageLoad"
                loading="eager" fetchpriority="high" />
        </div>
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent">
        </div>

        <!-- Content Overlay - Bottom Left -->
        <div class="relative z-10 h-full flex items-end">
            <div class="container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                <div class="max-w-[280px] md:max-w-xl">
                    <!-- Card with clip path for unique shape -->
                    <div class="text-shadow-strong">
                        <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                            Let's Talk Solutions
                        </h1>
                        <h2
                            class="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight italic drop-shadow-lg">
                            Start the Right Conversation
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';
// Import images from assets directory
import contactHero from '~/assets/img/contacthero.avif';

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