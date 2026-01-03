<template>
    <!-- How We Work Section - 2 Columns on Desktop -->
    <section class="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-24 mt-4">
        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Image - Left Column on Desktop -->
                <div class="order-2 lg:order-1">
                    <div class="relative group">
                        <!-- Image Container -->
                        <div
                            class="aspect-[3/4] h-[400px] lg:h-[650px] max-w-md mx-auto lg:max-w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                            <img :src="stepsImage" alt="How We Work - LiteraForge"
                                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        <!-- Decorative Elements -->
                        <div
                            class="absolute -top-4 -left-4 w-8 h-8 bg-[#4D7EFF] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        </div>
                        <div
                            class="absolute -bottom-4 -right-4 w-6 h-6 bg-[#012430] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        </div>

                        <!-- Image Label -->
                        <div
                            class="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                            <p class="text-sm font-semibold text-gray-900">Our Process</p>
                        </div>
                    </div>
                </div>

                <!-- Text Content - Right Column on Desktop -->
                <div class="order-1 lg:order-2 text-center lg:text-left">
                    <!-- Section Title -->
                    <div class="mb-8">
                        <div class="inline-flex items-center gap-3 mb-4 mx-auto lg:mx-0">
                            <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                                How We Work
                            </h2>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="space-y-6 text-gray-700">
                        <p class="text-lg md:text-xl leading-relaxed">
                            <strong class="text-gray-900">We listen deeply, ask the right questions, and build clarity
                                from the inside out.</strong> Our process is collaborative, intentional, and designed to
                            remove friction.
                        </p>

                        <p class="text-lg leading-relaxed">
                            <strong class="text-gray-900">Our approach is simple: understand the vision → refine the
                                message → enable execution</strong>
                        </p>

                        <p class="text-lg leading-relaxed">
                            We begin by understanding your goals and the outcomes you want to achieve. From there, we
                            refine your ideas into a clear, structured roadmap—whether it's a manuscript, a strategy, a
                            system, or a communication framework. Finally, we support execution, ensuring your work is
                            not only well-crafted but also positioned for impact.
                        </p>

                        <p class="text-lg leading-relaxed">
                            Whether you're writing a book, restructuring a team, or shaping a new content strategy, we
                            make your vision real.
                        </p>
                    </div>

                    <!-- Accent Element -->
                    <div class="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                        <div class="w-12 h-0.5 bg-[#4D7EFF]"></div>
                        <div class="text-sm text-[#4D7EFF] font-semibold uppercase tracking-wide">
                            Vision to Reality
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Import image from assets directory
import stepsImage from '~/assets/img/steps-literaforge.avif';
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Hover effects */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>