<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/base-input.vue';
import BaseSelect from '@/components/base-select.vue';
import BaseCalendar from '@/components/base-calendar.vue';

const activeTab = ref('osago'); // auto, travel, health
const countryInput = ref('');
const carNumber = ref('')
const passport = ref('')
const driverSelect = ref('infinite')
const typeSelect = ref('full')

const tabs = [
    { id: 'osago', label: 'E-OSAGO', icon: '' },
    { id: 'kasko', label: 'KASKO', icon: '' },
    { id: 'travel', label: 'Sayohat', icon: '' }
];

const driverNumber = [
    { label: "Cheklanmagan", value: 'infinite', icon: '' },
    { label: '5 kishigacha', value: 'five', icon: '' },
];

const typeLicense = [
    { label: "To'liq KASKO", value: 'full', icon: '' },
    { label: 'Mini KASKO', value: 'mini', icon: '' },
];

const selectedCountries = ref([]);
const startDate = ref('');
const endDate = ref('');

// Options for the country select
const countryOptions = [
    { label: 'Turkiya', value: 'Turkiya', icon: '🇹🇷' },
    { label: 'BAA (Dubay)', value: 'BAA', icon: '🇦🇪' },
    { label: 'Yevropa (Shengen)', value: 'Shengen', icon: '🇪🇺' },
    { label: 'AQSH', value: 'AQSH', icon: '🇺🇸' },
    { label: 'Misr', value: 'Misr', icon: '🇪🇬' },
];

// Logic to add country from Select
const handleCountrySelect = (val) => {
    if (val && !selectedCountries.value.includes(val)) {
        selectedCountries.value.push(val);
    }
};

const removeCountry = (name) => {
    selectedCountries.value = selectedCountries.value.filter(c => c !== name);
};

</script>

<template>
    <section class="relative  lg:w-[85%] w-full lg:mx-auto m-0 min-h-auto lg:min-h-150  pb-0 lg:pb-0">
        <div class="max-w-325 mx-auto px-0 lg:px-4 pt-8 lg:pt-32 relative z-10">

            <div class="max-w-2xl lg:text-left">
                <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight font-inter">
                    O'zbekistondagi birinchi <br class="hidden sm:block" />
                    sug'urta marketpleysi
                </h1>

                <p
                    class="mt-3 lg:mt-4 text-sm lg:text-lg text-gray-400 lg:text-gray-500 max-w-lg lg:mx-0 leading-relaxed font-inter">
                    Qog‘ozbozlik va bosh og‘riqsiz sug‘urta polislarini onlayn rasmiylashtiring
                </p>
            </div>

            <div class="mt-6 lg:mt-10 relative z-20">
            </div>
        </div>

        <div class="lg:w-325 w-full max-w-5xl  rounded-4xl  relative z-30">
            <div class="flex gap-2 mb-8  p-1.5 rounded-2xl w-fit">
                <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                    :class="activeTab === tab.id ? 'bg-white shadow-lg shadow-[0_10px_14px_rgba(0,0,0,0.06)] text-black' : 'text-black hover:text-gray-700'"
                    class="lg:h-8.75 lg:w-28.5 first:ml-0 h-7.5 w-23 rounded-lg  transition-all cursor-pointer">
                    <span class="font-inter font-semibold">{{ tab.label }}</span>
                </button>
            </div>

            <div v-if="activeTab === 'osago'"
                class="grid grid-cols-1 md:grid-cols-2 p-10 bg-white rounded-2xl lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
                <BaseInput mask-type="plate" v-model="carNumber" label="Davlat raqami" placeholder="01 A 777 AA" />
                <BaseInput mask-type="passport" v-model="passport" label="Texnik pasport" placeholder="AAF 1234567" />
                <BaseSelect label="Sug'urta turi" v-model="driverSelect" :options="driverNumber"
                    placeholder="Sug'urtani tanlang" />
                <button
                    class="bg-main text-white font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-all self-end shadow-lg shadow-main/30">
                    Hisoblash
                </button>
            </div>

            <div v-if="activeTab === 'kasko'"
                class="grid grid-cols-1 md:grid-cols-2 p-10 bg-white rounded-2xl lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
                <BaseInput mask-type="plate" v-model="carNumber" label="Davlat raqami" placeholder="01 A 777 AA" />
                <BaseInput mask-type="passport" v-model="passport" label="Texnik pasport" placeholder="AAF 1234567" />
                <BaseSelect label="Sug'urta turi" v-model="typeSelect" :options="typeLicense"
                    placeholder="Sug'urtani tanlang" />
                <button
                    class="bg-main text-white font-medium py-4 px-8 rounded-lg hover:bg-blue-700 transition-all self-end shadow-lg shadow-main/30">
                    Hisoblash
                </button>
            </div>

            <div v-if="activeTab === 'travel'"
                class="bg-white rounded-2xl min-h-50 p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">

                    <div class="lg:col-span-1 space-y-3">
                        <BaseSelect label="Qayerga borasiz?" placeholder="Davlatni tanlang..." :options="countryOptions"
                            @update:modelValue="handleCountrySelect" />
                    </div>

                    <BaseCalendar label="Sayohat boshi" placeholder="Dan" v-model="startDate" />

                    <BaseCalendar label="Sayohat yakuni" placeholder="Gacha" v-model="endDate" />

                    <div class="flex flex-col gap-2">

                        <button
                            class="w-full bg-main text-white font-bold h-[54px] rounded-2xl shadow-lg shadow-main/20 hover:shadow-main/40 hover:translate-y-[-2px] transition-all active:scale-95 flex items-center justify-center gap-2">
                            <span>Hisoblash</span>
                        </button>
                    </div>
                </div>

                <div v-if="selectedCountries.length > 0" class="flex flex-wrap gap-2 pt-1">
                    <div v-for="country in selectedCountries" :key="country"
                        class="flex items-center gap-2 bg-gray-50 border border-gray-100 pl-3 pr-2 py-2 rounded-xl group hover:border-main/30 transition-all">
                        <span class="text-sm font-semibold text-gray-700">{{ country }}</span>
                        <button @click="removeCountry(country)"
                            class="w-6 h-6 flex items-center justify-center rounded-lg bg-white shadow-sm text-gray-400 hover:text-red-500 hover:shadow-md transition-all">
                            ✕
                        </button>
                    </div>
                </div>
            </div>

        </div>



        <div
            class="relative lg:absolute mt-4 lg:mt-0 bottom-10 right-0 w-full lg:flex hidden lg:w-[50%] h-60 sm:h-75px lg:h-full pointer-events-none select-none justify-center lg:justify-end">
            <img src="@/assets/banner.webp" alt="Insurance Illustration"
                class="w-[85%] lg:w-[90%] h-full object-contain object-center lg:object-right" />
        </div>
    </section>
</template>



<style scoped>
/* Mask only applies on desktop where the image overlaps the background */
@media (min-width: 1024px) {
    img {
        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    }
}
</style>