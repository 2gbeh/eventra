<script setup lang="">
defineProps({
  value: String | Number,
})
</script>

<template>
  <span v-if="value" class="bg-brand_tint text-brand text-xs font-medium px-2 border py-0.5 rounded-full ml-1">
    {{ value }}
  </span>
</template>