<template>
    <div class="w-full bg-white">
        <!-- How We Work Section -->
        <section class="w-full py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="text-center mb-16 lg:mb-20">
                    <div class="inline-flex items-center gap-2 mb-4">
                        <div class="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">Process</span>
                    </div>
                    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        How We <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
                    </h2>
                    <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A clear, collaborative process designed to keep everyone aligned—from first conversation to launch and beyond.
                        Each stage prioritises clarity, feedback, and transparency, so there are no surprises.
                    </p>
                </div>

                <!-- Process Steps Grid - 2 per row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <!-- Discovery -->
                    <div class="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 overflow-hidden hover:shadow-xl">
                        <button 
                            @click="toggleStep('discovery')"
                            class="w-full p-6 lg:p-8 flex items-start gap-4 text-left focus:outline-none"
                        >
                            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Discovery</h3>
                                    <svg 
                                        class="w-5 h-5 text-gray-400 transition-transform duration-300"
                                        :class="{ 'rotate-180': activeStep === 'discovery' }"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    We begin by listening. Understanding your goals, users, and constraints before writing a single line of code ensures every decision is intentional and grounded in real needs.
                                </p>
                            </div>
                        </button>
                        <transition name="slide">
                            <div v-if="activeStep === 'discovery'" class="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                                <div class="pt-6 text-gray-700">
                                    <h4 class="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                                    <ul class="space-y-2">
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Stakeholder interviews & goal alignment sessions</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>User research & market analysis</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Technical feasibility assessment</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Project scope definition & success metrics</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- Strategy -->
                    <div class="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 overflow-hidden hover:shadow-xl">
                        <button 
                            @click="toggleStep('strategy')"
                            class="w-full p-6 lg:p-8 flex items-start gap-4 text-left focus:outline-none"
                        >
                            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Strategy</h3>
                                    <svg 
                                        class="w-5 h-5 text-gray-400 transition-transform duration-300"
                                        :class="{ 'rotate-180': activeStep === 'strategy' }"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    We map out the path forward with clear milestones and timelines, and the right technical approach. Early planning and visual direction keep decisions focused and aligned.
                                </p>
                            </div>
                        </button>
                        <transition name="slide">
                            <div v-if="activeStep === 'strategy'" class="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                                <div class="pt-6 text-gray-700">
                                    <h4 class="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                                    <ul class="space-y-2">
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Detailed project roadmap & timeline</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Technical architecture blueprint</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Resource planning & team allocation</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Risk assessment & mitigation strategy</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- Prototyping & UI/UX -->
                    <div class="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 overflow-hidden hover:shadow-xl">
                        <button 
                            @click="toggleStep('prototyping')"
                            class="w-full p-6 lg:p-8 flex items-start gap-4 text-left focus:outline-none"
                        >
                            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Prototyping & UI/UX</h3>
                                    <svg 
                                        class="w-5 h-5 text-gray-400 transition-transform duration-300"
                                        :class="{ 'rotate-180': activeStep === 'prototyping' }"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    Ideas come to life through interactive prototypes. You can review, test, and refine the experience early, reducing guesswork and costly changes later.
                                </p>
                            </div>
                        </button>
                        <transition name="slide">
                            <div v-if="activeStep === 'prototyping'" class="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                                <div class="pt-6 text-gray-700">
                                    <h4 class="font-semibold text-gray-900 mb-3">Process Includes:</h4>
                                    <ul class="space-y-2">
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Wireframing & user flow mapping</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Interactive prototype development</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>User testing & feedback integration</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Design system establishment</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- Build -->
                    <div class="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 overflow-hidden hover:shadow-xl">
                        <button 
                            @click="toggleStep('build')"
                            class="w-full p-6 lg:p-8 flex items-start gap-4 text-left focus:outline-none"
                        >
                            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Build</h3>
                                    <svg 
                                        class="w-5 h-5 text-gray-400 transition-transform duration-300"
                                        :class="{ 'rotate-180': activeStep === 'build' }"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    Development happens in clear stages, with regular updates and shared progress. Clean code, performance best practices, and scalable architecture are standard.
                                </p>
                            </div>
                        </button>
                        <transition name="slide">
                            <div v-if="activeStep === 'build'" class="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                                <div class="pt-6 text-gray-700">
                                    <h4 class="font-semibold text-gray-900 mb-3">Development Principles:</h4>
                                    <ul class="space-y-2">
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Agile sprints with weekly progress demos</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Code reviews & automated testing</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Performance optimization & security audits</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Continuous integration & deployment</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- Launch & Grow -->
                    <div class="group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 overflow-hidden hover:shadow-xl md:col-span-2">
                        <button 
                            @click="toggleStep('launch')"
                            class="w-full p-6 lg:p-8 flex items-start gap-4 text-left focus:outline-none"
                        >
                            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Launch & Grow</h3>
                                    <svg 
                                        class="w-5 h-5 text-gray-400 transition-transform duration-300"
                                        :class="{ 'rotate-180': activeStep === 'launch' }"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
                                    We deploy with confidence, monitor performance, and support ongoing improvements. Your product remains stable, secure, and ready to evolve as your needs change.
                                </p>
                            </div>
                        </button>
                        <transition name="slide">
                            <div v-if="activeStep === 'launch'" class="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-100">
                                <div class="pt-6 text-gray-700">
                                    <h4 class="font-semibold text-gray-900 mb-3">Post-Launch Support:</h4>
                                    <ul class="space-y-2">
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Performance monitoring & analytics setup</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>User feedback collection & analysis</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Maintenance planning & feature roadmap</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Security updates & compliance monitoring</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </section>

        <!-- You'll Love Working With Us Section -->
        <section class="w-full py-20 lg:py-28 bg-gradient-to-b from-gray-50/50 to-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left Column - Text Content -->
                    <div>
                        <div class="mb-8">
                            <div class="inline-flex items-center gap-2 mb-4">
                                <div class="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                                <span class="text-sm font-semibold tracking-wider text-gray-500 uppercase">Partnership</span>
                            </div>
                            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                You'll Love <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Working With Us</span> If…
                            </h2>
                        </div>

                        <div class="space-y-8">
                            <div class="flex items-start gap-4 group">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">You care about long-term value, not just launch day</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We build systems designed to evolve and scale with your business, ensuring continued ROI well beyond initial deployment.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4 group">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">You prefer clarity over jargon</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We communicate in plain language, provide transparent updates, and ensure you understand every decision and milestone.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4 group">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">You see technology as an enabler, not a vanity asset</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We focus on solutions that solve real problems and drive measurable results, avoiding unnecessary complexity and trendy tech for its own sake.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4 group">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">You value thoughtful progress over rushed delivery</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We prioritize quality and strategic thinking over arbitrary deadlines, ensuring each deliverable meets our high standards and your long-term goals.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4 group">
                                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">You want a partner who thinks with you, not just executes tasks</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We engage as strategic advisors, bringing expertise and perspective to help shape your vision and navigate complex challenges together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Visual Element -->
                    <div class="relative">
                        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
                            <div class="max-w-md mx-auto">
                                <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-center mb-6">The Right Partnership Matters</h3>
                                <p class="text-gray-300 text-center leading-relaxed mb-8">
                                    Great products are built through collaboration, trust, and shared vision. We're selective about who we work with because the best results come from partnerships where values align.
                                </p>
                                <div class="text-center">
                                    <button class="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                        Start a Conversation
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Decorative elements -->
                        <div class="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20"></div>
                        <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeStep = ref(null);

const toggleStep = (step) => {
    if (activeStep.value === step) {
        activeStep.value = null;
    } else {
        activeStep.value = step;
    }
};
</script>

<style scoped>
/* Smooth slide transition */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
    overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    max-height: 500px;
    opacity: 1;
}

/* Ensure smooth transitions */
.transition-all {
    transition: all 0.3s ease;
}

/* Custom shadow for cards */
.shadow-xl {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-xl:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.08);
}

/* Rotate transition for chevron */
.rotate-180 {
    transform: rotate(180deg);
}
</style>