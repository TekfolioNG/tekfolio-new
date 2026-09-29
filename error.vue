<!-- error.vue -->
<template>
    <div class="min-h-screen bg-[#0B0B14] flex flex-col relative overflow-hidden">
        <!-- Header with Logo -->
        <header class="relative z-20 p-6 md:p-8">
            <NuxtLink to="/" class="flex justify-center max-w-7xl mx-auto" @click.prevent="goHome">
                <img src="/img/tekfolio-logo.png" alt="Tekfolio Logo" class="h-16 md:h-16" />
            </NuxtLink>
        </header>

        <!-- Main Content Container -->
        <div class="flex-1 flex items-center justify-center relative">
            <!-- Large background status code -->
            <div
                aria-hidden="true"
                class="absolute inset-0 flex items-center justify-center pointer-events-none transform translate-x-12 -translate-y-16">
                <span class="status-float text-[12rem] sm:text-[18rem] md:text-[26rem] lg:text-[32rem] font-bold text-white/[0.04] select-none tracking-wider">
                    {{ statusCode }}
                </span>
            </div>

            <!-- Ambient brand glow, matches the blog hero treatment -->
            <div
                aria-hidden="true"
                class="pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#6B2A61] opacity-30 blur-[120px]" />

            <!-- Content Grid -->
            <div class="relative z-10 max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Left Column - Text Content -->
                    <div class="space-y-6 order-2 lg:order-1">
                        <!-- Heading -->
                        <h1 class="display text-3xl md:text-5xl lg:text-5xl font-bold text-[#FAFBFC] leading-tight">
                            {{ heading }}
                        </h1>

                        <!-- Body Text -->
                        <div class="space-y-3 leading-relaxed">
                            <p class="text-lg md:text-xl text-[#E5E8ED]/90 font-medium">
                                {{ description }}
                            </p>
                            <p class="text-base md:text-lg text-[#E5E8ED]/60">
                                Nothing lives here.
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row gap-3">
                            <a href="/" @click.prevent="goHome"
                                class="bg-gradient-to-r from-[#7B3AC5] to-[#4527A0] hover:shadow-lg hover:shadow-[#7B3AC5]/25 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center text-sm">
                                Go Home
                            </a>
                            <a href="/case-studies" @click.prevent="goTo('/case-studies')"
                                class="bg-white/5 hover:bg-white/10 text-[#FAFBFC] px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm border border-[#E5E8ED]/10 hover:border-[#E5E8ED]/25">
                                View Our Work
                            </a>
                            <a href="/contact" @click.prevent="goTo('/contact')"
                                class="bg-white/5 hover:bg-white/10 text-[#FAFBFC] px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm border border-[#E5E8ED]/10 hover:border-[#E5E8ED]/25">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <!-- Right Column - Lottie Animation -->
                    <div class="flex justify-center lg:justify-end relative order-1 lg:order-2">
                        <div class="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                            <div class="relative z-10 w-full h-full flex items-center justify-center">
                                <div id="lottie-404" class="w-full h-full"></div>
                                <div
                                    aria-hidden="true"
                                    class="absolute inset-0 bg-gradient-to-t from-[#0B0B14]/20 to-transparent pointer-events-none">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    error: {
        type: Object,
        required: true
    }
})

const statusCode = computed(() => props.error?.statusCode || 500)

// Copy varies by the real error type, rather than always assuming "not found".
// Anything outside a plain 404 (503 from Sanity being unreachable, a generic
// 500, etc.) gets a different heading so the message stays honest about
// what actually happened.
const heading = computed(() => {
    if (statusCode.value === 404) return "You've reached a dead end."
    if (statusCode.value === 503) return "A service we depend on is temporarily down. This isn't your fault, try again shortly."
    return 'Something went wrong.'
})

const description = computed(() => {
    if (statusCode.value === 404) {
        return "This page doesn't exist."
    }
    if (statusCode.value === 503) {
        return "One of our systems is temporarily down. Try again in a few minutes."
    }
    return "An unexpected error occurred on our end. We're looking into it."
})

// Sets the response status to whatever the real error carries, instead of
// hardcoding 404 for every error that reaches this page.
if (import.meta.server) {
    setResponseStatus(statusCode.value)
}

useHead({
    title: () => `${statusCode.value} - ${statusCode.value === 404 ? 'Page Not Found' : 'Error'} | Tekfolio`,
    meta: [
        { name: 'description', content: () => description.value },
        // Only a genuine 404 should tell crawlers to drop the page from
        // the index; a temporary 503 shouldn't be treated the same way.
        { name: 'robots', content: () => statusCode.value === 404 ? 'noindex, nofollow' : 'noindex' }
    ]
})

// Fatal errors leave the app in an error state until explicitly cleared.
// A plain NuxtLink navigation away from this page does not clear that
// state, so every exit path here goes through clearError instead.
const goHome = () => clearError({ redirect: '/' })
const goTo = (path) => clearError({ redirect: path })

onMounted(() => {
    const loadLottieScript = async () => {
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script')
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
            script.type = 'module'
            document.head.appendChild(script)

            await new Promise((resolve) => {
                script.onload = resolve
            })
        }
    }

    const initLottieAnimation = async () => {
        await loadLottieScript()

        const container = document.getElementById('lottie-404')
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player')
            player.setAttribute('src', 'https://lottie.host/28181fa6-0905-4ad0-9be7-45d9d1910108/8fnZk1UH83.lottie')
            player.setAttribute('background', 'transparent')
            player.setAttribute('speed', '1')
            player.setAttribute('loop', '')
            player.setAttribute('autoplay', '')
            player.style.width = '100%'
            player.style.height = '100%'
            container.appendChild(player)
        }
    }

    initLottieAnimation()
})
</script>

<style scoped>
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

@keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
}

.status-float {
    animation: float-slow 12s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
    .status-float {
        animation: none;
    }
}
</style>