<template>
    <div class="min-h-screen bg-white flex flex-col relative overflow-hidden">
        <!-- Header with Logo -->
        <header class="relative z-20 p-6 md:p-8">
            <NuxtLink to="/" class="logo-mobile-center">
                <div class="max-w-7xl mx-auto flex justify-center">
                    <img src="/tekfolio.png" alt="Tekfolio Logo" class="h-16 md:h-16" />
                </div>
            </NuxtLink>
        </header>

        <!-- Main Content Container -->
        <div class="flex-1 flex items-center justify-center relative">
            <!-- Large Background 404 - Slightly increased size, moved up and right -->
            <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-x-12 -translate-y-16">
                <span
                    class="text-[27rem] md:text-[38rem] font-bold text-gray-100 select-none opacity-20 tracking-wider">
                    404
                </span>
            </div>

            <!-- Content Grid -->
            <div class="relative z-10 max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="space-y-6 order-2 lg:order-1">
                        <!-- Heading -->
                        <h1
                            class="text-3xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-tight barlow-condensed">
                            You've reached a dead end.
                        </h1>

                        <!-- Body Text - Slightly reduced size -->
                        <div class="text-sm md:text-base lg:text-lg text-gray-900 space-y-3 leading-relaxed">
                            <p class="text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                                The page you're looking for is unavailable, moved, or quietly retired during a refactor.
                            </p>
                            <p class="text-lg md:text-xl lg:text-1xl text-gray-900 font-semibold">
                                Either way, let's get you where you need to be:
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row gap-3">
                            <NuxtLink to="/"
                                class="bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center text-sm">
                                Go Home
                            </NuxtLink>
                            <NuxtLink to="/case-studies"
                                class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm shadow-md hover:shadow-lg border border-gray-200">
                                View Our Work
                            </NuxtLink>
                            <NuxtLink to="/contact"
                                class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm shadow-md hover:shadow-lg border border-gray-200">
                                Contact Us
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Right Column - Lottie Animation -->
                    <div class="flex justify-center lg:justify-end relative order-1 lg:order-2">
                        <!-- Animation Container -->
                        <div class="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">

                            <!-- Lottie Animation -->
                            <div class="relative z-10 w-full h-full flex items-center justify-center">
                                <div id="lottie-404" class="w-full h-full"></div>
                                <!-- Subtle gradient overlay for depth -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Small Corner 404 Badge -->
        <div class="absolute top-6 right-6 opacity-20 hidden md:block">
            <span class="text-4xl font-bold text-gray-400 select-none">
                404
            </span>
        </div>

        <!-- Decorative elements -->
        <div
            class="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-50/30 to-purple-50/30 blur-3xl">
        </div>
        <div
            class="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-gray-50/20 to-blue-50/20 blur-2xl">
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Set page meta for SEO and proper 404 handling
useHead({
    title: '404 - Page Not Found | Tekfolio',
    meta: [
        { name: 'description', content: 'The page you are looking for could not be found.' },
        { name: 'robots', content: 'noindex, nofollow' }
    ]
})

// Set proper HTTP status code
setResponseStatus(404)

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

    // Initialize Lottie animation
    const initLottieAnimation = async () => {
        await loadLottieScript();

        const container = document.getElementById('lottie-404');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/28181fa6-0905-4ad0-9be7-45d9d1910108/8fnZk1UH83.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');
            player.style.width = '100%';
            player.style.height = '100%';
            container.appendChild(player);
        }
    };

    initLottieAnimation();
});
</script>

<style scoped>
/* Import Barlow Condensed font */
.barlow-condensed {
    font-family: 'Barlow Condensed', sans-serif;
}

/* Subtle float animation for background 404 */
@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(2deg);
    }
}

.absolute span {
    animation: float-slow 12s ease-in-out infinite;
}

/* Button hover effects */
a {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments - Updated for new sizes */
@media (max-width: 1024px) {
    .text-\[27rem\] {
        font-size: 22rem;
    }

    .text-\[38rem\] {
        font-size: 28rem;
    }

    .text-\[12rem\] {
        font-size: 10rem;
    }

    .text-\[16rem\] {
        font-size: 12rem;
    }
}

@media (max-width: 768px) {
    .text-\[27rem\] {
        font-size: 17rem;
    }

    .text-\[38rem\] {
        font-size: 20rem;
    }

    .text-\[12rem\] {
        font-size: 8rem;
    }

    .text-\[16rem\] {
        font-size: 10rem;
    }

    /* Stack buttons vertically on mobile */
    .flex-col {
        align-items: stretch;
    }

    .flex-col a {
        width: 100%;
    }
}

/* Ensure container doesn't get too small on very small screens */
@media (max-width: 640px) {
    .relative.w-80 {
        width: 280px;
        height: 280px;
    }
}
</style>