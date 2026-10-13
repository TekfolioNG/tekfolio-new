<!-- app/components/common/ComingSoon.vue -->
<template>
    <section class="relative flex min-h-[70vh] items-center bg-[#0B0B14] px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pt-32">
        <!-- Ambient glow, echoes the Hero -->
        <div class="glow pointer-events-none absolute -left-32 -top-20 -z-10 h-[28rem] w-[28rem]" aria-hidden="true" />

        <div class="mx-auto max-w-2xl text-center">
            <p class="eyebrow fade-in text-xs text-[#2FB6FF]/80" style="--d: 0ms">Coming Soon</p>

            <h1 class="display fade-in mt-5 text-4xl font-bold leading-tight text-[#FAFBFC] sm:text-5xl"
                style="--d: 100ms">
                {{ title }}
            </h1>

            <p class="fade-in mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#E5E8ED]/75 sm:text-lg"
                style="--d: 220ms">
                {{ blurb }}
            </p>

            <div class="fade-in mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
                style="--d: 340ms">
                <NuxtLink to="/"
                    class="inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-gradient-to-r from-[#4A15A4] to-[#75138C] px-7 py-3.5 text-sm font-semibold text-[#FAFBFC] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[0.97] hover:brightness-110 hover:shadow-xl hover:shadow-[#75138C]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] active:scale-95 sm:w-auto">
                    Go Home
                </NuxtLink>
                <NuxtLink to="/contact"
                    class="text-sm font-medium text-[#E5E8ED]/75 underline decoration-white/25 underline-offset-4 transition-colors duration-200 hover:text-[#FAFBFC] hover:decoration-[#2FB6FF] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF]">
                    Contact Us
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    blurb: { type: String, required: true }
})
</script>

<style scoped>
.display,
.eyebrow {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}

.glow {
    background: radial-gradient(closest-side, rgba(74, 21, 164, 0.3), transparent);
}

.fade-in {
    opacity: 0;
    transform: translateY(16px);
    animation: rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: var(--d, 0ms);
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .fade-in {
        opacity: 1;
        transform: none;
        animation: none;
    }
}
</style>