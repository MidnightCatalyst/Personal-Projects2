<script setup lang="ts">
import { reactive } from "vue";
import { register } from "@/stores/session";

async function submit() {
  try {
    await register(form.username, form.password);
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
        <h2 class="mb-3">Register</h2>
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
          Have an account? <router-link to="/Login">Log In</router-link>
        </div>
  
        <button type="submit" id="register_button" class="mt-4 btn-pers">
          Register
        </button>
        <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_2"
        >
        </div>
      </form>
    </div>
  </template>
  
  <!-- <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "123456",
      };
    },
    methods: {
      register(submitEvent) {
        
        this.email = submitEvent.target.elements.email.value;
        this.password = submitEvent.target.elements.password.value;
  
       
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            console.log("Registration completed");
            this.$router.push("/Login");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            let alert_2 = document.querySelector("#alert_2");
            alert_2.classList.remove("d-none");
            alert_2.innerHTML = errorMessage;
            console.log(alert_2);
          });
      },
      moveToLogin() {
        this.$router.push("/Login");
      },
    },
  };
  </script> -->

  