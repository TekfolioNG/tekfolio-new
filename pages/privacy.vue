<!-- app/pages/privacy.vue -->
<template>
    <PolicyPage eyebrow="Legal" title="Privacy Policy" last-updated="November 2026">
        <p>
            Tekfolio Ltd ("Tekfolio", "we", "us") respects your privacy and is committed to protecting any
            personal data you share with us. This policy explains what we collect, why, and the rights you
            have over it, in line with the Nigeria Data Protection Act, 2023 (NDPA) and its General
            Application and Implementation Directive (GAID).
        </p>

        <h2>1. Who we are</h2>
        <p>
            Tekfolio Ltd is a technology consultancy registered in Nigeria (RC 7156797), with its
            registered office at [registered address]. For the purposes of the NDPA, Tekfolio is the data
            controller for personal data collected through this website.
        </p>

        <h2>2. Personal data we collect</h2>
        <ul>
            <li><strong>Contact details</strong> you give us directly: name, email address, phone number, company name,
                and the content of any message you send through our contact or enquiry forms.</li>
            <li><strong>Training registration data</strong>, where you sign up for a training programme: name, contact
                details, organisation, and attendance records.</li>
            <li><strong>Usage data</strong> collected automatically: pages visited, approximate location, device and
                browser type, and how you arrived at the site.</li>
        </ul>
        <p>
            We do not knowingly collect sensitive personal data (such as health, biometric, or financial
            data) through this website.
        </p>

        <h2>3. How we use your data</h2>
        <ul>
            <li>To respond to enquiries and prepare proposals.</li>
            <li>To deliver and administer training programmes you register for.</li>
            <li>To send you updates, where you have given consent, which you can withdraw at any time.</li>
            <li>To understand how the website is used, so we can improve it.</li>
            <li>To meet legal and regulatory obligations.</li>
        </ul>

        <h2>4. Our legal basis for processing</h2>
        <p>
            We rely on your <strong>consent</strong> where you have given it, on the need to take steps
            towards or perform a <strong>contract</strong> with you (such as a training registration or a
            service engagement), and on our <strong>legitimate interest</strong> in running and improving a
            secure, effective website and business.
        </p>

        <h2>5. Who we share your data with</h2>
        <p>
            We do not sell your personal data. We share it only where necessary, with service providers who
            help us run this website and our business, including:
        </p>
        <ul>
            <li>Our website hosting provider.</li>
            <li>Our form-submission provider, used to deliver enquiry and contact form messages to us.</li>
            <li>Our content management platform, used to publish and manage website content.</li>
        </ul>
        <p>
            Each of these providers is only permitted to use your data to provide their service to us, and
            is required to protect it to a standard consistent with this policy. We may also disclose data
            where required by law, or to protect our rights or the safety of others.
        </p>

        <h2>6. Cross-border data transfers</h2>
        <p>
            Some of the service providers listed above may process data outside Nigeria. Where this
            happens, we only use providers that offer an adequate level of data protection, consistent with
            the requirements of the NDPA.
        </p>

        <h2>7. How long we keep your data</h2>
        <p>
            We keep personal data only for as long as necessary for the purpose it was collected for, or as
            required by law, after which it is deleted or anonymised.
        </p>

        <h2>8. How we protect your data</h2>
        <p>
            Data submitted through this website is encrypted in transit. Access to personal data is limited
            to people at Tekfolio who need it to do their job.
        </p>

        <h2>9. Your rights</h2>
        <p>Under the NDPA, you have the right to:</p>
        <ul>
            <li>Ask us what personal data we hold about you, and to access it.</li>
            <li>Ask us to correct inaccurate or incomplete data.</li>
            <li>Ask us to delete your data, or restrict how we use it.</li>
            <li>Object to certain kinds of processing.</li>
            <li>Receive your data in a portable format.</li>
            <li>Withdraw consent at any time, where we rely on consent.</li>
        </ul>
        <p>
            To exercise any of these rights, contact us using the details below. You also have the right to
            lodge a complaint with the Nigeria Data Protection Commission (NDPC).
        </p>

        <h2>10. Cookies</h2>
        <p>
            This website uses cookies. For details on what they are, which ones we use, and how to manage
            them, see our <NuxtLink to="/cookies">Cookie Policy</NuxtLink>.
        </p>

        <h2>11. Children's data</h2>
        <p>
            This website and our services are directed at businesses and organisations, not children. We do
            not knowingly collect personal data from anyone under 18.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
            We may update this policy from time to time. The "Last updated" date at the top of this page
            shows when it was last revised.
        </p>

        <h2>13. Contact us</h2>
        <p>
            If you have a question about this policy or how we handle your data, get in touch:
        </p>
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
    title: 'Privacy Policy | Tekfolio'
})
</script>