<script setup>
import { useRouter } from 'vue-router'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerLockShare from '~icons/tabler/lock-share';

const router = useRouter()
</script>

<template>
  <header class="">
    <h1>Welcome</h1>
    <h1>back</h1>
  </header>
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset>
        <!--  -->
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-group">
            <input type="email" id="email" placeholder="Ex. example@domain.com" required />
            <i>
              <TablerSend />
            </i>
          </div>
        </div>
        <!--  -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-group">
            <input type="password" id="password" placeholder="" required />
            <i>
              <TablerLockShare />
            </i>
          </div>
          <RouterLink class="" :to="$PATH.forgot_password">Forgot Password?</RouterLink>
        </div>
        <!--  -->
        <div class="button-group">
          <button @click="router.push($PATH.home)" class="flex-center-center">
            <span class="mr-1">
              Log in
            </span>
            <LoadingAlt />
          </button>
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
