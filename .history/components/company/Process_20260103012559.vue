<template>
    <div class="min-h-screen bg-white">
        <!-- How We Work Section -->
        <section ref="howWeWorkSection" class="w-full bg-gray-100 py-20 lg:py-28 relative overflow-hidden">
            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
                <!-- Desktop: Two Column Layout with 1/3 - 2/3 split -->
                <div class="hidden lg:grid lg:grid-cols-12 gap-8 mb-4">
                    <!-- Left Column: Section Header (1/3 width) -->
                    <div class="col-span-4">
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

                    <!-- Right Column: All Cards (2/3 width) -->
                    <div class="col-span-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div v-for="(step, index) in steps" :key="step.id" :class="['group bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-700 hover:scale-[1.02] card-glow',
                                { 'animate-slide-up': cardsVisible }]" :style="`animation-delay: ${index * 100}ms;`">
                                <!-- Card Header - Clickable -->
                                <button @click="toggleCard(index)"
                                    class="w-full p-4 flex items-center gap-3 hover:bg-purple-800/50 transition-colors duration-200 text-left">
                                    <!-- Icon -->
                                    <div
                                        class="flex-shrink-0 w-10 h-10 bg-purple-700/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <component :is="step.icon" class="w-5 h-5 text-purple-300" />
                                    </div>

                                    <!-- Title -->
                                    <h3 class="flex-1 text-base font-bold text-white">
                                        {{ step.title }}
                                    </h3>

                                    <!-- Chevron with enhanced glow -->
                                    <div class="chevron-glow-circle">
                                        <svg :class="['w-5 h-5 text-purple-300 transition-transform duration-300 flex-shrink-0',
                                            { 'rotate-180': openCards[index] }]" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <!-- Card Content - Expandable -->
                                <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                                    openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                                    <div class="px-4 pb-4 border-t border-purple-700/50 pt-3">
                                        <p class="text-sm leading-relaxed text-purple-100">
                                            {{ step.description }}
                                        </p>
                                    </div>
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

                <!-- Mobile: All Cards -->
                <div class="grid grid-cols-1 gap-3 lg:hidden">
                    <div v-for="(step, index) in steps" :key="step.id" :class="['group bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-700 hover:scale-[1.02] card-glow',
                        { 'animate-slide-up': cardsVisible }]" :style="`animation-delay: ${index * 100}ms;`">
                        <!-- Card Header - Clickable -->
                        <button @click="toggleCard(index)"
                            class="w-full p-4 flex items-center gap-3 hover:bg-purple-800/50 transition-colors duration-200 text-left">
                            <!-- Icon -->
                            <div
                                class="flex-shrink-0 w-10 h-10 bg-purple-700/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <component :is="step.icon" class="w-5 h-5 text-purple-300" />
                            </div>

                            <!-- Title -->
                            <h3 class="flex-1 text-base font-bold text-white">
                                {{ step.title }}
                            </h3>

                            <!-- Chevron with enhanced glow -->
                            <div class="chevron-glow-circle">
                                <svg :class="['w-5 h-5 text-purple-300 transition-transform duration-300 flex-shrink-0',
                                    { 'rotate-180': openCards[index] }]" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <!-- Card Content - Expandable -->
                        <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                            openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                            <div class="px-4 pb-4 border-t border-purple-700/50 pt-3">
                                <p class="text-sm leading-relaxed text-purple-100">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- You'll Love Working With Us Section -->
        <section ref="loveWorkingSection" class="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
                <!-- Two Column Layout on Desktop -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <!-- Left Column: Content (Order 1 on mobile and desktop) -->
                    <div class="bg-gray-800 rounded-2xl p-8 lg:p-12 order-1">
                        <!-- Section Header -->
                        <div class="mb-12">
                            <div :class="['flex items-center gap-3 mb-4', { 'animate-slide-in-left': textVisible }]">
                                <div class="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-400"></div>
                                <span class="text-sm font-semibold text-purple-500 uppercase tracking-wider">The Right
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
    </div>
</template>

<script setup>
import { Code, Compass, Palette, Rocket, Search } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import howWeWork from '~/assets/img/howwework-tekfolio.svg';

const openCards = ref([false, false, false, false, false]);
const windowWidth = ref(0);
const cardsVisible = ref(false);
const textVisible = ref(false);
const howWeWorkSection = ref(null);
const loveWorkingSection = ref(null);

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

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

const handleScroll = () => {
    if (howWeWorkSection.value && !cardsVisible.value) {
        const rect = howWeWorkSection.value.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
            cardsVisible.value = true;
        }
    }

    if (loveWorkingSection.value && !textVisible.value) {
        const rect = loveWorkingSection.value.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        if (isVisible) {
            textVisible.value = true;
        }
    }
};

onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWidth);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
    window.removeEventListener('scroll', handleScroll);
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

/* Card glow effect - enhanced for darker cards */
.card-glow {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.3);
    animation: cardPulse 3s ease-in-out infinite;
}

@keyframes cardPulse {

    0%,
    100% {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.3);
    }

    50% {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 0 35px rgba(147, 51, 234, 0.5);
    }
}

/* Enhanced chevron glow with circle effect */
.chevron-glow-circle {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(147, 51, 234, 0.2);
    box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7);
    animation: chevronGlowPulse 2s ease-in-out infinite;
}

@keyframes chevronGlowPulse {

    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7),
            0 0 10px rgba(147, 51, 234, 0.5);
    }

    50% {
        box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.3),
            0 0 20px rgba(147, 51, 234, 0.8);
    }
}

/* Slide up animation for cards */
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

/* Slide in from left animation */
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

/* Image zoom on hover */
.group:hover img {
    transform: scale(1.05);
}
</style>