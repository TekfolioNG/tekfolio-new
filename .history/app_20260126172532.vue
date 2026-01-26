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

onMounted(() => {
  // Only show on first visit of the session
  const hasVisited = sessionStorage.getItem('site-visited');

  if (!hasVisited) {
    showPreloader.value = true;
    sessionStorage.setItem('site-visited', 'true');
  }
});
</script>