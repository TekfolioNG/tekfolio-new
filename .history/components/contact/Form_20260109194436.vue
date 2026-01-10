<template>
    <section class="py-20 lg:py-28 px-8 sm:px-12 lg:px-16 bg-white">
        <div class="max-w-7xl mx-auto">
            <!-- OR Divider - Centered at top -->
            <div class="flex items-center justify-center mb-12 lg:mb-16">
                <div class="flex-grow h-px bg-gray-300 max-w-xs"></div>
                <span class="px-6 text-lg md:text-xl font-semibold text-gray-600">OR</span>
                <div class="flex-grow h-px bg-gray-300 max-w-xs"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                <!-- Left Column: Contact Form (60% - 3/5 columns) -->
                <div class="lg:col-span-3 order-1 lg:order-1">
                    <!-- Form Header -->
                    <div class="mb-8">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-600"></div>
                            <span class="text-sm font-semibold text-purple-700 uppercase tracking-wider">Schedule a
                                Consultation</span>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Book a Project Discussion
                        </h2>
                        <p class="text-lg leading-relaxed text-gray-800 mb-8">
                            Tell us about your goals, challenges, or ideas. We will review and get back to you with next
                            steps.
                        </p>
                    </div>

                    <!-- Contact Form -->
                    <form @submit.prevent="submitForm"
                        class="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
                        <!-- Hidden inputs for Web3Forms -->
                        <input type="hidden" name="access_key" :value="config.public.web3formsKey">
                        <input type="hidden" name="subject" value="New Contact Form Submission from Tekfolio Website">
                        <input type="hidden" name="from_name" value="Tekfolio Website">
                        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                        <!-- Form Grid -->
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <!-- Name Field -->
                            <div>
                                <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                                    Full Name *
                                </label>
                                <input type="text" id="name" name="name" v-model="formData.name" required
                                    class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                    placeholder="Your full name">
                            </div>

                            <!-- Email Field -->
                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                                    Email Address *
                                </label>
                                <input type="email" id="email" name="email" v-model="formData.email" required
                                    class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                    placeholder="name@company.com">
                            </div>
                        </div>

                        <!-- Company Field -->
                        <div class="mb-6">
                            <label for="company" class="block text-sm font-semibold text-gray-900 mb-2">
                                Company / Organization
                            </label>
                            <input type="text" id="company" name="company" v-model="formData.company"
                                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                placeholder="Your company name">
                        </div>

                        <!-- Project Type Field -->
                        <div class="mb-6">
                            <label for="projectType" class="block text-sm font-semibold text-gray-900 mb-2">
                                What are you looking to build? *
                            </label>
                            <select id="projectType" name="projectType" v-model="formData.projectType" required
                                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300">
                                <option value="" disabled selected>Select a project type</option>
                                <option value="Web Application">Web Application</option>
                                <option value="Mobile Application">Mobile Application</option>
                                <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                                <option value="Data Engineering">Data Engineering & Analytics</option>
                                <option value="SEO & Performance">SEO & Performance Optimization</option>
                                <option value="Creative Coding">Creative Coding & Interactive Experiences</option>
                                <option value="System Integration">System Integration</option>
                                <option value="Digital Transformation">Digital Transformation</option>
                                <option value="MVP / Prototype">MVP / Prototype</option>
                                <option value="Technical Audit">Technical Audit</option>
                                <option value="Not Sure Yet">Not Sure Yet</option>
                            </select>
                        </div>

                        <!-- Message Field -->
                        <div class="mb-8">
                            <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                                Tell us about your project *
                            </label>
                            <textarea id="message" name="message" v-model="formData.message" required rows="5"
                                class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                placeholder="What problem are you trying to solve? What are your goals?"></textarea>
                        </div>

                        <!-- Submit Button -->
                        <div>
                            <button type="submit" :disabled="isSubmitting"
                                class="w-full px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg">
                                <span v-if="!isSubmitting">Send Message</span>
                                <span v-else class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Sending...
                                </span>
                            </button>
                        </div>

                        <!-- Success/Error Messages -->
                        <div v-if="submitMessage" class="mt-6 p-4 rounded-lg font-medium" :class="submitMessageClass">
                            {{ submitMessage }}
                        </div>
                    </form>
                </div>

                <!-- Right Column: Image (40% - 2/5 columns) -->
                <div class="lg:col-span-2 order-2 lg:order-2">
                    <div class="sticky lg:pt-28">
                        <img :src="contactForm" alt="Contact Tekfolio" class="w-full h-auto" />
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import contactForm from '../assets/img/contactform.svg';

const config = useRuntimeConfig();

// Form state
const formData = reactive({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
});

// UI state
const isSubmitting = ref(false);
const submitMessage = ref('');
const submitMessageClass = ref('');

// Form submission
const submitForm = async () => {
    isSubmitting.value = true;
    submitMessage.value = '';

    try {
        // Prepare form data for Web3Forms
        const formDataToSend = new FormData();
        formDataToSend.append('access_key', config.public.web3formsKey);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('company', formData.company);
        formDataToSend.append('projectType', formData.projectType);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('botcheck', '');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        });

        const result = await response.json();

        if (result.success) {
            submitMessage.value = 'Thank you for reaching out. We\'ll review your project details and get back to you within 24 hours.';
            submitMessageClass.value = 'bg-green-50 text-green-700 border border-green-200';

            // Reset form
            Object.assign(formData, {
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: ''
            });
        } else {
            throw new Error(result.message || 'Failed to send message');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        submitMessage.value = 'Something went wrong. Please try again or reach out to us directly at hello@tekfolio.ng';
        submitMessageClass.value = 'bg-red-50 text-red-700 border border-red-200';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
/* Custom focus styles */
input:focus,
textarea:focus,
select:focus {
    outline: none;
}

/* Transitions */
input,
textarea,
select {
    transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

/* Sticky image */
.sticky {
    position: sticky;
}
</style>