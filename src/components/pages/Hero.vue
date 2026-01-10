<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseInput from '@/components/base-input.vue';
import BaseSelect from '@/components/base-select.vue';
import BaseCalendar from '@/components/base-calendar.vue';

const activeTab = ref('osago');
const countryInput = ref('');
const carNumber = ref('')
const passport = ref('')
const driverSelect = ref('infinite')
const typeSelect = ref('full')

const tabs = [
    { id: 'osago', label: 'E-OSAGO', icon: '' },
    { id: 'kasko', label: 'E-OSAGO', icon: '' },
    { id: 'travel', label: 'E-OSAGO', icon: '' }
];

const driverNumber = [
    { label: "Cheklanmagan", value: 'infinite', icon: '' },
    { label: '5 kishigacha', value: 'five', icon: '' },
];

const sliderTrack = ref(null);
const currentIndex = ref(1);
const isTransitioning = ref(true);

const infiniteTabs = [tabs[tabs.length - 1], ...tabs, tabs[0]];

const handleTransitionEnd = () => {
    if (currentIndex.value >= infiniteTabs.length - 1) {
        isTransitioning.value = false;
        currentIndex.value = 1;
    }
    if (currentIndex.value <= 0) {
        isTransitioning.value = false;
        currentIndex.value = infiniteTabs.length - 2;
    }
};

const goToSlide = (index) => {
    isTransitioning.value = true;
    currentIndex.value = index + 1;
    activeTab.value = tabs[index].id;
};

let autoplayInterval;
onMounted(() => {
    autoplayInterval = setInterval(() => {
        isTransitioning.value = true;
        currentIndex.value++;
        // activeTab'ni yangilash
        const realIndex = (currentIndex.value - 1) % tabs.length;
        activeTab.value = tabs[realIndex < 0 ? tabs.length - 1 : realIndex].id;
    }, 5000);
});

onUnmounted(() => clearInterval(autoplayInterval));
</script>

<template>
    <section class="relative bg-white rounded-3xl w-full overflow-hidden min-h-auto lg:min-h-10">
        <div ref="sliderTrack" class="flex w-full h-full"
            :class="{ 'transition-transform duration-700 ease-in-out': isTransitioning }"
            :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }" @transitionend="handleTransitionEnd">
            <div v-for="(slide, idx) in infiniteTabs" :key="idx" class="w-full shrink-0 relative">
                <div
                    class="max-w-325 mx-auto  px-6 lg:px-14 pt-8 lg:pt-5 pb-10 lg:pb-0 flex flex-col lg:flex-row items-center">

                    <div class="max-w-2xl lg:text-left z-10 w-full lg:w-1/2">
                        <h1
                            class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight font-inter">
                            {{ slide.label }} bo'yicha <br class="hidden sm:block" />
                            birinchi sug'urta marketpleysi
                        </h1>
                        <p
                            class="mt-3 lg:mt-4 text-sm lg:text-lg text-gray-400 lg:text-gray-500 max-w-lg leading-relaxed font-inter">
                            Qog‘ozbozlik va bosh og‘riqsiz sug‘urta polislarini onlayn rasmiylashtiring
                        </p>

                        <div class="flex gap-2 mt-8">
                            <button
                                class="bg-main text-white font-medium py-4 px-20 rounded-lg mt-9 hover:bg-blue-700 transition-all self-end shadow-lg shadow-main/30">
                                Hisoblash
                            </button>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 flex justify-center  mt-8 mr-30 lg:mt-0">
                        <img src="https://cdn.ingos.ru/images/hero-banner-osago_shastlivyu-marshrut-promo-2025.svg"
                            alt="Insurance Illustration"
                            class="w-[95%] lg:w-[115%] h-72 lg:block hidden lg:h-100 object-contain object-right transform lg:translate-x-10 scale-110" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="max-w-325 mx-auto py-8 mt-10">
        <div class="mt-[-40px] p-10 pb-12 w-full lg:mx-auto bg-white rounded-4xl  relative z-30 border border-gray-50">
            <h2 class="text-xl lg:mb-10 mb-2 sm:text-2xl lg:text-4xl font-semibold text-gray-900 uppercase">
                E-OSAGO hisoblash
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 rounded-2xl lg:grid-cols-4 gap-4">
                <BaseInput mask-type="plate" v-model="carNumber" label="Davlat raqami" placeholder="01 A 777 AA" />
                <BaseInput mask-type="passport" v-model="passport" label="Texnik pasport" placeholder="AAF 1234567" />
                <BaseSelect label="Sug'urta turi" v-model="driverSelect" :options="driverNumber" />
                <button
                    class="bg-main text-white font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-all self-end shadow-lg shadow-main/30">
                    Hisoblash
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-main {
    background-color: #2563EB;
}

.shadow-main\/30 {
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}

/* Cheksiz harakat uchun transition */
.transition-transform {
    transition-property: transform;
}

/* Katta ekranlarda rasm effekti */
@media (min-width: 1024px) {
    img {
        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    }
}
</style>