<script setup lang="">
import TablerPlus from '~icons/tabler/plus';
defineProps({
  handleClick: Function
})
</script>


<template>
  <button type="button" @click="handleClick" class="fab">
    <TablerPlus style="font-size: 20px;" />
  </button>
</template>