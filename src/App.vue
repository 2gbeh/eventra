<template>
  <ul>
    <li v-for="(path, name) in PATH">
      <RouterLink :to="path" class="capitalize">{{ name.replaceAll('_',' ') }}</RouterLink>
    </li>
  </ul>
  <router-view />
</template>

<script setup lang="ts">
import PATH from '@/constants/PATH'
</script>

