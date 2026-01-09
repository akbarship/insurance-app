<template>
    <div class="flex flex-col gap-1 w-full relative" v-click-outside="close">
        <label v-if="label" class="text-xs font-medium text-gray-400 ml-1 capitalize">{{ label }}</label>

        <div @click="isOpen = !isOpen" class="relative group cursor-pointer">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-main">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>

            <input readonly :value="formattedDate" :placeholder="placeholder"
                class="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl cursor-pointer transition-all font-medium text-gray-900 placeholder:text-gray-400 group-hover:bg-gray-100"
                :class="{ 'bg-white border-main ring-4 ring-main/5': isOpen }" />
        </div>

        <transition name="fade-slide">
            <div v-if="isOpen"
                class="absolute z-[100] top-[calc(100%+8px)] left-0 w-80 bg-white border border-gray-100 rounded-3xl shadow-2xl p-4">
                <div class="flex items-center justify-between mb-4 px-2">
                    <button @click.stop="changeMonth(-1)"
                        class="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <span class="font-bold text-gray-900">{{ monthNames[currentMonth] }} {{ currentYear }}</span>
                    <button @click.stop="changeMonth(1)"
                        class="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                <div class="grid grid-cols-7 mb-2">
                    <span v-for="day in weekDays" :key="day"
                        class="text-center text-[10px] font-bold text-gray-400 uppercase">{{ day }}</span>
                </div>

                <div class="grid grid-cols-7 gap-1">
                    <div v-for="empty in firstDayOfMonth" :key="'empty-' + empty"></div>
                    <button v-for="day in daysInMonth" :key="day" @click.stop="selectDate(day)" :class="[
                        'aspect-square flex items-center justify-center rounded-xl text-sm font-semibold transition-all',
                        isToday(day) ? 'text-main' : 'text-gray-700',
                        isSelected(day) ? 'bg-main text-white shadow-lg shadow-main/30' : 'hover:bg-gray-50'
                    ]">
                        {{ day }}
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['label', 'placeholder', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const date = new Date();
const currentMonth = ref(date.getMonth());
const currentYear = ref(date.getFullYear());

const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
const weekDays = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

const formattedDate = computed(() => {
    if (!props.modelValue) return '';
    const d = new Date(props.modelValue);
    return d.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
});

const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value + 1, 0).getDate());
const firstDayOfMonth = computed(() => {
    let first = new Date(currentYear.value, currentMonth.value, 1).getDay();
    return first === 0 ? 6 : first - 1; // Adjust for Monday start
});

const selectDate = (day) => {
    const selected = new Date(currentYear.value, currentMonth.value, day);
    emit('update:modelValue', selected.toISOString().split('T')[0]);
    isOpen.value = false;
};

const isSelected = (day) => {
    if (!props.modelValue) return false;
    const d = new Date(props.modelValue);
    return d.getDate() === day && d.getMonth() === currentMonth.value && d.getFullYear() === currentYear.value;
};

const isToday = (day) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === currentMonth.value && today.getFullYear() === currentYear.value;
};

const changeMonth = (val) => {
    currentMonth.value += val;
    if (currentMonth.value > 11) {
        currentMonth.value = 0;
        currentYear.value++;
    } else if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
    }
};

const close = () => { isOpen.value = false; };

const vClickOutside = {
    mounted(el, binding) {
        el.clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target))) binding.value(event);
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) { document.removeEventListener('click', el.clickOutsideEvent); }
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.2s ease-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>