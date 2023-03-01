<script setup>
import Carrousel from "../components/Carrousel.vue";
import Logo from "../components/Logo.vue";
import LogoSmall from "../components/LogoSmall.vue"
import Footer from "../components/Footer.vue";
import Skills from "../components/Skills.vue";
import Titres from "../components/Titres.vue";
</script>

<template>
    <div>
        <div class="scroll-line z-10"></div>
        <div class="cursor"></div>
        <header class="flex justify-center items-center align-middle py-16">
            <Logo class="invisible sm:visible" />
            <LogoSmall class="absolute left-4 m-auto top-5 visible sm:invisible" />
        </header>

        <body class="px-16">
            <hr class="h-[1px] border bg-white mb-16" />
            <div class="flex justify-center items-center align-middle">
                <div class="TitleLeft"></div>
                <h1 class="uppercase text-[#ccc] text-center text-[2.5em] xl:text-[7em] p-7">Portfolio</h1>
                <div class="TitleRight"></div>
            </div>
            <hr class="h-[1px] border bg-white my-16" />
            <div class="xl:grid xl:grid-cols-3 xl:gap-20 text-[#aaa] p-8 xl:p-20">
                <Titres
                    titre="About Me"/>
                <p class="xl:col-span-2 xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper
                    aliquet lectus, non sodales
                    nulla lobortis at. Aenean nisi dui, efficitur sed risus et, semper blandit eros. Quisque facilisis,
                    ante quis ultrices accumsan, metus augue dapibus nisl, id hendrerit nisl turpis eu purus. Maecenas
                    nisl ipsum, egestas eu nisl vitae, interdum eleifend enim. Donec velit velit, eleifend at
                    scelerisque vel, tincidunt ut diam. Nam a erat leo. Quisque et maximus metus, quis malesuada lacus.
                    Donec nec faucibus erat. Morbi fringilla quis nunc eget tempus. Nulla facilisi. Mauris sagittis
                    ullamcorper nibh, sit amet viverra urna suscipit et. Curabitur at neque sodales, placerat augue nec,
                    blandit mi.
                </p>
            </div>
            <hr class="h-[1px] border bg-white my-16" />
            <section class="Projects mb-52 mt-32">
                <Titres
                    titre="Projets"/>
                <Carrousel />
            </section>

            <hr class="h-[1px] border bg-white my-16" />

            <section>
                <Titres
                    titre="Compétences" class=""/>
                <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,280px))] justify-center my-24">
                    <Skills
                        skill="HTML5"
                        img="src\assets\icons\html.jpg"/>
                    <Skills
                        skill="CSS3"
                        img="src\assets\icons\css.jpg"/>
                    <Skills
                        skill="JavaScript"
                        img="src\assets\icons\javascript.jpg"/>
                    <Skills
                        skill="Tailwind"
                        img="src\assets\icons\tailwind.jpg"/>
                    <Skills
                        skill="VueJS"
                        img="src\assets\icons\vuejs.jpg"/>
                </div>
                <h2 class="text-[#ccc] text-[2em] xl:text-[2.5em] text-center">Autres compétences</h2>
                <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,330px))] justify-center my-24">
                    <Skills
                        skill="Wordpress"
                        img="src\assets\icons\wordpress.jpg"/>
                    <Skills
                        skill="Illustrator"
                        img="src\assets\icons\illustrator.jpg"/>
                    <Skills
                        skill="Figma"
                        img="src\assets\icons\figma.jpg"/>
                </div>
            </section>
        </body>

        <footer class="mb-16">
            <Footer />
        </footer>
    </div>
</template>

<style scoped>
.scroll-line {
    background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
    top: 0;
    left: 0;
    height: 10px;
    position: fixed;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation: -anim-gradient 10s linear infinite
}

h1::selection,
h2::selection,
p::selection {
    color: white;
    background-color: #111;
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