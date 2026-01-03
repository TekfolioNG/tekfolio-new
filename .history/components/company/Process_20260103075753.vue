<template>
    <section ref="howWeWorkSection" class="w-full bg-gray-100 py-20 lg:py-28 relative overflow-hidden">
        <!-- Subtle tech pattern background -->
        <div class="absolute inset-0 opacity-[0.02]"
            style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
        </div>

        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
            <!-- Desktop: Two Column Layout with equal split -->
            <div class="hidden lg:grid lg:grid-cols-2 gap-8 mb-4">
                <!-- Left Column: All Cards (1/2 width) -->
                <div class="mt-0 lg:mt-16">
                    <div class="grid grid-cols-1 gap-4">
                        <div v-for="(step, index) in steps.slice(0, 5)" :key="step.id" :class="['group bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:scale-[1.02] card-glow',
                            { 'animate-slide-up': cardsVisible }]" :style="`animation-delay: ${index * 100}ms;`">
                            <!-- Card Header - Clickable -->
                            <button @click="toggleCard(index)"
                                class="w-full p-5 flex items-center gap-4 hover:bg-gray-700/50 transition-colors duration-200 text-left">

                                <!-- Title -->
                                <h3 class="flex-1 text-lg font-bold text-white">
                                    {{ step.title }}
                                </h3>

                                <!-- Chevron with enhanced glow -->
                                <div class="chevron-glow-circle">
                                    <svg :class="['w-5 h-5 transition-transform duration-300 flex-shrink-0',
                                        { 'rotate-180': openCards[index] }]" fill="none" viewBox="0 0 24 24"
                                        stroke="url(#chevron-gradient)" stroke-width="2.5">
                                        <defs>
                                            <linearGradient id="chevron-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style="stop-color:rgb(147, 51, 234);stop-opacity:1" />
                                                <stop offset="100%"
                                                    style="stop-color:rgb(37, 99, 235);stop-opacity:1" />
                                            </linearGradient>
                                        </defs>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <!-- Card Content - Expandable -->
                            <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                                openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                                <div class="px-5 pb-5 border-t border-gray-700/50 pt-4">
                                    <p class="text-sm leading-relaxed text-gray-300">
                                        {{ step.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Section Header and Image (1/2 width) -->
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                        <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                            Process</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        How We Work
                    </h2>
                    <p class="text-lg leading-relaxed text-gray-600 mb-12">
                        A clear, collaborative process designed to keep everyone aligned—from first conversation to
                        launch and beyond. Each stage prioritises clarity, feedback, and transparency, so there are
                        no surprises.
                    </p>

                    <!-- Full Width Image -->
                    <div
                        class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white p-8 md:p-12">
                        <img :src="ourProcessImage" alt="Our Process"
                            class="w-full h-auto scale-125 transform group-hover:scale-130 transition-transform duration-700 ease-out" />
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

            <!-- Mobile: All Cards -->
            <div class="grid grid-cols-1 gap-4 lg:hidden">
                <div v-for="(step, index) in steps.slice(0, 5)" :key="step.id" :class="['group bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:scale-[1.02] card-glow',
                    { 'animate-slide-up': cardsVisible }]" :style="`animation-delay: ${index * 100}ms;`">
                    <!-- Card Header - Clickable -->
                    <button @click="toggleCard(index)"
                        class="w-full p-5 flex items-center gap-4 hover:bg-gray-700/50 transition-colors duration-200 text-left">

                        <!-- Title -->
                        <h3 class="flex-1 text-lg font-bold text-white">
                            {{ step.title }}
                        </h3>

                        <!-- Chevron with enhanced glow -->
                        <div class="chevron-glow-circle">
                            <svg :class="['w-5 h-5 transition-transform duration-300 flex-shrink-0',
                                { 'rotate-180': openCards[index] }]" fill="none" viewBox="0 0 24 24"
                                stroke="url(#chevron-gradient-mobile)" stroke-width="2.5">
                                <defs>
                                    <linearGradient id="chevron-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:rgb(147, 51, 234);stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:rgb(37, 99, 235);stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <!-- Card Content - Expandable -->
                    <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                        openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                        <div class="px-5 pb-5 border-t border-gray-700/50 pt-4">
                            <p class="text-sm leading-relaxed text-gray-300">
                                {{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Code, Compass, Palette, Rocket, Search } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import ourProcessImage from '~/assets/img/ourprocess.svg';

const openCards = ref([false, false, false, false, false]);
const cardsVisible = ref(false);
const howWeWorkSection = ref(null);

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

const toggleCard = (index) => {
    const newOpenCards = [...openCards.value];
    newOpenCards[index] = !newOpenCards[index];
    openCards.value = newOpenCards;
};

const handleScroll = () => {
    if (howWeWorkSection.value && !cardsVisible.value) {
        const rect = howWeWorkSection.value.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
            cardsVisible.value = true;
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
.transition-all {
    transition: all 0.3s ease;
}

.rotate-180 {
    transform: rotate(180deg);
}

.card-glow {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 20px rgba(107, 114, 128, 0.2);
    animation: cardPulse 3s ease-in-out infinite;
}

@keyframes cardPulse {

    0%,
    100% {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 20px rgba(107, 114, 128, 0.2);
    }

    50% {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 35px rgba(147, 51, 234, 0.4);
    }
}

.chevron-glow-circle {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2));
    box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7);
    animation: chevronGlowPulse 2s ease-in-out infinite;
}

@keyframes chevronGlowPulse {

    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7), 0 0 10px rgba(147, 51, 234, 0.5);
    }

    50% {
        box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.3), 0 0 20px rgba(147, 51, 234, 0.8);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
    opacity: 0;
}

.group:hover img {
    transform: scale(1.05);
}
</style>