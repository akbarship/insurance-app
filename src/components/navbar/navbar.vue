<script setup>
import { ref } from 'vue';
import toggle from './toggle.vue';
import contact from './contact.vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
    <header class="w-full lg:min-h-24.5 sticky top-0 z-100">
        <div class="max-w-325 mx-auto px-4 py-4">
            <div class="flex items-center justify-between h-12">
                <div class="flex items-center gap-3">
                    <span class="text-3xl font-bold text-brand">LOGO</span>
                </div>




                <div class="flex items-center gap-3">
                    <div class="hidden lg:flex items-center gap-2">
                        <contact class="mr-7.5" />
                        <button
                            class="font-inter cursor-pointer w-32.5 px-6 py-2.5 border border-gray-200 rounded-xl bg-white font-medium text-gray-900 hover:bg-gray-50 transition-colors shadow-sm">
                            Kirish
                        </button>
                    </div>
                    <toggle />
                    <button @click="toggleMobileMenu" class="lg:hidden p-2 text-gray-600 cursor-pointer">
                        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>


            </div>
        </div>



        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-100 translate-x-0" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
            <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[150] lg:hidden">
                <div class="absolute inset-0 bg-black/20 backdrop-blur-sm" @click="toggleMobileMenu"></div>

                <div class="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl p-6 flex flex-col gap-6">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-2xl font-bold text-brand">LOGO</span>
                        <button @click="toggleMobileMenu" class="p-2">✕</button>
                    </div>

                    <div class="border-b border-gray-100 pb-6">
                        <p class="text-xs text-gray-400 uppercase tracking-widest mb-3">Aloqa</p>
                        <contact />
                    </div>

                    <div class="flex flex-col gap-4">
                        <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Sozlamalar</p>

                        <button
                            class="w-full py-3 border border-gray-200 rounded-xl bg-white font-semibold text-gray-900 shadow-sm active:scale-95 transition-transform">
                            Kirish
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>