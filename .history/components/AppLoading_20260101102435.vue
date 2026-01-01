<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-static" />
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.logo-static {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 4px 12px rgba(91, 33, 182, 0.2));
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
    background: #5B21B6;
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

/* Responsive sizing */
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
</style>