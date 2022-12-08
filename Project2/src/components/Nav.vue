<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import DashboardView from './Login/CurrentUserLog.vue';
    import LoginView from './Login/LoginSetup.vue';
    

    let isActive = ref(false);

</script>

<template>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">

        
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
      
            <router-link to="/workout" class ="navbar-item">
              Workout Log
            </router-link>

            <router-link class="navbar-item" to="/Tracker">
              Progress Tracker
            </router-link>

            <router-link class="navbar-item" to="/Activity">
              Activity Chat Log
            </router-link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">

           


          
            <router-link class="display-6" to="/dashboard">
              <div class = input id = "username_display"> Hello User</div>

            </router-link>



              <router-link class="navbar-item" to="/register">
              Sign Up
            </router-link>
              <router-link class="navbar-item" to="/Login">
              Login
            </router-link>
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











