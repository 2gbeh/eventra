<script setup lang="">
import Button from '@/components/button/Button.vue'
import fakerHelper from "@/lib/faker-js/main";
import Fsdb from "@/lib/fsdb/fsdb";
import { log } from "@/utils";
// 
// const data = fakerHelper.getCollection;
// const User = new Fsdb(data);
// // log(data);
// log(User.trash(5))
// log(User.restore(5))
</script>

<template>
  <main class="flex-center-center flex-col pt-20">
    <!--  -->
    <Logo size="100" has-border />
    <!--  -->
    <hgroup>
      <h1 class="">{{ $APP.name }}</h1>
      <p class="">{{ $APP.summary }}</p>
    </hgroup>
  </main>
  <!--  -->
  <footer class="root-wrapper flex-center-center flex-col gap-6">
    <Button variant="solid_" :action="$PATH.login" is-link>
      Log in
    </button>
    <Button variant="outline_" :action="$PATH.register" is-link>
      Register
    </Button>
  </footer>
</template>

<style scoped src="./WelcomeView.scss"></style>