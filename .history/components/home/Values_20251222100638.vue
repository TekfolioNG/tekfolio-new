<template>
    <section class="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden shadow-md">
        <!-- Subtle Background Elements -->
        <div class="absolute top-10 left-5 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute bottom-10 right-5 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl"></div>

        <div class="text-center md:text-left container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <!-- Three Column Grid Layout on Desktop -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                <!-- First Column: Heading and Description -->
                <div class="lg:col-span-1">
                    <h2
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                        Why Businesses, Organizations, and Authors <span class="text-[#4D7EFF]">Choose Us</span>
                    </h2>
                    <p class="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                        We don't just deliver projects, we craft experiences that move ideas from thought to tangible
                        success.
                    </p>
                </div>

                <!-- Second Column: First Image with Two Trust Points -->
                <div class="lg:col-span-1 space-y-4">
                    <div
                        class="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="~/assets/img/tailored-taiored.jpg" alt="Tailored Solutions"
                            class="w-full h-48 md:h-56 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none">
                        </div>
                    </div>

                    <div>
                        <div
                            class="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Tailored, compelling, and structured
                                    solutions</span> designed to fit your exact goals.
                            </p>
                        </div>

                        <div
                            class="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Stress-free process</span> that keeps you
                                focused while we handle the details.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Third Column: Second Image with Two Trust Points -->
                <div class="lg:col-span-1 space-y-4">
                    <div
                        class="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src="~/assets/img/results-taiored.jpg" alt="Proven Results"
                            class="w-full h-48 md:h-56 object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none">
                        </div>
                    </div>

                    <div>
                        <div
                            class="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Experienced professionals</span> who combine
                                business acumen with creative excellence.
                            </p>
                        </div>

                        <div
                            class="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300">
                            <div class="flex-shrink-0 w-2 h-2 bg-[#4D7EFF] rounded-full mt-2"></div>
                            <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                                <span class="font-semibold text-gray-900">Proven results</span> across industries,
                                authors, and organizations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped></style>