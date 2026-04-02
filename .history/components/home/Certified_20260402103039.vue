<template>
    <section class="relative bg-gray-900 py-12 md:py-16">
        <div class="max-w-6xl mx-auto px-6 md:px-12">

            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-12">
                <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Our Google-Certified
                    <span class="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Expertise</span>
                </h2>
            </div>

            <!-- Badge Grid: 2 cols mobile, 3 cols desktop -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">

                <!-- Google ACE -->
                <div class="group bg-gray-800 rounded-2xl border border-gray-700 p-7 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-750"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.40), 0 2px 8px -2px rgba(0,0,0,0.30);">
                    <img src="/assets/img/google-ace.png" alt="Google Associate Cloud Engineer"
                        class="h-32 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                </div>

                <!-- GEAR Program -->
                <div class="group bg-gray-800 rounded-2xl border border-gray-700 p-7 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-750"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.40), 0 2px 8px -2px rgba(0,0,0,0.30);">
                    <img src="/assets/img/google-gear.png" alt="Google GEAR Program"
                        class="h-32 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                </div>

                <!-- Cloud Computing -->
                <div class="group bg-gray-800 rounded-2xl border border-gray-700 p-7 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-750"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.40), 0 2px 8px -2px rgba(0,0,0,0.30);">
                    <img src="/assets/img/google-cloud-computing.png" alt="Google Cloud Computing"
                        class="h-40 md:h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                </div>

                <!-- Cloud Security -->
                <div class="group bg-gray-800 rounded-2xl border border-gray-700 p-7 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-750"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.40), 0 2px 8px -2px rgba(0,0,0,0.30);">
                    <img src="/assets/img/google-cloud-security.png" alt="Google Cloud Security"
                        class="h-40 md:h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                </div>

                <!-- Google Developers — spans 2 cols to center on last row -->
                <div class="group bg-gray-800 rounded-2xl border border-gray-700 p-7 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:bg-gray-750 col-span-2 md:col-span-1"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.40), 0 2px 8px -2px rgba(0,0,0,0.30);">
                    <img src="/assets/img/google-developers.png" alt="Google Developers"
                        class="h-32 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No additional logic needed
</script>