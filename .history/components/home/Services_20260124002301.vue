<template>
    <section class="w-full bg-white py-2 md:py-4">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            <!-- Service 1: Enterprise Web Solutions (Text Left, Animation Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
                <!-- Text Content -->
                <div class="space-y-3 lg:space-y-4">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Enterprise Web Solutions
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Scalable Web Platforms for Modern Teams
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        High-performance web applications built for speed, security, and long-term growth. We design and
                        engineer systems that stay stable under pressure and easy to maintain as your organizational
                        needs evolve.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/web-solutions"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>

                <!-- Lottie Animation -->
                <div class="relative h-[280px] md:h-[350px] lg:h-[400px]">
                    <div id="lottie-web-solutions" class="w-full h-full"></div>
                </div>
            </div>

            <!-- Service 2: Mobile App Development (Animation Left, Text Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
                <!-- Lottie Animation -->
                <div class="relative h-[280px] md:h-[350px] lg:h-[400px] order-2 lg:order-1">
                    <div id="lottie-mobile-apps" class="w-full h-full"></div>
                </div>

                <!-- Text Content -->
                <div class="space-y-3 lg:space-y-4 order-1 lg:order-2">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Mobile App Development
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Intuitive. Fast. Cross-Platform.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        Cross-platform mobile apps engineered for performance and designed for smooth and consistent
                        user experiences. We build mobile products that feel natural, work reliably, and deliver the
                        features your users value most.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/mobile-apps"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Service 3: Cloud Migration & Security (Text Left, Animation Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
                <!-- Text Content -->
                <div class="space-y-3 lg:space-y-4">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        Cloud & Data Engineering
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Cloud-Powered. Secure By Design.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        We design, migrate, and manage modern cloud infrastructure while building reliable data
                        pipelines and analytics-ready systems. Your platforms stay secure, scalable, and structured for
                        insight, performance, and growth.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/cloud-data-engineering"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>

                <!-- Lottie Animation -->
                <div class="relative h-[280px] md:h-[350px] lg:h-[400px]">
                    <div id="lottie-cloud" class="w-full h-full"></div>
                </div>
            </div>

            <!-- Service 4: SEO & Performance (Animation Left, Text Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 md:mb-12">
                <!-- Lottie Animation -->
                <div class="relative h-[200px] md:h-[270px] lg:h-[320px] order-2 lg:order-1">
                    <div id="lottie-seo-performance" class="w-full h-full"></div>
                </div>

                <!-- Text Content -->
                <div class="space-y-3 lg:space-y-4 order-1 lg:order-2">
                    <h2
                        class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-center lg:text-left">
                        SEO & Performance Optimization
                    </h2>
                    <h3 class="text-base md:text-lg font-semibold text-gradient text-center lg:text-left">
                        Get Found. Make Every Click Count.
                    </h3>
                    <p
                        class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
                        We optimize your digital assets for speed, search visibility, and real results. Make your pages
                        load faster, rank better, and convert more effectively.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                        <NuxtLink to="/seo-performance"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg border-2 border-gray-300 hover:border-purple-700 hover:text-purple-700 transition-all duration-200">
                            See How
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Start Project
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Load Lottie player script
    const loadLottieScript = async () => {
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }
    };

    // Initialize Lottie animations
    const initLottieAnimations = async () => {
        await loadLottieScript();

        const animations = [
            {
                containerId: 'lottie-web-solutions',
                src: 'https://lottie.host/b4d0bb6b-de7a-44ce-9c5a-239741aa1c35/hFAF5m26XR.lottie'
            },
            {
                containerId: 'lottie-mobile-apps',
                src: 'https://lottie.host/eb675f8c-4b20-48c4-ae92-3b864c447497/nT5yaC5iA0.lottie'
            },
            {
                containerId: 'lottie-cloud',
                src: 'https://lottie.host/49587e08-ce13-48ba-b024-f2aac1336a13/lMFiLM8kZl.lottie'
            },
            {
                containerId: 'lottie-seo-performance',
                src: 'https://lottie.host/f2972ad1-baf5-4306-9759-66d201cfbfbf/xCxWWMHFt2.lottie'
            }
        ];

        animations.forEach(({ containerId, src }) => {
            const container = document.getElementById(containerId);
            if (container && !container.querySelector('dotlottie-player')) {
                const player = document.createElement('dotlottie-player');
                player.setAttribute('src', src);
                player.setAttribute('background', 'transparent');
                player.setAttribute('speed', '1');
                player.setAttribute('loop', '');
                player.setAttribute('autoplay', '');
                player.style.width = '100%';
                player.style.height = '100%';
                container.appendChild(player);
            }
        });
    };

    initLottieAnimations();
});
</script>

<style scoped>
/* Brand gradient for headings */
.text-gradient {
    background: linear-gradient(135deg, #4C1D95 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>