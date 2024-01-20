<script setup>
import Carrousel from "../components/Carrousel.vue";
import Logo from "../components/Logo.vue";
import LogoSmall from "../components/LogoSmall.vue"
import Skills from "../components/Skills.vue";
import Titres from "../components/Titres.vue";

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
    <div>
        <div class="scroll-line z-10"></div>
        <div class="cursor"></div>
        <header class="flex flex-col xl:flex-row justify-around items-center align-middle py-12">
            <RouterLink to="/projects" class="underline-animation text-white text-3xl inline-block relative">Projects</RouterLink>
            <Logo class="invisible sm:visible" />
            <LogoSmall class="absolute left-4 m-auto top-5 visible sm:invisible" />
            <a href="/MMI" class="underline-animation text-white text-3xl inline-block relative">MMI Projects</a>
        </header>

        <body class="px-16">
            <hr class="h-[1px] border bg-white mb-10" data-aos="fade-up" data-aos-delay="200" />
            <div class="flex justify-center items-center align-middle" data-aos="fade-up" data-aos-delay="200">
                <div class="TitleLeft"></div>
                <h1 class="uppercase text-[#ccc] text-center text-[2.5em] xl:text-[7em] p-7">Portfolio</h1>
                <div class="TitleRight"></div>
            </div>
            <hr class="h-[1px] border bg-white my-10" />
            <div class="xl:grid xl:grid-cols-3 xl:gap-20 text-[#aaa] p-8 xl:p-20">
                <Titres titre="About Me" data-aos="fade-right" data-aos-delay="200" />
                <p class="xl:col-span-2 xl:text-2xl" data-aos="fade-left" data-aos-delay="200">
                    Je m'appelle Arnaut Vasseur, j'apprend et je m'améliore dans le domaine du web depuis 2021. <br/><br/>
                    Plutôt polyvalent, que cela soit dans le front-end que le back-end, je souhaite créer des sites web interactifs innovants qui puissent 
                    répondre à la demande du client de manière efficace.
                </p>
            </div>
            <hr class="h-[1px] border bg-white mt-10 mb-24" />

            <Titres titre="Projets" data-aos="fade-right" data-aos-delay="200" />

            <div class="text-white my-24" id="projects">
                <ul>
                    <RouterLink to="/projects" v-for="projet in projets" :key="projet.id" data-aos="fade-up" data-aos-delay="400" class="projectline border-t border-b py-16 px-10 lg:px-36 text-[#bbb] border-[#aaa] flex flex-row justify-between items-center">
                        <div>
                            <p class="text-4xl">{{ projet.name }}</p>
                            <p class="text-2xl text-[#888]">{{ projet.category }}</p>
                        </div>
                        <p class="text-4xl invisible w-0 lg:visible">/{{ projet.created }}</p>
                    </RouterLink>
                </ul>
            </div>

            <section id="skills">
                <Titres titre="Compétences" class="" />
                <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,280px))] justify-center items-center gap-5 lg:gap-12 align-middle my-24">
                    <Skills skill="HTML5" img="html.jpg" data-aos="fade-up" data-aos-delay="200" />
                    <Skills skill="CSS3" img="css.jpg " data-aos="fade-up" data-aos-delay="300" />
                    <Skills skill="JavaScript" img="javascript.jpg" data-aos="fade-up" data-aos-delay="400" />
                    <Skills skill="Tailwind" img="tailwind.jpg" data-aos="fade-up" data-aos-delay="500" />
                    <Skills skill="VueJS" img="vuejs.jpg" data-aos="fade-up" data-aos-delay="600" />
                    <Skills skill="ChartJS" img="chartjs.jpg" data-aos="fade-up" data-aos-delay="700" />
                    <Skills skill="NodeJS" img="NodeJS.svg" data-aos="fade-up" data-aos-delay="800" />
                    <Skills skill="SQL" img="SQL.svg" data-aos="fade-up" data-aos-delay="900" />
                    <Skills skill="Supabase" img="supabase.svg" data-aos="fade-up" data-aos-delay="700" />
                </div>
                <h2 class="text-[#ccc] text-[2em] xl:text-[2.5em] text-center" data-aos="fade-up" data-aos-delay="200">
                    Autres compétences</h2>
                <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,280px))] justify-center items-center gap-5 lg:gap-12 align-middle my-24">
                    <Skills skill="Wordpress" img="wordpress.jpg" data-aos="fade-up" data-aos-delay="200" />
                    <Skills skill="Illustrator" img="illustrator.jpg" data-aos="fade-up" data-aos-delay="300" />
                    <Skills skill="Figma" img="figma.jpg" data-aos="fade-up" data-aos-delay="400" />
                    <Skills skill="ThreeJS" img="threeJS.jpg" data-aos="fade-up" data-aos-delay="500" />
                    <Skills skill="3DSMax" img="3DSMax.jpg" data-aos="fade-up" data-aos-delay="600" />
                    <Skills skill="Blender" img="Blender.jpg" data-aos="fade-up" data-aos-delay="700" />
                </div>
                
                        
            </section>
        </body>
    </div>
</template>

<style scoped>
.underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1.5px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.projectline{
    background: linear-gradient(to right, #222 50%, #111 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .5s ease-in-out;
}

.projectline:hover {
  background-position: left bottom;
}
.scroll-line {
    background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
    top: 0;
    left: 0;
    height: 10px;
    position: fixed;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation: -anim-gradient 10s linear infinite
}

.TitleLeft,
.TitleRight {
    width: 80px;
    height: 10px;
    background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
    animation: -anim-gradient 10s linear infinite
}

@keyframes -anim-gradient {
    to {
        filter: hue-rotate(360deg)
    }
}
</style>

<script scoped>

export default {
    mounted() {
        const scrollline = document.querySelector('.scroll-line');

        function fillscrollline() {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.clientHeight;
            const scrolled = window.scrollY;
            const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

            scrollline.style.width = percentScrolled + '%';
        };

        window.addEventListener('scroll', fillscrollline);
    }
};
</script>