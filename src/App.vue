<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div :class="isDark ? 'dark' : ''" class="cursor-none">
    <main class="bg-[#111]">
      <div id="bigsquare" class="cursor z-10"></div>
      <div id="square" class="cursorfollow z-10"></div>
      <div id="square2" class="cursorfollow2 z-10"></div>
      <RouterView />
      <!-- <Footer/> -->
      <Footer class="mb-16"/>
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

.cursorfollow2 {
  width: 15px;
  height: 15px;
  border: 1px solid white;
  position: absolute;
  transition-duration: 0.3s;
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
      square2.style.left = e.pageX + 'px';
      square2.style.top = e.pageY + 'px';
      let rotatecube = e.pageX + e.pageY;
      //console.log(rotatecube);
      square.style.transform = 'rotate(' + rotatecube + 'deg)';
      square2.style.transform = 'rotate(' + rotatecube + 'deg)';
      bigsquare.style.left = e.pageX + 'px';
      bigsquare.style.top = e.pageY + 'px';
      bigsquare.style.transform = 'rotate(' + rotatecube + 'deg)';
    }
    document.addEventListener('mousemove', mousemove);
  }
};
</script>