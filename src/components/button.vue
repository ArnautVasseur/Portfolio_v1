<template>
    <div class="flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg absolute duration-500 bottom-28" @mouseover="mouseOver()" @mouseleave="mouseLeave()">
        <div id="BorderL" class="h-[50px] w-[1px] bg-white"></div>
        <div class="flex flex-col justify-between items-center align-middle gap-10">
            <div id="BorderT" class="h-[1px] w-[50px] bg-white"></div>
            <p class="text-center text-2xl">{{Chiffre}}</p>
            <div id="BorderB" class="h-[1px] w-[50px] bg-white"></div>
        </div>
        <div id="BorderR" class="h-[50px] w-[1px] bg-white"></div>
    </div>
</template>

<script>

export default ({
    props: {
        Chiffre: String,
    },
    methods: {
        mouseOver(){
            document.getElementById("BorderT").style.transitionDuration ="300ms"
            document.getElementById("BorderL").style.transitionDuration ="300ms"
            document.getElementById("BorderR").style.transitionDuration ="300ms"
            document.getElementById("BorderB").style.transitionDuration ="300ms"
            document.getElementById("BorderT").style.transform ="translateY(22px)"
            document.getElementById("BorderL").style.transform ="translateX(20px)"
            document.getElementById("BorderR").style.transform ="translateX(-20px)"
            document.getElementById("BorderB").style.transform ="translateY(-22px)"
        },
        mouseLeave(){
            document.getElementById("BorderT").style.transform ="translateY(0px)"
            document.getElementById("BorderL").style.transform ="translateX(0px)"
            document.getElementById("BorderR").style.transform ="translateX(0px)"
            document.getElementById("BorderB").style.transform ="translateY(0px)"
        },
    }
})
</script>

<style scoped></style>