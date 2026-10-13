<script setup>
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
    <HomeComingSoon title="Case Studies"
        blurb="Our project work is being documented properly — real builds, for real organisations. Tell us what you're building, and we'll walk you through examples in the meantime." />
</template>

