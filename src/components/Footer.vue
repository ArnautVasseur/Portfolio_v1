<template>
    <div class="w-full h-[550px] bg-[#111] px-8 xl:px-16 mt-8">
        <p class="footer-text uppercase text-[#aaa] text-[2.5em] xl:text-[5em] text-center" data-aos="fade-left" data-aos-delay="300">Arnaut Vasseur</p>
        <hr class="h-[1px] border bg-white my-16" />
        <p class="footer-text uppercase text-[#aaa] text-[1.2em] xl:text-[3em] text-center" data-aos="fade-right" data-aos-delay="300">Étudiant en MMI / Développeur Web Front-End</p>
        <hr class="h-[1px] border bg-white my-16" />
        <div class="flex flex-col lg:flex-row justify-center items-center align-middle gap-20 xl:gap-40" data-aos="fade-up" data-aos-delay="300">
            <p class="text-[#aaa] text-[1.2em] xl:text-[3em]">vasseur.arnaut@gmail.com</p>
            <div class="flex justify-between align-middle items-center gap-24">
                <a href="https://github.com/ArnautVasseur"><i class="fa-brands fa-github text-white text-[4em]"></i></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-text::selection {
    color: white;
    background-color: #111;
}
</style>