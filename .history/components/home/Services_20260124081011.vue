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
                    <source :srcset="cloudData" type="image/avif" />
                    <source :srcset="cloudData.replace('.avif', '.webp')" type="image/webp" />
                    <img :src="cloudData" alt="Cloud & Data Engineering - Tekfolio"
                        class="w-full h-full object-cover sharp-image transition-opacity duration-500"
                        :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }" @load="handleImageLoad"
                        loading="eager" fetchpriority="high" />
                </picture>
            </div>

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
                                Cloud & Data Engineering
                            </h1>
                            <h2
                                class="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight italic drop-shadow-lg">
                                Key Insights for Growth
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-12 md:py-16">
            <div class="container mx-auto px-6 md:px-12">

                <!-- Service 1 -->
                <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
                    <!-- Text Content -->
                    <div class="order-1">
                        <h3 class="text-2xl md:text-3xl font-bold mb-4">Web Development</h3>
                        <p class="text-gray-600 mb-6">
                            Custom web solutions tailored to your business needs. From responsive design to complex web
                            applications.
                        </p>
                    </div>

                    <!-- Lottie Animation -->
                    <div class="order-2 md:order-2 flex justify-center">
                        <div class="w-64 h-64 md:w-80 md:h-80">
                            <!-- Your Lottie animation component here -->
                            <div class="bg-gray-100 w-full h-full rounded-lg flex items-center justify-center">
                                <span class="text-gray-400">Lottie Animation</span>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons - Mobile Only (After Animation) -->
                    <div class="order-3 md:hidden flex gap-4">
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                        <button
                            class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </div>

                    <!-- CTA Buttons - Desktop (Below Text) -->
                    <div class="hidden md:flex gap-4 order-3 md:order-3">
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                        <button
                            class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                <!-- Service 2 (Reversed Layout) -->
                <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-12 md:mb-16">
                    <!-- Lottie Animation -->
                    <div class="order-2 md:order-1 flex justify-center">
                        <div class="w-64 h-64 md:w-80 md:h-80">
                            <!-- Your Lottie animation component here -->
                            <div class="bg-gray-100 w-full h-full rounded-lg flex items-center justify-center">
                                <span class="text-gray-400">Lottie Animation</span>
                            </div>
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="order-1 md:order-2">
                        <h3 class="text-2xl md:text-3xl font-bold mb-4">Cloud Solutions</h3>
                        <p class="text-gray-600 mb-6">
                            Scalable cloud infrastructure and migration services to keep your business running smoothly.
                        </p>
                    </div>

                    <!-- CTA Buttons - Mobile Only (After Animation) -->
                    <div class="order-3 md:hidden flex gap-4">
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                        <button
                            class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </div>

                    <!-- CTA Buttons - Desktop (Below Text) -->
                    <div class="hidden md:flex gap-4 order-3">
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                        <button
                            class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <!-- Text Content -->
                    <div class="order-1">
                        <h3 class="text-2xl md:text-3xl font-bold mb-4">Data Engineering</h3>
                        <p class="text-gray-600 mb-6">
                            Transform your data into actionable insights with our advanced analytics and engineering
                            solutions.
                        </p>
                    </div>

                    <!-- Lottie Animation -->
                    <div class="order-2 md:order-2 flex justify-center">
                        <div class="w-64 h-64 md:w-80 md:h-80">
                            <!-- Your Lottie animation component here -->
                            <div class="bg-gray-100 w-full h-full rounded-lg flex items-center justify-center">
                                <span class="text-gray-400">Lottie Animation</span>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons - Mobile Only (After Animation) -->
                    <div class="order-3 md:hidden flex gap-4">
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                        <button
                            class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </div>

                    <!-- CTA Buttons - Desktop (Below Text) -->
                    <div class="hidden md:flex gap-4 order-3 md:order-3">
                        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Learn More
                        </button>
                        <button
                            class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </section>

    </div>
</template>

<script setup>
import { ref } from 'vue';
// Import images from assets directory
import cloudData from '~/assets/img/creativehero.avif';

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