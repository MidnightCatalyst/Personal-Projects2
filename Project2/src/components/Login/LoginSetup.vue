<script setup lang="ts">
import { login } from "@/stores/session";
import { reactive } from "vue";


async function submit() {
  try {
    await login(form.username, form.password);
  } catch (error) {
    console.log(error);
  }
}
const form = reactive({
  username: "",
  password: "",
});

</script>
<template>
    <div class="container">
      <form @submit.prevent="submit()">
        <h1 class="mb-3">Login</h1>
        <div class="input">
          <label for="email">Username</label>
          <input
            class="form-control"
            type="text"
            name="email"
            placeholder="Generated"
            v-model="form.username"
          />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="kiki34"
            v-model="form.password"
          />
        </div>
        <div class="alternative-option mt-4">
          Need an account? <router-link to="/register">Register</router-link>
        </div>
        <button type="submit" class="mt-4 btn-pers" id="login_button">
          Login
        </button>


        
        <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_1"
        >
        </div>
      </form>
    </div>
    
  </template>
  

  <style>
#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}
.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgb(250, 250, 250);
}
#name_project {
  font-weight: 700;
}
.container {
  width: 400px;
  max-width: 95%;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input > label {
  text-align: start;
}
.input > input {
  margin-top: 6px;
  height: 38px !important;
}

.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
}
.btn-pers:hover {
  background-color: #198754;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translate(-50%, -7px);
}
.btn-pers:active {
  transform: translate(-50%, -1px);
}

.alternative-option {
  text-align: center;
}
.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}
#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
