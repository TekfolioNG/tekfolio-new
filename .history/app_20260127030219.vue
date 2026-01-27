<template>
  <UApp>
    <ClientOnly>
      <AppLoading v-if="showPreloader" @loaded="handlePreloaderLoaded" />
    </ClientOnly>
    <NuxtLoadingIndicator />
    <NuxtLayout v-show="!showPreloader">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>