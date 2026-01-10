<template>
    <section class="-mt-48 md:mt-0 pb-16 lg:py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-8 lg:mb-16">
                <div class="inline-flex items-center gap-3 mb-4">
                    <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Get In Touch
                    </h2>
                </div>
                <p class="text-lg text-gray-900 max-w-2xl mx-auto">
                    We're here to listen, collaborate, and help you succeed.
                </p>
            </div>

            <!-- Contact Cards -->
            <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                <!-- Address Card -->
                <div class="contact-card group">
                    <div class="contact-icon">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 class="contact-title">Our Office</h3>
                    <p class="contact-text">
                        11 Adeshina Street, Off Olowu Street, Off Obafemi Awolowo Way, Ikeja, Lagos
                    </p>
                </div>

                <!-- Phone Card -->
                <div class="contact-card group">
                    <div class="contact-icon">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 class="contact-title">Call Us</h3>
                    <a href="tel:+2348132924637" class="contact-link inline-block text-lg font-semibold">
                        +234 813 292 4637
                    </a>
                </div>

                <!-- Email Card -->
                <div class="contact-card group">
                    <div class="contact-icon">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="contact-title">Email Us</h3>
                    <a href="mailto:info@literaforge.com" class="contact-link inline-block text-lg font-semibold">
                        info@literaforge.com
                    </a>
                </div>
            </div>

            <!-- Office Hours Banner -->
            <div class="bg-gradient-to-r from-[#1a1a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-lg">
                <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div
                        class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-bold text-white mb-1">Office Hours</h3>
                        <p class="text-gray-200 text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Component is purely presentational - no additional logic needed
</script>

<style scoped>
/* Contact card base styles */
.contact-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%);
    border: 1px solid rgba(77, 126, 255, 0.1);
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 0.05);
}

.contact-card:hover {
    box-shadow: 0 12px 24px -4px rgb(77 126 255 / 0.15), 0 4px 8px -2px rgb(77 126 255 / 0.1);
    transform: translateY(-0.375rem);
    border-color: rgba(77, 126, 255, 0.2);
}

/* Contact icon styles */
.contact-icon {
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(135deg, #4D7EFF 0%, #3D6EEF 100%);
    border-radius: 1rem;
    margin: 0 auto 1.25rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(77, 126, 255, 0.3);
}

.group:hover .contact-icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 16px rgba(77, 126, 255, 0.4);
}

/* Contact title styles */
.contact-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: rgb(17 24 39);
    margin-bottom: 0.75rem;
    letter-spacing: 0.025em;
}

/* Contact text styles */
.contact-text {
    color: rgb(31 41 55);
    line-height: 1.625;
    font-size: 0.9375rem;
}

/* Contact link styles */
.contact-link {
    color: #4D7EFF;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
}

.contact-link:hover {
    color: #3D6EEF;
    transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .contact-card {
        padding: 1.75rem 1.25rem;
    }

    .contact-icon {
        width: 3rem;
        height: 3rem;
    }
}
</style>