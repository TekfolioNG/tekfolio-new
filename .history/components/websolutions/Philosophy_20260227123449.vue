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
                                    From Prototype to Web Development
                                </span>
                            </div>
                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight italic"
                                style="line-height: 1.2;">
                                Websites Designed <br class="hidden sm:block">
                                for Performance & Usability
                            </h2>
                        </div>

                        <!-- Content with refined typography -->
                        <div class="space-y-6 text-gray-900">
                            <p class="text-base md:text-lg leading-relaxed font-medium text-gray-900">
                                Your business doesn't run on generic playbooks—and your software shouldn't either.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                At Tekfolio, we design and develop custom web applications built around your exact
                                workflows, users, and business goals. From an internal tool that reclaims hours
                                of your team's time each week to a customer-facing platform that directly drives
                                revenue, we engineer web apps that become mission-critical to your operations.
                            </p>

                            <div class="pt-2 border-l-4 border-purple-700 pl-6 my-6">
                                <p class="text-base md:text-lg leading-relaxed font-medium text-gray-800">
                                    We start with discovery and architecture planning—understanding not just
                                    <b><i class="text-purple-700">what</i></b> you need, but
                                    <b><i class="text-purple-700">why</i></b>.
                                </p>
                            </div>

                            <p class="text-base md:text-lg leading-relaxed">
                                <strong>The result?</strong> Software that feels like it was made for you ...And well,
                                that's because it was.
                                Every project combines technical precision with business insight, ensuring your web app
                                not only works beautifully but also delivers measurable value from day one.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed">
                                No cookie-cutter templates. No bloated features you'll never use. Just purpose-built
                                applications that solve real problems and scale with your business.
                            </p>

                            <p class="text-base md:text-lg leading-relaxed pt-2">
                                <strong class="text-purple-700">Ready to build something that actually fits?</strong>
                                Let's talk about your next web app project.
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
                            <div class="text-base font-bold mb-1">Purpose-Built Solutions</div>
                            <div class="text-sm text-white/95 leading-snug">
                                That scale with your ambitions.
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
import webSolution3 from '~/assets/img/websolutions3.webp';

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