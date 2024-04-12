<script setup lang="">
import DateIcon from '~icons/material-symbols/date-range-outline'
import ProfileImage from '@/components/ProfileImage.vue'
import Pill from '@/components/Pill.vue'
import EventModal from '@/components/event-modal/EventModal.vue'
import ImageHelper from "@/utils/helpers/ImageHelper";
// 
import useUserView from "./useUserView";

const props = defineProps({
  userId: String
})

const { attendance, attendee, events, event, showEventModal, toggleEventModal } = useUserView(props)
</script>

<template>
  <AppBar :stack="attendee.name" />
  <SafeAreaView>
    <!--  -->
    <div class="relative">
      <ProfileImage size="80" :src="attendee.f_avatar" :h1="attendee.name" :p="attendee.email" />
      <div class="absolute top-16 right-24">
        <Pill :value="attendee.gender" />
      </div>
    </div>
    <!--  -->
    <ol class="flex-center-around">
      <li class="flex-center flex-col">
        <h1>15</h1>
        <p>RSVP</p>
      </li>
      <li class="flex-center flex-col">
        <h1>9</h1>
        <p>Attended</p>
      </li>
      <li class="flex-center flex-col">
        <h1>92%</h1>
        <p>Rating</p>
      </li>
    </ol>
    <!--  -->
    <div class="tabs">
      <i class="mr-2">
        <DateIcon />
      </i>
      <b>Events</b>
    </div>
    <!--  -->
    <SafeScrollView>
      <ul class="">
        <li v-for="(e, i) in events" :key="i" class="" @click="toggleEventModal(i)">
          <img :src="ImageHelper.src(e?.thumbnail, '/uploads/thumbnial-1.jpg')" alt="" />
        </li>
      </ul>
    </SafeScrollView>
    <!--  -->
    <EventModal :show="showEventModal" :on-close="toggleEventModal" :event="event" :attendance="attendance" />
  </SafeAreaView>
</template>

<style scoped src="./UserView.scss"></style>
