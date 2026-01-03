<template>
    <section class="w-full bg-white py-12 lg:py-16">
        <div class="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
            <!-- Brand Logo -->
            <div class="mb-8">
                <div class="inline-flex items-center justify-center w-24 h-24 rounded-full tekfolio-gradient">
                    <img src="/tekfolio.svg" alt="Tekfolio Logo" class="w-16 h-16" />
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
            <div class="flex items-center justify-center gap-2">
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