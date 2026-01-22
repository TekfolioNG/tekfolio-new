<script setup lang="ts">
definePageMeta({
  layout: "home"
});

useHead({
  title: 'Tekfolio | Custom Software, Cloud & Data Engineering in Nigeria',
  meta: [
    {
      name: 'description',
      content:
        'Custom Software, Cloud & Data Engineering in Nigeria',
    },
    {
      name: 'keywords',
      content:
        'custom software development nigeria, mobile app development nigeria, data analysts in nigeria, custom website development nigeria, creative coding studio nigeria, cloud solutions nigeria, SEO agency nigeria, code camp nigeria, digital training nigeria, organic traffic google nigeria, coding academy nigeria',
    },
    {
      property: 'og:title',
      content: 'Tekfolio | Custom Software, Cloud & Data Engineering in Nigeria',
    },
    {
      property: 'og:description',
      content:
        'Custom Software, Cloud & Data Engineering in Nigeria',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tekfolio.ng' },
    { property: 'og:image', content: '/tekfolio-og.avif' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    {
      property: 'og:image:alt',
      content: 'Tekfolio | Custom Software, Cloud & Data Engineering in Nigeria',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Tekfolio | Custom Software, Cloud & Data Engineering in Nigeria',
    },
    {
      name: 'twitter:description',
      content:
        'Custom Software, Cloud & Data Engineering in Nigeria',
    },
    { name: 'twitter:image', content: '/tekfolio-og.avif' },
  ],
});





</script>

<template>
  <HomeContainer>
    <HomeHero />
  </HomeContainer>
  <HomePreview />
  <HomeServices />
  <HomeGlobe />
  <HomeTech />
  <HomeClients />
  <HomeBlog />
</template>