<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div :class="isDark ? 'dark' : ''" class="cursor-none">
    <main class="bg-[#111]">
      <div id="bigsquare" class="cursor"></div>
      <div id="square" class="cursorfollow"></div>
      <div class="top-bar w-full h-2"></div>
      <RouterView />
      <!-- <Footer/> -->
      <div class="bottom-bar w-full h-2"></div>
    </main>
  </div>
</template>

<style scoped>
.cursor {
    background-color: white;
    width: 20px;
    height: 20px;
    border: 1px solid white;
    position: absolute;
    transform: translate(-50%, -50%);
    transition-timing-function: linear;
    pointer-events: none;
    mix-blend-mode: difference;
}
.cursorfollow {
    width: 15px;
    height: 15px;
    border: 1px solid white;
    position: absolute;
    transition-duration: 0.1s;
    transform: translate(-50%, -50%);
    transition-timing-function: linear;
    pointer-events: none;
    mix-blend-mode: difference;
}

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
  mounted() {
        const mousemove = (e) => {
                square.style.left = e.pageX + 'px';
                square.style.top = e.pageY + 'px';
                square.style.transform = 'rotate(' + e.pageX + 'deg)';
                bigsquare.style.left = e.pageX + 'px';
                bigsquare.style.top = e.pageY + 'px';
                bigsquare.style.transform = 'rotate(' + e.pageX + 'deg)';
            }
            document.addEventListener('mousemove', mousemove);
    }
};
</script>