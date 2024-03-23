<script setup lang="ts">
import TablerPlus from '~icons/tabler/plus';
defineProps<{
  handleClick?: (() => void) | null
}>()
</script>

<template>
  <button type="button" @click="handleClick" class="fab">
    <TablerPlus />
  </button>
</template>