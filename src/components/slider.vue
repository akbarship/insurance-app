<template>
    <div class="w-full py-5 overflow-hidden">
        <div
            class="relative flex items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

            <div class="flex flex-nowrap gap-12 animate-scroll-infinite min-w-full">
                <div v-for="i in 3" :key="i" class="flex flex-nowrap gap-12 shrink-0 items-center">
                    <div v-for="(logo, index) in logos" :key="index" class="w-32 md:w-40 shrink-0 flex justify-center">
                        <img :src="logo"
                            class="h-20 w-auto object-contain transition-all duration-300 grayscale-100 opacity-40 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                            alt="Partner" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Replace these with your 4 image paths
const logos = [
    'https://sugurtabozor.uz/images/home/black-logos/neo.svg',
    'https://sugurtabozor.uz/images/home/black-logos/gross.svg',
    'https://sugurtabozor.uz/images/home/black-logos/kapital.svg',
    'https://sugurtabozor.uz/images/home/black-logos/inson.svg'
]; 
</script>

<style scoped>
.animate-scroll-infinite {
    /* Adjust the '40s' to change the speed */
    animation: scroll 40s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        /* We move only 1/3 of the total width (the length of one full set of 4 images) */
        transform: translateX(calc(-100% / 3));
    }
}

/* Optional: Pauses the slider when the user hovers */
.animate-scroll-infinite:hover {
    animation-play-state: paused;
}
</style>