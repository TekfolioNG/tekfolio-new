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

<script setup>
const showPreloader = ref(false);

onMounted(() => {
  // Check if user has visited this session
  const hasVisited = sessionStorage.getItem('site-visited');

  if (!hasVisited) {
    showPreloader.value = true;
    sessionStorage.setItem('site-visited', 'true');

    // Hide after 2 seconds (matches your component's timer)
    setTimeout(() => {
      showPreloader.value = false;
    }, 2000);
  }
});
</script>