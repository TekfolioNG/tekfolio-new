<!-- app/layouts/default.vue -->
<script setup>
const route = useRoute()
</script>

<template>
  <div>
    <HomeNavbar />
    <main :class="route.path !== '/' ? 'pt-[72px] lg:pt-20' : ''">
      <slot />
    </main>
    <HomeFooter />
  </div>
</template>