<template>
    <div class="min-h-screen flex flex-col bg-gray-100">

        <!-- Navbar -->
        <navbar />

        <!-- Page content -->
        <main class="flex-1">
            <div class="max-w-325 mx-auto px-4 py-8">
                <router-view />
            </div>
            <slider />

        </main>

        <!-- Footer -->

    </div>
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import slider from '@/components/slider.vue';
</script>
