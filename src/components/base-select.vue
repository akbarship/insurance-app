<template>
    <div class="flex flex-col gap-1 w-full relative" v-click-outside="close">
        <label v-if="label" class="text-xs font-medium text-gray-400 ml-1 capitalize">{{ label }}</label>

        <button @click="isOpen = !isOpen" type="button" :class="[
            'w-full flex items-center justify-between px-4 py-3.5 bg-gray-100 border border-transparent rounded-lg transition-all font-medium text-left',
            isOpen ? 'bg-white border-main ring-4 ring-main/5' : 'hover:bg-gray-100'
        ]">
            <div class="flex items-center gap-3">
                <span class="text-xl font-inter" v-if="selectedOption?.icon">{{ selectedOption.icon }}</span>
                <span :class="modelValue ? 'text-gray-900' : 'text-gray-400'">
                    {{ selectedOption ? selectedOption.label : placeholder }}
                </span>
            </div>


            <span :class="{ 'rotate-180': isOpen }" class="transition-transform duration-200 text-xs">
                <toggleIcon />
            </span>
        </button>

        <transition name="fade-slide">
            <div v-if="isOpen"
                class="absolute z-200 top-[calc(100%+8px)] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/50">
                <div class="max-h-60 overflow-y-auto p-2">
                    <div v-for="option in options" :key="option.value" @click="select(option)" :class="[
                        'flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-colors',
                        modelValue === option.value ? 'bg-main/5 text-main' : 'text-gray-700 hover:bg-gray-50'
                    ]">
                        <span class="text-lg font-inter">{{ option.icon }}</span>
                        <span class="font-medium font-inter">{{ option.label }}</span>
                        <div v-if="modelValue === option.value" class="ml-auto">
                            <div class="w-2 h-2 rounded-full bg-main"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import toggleIcon from './icons/toggle-icon.vue';
import { ref, computed } from 'vue';

const props = defineProps({
    label: String,
    placeholder: String,
    options: Array, // [{ label: 'Tesla', value: 'tesla', icon: '🚗' }]
    modelValue: [String, Number]
});

const emit = defineEmits(['update:modelValue']);
const isOpen = ref(false);

const selectedOption = computed(() =>
    props.options.find(opt => opt.value === props.modelValue)
);

const select = (option) => {
    emit('update:modelValue', option.value);
    isOpen.value = false;
};

const close = () => { isOpen.value = false; };

// Simple click-outside directive
const vClickOutside = {
    mounted(el, binding) {
        el.clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.removeEventListener('click', el.clickOutsideEvent);
    }
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