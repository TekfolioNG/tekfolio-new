<template>
    <section ref="tekfolioEdgeSection" class="w-full bg-gray-100 pb-18 lg:pb-28 pt-16 lg:pt-0 relative overflow-hidden">
        <!-- Subtle tech pattern background -->
        <div class="absolute inset-0 opacity-[0.02]"
            style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
        </div>

        <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
            <!-- Header Section with Image - Desktop 60%-40%, Mobile stacked -->
            <div class="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 items-center">
                <!-- Left: Headings and Intro (Desktop) -->
                <div class="order-1 lg:order-1">
                    <h2
                        class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 text-center md:text-left">
                        What You Get When We're Your Website Developers in Nigeria
                    </h2>
                    <h3 class="text-xl font-medium tekfolio-text mb-5 text-center md:text-left">
                        The Tekfolio Advantage for Your Digital Asset
                    </h3>
                    <p class="text-base md:text-lg leading-relaxed text-gray-700 text-center md:text-left">
                        We build web applications that go beyond aesthetics—combining purposeful architecture,
                        business-ready functionality, and exceptional user experiences that drive real results for your
                        team and customers.
                    </p>
                </div>

                <!-- Right: Image (Desktop) / After heading (Mobile) - 40% -->
                <div class="order-2 flex items-center justify-center">
                    <div class="w-full max-w-sm lg:max-w-full">
                        <img :src="webDesignImage" alt="Web Design Illustration" class="w-full h-auto floating-image" />
                    </div>
                </div>
            </div>

            <!-- Desktop: Two Column Card Layout (50% - 50%) -->
            <div class="hidden lg:grid gap-8" style="grid-template-columns: 50% 50%;">
                <!-- Left Column: First 4 Cards (50%) -->
                <div class="space-y-5">
                    <div v-for="(feature, index) in features.slice(0, 4)" :key="feature.id"
                        :class="['feature-card group', { 'animate-slide-up': cardsVisible }]"
                        :style="`animation-delay: ${index * 100}ms;`">
                        <!-- Gradient Background Overlay -->
                        <div
                            class="absolute inset-0 bg-linear-to-br from-purple-50 via-white to-blue-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                        </div>

                        <!-- Card Header - Clickable -->
                        <button @click="toggleCard(index)"
                            class="relative w-full p-5 flex items-center gap-4 hover:bg-white/40 transition-all duration-200 text-left">
                            <!-- Icon Container -->
                            <div
                                class="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                                <component :is="feature.icon" class="w-6 h-6 text-white" :stroke-width="2.5" />
                            </div>

                            <!-- Title -->
                            <h4
                                class="flex-1 text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                                {{ feature.title }}
                            </h4>

                            <!-- Chevron -->
                            <div
                                class="shrink-0 w-9 h-9 rounded-full bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                                <svg :class="['w-5 h-5 transition-transform duration-300 text-purple-700', { 'rotate-180': openCards[index] }]"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <!-- Card Content - Expandable -->
                        <div
                            :class="['relative overflow-hidden transition-all duration-300 ease-in-out', openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                            <div class="px-5 pb-5 pt-2">
                                <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Last 4 Cards (50%) -->
                <div class="space-y-5">
                    <div v-for="(feature, index) in features.slice(4, 8)" :key="feature.id"
                        :class="['feature-card group', { 'animate-slide-up': cardsVisible }]"
                        :style="`animation-delay: ${(index + 4) * 100}ms;`">
                        <!-- Gradient Background Overlay -->
                        <div
                            class="absolute inset-0 bg-linear-to-br from-purple-50 via-white to-blue-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                        </div>

                        <!-- Card Header - Clickable -->
                        <button @click="toggleCard(index + 4)"
                            class="relative w-full p-5 flex items-center gap-4 hover:bg-white/40 transition-all duration-200 text-left">
                            <!-- Icon Container -->
                            <div
                                class="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                                <component :is="feature.icon" class="w-6 h-6 text-white" :stroke-width="2.5" />
                            </div>

                            <!-- Title -->
                            <h4
                                class="flex-1 text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                                {{ feature.title }}
                            </h4>

                            <!-- Chevron -->
                            <div
                                class="shrink-0 w-9 h-9 rounded-full bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                                <svg :class="['w-5 h-5 transition-transform duration-300 text-purple-700', { 'rotate-180': openCards[index + 4] }]"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        <!-- Card Content - Expandable -->
                        <div
                            :class="['relative overflow-hidden transition-all duration-300 ease-in-out', openCards[index + 4] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                            <div class="px-5 pb-5 pt-2">
                                <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile/Tablet: All Cards -->
            <div class="grid grid-cols-1 gap-5 lg:hidden">
                <div v-for="(feature, index) in features" :key="feature.id"
                    :class="['feature-card group', { 'animate-slide-up': cardsVisible }]"
                    :style="`animation-delay: ${index * 100}ms;`">
                    <!-- Gradient Background Overlay -->
                    <div
                        class="absolute inset-0 bg-linear-to-br from-purple-50 via-white to-blue-50 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    </div>

                    <!-- Card Header - Clickable -->
                    <button @click="toggleCard(index)"
                        class="relative w-full p-5 flex items-center gap-4 hover:bg-white/40 transition-all duration-200 text-left">
                        <!-- Icon Container -->
                        <div
                            class="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                            <component :is="feature.icon" class="w-6 h-6 text-white" :stroke-width="2.5" />
                        </div>

                        <!-- Title -->
                        <h4
                            class="flex-1 text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                            {{ feature.title }}
                        </h4>

                        <!-- Chevron -->
                        <div
                            class="shrink-0 w-9 h-9 rounded-full bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                            <svg :class="['w-5 h-5 transition-transform duration-300 text-purple-700', { 'rotate-180': openCards[index] }]"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <!-- Card Content - Expandable -->
                    <div
                        :class="['relative overflow-hidden transition-all duration-300 ease-in-out', openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
                        <div class="px-5 pb-5 pt-2">
                            <p class="text-base md:text-lg leading-relaxed text-gray-700">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Box, CheckCircle, Clock, Layers, Monitor, Shield, Smartphone, Users } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import webDesignImage from '~/assets/img/webdesignimg.png';

