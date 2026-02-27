<template>
    <section class="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02] pointer-events-none"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <!-- Text Content - Left Column -->
                    <div class="order-1 lg:order-1">
                        <!-- Section Title with accent -->
                        <div class="mb-8">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="h-px w-12 bg-linear-to-r from-purple-700 to-blue-600"></div>
                                <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">
                                    From Search Page 5 to Page 1
                                </span>
                            </div>
                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight italic"
                                style="line-height: 1.2;">
                                Effective SEO Strategy<br class="hidden sm:block">
                                for Business Visibility
                            </h2>
                        </div>

                        <!-- Content with refined typography -->
                        <div class="space-y-6 text-gray-900">
                            <p class="text-base md:text-lg leading-relaxed font-medium text-gray-900">
                                Fact is you can’t fix your business or product visibility issues without understanding
                                what’s holding it back.


                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                ...And that's the clear truth we begin with when you engage us as your digital marketing
                                agency in Nigeria.

                            </p>
                            <p class="text-base md:text-lg leading-relaxed">
                                Before we recommend a single keyword or publish any content, we conduct a full
                                diagnostic analysis of your digital footprint. This includes your website structure,
                                technical health, current ranking signals, content quality, keyword positioning,
                                competitive landscape, and even how your social presence reinforces—or weakens—your
                                search authority.


                            </p>

                            <div class="pt-2 border-l-4 border-purple-700 pl-6 my-6">
                                <p class="text-base md:text-lg leading-relaxed font-medium text-gray-800">
                                    We identify exactly
                                    <b><i class="text-purple-700">why</i></b> your brand is stuck on page 3, 4, or 5 of
                                    Google Search Engine Results page (SERPs) for value keywords, and
                                    <b><i class="text-purple-700">what's</i></b> preventing Google, Bing and other major
                                    search engines (and your target customers) from seeing your brand and its USP.
                                </p>
                            </div>

                            <p class="text-base md:text-lg leading-relaxed">
                                We focus on earning your business or product <strong>visibility with qualified leads</strong>, so the clicks you receive are from people who are actually ready
                                to engage or buy.
                            </p>
                            <p class="text-base md:text-lg leading-relaxed pt-2">
                                <strong class="text-purple-700">Ready to move from SERPs page 5 to page 1 with the right
                                    SEO tools and strategy?</strong>
                                Let's map out and implement a proven plan for you.

                            </p>
                        </div>
                    </div>

                    <!-- Image - Right Column -->
                    <div class="relative order-2 lg:order-2 mt:0 md:mt-12">
                        <!-- Single Vertical Image -->
                        <div
                            class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                            <!-- Skeleton/Placeholder -->
                            <div v-if="!imageLoaded"
                                class="absolute inset-0 bg-linear-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse aspect-3/4">
                            </div>

                            <img :src="webSolution3"
                                alt="Custom web application interface showcasing performance and usability"
                                class="w-full h-full aspect-3/4 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
                                @load="handleImageLoad" @error="handleImageLoad" loading="eager" />

                            <!-- Subtle gradient overlay -->
                            <div
                                class="absolute inset-0 bg-linear-to-t from-purple-900/10 to-transparent pointer-events-none">
                            </div>
                        </div>

                        <!-- Floating accent card -->
                        <div
                            class="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-linear-to-br from-purple-700 to-blue-600 text-white p-4 sm:p-6 rounded-xl shadow-2xl max-w-50 sm:max-w-60 z-10 animate-float">
                            <div class="text-base font-bold mb-1">Native Performance</div>
                            <div class="text-sm text-white/95 leading-snug">
                                Cross-platform efficiency.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import webSolution3 from '~/assets/img/seoclick.webp';

const imageLoaded = ref(false);

const handleImageLoad = () => {
    imageLoaded.value = true;
};

// Fallback: if image is already cached, it might not trigger @load
onMounted(() => {
    setTimeout(() => {
        imageLoaded.value = true;
    }, 100);
});
</script>

<style scoped>
/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Sharp image rendering */
img {
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

/* Ensure gradient classes work */
.bg-linear-to-r,
.bg-linear-to-br,
.bg-linear-to-t {
    background-image: linear-gradient(var(--tw-gradient-stops));
}

/* Custom responsive adjustments */
@media (max-width: 768px) {
    h2 {
        letter-spacing: 0.025em;
    }
}

/* Improve text readability on all devices */
@media (max-width: 640px) {
    .space-y-6>*+* {
        margin-top: 1.25rem;
    }
}
</style>