<script setup lang="">
import TrashIcon from '~icons/ri/delete-back-2-fill';
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import BottomSheet from '@/components/BottomSheet.vue'
import Modal from '@/components/Modal.vue'
import { wrap } from "@/utils";
// 
import AboutEventFigure from '@/components/about-event/AboutEventFigure.vue'
import AboutEventMeta from '@/components/about-event/AboutEventMeta.vue'
import useEventView from "./useEventView";

const props = defineProps({
  eventId: Number,
})

const { event, attendance } = useEventView(props)
</script>

<template>
  <AppBar stack="About Event" />
  <SafeAreaView>
    <!--  -->
    <AboutEventFigure :thumbnail="event.f_thumbnail" :title="event.title" :attendance="attendance" />

    <!--  -->
    <article class="container">
      <!-- {{ event.summary }} -->
      {{ wrap(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nihil soluta sit molestias tenetur
      reprehenderit doloribus quos modi accusamus, officia libero repellendus temporibus dolorem fugiat rerum aut!
      Perspiciatis, natus aspernatur.`, 180) }}
    </article>

    <!--  -->
    <section class="container">
      <AboutEventMeta :date="event.f_date" :time="event.f_time" :venue="event.venue" />
      <!--  -->
      <Button :action="handleSubmit" class="flex-center-center" alt>
        <i class="mr-2">
          <TrashIcon />
        </i>
        Delete
        <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
      </Button>
    </section>
  </SafeAreaView>
</template>

<style scoped src="./EventView.scss"></style>
