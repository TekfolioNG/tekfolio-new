<template>
    <section ref="howWeWorkSection" class="w-full bg-gray-100 py-20 lg:py-28 relative overflow-hidden">
        <!-- Subtle tech pattern background -->
        <div class="absolute inset-0 opacity-[0.02]"
            style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
        </div>

        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
            <!-- Top Section - Centered -->
            <div class="text-center lg:text-center mb-12 lg:mb-16">
                <div class="mb-8">
                    <div class="flex items-center justify-center gap-3 mb-2">
                        <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                        <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                            Process</span>
                        <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                    </div>
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                        How We Work
                    </h2>
                </div>

                <div class="space-y-5 text-gray-900 max-w-3xl mx-auto">
                    <p class="text-lg md:text-xl leading-relaxed font-regular italic text-gray-900">
                        A clear, collaborative process designed to keep everyone aligned—from first conversation to
                        launch and beyond. Each stage prioritises clarity, feedback, and transparency, so there are
                        no surprises.
                    </p>
                </div>
            </div>

            <!-- Desktop: Two Column Layout with gap -->
            <div class="hidden lg:grid lg:grid-cols-12 gap-12">
                <!-- Left Column: All Cards -->
                <div class="lg:col-span-6">
                    <div class="grid grid-cols-1 gap-5">
                        <div v-for="(step, index) in steps.slice(0, 5)" :key="step.id" :class="['group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-200/50 hover:border-purple-400/70 hover:-translate-y-1 card-container',
                            { 'animate-slide-up': cardsVisible }]" :style="`animation-delay: ${index * 100}ms;`">

                            <!-- Gradient Background Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                            </div>

                            <!-- Card Header - Clickable -->
                            <button @click="toggleCard(index)"
                                class="relative w-full p-6 flex items-center gap-5 hover:bg-white/40 transition-all duration-200 text-left">

                                <!-- Icon Container -->
                                <div
                                    class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <component :is="step.icon" class="w-7 h-7 text-white" :stroke-width="2.5" />
                                </div>

                                <!-- Title -->
                                <h3
                                    class="flex-1 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                                    {{ step.title }}
                                </h3>

                                <!-- Chevron -->
                                <div
                                    class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                                    <svg :class="['w-5 h-5 transition-transform duration-300 text-purple-700',
                                        { 'rotate-180': openCards[index] }]" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <!-- Card Content - Expandable -->
                            <div :class="['relative overflow-hidden transition-all duration-300 ease-in-out',
                                openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                                <div class="px-6 pb-6 pt-2">
                                    <div class="pl-19">
                                        <p class="text-base leading-relaxed text-gray-700">
                                            {{ step.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Images -->
                <div class="lg:col-span-6 flex flex-col gap-8 items-center justify-center">
                    <div class="w-3/5">
                        <div
                            class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 bg-white p-4">
                            <img :src="ourProcessImage" alt="Our Process"
                                class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </div>
                    <div class="w-3/5">
                        <div
                            class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 bg-white p-4">
                            <img :src="prototypeImage" alt="Prototype"
                                class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile: All Cards -->
            <div class="grid grid-cols-1 gap-5 lg:hidden mb-8">
                <div v-for="(step, index) in steps.slice(0, 5)" :key="step.id" :class="['group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-200/50 hover:border-purple-400/70 card-container',
                    { 'animate-slide-up': cardsVisible }]" :style="`animation-delay: ${index * 100}ms;`">

                    <!-- Gradient Background Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    </div>

                    <!-- Card Header - Clickable -->
                    <button @click="toggleCard(index)"
                        class="relative w-full p-5 flex items-center gap-4 hover:bg-white/40 transition-all duration-200 text-left">

                        <!-- Icon Container -->
                        <div
                            class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <component :is="step.icon" class="w-6 h-6 text-white" :stroke-width="2.5" />
                        </div>

                        <!-- Title -->
                        <h3
                            class="flex-1 text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                            {{ step.title }}
                        </h3>

                        <!-- Chevron -->
                        <div
                            class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                            <svg :class="['w-5 h-5 transition-transform duration-300 text-purple-700',
                                { 'rotate-180': openCards[index] }]" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <!-- Card Content - Expandable -->
                    <div :class="['relative overflow-hidden transition-all duration-300 ease-in-out',
                        openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                        <div class="px-5 pb-5 pt-2">
                            <div class="pl-16">
                                <p class="text-sm leading-relaxed text-gray-700">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile: Images -->
            <div class="lg:hidden space-y-6">
                <div
                    class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 bg-white p-4 max-w-sm mx-auto">
                    <img :src="ourProcessImage" alt="Our Process"
                        class="w-full h-auto opacity-80 transform group-hover:opacity-90 transition-all duration-700 ease-out" />
                </div>
                <div
                    class="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 bg-white p-4 max-w-sm mx-auto">
                    <img :src="prototypeImage" alt="Prototype"
                        class="w-full h-auto opacity-80 transform group-hover:opacity-90 transition-all duration-700 ease-out" />
                </div>
                import { Code, Compass, Palette, Rocket, Search } from 'lucide-vue-next';
                import { onMounted, onUnmounted, ref } from 'vue';
                import ourProcessImage from '~/assets/img/ourprocess.svg';
                import prototypeImage from '~/assets/img/prototype.svg';

                <script setup>
import { Code, Compass, Palette, Rocket, Search } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import ourProcessImage from '~/assets/img/ourprocess.svg';
import prototypeImage from '~/assets/img/prototype.svg';

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
                    .card-container {
                        position: relative;
                        background: white;
                    }

                    .transition-all {
                        transition: all 0.3s ease;
                    }

                    .rotate-180 {
                        transform: rotate(180deg);
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
                        transform: scale(1.02);
                    }
                </style>
