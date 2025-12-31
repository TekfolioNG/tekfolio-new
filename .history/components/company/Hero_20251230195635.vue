<template>
    <section class="relative w-full h-72 md:h-[350px] overflow-hidden">
        <div class="absolute inset-0 flex flex-col lg:flex-row">

            <!-- Left Side - Darkened overlay with Text -->
            <div
                class="w-full lg:w-[35%] xl:w-[30%] flex items-center justify-center px-6 md:px-10 lg:px-14 relative z-10">
                <!-- Darkened gradient overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/60 lg:to-black/40">
                </div>

                <div class="relative z-20 text-center lg:text-left max-w-2xl pt-12">
                    <h1
                        class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight md:leading-snug mb-2 md:mb-4">
                        Your Brand Vision, <br class="hidden lg:block" />Powered by Technology
                    </h1>
                    <p class="text-sm md:text-base text-gray-300 italic whitespace-nowrap">
                        Smart. Secure. Systems that simplify business.
                    </p>
                </div>
            </div>

            <!-- Right Side - Image (Background for entire section) -->
            <div class="w-full lg:w-[65%] xl:w-[70%] relative">
                <!-- Image is now background only -->
            </div>

        </div>

        <!-- Background Image -->
        <img :src="companyHero" alt="Tekfolio Team"
            class="absolute inset-0 w-full h-full object-cover object-center -z-10" />
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

/* Ensure text stays on one line */
p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Responsive text line breaking */
@media (max-width: 1024px) {
    h1 {
        line-height: 1.15 !important;
    }
}

/* Force one line on mobile with ellipsis if needed */
@media (max-width: 768px) {
    p {
        font-size: 0.875rem !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;
        margin: 0 auto;
    }

    h1 {
        font-size: 1.75rem !important;
        line-height: 1.1 !important;
    }
}

/* Extra small screens */
@media (max-width: 480px) {
    p {
        font-size: 0.8125rem !important;
        max-width: 95%;
    }

    h1 {
        font-size: 1.5rem !important;
    }
}
</style>