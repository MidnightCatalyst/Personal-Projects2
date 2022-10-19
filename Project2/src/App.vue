<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavVue from './components/Nav.vue'
//import BarChart from './components/BarChart1.vue'
//import VueCharts from './components/Circle.vue'



</script>

<template>

  <header>
    <NavVue />
  </header>
  
  <div class="container">

    
    <RouterView />
  </div>




</template>

<style scoped>  

</style>