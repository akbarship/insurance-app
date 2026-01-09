<template>
    <div class="w-full py-5 mb-5 overflow-hidden">
        <div
            class="relative flex items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div ref="scrollContainer" class="flex items-center flex-nowrap gap-12 min-w-full will-change-transform"
                @mouseenter="pause" @mouseleave="play" @touchstart="pause" @touchend="play">
                <div v-for="i in 3" :key="i" class="flex flex-nowrap gap-12 shrink-0 items-center">
                    <div v-for="(logo, index) in logos" :key="index" class="w-32 md:w-40 shrink-0 flex justify-center">
                        <img :src="logo"
                            class="h-12 md:h-20 w-auto object-contain transition-all duration-300 grayscale opacity-100 hover:grayscale-0 cursor-pointer"
                            alt="Partner" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const logos = [
    'https://sugurtabozor.uz/images/home/black-logos/neo.svg',
    'https://sugurtabozor.uz/images/home/black-logos/gross.svg',
    'https://sugurtabozor.uz/images/home/black-logos/kapital.svg',
    'https://sugurtabozor.uz/images/home/black-logos/inson.svg'
];

const scrollContainer = ref(null);
let animationFrameId = null;
let currentX = 0;
const speed = 0.2;
let isPaused = false;

const animate = () => {
    if (!scrollContainer.value || isPaused) {
        animationFrameId = requestAnimationFrame(animate);
        return;
    }

    const totalWidth = scrollContainer.value.scrollWidth / 3;

    currentX -= speed;

    if (Math.abs(currentX) >= totalWidth) {
        currentX = 0;
    }

    scrollContainer.value.style.transform = `translate3d(${currentX}px, 0, 0)`;

    animationFrameId = requestAnimationFrame(animate);
};

const pause = () => { isPaused = true; };
const play = () => { isPaused = false; };

onMounted(() => {
    animationFrameId = requestAnimationFrame(animate);
});

onUnmounted(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});
</script>

<style scoped>
/* CSS animatsiyasi olib tashlandi, faqat GPU tezlanishi uchun transition qoldi */
.will-change-transform {
    will-change: transform;
}
</style>