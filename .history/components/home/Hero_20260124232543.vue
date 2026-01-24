<template>
  <main class="relative w-full min-h-screen overflow-hidden bg-white pb-16 md:pb-16">
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
            We design and build smart, modern, and secure web, mobile, cloud, and data systems that make work easier, decisions clearer,
            and businesses more efficient and profitable. 
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-4">
            <!-- Primary CTA - Gradient Button -->
            <NuxtLink to="/contact"
              class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-base lg:text-lg rounded-xl overflow-hidden shadow-lg cta-button">
              <span class="relative flex items-center gap-2 z-10">
                Start Your Project
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </span>
            </NuxtLink>

            <!-- Secondary CTA - Outlined with gradient border -->
            <NuxtLink to="/case-studies"
              class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-base lg:text-lg rounded-xl button-gradient-border cta-button">
              <span class="relative flex items-center gap-2 z-10">
                See Our Work
                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side - Lottie Animation (2/5 on desktop) -->
        <div
          class="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-1 lg:order-2 lg:col-span-2 flex items-center justify-center">
          <div id="lottie-animation" class="lottie-container w-full h-full flex items-center justify-center">
            <!-- Lottie will be loaded here via JavaScript -->
          </div>
        </div>

      </div>
    </div>

    <!-- Trust Indicators - Positioned at the bottom of the section -->
    <div class="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6">
      <!-- Desktop: Single Card -->
      <div class="hidden md:block bg-gray-100 rounded-xl shadow-lg px-6 sm:px-8 py-4 sm:py-5 border border-gray-100"
        style="box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.55), 0 4px 6px -2px rgba(0, 0, 0, 0.35);">
        <div class="flex flex-row gap-8 lg:gap-12 items-center justify-center">
          <!-- Indicator 1 -->
          <div class="flex items-start gap-3 flex-1 text-left">
            <img src="~/assets/home/img/security.png" alt="Security"
              class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 brand-icon-filter" />
            <div>
              <h3 class="text-gray-900 font-bold text-sm sm:text-base md:text-lg mb-1">Trusted by Businesses in Nigeria
                and Beyond</h3>
              <p class="text-gray-900 text-xs sm:text-sm md:text-base">Reliable digital solutions built for
                long-term performance.</p>
            </div>
          </div>

          <!-- Divider -->
          <div class="w-px h-12 lg:h-14 bg-gradient-to-b from-purple-700 to-blue-600"></div>

          <!-- Indicator 2 -->
          <div class="flex items-start gap-3 flex-1 text-left">
            <img src="~/assets/home/img/quality.png" alt="Quality"
              class="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 brand-icon-filter" />
            <div>
              <h3 class="text-gray-900 font-bold text-sm sm:text-base md:text-lg mb-1">Quality, Delivered
                Fast</h3>
              <p class="text-gray-900 text-xs sm:text-sm md:text-base">Speed without compromise plus rapid development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: Two Separate Cards Side by Side -->
      <div class="grid grid-cols-2 gap-3 md:hidden">
        <!-- Card 1 -->
        <div class="bg-gray-100 rounded-xl shadow-lg px-4 py-4 border border-gray-100"
          style="box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.55), 0 4px 6px -2px rgba(0, 0, 0, 0.35);">
          <div class="flex flex-col items-center text-center gap-2">
            <div>
              <h3 class="text-gray-900 font-bold text-xs mb-1">Trusted by Businesses in Nigeria</h3>

            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-gray-100 rounded-xl shadow-lg px-4 py-4 border border-gray-100"
          style="box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.55), 0 4px 6px -2px rgba(0, 0, 0, 0.35);">
          <div class="flex flex-col items-center text-center gap-2">
            <div>
              <h3 class="text-gray-900 font-bold text-xs mb-1">Quality, Delivered Fast. No Compromise.</h3>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Subtle gradient overlay at bottom for depth -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none">
    </div>
  </main>
</template>
import { onMounted } from 'vue';
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Load Lottie player script and initialize
  const loadLottie = async () => {
    // Check if script already exists
    if (!document.querySelector('script[src*="dotlottie-player"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      document.head.appendChild(script);

      // Wait for script to load
      await new Promise((resolve) => {
        script.onload = resolve;
      });
    }

    // Create and configure the player
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
/* Brand gradient colors from logo - Deeper gradient */
.text-gradient {
  background: linear-gradient(135deg, #4C1D95 0%, #2563EB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero headline animation */
.hero-headline {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Lottie container styling with gradient glow */
.lottie-container {
  filter: drop-shadow(0 10px 40px rgba(91, 33, 182, 0.15));
}

/* Circular accent animation */
.accent-circle {
  opacity: 0;
  animation: fadeInCircle 1.2s ease-out 0.3s forwards;
}

@keyframes fadeInCircle {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(-5deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Double underline with draw animation */
.double-underline {
  opacity: 0;
  animation: drawLines 1.2s ease-out 0.6s forwards;
}

@keyframes drawLines {
  from {
    opacity: 0;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  to {
    opacity: 1;
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
  }
}

/* Smooth button hover transitions */
.cta-button {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
}

.cta-button:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px -10px rgba(91, 33, 182, 0.4);
}

/* Gradient border button effect */
.button-gradient-border {
  position: relative;
  background: white;
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.button-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  padding: 2px;
  background: linear-gradient(135deg, #5B21B6, #3B82F6);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-headline span {
    font-size: 1.75rem;
  }

  .double-underline {
    height: 20px;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .hero-headline span {
    font-size: 2rem;
  }

  .double-underline {
    height: 20px;
  }
}

@media (min-width: 1024px) {
  .double-underline {
    height: 20px;
  }
}

/* Smooth transitions */
* {
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Brand color filter for icons */
.brand-icon-filter {
  filter: brightness(0) saturate(100%) invert(21%) sepia(89%) saturate(2686%) hue-rotate(251deg) brightness(91%) contrast(93%);
}
</style>