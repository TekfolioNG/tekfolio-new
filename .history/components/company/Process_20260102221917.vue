<template>
    <div class="min-h-screen bg-white">
        <!-- How We Work Section -->
        <section class="w-full bg-gray-50 py-20 lg:py-28 relative overflow-hidden">
            <!-- Subtle tech pattern background -->
            <div class="absolute inset-0 opacity-[0.02]"
                style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
            </div>

            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <!-- Section Header -->
                <div class="mb-16 lg:mb-20">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                        <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Our
                            Process</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
                        How We Work
                    </h2>
                    <p class="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl">
                        A clear, collaborative process designed to keep everyone aligned—from first conversation to
                        launch and beyond. Each stage prioritises clarity, feedback, and transparency, so there are no
                        surprises.
                    </p>
                </div>

                <!-- Steps Grid with Dropdowns -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <div v-for="(step, index) in steps" :key="step.id"
                        class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200">
                        <!-- Card Header - Clickable -->
                        <button @click="toggleCard(step.id)"
                            class="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200 text-left">
                            <!-- Number Badge -->
                            <div
                                class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                {{ index + 1 }}
                            </div>

                            <!-- Icon -->
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <component :is="step.icon" class="w-6 h-6 text-gray-700" />
                            </div>

                            <!-- Title -->
                            <h3 class="flex-1 text-lg md:text-xl font-bold text-gray-900">
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
                            <div class="px-6 pb-6 pt-2 border-t border-gray-100">
                                <p class="text-base leading-relaxed text-gray-600">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- You'll Love Working With Us Section -->
        <section class="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <!-- Section Header -->
                <div class="mb-16">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="h-px w-12 bg-gradient-to-r from-blue-600 to-gray-400"></div>
                        <span class="text-sm font-semibold text-blue-600 uppercase tracking-wider">The Right Fit</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
                        You'll Love Working With Us If…
                    </h2>
                    <p class="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl">
                        We work best with forward-thinking partners who value substance over shortcuts.
                    </p>
                </div>

                <!-- Items Grid with Dropdowns -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <div v-for="(item, index) in loveWorkingItems" :key="index"
                        class="bg-gray-50 rounded-xl border-2 border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-300">
                        <!-- Card Header - Clickable -->
                        <button @click="toggleLoveCard(index)"
                            class="w-full p-6 flex items-start gap-4 hover:bg-white transition-colors duration-200 text-left">
                            <!-- Icon -->
                            <div
                                class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                <component :is="item.icon" class="w-6 h-6 text-gray-700" />
                            </div>

                            <!-- Title -->
                            <h3 class="flex-1 text-lg md:text-xl font-bold text-gray-900 leading-snug">
                                {{ item.title }}
                            </h3>

                            <!-- Chevron -->
                            <svg :class="['w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 mt-1',
                                { 'rotate-180': openLoveCard === index }]" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- Card Content - Expandable -->
                        <div :class="['overflow-hidden transition-all duration-300 ease-in-out',
                            openLoveCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                            <div class="px-6 pb-6 pt-2 border-t border-gray-200">
                                <p class="text-base leading-relaxed text-gray-600">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom note -->
                <div class="mt-16 pt-12 border-t border-gray-200">
                    <p class="text-lg text-gray-500 italic max-w-2xl">
                        If this resonates with you, we should talk.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search, Compass, Palette, Code, Rocket, Target, MessageSquare, Lightbulb, Clock, Users } from 'lucide-vue-next';

const openCard = ref(null);
const openLoveCard = ref(null);

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

const loveWorkingItems = [
    {
        icon: Target,
        title: "You care about long-term value, not just launch day",
        description: "You understand that great systems are built to evolve, not just to ship. Success is measured in years, not sprints."
    },
    {
        icon: MessageSquare,
        title: "You prefer clarity over jargon",
        description: "You appreciate straightforward communication and decisions grounded in logic, not buzzwords or technical theatrics."
    },
    {
        icon: Lightbulb,
        title: "You see technology as an enabler, not a vanity asset",
        description: "You view software as a tool to solve real problems and create value—not as a checkbox exercise or status symbol."
    },
    {
        icon: Clock,
        title: "You value thoughtful progress over rushed delivery",
        description: "You understand the importance of doing things right the first time, even if it means resisting arbitrary deadlines that compromise quality."
    },
    {
        icon: Users,
        title: "You want a partner who thinks with you, not just executes tasks",
        description: "You seek a collaborator who challenges assumptions, brings strategic insight, and commits to your long-term success."
    }
];

const toggleCard = (id) => {
    openCard.value = openCard.value === id ? null : id;
};

const toggleLoveCard = (index) => {
    openLoveCard.value = openLoveCard.value === index ? null : index;
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