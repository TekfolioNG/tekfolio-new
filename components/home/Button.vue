<!-- components/AppButton.vue -->
<script setup>
defineProps({
  to: { type: String, required: true },
  variant: { type: String, default: 'light' }, // 'light' or 'gradient'
  customShadow: { type: String, default: '' },
  hoverShadow: { type: String, default: '' }
})

// Default shadow logic for the "Light" vs "Gradient" buttons
const getIdleShadow = (variant, custom) => custom || (variant === 'gradient' 
  ? '0 10px 30px -5px rgba(109, 40, 217, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)' 
  : '0 10px 30px -5px rgba(0, 0, 0, 0.45), 0 4px 6px -2px rgba(0, 0, 0, 0.25)');

const getHoverShadow = (variant, custom) => custom || (variant === 'gradient' 
  ? '0 20px 40px -10px rgba(109, 40, 217, 0.5), 0 10px 15px -3px rgba(37, 99, 235, 0.3)' 
  : '0 20px 40px -10px rgba(0, 0, 0, 0.35), 0 10px 15px -3px rgba(0, 0, 0, 0.15)');
</script>

<template>
  <NuxtLink 
    :to="to"
    class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-base lg:text-lg rounded-xl transition-all duration-500 ease-out hover:scale-105 will-change-transform"
    :class="[
      variant === 'gradient' ? 'bg-gradient-to-r from-purple-700 to-blue-600 text-white' : 'bg-gray-100 text-gray-900 border border-gray-100'
    ]"
    :style="{ boxShadow: getIdleShadow(variant, customShadow) }"
    @mouseover="$el.style.boxShadow = getHoverShadow(variant, hoverShadow)"
    @mouseleave="$el.style.boxShadow = getIdleShadow(variant, customShadow)"
  >
    <slot />
  </NuxtLink>
</template>
