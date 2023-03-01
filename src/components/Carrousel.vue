<script setup>
import CarrouselItem1 from './CarouselSlides.vue/CarrouselItem-1.vue';
import CarrouselItem2 from './CarouselSlides.vue/CarrouselItem-2.vue';
import CarrouselItem3 from './CarouselSlides.vue/CarrouselItem-3.vue';
import CarrouselItem4 from './CarouselSlides.vue/CarrouselItem-4.vue';
</script>

<template>
    <div class="flex flex-col justify-between items-center align-middle gap-16 border-white">
        <div class="w-5/6 h-[800px] flex justify-center align-middle items-center border-l-2 border-r-2 border-white">
            <CarrouselItem1 v-if="slide1" />
            <CarrouselItem2 v-if="slide2" />
            <CarrouselItem3 v-if="slide3" />
            <CarrouselItem4 v-if="slide4" />
        </div>
        <div class="text-white flex flex-row gap-16 justify-center">
            <button class="flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg duration-500 bottom-28"
                @mouseover="mouseOver1()" @mouseleave="mouseLeave1()" @click="slide1 = true, slide2 = false, slide3 = false, slide4 = false"
                data-aos="fade-up" data-aos-delay="100">
                <div id="BorderL1" class="h-[50px] w-[2px] bg-white"></div>
                <div class="flex flex-col justify-between items-center align-middle gap-10">
                    <div id="BorderT1" class="h-[2px] w-[50px] bg-white"></div>
                    <p class="text-center text-2xl">1</p>
                    <div id="BorderB1" class="h-[2px] w-[50px] bg-white"></div>
                </div>
                <div id="BorderR1" class="h-[50px] w-[2px] bg-white"></div>
            </button>

            <button class="flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg  duration-500 bottom-28"
                @mouseover="mouseOver2()" @mouseleave="mouseLeave2()" @click="slide2 = true, slide1 = false, slide3 = false, slide4 = false"
                data-aos="fade-up" data-aos-delay="200">
                <div id="BorderL2" class="h-[50px] w-[2px] bg-white"></div>
                <div class="flex flex-col justify-between items-center align-middle gap-10">
                    <div id="BorderT2" class="h-[2px] w-[50px] bg-white"></div>
                    <p class="text-center text-2xl">2</p>
                    <div id="BorderB2" class="h-[2px] w-[50px] bg-white"></div>
                </div>
                <div id="BorderR2" class="h-[50px] w-[2px] bg-white"></div>
            </button>

            <button class="flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg  duration-500 bottom-28"
                @mouseover="mouseOver3()" @mouseleave="mouseLeave3()" @click="slide3 = true, slide1 = false, slide2 = false, slide4 = false"
                data-aos="fade-up" data-aos-delay="300">
                <div id="BorderL3" class="h-[50px] w-[2px] bg-white"></div>
                <div class="flex flex-col justify-between items-center align-middle gap-10">
                    <div id="BorderT3" class="h-[2px] w-[50px] bg-white"></div>
                    <p class="text-center text-2xl">3</p>
                    <div id="BorderB3" class="h-[2px] w-[50px] bg-white"></div>
                </div>
                <div id="BorderR3" class="h-[50px] w-[2px] bg-white"></div>
            </button>

            <button class="flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg  duration-500 bottom-28"
                @mouseover="mouseOver4()" @mouseleave="mouseLeave4()" @click="slide4 = true, slide1 = false, slide2 = false, slide3 = false"
                data-aos="fade-up" data-aos-delay="400">
                <div id="BorderL4" class="h-[50px] w-[2px] bg-white"></div>
                <div class="flex flex-col justify-between items-center align-middle gap-10">
                    <div id="BorderT4" class="h-[2px] w-[50px] bg-white"></div>
                    <p class="text-center text-2xl">4</p>
                    <div id="BorderB4" class="h-[2px] w-[50px] bg-white"></div>
                </div>
                <div id="BorderR4" class="h-[50px] w-[2px] bg-white"></div>
            </button>
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
    },
    methods: {
        mouseOver1(){
            document.getElementById("BorderT1").style.transitionDuration ="300ms"
            document.getElementById("BorderL1").style.transitionDuration ="300ms"
            document.getElementById("BorderR1").style.transitionDuration ="300ms"
            document.getElementById("BorderB1").style.transitionDuration ="300ms"
            document.getElementById("BorderT1").style.transform ="translateY(22px)"
            document.getElementById("BorderL1").style.transform ="translateX(20px)"
            document.getElementById("BorderR1").style.transform ="translateX(-20px)"
            document.getElementById("BorderB1").style.transform ="translateY(-22px)"
        },
        mouseLeave1(){
            document.getElementById("BorderT1").style.transform ="translateY(0px)"
            document.getElementById("BorderL1").style.transform ="translateX(0px)"
            document.getElementById("BorderR1").style.transform ="translateX(0px)"
            document.getElementById("BorderB1").style.transform ="translateY(0px)"
        },

        mouseOver2(){
            document.getElementById("BorderT2").style.transitionDuration ="300ms"
            document.getElementById("BorderL2").style.transitionDuration ="300ms"
            document.getElementById("BorderR2").style.transitionDuration ="300ms"
            document.getElementById("BorderB2").style.transitionDuration ="300ms"
            document.getElementById("BorderT2").style.transform ="translateY(22px)"
            document.getElementById("BorderL2").style.transform ="translateX(20px)"
            document.getElementById("BorderR2").style.transform ="translateX(-20px)"
            document.getElementById("BorderB2").style.transform ="translateY(-22px)"
        },
        mouseLeave2(){
            document.getElementById("BorderT2").style.transform ="translateY(0px)"
            document.getElementById("BorderL2").style.transform ="translateX(0px)"
            document.getElementById("BorderR2").style.transform ="translateX(0px)"
            document.getElementById("BorderB2").style.transform ="translateY(0px)"
        },

        mouseOver3(){
            document.getElementById("BorderT3").style.transitionDuration ="300ms"
            document.getElementById("BorderL3").style.transitionDuration ="300ms"
            document.getElementById("BorderR3").style.transitionDuration ="300ms"
            document.getElementById("BorderB3").style.transitionDuration ="300ms"
            document.getElementById("BorderT3").style.transform ="translateY(22px)"
            document.getElementById("BorderL3").style.transform ="translateX(20px)"
            document.getElementById("BorderR3").style.transform ="translateX(-20px)"
            document.getElementById("BorderB3").style.transform ="translateY(-22px)"
        },
        mouseLeave3(){
            document.getElementById("BorderT3").style.transform ="translateY(0px)"
            document.getElementById("BorderL3").style.transform ="translateX(0px)"
            document.getElementById("BorderR3").style.transform ="translateX(0px)"
            document.getElementById("BorderB3").style.transform ="translateY(0px)"
        },

        mouseOver4(){
            document.getElementById("BorderT4").style.transitionDuration ="300ms"
            document.getElementById("BorderL4").style.transitionDuration ="300ms"
            document.getElementById("BorderR4").style.transitionDuration ="300ms"
            document.getElementById("BorderB4").style.transitionDuration ="300ms"
            document.getElementById("BorderT4").style.transform ="translateY(22px)"
            document.getElementById("BorderL4").style.transform ="translateX(20px)"
            document.getElementById("BorderR4").style.transform ="translateX(-20px)"
            document.getElementById("BorderB4").style.transform ="translateY(-22px)"
        },
        mouseLeave4(){
            document.getElementById("BorderT4").style.transform ="translateY(0px)"
            document.getElementById("BorderL4").style.transform ="translateX(0px)"
            document.getElementById("BorderR4").style.transform ="translateX(0px)"
            document.getElementById("BorderB4").style.transform ="translateY(0px)"
        },
    }
}
</script>