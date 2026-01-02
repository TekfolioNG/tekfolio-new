<template>
    <!-- Who We Are Section - Professional Tech Design -->
    <section class="w-full bg-white py-16 lg:py-24 relative overflow-hidden">

        <!-- Subtle tech pattern background -->
        <div class="absolute inset-0 opacity-[0.02]"
            style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 40px 40px;">
        </div>

        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                <!-- Text Content - Left Column (7 columns) -->
                <div class="lg:col-span-7">
                    <!-- Section Title with accent -->
                    <div class="mb-8">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                            <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">About
                                Tekfolio</span>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Who We Are
                        </h2>
                    </div>

                    <!-- Content with refined typography -->
                    <div class="space-y-5 text-gray-700">
                        <p class="text-lg md:text-xl leading-relaxed font-medium text-gray-900">
                            Tekfolio builds reliable, scalable digital solutions for modern organizations.
                        </p>

                        <p class="text-base md:text-lg leading-relaxed">
                            We work at the intersection of clean engineering, thoughtful design, and practical
                            problem-solving. We're Nigeria-based, but our standards, thinking, and delivery are global.
                        </p>

                        <p class="text-base md:text-lg leading-relaxed">
                            Every product we build is designed to last, adapt, and support real business growth—not just
                            look good at launch. As a technology partner, we focus on systems that function smoothly for
                            the target user.
                        </p>

                        <p class="text-base md:text-lg leading-relaxed">
                            From digital platforms to cloud systems and data-driven tools, our goal is to help clients
                            and their customers work, live, and think better.
                        </p>

                        <div class="pt-4 border-l-4 border-purple-700 pl-6 my-6">
                            <p class="text-base md:text-lg leading-relaxed font-medium text-gray-800">
                                That's why we build with intention from day one. We ask the right questions early. We
                                design for people, not just screens. We engineer for reliability, not shortcuts.
                            </p>
                        </div>

                        <p class="text-base md:text-lg leading-relaxed">
                            We approach every engagement as a long-term partnership, not a one-off transaction. We work
                            with forward-thinking businesses, institutions, and organizations that value clarity,
                            long-term thinking, and engineering discipline over shortcuts and hype.
                        </p>

                        <p class="text-base md:text-lg leading-relaxed font-medium text-gray-900">
                            We're here to help you build systems you can rely on—long after launch.
                        </p>
                    </div>

                    <!-- Optional stats or highlights -->
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                        <div>
                            <div class="text-3xl font-bold text-gradient mb-1">40+</div>
                            <div class="text-sm text-gray-600 font-medium">Projects Delivered</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gradient mb-1">95%+</div>
                            <div class="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-gradient mb-1">20+</div>
                            <div class="text-sm text-gray-600 font-medium">Years Combined Expertise</div>
                        </div>
                    </div>
                </div>

                <!-- Image - Right Column (5 columns) -->
                <div class="lg:col-span-5">
                    <div class="sticky top-24">
                        <!-- Card-style image container -->
                        <div class="relative rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                            <picture>
                                <source :srcset="whoWeAre" type="image/avif" />
                                <source :srcset="whoWeAre.replace('.avif', '.webp')" type="image/webp" />
                                <img :src="whoWeAre" alt="Tekfolio Team"
                                    class="w-full h-full aspect-[4/5] object-cover" />
                            </picture>

                            <!-- Subtle gradient overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
                        </div>

                        <!-- Floating accent card -->
                        <div
                            class="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-700 to-blue-600 text-white p-6 rounded-xl shadow-2xl max-w-[200px] hidden lg:block">
                            <div class="text-sm font-semibold mb-1">Trusted Partner</div>
                            <div class="text-xs text-white/90">Building digital excellence since day one</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import whoWeAre from '~/assets/img/whoweare-tekfolio.avif';
</script>

<style scoped>
/* Brand gradient for numbers */
.text-gradient {
    background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Sticky behavior for image on scroll */
.sticky {
    position: sticky;
}
</style>