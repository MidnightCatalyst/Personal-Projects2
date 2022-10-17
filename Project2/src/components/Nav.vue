<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    //import LoginBadge from './LoginBadge.vue';

    let isActive = ref(false);

</script>

<template>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">

        <div class="container">
        <div class="navbar-brand">
          <router-link class = "navbar-item" to ="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5NBGsMsfY8bp9d8ie7jG-X5GXezDsvvyMA&usqp=CAU" width="112" height="28">
            
        
          </router-link>
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
      
            <router-link class="navbar-item" to="/workout">
              Workouts
            </router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/about">
                  About
                </router-link>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">

              <login-badge></login-badge>
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {
        
        border-bottom: #00AA00 5px solid;
    }
</style>