<template>
    <section class="relative bg-transparent">
        <div class="max-w-7xl mx-auto px-6 md:px-12">

            <!-- Headline -->
            <div class="text-center mb-6 md:mb-8">
                <h2
                    class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold mb-2">
                    <BadgeCheck class="w-7 h-7 md:w-8 md:h-8 text-purple-600 shrink-0" />
                    <span>Trusted &amp; Reviewed on</span>
                    <span class="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">World's Leading
                        B2B Platforms</span>
                </h2>
            </div>

            <!-- Platform Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

                <!-- Clutch -->
                <a href="https://clutch.co/profile/tekfolio" target="_blank" rel="noopener noreferrer"
                    aria-label="View our Clutch profile"
                    class="group bg-white rounded-xl border border-gray-100 px-6 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
                    <img src="/assets/img/clutch-review.png" alt="Clutch"
                        class="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    <div class="flex items-center gap-1.5" aria-label="4 out of 5 star rating">
                        <div class="flex gap-0.5">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span class="text-sm font-bold text-gray-800">4/5</span>
                    </div>
                </a>

                <!-- GoodFirms -->
                <a href="https://www.goodfirms.co/company/tekfolio-ltd" target="_blank" rel="noopener noreferrer"
                    aria-label="View our GoodFirms profile"
                    class="group bg-white rounded-xl border border-gray-100 px-6 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
                    <img src="/assets/img/goodfirms-review.png" alt="GoodFirms"
                        class="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    <div class="flex items-center gap-1.5" aria-label="4.5 out of 5 star rating">
                        <div class="flex gap-0.5">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span class="text-sm font-bold text-gray-800">4.5/5</span>
                    </div>
                </a>

                <!-- Google Reviews -->
                <a href="https://www.google.com/search?q=tekfolio" target="_blank" rel="noopener noreferrer"
                    aria-label="View our Google reviews"
                    class="group bg-white rounded-xl border border-gray-100 px-6 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
                    <img src="/assets/img/google-review.png" alt="Google Reviews"
                        class="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    <div class="flex items-center gap-1.5" aria-label="4.5 out of 5 star rating">
                        <div class="flex gap-0.5">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span class="text-sm font-bold text-gray-800">4.5/5</span>
                    </div>
                </a>

            </div>
        </div>
    </section>
</template>

<script setup>
import { BadgeCheck } from 'lucide-vue-next';
</script>