<template>
    <section class="px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto">

            <!-- Grid Layout: Animation Left, Content Right -->
            <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

                <!-- Left Side - Lottie Animation (2 columns) -->
                <div class="order-2 lg:order-1 lg:col-span-2">
                    <div class="relative">
                        <div id="lottie-contact" class="w-full h-[350px] sm:h-[400px] lg:h-[500px]"></div>
                    </div>
                </div>

                <!-- Right Side - Contact Information (3 columns) -->
                <div class="order-1 lg:order-2 lg:col-span-3">
                    <!-- Section Header -->
                    <div class="mb-8 md:mb-10">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                            <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Contact
                                Us</span>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Let's Build Together
                        </h2>
                        <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                            Have a project in mind? We're here to listen, collaborate, and help turn breathe life into
                            digital product vision.
                        </p>
                    </div>

                    <!-- Contact Cards Stack -->
                    <div class="space-y-4 md:space-y-6">

                        <!-- Office Location -->
                        <div class="contact-card group">
                            <div class="flex items-start gap-4">
                                <div class="contact-icon flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="contact-title">Our Office</h3>
                                    <p class="contact-link">
                                        77 Awolowo Road, MAN House<br>
                                        Ikeja, Lagos, Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Phone -->
                        <div class="contact-card group">
                            <div class="flex items-start gap-4">
                                <div class="contact-icon flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="contact-title">Call Us</h3>
                                    <a href="tel:+2347088547450" class="contact-link">
                                        +234 708 854 7450
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="contact-card group">
                            <div class="flex items-start gap-4">
                                <div class="contact-icon flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="contact-title">Email Us</h3>
                                    <a href="mailto:hello@tekfolio.ng" class="contact-link block">
                                        hello@tekfolio.ng
                                    </a>
                                    <a href="mailto:support@tekfolio.ng" class="contact-link block mt-1 text-base">
                                        support@tekfolio.ng
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Office Hours -->
                        <div class="contact-card group border-l-4 border-purple-700">
                            <div class="flex items-start gap-4">
                                <div class="contact-icon flex-shrink-0">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="contact-title">Office Hours</h3>
                                    <p class="contact-text">
                                        Monday - Friday: 9:00 AM - 5:00 PM (WAT)
                                    </p>
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
import { onMounted } from 'vue';

onMounted(() => {
    // Load Lottie player script
    const loadLottieScript = async () => {
        if (!document.querySelector('script[src*="dotlottie-player"]')) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }
    };

    // Initialize Lottie animation
    const initLottieAnimation = async () => {
        await loadLottieScript();

        const container = document.getElementById('lottie-contact');
        if (container && !container.querySelector('dotlottie-player')) {
            const player = document.createElement('dotlottie-player');
            player.setAttribute('src', 'https://lottie.host/2d9e6e4d-d3d6-44fd-bb22-a14c1fa7259e/F836HnxhjK.lottie');
            player.setAttribute('background', 'transparent');
            player.setAttribute('speed', '1');
            player.setAttribute('loop', '');
            player.setAttribute('autoplay', '');
            player.style.width = '100%';
            player.style.height = '100%';
            container.appendChild(player);
        }
    };

    initLottieAnimation();
});
</script>

<style scoped>
/* Contact card base styles */
.contact-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08),
        0 1px 3px rgba(0, 0, 0, 0.06);
}

.contact-card:hover {
    box-shadow: 0 12px 24px rgba(124, 58, 237, 0.15),
        0 4px 12px rgba(124, 58, 237, 0.1),
        0 2px 4px rgba(0, 0, 0, 0.08);
    transform: translateX(4px);
    border-color: rgba(124, 58, 237, 0.15);
}

/* Contact icon styles */
.contact-icon {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 6px rgba(124, 58, 237, 0.2);
}

.group:hover .contact-icon {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.35);
}

/* Contact title styles */
.contact-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: rgb(17 24 39);
    margin-bottom: 0.5rem;
}

/* Contact text styles */
.contact-text {
    color: rgb(2, 8, 16);
    line-height: 1.625;
    font-size: 0.9375rem;
}

/* Contact link styles */
.contact-link {
    color: #7C3AED;
    transition: all 0.2s ease;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.0625rem;
}

.contact-link:hover {
    color: #6D28D9;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    #lottie-contact {
        height: 350px;
    }
}

@media (max-width: 640px) {
    .contact-card {
        padding: 1.25rem;
    }

    .contact-icon {
        width: 2.5rem;
        height: 2.5rem;
    }

    .contact-icon svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    .contact-title {
        font-size: 1rem;
    }

    .contact-link {
        font-size: 0.9375rem;
    }
}
</style>