<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const projets = ref([])

async function getProjets() {
    const { data } = await supabase.from('projets').select()
    projets.value = data
}

onMounted(() => {
    getProjets()
})

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
        <section class="p-20 border-b-2 border-white pb-28">
            <div class="w-full flex justify-center align-middle items-start gap-24">
                <div class="w-1/2 flex flex-col justify-center align-middle items-center">
                    <div class="flex mb-10 text-center" data-aos="fade-right" data-aos-delay="100">
                        <h3 class="text-[#ccc] text-[3.5em]">Metalancolique</h3>
                    </div>
                    <div class="flex justify-center align-middle items-center w-full" data-aos="fade-up"
                        data-aos-delay="300">
                        <img src="../assets/Metalancolique.svg" class="w-1/3" alt="">
                    </div>

                </div>
                <div class="w-1/2 p-16" data-aos="fade-left" data-aos-delay="500">
                    <p class="text-white">Lorem ipsum</p>
                    <a href="" class="text-white">Voir le site</a>
                </div>


            </div>
        </section>
        <section class="p-20 border-b-2 border-white py-28">
            <div class="w-full flex justify-center align-middle items-start gap-24">
                <div class="w-1/2 p-16" data-aos="fade-left" data-aos-delay="100">
                    <p class="text-white">Lorem ipsum</p>
                    <a href="" class="text-white">Voir le site</a>
                </div>
                <div class="w-1/2 flex flex-col justify-center align-middle items-center">
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
        <section class="p-20 border-b-2 border-white py-28">
            <div class="w-full flex justify-center align-middle items-start gap-24">
                <div class="w-1/2 flex flex-col justify-center align-middle items-center">
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
                <div class="w-1/2 p-16" data-aos="fade-right" data-aos-delay="500">
                    <p class="text-white">Lorem ipsum</p>
                    <a href="" class="text-white">Voir le site</a>
                </div>


            </div>
        </section>
        <section class="p-20 border-b-2 border-white pt-28">
            <div class="w-full flex justify-center align-middle items-start gap-24">
                <div class="w-1/2 p-16" data-aos="fade-right" data-aos-delay="100">
                    <p class="text-white">Lorem ipsum</p>
                    <a href="" class="text-white">Voir le site</a>
                </div>
                <div class="w-1/2 flex flex-col justify-center align-middle items-center">
                    <div class="flex mb-10 text-center" data-aos="fade-left" data-aos-delay="300">
                        <h3 class="text-[#ccc] text-[3.5em]">Renova</h3>
                    </div>
                    <div class="flex justify-center align-middle items-center w-full" data-aos="fade-top"
                        data-aos-delay="500">
                        <img src="../assets/Renova.jpg" class="w-1/3" alt="">
                    </div>
                </div>
            </div>
        </section>
        <div class="text-white">
            <ul>
                <li v-for="projet in projets" :key="projet.id">{{ projet.name }}</li>
            </ul>
        </div>
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