<template>
  <main class="flex-center-center flex-col pt-20">
    <!--  -->
    <TheLogo size="100" has-border />
    <!--  -->
    <hgroup>
      <h1 class="">{{ $APP.name }}</h1>
      <p class="">{{ $APP.summary }}</p>
    </hgroup>
  </main>
  <!--  -->
  <footer class="flex-center-center flex-col">
    <RouterLink class="primary" :to="$PATH.login">Log in</RouterLink>
    <RouterLink class="" :to="$PATH.register">Register</RouterLink>
  </footer>
</template>

<style scoped src="./WelcomeView.scss"></style>