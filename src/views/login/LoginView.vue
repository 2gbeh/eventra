<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// router.push('/')
</script>

<template>
  <header class="">
    <h1>Welcome back,</h1>
    <h1>Log in</h1>
  </header>
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Ex. example@domain.com" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="" required />
        </div>
        <div class="">
          <RouterLink class="" :to="$PATH.forgot_password">Forgot Password?</RouterLink>
        </div>
        <div class="button-group">
          <button @click="router.push($PATH.home)">Log in</button>
        </div>
      </fieldset>
    </form>
    <!--  -->
    <footer class="">
      Don't have an account?
      <RouterLink class="" :to="$PATH.register">Register</RouterLink>
    </footer>
  </main>
</template>

<style scoped src="./LoginView.scss"></style>
