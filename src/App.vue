<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <main class="bg-[#111]">
      <RouterView />
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