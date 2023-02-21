<template>
    <div class="flex justify-center w-full">
        <div class="box-text relative w-1/2 py-16 px-24">
            <div class="flex">
                <h3 class="text-[#aaa] text-[4em]" id="titre-1">R</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-2">e</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-3">n</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-4">o</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-5">v</h3>
                <h3 class="text-[#aaa] text-[4em]" id="titre-6">a</h3>
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
            <div class="link flex justify-center align-middle items-center gap-5 text-[#aaa] text-lg absolute bottom-28 border border-transparent hover:border-b-2 hover:border-b-white">
                <a href="" class="">Voir le site</a>
                <i class="icon fa-sharp fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="box-images w-1/2 flex justify-center align-middle items-center m-20 -skew-x-6">
            <img src="../../assets/Renova.png" class="w-2/3 skew-x-6" alt="">
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

.link:hover > .icon{
    transform: translateX(5px);
    transition-duration: 0.5s;
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