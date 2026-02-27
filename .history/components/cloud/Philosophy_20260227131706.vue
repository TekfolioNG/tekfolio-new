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
                                    Data-Backed Business Intelligence
                                </span>
                            </div>
                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight italic"
                                style="line-height: 1.2;">
                                Your Business Blueprint,<br class="hidden sm:block">
                                Visualized for Clarity & Edge
                            </h2>
                        </div>

                        <!-- Content with refined typography -->
                        <div class="space-y-6 text-gray-900">
                            <p class="text-base md:text-lg leading-relaxed font-medium text-gray-900">
                                Most organizations are sitting on a goldmine of untapped data...

                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                ...operational records, customer behaviour, sales patterns, financial transactions—that
                                could be transforming how they operate and compete. Instead, that data sits fragmented
                                across systems, misunderstood in spreadsheets, or simply ignored because making sense of
                                it feels too complex.


                            </p>
                            <p class="text-base md:text-lg leading-relaxed">
                                At Tekfolio, we change that. We design and implement data engineering pipelines,
                                analytics systems visually distilled into data flow diagrams, charts, and graphs for
                                business intelligence solutions. By transforming and interpreting applicable raw data
                                into
                                reliable insights his way, we help organizations see what’s happening, understand why
                                it’s
                                happening, and act with confidence.
                            </p>

                            <div class="pt-2 border-l-4 border-purple-700 pl-6 my-6">
                                <p class="text-base md:text-lg leading-relaxed font-medium text-gray-800">
                                    We start with your questions, not your data.
                                    <b><i class="text-purple-700">What</i></b> decisions are you trying to make better?
                                    <b><i class="text-purple-700">What</i></b> processes are costing you more than they
                                    should?
                                    <b><i class="text-purple-700">What</i></b> opportunities are you missing because you
                                    can't see the full picture?
                                </p>
                            </div>

                            <p class="text-base md:text-lg leading-relaxed">
                                <strong>What you get is</strong> accurate data. Clear insights. Faster, smarter
                                decisions.
                                No vanity dashboards. No guesswork. Just data systems that support real business
                                outcomes. <strong class="text-purple-700">Ready to make your business data work for
                                    you?</strong>
                                Let's talk.
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
                            <div class="text-base font-bold mb-1">Business Clarity</div>
                            <div class="text-sm text-white/95 leading-snug">
                                Decisions backed by data.
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
import webSolution3 from '~/assets/img/bizanalysis3.webp';

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