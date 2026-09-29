<!-- app/components/home/AboutCredentials.vue -->
<script setup>
const badges = [
    { file: 'pca.png', name: 'Professional Cloud Architect' },
    { file: 'gail.png', name: 'Generative AI Leader' },
    { file: 'pde.png', name: 'Professional Data Engineer' }
]
</script>

<template>
    <section class="relative bg-[#0B0B14] pb-14 pt-20 lg:pb-20 lg:pt-24">
        <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div class="border-t border-[#E5E8ED]/10 pb-2" />
            <p class="eyebrow mt-10 text-center text-xs text-[#2FB6FF]/80 lg:text-left">Who We Are</p>
        </div>
        <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div class="border-t border-[#E5E8ED]/10" />
        </div>

        <div class="mx-auto max-w-7xl px-5 pt-14 sm:px-6 lg:px-8 lg:pt-20">
            <div class="ac-grid mx-auto max-w-md lg:max-w-[64rem]">

                <!-- Photo -->
                <div class="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[#E5E8ED]/10">
                    <img src="assets/img/casehero.avif" alt="A Tekfolio engineer at work"
                        class="h-[220px] w-full object-cover sm:h-[260px] lg:h-[280px]" loading="lazy" decoding="async">
                </div>

                <!-- Text block A: heading + intro -->
                <div class="mx-auto mt-10 w-full max-w-md text-center lg:-mt-12 lg:self-center lg:text-left">
                    <h2 class="display text-2xl font-bold leading-tight text-[#FAFBFC] sm:text-3xl">
                        Your Partner First. Cloud Engineers Second.
                    </h2>
                    <p class="mt-4 text-base leading-relaxed text-[#F5F6F8]/90">
                        Every ambitious organization needs a partner who understands its vision and has the competence
                        to deliver it. <strong>Tekfolio</strong> builds secure, reliable, high performance systems to
                        global standards,
                        with deep roots in the African market.
                    </p>
                </div>

                <!-- Overlapping badge row -->
                <div class="badge-row relative mx-auto mt-10 flex w-fit items-center lg:mt-0">
                    <img v-for="(badge, i) in badges" :key="badge.file" :src="`/img/${badge.file}`" :alt="badge.name"
                        :title="badge.name" loading="lazy" decoding="async" :class="[
                            'badge-img relative w-28 object-contain transition-transform duration-300 ease-out sm:w-36 lg:w-44',
                            i === 0 ? 'z-0' : 'z-10 -ml-3 sm:-ml-4 lg:-ml-5'
                        ]">
                </div>

                <!-- Text block B: subheading + credentials + link -->
                <div class="mx-auto mt-8 w-full max-w-md text-center lg:-mt-12 lg:self-center lg:text-left">
                    <h3 class="display text-lg font-semibold text-[#FAFBFC] sm:text-xl">
                        Credentials Behind Our Work
                    </h3>
                    <p class="mt-3 text-base leading-relaxed text-[#F5F6F8]/90">
                        Our architects and engineers are Google Cloud-certified, including as
                        <strong class="font-medium text-[#FAFBFC]">Professional Cloud Architects (PCA)</strong>,
                        <strong class="font-medium text-[#FAFBFC]">Professional Data Engineers (PDE)</strong>, and
                        <strong class="font-medium text-[#FAFBFC]">Generative AI Leaders (GAIL)</strong>.
                    </p>
                    <NuxtLink to="/about"
                        class="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#FAFBFC]/80 transition-colors hover:text-[#FAFBFC] lg:justify-start">
                        See How We Work
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.75"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.eyebrow {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}

.badge-img {
    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35));
}

.badge-row:hover .badge-img {
    transform: scale(0.95);
}

/* Mobile: one column, natural DOM order */
.ac-grid {
    display: grid;
    grid-template-columns: 1fr;
}

/* Desktop: two columns, two rows. Photo | text A, then badges | text B */
@media (min-width: 1024px) {
    .ac-grid {
        grid-template-columns: 1fr 1fr;
        column-gap: 6rem;
        row-gap: 2.5rem;
        align-items: center;
    }
}

@media (prefers-reduced-motion: reduce) {
    .badge-img {
        transition: none !important;
    }
}
</style>