<script setup lang="ts">
import TablerPlus from '~icons/tabler/plus';
defineProps<{
  handleClick?: (() => void) | null
}>()
</script>


<template>
  <button type="button" @click="handleClick" class="fab">
    <TablerPlus style="font-size: 20px;" />
  </button>
</template>