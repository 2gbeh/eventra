<script setup lang="ts">
import RiSearchLine from '~icons/ri/search-line';
withDefaults(defineProps<{
  avatar?: string
  greetings?: string
  name?: string
}>(), {
  avatar: '/images/avatar.png',
  greetings: 'Hello,',
  name: 'Anonymous'
})
</script>

<template>
  <header class="root-wrapper flex-center-between">
    <figure class="flex-center">
      <img :src="avatar" alt="Avatar" />
      <figcaption>
        <small>{{ greetings }}</small>
        <b>{{ name }}</b>
      </figcaption>
    </figure>
    <i>
      <RiSearchLine />
    </i>
  </header>
</template>

<style scoped src="./AppBar.scss"></style>