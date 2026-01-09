<template>
    <footer class="bg-[#F8F9FA] pt-16 pb-8 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                <div class="flex flex-col items-center md:items-start text-center md:text-left">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl font-bold text-brand">LOGO</span>
                    </div>
                    <h4 class="text-gray-900 font-bold mb-4">Ijtimoiy tarmoqlar</h4>
                    <div class="flex gap-3">
                        <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link"
                            class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-500 transition-all group">
                            <component :is="icon.component" class="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
                        </a>
                    </div>
                </div>

                <div class="hidden lg:block"></div>

                <div class="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 class="text-gray-900 font-bold mb-6 text-lg">Hizmatlar</h4>
                    <ul class="space-y-4">
                        <li v-for="link in services" :key="link">
                            <a href="#"
                                class="text-gray-600 font-medium hover:text-blue-600 transition-colors uppercase tracking-wide text-sm">
                                {{ link }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col items-center md:items-start text-center md:text-start">
                    <h4 class="text-gray-900 font-bold mb-6 text-lg">Aloqa uchun</h4>
                    <ul class="space-y-5 flex items-center lg:items-start flex-col">
                        <li class="flex items-center gap-3 group cursor-pointer">

                            <span class="text-gray-600 font-medium group-hover:text-blue-600 transition-colors">Onlayn
                                suhbat</span>
                        </li>
                        <li class="flex items-center gap-3">

                            <a href="tel:+998555000092" class="text-gray-600 font-medium hover:text-blue-600">+998 55
                                500 00 92</a>
                        </li>
                        <li class="flex items-center gap-3">

                            <a href="mailto:info@zorgo.uz"
                                class="text-gray-600 font-medium hover:text-blue-600">info@zorgo.uz</a>
                        </li>
                        <li class="flex items-start gap-3">

                            <span class="text-gray-600 font-medium">Toshkent, Akbarshox 15.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-gray-400 font-medium text-sm order-3 md:order-1">
                    © 2026. OOO «Akbarshox»
                </p>

                <div class="flex flex-wrap justify-center gap-8 order-1 md:order-2">
                    <a href="#" class="text-gray-400 font-medium text-sm hover:text-gray-600 transition-colors">Ommaviy
                        taklif</a>
                    <a href="#"
                        class="text-gray-400 font-medium text-sm hover:text-gray-600 transition-colors">Foydalanuvchi
                        shartnomasi</a>
                </div>

                <div class="hidden md:block w-32 order-3"></div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import youtubeIcon from '../icons/youtube-icon.vue';
import instagramIcon from '../icons/instagram-icon.vue';
import telegramIcon from '../icons/telegram-icon.vue';
import facebookIcon from '../icons/facebook-icon.vue';

const services = ['OSAGO', 'KASKO', 'Sayohat'];

const socialIcons = [
    { name: 'telegram', component: telegramIcon, link: '#' },
    { name: 'instagram', component: instagramIcon, link: '#' },
    { name: 'facebook', component: facebookIcon, link: '#' },
    { name: 'youtube', component: youtubeIcon, link: '#' }
];
</script>

<style scoped>
footer {
    font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>