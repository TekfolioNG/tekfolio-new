<template>
    <section class="verified-trusted">
        <div class="container">
            <h2 class="section-title">Verified & Trusted</h2>
            <p class="section-subtitle">Recognized by industry leaders for quality and reliability</p>

            <div class="trust-badges">
                <!-- Clutch Badge -->
                <a href="https://clutch.co/profile/tekfolio" target="_blank" rel="noopener noreferrer"
                    class="badge-card" aria-label="View our Clutch profile">
                    <div class="badge-image">
                        <img src="/assets/img/clutch-review.png" alt="Clutch 5-star reviews" loading="lazy" />
                    </div>
                </a>

                <!-- Google Reviews Badge -->
                <a href="https://www.google.com/search?q=tekfolio" target="_blank" rel="noopener noreferrer"
                    class="badge-card" aria-label="View our Google reviews">
                    <div class="badge-image">
                        <img src="/assets/img/google-review.png" alt="Google 5-star reviews" loading="lazy" />
                    </div>
                </a>

                <!-- GoodFirms Badge -->
                <a href="https://www.goodfirms.co/company/tekfolio-ltd" target="_blank" rel="noopener noreferrer"
                    class="badge-card" aria-label="View our GoodFirms profile">
                    <div class="badge-image">
                        <img src="/assets/img/goodfirms-review.png" alt="GoodFirms 5-star reviews" loading="lazy" />
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
// No additional logic needed for static badges
</script>

<style scoped>
.verified-trusted {

    padding: 60px 20px;

}

.container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
}

.section-subtitle {
    font-size: 16px;
    color: #6b7280;
    margin-bottom: 48px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.trust-badges {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    flex-wrap: wrap;
}

.badge-card {
    display: block;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
}

.badge-image {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.badge-image img {
    height: 80px;
    width: auto;
    display: block;
    object-fit: contain;
}

/* Hover Effects */
.badge-card:hover .badge-image {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.1),
        0 10px 10px -5px rgba(99, 102, 241, 0.04);
}

.badge-card:hover {
    transform: scale(1.02);
}

/* Focus state for accessibility */
.badge-card:focus {
    outline: 2px solid #6366f1;
    outline-offset: 4px;
    border-radius: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .verified-trusted {
        padding: 40px 20px;
    }

    .section-title {
        font-size: 24px;
        margin-bottom: 8px;
    }

    .section-subtitle {
        font-size: 14px;
        margin-bottom: 32px;
    }

    .trust-badges {
        gap: 24px;
    }

    .badge-image {
        padding: 20px;
    }

    .badge-image img {
        height: 60px;
    }
}

@media (max-width: 480px) {
    .trust-badges {
        flex-direction: column;
        gap: 20px;
    }

    .badge-card {
        width: 100%;
        max-width: 300px;
    }
}
</style>