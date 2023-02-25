<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <main class="bg-[#111]">
      <div class="top-bar w-full h-2"></div>
      <RouterView />
      <!-- <Footer/> -->
      <div class="bottom-bar w-full h-2"></div>
    </main>
  </div>
</template>

<style scoped>
@keyframes -anim-gradient {
  to {

    filter: hue-rotate(360deg)
  }
}

.top-bar {
  background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
  animation: -anim-gradient 10s linear infinite;
}

.bottom-bar {
  background: linear-gradient(45deg, hsl(203, 77%, 61%) 0%, 50%, hsl(248, 78%, 62%) 100%);
  animation: -anim-gradient 10s linear infinite;
  margin-top: 32px;
}
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