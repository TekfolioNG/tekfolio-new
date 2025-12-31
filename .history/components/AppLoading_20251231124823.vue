<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-pulse" />
            </div>
        </div>
    </Transition>
</template>

<script setup>
const isLoading = ref(true);

onMounted(() => {
    const timer = setTimeout(() => {
        isLoading.value = false;
    }, 1500);

    if (document.readyState === 'complete') {
        isLoading.value = false;
        clearTimeout(timer);
    } else {
        window.addEventListener('load', () => {
            isLoading.value = false;
            clearTimeout(timer);
        });
    }
});
</script>

<style scoped>
.loading-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
}

.loading-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-pulse {
    width: 120px;
    height: 120px;
    animation: smoothPulse 1.5s ease-in-out infinite;
    filter: drop-shadow(0 4px 12px rgba(91, 33, 182, 0.25));
}

@keyframes smoothPulse {

    0%,
    100% {
        transform: scale(0.95);
        opacity: 0.7;
    }

    50% {
        transform: scale(1.05);
        opacity: 1;
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

/* Responsive sizing */
@media (max-width: 640px) {
    .logo-pulse {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .logo-pulse {
        width: 110px;
        height: 110px;
    }
}
</style>