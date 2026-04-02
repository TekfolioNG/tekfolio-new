<template>
    <section class="relative bg-transparent">
        <div class="max-w-7xl mx-auto px-6 md:px-12">

            <!-- Headline -->
            <div class="text-center mb-6 md:mb-8">
                <h2
                    class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold mb-2">
                    <BadgeCheck class="w-7 h-7 md:w-8 md:h-8 text-purple-600 shrink-0" />
                    <span>Trusted &amp; Reviewed on</span>
                    <span class="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">World's
                        Leading
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

            <!-- Testimonial Scroll Strip -->
            <div class="mt-10 md:mt-14 overflow-hidden">
                <div class="testimonial-scroll-track">
                    <div v-for="(testimonial, index) in [...testimonials, ...testimonials]" :key="index"
                        class="testimonial-card">
                        <svg class="w-7 h-7 text-purple-400 opacity-40 mb-3 shrink-0" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p class="text-gray-700 text-sm leading-relaxed italic flex-1">{{ testimonial.quote }}</p>
                        <div class="mt-4 pt-4 border-t border-gray-100">
                            <p class="font-semibold text-gray-900 text-sm">{{ testimonial.name }}</p>
                            <p class="text-xs text-purple-600 font-medium">{{ testimonial.designation }}, {{
                                testimonial.company }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { BadgeCheck } from 'lucide-vue-next';

const testimonials = [
    {
        name: "Emeka Uchela",
        designation: "CEO",
        company: "Syntanium Energy Ltd",
        quote: "Tekfolio is a reliable service provider; they have handled over 4 projects for me, and they all turned out amazing 👏. I had a wonderful experience working with them. Kudos"
    },
    {
        name: "Wilson Samson",
        designation: "Managing Partner",
        company: "LiteraForge Ltd",
        quote: "My experience with Tekfolio Ltd has been remarkable. I greatly commend the team for their creativity, excellence, and customer-centric approach during conversations to ensure their clients feel heard, valued, and understood."
    },
    {
        name: "Regina Obi",
        designation: "Managing Director",
        company: "Sefa Energy Global Ltd",
        quote: "Exceptional and swift service delivery."
    },
    {
        name: "Gbolahan Shelika",
        designation: "Managing Partner",
        company: "Elevation Consulting Ltd",
        quote: "Tekfolio embodies everything a competent and professional digital partner should be. They took time to understand what we needed and made the whole process easy from start to finish."
    },
    {
        name: "James Ladipo",
        designation: "CEO",
        company: "Petabiz Nigeria",
        quote: "Tekfolio felt more like a partner than a vendor. Communication was clear, delivery met expectations, and they actually hit their deadlines."
    }
];
</script>

<style scoped>
.testimonial-scroll-track {
    display: flex;
    gap: 1.25rem;
    width: fit-content;
    animation: scroll-rtl 40s linear infinite;
}

.testimonial-scroll-track:hover {
    animation-play-state: paused;
}

.testimonial-card {
    flex-shrink: 0;
    width: 320px;
    background: #ffffff;
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
}

.testimonial-card:hover {
    box-shadow: 0 8px 28px -4px rgba(0, 0, 0, 0.13), 0 4px 10px -2px rgba(0, 0, 0, 0.08);
}

@keyframes scroll-rtl {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

@media (max-width: 640px) {
    .testimonial-card {
        width: 270px;
        padding: 1.25rem;
    }
}
</style>