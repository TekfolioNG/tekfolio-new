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
                        What Clients Get When They Build Data Solutions With Us
                    </h2>
                    <h3 class="text-xl md:text-2xl font-medium tekfolio-text mb-5 text-center md:text-left">
                        The Tekfolio Edge for Data & Business Intelligence
                    </h3>
                    <p class="text-base md:text-lg leading-relaxed text-gray-700 text-center md:text-left">
                        We build data solutions that go beyond pretty dashboards—combining robust data engineering,
                        rigorous analysis, and business-context-aware reporting that empowers every layer of your
                        organization to act with confidence.

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
import { Bubbles, ChartPie, ChartScatter, CloudBackup, Database, LayoutDashboard, SearchCode, SmilePlus } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import webDesignImage from '~/assets/img/dataengineeringimg.png';

const openCards = ref([false, false, false, false, false, false, false, false]);
const cardsVisible = ref(false);
const tekfolioEdgeSection = ref(null);

const features = [
    {
        id: 1,
        title: "Data Pipeline Engineering ",
        icon: Database,
        description: "We design and build reliable pipelines that collect, clean, transform, and deliver data from multiple sources into a single, structured, and trustworthy system. No more manually reconciling reports from five different tools."
    },
    {
        id: 2,
        title: "Business Intelligence Dashboards",
        icon: LayoutDashboard,
        description: "Interactive, real-time dashboards tailored to your business metrics; designed for decision-makers, not data scientists. Your team sees what matters, when it matters, in a format they can act on immediately."
    },
    {
        id: 3,
        title: "Data Cleaning & Preparation",
        icon: Bubbles,
        description: "Raw data is rarely ready to use. We handle the messy, time-consuming work of identifying errors, removing duplicates, standardizing formats, and structuring datasets so your analysis is built on solid foundations."
    },
    {
        id: 4,
        title: "Exploratory Data Analysis (EDA)",
        icon: ChartScatter,
        description: "Before drawing conclusions, we dig deep into your data to surface patterns, anomalies, and relationships you may not have known existed—often revealing insights that reframe how you understand your business."
    },
    {
        id: 5,
        title: "Predictive Analytics & Forecasting",
        icon: SearchCode,
        description: "Using statistical models and introductory machine learning techniques, we help you move from understanding what happened to anticipating what's coming—whether that's demand forecasting, churn prediction, or revenue projections."
    },
    {
        id: 6,
        title: "Custom Reporting Systems",
        icon: ChartPie,
        description: "Automated, scheduled reports delivered to the right people at the right time. We replace manual, error-prone reporting workflows with reliable systems that save your team hours every week."
    },
    {
        id: 7,
        title: "Cloud-Based Data Infrastructure",
        icon: CloudBackup,
        description: "We build and manage data solutions on Google Cloud, AWS, and other leading platforms—scalable, secure, and cost-optimized for your current size and future growth."
    },
    {
        id: 8,
        title: "Actionable Recommendations, Not Just Numbers",
        icon: SmilePlus,
        description: "Data without context is just noise. We don't just deliver reports; we interpret them, highlight what's important, and provide clear recommendations your team can act on immediately."
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