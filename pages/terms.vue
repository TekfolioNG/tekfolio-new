<!-- app/pages/terms.vue -->
<template>
    <PolicyPage eyebrow="Legal" title="Terms of Use" last-updated="November 2026">
        <p>
            These Terms of Use govern your use of this website, tekfolio.ng, operated by Tekfolio Ltd
            ("Tekfolio", "we", "us"). By using this site, you agree to these terms.
        </p>
        <p>
            These terms cover the <strong>website only</strong>. Any project, consulting engagement, or
            training programme you book with Tekfolio is governed by its own separate, signed agreement,
            which takes priority over anything stated here.
        </p>

        <h2>1. About Tekfolio</h2>
        <p>
            Tekfolio Ltd is a technology consultancy registered in Nigeria (CAC Registration No RC 7156797), with its
            registered office at 77 Awolowo Way (MAN House), Ikea, Lagos, offering cloud architecture, enterprise AI,
            data and
            business intelligence services, and related training.
        </p>

        <h2>2. Using this website</h2>
        <p>You agree to use this website only for lawful purposes. You must not:</p>
        <ul>
            <li>Attempt to gain unauthorised access to this website or its underlying systems.</li>
            <li>Interfere with the website's normal operation, including through malicious code or excessive automated
                requests.</li>
            <li>Use any content from this website for a purpose other than your own evaluation of Tekfolio's services,
                without our written permission.</li>
        </ul>

        <h2>3. Our content and intellectual property</h2>
        <p>
            Unless stated otherwise, the text, graphics, logos, and design of this website belong to
            Tekfolio or our licensors, and are protected by copyright and other intellectual property laws.
            You may view and print pages for your own personal, non-commercial use, but may not reproduce,
            modify, or redistribute them without our permission.
        </p>
        <p>
            Certification and partner badges shown on this site belong to their respective issuing
            organisations and are used to indicate genuine, current credentials held by Tekfolio or its
            staff.
        </p>

        <h2>4. Links to other websites</h2>
        <p>
            This website may link to third-party websites for your convenience. We don't control these
            sites and aren't responsible for their content or practices. Visiting a linked site is at your
            own discretion.
        </p>

        <h2>5. No warranties</h2>
        <p>
            We take care to keep this website accurate and up to date, but we make no guarantee that it is
            complete, error-free, or available at all times. Nothing on this website constitutes a
            guarantee of results from any service we offer; the scope and outcomes of any engagement are
            set out in its own signed agreement.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
            To the extent permitted by law, Tekfolio is not liable for any loss or damage arising from your
            use of this website, including loss of data, revenue, or business opportunity. This does not
            limit any liability that cannot be excluded under Nigerian law.
        </p>

        <h2>7. Governing law</h2>
        <p>
            These terms are governed by the laws of the Federal Republic of Nigeria, and any dispute arising
            from them is subject to the exclusive jurisdiction of the Nigerian courts.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
            We may update these terms from time to time. The "Last updated" date at the top of this page
            shows when it was last revised. Continuing to use the website after a change means you accept
            the updated terms.
        </p>

        <h2>9. Contact us</h2>
        <p>Questions about these terms are welcome:</p>
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
    title: 'Terms of Use | Tekfolio'
})
</script>