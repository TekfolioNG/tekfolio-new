<template>
  <section class="relative bg-transparent py-10 md:py-14">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Our Google-Certified
          <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> Expertise</span>
        </h2>
      </div>

      <!-- Badge Grid: 2 cols mobile, 5 cols desktop -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">

        <!-- Google ACE -->
        <div class="group bg-white rounded-xl border border-gray-100 px-5 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg"
          style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
          <img
            src="/assets/img/google-ace.png"
            alt="Google Associate Cloud Engineer"
            class="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
          />
          <p class="text-xs md:text-sm font-semibold text-gray-700 text-center leading-snug">Google ACE</p>
        </div>

        <!-- GEAR Program -->
        <div class="group bg-white rounded-xl border border-gray-100 px-5 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg"
          style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
          <img
            src="/assets/img/google-gear.png"
            alt="Google GEAR Program"
            class="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
          />
          <p class="text-xs md:text-sm font-semibold text-gray-700 text-center leading-snug">GEAR Program</p>
        </div>

        <!-- Cloud Computing -->
        <div class="group bg-white rounded-xl border border-gray-100 px-5 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg"
          style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
          <img
            src="/assets/img/google-cloud-computing.png"
            alt="Google Cloud Computing"
            class="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
          />
          <p class="text-xs md:text-sm font-semibold text-gray-700 text-center leading-snug">Cloud Computing</p>
        </div>

        <!-- Cloud Security -->
        <div class="group bg-white rounded-xl border border-gray-100 px-5 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg"
          style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
          <img
            src="/assets/img/google-cloud-security.png"
            alt="Google Cloud Security"
            class="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
          />
          <p class="text-xs md:text-sm font-semibold text-gray-700 text-center leading-snug">Cloud Security</p>
        </div>

        <!-- Google Developers -->
        <div class="group bg-white rounded-xl border border-gray-100 px-5 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-lg col-span-2 md:col-span-1"
          style="box-shadow: 0 4px 16px -2px rgba(0,0,0,0.10), 0 2px 6px -1px rgba(0,0,0,0.07);">
          <img
            src="/assets/img/google-developers.png"
            alt="Google Developers"
            class="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;"
          />
          <p class="text-xs md:text-sm font-semibold text-gray-700 text-center leading-snug">Google Developers</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed
</script>