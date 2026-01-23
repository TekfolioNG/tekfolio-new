<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300" :class="[
    { '-translate-y-full': !navVisible },
    navClasses
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 rounded-lg px-2 py-1 hover:opacity-80 transition-opacity duration-200">
          <img :src="logoSrc" alt="Tekfolio Logo" class="h-8 md:h-8 lg:h-12 transition-opacity duration-300" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-0.5 xl:space-x-0.5">
          <NavLink to="/web-solutions">Custom Enterprise Web Apps</NavLink>
          <NavLink to="/mobile-apps">Cross-Platform Mobile Apps</NavLink>
          <NavLink to="/cloud-data-engineering">Cloud & Data Engineering</NavLink>
          <NavLink to="/seo-performance">SEO & Performance</NavLink>

          <!-- Company Dropdown -->
          <div class="relative" @mouseenter="companyDropdownOpen = true" @mouseleave="companyDropdownOpen = false">
            <button
              class="flex items-center gap-1 text-sm xl:text-base font-semibold transition-all duration-200 px-4 py-2 rounded-lg"
              :class="isCompanyActive ? activeClass : inactiveClass">
              Company
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': companyDropdownOpen }" />
            </button>

            <Transition name="dropdown">
              <div v-if="companyDropdownOpen"
                class="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-xl overflow-hidden backdrop-blur-md"
                :class="dropdownClasses">
                <div class="py-2">
                  <DropdownLink to="/about-us">About Tekfolio</DropdownLink>
                  <DropdownLink to="/careers">Careers</DropdownLink>
                  <DropdownLink to="/case-studies">Success Stories</DropdownLink>
                  <DropdownLink to="/blog">Blog & Insights</DropdownLink>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA & Mobile Menu Toggle -->
        <div class="flex items-center space-x-3 lg:space-x-4">
          <NuxtLink to="/contact"
            class="hidden lg:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 text-white font-bold text-sm xl:text-base rounded-lg transition-all duration-200">
            Ready to Start?
          </NuxtLink>

          <button @click="toggleMobileMenu" class="lg:hidden p-2 rounded-lg transition-colors duration-200"
            :class="isDarkMode ? 'text-gray-100 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'"
            aria-label="Toggle mobile menu">
            <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" @click="closeMobileMenu"
        class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" :style="{ top: navHeight + 'px' }" />
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen"
        class="lg:hidden fixed right-0 backdrop-blur-md border-l overflow-y-auto z-50 w-72 max-w-full h-[calc(100vh-64px)]"
        :class="mobileMenuClasses">
        <div class="px-4 py-6 space-y-2">
          <MobileNavLink to="/web-solutions">Enterprise Web App Solutions</MobileNavLink>
          <MobileNavLink to="/mobile-apps">Cross-Platform Mobile Apps</MobileNavLink>
          <MobileNavLink to="/cloud-data-engineering">Cloud & Data Engineering</MobileNavLink>
          <MobileNavLink to="/seo-performance">SEO & Performance</MobileNavLink>

          <!-- Mobile Company Section -->
          <div class="space-y-1">
            <button @click="mobileCompanyOpen = !mobileCompanyOpen"
              class="w-full flex items-center justify-between font-semibold px-4 py-3 rounded-lg transition-all"
              :class="isCompanyActive ? activeClass : inactiveClass">
              Company
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': mobileCompanyOpen }" />
            </button>

            <Transition name="mobile-dropdown">
              <div v-if="mobileCompanyOpen" class="pl-4 space-y-1">
                <MobileDropdownLink to="/about-us">About Tekfolio</MobileDropdownLink>
                <MobileDropdownLink to="/careers">Careers</MobileDropdownLink>
                <MobileDropdownLink to="/case-studies">Success Stories</MobileDropdownLink>
                <MobileDropdownLink to="/blog">Blog & Insights</MobileDropdownLink>
              </div>
            </Transition>
          </div>

          <!-- Mobile CTA -->
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
import { computed, onMounted, onUnmounted, ref } from 'vue';

const route = useRoute()

// State
const mobileMenuOpen = ref(false)
const navVisible = ref(true)
const lastScrollY = ref(0)
const navHeight = ref(64)
const isDarkMode = ref(false)
const companyDropdownOpen = ref(false)
const mobileCompanyOpen = ref(false)

// Computed properties
const logoSrc = computed(() =>
  isDarkMode.value ? '/tekfolio-full2.png' : '/tekfolio-full.png'
)

const navClasses = computed(() =>
  isDarkMode.value
    ? 'bg-gradient-to-r from-purple-900/95 to-blue-900/95 border-purple-700/30'
    : 'border-gray-200/20'
)

const dropdownClasses = computed(() =>
  isDarkMode.value
    ? 'bg-gradient-to-b from-purple-900/98 to-blue-900/98 border border-purple-700/40'
    : 'bg-white/98 border border-gray-200/60'
)

const mobileMenuClasses = computed(() =>
  isDarkMode.value
    ? 'bg-gradient-to-b from-purple-900/98 to-blue-900/98 border-purple-700/40'
    : 'bg-white/98 border-gray-200/60'
)

const activeClass = 'text-white bg-gradient-to-r from-purple-700 to-blue-600'
const inactiveClass = computed(() =>
  isDarkMode.value
    ? 'text-gray-100 hover:text-white hover:bg-white/10'
    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'
)

const companyPaths = ['/company', '/about-us', '/careers', '/case-studies', '/blog']
const isCompanyActive = computed(() => companyPaths.includes(route.path))

// Methods
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
  if (nav) navHeight.value = nav.offsetHeight
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('resize', updateNavHeight)
  lastScrollY.value = window.scrollY
  updateNavHeight()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', updateNavHeight)
})
</script>

