<script setup lang="ts">
import BarChart from "./BarChart1.vue"
import './Chart.scss'
</script>

<template>
  <header>
    
    <div>
    <article class="panel is-info">
  <p class="panel-heading">
    Hours Spent | (Pull Day)
  </p>
  <p class="panel-tabs">
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
</article>
</div>
  </header>
  <main>
    <div class = "container">
      <BarChart />
    </div>
  
  </main>
  
</template>