const openCards = ref([false, false, false, false, false, false, false, false]);
const cardsVisible = ref(false);
const tekfolioEdgeSection = ref(null);

const features = [
    {
        id: 1,
        title: "Purpose-Driven Architecture",
        icon: Layers,
        description: "Web platforms designed around real workflows, users, and outcomes, not generic layouts."
    },
    {
        id: 2,
        title: "Business-Ready Functionality",
        icon: Monitor,
        description: "From dashboards to portals and integrations, your web app does real work for your team and customers."
    },
    {
        id: 3,
        title: "Fast and Intuitive User Experience",
        icon: Clock,
        description: "Fast load times, smooth interactions, and stability under real-world usage."
    },
    {
        id: 4,
        title: "Quality Assurance at Every Stage",
        icon: CheckCircle,
        description: "Rigorous testing, peer reviews, and performance checks ensure your web app meets the highest global standards before launch."
    },
    {
        id: 5,
        title: "Mobile-Responsive by Default",
        icon: Smartphone,
        description: "Full, responsive functionality across every device (desktops, tablets, and phones), so your team and customers can stay connected from anywhere, anytime."
    },
    {
        id: 6,
        title: "Transparent Collaboration",
        icon: Users,
        description: "Clients stay in the loop with clear communication, progress updates, and shared decision-making."
    },
    {
        id: 7,
        title: "Security & Compliance First",
        icon: Shield,
        description: "Built-in safeguards and adherence to industry standards -- data encryption, access controls, and compliance-ready architecture -- to protect data and build trust and confidence between you and your customers."
    },
    {
        id: 8,
        title: "Post-Launch Support That Lasts",
        icon: Box,
        description: "Ongoing monitoring, proactive maintenance, and quick response times. We're invested in your success beyond deployment."
    }
];

const toggleCard = (index) => {
    const newOpenCards = [...openCards.value];
    newOpenCards[index] = !newOpenCards[index];
    openCards.value = newOpenCards;
};

const handleScroll = () => {
    if (tekfolioEdgeSection.value && !cardsVisible.value) {
        const rect = tekfolioEdgeSection.value.getBoundingClientRect();
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
/* Tekfolio Brand Gradients */
.tekfolio-gradient {
    background: linear-gradient(180deg, #6B2FB5 0%, #3D28A6 100%);
}

.tekfolio-gradient-alt {
    background: linear-gradient(180deg, #7B3AC5 0%, #4527A0 100%);
}

.tekfolio-text {
    background: linear-gradient(180deg, #6B2FB5 0%, #3D28A6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Feature Card Styling */
.feature-card {
    position: relative;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(107, 47, 181, 0.2);
    overflow: hidden;
    transition: all 0.3s ease;
}

.feature-card:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(107, 47, 181, 0.4);
    transform: translateY(-4px);
}

/* Floating Image Animation */
.floating-image {
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* Slide Up Animation */
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
    animation: slideUp 0.7s ease-out forwards;
    opacity: 0;
}

/* Chevron Rotation */
.rotate-180 {
    transform: rotate(180deg);
}

/* Transitions */
.transition-all {
    transition: all 0.3s ease;
}
</style>