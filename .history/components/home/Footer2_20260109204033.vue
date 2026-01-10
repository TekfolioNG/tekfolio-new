<template>
    <footer class="bg-gray-900 text-gray-300">



        <!-- Main Footer Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

            <!-- Top Section: Logo, Solutions, Company, and Contact (4 columns) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                <!-- Logo and About -->
                <div class="space-y-4 text-center md:text-left md:pl-4 md:-mr-8">
                    <!-- Logo -->
                    <NuxtLink to="/" class="inline-block">
                        <img src="/tekfolio.svg" alt="Tekfolio Logo" class="h-16 lg:h-18 mx-auto md:mx-0" />
                    </NuxtLink>

                    <!-- About Text -->
                    <p class="text-gray-300 text-base leading-relaxed">
                        Tekfolio builds fast, reliable digital products for modern businesses.
                        We combine thoughtful design, clean engineering, and practical problem-solving to deliver
                        software that
                        scales.
                    </p>
                </div>

                <!-- Solutions Column -->
                <div class="text-center md:text-left md:pl-8 md:-mr-4">
                    <h3 class="text-white font-semibold mb-4 text-lg">OUR SOLUTIONS</h3>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/web-solutions"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Enterprise Web Solutions
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/mobile-apps"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Mobile App Development
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/cloud-security"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Cloud Migration & Security
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/creative-coding"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Data Engineering & Analytics
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/seo-performance"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                SEO & Performance
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/creative-coding"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Creative Coding
                            </NuxtLink>
                        </li>

                    </ul>
                </div>

                <!-- Company Column -->
                <div class="text-center md:text-left md:ml-12">
                    <h3 class="text-white font-semibold mb-4 text-lg">OUR COMPANY</h3>
                    <ul class="space-y-3">
                        <li>
                            <NuxtLink to="/company"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                About Tekfolio
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/team"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Our Team
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/case-studies"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Our Work
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Blog & Insights
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/careers"
                                class="text-gray-400 hover:text-white hover:underline transition-colors">
                                Careers & Culture
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact Information Column -->
                <div class="text-center md:text-left md:ml-4 ">
                    <h3 class="text-white font-semibold mb-4 text-lg">CONTACT US</h3>
                    <div class="space-y-3">
                        <!-- Address -->
                        <div class="space-y-1">
                            <p class="text-gray-400 text-sm">77 Awolowo Road, MAN House</p>
                            <p class="text-gray-400 text-sm">Ikeja, Lagos, Nigeria</p>
                        </div>

                        <!-- Phone -->
                        <p class="text-gray-300">
                            <span class="text-gray-500">Phone:</span>
                            <a href="tel:+2347088547450"
                                class="hover:text-white transition-colors block md:inline md:ml-2 mt-1 md:mt-0">
                                +234 708 854 7450
                            </a>
                        </p>

                        <div class="space-y-2">
                            <p class="text-gray-300">
                                <span class="text-gray-500">Enquiry:</span>
                                <a href="mailto:hello@tekfolio.ng"
                                    class="hover:text-white transition-colors block md:inline md:ml-2 mt-1 md:mt-0">
                                    hello@tekfolio.ng
                                </a>
                            </p>
                            <p class="text-gray-300">
                                <span class="text-gray-500">Help:</span>
                                <a href="mailto:support@tekfolio.ng"
                                    class="hover:text-white transition-colors block md:inline md:ml-2 mt-1 md:mt-0">
                                    support@tekfolio.ng
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Bottom Section: Copyright, Legal Links, and Social -->
            <div class="border-t border-gray-800 pt-8">
                <div
                    class="flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left space-y-6 lg:space-y-0">

                    <!-- Copyright -->
                    <div>
                        <p class="text-gray-500 text-sm">
                            © {{ currentYear }} Tekfolio. All rights reserved.
                        </p>
                        <p class="text-gray-500 text-sm mt-1">
                            Proudly built in Nigeria, serving global clients.
                        </p>
                    </div>

                    <!-- Legal Links (Center on Desktop) -->
                    <div class="flex items-center justify-center space-x-6">
                        <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </NuxtLink>
                        <span class="text-gray-600">•</span>
                        <NuxtLink to="/terms-of-service"
                            class="text-gray-400 hover:text-white transition-colors text-sm">
                            Terms of Service
                        </NuxtLink>
                    </div>

                    <!-- Social Links -->
                    <div class="flex items-center justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Back to Top Button -->
        <button @click="scrollToTop"
            class="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-purple-900/95 to-blue-900/95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
            aria-label="Scroll to top">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>
a,
button {
    transition: all 0.2s ease;
}
</style>