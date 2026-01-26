<template>
  <UApp>
    <ClientOnly>
      <AppLoading v-if="showPreloader" @loaded="handleLoaded" />
    </ClientOnly>
    <NuxtLoadingIndicator />
    <NuxtLayout v-show="!showPreloader">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
// Start as true to show preloader immediately on client
const showPreloader = ref(true);

const handleLoaded = () => {
  showPreloader.value = false;
};

onMounted(() => {
  // Check if already visited this session
  const hasVisited = sessionStorage.getItem('site-visited');

  if (hasVisited) {
    // Skip preloader on subsequent page loads
    showPreloader.value = false;
  } else {
    // First visit - keep preloader showing
    sessionStorage.setItem('site-visited', 'true');
  }
});
</script>