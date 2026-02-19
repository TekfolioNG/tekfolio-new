<!-- CookiePolicyModal.vue -->
<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>

            <!-- Modal Content -->
            <div class="relative bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[70vh] rounded-xl shadow-2xl overflow-hidden">
                <!-- Header -->
                <div class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Cookie Policy</h2>
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
                                Tekfolio uses cookies and similar technologies to improve your browsing experience, analyze site traffic, and understand where our visitors are coming from. This policy explains what cookies are, how we use them, and your choices.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What Are Cookies?</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience on future visits.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Types of Cookies We Use</h3>
                            <div class="space-y-3 text-gray-700 dark:text-gray-300">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Essential Cookies</p>
                                    <p>These are necessary for the website to function properly. They enable core features like security, navigation, and form submissions. You cannot opt out of these cookies.</p>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Analytics Cookies</p>
                                    <p>We use analytics tools (like Google Analytics) to understand how visitors interact with our site—which pages they visit, how long they stay, and what content interests them. This helps us improve our website and services.</p>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">Preference Cookies</p>
                                    <p>These remember your choices (like dark mode or language preferences) to provide a more personalized experience on return visits.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Cookies</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                Some cookies are placed by third-party services that appear on our pages, such as analytics providers or embedded content. These third parties have their own privacy policies governing their use of cookies.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">How Long Do Cookies Last?</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                <strong>Session cookies</strong> are temporary and deleted when you close your browser. <strong>Persistent cookies</strong> remain on your device for a set period or until you delete them manually. We use both types depending on their purpose.
                            </p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Your Cookie Choices</h3>
                            <p class="text-gray-700 dark:text-gray-300 mb-2">
                                You have several options for managing cookies:
                            </p>
                            <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-2">
                                <li><strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. Note that disabling cookies may affect site functionality.</li>
                                <li><strong>Opt-out tools:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
                                <li><strong>Do Not Track:</strong> We respect browser Do Not Track signals where technically feasible.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Updates to This Policy</h3>
                            <p class="text-gray-700 dark:text-gray-300">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We encourage you to review this page periodically.
                            </p>
                        </div>

                        <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p class="text-gray-700 dark:text-gray-300">
                                Questions about our cookie practices? Contact us at <a href="mailto:support@tekfolio.ng" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">support@tekfolio.ng</a>
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