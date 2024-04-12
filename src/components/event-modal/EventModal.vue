<script setup lang="">
import ModalOverlay from '../ModalOverlay.vue'
import AboutEventFigure from '../about-event/AboutEventFigure.vue'
import AboutEventMeta from '../about-event/AboutEventMeta.vue'
import { wrap } from "@/utils";

const props = defineProps({
  show: Boolean,
  onClose: Function,
  event: Object,
  attendance: Object,
})
</script>

<template>
  <ModalOverlay v-if="show" :on-close="onClose">
    <div class="container">
      <div class="wrapper">
        <!-- Hey {{ event }} -->
        <AboutEventFigure :thumbnail="event.f_thumbnail" :title="event.title" :attendance="attendance" />
        <!--  -->
        <div class="article">
          <!-- {{ event.summary }} -->
          {{ wrap(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nihil soluta sit molestias tenetur
          reprehenderit doloribus quos modi accusamus, officia libero repellendus temporibus dolorem fugiat rerum aut!
          Perspiciatis, natus aspernatur.`, 180) }}
        </div>
        <!--  -->
        <div class="section">
          <AboutEventMeta :date="event.f_date" :time="event.f_time" :venue="event.venue" />
        </div>
      </div>
    </div>
  </ModalOverlay>
</template>

<style scoped src="./EventModal.scss"></style>