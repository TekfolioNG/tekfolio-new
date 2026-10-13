<!-- app/pages/contact.vue -->
<template>
    <section class="relative bg-[#0B0B14] px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-32">
        <div class="mx-auto max-w-6xl">
            <div class="mx-auto max-w-2xl text-center">
                <p class="eyebrow text-xs text-[#2FB6FF]/80">Get in Touch</p>
                <h1 class="display mt-5 text-4xl font-bold leading-tight text-[#FAFBFC] sm:text-5xl">
                    Tell us what you're building.
                </h1>
                <p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#E5E8ED]/75 sm:text-lg">
                    Share where you want to get to. We'll map the architecture, the timeline and the cost
                    before a single server is deployed.
                </p>
            </div>

            <div class="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
                <!-- Form -->
                <form novalidate class="flex flex-col gap-5" @submit.prevent="onSubmit">
                    <!-- Honeypot: hidden from real visitors, catches basic bots -->
                    <input v-model="form.botcheck" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off"
                        class="hidden" aria-hidden="true">

                    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label for="name" class="field-label">Name<span aria-hidden="true"> *</span></label>
                            <input id="name" v-model="form.name" type="text" name="name" required autocomplete="name"
                                class="field-input" placeholder="Your full name">
                        </div>
                        <div>
                            <label for="email" class="field-label">Email<span aria-hidden="true"> *</span></label>
                            <input id="email" v-model="form.email" type="email" name="email" required
                                autocomplete="email" class="field-input" placeholder="you@company.com">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label for="company" class="field-label">Company</label>
                            <input id="company" v-model="form.company" type="text" name="company"
                                autocomplete="organization" class="field-input" placeholder="Where you work">
                        </div>
                        <div>
                            <label for="phone" class="field-label">Phone</label>
                            <input id="phone" v-model="form.phone" type="tel" name="phone" autocomplete="tel"
                                class="field-input" placeholder="Optional">
                        </div>
                    </div>

                    <div>
                        <label for="message" class="field-label">What are you building?<span aria-hidden="true">
                                *</span></label>
                        <textarea id="message" v-model="form.message" name="message" required rows="5"
                            class="field-input resize-none"
                            placeholder="A few lines on what you need is enough to get started." />
                    </div>

                    <button type="submit" :disabled="status === 'loading'"
                        class="submit-btn group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-md border border-white/10 bg-gradient-to-r from-[#4A15A4] to-[#75138C] px-7 py-4 text-base font-semibold text-[#FAFBFC] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[0.98] hover:brightness-110 hover:shadow-xl hover:shadow-[#75138C]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FB6FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B14] disabled:cursor-not-allowed disabled:opacity-60">
                        <span class="relative z-10">{{ status === 'loading' ? 'Sending…' : 'Send Message' }}</span>
                        <span class="shine" aria-hidden="true" />
                    </button>

                    <p aria-live="polite" class="min-h-[1.5rem] text-sm">
                        <span v-if="status === 'success'" class="text-[#2FB6FF]">
                            Thanks — we've got your message and will be in touch shortly.
                        </span>
                        <span v-else-if="status === 'error'" class="text-[#FAFBFC]/70">
                            {{ errorMessage }}
                        </span>
                    </p>
                </form>

                <!-- Direct details -->
                <div class="details-card h-fit rounded-2xl border border-[#E5E8ED]/10 p-7 lg:p-8">
                    <h2 class="display text-lg font-semibold text-[#FAFBFC]">Prefer to reach us directly?</h2>
                    <div class="mt-5 flex flex-col gap-4 text-sm text-[#E5E8ED]/75">
                        <a href="mailto:contact@tekfolio.ng" class="detail-link">contact@tekfolio.ng</a>
                        <a href="tel:+2347088547450" class="detail-link">+234 7088547450</a>
                    </div>
                    <p class="mt-6 text-sm leading-relaxed text-[#E5E8ED]/55">
                        We typically respond within one business day.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'home',
})

import { reactive, ref } from 'vue'

useHead({ title: 'Contact | Tekfolio' })

const config = useRuntimeConfig()

const form = reactive({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    botcheck: ''
})

const status = ref('idle') // idle | loading | success | error
const errorMessage = ref('')

async function onSubmit() {
    // Honeypot: a real visitor never checks a hidden checkbox. If it's set, drop silently.
    if (form.botcheck) {
        status.value = 'success'
        return
    }

    status.value = 'loading'
    errorMessage.value = ''

    try {
        const res = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: {
                access_key: config.public.web3formsKey,
                subject: `New enquiry from ${form.name || 'the Tekfolio website'}`,
                from_name: 'Tekfolio Website',
                name: form.name,
                email: form.email,
                phone: form.phone,
                company: form.company,
                message: form.message
            }
        })

        if (res?.success) {
            status.value = 'success'
            form.name = ''
            form.email = ''
            form.phone = ''
            form.company = ''
            form.message = ''
        } else {
            throw new Error(res?.message || 'Submission failed')
        }
    } catch (err) {
        status.value = 'error'
        errorMessage.value = "Something went wrong on our end. Please try again, or email us directly at contact@tekfolio.ng."
    }
}
</script>

<style scoped>
.display,
.eyebrow {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}

.field-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: rgba(229, 232, 237, 0.65);
}

.field-input {
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid rgba(229, 232, 237, 0.15);
    background: rgba(255, 255, 255, 0.03);
    padding: 0.75rem 1rem;
    font-size: 0.9375rem;
    color: #FAFBFC;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-input::placeholder {
    color: rgba(229, 232, 237, 0.35);
}

.field-input:focus-visible {
    outline: none;
    border-color: rgba(47, 182, 255, 0.6);
    box-shadow: 0 0 0 3px rgba(47, 182, 255, 0.15);
}

.submit-btn .shine {
    position: absolute;
    inset: 0 auto 0 -60%;
    width: 45%;
    pointer-events: none;
    background: linear-gradient(100deg, transparent, rgb(255 255 255 / 0.4), transparent);
    transform: skewX(-18deg);
    transition: left 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.submit-btn:hover .shine,
.submit-btn:focus-visible .shine {
    left: 115%;
}

.details-card {
    background:
        radial-gradient(120% 140% at 100% 0%, rgba(74, 21, 164, 0.22) 0%, rgba(11, 11, 20, 0) 60%),
        rgba(255, 255, 255, 0.02);
}

.detail-link {
    color: #E5E8ED;
    opacity: 0.85;
    width: fit-content;
    transition: color 0.2s ease;
}

.detail-link:hover,
.detail-link:focus-visible {
    color: #2FB6FF;
    outline: none;
}

@media (prefers-reduced-motion: reduce) {
    .shine {
        transition: none;
    }
}
</style>