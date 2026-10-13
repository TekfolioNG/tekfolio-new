<!-- app/pages/cookies.vue -->
<template>
    <PolicyPage eyebrow="Legal" title="Cookie Policy" last-updated="November 2026">
        <p>
            This policy explains what cookies are, which ones this website uses, and how you can manage
            them, in line with the Nigeria Data Protection Commission's General Application and
            Implementation Directive (GAID).
        </p>

        <h2>1. What are cookies</h2>
        <p>
            Cookies are small text files placed on your device when you visit a website. They help the site
            work properly, remember your preferences, or, where used, understand how visitors use the site.
        </p>

        <h2>2. The cookies this website uses today</h2>
        <p>
            Right now, this website uses only <strong>strictly necessary cookies</strong>: the small number
            required for the site's basic functions, such as remembering your menu or form state as you
            browse. We do not currently use analytics or marketing cookies, and we don't set any non-essential
            cookie without first asking for your consent.
        </p>
        <h3>Strictly necessary cookies</h3>
        <p>
            These cannot be switched off, as the website won't work properly without them. They don't
            store any personal data that identifies you, and they don't require your consent under the
            NDPA.
        </p>

        <h2>3. If this changes</h2>
        <p>
            If we introduce analytics or marketing cookies in future — for example, to understand which
            pages are useful — we'll show a clear, conspicuous cookie banner before any such cookie is set,
            letting you accept or decline it. We won't treat a default or pre-ticked setting as your
            consent, and this policy will be updated to list exactly what's in use.
        </p>

        <h2>4. Managing cookies in your browser</h2>
        <p>
            Most browsers let you see, delete, and block cookies through their settings. Blocking strictly
            necessary cookies may stop parts of this website working as intended.
        </p>

        <h2>5. Related policy</h2>
        <p>
            For more on how we handle personal data generally, see our
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.
        </p>

        <h2>6. Changes to this policy</h2>
        <p>
            We may update this policy as our use of cookies changes. The "Last updated" date at the top of
            this page shows when it was last revised.
        </p>

        <h2>7. Contact us</h2>
        <p>Questions about cookies on this website are welcome:</p>
        <div class="contact-box">
            <p><strong>Tekfolio Ltd</strong></p>
            <p><a href="mailto:contact@tekfolio.ng">contact@tekfolio.ng</a></p>
            <p><a href="tel:+2347088547450">+234 7088547450</a></p>
        </div>
    </PolicyPage>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "home"
});
import PolicyPage from '~/components/home/PolicyPage.vue';

useHead({
    title: 'Cookie Policy | Tekfolio'
})
</script>