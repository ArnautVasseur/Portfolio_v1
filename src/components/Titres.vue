<script setup lang="ts">
    defineProps( {
    titre:String
  });

</script>

<template>
    <div class="flex justify-center items-center align-middle gap-5">
        <div class="Bar"></div>
        <h2 class="text-[#ccc] text-[2em] xl:text-[3.5em] text-center col-span-1 flex justify-center items-center align-middle">{{titre}}</h2>
        <div class="Bar"></div>
    </div>
</template>

<style scoped>
.Bar {
    width: 50px;
    height: 10px;
    background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
    animation: -anim-gradient 10s linear infinite
}
</style>