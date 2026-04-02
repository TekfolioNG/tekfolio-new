<template>
    <section>
        <!-- Top edge line -->
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div class="relative max-w-7xl mx-auto px-6 md:px-12">

            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-12">

                <!-- Eyebrow pill with lock icon -->
                <div
                    class="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 mb-5 shadow-md">
                    <ShieldCheck class="w-4 h-4 text-purple-600 shrink-0" />
                    <span class="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Verified on World's Leading B2B Platforms
                    </span>
                </div>

                <!-- Headline with BadgeCheck icon -->
                <h2
                    class="flex items-center justify-center gap-2.5 text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    <BadgeCheck class="w-7 h-7 md:w-8 md:h-8 text-purple-600 shrink-0" />
                    Trusted by Businesses in Nigeria for Quality &amp; Security
                </h2>

            </div>

            <!-- Platform Cards — logo centered top, stars below -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

                <!-- Clutch -->
                <a href="https://clutch.co/profile/tekfolio" target="_blank" rel="noopener noreferrer"
                    aria-label="View our Clutch profile"
                    class="group bg-white rounded-2xl border border-gray-200 px-7 py-7 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.14), 0 2px 8px -2px rgba(0,0,0,0.10);">
                    <img src="/assets/img/clutch-review.png" alt="Clutch"
                        class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    <div class="flex gap-1" aria-label="5 star rating">
                        <svg v-for="i in 5" :key="i" class="w-6 h-6 text-amber-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </a>

                <!-- GoodFirms -->
                <a href="https://www.goodfirms.co/company/tekfolio-ltd" target="_blank" rel="noopener noreferrer"
                    aria-label="View our GoodFirms profile"
                    class="group bg-white rounded-2xl border border-gray-200 px-7 py-7 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.14), 0 2px 8px -2px rgba(0,0,0,0.10);">
                    <img src="/assets/img/goodfirms-review.png" alt="GoodFirms"
                        class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    <div class="flex gap-1" aria-label="5 star rating">
                        <svg v-for="i in 5" :key="i" class="w-6 h-6 text-amber-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </a>

                <!-- Google Reviews -->
                <a href="https://www.google.com/search?q=tekfolio" target="_blank" rel="noopener noreferrer"
                    aria-label="View our Google reviews"
                    class="group bg-white rounded-2xl border border-gray-200 px-7 py-7 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    style="box-shadow: 0 6px 24px -4px rgba(0,0,0,0.14), 0 2px 8px -2px rgba(0,0,0,0.10);">
                    <img src="/assets/img/google-review.png" alt="Google Reviews"
                        class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    <div class="flex gap-1" aria-label="5 star rating">
                        <svg v-for="i in 5" :key="i" class="w-6 h-6 text-amber-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1.0 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </a>

            </div>
        </div>

        <!-- Bottom shadow band -->
        <div class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-gray-400/60 to-transparent">
        </div>
        <div
            class="absolute inset-x-0 -bottom-1 h-3 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent blur-sm">
        </div>
    </section>
</template>

<script setup>
import { BadgeCheck, ShieldCheck } from 'lucide-vue-next';
</script>