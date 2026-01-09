<template>
    <div class="flex flex-col gap-1 w-full">
        <label v-if="label" class="text-xs font-medium text-gray-400 ml-1">{{ label }}</label>
        <div class="relative group">
            <input v-model="displayValue" @input="handleInput" :placeholder="placeholder" maxlength="11"
                class="w-full px-4 py-3.5 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-main focus:ring-4 focus:ring-main/5 outline-none transition-all font-mono font-medium text-gray-900 placeholder:text-gray-400 placeholder:font-sans" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['label', 'placeholder', 'modelValue', 'maskType']);
const emit = defineEmits(['update:modelValue']);

const displayValue = ref(props.modelValue || '');

const handleInput = (e) => {
    let val = e.target.value;

    const masks = {
        plate: () => {
            val = val.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            let formatted = "";
            if (val.length > 0) formatted += val.substring(0, 2);
            if (val.length > 2) formatted += " " + val.substring(2, 3);
            if (val.length > 3) formatted += " " + val.substring(3, 6);
            if (val.length > 6) formatted += " " + val.substring(6, 8);
            return displayValue.value = formatted;
        },
        passport: () => {
            let v = val.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            let letters = v.substring(0, 3).replace(/[^A-Z]/g, "");
            let numbers = v.substring(3, 10).replace(/[^0-9]/g, "");
            return (letters + " " + numbers).trim();
        },
        cardNumber: () => {
            return val.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ").substring(0, 19) || "";
        }
    };

    if (props.maskType && masks[props.maskType]) {
        displayValue.value = masks[props.maskType]();
    } else {
        displayValue.value = val;
    }

    emit('update:modelValue', displayValue.value);

};
</script>