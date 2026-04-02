<template>
    <section class="relative w-full bg-linear-to-b from-white to-gray-200">

        <!-- Section Heading -->
        <div class="w-full py-6 md:py-8 text-center">
            <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <!-- Kicker -->
                <div class="inline-block mb-3">
                    <span
                        class="bg-linear-to-r from-purple-700 to-blue-600 text-white text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
                        That's Why
                    </span>
                </div>
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                    <span class="text-gradient">Forward-Thinking </span>
                    <span class="text-gray-900"> Organizations Love Us</span>
                </h2>
            </div>
        </div>

        <!-- Main Section with Gradient Background -->
        <div
            class="w-full relative bg-linear-to-r from-purple-900/95 to-blue-900/95 border-purple-700/30 pt-1 pb-8 md:pb-12">

            <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

                <!-- Light content box -->
                <div
                    class="bg-linear-to-b from-white to-gray-200 pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 px-6 md:px-10 lg:px-12 -mt-6 md:-mt-8">

                    <!-- Client Logos Scrolling -->
                    <div class="w-full overflow-hidden">
                        <div class="logo-scroll-container">
                            <div class="logo-scroll-track">
                                <!-- First set -->
                                <a v-for="logo in clientLogos" :key="logo.name" :href="logo.url" target="_blank"
                                    rel="noopener noreferrer" class="logo-item">
                                    <img :src="logo.src" :alt="logo.name" class="client-logo" />
                                </a>
                                <!-- Duplicate for seamless loop -->
                                <a v-for="logo in clientLogos" :key="`${logo.name}-dup`" :href="logo.url"
                                    target="_blank" rel="noopener noreferrer" class="logo-item">
                                    <img :src="logo.src" :alt="logo.name" class="client-logo" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>

    <script setup lang="ts">
import { ref } from 'vue';

import akorite from '../assets/img/akorite.png';
import botintegrated from '../assets/img/bot-integrated.png';
import ecoplatinum from '../assets/img/ecoplatinum.png';
import literaforge from '../assets/img/lliteraforge.png';
import megafield from '../assets/img/megafield.png';
import pebbles from '../assets/img/pebblessuites.png';
import petabiz from '../assets/img/petabiz.png';
import ppil from '../assets/img/ppil.png';
import sefa from '../assets/img/sefa.png';
import syntanium from '../assets/img/syntanium.png';
import veraverde from '../assets/img/veraverde.png';
import wilsonsamson from '../assets/img/wilsonsamson.png';
import xstrato from '../assets/img/xstrato.png';

const clientLogos = ref([
    { name: "EcoPlatinum", src: ecoplatinum, url: "https://ecoplatinumgroup.com/" },
    { name: "LiteraForge", src: literaforge, url: "https://www.literaforge.com/" },
    { name: "PetaBiz", src: petabiz, url: "https://petabiz.com" },
    { name: "PPIL", src: ppil, url: "https://ppil.com.ng/" },
    { name: "Syntanium", src: syntanium, url: "https://syntaniumenergy.com/" },
    { name: "Sefa", src: sefa, url: "https://sefaenergy.com/" },
    { name: "VeraVerde", src: veraverde, url: "https://veraverde.org/" },
    { name: "Megafield", src: megafield, url: "https://megafieldsolicitors.com/" },
    { name: "Pebblesgold", src: pebbles, url: "https://pebblesgoldsuites.com/" },
    { name: "Wilson & Samson", src: wilsonsamson, url: "https://wilsonsamson.com/" },
    { name: "BotIntegrated", src: botintegrated, url: "https://botintegratedservices.com/" },
    { name: "Xstrato", src: xstrato, url: "https://xstratoprime.com/" },
    { name: "Akorite", src: akorite, url: "https://akoritetravels.com/" }
]);
</script>

    <style scoped>
        .text-gradient {
            background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .logo-scroll-container {
            overflow: hidden;
            position: relative;
            width: 100%;
        }

        .logo-scroll-track {
            display: flex;
            align-items: center;
            animation: scroll 30s linear infinite;
            width: fit-content;
        }

        .logo-item {
            flex-shrink: 0;
            padding: 0 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 160px;
            cursor: pointer;
            text-decoration: none;
        }

        .client-logo {
            height: 62px;
            width: auto;
            max-width: 180px;
            object-fit: contain;
            transition: all 0.3s ease;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
        }

        .logo-item:hover .client-logo {
            transform: scale(1.1);
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        @keyframes scroll {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .logo-scroll-container:hover .logo-scroll-track {
            animation-play-state: paused;
        }

        @media (max-width: 1024px) {
            .logo-item {
                padding: 0 1rem;
                min-width: 140px;
            }

            .client-logo {
                height: 54px;
                max-width: 155px;
            }
        }

        @media (max-width: 640px) {
            .logo-item {
                padding: 0 0.875rem;
                min-width: 115px;
            }

            .client-logo {
                height: 44px;
                max-width: 130px;
            }
        }
    </style>
