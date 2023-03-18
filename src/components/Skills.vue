<script setup lang="ts">
    defineProps( {
    skill: String,
    img: String
  });

</script>

<template>
        <div class="container relative flex justify-center items-center flex-wrap gap-5 mt-32 lg:mt-0 z-0">
            <div class="box border-4 border-[#ccc] relative w-[200px] h-[300px] dark:bg-[#1a1a1a] bg-[#fff] flex justify-center items-center duration-300 ease-in-out hover:border-[#111]">
                <div class="content relative flex justify-center items-center flex-col text-center gap-16 py-5 w-full h-full overflow-hidden  -[20px]">
                    <img class="w-28 h-full" :src="img" alt="" />
                    <h4 class="text-3xl font-medium my-3 dark:text-[#ccc]">{{ skill }}</h4>
                </div>
            </div>
        </div>

</template>

<style scoped>

.container .box::before{
    content: '';
    opacity: 0;
    position: absolute;
    inset: -20px 40px;
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ffffff;
    z-index: -1;
    transition: 0.4s ease-in-out
}

.container .box:hover::before{
    inset: -10px 20px;
    opacity: 1;
}

.container .box::after{
    content: '';
    opacity: 0;
    position: absolute;
    inset: 60px -20px;
    border-left: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    z-index: -1;
    transition: 0.4s ease-in-out
}

.container .box:hover::after{
    inset: 40px -10px;
    opacity: 1;
}
</style>