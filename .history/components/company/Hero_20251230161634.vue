<template>
    <section class="relative w-full h-72 md:h-[350px] overflow-hidden">
        <div class="absolute inset-0 flex">

            <!-- Left Side - Dark Background with Text -->
            <div
                class="w-full lg:w-[45%] bg-gray-900 flex items-center justify-center px-6 md:px-8 lg:px-16 relative z-10">
                <div class="text-center lg:text-left w-full max-w-2xl pt-6 md:pt-8 lg:pt-0">
                    <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3 lg:mb-4">
                        Your Brand Vision,<br /> Powered by Technology
                    </h1>
                    <p class="text-sm md:text-base text-gray-300 font-medium italic whitespace-nowrap">
                        Smart. Secure. Systems that simplify business.
                    </p>
                </div>
            </div>

            <!-- Right Side - Image with Gradient Fade -->
            <div class="hidden lg:block lg:w-[55%] relative">
                <!-- Gradient fade from gray-900 to transparent -->
                <div
                    class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent z-10 pointer-events-none">
                </div>

                <img :src="companyHero" alt="Tekfolio Team" class="absolute inset-0 w-full h-full object-cover" />
            </div>

        </div>
    </section>
</template>

<script setup>
import companyHero from '~/assets/img/companyhero.jpeg';
</script>

<style scoped>
/* Ensure smooth image loading */
img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}
</style>