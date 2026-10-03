<template>
    <Transition name="fade" @after-leave="$emit('loaded')">
        <div v-if="isLoading" class="loading-screen" role="status" aria-live="polite" aria-label="Loading Tekfolio">
            <div class="loading-content">
                <img src="/img/tekfolio-logo.png" alt="" width="120" height="120" class="logo-static" />
                <div class="dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
defineEmits(['loaded'])

const MIN_MS = 900   // shortest time the loader stays up, so fast loads don't flicker
const MAX_MS = 3500  // longest it can stay up, so a slow load never traps the visitor

const isLoading = ref(true)

// Preload the logo and hide the loader if JavaScript never runs (it is rendered on the server).
useHead({
    link: [{ rel: 'preload', as: 'image', href: '/img/tekfolio-logo.png' }],
    noscript: [{ innerHTML: '<style>.loading-screen{display:none!important}</style>' }]
})

let minTimer
let maxTimer
let minDone = false
let pageLoaded = false

function lockScroll(locked) {
    document.documentElement.style.overflow = locked ? 'hidden' : ''
}

function hide() {
    if (!isLoading.value) return
    clearTimeout(minTimer)
    clearTimeout(maxTimer)
    isLoading.value = false
    lockScroll(false)
}

function tryHide() {
    if (minDone && pageLoaded) hide()
}

function onLoad() {
    pageLoaded = true
    tryHide()
}

onMounted(() => {
    lockScroll(true)

    minTimer = setTimeout(() => {
        minDone = true
        tryHide()
    }, MIN_MS)

    maxTimer = setTimeout(hide, MAX_MS)

    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('load', onLoad)
    clearTimeout(minTimer)
    clearTimeout(maxTimer)
    lockScroll(false)
})
</script>

<style scoped>
.loading-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0B0B14;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.logo-static {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 4px 18px rgba(117, 19, 140, 0.35));
    animation: gentleBounce 1.4s ease-in-out infinite;
}

@keyframes gentleBounce {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-6px);
    }
}

.dots {
    display: flex;
    gap: 8px;
}

.dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #75138C;
    box-shadow: 0 0 12px rgba(117, 19, 140, 0.7);
    animation: dotPulse 1.4s ease-in-out infinite;
}

.dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes dotPulse {

    0%,
    80%,
    100% {
        opacity: 0.3;
        transform: scale(0.8);
    }

    40% {
        opacity: 1;
        transform: scale(1.2);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 640px) {
    .logo-static {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .logo-static {
        width: 110px;
        height: 110px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .logo-static {
        animation: none;
    }

    .dots span {
        animation: none;
        opacity: 0.7;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.01s;
    }
}
</style>