<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <main class="bg-[#111]">
      <RouterView />
      <!-- <Footer/> -->
    </main>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      isDark: true,
    };
  },
  components: {

  },
};
</script>