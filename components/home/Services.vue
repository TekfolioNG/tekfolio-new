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
        id: 'cloud-architecture',
        category: 'Cloud Architecture & Infrastructure',
        heading: 'Infrastructure that doesn\'t blink and grows with you.',
        body: 'We design your Google Cloud environment the way a Well-Architected build demands: secure by default, cost-efficient by design, and built to hold under real enterprise load and expand your business potential, giving you peace of mind.',
        statValue: '318%',
        statLabel: 'Five year ROI for enterprises migrating to Google Cloud infrastructure.',
        statSource: 'Source: IDC, commissioned by Google Cloud',
        image: '/img/cloudhero.webp',
        imageAlt: 'Cloud infrastructure and architecture'
    },
    {
        id: 'enterprise-ai',
        category: 'Enterprise AI & Automation',
        heading: 'Custom AI that knows your business, not the internet.',
        body: 'Move beyond generic public language models. We build custom, licensed, and strictly private AI agents that understand your unique business logic like a founding assistant. These proprietary workflows integrate securely with critical core data to  accelerate logistics and execution.',
        statValue: '70%',
        statLabel: 'of enterprise custom AI adopters report accelerated, more efficient operational workflows.',
        statSource: 'Source: McKinsey',
        image: '/img/creativehero.webp',
        imageAlt: 'Enterprise AI and automation systems'
    },
    {
        id: 'data-bi',
        category: 'Data & Business Intelligence',
        heading: 'Key business decisions anchored on evidence. No guessworks.',
        body: 'Data is the definitive boundary between market leaders and struggling operations. We construct trusted intelligence dashboards that replace boardroom guesswork with hard competitor analytics and live market research, giving leadership teams confidence to act.',
        statValue: '19x',
        statLabel: 'More likely to be profitable when decisions are data driven.',
        statSource: 'Source: McKinsey Global Institute',
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