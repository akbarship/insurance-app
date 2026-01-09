<template>
    <section class="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        <div
            class="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative min-h-[450px]">

            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Har doim qo'lda!
                </h2>
                <p class="text-gray-600 text-lg md:text-xl font-medium mb-8">
                    Rasmiy mobil ilovamizni yuklab oling
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-6">
                    <div class="hidden sm:block w-32 h-32 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div
                            class="w-full h-full bg-[#344054] rounded-lg flex items-center justify-center text-white text-[10px] text-center p-2">
                            <img class="w-full rounded-lg" :src="QR" alt="qr">
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 w-full sm:w-auto">
                        <a href="#" class="transition-transform active:scale-95 hover:opacity-90">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="App Store" class="h-12 w-auto mx-auto" />
                        </a>
                        <a href="#" class="transition-transform active:scale-95 hover:opacity-90">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play" class="h-12 w-auto mx-auto" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end relative">
                <div class="relative w-70 md:w-[320px] lg:w-95 transition-all duration-500 hover:-translate-y-2">
                    <img :src="AppMockup" alt="Mobile App"
                        class="w-full h-auto cursor-pointer drop-shadow-2xl z-20 -bottom-61 absolute" />


                    <div
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-[100px] rounded-full -z-10">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import AppMockup from '@/assets/insurance-banner.png'
import QR from '@/assets/frame.png'
</script>

<style scoped>
h2 {
    letter-spacing: -0.02em;
}
</style>