<template>
  <UApp>
    <AppLoading v-if="showLoader" />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const showLoader = ref(true);

if (import.meta.client) {
  // Only show loader on first visit
  showLoader.value = !sessionStorage.getItem('visited');

  onMounted(() => {
    sessionStorage.setItem('visited', 'true');
  });
}
</script>