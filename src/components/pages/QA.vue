<template>
    <div class="max-w-full mx-auto p-4 space-y-3 md:space-y-4">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8 px-2">
            Ko'p beriladigan savollar
        </h2>

        <div v-for="(item, index) in faqList" :key="index"
            class="border border-gray-100 rounded-[20px] md:rounded-[24px] bg-white overflow-hidden transition-all duration-300 shadow-sm"
            :class="{ 'shadow-md border-blue-50': activeIndex === index }">
            <button @click="toggleItem(index)"
                class="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group">
                <span class="text-base md:text-lg font-bold transition-colors duration-200 pr-4"
                    :class="activeIndex === index ? 'text-blue-600' : 'text-gray-900'">
                    {{ item.question }}
                </span>

                <div class="transition-transform duration-300 transform shrink-0"
                    :class="{ 'rotate-180': activeIndex === index }">
                    <svg width="20" height="20" class="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" :stroke="activeIndex === index ? '#2563EB' : '#1F2937'"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </button>

            <div v-show="activeIndex === index"
                class="px-5 md:px-6 pb-5 md:pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <p class="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                    {{ item.answer }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggleItem = (index) => {
    if (activeIndex.value === index) {
        activeIndex.value = null;
    } else {
        activeIndex.value = index;
    }
};

const faqList = ref([
    {
        question: "VIP sug'urtada qarindoshlarni qo'shish shartmi?",
        answer: "Agar mashinangizda qarindoshlikni tasdiqlaydigan hujjat bo'lsa, qarindoshlarni sug'urta polisiga qo'shish shart emas. Agar hujjat bo'lmasa qarindoshlarni qo'shish kerak, chunki qarindoshlar mashinani ishonchnomasiz haydaydilar."
    },
    {
        question: "Onlayn polisni qanday olaman?",
        answer: "To'lov amalga oshirilgandan so'ng, sug'urta polisi darhol siz ko'rsatgan elektron pochta manziliga yoki Telegram botimiz orqali yuboriladi."
    },
    {
        question: "Sug'urta hodisasi yuz berganda nima qilish kerak?",
        answer: "Zudlik bilan bizning 24/7 qo'llab-quvvatlash markazimizga qo'ng'iroq qiling va voqea joyini rasmga tushiring. Mutaxassislarimiz sizga keyingi qadamlarni tushuntirishadi."
    }
]);
</script>

<style scoped>
.animate-in {
    animation-duration: 300ms;
}
</style>