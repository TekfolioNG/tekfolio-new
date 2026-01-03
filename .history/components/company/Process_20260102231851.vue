<template>
    <div class="min-h-screen bg-white">
        <!-- How We Work Section -->
        <section class="w-full bg-gray-100 py-20 lg:py-28 relative overflow-hidden">
            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
                <!-- Desktop: Two Column Layout (Header + First Card) -->
                <div class="hidden lg:grid lg:grid-cols-2 gap-8 mb-8">
                    <!-- Left Column: Section Header -->
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                            <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                                Process</span>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            How We Work
                        </h2>
                        <p class="text-lg leading-relaxed text-gray-600">
                            A clear, collaborative process designed to keep everyone aligned—from first conversation to
                            launch and beyond. Each stage prioritises clarity, feedback, and transparency, so there are
                            no surprises.
                        </p>
                    </div>

                    <!-- Right Column: First Step Card -->
                    <div class="mt-12">
                        <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-[1.02] animate-slide-up"
                            style="animation-delay: 0ms;">
                            <!-- Card Header - Clickable -->
                            <button @click="toggleCard(steps[0].id)"
                                class="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200 text-left">
                                <!-- Icon -->
                                <div
                                    class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <component :is="steps[0].icon" class="w-7 h-7 text-purple-700" />
                                </div>

                                <!-- Title -->
                                <h3 class="flex-1 text-xl font-bold text-gray-900">
                                    {{ steps[0].title }}
                                </h3>

                                <!-- Chevron -->
                                <svg :class="['w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0',
                                    { 'rotate-180': openCard === steps[0].id }]" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Card Content - Expandable -->
                            <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                                openCard === steps[0].id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                                <div class="px-6 pb-6 border-t border-gray-100 pt-4">
                                    <p class="text-base leading-relaxed text-gray-600">
                                        {{ steps[0].description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile: Section Header -->
                <div class="lg:hidden mb-12">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                        <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                            Process</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                        How We Work
                    </h2>
                    <p class="text-lg leading-relaxed text-gray-600">
                        A clear, collaborative process designed to keep everyone aligned—from first conversation to
                        launch and beyond. Each stage prioritises clarity, feedback, and transparency, so there are
                        no surprises.
                    </p>
                </div>

                <!-- Remaining Steps Grid (2 columns on desktop) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <!-- Mobile: Show all cards -->
                    <template v-if="windowWidth < 1024">
                        <div v-for="(step, index) in steps" :key="step.id"
                            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-[1.02] animate-slide-up"
                            :style="`animation-delay: ${index * 100}ms;`">
                            <!-- Card Header - Clickable -->
                            <button @click="toggleCard(step.id)"
                                class="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200 text-left">
                                <!-- Icon -->
                                <div
                                    class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <component :is="step.icon" class="w-7 h-7 text-purple-700" />
                                </div>

                                <!-- Title -->
                                <h3 class="flex-1 text-xl font-bold text-gray-900">
                                    {{ step.title }}
                                </h3>

                                <!-- Chevron -->
                                <svg :class="['w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0',
                                    { 'rotate-180': openCard === step.id }]" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Card Content - Expandable -->
                            <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                                openCard === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                                <div class="px-6 pb-6 border-t border-gray-100 pt-4">
                                    <p class="text-base leading-relaxed text-gray-600">
                                        {{ step.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- Desktop: Show remaining 4 cards (skip first) -->
                    <template v-else>
                        <div v-for="(step, index) in steps.slice(1)" :key="step.id"
                            class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-[1.02] animate-slide-up"
                            :style="`animation-delay: ${(index + 1) * 100}ms;`">
                            <!-- Card Header - Clickable -->
                            <button @click="toggleCard(step.id)"
                                class="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200 text-left">
                                <!-- Icon -->
                                <div
                                    class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <component :is="step.icon" class="w-7 h-7 text-purple-700" />
                                </div>

                                <!-- Title -->
                                <h3 class="flex-1 text-xl font-bold text-gray-900">
                                    {{ step.title }}
                                </h3>

                                <!-- Chevron -->
                                <svg :class="['w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0',
                                    { 'rotate-180': openCard === step.id }]" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Card Content - Expandable -->
                            <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                                openCard === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                                <div class="px-6 pb-6 border-t border-gray-100 pt-4">
                                    <p class="text-base leading-relaxed text-gray-600">
                                        {{ step.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>

        <!-- You'll Love Working With Us Section -->
        <section class="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
                <!-- Two Column Layout on Desktop -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <!-- Left Column: Content -->
                    <div class="bg-gray-800 rounded-2xl p-8 lg:p-12">
                        <!-- Section Header -->
                        <div class="mb-12">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="h-px w-12 bg-gradient-to-r from-blue-400 to-gray-300"></div>
                                <span class="text-sm font-semibold text-blue-400 uppercase tracking-wider">The Right
                                    Fit</span>
                            </div>
                            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                                You'll Love Working With Us If…
                            </h2>
                        </div>

                        <!-- Content List -->
                        <div class="space-y-6">
                            <p class="text-base leading-relaxed text-white animate-slide-in-right"
                                style="animation-delay: 0ms;">
                                You care about <span class="font-bold">long-term value</span>, not just launch day
                            </p>
                            <p class="text-base leading-relaxed text-white animate-slide-in-right"
                                style="animation-delay: 100ms;">
                                You prefer <span class="font-bold">clarity over jargon</span>
                            </p>
                            <p class="text-base leading-relaxed text-white animate-slide-in-right"
                                style="animation-delay: 200ms;">
                                You see technology as an <span class="font-bold">enabler</span>, not a vanity asset
                            </p>
                            <p class="text-base leading-relaxed text-white animate-slide-in-right"
                                style="animation-delay: 300ms;">
                                You value <span class="font-bold">thoughtful progress</span> over rushed delivery
                            </p>
                            <p class="text-base leading-relaxed text-white animate-slide-in-right"
                                style="animation-delay: 400ms;">
                                You want a partner who <span class="font-bold">thinks with you</span>, not just executes
                                tasks
                            </p>
                        </div>
                    </div>

                    <!-- Right Column: Image (Desktop Only) -->
                    <div class="hidden lg:block">
                        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-sm">
                            <img :src="philosophyIllustration" alt="Tekfolio Philosophy" class="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Search, Compass, Palette, Code, Rocket } from 'lucide-vue-next';
import philosophyIllustration from '~/assets/img/philosophy-tekfolio.svg';

const openCard = ref(null);
const windowWidth = ref(0);

const steps = [
    {
        id: 1,
        title: "Discovery",
        icon: Search,
        description: "We begin by listening. Understanding your goals, users, and constraints before writing a single line of code ensures every decision is intentional and grounded in real needs."
    },
    {
        id: 2,
        title: "Strategy",
        icon: Compass,
        description: "We map out the path forward with clear milestones and timelines, and the right technical approach. Early planning and visual direction keep decisions focused and aligned."
    },
    {
        id: 3,
        title: "Prototyping & UI/UX",
        icon: Palette,
        description: "Ideas come to life through interactive prototypes. You can review, test, and refine the experience early, reducing guesswork and costly changes later."
    },
    {
        id: 4,
        title: "Build",
        icon: Code,
        description: "Development happens in clear stages, with regular updates and shared progress. Clean code, performance best practices, and scalable architecture are standard."
    },
    {
        id: 5,
        title: "Launch & Grow",
        icon: Rocket,
        description: "We deploy with confidence, monitor performance, and support ongoing improvements. Your product remains stable, secure, and ready to evolve as your needs change."
    }
];

const toggleCard = (id) => {
    openCard.value = openCard.value === id ? null : id;
};

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});
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

/* Slide up animation for cards */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
    opacity: 0;
}

/* Slide in from right animation */
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
    opacity: 0;
}
</style>