<script>
// Reusable Nav Link Components
export default {
  components: {
    NavLink: {
      props: ['to'],
      template: `
        <NuxtLink 
          :to="to"
          class="text-sm xl:text-base font-semibold transition-all duration-200 px-4 py-2 rounded-lg whitespace-nowrap"
          :class="$route.path === to ? activeClass : inactiveClass"
        >
          <slot />
        </NuxtLink>
      `,
      computed: {
        activeClass: () => 'text-white bg-gradient-to-r from-purple-700 to-blue-600',
        inactiveClass() {
          const isDarkMode = this.$parent.isDarkMode
          return isDarkMode
            ? 'text-gray-100 hover:text-white hover:bg-white/10'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'
        }
      }
    },
    DropdownLink: {
      props: ['to'],
      template: `
        <NuxtLink 
          :to="to"
          class="block px-4 py-2.5 text-sm font-semibold transition-all duration-200"
          :class="$route.path === to ? activeClass : inactiveClass"
        >
          <slot />
        </NuxtLink>
      `,
      computed: {
        activeClass: () => 'text-white bg-gradient-to-r from-purple-700 to-blue-600',
        inactiveClass() {
          const isDarkMode = this.$parent.$parent.isDarkMode
          return isDarkMode
            ? 'text-gray-100 hover:text-white hover:bg-white/10'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'
        }
      }
    },
    MobileNavLink: {
      props: ['to'],
      template: `
        <NuxtLink 
          :to="to" 
          class="block font-semibold px-4 py-3 rounded-lg transition-all"
          :class="$route.path === to ? activeClass : inactiveClass"
          @click="$parent.closeMobileMenu"
        >
          <slot />
        </NuxtLink>
      `,
      computed: {
        activeClass: () => 'text-white bg-gradient-to-r from-purple-700 to-blue-600',
        inactiveClass() {
          const isDarkMode = this.$parent.isDarkMode
          return isDarkMode
            ? 'text-gray-100 hover:text-white hover:bg-white/10'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'
        }
      }
    },
    MobileDropdownLink: {
      props: ['to'],
      template: `
        <NuxtLink 
          :to="to" 
          class="block font-semibold px-4 py-2.5 rounded-lg text-sm transition-all"
          :class="$route.path === to ? activeClass : inactiveClass"
          @click="$parent.$parent.closeMobileMenu"
        >
          <slot />
        </NuxtLink>
      `,
      computed: {
        activeClass: () => 'text-white bg-gradient-to-r from-purple-700 to-blue-600',
        inactiveClass() {
          const isDarkMode = this.$parent.$parent.isDarkMode
          return isDarkMode
            ? 'text-gray-100 hover:text-white hover:bg-white/10'
            : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600'
        }
      }
    }
  }
}
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

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-dropdown-enter-active {
  transition: all 0.3s ease;
}

.mobile-dropdown-leave-active {
  transition: all 0.2s ease;
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