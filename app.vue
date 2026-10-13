<script setup>
const siteUrl = 'https://tekfolio.ng'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Tekfolio',
            url: siteUrl,
            logo: `${siteUrl}/img/tekfolio--logo-full.png`, // confirm: gradient tile, 112×112+
            telephone: '+234 708 854 7450',
            email: 'contact@tekfolio.ng',
            sameAs: [
              'https://www.linkedin.com/company/tekfolio-ng',
              'https://x.com/tekfoliong',
              'https://web.facebook.com/tekfolio/',
              'https://www.instagram.com/tekfoliong/',
              'https://www.youtube.com/@Tekfoliong'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Tekfolio',
            publisher: { '@id': `${siteUrl}/#organization` }
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <UApp>
    <AppLoading />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>