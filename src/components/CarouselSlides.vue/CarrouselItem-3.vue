<script setup>

</script>

<template>
    <div class="flex justify-center w-full">
        <div class="box-text relative w-1/2 py-16 px-24">
            <div class="flex gap-5">
                <div class="flex">
                    <h3 class="text-[#aaa] text-[4em]" id="titre-1">R</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-2">e</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-3">f</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-4">o</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-5">n</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-6">t</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-7">e</h3>
                </div>
                <div class="flex">    
                    <h3 class="text-[#aaa] text-[4em]" id="titre-8">L</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-9">o</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-10">g</h3>
                    <h3 class="text-[#aaa] text-[4em]" id="titre-11">o</h3>
                </div>
            </div>
            <div class="flex -mt-5">
                <h3 class="text-[#aaa] text-[4em]" id="titre-1">M</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-2">e</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-3">r</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-4">c</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-5">e</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-6">d</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-7">e</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-8">s</h3>
            </div>
            <div class="flex">
                <h4 class="text-[#666] text-[1.7em]" id="categorie-1">D</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-2">e</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-3">s</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-4">i</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-5">g</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-6">n</h4>
            </div>
            <div @mouseover="mouseOver()" @mouseleave="mouseLeave()" class="link flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg absolute duration-500 bottom-28">
                <a href="" class="w-48 h-16 flex flex-row items-center align-middle justify-between">
                    <div id="BorderL" class="h-full w-[1px] bg-white"></div>
                    <div class="flex flex-col justify-between items-center align-middle gap-10">
                        <div id="BorderT" class="h-[1px] w-full bg-white"></div>
                        <p class="linktext text-center">Voir le site</p>
                        <div id="BorderB" class="h-[1px] w-full bg-white"></div>
                    </div>
                    <i id="icon" class="icon fa-sharp fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
        <div class="box-images w-1/2 flex justify-center align-middle items-center m-20 ">
            <img src="../../assets/Mercedes.svg" class="w-2/3 " alt="">
        </div>
    </div>
</template>

<script scoped>
export default({
    methods:{
        mouseOver(){
            document.getElementById("icon").style.transitionDuration ="300ms"
            document.getElementById("BorderT").style.transitionDuration ="300ms"
            document.getElementById("BorderL").style.transitionDuration ="300ms"
            document.getElementById("BorderB").style.transitionDuration ="300ms"
            document.getElementById("icon").style.scale ="1.5"
            document.getElementById("BorderT").style.transform ="translateY(20px)"
            document.getElementById("BorderL").style.transform ="translateX(30px)"
            document.getElementById("BorderB").style.transform ="translateY(-20px)"
        },
        mouseLeave(){
            document.getElementById("icon").style.scale ="1"
            document.getElementById("BorderT").style.transform ="translateY(0px)"
            document.getElementById("BorderL").style.transform ="translateX(0px)"
            document.getElementById("BorderB").style.transform ="translateY(0px)"
        },
    },
    
})
</script>

<!-- Css classique -->
<style scoped>
.box-text::after{
    content: "";
    background: white;
    position: absolute;
    right: 0;
    bottom: 10%;
    height: 75%;
    width: 2px;
}
</style>

<!-- Animations titre -->
<style scoped>

@keyframes -titre-1 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-1{
    animation: ease-in-out -titre-1 0.5s;
}

@keyframes -titre-2 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-2{
    animation: ease-in-out -titre-2 0.5s .1s;
}

@keyframes -titre-3 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-3{
    animation: ease-in-out -titre-3 0.5s .125s;
}

@keyframes -titre-4 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-4{
    animation: ease-in-out -titre-4 0.5s .15s;
}

@keyframes -titre-5 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-5{
    animation: ease-in-out -titre-5 0.5s .175s;
}

@keyframes -titre-6 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-6{
    animation: ease-in-out -titre-6 0.5s .2s;
}

@keyframes -titre-7 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-7{
    animation: ease-in-out -titre-7 0.5s .225s;
}

@keyframes -titre-8 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-8{
    animation: ease-in-out -titre-8 0.5s .25s;
}

@keyframes -titre-9 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-9{
    animation: ease-in-out -titre-9 0.5s .275s;
}

@keyframes -titre-10 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-10{
    animation: ease-in-out -titre-10 0.5s .3s;
}

@keyframes -titre-11 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-11{
    animation: ease-in-out -titre-11 0.5s .325s;
}

@keyframes -titre-12 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-12{
    animation: ease-in-out -titre-12 0.5s .35s;
}

@keyframes -titre-13 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-13{
    animation: ease-in-out -titre-13 0.5s .375s;
}

@keyframes -titre-14 {
    0% {
        translate: 0px -30px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#titre-14{
    animation: ease-in-out -titre-14 0.5s .4s;
}
</style>

<!-- Animations Catégorie -->
<style scoped>
@keyframes -categorie-1 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-1{
    animation: ease-in-out -categorie-1 0.5s;
}

@keyframes -categorie-2 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-2{
    animation: ease-in-out -categorie-2 0.5s 0.1s;
}

@keyframes -categorie-3 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-3{
    animation: ease-in-out -categorie-3 0.5s .125s;
}

@keyframes -categorie-4 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-4{
    animation: ease-in-out -categorie-4 0.5s .15s;
}

@keyframes -categorie-5 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-5{
    animation: ease-in-out -categorie-5 0.5s .175s;
}

@keyframes -categorie-6 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-6{
    animation: ease-in-out -categorie-6 0.5s .2s;
}
</style>