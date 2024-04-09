<script setup lang="">
import ToggleInput from '@/components/ToggleInput.vue'
import ImageHelper from '@/utils/helpers/ImageHelper'
import { wrap } from '@/utils'
// 
const props = defineProps({
  total: Number,
  images: Array,
})

const tw = {
  img: "w-10 h-10 border-2 border-white rounded-full dark:border-gray-800",
  figcaption: "flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
}
</script>

<template>
  <figure class="flex -space-x-4 rtl:space-x-reverse">
    <!--  -->
    <img v-for="(e, i) of images" :key="i" :class="tw.img" :src="e" alt="" />
    <!--  -->
    <figcaption :class="tw.figcaption" href="#">+{{ total > 102 ? '99' : total - 3 }}</figcaption>
  </figure>
</template>