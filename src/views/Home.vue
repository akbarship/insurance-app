<template>
    <section class="relative w-full min-h-auto lg:min-h-150 overflow-hidden pb-8 lg:pb-0">
        <div class="max-w-325 mx-auto px-0 lg:px-4 pt-8 lg:pt-32 relative z-10">

            <div class="max-w-2xl lg:text-left">
                <h1 class="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight font-inter">
                    Первый страховой <br class="hidden sm:block" />
                    маркетплейс в Узбекистане
                </h1>

                <p
                    class="mt-3 lg:mt-6 text-sm lg:text-lg text-gray-400 lg:text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-inter">
                    Онлайн оформление страховых полисов без головной боли и волокиты
                </p>
            </div>

            <div class="mt-6 lg:mt-10 relative z-20">
            </div>
        </div>

        <div
            class="relative lg:absolute mt-4 lg:mt-0 top-0 right-0 w-full flex invisible lg:visible lg:w-[50%] h-[240px] sm:h-[300px] lg:h-full pointer-events-none select-none justify-center lg:justify-end">
            <img src="@/assets/banner.webp" alt="Insurance Illustration"
                class="w-[85%] lg:w-[90%] h-full object-contain object-center lg:object-right" />
        </div>
    </section>
</template>

<style scoped>
/* Mask only applies on desktop where the image overlaps the background */
@media (min-width: 1024px) {
    img {
        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    }
}
</style>