<template>
    <div class="max-w-325 mx-auto px-4 py-8 bx-ct">
        <Hero />
    </div>
    <slider />
    <div class="max-w-325 mx-auto px-4 py-8 bx-ct">
        <Polis />
        <YouTube />
        <Service />
        <QA />
        <InfoPhone />
    </div>
    <Footer />
</template>

<script setup>
import Hero from '@/components/pages/Hero.vue';
import Polis from '@/components/pages/Polis.vue';
import YouTube from '@/components/pages/YouTube.vue';
import Service from '@/components/pages/Service.vue';
import QA from '@/components/pages/QA.vue';
import InfoPhone from '@/components/pages/InfoPhone.vue';
import Footer from '@/components/pages/Footer.vue';
import slider from '@/components/slider.vue';
</script>