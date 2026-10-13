<script setup lang="ts">
definePageMeta({
    layout: 'home',
})

const siteUrl = 'https://tekfolio.ng'
const tagline = 'Engineering Enterprise Intelligence'
const title = `Tekfolio | ${tagline}`
const description =
    'Secure, Scalable Systems. Built for African Enterprises.'
const ogImage = `${siteUrl}/tekfoliong-og.png`

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: siteUrl,
    ogSiteName: 'Tekfolio',
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `Tekfolio: ${tagline}`,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterImageAlt: `Tekfolio: ${tagline}`,
})

</script>


<template>
    <HomeComingSoon title="Expertise"
        blurb="We're building out the full detail of our cloud architecture, enterprise AI and data engineering work. In the meantime, you'll find the overview on our homepage." />
</template>

