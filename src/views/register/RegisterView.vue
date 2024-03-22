<script setup>
import { useRouter } from 'vue-router'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerUserCircle from '~icons/tabler/user-circle';
import TablerLockShare from '~icons/tabler/lock-share';

const router = useRouter()
</script>

<template>
  <header class="">
    <h1>Create an</h1>
    <h1>account</h1>
  </header>
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset>
        <!--  -->
        <div class="form-group">
          <label for="name">Name</label>
          <div class="input-group">
            <input type="search" id="name" placeholder="N/b: Surname first" required />
            <i>
              <TablerUserCircle />
            </i>
          </div>
        </div>
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
        </div>
        <!--  -->
        <div class="form-group">
          <label for="confirm_password">Confirm Password</label>
          <div class="input-group">
            <input type="password" id="confirm_password" placeholder="" required />
            <i>
              <TablerLockShare />
            </i>
          </div>
        </div>
        <!--  -->
        <div class="button-group mt-8">
          <button @click="router.push($PATH.verify_email)" class="flex-center-center">
            <span class="mr-1">
              Register
            </span>
            <LoadingAlt />
          </button>
        </div>
      </fieldset>
    </form>
    <!--  -->
    <footer class="">
      Already have an account?
      <RouterLink class="" :to="$PATH.login">Log in</RouterLink>
    </footer>
  </main>
</template>

<style scoped src="../login/LoginView.scss"></style>
