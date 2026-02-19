<!-- PrivacyPolicyModal.vue -->
<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>

            <!-- Modal Content -->
            <div class="relative bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[70vh] rounded-xl shadow-2xl overflow-hidden">
                <!-- Header -->
                <div class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
                    <button @click="closeModal"
                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Content -->
                <div class="px-6 py-6 overflow-y-auto max-h-[calc(70vh-80px)]">
                    <div class="space-y-4 text-sm">
                        
                        <div>
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                At Tekfolio, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Information We Collect</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We collect information you provide directly when you contact us, request quotes, apply for positions, or use our services. This includes your name, email, phone number, company details, and project requirements. We also collect technical data like IP addresses and browser information to improve our website experience.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">How We Use Your Information</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Your information helps us respond to inquiries, provide quotes, process job applications, deliver services, and communicate updates about your projects. We use data to improve our offerings and comply with legal obligations under Nigerian law, including the Nigeria Data Protection Regulation (NDPR). We never sell your personal information to third parties.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Data Security</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Your Rights</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Under NDPR, you have the right to access, correct, update, or request deletion of your personal data. You can also object to processing or request data portability. To exercise these rights, contact us at the email below.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Data Retention</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Project-related data is typically kept for the duration of our engagement plus a reasonable period for records.
                            </p>
                        </div>

                        <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p class="text-gray-700 dark:text-gray-300">
                                Questions about our privacy practices? Contact us at <a href="mailto:support@tekfolio.ng" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">support@tekfolio.ng</a>
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Last updated: March 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    isOpen.value = newVal
})

const closeModal = () => {
    emit('update:modelValue', false)
}

// Prevent body scroll when modal is open
watch(isOpen, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>