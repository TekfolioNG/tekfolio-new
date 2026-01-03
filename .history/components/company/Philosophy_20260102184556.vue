<template>
    <div class="min-h-screen bg-white">
        <!-- Our Philosophy Section -->
        <section class="w-full bg-white py-8 lg:py-10 relative overflow-hidden">

            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                <!-- Top Section - Centered on Desktop -->
                <div class="text-center lg:text-center mb-12 lg:mb-16">
                    <div class="mb-8">
                        <div class="flex items-center justify-center gap-3 mb-2">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                            <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                                Philosophy</span>
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                        </div>
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 italic leading-tight">
                            Smart. Simple. Secure
                        </h2>
                    </div>

                    <div class="space-y-5 text-gray-900 max-w-3xl mx-auto">
                        <p class="text-lg md:text-xl leading-relaxed font-medium text-gray-900">
                            We believe good technology should be functional, clear, and built to last. Not flashy for
                            attention. Not complex to impress. Not rushed to meet arbitrary deadlines.
                        </p>
                    </div>
                </div>

                <!-- Bottom Grid - Image and Principles -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <!-- Image - Left Column (Desktop) / Top (Mobile) -->
                    <div class="relative order-2 lg:order-1">
                        <!-- Image container with hover effect -->
                        <div
                            class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white p-8 md:p-12">
                            <img :src="philosophyIllustration" alt="Tekfolio Philosophy Illustration"
                                class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>

                        <!-- Floating accent card -->
                        <div
                            class="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 md:p-6 rounded-xl shadow-2xl max-w-[180px] md:max-w-[220px] z-10 animate-float">
                            <div class="text-sm md:text-base font-bold mb-1">Built to Last</div>
                            <div class="text-xs md:text-sm text-white/95 leading-snug">Quality over speed. Always.</div>
                        </div>
                    </div>

                    <!-- Principles - Right Column (Desktop) / Bottom (Mobile) -->
                    <div class="order-1 lg:order-2">
                        <div class="space-y-5 text-gray-900">
                            <p class="text-base md:text-lg leading-relaxed font-medium italic text-gray-800 mb-6">
                                Everything we build is guided by these core principles.
                            </p>

                            <!-- Principles -->
                            <div class="space-y-6">
                                <!-- Principle 1 -->
                                <div class="border-l-4 border-blue-600 pl-6">
                                    <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                        Function before noise.
                                    </h3>
                                    <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                        Software should solve real problems first. If it doesn't improve how people work
                                        or make decisions, it doesn't matter how impressive it looks.
                                    </p>
                                </div>

                                <!-- Principle 2 -->
                                <div class="border-l-4 border-purple-600 pl-6">
                                    <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                        Clarity over complexity.
                                    </h3>
                                    <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                        For users and decision-makers alike, systems should be easy to understand, use,
                                        and maintain. Simplicity isn't a lack of depth; it's a sign of good thinking.
                                    </p>
                                </div>

                                <!-- Principle 3 -->
                                <div class="border-l-4 border-indigo-600 pl-6">
                                    <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                        Partnership over projects.
                                    </h3>
                                    <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                        We focus on long-term success, not one-off delivery. The best outcomes come from
                                        collaboration, trust, and systems designed to grow with you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import philosophyIllustration from '~/assets/img/philosophy-tekfolio.svg';
</script>

<style scoped>
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
</style>