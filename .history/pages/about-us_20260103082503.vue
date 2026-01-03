<script setup lang="ts">
import { CompanyProcess } from '#components';

definePageMeta({
    layout: "home"
});

</script>

<template>
    <CompanyHero />
    <CompanyPhilosophy />
    <CompanyProcess />
    <CompanyWork />
</template>