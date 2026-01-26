<template>
  <UApp>
    <ClientOnly>
      <AppLoading v-if="showPreloader" @loaded="showPreloader = false" />
    </ClientOnly>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const showPreloader = ref(false);

if (import.meta.client) {
  // Only show on first visit of the session
  const hasVisited = sessionStorage.getItem('site-visited');
  showPreloader.value = !hasVisited;

  if (!hasVisited) {
    sessionStorage.setItem('site-visited', 'true');
  }
}
</script>