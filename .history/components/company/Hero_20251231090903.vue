<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section - 2 Columns on Desktop -->

        <section class="relative w-full h-64 md:h-[400px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="companyHero" alt="About Us - Tekfolio" class="w-full h-full object-cover sharp-image" />
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
                                Your Brand Vision
                            </h1>
                            <h2
                                class="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight italic drop-shadow-lg">
                                Powered By Technology
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Our Story Section - 2 Columns on Desktop -->
        <section class="w-full bg-gradient-to-br from-white via-blue-50/30 to-white py-16 lg:py-24 mt-8">
            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Text Content - Left Column -->
                    <div class="order-1 lg:order-1 text-center lg:text-left">
                        <!-- Section Title -->
                        <div class="mb-8">
                            <div class="inline-flex items-center gap-3 mb-4 mx-auto lg:mx-0">
                                <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                                    Who We Are
                                </h2>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="space-y-6 text-gray-900">
                            <p class="text-lg md:text-xl leading-relaxed">
                                <strong class="text-gray-900">Tekfolio builds reliable, scalable digital solutions for
                                    modern organizations. </strong> We work at the intersection of clean engineering,
                                thoughtful design, and practical problem-solving.

                            </p>

                            <p class="text-lg leading-relaxed">
                                <strong class="text-gray-900">We’re Nigeria-based, but our standards, thinking, and
                                    delivery are global.</strong> Every product we build is designed to last, adapt, and
                                support real business growth; not just look good at launch.

                            </p>

                            <p class="text-lg leading-relaxed">
                                As a technology partner, we focus on systems that function smoothly for the target user.
                                From digital platforms to cloud systems and data-driven tools, our goal is to help
                                clients and their customers work, live, and think better.
                            </p>
                            <p class="text-lg leading-relaxed">
                                That’s why we build with intention from day one. We ask the right questions early. We
                                design for people, not just screens. We engineer for reliability, not shortcuts. And we
                                approach every engagement as a long-term partnership, not a one-off transaction.

                            </p>
                            <p class="text-lg leading-relaxed">
                                We work with forward-thinking businesses, institutions, and organizations that value
                                clarity, long-term thinking, and engineering discipline over shortcuts and hype.

                            </p>
                        </div>

                        <!-- Accent Element -->
                        <div class="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                            <div class="w-12 h-0.5 bg-[#4D7EFF]"></div>
                            <div class="text-sm text-[#4D7EFF] font-semibold uppercase tracking-wide">We’re here to help
                                you build systems you can rely on — long after launch.
                            </div>
                        </div>
                    </div>

                    <!-- Image - Right Column -->
                    <div class="order-2 lg:order-2">
                        <div class="relative group">
                            <!-- Vertical Image Container -->
                            <div
                                class="aspect-[3/4] h-[400px] lg:h-[650px] max-w-md mx-auto lg:max-w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                                <img :src="ourStoryImage" alt="Our Story - LiteraForge"
                                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            <!-- Decorative Elements -->
                            <div
                                class="absolute -top-4 -right-4 w-8 h-8 bg-[#4D7EFF] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            </div>
                            <div
                                class="absolute -bottom-4 -left-4 w-6 h-6 bg-[#012430] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            </div>

                            <!-- Image Label -->
                            <div
                                class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                                <p class="text-sm font-semibold text-gray-900">Crafting Your Narrative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import images from assets directory
import companyHero from '~/assets/img/companyhero.jpeg';
import ourStoryImage from '~/assets/img/our-story-literaforge.jpg';
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