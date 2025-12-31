<template>
    <section class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div class="absolute inset-0 flex flex-col lg:flex-row">

            <!-- Left Side - Dark Background with Text -->
            <div
                class="w-full lg:w-[45%] xl:w-[40%] bg-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
                <!-- Gradient overlay that fades into the image -->
                <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent lg:bg-gradient-to-r lg:from-gray-900 lg:via-gray-900 lg:to-gray-900/0"></div>
                
                <div class="relative z-20 text-center lg:text-left max-w-2xl pt-12 lg:pt-0">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] md:leading-[1.2] mb-4 md:mb-6">
                        Your Brand Vision,<br>Powered by Technology
                    </h1>
                    <p class="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-xl mx-auto lg:mx-0">
                        Smart. Secure. Systems that simplify business.
                    </p>
                </div>
            </div>

            <!-- Right Side - Image -->
            <div class="w-full lg:w-[55%] xl:w-[60%] relative">
                <img 
                    :src="companyHero" 
                    alt="Tekfolio Team" 
                    class="absolute inset-0 w-full h-full object-cover object-center"
                />
                <!-- Enhanced gradient overlay for smooth blend -->
                <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent lg:bg-gradient-to-r lg:from-gray-900 lg:via-gray-900/50 lg:to-transparent"></div>
            </div>

        </div>
    </section>
</template>

<script setup>
import companyHero from '~/assets/img/companyhero.jpeg';
</script>

<style scoped>
/* Smooth image rendering */
img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

/* Smooth fade transition */
section * {
    transition: all 0.3s ease;
}

/* Ensure text breaks properly on all screens */
@media (max-width: 1024px) {
    h1 {
        line-height: 1.2 !important;
    }
}

@media (max-width: 768px) {
    h1 {
        line-height: 1.15 !important;
        font-size: 2.5rem !important;
    }
    
    p {
        font-size: 1.125rem !important;
    }
}
</style>