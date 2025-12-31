<template>
    <section class="relative w-full h-72 md:h-[350px] overflow-hidden">
        <div class="absolute inset-0 flex">

            <!-- Left Side - Dark Background with Text (30%) -->
            <div
                class="w-full lg:w-[30%] bg-gradient-to-br from-gray-900 via-purple-900/90 to-blue-900/90 flex items-center justify-center px-6 md:px-8 lg:px-12 relative z-10">
                <div class="text-center lg:text-left max-w-xl">
                    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                        Your Brand Vision, Powered by Technology
                    </h1>
                    <p class="text-base md:text-lg text-gray-200 font-medium">
                        Smart. Secure. Systems that simplify business.
                    </p>
                </div>
            </div>

            <!-- Right Side - Image (70%) -->
            <div class="hidden lg:block lg:w-[70%] relative">
                <img :src="companyHero" alt="Tekfolio Team" class="absolute inset-0 w-full h-full object-cover" />
                <!-- Optional gradient overlay for better blend -->
                <div class="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-transparent"></div>
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