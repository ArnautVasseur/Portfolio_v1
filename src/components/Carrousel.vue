<script setup>
import CarrouselItem1 from './CarouselSlides.vue/CarrouselItem-1.vue';
import CarrouselItem2 from './CarouselSlides.vue/CarrouselItem-2.vue';
import CarrouselItem3 from './CarouselSlides.vue/CarrouselItem-3.vue';
import CarrouselItem4 from './CarouselSlides.vue/CarrouselItem-4.vue';
</script>

<template>
    <div class="mt-52">
        <div class="w-5/6 h-[800px] mb-52 flex justify-center align-middle items-center border-l-2 border-r-2 border-white">
            <CarrouselItem1 v-if="slide1" />
            <CarrouselItem2 v-if="slide2" />
            <CarrouselItem3 v-if="slide3" />
            <CarrouselItem4 v-if="slide4" />
        </div>
        <div class="text-white flex flex-row gap-5 justify-center w-16">
            <button class="border-white border p-5"
                @click="slide1 = true, slide2 = false, slide3 = false, slide4 = false">1</button>
            <button class="border-white border p-5"
                @click="slide2 = true, slide1 = false, slide3 = false, slide4 = false">2</button>
            <button class="border-white border p-5"
                @click="slide3 = true, slide1 = false, slide2 = false, slide4 = false">3</button>
            <button class="border-white border p-5"
                @click="slide4 = true, slide1 = false, slide2 = false, slide3 = false">4</button>
        </div>
    </div>
</template>

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