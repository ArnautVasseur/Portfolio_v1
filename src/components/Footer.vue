<template>
    <div class="relative w-full h-[500px] bg-[#111] px-8 my-8">
        <hr class="h-[1px] border bg-white mb-10" />
        <p class="footer-text uppercase text-[#aaa] text-[2.5em] xl:text-[5em] text-center">Arnaut Vasseur</p>
        <hr class="h-[1px] border bg-white my-10" />
        <p class="footer-text uppercase text-[#aaa] text-[1.2em] xl:text-[3em] text-center">Étudiant en MMI / Développeur Web Front-End</p>
        <hr class="h-[1px] border bg-white my-10" />
        <div class="flex justify-center items-center align-middle gap-20 xl:gap-40">
            <i class="fa-brands fa-linkedin-in text-white text-[4em]"></i>
            <i class="fa-brands fa-github text-white text-[4em]"></i>
        </div>
        <hr class="h-[1px] border bg-white mt-10" />
    </div>
</template>

<style scoped>
.footer-text::selection {
    color: white;
    background-color: #111;
}
</style>

<!-- bg-gradient-to-r from-[#891f7e] to-[#39AFAF] -->