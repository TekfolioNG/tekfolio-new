<template>
  <UApp>
    <ClientOnly>
      <AppLoading v-if="showPreloader" />
    </ClientOnly>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
