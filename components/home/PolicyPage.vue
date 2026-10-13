<!-- components/legal/PolicyPage.vue -->
<template>
    <article class="relative bg-[#0B0B14] px-6 pb-24 pt-28 sm:px-10 lg:px-16 lg:pb-28 lg:pt-32">
        <div class="mx-auto max-w-3xl">
            <p class="eyebrow text-xs text-[#2FB6FF]/80">{{ eyebrow }}</p>
            <h1 class="display mt-4 text-3xl font-bold leading-tight text-[#FAFBFC] sm:text-4xl">{{ title }}</h1>
            <p class="mt-3 text-sm text-[#E5E8ED]/50">Last updated: {{ lastUpdated }}</p>

            <div class="policy-body mt-12">
                <slot />
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    eyebrow: { type: String, default: 'Legal' },
    title: { type: String, required: true },
    lastUpdated: { type: String, required: true }
})
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

.policy-body :deep(h2) {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    font-size: 1.375rem;
    font-weight: 700;
    color: #FAFBFC;
    margin-top: 2.75rem;
    padding-top: 1.75rem;
    border-top: 1px solid rgba(229, 232, 237, 0.1);
}

.policy-body :deep(h2:first-child) {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
}

.policy-body :deep(h3) {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: #FAFBFC;
    margin-top: 1.75rem;
}

.policy-body :deep(p) {
    margin-top: 0.9rem;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(229, 232, 237, 0.8);
}

.policy-body :deep(ul) {
    margin-top: 0.9rem;
    padding-left: 0;
    list-style: none;
}

.policy-body :deep(li) {
    position: relative;
    padding-left: 1.5rem;
    margin-top: 0.6rem;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(229, 232, 237, 0.8);
}

.policy-body :deep(li::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    border: 1.5px solid rgba(229, 232, 237, 0.4);
}

.policy-body :deep(a) {
    color: #FAFBFC;
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.3);
    text-underline-offset: 3px;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.policy-body :deep(a:hover),
.policy-body :deep(a:focus-visible) {
    color: #2FB6FF;
    text-decoration-color: #2FB6FF;
}

.policy-body :deep(strong) {
    color: #FAFBFC;
    font-weight: 600;
}

.policy-body :deep(.contact-box) {
    margin-top: 2.5rem;
    padding: 1.75rem;
    border-radius: 1rem;
    border: 1px solid rgba(229, 232, 237, 0.1);
    background:
        radial-gradient(120% 140% at 0% 0%, rgba(74, 21, 164, 0.22) 0%, rgba(11, 11, 20, 0) 60%),
        rgba(255, 255, 255, 0.02);
}

.policy-body :deep(.contact-box p) {
    margin-top: 0.4rem;
}

.policy-body :deep(.contact-box p:first-child) {
    margin-top: 0;
}
</style>