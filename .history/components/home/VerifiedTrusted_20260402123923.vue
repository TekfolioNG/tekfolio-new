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
                        Leading B2B Platforms</span>
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

            <!-- Testimonial Section -->
            <div
                class="w-full relative bg-linear-to-r from-purple-900/95 to-blue-900/95 pt-1 pb-8 md:pb-12 mt-8 md:mt-12">
                <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
                    <div
                        class="bg-linear-to-b from-white to-gray-200 pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-6 md:px-10 lg:px-12 -mt-6 md:-mt-8">

                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                            <!-- Left Side - Client Info -->
                            <div class="lg:col-span-3 text-center lg:text-left">
                                <div class="space-y-2">
                                    <h3 class="text-lg md:text-xl font-bold text-gray-900">
                                        {{ testimonials[currentIndex].name }}
                                    </h3>
                                    <p class="text-base md:text-lg font-semibold text-gradient">
                                        {{ testimonials[currentIndex].designation }}
                                    </p>
                                    <p class="text-sm md:text-base text-gray-900">
                                        {{ testimonials[currentIndex].company }}
                                    </p>
                                </div>
                            </div>

                            <!-- Right Side - Quote -->
                            <div class="lg:col-span-9">
                                <div class="relative">
                                    <svg class="absolute -top-4 -left-2 w-10 h-10 text-purple-500 opacity-25"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p
                                        class="text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed pl-8 font-normal italic">
                                        {{ testimonials[currentIndex].quote }}
                                    </p>
                                </div>
                            </div>

                        </div>

                        <!-- Navigation Controls -->
                        <div class="flex items-center justify-center gap-4 mt-12 md:mt-16">
                            <button @click="previous" class="nav-button" aria-label="Previous testimonial">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div class="flex gap-2">
                                <button v-for="(_, index) in testimonials" :key="index" @click="goTo(index)"
                                    class="indicator-dot" :class="{ 'active': index === currentIndex }"
                                    :aria-label="`Go to testimonial ${index + 1}`">
                                </button>
                            </div>

                            <button @click="next" class="nav-button" aria-label="Next testimonial">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { BadgeCheck } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const currentIndex = ref(0);
let timer = null;

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

function next() {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
}

function previous() {
    currentIndex.value = currentIndex.value === 0
        ? testimonials.length - 1
        : currentIndex.value - 1;
}

function goTo(index) {
    currentIndex.value = index;
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 4000);
}

onMounted(() => {
    timer = setInterval(next, 4000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<style scoped>
.text-gradient {
    background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.05);
    color: #6B7280;
    transition: all 0.3s ease;
    border: 1.5px solid #D1D5DB;
    cursor: pointer;
}

.nav-button:hover {
    color: #7C3AED;
    border-color: #7C3AED;
    background: transparent;
}

.nav-button:active {
    transform: scale(0.95);
}

.indicator-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #D1D5DB;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.indicator-dot:hover {
    background: #9CA3AF;
}

.indicator-dot.active {
    background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
    width: 24px;
    border-radius: 4px;
}

@media (max-width: 1024px) {
    .nav-button {
        width: 32px;
        height: 32px;
    }
}

@media (max-width: 640px) {
    .nav-button {
        width: 28px;
        height: 28px;
    }

    .nav-button svg {
        width: 14px;
        height: 14px;
    }

    .indicator-dot {
        width: 6px;
        height: 6px;
    }

    .indicator-dot.active {
        width: 18px;
    }
}
</style>