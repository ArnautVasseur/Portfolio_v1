<script setup>
import Logo from "../components/Logo.vue";
import LogoSmall from "../components/LogoSmall.vue"
</script>

<template>
    <div>
        <header class="h-48 xl:h-96">
            <Logo class="absolute left-0 right-0 m-auto top-3 invisible sm:visible" />
            <LogoSmall class="absolute left-4 m-auto top-3 visible sm:invisible" />
        </header>

        <body class="px-8">
            <hr class="h-[1px] border bg-white mb-10 mx-5 xl:mx-16" />
            <h1 class="uppercase text-[#aaa] text-center text-[2.5em] xl:text-[7em] p-7">Portfolio</h1>
            <hr class="h-[1px] border bg-white my-10 mx-5 xl:mx-16" />
            <div class="xl:grid xl:grid-cols-3 xl:gap-20 text-[#aaa] p-8 xl:p-20">
                <h2 class="text-[2em] xl:text-[4em] text-center col-span-1 flex justify-center items-center align-middle mb-10">About Me</h2>
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
        </body>
    </div>
</template>

<style scoped>
h1::selection, h2::selection, p::selection {
    color: white;
    background-color: #111;
}
</style>