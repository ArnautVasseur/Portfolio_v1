<script setup>
import Carrousel from "../components/Carrousel.vue";
import Logo from "../components/Logo.vue";
import LogoSmall from "../components/LogoSmall.vue"
import Footer from "../components/Footer.vue";
</script>

<template>
    <div>
        <header class="flex justify-center items-center align-middle py-16">
            <Logo class="invisible sm:visible"/>
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
                <div class="flex justify-center items-center align-middle gap-5">
                    <div class="AboutLeft"></div>
                    <h2 class="AboutMe text-[#ccc] text-[2em] xl:text-[4em] text-center col-span-1 flex justify-center items-center align-middle">About Me</h2>
                    <div class="AboutRight"></div>
                </div>
                <p class="xl:col-span-2 xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper aliquet lectus, non sodales
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
            <section class="Projects my-52">
                <Carrousel/>
            </section>
            <hr class="h-[1px] border bg-white my-16" />
        </body>

        <footer>
            <Footer/>
        </footer>
    </div>
</template>

<style scoped>
h1::selection, h2::selection, p::selection {
    color: white;
    background-color: #111;
}

.TitleLeft, .TitleRight{
    width: 80px;
    height: 10px;
    background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
    animation: -anim-gradient 10s linear infinite
}

.AboutLeft, .AboutRight{
    width: 50px;
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