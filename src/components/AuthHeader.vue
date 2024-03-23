<script setup lang="ts">
import TablerHome from '~icons/tabler/home';
defineProps<{
  h1: string
  p: string
}>()
</script>

<template>
  <header>
    <div class="flex-between">
      <h1>{{ h1 }}</h1>
      <RouterLink to="/" title="Home">
        <TablerHome />
      </RouterLink>
    </div>
    <h1>{{ p }}</h1>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 30px;
  padding-bottom: 40px;

  h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
  }
}
</style>