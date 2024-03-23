<script setup lang="ts">
defineProps<{
  h1: string
  alt?: boolean
}>()
</script>

<template>
  <main class="flex-centered gap-2">
    <!-- <img src="@/assets/svg/logo.svg" alt="" class="" /> -->
    <img src="/images/under-construction.png" alt="" class="" />
    <h1 :style="{ color: alt ? '#ddd' : '#444' }">{{ h1 }}</h1>
  </main>
</template>

<style scoped>
img {
  /* width: 100px; */
  /* height: 100px; */
}

h1 {
  /* color: hsla(160, 100%, 37%, 1); */
  font-size: 18px;
  font-weight: 500;
}
</style>