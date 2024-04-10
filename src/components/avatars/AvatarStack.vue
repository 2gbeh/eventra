<script setup lang="">
import ToggleInput from '@/components/ToggleInput.vue'
import ImageHelper from '@/utils/helpers/ImageHelper'
import { LIVE, wrap, inis } from '@/utils'
// 
const props = defineProps({
  total: Number,
  avatars: Array,
})

const tw = {
  img: "w-10 h-10 border-2 border-white rounded-full dark:border-gray-800",
  div: "inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-black rounded-full border-2 border-white",
  span: "font-medium text-white",
  figcaption: "flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
}
</script>

<template>
  <figure class="flex -space-x-4 rtl:space-x-reverse">
    <!--  -->

    <template v-if="LIVE">
      <img v-for="(e, i) of avatars" :key="i" :src="e.avatar" alt="" :class="tw.img" />
    </template>
    <template v-else>
      <div v-for="(e, i) of avatars" :key="i" :class="tw.div" :style="`background-color: ${e.color};`">
        <span :class="tw.span">{{ inis(e.name) }}</span>
      </div>
    </template>
    <!--  -->
    <figcaption :class="tw.figcaption" href="#">+{{ total > 102 ? '99' : total - 3 }}</figcaption>
  </figure>
</template>