<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section -->
        <section class="relative w-full h-64 md:h-[400px] overflow-hidden">
            <!-- Background Image - Full Width with Nuxt Image -->
            <div class="absolute inset-0">
                <NuxtImg :src="companyHero" alt="CompayHero - Tekfolio" class="w-full h-full object-cover sharp-image"
                    loading="eager" placeholder format="avif,webp" quality="80" />
            </div>

            <!-- Enhanced overlay for better text contrast -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent">
            </div>

            <!-- Content Overlay - Bottom Left -->
            <div class="relative z-10 h-full flex items-end">
                <div class="container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                    <div class="max-w-[280px] md:max-w-xl">
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

        <!-- Who We Are Section -->
        <section class="w-full bg-white py-28 lg:py-36 relative overflow-hidden">

            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <!-- Text Content - Left Column -->
                    <div>
                        <!-- Section Title with accent -->
                        <div class="mb-8">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                                <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">About
                                    Tekfolio</span>
                            </div>
                            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Who We Are
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
                                just look good at launch. As a technology partner, we focus on systems that function
                                smoothly for the target user.
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
                            <NuxtImg :src="whoWeAre" alt="Tekfolio Team"
                                class="w-full h-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                loading="lazy" placeholder format="avif,webp" quality="80" />

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
        </section>

    </div>
</template>

<script setup>
import companyHero from '~/assets/img/companyhero.avif';
import whoWeAre from '~/assets/img/whoweare-tekfolio.avif';
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