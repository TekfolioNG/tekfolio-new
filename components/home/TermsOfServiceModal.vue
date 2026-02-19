<!-- TermsOfServiceModal.vue -->
<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>

            <!-- Modal Content -->
            <div class="relative bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[70vh] rounded-xl shadow-2xl overflow-hidden">
                <!-- Header -->
                <div class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
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
                                By accessing or using Tekfolio's website and services, you agree to be bound by these Terms of Service. Please read them carefully.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Acceptance of Terms</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                By using our website, requesting quotes, or engaging our services, you accept these terms in full. If you disagree with any part of these terms, you must not use our services.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Use of Services</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                You agree to use our website and services only for lawful purposes. You must not misuse our services by attempting unauthorized access, transmitting malicious code, interfering with security features, or impersonating others. We reserve the right to suspend or terminate access to users who violate these terms.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Intellectual Property</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                All content on this website—including text, graphics, logos, code, and design—is the property of Tekfolio and protected by Nigerian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Service Agreements</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Specific projects are governed by separate service agreements that outline scope, deliverables, timelines, and payment terms. These terms supplement but do not replace project-specific agreements.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Limitation of Liability</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                This website is provided "as is" without warranties of any kind. Tekfolio is not liable for indirect, incidental, or consequential damages arising from your use of our website or services. Our liability is limited to the amount paid for the specific service in question.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Links</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of external sites. You access them at your own risk.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Modifications</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after modifications constitutes acceptance of the revised terms.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Governing Law</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes will be subject to the exclusive jurisdiction of Nigerian courts.
                            </p>
                        </div>

                        <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p class="text-gray-700 dark:text-gray-300">
                                Questions about these terms? Contact us at <a href="mailto:support@tekfolio.ng" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">support@tekfolio.ng</a>
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