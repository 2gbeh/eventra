<template>
  <main class="flex-center-center flex-col pt-20">
    <!--  -->
    <TheLogo size="100" has-border />
    <!--  -->
    <hgroup>
      <h1 class=""> {{ $APP.name }}</h1>
      <p class="">{{ $APP.summary }}</p>
    </hgroup>
  </main>
  <!--  -->
  <footer class="flex-center-center flex-col">
    <button class="primary">Log in</button>
    <button class="">Register</button>
  </footer>
</template>

<style scoped src="@/app/welcome/Welcome.scss"></style>