<template>
    <div class="min-h-screen bg-white">
        <!-- How We Work Section -->
        <section class="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
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

                <!-- Steps Timeline -->
                <div class="space-y-8 lg:space-y-12">
                    <div v-for="(step, index) in steps" :key="step.id"
                        class="group relative">
                        <!-- Desktop Layout -->
                        <div class="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
                            <!-- Number Column -->
                            <div class="col-span-1 flex flex-col items-center">
                                <div
                                    class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {{ index + 1 }}
                                </div>
                                <div v-if="index < steps.length - 1"
                                    class="w-0.5 h-full min-h-[100px] bg-gradient-to-b from-purple-300 to-blue-300 mt-4">
                                </div>
                            </div>

                            <!-- Content Column -->
                            <div class="col-span-11">
                                <div
                                    class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
                                    <div class="flex items-start gap-6">
                                        <!-- Icon -->
                                        <div
                                            class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <component :is="step.icon" class="w-8 h-8 text-purple-700" />
                                        </div>

                                        <!-- Text Content -->
                                        <div class="flex-1">
                                            <h3 class="text-2xl font-bold text-gray-900 mb-3">
                                                {{ step.title }}
                                            </h3>
                                            <p class="text-base leading-relaxed text-gray-600">
                                                {{ step.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Layout -->
                        <div class="lg:hidden">
                            <div
                                class="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                                <div class="flex items-start gap-4 mb-4">
                                    <!-- Number Badge -->
                                    <div
                                        class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                                        {{ index + 1 }}
                                    </div>

                                    <!-- Icon -->
                                    <div
                                        class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                                        <component :is="step.icon" class="w-6 h-6 text-purple-700" />
                                    </div>

                                    <!-- Title -->
                                    <h3 class="flex-1 text-xl font-bold text-gray-900 mt-1">
                                        {{ step.title }}
                                    </h3>
                                </div>

                                <!-- Description -->
                                <p class="text-base leading-relaxed text-gray-600 pl-14">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- You'll Love Working With Us Section -->
        <section class="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-20 lg:py-28 relative overflow-hidden">
            <!-- Animated gradient overlay -->
            <div class="absolute inset-0 opacity-30">
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            </div>

            <!-- Subtle grid pattern -->
            <div class="absolute inset-0 opacity-[0.03]"
                style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 50px 50px;">
            </div>

            <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <div class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                        <span class="text-sm font-semibold text-white/90 uppercase tracking-wider">The Right Fit</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                        You'll Love Working With Us If…
                    </h2>
                    <p class="text-lg text-white/80 max-w-2xl mx-auto">
                        We work best with forward-thinking partners who value substance over shortcuts.
                    </p>
                </div>

                <!-- Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <div v-for="(item, index) in loveWorkingItems" :key="index"
                        class="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                        <!-- Gradient accent line -->
                        <div
                            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>

                        <!-- Icon -->
                        <div class="mb-4">
                            <div
                                class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <component :is="item.icon" class="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <!-- Title -->
                        <h3 class="text-xl font-bold text-white mb-3">
                            {{ item.title }}
                        </h3>

                        <!-- Description -->
                        <p class="text-base leading-relaxed text-white/70">
                            {{ item.description }}
                        </p>
                    </div>
                </div>

                <!-- Bottom note -->
                <div class="text-center mt-16 pt-12 border-t border-white/10">
                    <p class="text-lg text-white/60 italic">
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
        title: "Long-term value over launch day",
        description: "You understand that great systems are built to evolve, not just to ship. Success is measured in years, not sprints."
    },
    {
        icon: MessageSquare,
        title: "Clarity over jargon",
        description: "You appreciate straightforward communication and decisions grounded in logic, not buzzwords or technical theatrics."
    },
    {
        icon: Lightbulb,
        title: "Technology as an enabler",
        description: "You see software as a tool to solve real problems and create value—not as a vanity asset or checkbox exercise."
    },
    {
        icon: Clock,
        title: "Thoughtful progress over rushed delivery",
        description: "You value doing things right the first time, even if it means resisting arbitrary deadlines that compromise quality."
    },
    {
        icon: Users,
        title: "Partnership, not just execution",
        description: "You want a collaborator who thinks alongside you, challenges assumptions, and commits to your long-term success."
    }
];
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Animation for gradient overlay */
@keyframes pulse {
    0%, 100% {
        opacity: 0.3;
    }
    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>