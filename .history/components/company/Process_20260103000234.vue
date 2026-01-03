<template>
    <div class="min-h-screen bg-white">
        <!-- How We Work Section -->
        <section ref="howWeWorkSection" class="w-full bg-gray-100 py-20 lg:py-28 relative overflow-hidden">
            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <!-- Decorative SVG - Made bigger -->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 lg:opacity-20 w-1/2 h-1/2">
                <img :src="howWeWork" alt="How We Work" class="w-full h-full object-contain" />
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
                    <div class="mt-20">
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
                                    { 'rotate-180': openCard === steps[0].id }]" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
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
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
        <section ref="philosophySection" class="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
            <!-- Animated background elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div v-for="n in 5" :key="n"
                    :class="['absolute rounded-full bg-gradient-to-r from-purple-100 to-blue-100 opacity-20', 
                    `w-${20 + n * 8} h-${20 + n * 8}`, 
                    `top-${n * 20} left-${n * 10}`,
                    'animate-float']"
                    :style="`animation-delay: ${n * 0.5}s;`">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
                <!-- Two Column Layout on Desktop -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <!-- Left Column: Content -->
                    <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
                        <!-- Section Header -->
                        <div class="mb-12">
                            <div class="flex items-center gap-3 mb-4" :class="{ 'animate-slide-left': isPhilosophyVisible }"
                                style="animation-delay: 100ms">
                                <div class="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-400"></div>
                                <span class="text-sm font-semibold text-purple-500 uppercase tracking-wider">The Right
                                    Fit</span>
                            </div>
                            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
                                :class="{ 'animate-slide-left': isPhilosophyVisible }" style="animation-delay: 200ms">
                                You'll Love Working With Us If…
                            </h2>
                        </div>

                        <!-- Content List with decorative icons -->
                        <div class="space-y-6">
                            <div v-for="(item, index) in philosophyItems" :key="index"
                                :class="['flex items-start gap-4', { 'animate-slide-left': isPhilosophyVisible }]"
                                :style="`animation-delay: ${(index + 3) * 100}ms`">
                                <!-- Decorative icon container -->
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl flex items-center justify-center border border-purple-700/20 group-hover:scale-110 transition-transform duration-300">
                                    <!-- Decorative SVG Icon -->
                                    <svg class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        <path v-else-if="index === 2" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path v-else-if="index === 3" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>

                                <!-- Content -->
                                <div>
                                    <p class="text-base leading-relaxed text-white">
                                        <span class="font-bold text-purple-300">{{ item.highlight }}</span> {{ item.text }}
                                    </p>
                                    <!-- Decorative underline on hover -->
                                    <div class="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 mt-1"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Decorative accent -->
                        <div class="mt-12 pt-6 border-t border-gray-700/50">
                            <div class="flex items-center gap-3">
                                <div class="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 animate-pulse"></div>
                                <p class="text-sm text-gray-400 italic">
                                    Great partnerships start with aligned values
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Image (Desktop Only) -->
                    <div class="hidden lg:block">
                        <div class="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
                            <!-- Animated border effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-sm"></div>
                            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-sm"></div>
                            
                            <img :src="philosophyIllustration" alt="Tekfolio Philosophy" 
                                class="w-full h-auto transform transition-transform duration-300 hover:scale-105" />
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
import philosophyIllustration from '~/assets/img/philosophy-tekfolio.svg';
import howWeWork from '~/assets/img/howwework-tekfolio.svg';

const openCard = ref(null);
const windowWidth = ref(0);
const isPhilosophyVisible = ref(false);
const howWeWorkSection = ref(null);
const philosophySection = ref(null);

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

const philosophyItems = [
    {
        highlight: "You care about long-term value,",
        text: "not just launch day"
    },
    {
        highlight: "You prefer clarity,",
        text: "over jargon"
    },
    {
        highlight: "You see technology as an enabler,",
        text: "not a vanity asset"
    },
    {
        highlight: "You value thoughtful progress,",
        text: "over rushed delivery"
    },
    {
        highlight: "You want a partner who thinks with you,",
        text: "not just executes tasks"
    }
];

const toggleCard = (id) => {
    // FIX: Only toggle the clicked card, not affecting others
    openCard.value = openCard.value === id ? null : id;
};

const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

const handleScroll = () => {
    if (!philosophySection.value) return;
    
    const rect = philosophySection.value.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom >= 0;
    
    if (isVisible && !isPhilosophyVisible.value) {
        isPhilosophyVisible.value = true;
    }
};

onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWidth);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
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

/* Slide in from left animation */
@keyframes slideLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-left {
    animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
}

/* Floating animation for background elements */
@keyframes float {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Custom max-height transitions for dropdowns */
:deep(.expand-enter-active),
:deep(.expand-leave-active) {
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    overflow: hidden;
}

:deep(.expand-enter-from),
:deep(.expand-leave-to) {
    max-height: 0;
    opacity: 0;
}

:deep(.expand-enter-to),
:deep(.expand-leave-from) {
    max-height: 500px;
    opacity: 1;
}

/* Enhanced card hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

/* Custom shadow for cards */
.shadow-2xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>