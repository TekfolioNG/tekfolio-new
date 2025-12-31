<template>
    <Transition name="fade">
        <div v-if="isLoading" class="loading-screen">
            <div class="loading-content">
                <div class="logo-wrapper">
                    <img src="/tekfolio.svg" alt="Tekfolio Logo" class="logo-float" />
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
    align-items: center;
    justify-content: center;
}

.logo-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
}

.logo-wrapper::before {
    content: '';
    position: absolute;
    inset: -10px;
    border: 3px solid transparent;
    border-top-color: #5B21B6;
    border-right-color: #3B82F6;
    border-radius: 50%;
    animation: spin 1.5s linear infinite;
}

.logo-float {
    width: 120px;
    height: 120px;
    position: relative;
    animation: float 2s ease-in-out infinite;
    filter: drop-shadow(0 4px 12px rgba(91, 33, 182, 0.25));
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
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
    .logo-wrapper {
        width: 100px;
        height: 100px;
    }

    .logo-float {
        width: 100px;
        height: 100px;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .logo-wrapper {
        width: 110px;
        height: 110px;
    }

    .logo-float {
        width: 110px;
        height: 110px;
    }
}
</style>