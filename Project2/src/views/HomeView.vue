<script setup lang="ts">
import Activity from "../components/Activity/Activity.vue"


</script>

<template>
  
<article class="message">
  <div class="message-header">
    <p>WELCOME TO MY FITNESS WEBSITE</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    My name is Christian Collado the designer of this website. As a fitness trainer myself, I hope you are enjoying your journey to a healthier lifestyle. I have created this website to help you track your progress and to help you stay motivated. I hope you enjoy your experience here and I hope you find this website helpful.
  </div>
</article>
  
  <main>
    <Activity />    
  </main>
 
  


  <div id="app">
    <SearchAutocomplete
      :items="[
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Pear',
        'Peach',
        'Grape',
        'Tangerine',
        'Pineapple'
      ]"
    />
  </div>


</template>

