<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300" :class="[
    { '-translate-y-full': !navVisible },
    isDarkMode
      ? 'bg-gradient-to-r from-purple-900/95 to-blue-900/95 border-purple-700/30'
      : 'border-gray-200/20'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="inline-block rounded-lg px-2 py-1 hover:opacity-80 transition-opacity duration-200">
            <!-- Preload both logos and toggle visibility -->
            <img src="/tekfolio-full.png" alt="Tekfolio Logo"
              class="h-8 md:h-8 lg:h-12 absolute transition-opacity duration-300"
              :class="isDarkMode ? 'opacity-0' : 'opacity-100'" />
            <img src="/tekfolio-full2.png" alt="Tekfolio Logo"
              class="h-8 md:h-8 lg:h-12 transition-opacity duration-300"
              :class="isDarkMode ? 'opacity-100' : 'opacity-0'" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Centered -->
        <div class="hidden lg:flex lg:items-center lg:space-x-0.5 xl:space-x-0.5">
          <!-- Main Nav Items -->
          <NuxtLink v-for="item in mainNavItems" :key="item.path" :to="item.path"
            class="text-sm xl:text-base font-semibold transition-all duration-200 px-4 py-2 rounded-lg whitespace-nowrap"
            :class="route.path === item.path
              ? 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
              : isDarkMode
                ? 'text-gray-100 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'">
            {{ item.label }}
          </NuxtLink>

          <!-- Company Dropdown -->
          <div class="relative" @mouseenter="companyDropdownOpen = true" @mouseleave="companyDropdownOpen = false">
            <button
              class="flex items-center gap-1 text-sm xl:text-base font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
              :class="companyDropdownItems.some(item => item.path === route.path)
                ? 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
                : isDarkMode
                  ? 'text-gray-100 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'">
              Company
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': companyDropdownOpen }" />
            </button>

            <Transition name="dropdown">
              <div v-if="companyDropdownOpen"
                class="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-xl overflow-hidden backdrop-blur-md" :class="isDarkMode
                  ? 'bg-gradient-to-b from-purple-900/98 to-blue-900/98 border border-purple-700/40'
                  : 'bg-white/98 border border-gray-200/60'">
                <div class="py-2">
                  <NuxtLink v-for="item in companyDropdownItems" :key="item.path" :to="item.path"
                    class="block px-4 py-2.5 text-sm font-semibold transition-all duration-200"
                    :class="route.path === item.path
                      ? 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
                      : isDarkMode
                        ? 'text-gray-100 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'">
                    {{ item.label }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Right Side - Contact Button -->
        <div class="flex items-center space-x-3 lg:space-x-4">
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 text-white font-bold text-sm xl:text-base rounded-lg transition-all duration-200">
            Ready to Start?
          </NuxtLink>

          <button @click="toggleMobileMenu" class="lg:hidden p-2 rounded-lg transition-colors duration-200"
            :class="isDarkMode ? 'text-gray-100 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'"
            aria-label="Toggle mobile menu">
            <Icon v-if="!mobileMenuOpen" name="lucide:menu" class="w-6 h-6" />
            <Icon v-else name="lucide:x" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" @click="mobileMenuOpen = false"
        class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" :style="{ top: navHeight + 'px' }">
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen"
        class="lg:hidden fixed right-0 backdrop-blur-md border-l overflow-y-auto z-50 w-72 max-w-full h-[calc(100vh-64px)]"
        :class="isDarkMode
          ? 'bg-gradient-to-b from-purple-900/98 to-blue-900/98 border-purple-700/40'
          : 'bg-white/98 border-gray-200/60'">
        <div class="px-4 py-6 space-y-2">
          <!-- Mobile Main Nav Items -->
          <NuxtLink v-for="item in mainNavItems" :key="item.path" :to="item.path"
            class="block font-semibold px-4 py-3 rounded-lg transition-all" :class="route.path === item.path
              ? 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
              : isDarkMode
                ? 'text-gray-100 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'"
            @click="closeMobileMenu">
            {{ item.label }}
          </NuxtLink>

          <!-- Mobile Company Section -->
          <div class="space-y-1">
            <button @click="mobileCompanyOpen = !mobileCompanyOpen"
              class="w-full flex items-center justify-between font-semibold px-4 py-3 rounded-lg transition-all" :class="companyDropdownItems.some(item => item.path === route.path)
                ? 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
                : isDarkMode
                  ? 'text-gray-100 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'">
              Company
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': mobileCompanyOpen }" />
            </button>

            <Transition name="mobile-dropdown">
              <div v-if="mobileCompanyOpen" class="pl-4 space-y-1">
                <NuxtLink v-for="item in companyDropdownItems" :key="item.path" :to="item.path"
                  class="block font-semibold px-4 py-2.5 rounded-lg text-sm transition-all"
                  :class="route.path === item.path
                    ? 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
                    : isDarkMode
                      ? 'text-gray-100 hover:text-white hover:bg-white/10'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'" @click="closeMobileMenu">
                  {{ item.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Mobile Contact Button -->
          <NuxtLink to="/contact"
            class="block w-full text-center mt-6 px-4 py-3 bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-lg text-white font-bold rounded-lg transition-all duration-200"
            @click="closeMobileMenu">
            Ready to Start?
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const route = useRoute()

// Navigation items as objects
const mainNavItems = [
  { path: '/web-solutions', label: 'Custom Web Apps' },
  { path: '/mobile-apps', label: 'Mobile Apps' },
  { path: '/data-engineering', label: 'Data Engineering & Analytics' },
  { path: '/seo-performance', label: 'SEO & Performance' }
]

const companyDropdownItems = [
  { path: '/about-us', label: 'About Tekfolio' },
  { path: '/careers', label: 'Careers' },
  { path: '/case-studies', label: 'Success Stories' },
  { path: '/blog', label: 'Blog & Insights' }
]

// Reactive state
const mobileMenuOpen = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)
const navHeight = ref(64)
const isDarkMode = ref(false)

// Desktop dropdown state
const companyDropdownOpen = ref(false)

// Mobile dropdown state
const mobileCompanyOpen = ref(false)

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 100) {
    navVisible.value = true
  } else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    navVisible.value = false
    mobileMenuOpen.value = false
    companyDropdownOpen.value = false
  } else if (currentScrollY < lastScrollY.value) {
    navVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const handleMouseMove = () => {
  isDarkMode.value = true
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileCompanyOpen.value = false
}

const updateNavHeight = () => {
  const nav = document.querySelector('nav')
  if (nav) {
    navHeight.value = nav.offsetHeight
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  lastScrollY.value = window.scrollY
  updateNavHeight()
  window.addEventListener('resize', updateNavHeight)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', updateNavHeight)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>