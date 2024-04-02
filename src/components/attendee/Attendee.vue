<script setup lang="">
import ToggleInput from '@/components/ToggleInput.vue'
import { wrap, live } from '@/utils'
// 
const props = defineProps({
  index: Number,
  item: Object,
  alt: { type: Boolean, default: false },
  toggleStatus: Function,
})
</script>

<template>
  <div class="flex-center-between container">
    <!--  -->
    <figure class="flex-center">
      <img :src="live && item?.avatar ? item.avatar : '/images/avatar.png'" alt="" />
      <figcaption>
        <h1>{{ item.name }}</h1>
        <p>{{ wrap(item.email, 24) }}</p>
      </figcaption>
    </figure>
    <!--  -->
    <ToggleInput v-if="!alt" :id="item.id" :checked="Boolean(item.status)" :toggle-checked="toggleStatus" />
  </div>
</template>

<style scoped src="./Attendee.scss"></style>
