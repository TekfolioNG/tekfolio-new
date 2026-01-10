<template>
    <section class="py-16 lg:py-20 px-6 bg-gray-200">
        <div class="max-w-4xl mx-auto">
            <!-- Form Header -->
            <div class="text-center mb-10 lg:mb-12">
                <div class="inline-flex items-center gap-3 mb-4">
                    <div class="w-3 h-3 bg-[#4D7EFF] rounded-full"></div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Book a Clarity Session
                    </h2>
                </div>
                <p class="text-lg text-gray-900 max-w-2xl mx-auto">
                    Gain fresh perspective, identify next steps, and receive expert guidance
                    on your project or business concern. Send us a message to get started.
                </p>
            </div>

            <!-- Contact Form -->
            <form ref="form" @submit.prevent="submitForm"
                class="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
                <!-- Hidden input for Web3Forms -->
                <input type="hidden" name="access_key" value="59310f29-a1aa-4e2f-9cfc-ad41b973abfe">
                <input type="hidden" name="subject" value="New Contact Form Submission from LiteraForge Website">
                <input type="hidden" name="from_name" value="LiteraForge Website">
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                <!-- Form Grid -->
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <!-- Name Field -->
                    <div>
                        <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                            Full Name *
                        </label>
                        <input type="text" id="name" name="name" v-model="formData.name" required
                            class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4D7EFF] focus:border-transparent transition-all duration-300 shadow-sm"
                            placeholder="Your full name">
                    </div>

                    <!-- Email Field -->
                    <div>
                        <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                            Email Address *
                        </label>
                        <input type="email" id="email" name="email" v-model="formData.email" required
                            class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4D7EFF] focus:border-transparent transition-all duration-300 shadow-sm"
                            placeholder="e.g myname@gmail.com">
                    </div>
                </div>

                <!-- Phone Field -->
                <div class="mb-6">
                    <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" v-model="formData.phone"
                        class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4D7EFF] focus:border-transparent transition-all duration-300 shadow-sm"
                        placeholder="+234 000 000 0000">
                </div>

                <!-- Subject Field -->
                <div class="mb-6">
                    <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                        Subject *
                    </label>
                    <select id="subject" name="subject" v-model="formData.subject" required
                        class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4D7EFF] focus:border-transparent transition-all duration-300 shadow-sm">
                        <option value="" disabled selected>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Ghostwriting Services">Ghostwriting Services</option>
                        <option value="Publishing Services">Publishing Services</option>
                        <option value="Advisory Services">Advisory Services</option>
                        <option value="Productivity Training">Productivity Training</option>
                        <option value="Content Strategy">Content Strategy</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <!-- Message Field -->
                <div class="mb-8">
                    <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                    </label>
                    <textarea id="message" name="message" v-model="formData.message" required rows="5"
                        class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4D7EFF] focus:border-transparent transition-all duration-300 shadow-sm"
                        placeholder="Tell us about your project or inquiry..."></textarea>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                    <button type="submit" :disabled="isSubmitting"
                        class="px-8 py-4 bg-[#4D7EFF] hover:bg-[#3D6EEF] text-white font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D7EFF] disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg uppercase tracking-wide">
                        <span v-if="!isSubmitting">Send Message</span>
                        <span v-else class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
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
                <div v-if="submitMessage" class="mt-6 p-4 rounded-lg text-center font-medium"
                    :class="submitMessageClass">
                    {{ submitMessage }}
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Form state
const formData = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

// UI state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageClass = ref('')

// Form submission
const submitForm = async () => {
    isSubmitting.value = true
    submitMessage.value = ''

    try {
        // Prepare form data for Web3Forms
        const formDataToSend = new FormData()
        formDataToSend.append('access_key', '59310f29-a1aa-4e2f-9cfc-ad41b973abfe')
        formDataToSend.append('name', formData.name)
        formDataToSend.append('email', formData.email)
        formDataToSend.append('phone', formData.phone)
        formDataToSend.append('subject', formData.subject)
        formDataToSend.append('message', formData.message)
        formDataToSend.append('botcheck', '')

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend
        })

        const result = await response.json()

        if (result.success) {
            submitMessage.value = 'Thank you! Your message has been sent successfully. We will get back to you soon.'
            submitMessageClass.value = 'bg-green-100 text-green-700'

            // Reset form
            Object.assign(formData, {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
        } else {
            throw new Error(result.message || 'Failed to send message')
        }
    } catch (error) {
        console.error('Form submission error:', error)
        submitMessage.value = 'Sorry, there was an error sending your message. Please try again later or contact us directly.'
        submitMessageClass.value = 'bg-red-100 text-red-700'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
/* Custom focus styles */
input:focus,
textarea:focus,
select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(77, 126, 255, 0.1);
}

/* Transitions */
input,
textarea,
select {
    transition: background-color 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
}

/* Enhanced shadow */
form {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
}
</style>