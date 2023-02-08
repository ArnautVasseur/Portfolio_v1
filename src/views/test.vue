<script setup>
import Carrousel from '../components/Carrousel.vue';
</script>

<template>
    <div>
        <Carrousel/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide1:false,
            slide2:false,
            slide3:false,
            slide4:false,
        }
    }
}
</script>