<script setup>
</script>

<template>
    <div class="px-16">
        <div class="flex justify-center items-center align-middle gap-5 mt-16" data-aos="fade-up" data-aos-delay="100">
            <div class="Bar"></div>
            <h2
                class="text-[#ccc] text-[2em] xl:text-[3.5em] text-center col-span-1 flex justify-center items-center align-middle">
                Projets</h2>
            <div class="Bar"></div>
        </div>

        <section class="p-20 border-b-2 border-[#aaa] pb-28">
            <div class="w-full flex flex-col xl:flex-row justify-between align-middle items-center gap-24">
                <div class="w-full xl:w-1/2 flex flex-col justify-between align-middle items-center h-full">
                    <div class="flex mb-10 text-center" data-aos="fade-right" data-aos-delay="100">
                        <h3 class="text-[#ccc] text-[3.5em]">Metalancolique</h3>
                    </div>
                    <div class="flex justify-center align-middle items-center w-full" data-aos="fade-up"
                        data-aos-delay="300">
                        <img src="../assets/Metalancolique.svg" class="w-1/3" alt="">
                    </div>
                </div>
                <div class="w-full xl:w-1/2 p-16" data-aos="fade-left" data-aos-delay="500">
                    <p class="text-[#aaa] text-xl mb-16">Projet universitaire réalisé en 2022, ce site consiste tout simplement à créer un site web informatif static 
                        simple permettant une lecture d'information logique et pratique. Cela m'as aidé à comprendre comment fonctionne l'expérience utilisateur et 
                        comment mettre en place une certaine quantité d'information de manière simple et compréhensible.</p>
                    <a href="" class="text-[#aaa]">Voir le site</a>
                </div>
            </div>
        </section>

        <section class="p-20 border-b-2 border-[#aaa] py-28">
            <div class="w-full flex flex-col-reverse xl:flex-row justify-between align-middle items-center gap-24">
                <div class="w-full xl:w-1/2 p-16" data-aos="fade-left" data-aos-delay="100">
                    <p class="text-[#aaa] text-xl mb-16">Ce projet a été réalisé fin 2022. Un de mes projets favoris, du simple fait qu'il fut très satisfaisant de mise en place.
                        Il m'as permit d'assimiler chartJS à mes projets pour améliorer la visualisation de données grâce à des graphiques et statistiques. Les données sont récupérées via une base de 
                        données externe, permettant une plus grande versatilité de jeu de données.
                        J'ai aussi appris à mettre en place une carte google maps ainsi que de modifier dynamiquement ses données et marqueurs.
                    </p>
                    <a href="" class="text-[#aaa]">Voir le site</a>
                </div>
                <div class="w-full xl:w-1/2 flex flex-col justify-between align-middle items-center h-full">
                    <div class="flex text-center -mb-5" data-aos="fade-left" data-aos-delay="300">
                        <h3 class="text-[#ccc] text-[3.5em]">Data-Visualisation</h3>
                    </div>
                    <div class="flex justify-center align-middle items-center w-full" data-aos="fade-up"
                        data-aos-delay="500">
                        <img src="../assets/BarChart.jpg" class="w-1/3" alt="">
                    </div>

                </div>

            </div>
        </section>
        <section class="p-20 border-b-2 border-[#aaa] py-28">
            <div class="w-full flex flex-col xl:flex-row justify-between align-middle items-center gap-24">
                <div class="w-full xl:w-1/2 flex flex-col justify-between align-middle items-center h-full">
                    <div class="flex gap-5">
                        <div class="flex text-center" data-aos="fade-right" data-aos-delay="100">
                            <h3 class="text-[#ccc] text-[3.5em]">Refonte logo Mercedes</h3>
                        </div>
                    </div>
                    <div class="flex justify-center align-middle items-center w-full" data-aos="fade-top"
                        data-aos-delay="300">
                        <img src="../assets/Mercedes.svg" class="w-1/3" alt="">
                    </div>

                </div>
                <div class="w-full xl:w-1/2 p-16" data-aos="fade-right" data-aos-delay="500">
                    <p class="text-[#aaa] text-xl mb-16">Ce projet universitaire fut un projet d'étude de marque et de valeurs. Dans ce cas précis j'ai appris à réaliser
                        des recherhes quant aux valeurs et représentations visuelles d'une marque, dans ce cas-ci: Mercedes. J'ai donc réalisé une refonte de logo
                        de la marque en question et réalisé une charte graphique pour présenter cette refonte et l'expliquer.
                    </p>
                </div>


            </div>
        </section>
        <section class="p-20 border-b-2 border-[#aaa] pt-28">
            <div class="w-full flex flex-col-reverse xl:flex-row justify-between align-middle items-center gap-24">
                <div class="w-full xl:w-1/2 p-16" data-aos="fade-right" data-aos-delay="100">
                    <p class="text-[#aaa] text-xl mb-16">Ce projet universitaire fut un projet collectif permettant de nous coordonner sur un projet commun et de mettre en place
                        la base de ce que nous avions appris collectivement. Cela m'as appris à mettre en place une stratégie pour nous synchroniser, ne pas manquer de temps ainsi que
                        de s'adapter avec les personnes travaillant avec moi.
                        Par exemple avec la réalisation d'un tableau de tâches à réaliser, des réunions pour mettre en commun nos travaux ainsi que la séparation de ces travaux en fonction
                        de nos compétences.
                    </p>
                    <a href="" class="text-[#aaa]">Voir le site</a>
                </div>
                <div class="w-full xl:w-1/2 flex flex-col justify-center align-middle items-center h-full">
                    <div class="flex mb-10 text-between" data-aos="fade-left" data-aos-delay="300">
                        <h3 class="text-[#ccc] text-[3.5em]">Renova</h3>
                    </div>
                    <div class="flex justify-center align-middle items-center w-full" data-aos="fade-top"
                        data-aos-delay="500">
                        <img src="../assets/Renova.jpg" class="w-1/3" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<!-- Css classique -->
<style scoped>
.Bar {
    width: 50px;
    height: 10px;
    background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
    animation: -anim-gradient 10s linear infinite
}
</style>