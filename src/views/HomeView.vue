<script setup>
import Logo from "../components/Logo.vue";
import LogoSmall from "../components/LogoSmall.vue"
</script>

<template>
  <div>
    <header class="h-48 xl:h-96">
      <Logo class="absolute left-0 right-0 m-auto top-3 invisible sm:visible"/>
      <LogoSmall class="absolute left-4 m-auto top-3 visible sm:invisible"/>
    </header>
    <body class="px-8">
      <h1 class="uppercase text-[#aaa] text-center text-[2.5em] xl:text-[7em] border-t border-white border-b p-7">Portfolio</h1>
    </body>
  </div>
</template>