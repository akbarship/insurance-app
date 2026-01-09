<template>
    <svg :class="{ 'rotate-180 text-main': isOpen }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="10"
        class="transition-all rotate-180 text-primary">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
    </svg>
</template>


<script setup>
const props = defineProps(['isOpen',]);
</script>