<template>
    <div class="flex justify-center w-full">
        <div class="box-text relative w-1/2 py-16 px-24">
            <div class="flex">
                <h3 class="text-[#aaa] text-[4em]" id="titre-1">M</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-2">e</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-3">t</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-4">a</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-5">l</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-6">a</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-7">n</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-8">c</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-9">o</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-10">l</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-11">i</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-12">q</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-13">u</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-14">e</h3>
            </div>
            <div class="flex">
                <h4 class="text-[#666] text-[1.7em]">F</h4>
                <h4 class="text-[#666] text-[1.7em]">r</h4>
                <h4 class="text-[#666] text-[1.7em]">o</h4>
                <h4 class="text-[#666] text-[1.7em]">n</h4>
                <h4 class="text-[#666] text-[1.7em]">t</h4>
                <h4 class="text-[#666] text-[1.7em]">-</h4>
                <h4 class="text-[#666] text-[1.7em]">e</h4>
                <h4 class="text-[#666] text-[1.7em]">n</h4>
                <h4 class="text-[#666] text-[1.7em]">d</h4>
            </div>
            <div class="flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg absolute bottom-28 border border-transparent hover:border-b-2 hover:border-b-white">
                <a href="" class="">Voir le site</a>
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="box-images w-1/2 flex justify-center align-middle items-center m-20 -skew-x-6">
            <img src="../../assets/Metalancolique.svg" class="w-1/2 skew-x-6" alt="">
        </div>
    </div>
</template>

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
    transform: rotate(6deg);
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
    animation: ease-in-out -titre-3 0.5s .2s;
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
    animation: ease-in-out -titre-4 0.5s .3s;
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
    animation: ease-in-out -titre-5 0.5s .4s;
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
    animation: ease-in-out -titre-6 0.5s .5s;
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
    animation: ease-in-out -titre-7 0.5s .6s;
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
    animation: ease-in-out -titre-8 0.5s .7s;
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
    animation: ease-in-out -titre-9 0.5s .8s;
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
    animation: ease-in-out -titre-10 0.5s .9s;
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
    animation: ease-in-out -titre-11 0.5s 1s;
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
    animation: ease-in-out -titre-12 0.5s 1.1s;
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
    animation: ease-in-out -titre-13 0.5s 1.2s;
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
    animation: ease-in-out -titre-14 0.5s 1.3s;
}
</style>

<style scoped>

</style>