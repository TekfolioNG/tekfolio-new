<template>
    <div class="cards-container">
        <!-- First Card: Fast -->
        <div class="accent-card fast-card">
            <div class="card-icon-wrapper">
                <Rocket class="card-icon" />
            </div>
            <h3 class="card-title">Fast</h3>
            <p class="card-description">
                Lightning quick load times and smooth interactions.
            </p>
            <div class="accent-line"></div>
        </div>

        <!-- Second Card: Reliable -->
        <div class="accent-card reliable-card">
            <div class="card-icon-wrapper">
                <ShieldCheck class="card-icon" />
            </div>
            <h3 class="card-title">Reliable</h3>
            <p class="card-description">
                Consistent performance you can count on every time.
            </p>
            <div class="accent-line"></div>
        </div>

        <!-- Third Card: Secure -->
        <div class="accent-card secure-card">
            <div class="card-icon-wrapper">
                <Lock class="card-icon" />
            </div>
            <h3 class="card-title">Secure</h3>
            <p class="card-description">
                Enterprise-grade security protecting your data.
            </p>
            <div class="accent-line"></div>
        </div>
    </div>
</template>

<script setup>
import { Lock, Rocket, ShieldCheck } from 'lucide-vue-next';
</script>

<style scoped>
.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.accent-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1px solid #f0f0f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
        0 2px 4px -1px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}

.accent-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08),
        0 10px 10px -5px rgba(0, 0, 0, 0.02);
}

.card-icon-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    position: relative;
    transition: all 0.3s ease;
}

.accent-card:hover .card-icon-wrapper {
    transform: scale(1.1);
}

.card-icon {
    width: 32px;
    height: 32px;
    stroke-width: 1.5;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1a1a1a;
    letter-spacing: -0.025em;
}

.card-description {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    flex-grow: 1;
}

.accent-line {
    height: 3px;
    width: 48px;
    border-radius: 3px;
    margin-top: auto;
    transition: all 0.3s ease;
}

/* Individual Card Styles */
.fast-card {
    background: linear-gradient(135deg, #ffffff 0%, #fef6ff 100%);
}

.fast-card .card-icon-wrapper {
    background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
}

.fast-card .card-icon {
    color: white;
}

.fast-card .accent-line {
    background: linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%);
}

.fast-card:hover .accent-line {
    width: 100%;
}

.reliable-card {
    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
}

.reliable-card .card-icon-wrapper {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
}

.reliable-card .card-icon {
    color: white;
}

.reliable-card .accent-line {
    background: linear-gradient(90deg, #059669 0%, #10b981 100%);
}

.reliable-card:hover .accent-line {
    width: 100%;
}

.secure-card {
    background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
}

.secure-card .card-icon-wrapper {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
}

.secure-card .card-icon {
    color: white;
}

.secure-card .accent-line {
    background: linear-gradient(90deg, #dc2626 0%, #ef4444 100%);
}

.secure-card:hover .accent-line {
    width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
    .cards-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0.5rem;
    }

    .accent-card {
        padding: 1.5rem;
    }

    .card-icon-wrapper {
        width: 56px;
        height: 56px;
        margin-bottom: 1.25rem;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .accent-card {
        background: #1a1a1a;
        border-color: #333;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
            0 2px 4px -1px rgba(0, 0, 0, 0.1);
    }

    .card-title {
        color: #ffffff;
    }

    .card-description {
        color: #a0aec0;
    }

    .fast-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #2d1a3d 100%);
    }

    .reliable-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #1a2d2a 100%);
    }

    .secure-card {
        background: linear-gradient(135deg, #1a1a1a 0%, #3d1a1a 100%);
    }
}
</style>