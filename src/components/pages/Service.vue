<template>
    <section class="max-w-7xl mx-auto mt-10 lg:mt-13 px-4 py-10 lg:py-16">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 lg:mb-12">
            Istalgan xizmatni tanlang
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

            <div
                class="lg:col-span-7 bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[400px] relative overflow-hidden shadow-sm border border-gray-50">
                <div class="max-w-full md:max-w-md z-10">
                    <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                        Biz kelajak haqida qayg'uramiz!
                    </h3>
                    <p class="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                        Ofisga borish va hujjatbozlikdan voz keching — sug‘urtani onlayn rasmiylashtiring.
                        Biz sizga bozordagi eng ishonchli va qulay variantlarni taqdim etamiz.
                    </p>
                </div>
                <button
                    class="bg-blue-600 text-white font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl w-full sm:w-fit shadow-lg shadow-blue-100 mt-6 z-10 transition-transform active:scale-95">
                    Rasmiylashtirish
                </button>
                <img :src="SecurityPng"
                    class="absolute right-[-20px] bottom-[-10px] md:right-4 md:bottom-4 w-40 md:w-64 opacity-20 md:opacity-100 object-contain pointer-events-none" />
            </div>

            <div
                class="lg:col-span-5 bg-[#1a1c23] rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white flex flex-col justify-between shadow-sm">
                <div class="z-10">
                    <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">KASKO Sug'urtasi</h3>
                    <p class="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                        Mashinani YTH, olib qochilish, yong‘in, tabiiy ofat va boshqa risklardan sug‘urtalang.
                    </p>
                    <div class="flex items-end gap-1.5 md:gap-2 mt-8 md:mt-12 h-20 md:h-24">
                        <div v-for="h in [40, 60, 30, 100, 50, 80]" :key="h" :style="{ height: h + '%' }"
                            class="flex-1 bg-gray-700 rounded-sm transition-all duration-500"
                            :class="{ 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]': h === 100 }"></div>
                    </div>
                </div>
                <button
                    class="border border-gray-600 hover:bg-white hover:text-black transition-all text-white font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl w-full mt-6 active:scale-95">
                    Rasmiylashtirish
                </button>
            </div>

            <div
                class="lg:col-span-full bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col justify-between min-h-[380px] md:min-h-[400px] relative overflow-hidden shadow-sm border border-gray-50">
                <div class="max-w-full lg:max-w-3xl z-10">
                    <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                        Turistik sug’urtasini nega rasmiylashtirish kerak?
                    </h3>
                    <p class="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                        Travel polisi – bu boshqa davlat hududida boʻlganingizda turli xavflardan moliyaviy himoya
                        hisoblanadi.
                        Polis sizning xotirjamligingizni kafolatlaydi va mablagʻingizni kutilmagan xarajatlardan
                        tejaydi.
                    </p>
                </div>
                <button
                    class="bg-blue-600 text-white font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl w-full sm:w-fit shadow-lg shadow-blue-100 mt-6 z-10 active:scale-95">
                    Rasmiylashtirish
                </button>
                <img :src="TravelPng"
                    class="absolute right-[-40px] md:right-10 bottom-0 md:bottom-4 w-64 md:w-80 lg:w-[450px] opacity-15 md:opacity-100 object-contain pointer-events-none" />
            </div>
        </div>
    </section>
</template>


<script setup>
import SecurityPng from '@/assets/security.png'
import TravelPng from '@/assets/travvell.png'

</script>