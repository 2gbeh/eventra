<script setup lang="">
import AvatarStack from '../avatars/AvatarStack.vue'

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
      <!--  -->
      <div class="flex-center-center">
        <ul class="flex-center gap-2">
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>
      </div>
    </div>
    <figcaption>
      <h1 class="flex-center-between">
        {{ title }}
        <!--  -->
        <i title="Edit">
          <slot />
        </i>
      </h1>
      <!--  -->
      <AvatarStack v-bind="attendance" alt />
    </figcaption>
  </figure>
</template>

<style scoped src="./AboutEventFigure.scss"></style>