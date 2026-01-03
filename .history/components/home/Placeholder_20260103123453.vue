<template>
    <section class="w-full">
        <div class="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
            <!-- Icon -->
            <div class="mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full tekfolio-gradient">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                        </path>
                    </svg>
                </div>
            </div>

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Content Coming Soon
            </h2>

            <!-- Description -->
            <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                This section is currently under construction. Check back soon for exciting updates and new content.
            </p>

            <!-- Decorative Element -->
            <div class="flex items-center justify-center gap-2 mb-24">
                <div class="w-2 h-2 bg-[#6B2FB5] rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                <div class="w-2 h-2 bg-[#5B1FA6] rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                <div class="w-2 h-2 bg-[#4527A0] rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
// No props or logic needed for basic placeholder
</script>

<style scoped>
/* Tekfolio brand gradient */
.tekfolio-gradient {
    background: linear-gradient(180deg, #6B2FB5 0%, #3D28A6 100%);
}

/* Optional: Custom animation timing if needed */
.animate-bounce {
    animation: bounce 1.5s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>