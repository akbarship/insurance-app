<template>
    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                5 daqiqada polisni rasmiylashtirish
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="step in steps" :key="step.id"
                    class="bg-white p-5 lg:p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 group">
                    <span
                        class="text-blue-500 font-bold font-inter text-xl block mb-4 group-hover:scale-110 transition-transform origin-left">
                        {{ step.id }}
                    </span>

                    <p class="text-gray-900 font-medium font-inter text-lg leading-tight">
                        {{ step.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const steps = [
    { id: '01', text: "Sayohatchilar ma'lumotlarini kiriting" },
    { id: '02', text: "Narxlarni solishtiring va eng yaxshisini tanlang" },
    { id: '03', text: "Polisga to'lov qiling" },
    { id: '04', text: "To'lovdan so'ng darhol polisni oling" }
];
</script>