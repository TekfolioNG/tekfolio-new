<template>
    <section ref="loveWorkingSection" class="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
            <!-- Two Column Layout on Desktop -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <!-- Left Column: Content (Order 1 on mobile and desktop) -->
                <div class="bg-gray-800 rounded-2xl p-8 lg:p-12 order-1">
                    <!-- Section Header -->
                    <div class="mb-12">
                        <div :class="['flex items-center gap-3 mb-4', { 'animate-slide-in-left': textVisible }]">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                            <span
                                class="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">The
                                Right
                                Fit</span>
                        </div>
                        <h2 :class="['text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6',
                            { 'animate-slide-in-left': textVisible }]" style="animation-delay: 50ms;">
                            You'll Love Working With Us If…
                        </h2>
                    </div>

                    <!-- Content List with Check Mark Bullets -->
                    <div class="space-y-6">
                        <div :class="['flex items-start gap-4', { 'animate-slide-in-left': textVisible }]"
                            style="animation-delay: 100ms;">
                            <div class="flex-shrink-0 mt-1">
                                <div
                                    class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                    <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-base leading-relaxed text-white">
                                You care about <span class="font-bold">long-term value</span>, not just launch day
                            </p>
                        </div>
                        <div :class="['flex items-start gap-4', { 'animate-slide-in-left': textVisible }]"
                            style="animation-delay: 150ms;">
                            <div class="flex-shrink-0 mt-1">
                                <div
                                    class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                    <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-base leading-relaxed text-white">
                                You prefer <span class="font-bold">clarity over jargon</span>
                            </p>
                        </div>
                        <div :class="['flex items-start gap-4', { 'animate-slide-in-left': textVisible }]"
                            style="animation-delay: 200ms;">
                            <div class="flex-shrink-0 mt-1">
                                <div
                                    class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                    <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-base leading-relaxed text-white">
                                You see technology as an <span class="font-bold">enabler</span>, not a vanity asset
                            </p>
                        </div>
                        <div :class="['flex items-start gap-4', { 'animate-slide-in-left': textVisible }]"
                            style="animation-delay: 250ms;">
                            <div class="flex-shrink-0 mt-1">
                                <div
                                    class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                    <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-base leading-relaxed text-white">
                                You value <span class="font-bold">thoughtful progress</span> over rushed delivery
                            </p>
                        </div>
                        <div :class="['flex items-start gap-4', { 'animate-slide-in-left': textVisible }]"
                            style="animation-delay: 300ms;">
                            <div class="flex-shrink-0 mt-1">
                                <div
                                    class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                    <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <p class="text-base leading-relaxed text-white">
                                You want a partner who <span class="font-bold">thinks with you</span>, not just
                                executes
                                tasks
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Image (Order 2 on mobile, visible on all screens) -->
                <div class="order-2">
                    <div
                        class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white p-8 md:p-12">
                        <img :src="howWeWork" alt="Tekfolio How We Work"
                            class="w-full h-auto scale-125 transform group-hover:scale-130 transition-transform duration-700 ease-out" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import howWeWork from '~/assets/img/howwework-tekfolio.svg';

const textVisible = ref(false);
const loveWorkingSection = ref(null);

const handleScroll = () => {
    if (loveWorkingSection.value && !textVisible.value) {
        const rect = loveWorkingSection.value.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
            textVisible.value = true;
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-40px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-in-left {
    animation: slideInLeft 0.7s ease-out forwards;
    opacity: 0;
}

.group:hover img {
    transform: scale(1.05);
}
</style>