<script setup lang="">
import Button from '@/components/button/Button.vue'
import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getArticles);
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
    <Button variant="solid_" :action="$PATH.login" isLink>
      Log in
    </button>
    <Button variant="outline_" :action="$PATH.register" isLink>
      Register
    </Button>
  </footer>
</template>

<style scoped src="./WelcomeView.scss"></style>