<script setup>
import CarrouselItem1 from './CarouselSlides.vue/CarrouselItem-1.vue';
import CarrouselItem2 from './CarouselSlides.vue/CarrouselItem-2.vue';
import CarrouselItem3 from './CarouselSlides.vue/CarrouselItem-3.vue';
import CarrouselItem4 from './CarouselSlides.vue/CarrouselItem-4.vue';
</script>

<template>
    <div class="container-box relative w-2/3 h-[800px] m-auto mt-52 flex flex-col justify-center align-middle items-center">
        <CarrouselItem1 v-if="slide1" class="absolute" />
        <CarrouselItem2 v-if="slide2" class="absolute" />
        <CarrouselItem3 v-if="slide3" class="absolute" />
        <CarrouselItem4 v-if="slide4" class="absolute" />
    </div>
    <div class="text-white flex gap-5 ">
        <button class="border-white border p-5"
            @click="slide1 = true, slide2 = false, slide3 = false, slide4 = false">1</button>
        <button class="border-white border p-5"
            @click="slide2 = true, slide1 = false, slide3 = false, slide4 = false">2</button>
        <button class="border-white border p-5"
            @click="slide3 = true, slide1 = false, slide2 = false, slide4 = false">3</button>
        <button class="border-white border p-5"
            @click="slide4 = true, slide1 = false, slide2 = false, slide3 = false">4</button>
    </div>
</template>

<style scoped>
.container-box::before {
    content: "";
    background: white;
    position: absolute;
    left: -30px;
    height: 100%;
    bottom: 0;
    width: 2px;
}

.container-box::after {
    content: "";
    background: white;
    position: absolute;
    right: 30px;
    height: 100%;
    bottom: 0;
    width: 2px;
}
</style>

<script>
export default {
    data() {
        return {
            slide1: true,
            slide2: false,
            slide3: false,
            slide4: false,
        }
    }
}
</script>