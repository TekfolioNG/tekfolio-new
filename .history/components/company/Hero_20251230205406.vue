<template>
    <div class="min-h-screen bg-white">

        <!-- Hero Section - 2 Columns on Desktop -->

        <section class="relative w-full h-96 md:h-[500px] overflow-hidden">
            <!-- Background Image - Full Width -->
            <div class="absolute inset-0">
                <img :src="aboutUsImage" alt="About Us - LiteraForge" class="w-full h-full object-cover sharp-image" />
            </div>

            <!-- Subtle overlay for depth -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50"></div>

            <!-- Content Overlay - Right Side -->
            <div class="relative z-10 h-full flex items-center justify-end">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="max-w-[180px] md:max-w-md ml-auto">
                        <!-- Card with clip path for unique shape -->
                        <div class="relative bg-gradient-to-br from-white/80 to-gray-50/75 backdrop-blur-sm p-4 md:p-8 shadow-2xl"
                            style="clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);">
                            <h1
                                class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2 md:mb-3">
                                About Us
                            </h1>
                            <p class="text-sm md:text-lg text-[#4D7EFF] font-semibold italic">
                                Clarity, Structure, and<br class="md:hidden"> Meaningful Impact
                            </p>
                            <div class="mt-4 md:mt-5 w-12 md:w-16 h-1 bg-gradient-to-r from-[#4D7EFF] to-blue-300">
                            </div>
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
                                    Our Story
                                </h2>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="space-y-6 text-gray-900">
                            <p class="text-lg md:text-xl leading-relaxed">
                                <strong class="text-gray-900">Litera-Forge exists to help individuals and organizations
                                    communicate with clarity, operate efficiently, and bring their ideas to
                                    life.</strong> We blend strategy, creativity, and execution to transform ideas into
                                work that inspires, informs, and leads.
                            </p>

                            <p class="text-lg leading-relaxed">
                                <strong class="text-gray-900">Litera-Forge was built on a simple belief: every idea
                                    deserves structure.</strong> Many leaders, founders, and authors know what they want
                                to say but struggle to shape it into something clear and compelling. We stepped in to
                                bridge that gap.
                            </p>

                            <p class="text-lg leading-relaxed">
                                Over the years, we've supported clients across multiple industries through advisory,
                                productivity training, ghostwriting, and publishing—helping them articulate their voice,
                                refine their vision, and execute with confidence.
                            </p>
                        </div>

                        <!-- Accent Element -->
                        <div class="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                            <div class="w-12 h-0.5 bg-[#4D7EFF]"></div>
                            <div class="text-sm text-[#4D7EFF] font-semibold uppercase tracking-wide">Building Stories
                                That Last</div>
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
import aboutUsImage from '~/assets/img/about-us-literaforge.jpeg';
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