<script setup lang="">
import EditIcon from '~icons/akar-icons/edit';
import AvatarStack from '../avatars/AvatarStack.vue'
// 
import { wrap, rand } from "@/utils";

const props = defineProps({
  thumbnail: String,
  title: String,
  attendance: Object,
})
</script>

<template>
 <figure>
      <div class="relative">
        <img :src="thumbnail" alt="" />
        <div class="flex-center-center">
          <ul class="flex-center gap-2">
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
      <figcaption class="container">
        <h1 class="flex-center-between">
          {{ title }}
          <i title="Edit">
            <EditIcon />
          </i>
        </h1>
        <AvatarStack :total="attendance.total" :images="attendance.avatars" alt />
      </figcaption>
    </figure>
</template>

<style scoped src="./AboutEventFigure.scss"></style>