<template>
  <main class="relative w-full min-h-screen overflow-hidden bg-white">
    <!-- Content Container -->
    <div class="container mx-auto px-6 md:px-12 lg:px-16 min-h-screen flex items-center">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12 items-center w-full py-8 md:py-12 lg:py-0">

        <!-- Left Side - Hero Text Content (3/5 on desktop) -->
        <div class="text-center lg:text-left order-2 lg:order-1 lg:col-span-3 space-y-3 md:space-y-5 lg:pr-8 lg:pt-16">
          <!-- Headlines with styled "Built Differently" -->
          <div class="space-y-1">
            <h1 class="hero-headline leading-[1.1]">
              <span class="block text-gray-900 text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                Your Tech Advantage.
              </span>
              <span class="relative inline-block mt-1">
                <span class="text-gradient text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
                  Built Differently
                </span>
                <!-- Double underline with brand colors -->
                <svg class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[65%] sm:w-full h-3" viewBox="0 0 200 12"
                  fill="none">
                  <path d="M2 7C50 4 100 2 198 6" stroke="url(#underlineGradient1)" stroke-width="2.5"
                    stroke-linecap="round" fill="none" />
                  <path d="M2 10C50 7 100 5 198 9" stroke="url(#underlineGradient2)" stroke-width="2.5"
                    stroke-linecap="round" fill="none" />
                  <defs>
                    <linearGradient id="underlineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#5B21B6;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="underlineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.6" />
                      <stop offset="100%" style="stop-color:#5B21B6;stop-opacity:0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </div>

          <!-- Description -->
          <p
            class="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            We build intelligent digital systems that help Nigerian enterprises scale faster, compete smarter, and grow
            profitably. From AI agents that automate workflows and qualify leads to custom platforms that drive revenue
            and operational efficiency, our solutions deliver measurable impact.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-4">
            <HomeButton to="/about-us" variant="gradient">
              <span class="relative flex items-center gap-2 z-10">
                How We're Different
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </HomeButton>
            <HomeButton to="/contact">
              <span class="relative flex items-center gap-2 z-10">
                Get in Touch
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </HomeButton>
          </div>

          <!-- Credentials Bar -->
          <div class="pt-4 md:pt-6 mx-4 sm:mx-6 lg:mx-0">
            <div class="grid grid-cols-2 sm:grid-cols-4 rounded-xl overflow-hidden bg-gray-800">


              <div class="flex flex-col gap-1.5 px-5 py-4 border-r border-gray-600">
                <div class="flex items-center gap-1.5">

                  <span class="text-base font-bold text-white leading-none">Google-</span>
                </div>
                <span class="text-sm text-gray-100 leading-snug">Certified cloud engineers</span>
              </div>

              <div class="flex flex-col gap-1.5 px-5 py-4">
                <span class="text-2xl font-bold text-white leading-none">1st</span>
                <span class="text-sm text-gray-100 leading-snug">GEAR-certified firm in Nigeria</span>
              </div>
              <div class="flex flex-col gap-1.5 px-5 py-4 sm:border-r border-gray-600 border-b sm:border-b-0">
                <span class="text-2xl font-bold text-white leading-none">10+</span>
                <span class="text-sm text-gray-100 leading-snug">Years experience</span>
              </div>
              <div class="flex flex-col gap-1.5 px-5 py-4 border-r border-gray-600 border-b sm:border-b-0">
                <span class="text-2xl font-bold text-white leading-none">40+</span>
                <span class="text-sm text-gray-100 leading-snug">Projects delivered</span>
              </div>

            </div>
          </div>
          <!-- End Credentials Bar -->

        </div>

        <!-- Right Side - Lottie Animation (2/5 on desktop) -->
        <div
          class="relative h-62.5 sm:h-87.5 md:h-100 lg:h-125 order-1 lg:order-2 lg:col-span-2 flex items-center justify-center">
          <div id="lottie-animation" class="lottie-container w-full h-full flex items-center justify-center">
            <!-- Lottie will be loaded here via JavaScript -->
          </div>
        </div>

      </div>
    </div>

    <!-- Subtle gradient overlay at bottom for depth -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50/50 to-transparent pointer-events-none">
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const loadLottie = async () => {
    if (!document.querySelector('script[src*="dotlottie-player"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      document.head.appendChild(script);
      await new Promise((resolve) => { script.onload = resolve; });
    }

    const container = document.getElementById('lottie-animation');
    if (container && !container.querySelector('dotlottie-player')) {
      const player = document.createElement('dotlottie-player');
      player.setAttribute('src', 'https://lottie.host/1617352f-c57b-4585-8f08-721e4a949c01/IX6yVMPCQM.lottie');
      player.setAttribute('background', 'transparent');
      player.setAttribute('speed', '1');
      player.setAttribute('loop', '');
      player.setAttribute('autoplay', '');
      player.style.width = '100%';
      player.style.height = '100%';
      container.appendChild(player);
    }
  };

  loadLottie();
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #5B21B6 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-light {
  background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>