<script setup lang="">
defineProps({
  h1: String,
  alt: Boolean
})
</script>

<template>
  <main class="flex-centered gap-2">
    <!-- <img src="@/assets/svg/logo.svg" alt="" class="" /> -->
    <img src="/images/under-construction.png" alt="" class="" />
    <h1 :style="{ color: alt ? '#ddd' : '#444' }">{{ h1 }}</h1>
  </main>
</template>

<style scoped>
h1 {
  font-size: 18px;
  font-weight: 500;
}
</style>