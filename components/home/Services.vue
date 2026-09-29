<template>
    <section class="relative bg-[#0B0B14] py-12 lg:py-16">
        <div class="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
            <div class="border-t border-[#E5E8ED]/10 pb-2" />
            <p class="eyebrow mt-6 text-center text-xs text-[#2FB6FF]/80 lg:text-left">What We Do</p>
        </div>

        <div class="mx-auto max-w-6xl divide-y divide-[#E5E8ED]/10 px-6 sm:px-10 lg:px-16">
            <ServiceRow v-for="(service, i) in services" :key="service.category" v-bind="service"
                :reverse="i % 2 === 1" />
        </div>
    </section>
</template>

<script setup>
import ServiceRow from './ServiceRow.vue';

const services = [
    {
        category: 'Cloud Architecture & Infrastructure',
        heading: 'Scale infrastructure with precision.',
        body: 'We design and build enterprise cloud systems on Google Cloud optimized for continuous growth. Security, resilience, and operational scale are embedded into your architecture from day one.',
        statValue: '318%',
        statLabel: 'Average five year return on investment achieved by enterprises migrating core infrastructure to Google Cloud.',
        statSource: 'Source: IDC & Google Cloud',
        image: '/img/cloudhero.webp',
        imageAlt: 'Cloud infrastructure and architecture'
    },
    {
        category: 'Enterprise Custom AI & Automation',
        heading: 'Operationalize AI across workflows.',
        body: 'We build robust enterprise AI systems that integrate directly into your production workflows. From initial validation to full scale deployment, every solution is backed by our certified Gemini Enterprise agents.',
        statValue: '80%',
        statLabel: 'of business leaders track immediate, measurable productivity surges after deploying AI directly into functional team workflows.',
        statSource: 'Source: McKinsey',
        image: '/img/creativehero.webp',
        imageAlt: 'Enterprise AI and automation systems'
    },
    {
        category: 'Data & Business Intelligence',
        heading: 'Transform raw metrics into strategy.',
        body: 'We engineer data architecture and intelligence dashboards your leadership team can trust completely, ensuring every high stakes decision is anchored in verified numbers.',
        statValue: '19x',
        statLabel: 'Higher likelihood of sustained profitability for organizations that execute decisions using mature, data driven intelligence.',
        statSource: 'Source: McKinsey',
        image: '/img/companyhero.webp',
        imageAlt: 'Data pipelines and business intelligence dashboards'
    }
]
</script>

<style scoped>
.eyebrow {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}
</style>