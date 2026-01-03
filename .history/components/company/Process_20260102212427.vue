<template>
    <div class="min-h-screen bg-white">
        <!-- How We Work Section -->
        <section class="w-full bg-gray-50 py-16 lg:py-20 relative overflow-hidden">
            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <!-- Section Header -->
                <div class="text-center mb-12 lg:mb-16">
                    <div class="mb-8">
                        <div class="flex items-center justify-center gap-3 mb-2">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                            <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                                Process</span>
                            <div class="h-px w-12 bg-gradient-to-l from-purple-700 to-blue-600"></div>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            How We Work
                        </h2>
                    </div>

                    <div class="max-w-3xl mx-auto">
                        <p class="text-base md:text-lg leading-relaxed text-gray-700">
                            A clear, collaborative process designed to keep everyone aligned—from first conversation to
                            launch and beyond. Each stage prioritises clarity, feedback, and transparency, so there are
                            no surprises.
                        </p>
                    </div>
                </div>

                <!-- Steps Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <div v-for="step in steps" :key="step.id"
                        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                        <!-- Card Header - Clickable -->
                        <button @click="toggleCard(step.id)"
                            class="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200">
                            <!-- Icon -->
                            <div
                                class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                                <img :src="step.image" :alt="step.title" class="w-7 h-7 md:w-8 md:h-8" />
                            </div>

                            <!-- Title -->
                            <h3 class="flex-1 text-left text-lg md:text-xl font-bold text-gray-900">
                                {{ step.title }}
                            </h3>

                            <!-- Chevron -->
                            <svg :class="['w-5 h-5 text-gray-500 transition-transform duration-300', 
                                         { 'rotate-180': openCard === step.id }]"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- Card Content - Expandable -->
                        <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                                     openCard === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                            <div class="px-6 pb-6 pt-2 border-t border-gray-100">
                                <p class="text-base leading-relaxed text-gray-700">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- You'll Love Working With Us Section -->
        <section class="w-full bg-white py-16 lg:py-20 relative overflow-hidden">
            <div class="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <!-- Section Header -->
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        You'll Love Working With Us If…
                    </h2>
                </div>

                <!-- List Items -->
                <div class="space-y-6 max-w-3xl mx-auto">
                    <div v-for="(item, index) in loveWorkingItems" :key="index"
                        class="flex items-start gap-4 p-5 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <!-- Custom bullet -->
                        <div
                            class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <!-- Text -->
                        <p class="flex-1 text-base md:text-lg leading-relaxed text-gray-800 font-medium">
                            {{ item }}
                        </p>
                    </div>
                </div>

                <!-- Optional CTA -->
                <div class="text-center mt-12">
                    <p class="text-base md:text-lg text-gray-600 mb-6">
                        Sound like you? Let's talk.
                    </p>
                    <button
                        class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                        Start a Conversation
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import discoveryImg from '~/assets/img/discovery.svg';
import strategyImg from '~/assets/img/strategy.svg';
import uiuxImg from '~/assets/img/uiux.svg';
import buildImg from '~/assets/img/build.svg';
import launchImg from '~/assets/img/launch.svg';

const openCard = ref(null);

const steps = [
    {
        id: 1,
        title: "Discovery",
        image: discoveryImg,
        description: "We begin by listening. Understanding your goals, users, and constraints before writing a single line of code ensures every decision is intentional and grounded in real needs."
    },
    {
        id: 2,
        title: "Strategy",
        image: strategyImg,
        description: "We map out the path forward with clear milestones and timelines, and the right technical approach. Early planning and visual direction keep decisions focused and aligned."
    },
    {
        id: 3,
        title: "Prototyping & UI/UX",
        image: uiuxImg,
        description: "Ideas come to life through interactive prototypes. You can review, test, and refine the experience early, reducing guesswork and costly changes later."
    },
    {
        id: 4,
        title: "Build",
        image: buildImg,
        description: "Development happens in clear stages, with regular updates and shared progress. Clean code, performance best practices, and scalable architecture are standard."
    },
    {
        id: 5,
        title: "Launch & Grow",
        image: launchImg,
        description: "We deploy with confidence, monitor performance, and support ongoing improvements. Your product remains stable, secure, and ready to evolve as your needs change."
    }
];

const loveWorkingItems = [
    "You care about long-term value, not just launch day",
    "You prefer clarity over jargon",
    "You see technology as an enabler, not a vanity asset",
    "You value thoughtful progress over rushed delivery",
    "You want a partner who thinks with you, not just executes tasks"
];

const toggleCard = (id) => {
    openCard.value = openCard.value === id ? null : id;
};
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Rotate animation */
.rotate-180 {
    transform: rotate(180deg);
}
</style>