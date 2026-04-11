<template>
    <section class="relative bg-transparent">
        <div class="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-12">

            <!-- Headline -->
            <div class="text-center mb-6 md:mb-8">
                <h2
                    class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-gray-900 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold mb-2">
                    <BadgeCheck class="w-7 h-7 md:w-8 md:h-8 text-purple-600 shrink-0" />
                    <span class="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Verified & Trusted</span>
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

            <!-- Testimonial Carousel -->
            <div class="mt-5 md:mt-6 border border-gray-100 rounded-2xl overflow-hidden"
                style="box-shadow: 0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.05);">

                <!-- Slider -->
                <div class="bg-white px-8 md:px-16 lg:px-24 pt-6">
                    <div class="slider-viewport">
                        <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                            <div v-for="(testimonial, index) in testimonials" :key="index" class="slider-slide">

                                <!-- Quote block -->
                                <div class="flex flex-col items-center text-center">

                                    <!-- Quote mark + text overlap wrapper -->
                                    <div class="quote-wrapper">
                                        <!-- Large decorative quote mark -->
                                        <svg class="quote-mark" fill="currentColor" viewBox="0 0 100 80"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 80V48.387C0 22.239 15.533 6.355 46.6 0l4.2 8.602C36.733 12.43 29.967 22.67 29.967 33.548H46.6V80H0zm53.4 0V48.387C53.4 22.239 68.933 6.355 100 0l4.2 8.602C90.133 12.43 83.367 22.67 83.367 33.548H100V80H53.4z" />
                                        </svg>

                                        <!-- Quote text — pulled up to overlap the mark -->
                                        <p
                                            class="quote-text text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-normal italic max-w-3xl mx-auto">
                                            {{ testimonial.quote }}
                                        </p>
                                    </div>

                                    <!-- Divider -->
                                    <div class="w-12 h-px bg-linear-to-r from-purple-400 to-blue-400 my-5"></div>

                                    <!-- Name + Company only -->
                                    <div class="flex flex-col items-center gap-0.5">
                                        <p class="text-gray-900 text-lg">{{ testimonial.name }}</p>
                                        <p class="text-base text-gray-700">{{ testimonial.company }}</p>
                                    </div>

                                </div>
                            </div>
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

.slider-viewport {
    overflow: hidden;
    width: 100%;
}

.slider-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
}

.slider-slide {
    flex-shrink: 0;
    width: 100%;
}

/* Quote overlap layout */
.quote-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.quote-mark {
    width: 68px;
    height: 68px;
    color: #7C3AED;
    opacity: 0.10;
    /* slightly larger, more transparent */
    margin-bottom: 0;
    /* remove bottom margin — text will overlap */
    position: relative;
    z-index: 0;
}

.quote-text {
    position: relative;
    z-index: 1;
    margin-top: -28px;
    /* pull text up to overlap the quote mark */
}
</style>