<template>
    <section class="relative w-full h-72 md:h-[350px] overflow-hidden">
        <div class="absolute inset-0 flex flex-col lg:flex-row">

            <!-- Left Side - Dark Background with Text -->
            <div
                class="w-full lg:w-[35%] xl:w-[30%] bg-gray-900 flex items-center justify-center px-6 md:px-10 lg:px-14 relative z-10">
                <!-- Gradient overlay that fades into the image -->
                <div
                    class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent lg:bg-gradient-to-r lg:from-gray-900 lg:via-gray-900 lg:to-gray-900/0">
                </div>

                <div class="relative z-20 text-center lg:text-left max-w-2xl pt-8 md:pt-0">
                    <h1
                        class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight md:leading-snug mb-2 md:mb-4">
                        Your Brand Vision,<br>Powered by Technology
                    </h1>
                    <p class="text-sm md:text-base text-gray-300 italic">
                        Smart. Secure. Systems that simplify business.
                    </p>
                </div>
            </div>

            <!-- Right Side - Image -->
            <div class="w-full lg:w-[65%] xl:w-[70%] relative">
                <img :src="companyHero" alt="Tekfolio Team"
                    class="absolute inset-0 w-full h-full object-cover object-center" />
                <!-- Enhanced gradient overlay for smooth blend -->
                <div
                    class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent lg:bg-gradient-to-r lg:from-gray-900 lg:via-gray-900/50 lg:to-transparent">
                </div>
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