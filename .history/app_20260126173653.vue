<template>
  <UApp>
    <!-- Preloader handles its own exit logic -->
    <ClientOnly>
      <AppLoading v-if="showPreloader" @loaded="onLoaded" />
    </ClientOnly>

    <NuxtLoadingIndicator />

    <!-- Use v-show or v-if to prevent the homepage from flashing -->
    <NuxtLayout v-show="!showPreloader">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const route = useRoute();
const showPreloader = ref(false);

// 1. Immediate check: If we are on the homepage, prepare to show preloader
// This happens during the setup phase, before the component mounts.
if (process.client && route.path === '/') {
  const hasVisited = sessionStorage.getItem('site-visited');
  if (!hasVisited) {
    showPreloader.value = true;
  }
}

const onLoaded = () => {
  showPreloader.value = false;
  if (process.client) {
    sessionStorage.setItem('site-visited', 'true');
  }
};
</script>
