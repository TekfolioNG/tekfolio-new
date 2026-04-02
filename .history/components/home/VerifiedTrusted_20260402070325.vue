<template>
    <section class="relative bg-white py-16 md:py-20 overflow-hidden border-t border-gray-100">

        <!-- Subtle background texture -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-6 md:px-12">

            <!-- Section Header -->
            <div class="text-center mb-12 md:mb-16">
                <!-- Eyebrow label -->
                <div
                    class="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-4">
                    <span class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></span>
                    <span class="text-xs font-semibold text-purple-700 uppercase tracking-widest">Third-Party
                        Verified</span>
                </div>

                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                    Trusted. Reviewed. Proven.
                </h2>
                <p class="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Don't take our word for it — here's what the world's leading B2B review platforms say about working
                    with us.
                </p>

                <!-- Aggregate star row -->
                <div
                    class="mt-5 inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-5 py-2.5">
                    <div class="flex gap-0.5">
                        <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <span class="text-sm font-bold text-gray-900">5.0</span>
                    <span class="text-sm text-gray-400">·</span>
                    <span class="text-sm text-gray-500">Across all major platforms</span>
                </div>
            </div>

            <!-- Platform Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                <!-- Clutch Card -->
                <a href="https://clutch.co/profile/tekfolio" target="_blank" rel="noopener noreferrer"
                    class="group relative bg-white rounded-2xl border border-gray-100 p-7 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    aria-label="View our Clutch profile">

                    <!-- Card top accent bar -->
                    <div
                        class="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>

                    <!-- Logo area -->
                    <div class="w-full flex items-center justify-center h-16">
                        <img src="/assets/img/clutch-review.png" alt="Clutch Reviews"
                            class="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    </div>

                    <!-- Stars -->
                    <div class="flex gap-1" aria-label="5 star rating">
                        <svg v-for="i in 5" :key="i" class="w-5 h-5 text-amber-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>

                    <!-- Rating & Review count -->
                    <div class="space-y-1">
                        <p class="text-2xl font-bold text-gray-900">5.0 <span
                                class="text-base font-normal text-gray-400">/ 5.0</span></p>
                        <p class="text-sm text-gray-500">Verified client reviews</p>
                    </div>

                    <!-- Descriptor -->
                    <div class="mt-auto pt-4 border-t border-gray-50 w-full">
                        <p class="text-xs text-gray-400 leading-relaxed">
                            The #1 ratings and reviews platform for B2B service providers globally.
                        </p>
                    </div>

                    <!-- Arrow indicator -->
                    <div
                        class="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                        <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>

                <!-- GoodFirms Card — featured/center -->
                <a href="https://www.goodfirms.co/company/tekfolio-ltd" target="_blank" rel="noopener noreferrer"
                    class="group relative bg-gradient-to-b from-purple-600 to-blue-600 rounded-2xl p-7 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    aria-label="View our GoodFirms profile">

                    <!-- Glassy top badge -->
                    <div
                        class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md border border-purple-100">
                        <span
                            class="text-[10px] font-bold text-purple-700 uppercase tracking-widest whitespace-nowrap">Top
                            Rated</span>
                    </div>

                    <!-- Logo area -->
                    <div class="w-full flex items-center justify-center h-16 mt-2">
                        <img src="/assets/img/goodfirms-review.png" alt="GoodFirms Reviews"
                            class="h-14 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    </div>

                    <!-- Stars -->
                    <div class="flex gap-1" aria-label="5 star rating">
                        <svg v-for="i in 5" :key="i" class="w-5 h-5 text-amber-300" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>

                    <!-- Rating -->
                    <div class="space-y-1">
                        <p class="text-2xl font-bold text-white">5.0 <span class="text-base font-normal text-white/60">/
                                5.0</span></p>
                        <p class="text-sm text-white/70">Verified client reviews</p>
                    </div>

                    <!-- Descriptor -->
                    <div class="mt-auto pt-4 border-t border-white/10 w-full">
                        <p class="text-xs text-white/60 leading-relaxed">
                            A trusted research platform connecting businesses with the best IT & software companies.
                        </p>
                    </div>

                    <!-- Arrow indicator -->
                    <div class="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <svg class="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>

                <!-- Google Reviews Card -->
                <a href="https://www.google.com/search?q=tekfolio" target="_blank" rel="noopener noreferrer"
                    class="group relative bg-white rounded-2xl border border-gray-100 p-7 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="View our Google reviews">

                    <!-- Card top accent bar -->
                    <div
                        class="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>

                    <!-- Logo area -->
                    <div class="w-full flex items-center justify-center h-16">
                        <img src="/assets/img/google-review.png" alt="Google Reviews"
                            class="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
                    </div>

                    <!-- Stars -->
                    <div class="flex gap-1" aria-label="5 star rating">
                        <svg v-for="i in 5" :key="i" class="w-5 h-5 text-amber-400" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>

                    <!-- Rating -->
                    <div class="space-y-1">
                        <p class="text-2xl font-bold text-gray-900">5.0 <span
                                class="text-base font-normal text-gray-400">/ 5.0</span></p>
                        <p class="text-sm text-gray-500">Verified client reviews</p>
                    </div>

                    <!-- Descriptor -->
                    <div class="mt-auto pt-4 border-t border-gray-50 w-full">
                        <p class="text-xs text-gray-400 leading-relaxed">
                            Reviews from real clients on the world's most trusted search and review platform.
                        </p>
                    </div>

                    <!-- Arrow indicator -->
                    <div
                        class="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                        <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>

            </div>

            <!-- Bottom reassurance strip -->
            <div
                class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-gray-400">
                <div class="flex items-center gap-2">
                    <!-- Shield check icon -->
                    <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>All reviews independently verified</span>
                </div>
                <div class="hidden sm:block w-px h-4 bg-gray-200"></div>
                <div class="flex items-center gap-2">
                    <!-- Globe icon -->
                    <svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Clients across Nigeria, UK, USA & beyond</span>
                </div>
                <div class="hidden sm:block w-px h-4 bg-gray-200"></div>
                <div class="flex items-center gap-2">
                    <!-- Sparkle / award icon -->
                    <svg class="w-4 h-4 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>100% satisfaction commitment</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
// No additional logic needed — all links and data are static
</script>