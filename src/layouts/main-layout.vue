<template>
    <div class="min-h-screen flex flex-col bg-gray-100">

        <!-- Navbar -->
        <navbar />

        <!-- Page content -->
        <main class="flex-1">
            <router-view />
        </main>

        <!-- Footer -->

    </div>
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import slider from '@/components/slider.vue';
</script>
