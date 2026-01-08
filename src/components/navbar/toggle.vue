<template>
    <div class="relative " ref="dropdownRef">
        <button @click="toggleDropdown"
            class="flex cursor-pointer shadow items-center border-none gap-2 px-4 py-2.5 border transition-all duration-200 rounded-xl -sm min-w-35.5 justify-between group"
            :class="isOpen
                ? 'bg-white '
                : 'bg-blue-100 '">
            <div class="flex cursor-pointer items-center gap-2">
                <img class="leading-none w-5 h-5 shadow rounded-full object-cover" :src="selectedLang.flag" alt="" />
                <span class="font-medium font-inter text-gray-800">{{ selectedLang.code }}</span>
            </div>

            <span :class="{ 'rotate-180': isOpen }" class="transition-transform duration-200 text-blue-500 text-xs">
                <toggleIcon />
            </span>
        </button>

        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen"
                class="absolute right-0 lg:left-0 mt-2 w-48 lg:w-full bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50 p-1">

                <div v-for="lang in languages" :key="lang.code">
                    <button @click="selectLanguage(lang)"
                        class="cursor-pointer w-full flex items-center justify-between px-4 py-3 transition-all duration-200 rounded-xl"
                        :class="selectedLang.code === lang.code
                            ? 'bg-blue-50 text-main'
                            : 'bg-transparent text-gray-700 hover:bg-gray-50'">

                        <div class="flex items-center gap-2">
                            <img class="w-6 h-4 object-cover rounded-sm" :src="lang.flag" />
                            <span class="font-medium font-inter">
                                {{ lang.code }}
                            </span>
                        </div>

                        <div v-if="selectedLang.code === lang.code"
                            class="w-5 h-5 flex items-center justify-center text-main">
                            <check-icon />
                        </div>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import checkIcon from '@/components/icons/check-icon.vue';
import toggleIcon from '@/components/icons/toggle-icon.vue';
import uz from '@/assets/uz.png'
import ru from '@/assets/ru.png'


// State management
const languages = [
    { code: 'Ру', name: 'Русский', flag: ru },
    { code: 'O\'z', name: 'O\'zbekcha', flag: uz }
];

const isOpen = ref(false);
const selectedLang = ref(languages[1]);


// Actions
const toggleDropdown = () => (isOpen.value = !isOpen.value);

const selectLanguage = (lang) => {
    selectedLang.value = lang;
    isOpen.value = false;
};

// Close dropdown when clicking outside
const dropdownRef = ref(null);
const closeOnClickOutside = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        isOpen.value = false;
    }
};

onMounted(() => window.addEventListener('click', closeOnClickOutside));
onUnmounted(() => window.removeEventListener('click', closeOnClickOutside));
</script>