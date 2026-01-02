<template>
    <div class="min-h-screen bg-white">
        <!-- Hero Section - 2 Columns on Desktop -->
        <section class="relative w-full h-64 md:h-[400px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <picture>
                    <source :srcset="companyHero" type="image/avif" />
                    <source :srcset="companyHero.replace('.avif', '.webp')" type="image/webp" />
                    <img :src="companyHero" alt="CompayHero - Tekfolio"
                        class="w-full h-full object-cover sharp-image" />
                </picture>
            </div>

            <!-- Subtle overlay for depth -->
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

        <!-- Who-We-Are Section - Tech Professional Design -->
        <section class="w-full bg-white py-20 lg:py-28">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header with Tech Accent -->
                <div class="mb-16 lg:mb-20 text-center">
                    <div class="inline-flex items-center gap-3 mb-4">
                        <div class="flex items-center gap-2">
                            <div
                                class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse">
                            </div>
                            <div class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"
                                style="animation-delay: 0.2s"></div>
                            <div class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"
                                style="animation-delay: 0.4s"></div>
                        </div>
                        <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">Technology
                            Partners</span>
                    </div>
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Who We <span class="relative">
                            <span
                                class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Are</span>
                            <span
                                class="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        </span>
                    </h2>
                    <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Building enterprise-grade digital solutions with precision engineering and strategic vision
                    </p>
                </div>

                <!-- Main Content - Modern Grid Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    <!-- Left Column - Mission & Values -->
                    <div class="lg:col-span-2 space-y-8">
                        <!-- Mission Statement -->
                        <div
                            class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start gap-4 mb-6">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Engineering Excellence, Strategic
                                        Execution</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We architect digital systems that combine robust engineering with thoughtful
                                        design. Our approach bridges technical precision with practical business
                                        outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Core Principles -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                                class="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">Reliability First</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Systems engineered for stability, scalability, and long-term performance. We
                                    prioritize maintainable code and resilient architecture.
                                </p>
                            </div>

                            <div
                                class="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">Global Standards</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Nigeria-based, globally oriented. Our practices align with international best
                                    practices while respecting local market dynamics.
                                </p>
                            </div>

                            <div
                                class="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">Performance Driven</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Optimized systems delivering exceptional speed and efficiency. Every component is
                                    measured and refined for optimal performance.
                                </p>
                            </div>

                            <div
                                class="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">Security Focused</h4>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Enterprise-grade security protocols integrated throughout development. Protecting
                                    data and ensuring compliance is foundational.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Image & Key Differentiators -->
                    <div class="space-y-8">
                        <!-- Professional Image -->
                        <div class="relative group">
                            <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                                <picture>
                                    <source :srcset="whoWeAre" type="image/avif" />
                                    <source :srcset="whoWeAre.replace('.avif', '.webp')" type="image/webp" />
                                    <img :src="whoWeAre" alt="Tekfolio Team - Professional Technology Partners"
                                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </picture>
                            </div>
                            <!-- Tech-inspired accent -->
                            <div
                                class="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                            </div>
                            <div
                                class="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-70">
                            </div>
                        </div>

                        <!-- Key Differentiators -->
                        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                            <h4 class="text-xl font-bold mb-6 flex items-center gap-3">
                                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Differentiators
                            </h4>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span class="text-sm text-gray-200">Strategic technology consulting alongside
                                        development</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span class="text-sm text-gray-200">Enterprise architecture & system design
                                        expertise</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span class="text-sm text-gray-200">Long-term partnership model over transactional
                                        engagements</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span class="text-sm text-gray-200">Deep focus on data security & regulatory
                                        compliance</span>
                                </li>
                            </ul>
                        </div>

                        <!-- CTA -->
                        <div class="text-center lg:text-left">
                            <button
                                class="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                Explore Our Process
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Import images from assets directory
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

/* Custom responsive adjustments */
@media (max-width: 768px) {
    h1 {
        letter-spacing: 0.025em;
    }
}

/* Subtle animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.floating {
    animation: float 3s ease-in-out infinite;
}

/* Enhanced shadow effects */
.shadow-xl {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>