<template>
    <div class="flex justify-center w-full">
        <div class="box-text relative h-[600px] w-1/2 border-r-2 border-white py-16 px-36">
            <div class="flex">
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-1">M</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-2">e</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-3">t</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-4">a</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-5">l</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-6">a</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-7">n</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-8">c</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-9">o</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-10">l</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-11">i</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-12">q</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-13">u</h3>
                <h3 class="text-[#aaa] text-[3.9em]" id="titre-14">e</h3>
            </div>
            <div class="flex">
                <h4 class="text-[#666] text-[1.7em]" id="categorie-1">F</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-2">r</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-3">o</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-4">n</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-5">t</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-6">-</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-7">e</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-8">n</h4>
                <h4 class="text-[#666] text-[1.7em]" id="categorie-9">d</h4>
            </div>
            <div @mouseover="mouseOverLink()" @mouseleave="mouseLeaveLink()" class="link flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg absolute duration-500 bottom-28">
                <a href="" class="w-48 h-16 flex flex-row items-center align-middle justify-between">
                    <div id="LinkBorderL" class="h-full w-[1px] bg-white"></div>
                    <div class="flex flex-col justify-between items-center align-middle gap-10">
                        <div id="LinkBorderT" class="h-[1px] w-full bg-white"></div>
                        <p class="linktext text-center">Voir le site</p>
                        <div id="LinkBorderB" class="h-[1px] w-full bg-white"></div>
                    </div>
                    <i id="icon" class="icon fa-sharp fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
        <div class="box-images w-1/2 flex justify-center align-middle items-center">
            <img src="../../assets/Metalancolique.svg" class="w-3/6" alt="">
        </div>
    </div>
</template>

<script scoped>
export default({
    methods:{
        mouseOverLink(){
            document.getElementById("icon").style.transitionDuration ="300ms"
            document.getElementById("LinkBorderT").style.transitionDuration ="300ms"
            document.getElementById("LinkBorderL").style.transitionDuration ="300ms"
            document.getElementById("LinkBorderB").style.transitionDuration ="300ms"
            document.getElementById("icon").style.scale ="1.5"
            document.getElementById("LinkBorderT").style.transform ="translateY(20px)"
            document.getElementById("LinkBorderL").style.transform ="translateX(30px)"
            document.getElementById("LinkBorderB").style.transform ="translateY(-20px)"
        },
        mouseLeaveLink(){
            document.getElementById("icon").style.scale ="1"
            document.getElementById("LinkBorderT").style.transform ="translateY(0px)"
            document.getElementById("LinkBorderL").style.transform ="translateX(0px)"
            document.getElementById("LinkBorderB").style.transform ="translateY(0px)"
        },
    }
  
})

</script>

<!-- Css classique -->
<style scoped>
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
    animation: ease-in-out -titre-2 0.5s .05s;
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
    animation: ease-in-out -titre-3 0.5s .075s;
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
    animation: ease-in-out -titre-4 0.5s .1s;
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
    animation: ease-in-out -titre-5 0.5s .125s;
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
    animation: ease-in-out -titre-6 0.5s .15s;
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
    animation: ease-in-out -titre-7 0.5s .175s;
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
    animation: ease-in-out -titre-8 0.5s .2s;
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
    animation: ease-in-out -titre-9 0.5s .225s;
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
    animation: ease-in-out -titre-10 0.5s .25s;
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
    animation: ease-in-out -titre-11 0.5s .275s;
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
    animation: ease-in-out -titre-12 0.5s .3s;
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

@keyframes -categorie-7 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-7{
    animation: ease-in-out -categorie-7 0.5s .225s;
}

@keyframes -categorie-8 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-8{
    animation: ease-in-out -categorie-8 0.5s .25s;
}

@keyframes -categorie-9 {
    0% {
        translate: 0px 20px;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

#categorie-9{
    animation: ease-in-out -categorie-9 0.5s .275s;
}
</style>