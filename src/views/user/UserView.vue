<script setup lang="">
import UserIcon from '~icons/bx/user'
import DateIcon from '~icons/material-symbols/date-range-outline'
import ProfileImage from '@/components/ProfileImage.vue'
// 
import ImageHelper from '@/utils/helpers/ImageHelper';
import fakeEvents from "@/data/fake-events";
import fakeAttendance from "@/data/fake-attendance";
import useUserView from "./useUserView";

const props = defineProps({
  userId: String
})

const user = fakeAttendance[props.userId];

const {
  formData,
  submitting,
  updating,
  showEditModal,
  editFormType,
  editFormHeader,
  toggleShowEdit,
  handleSubmit,
  handleUpdate
} = useUserView()
</script>

<template>
  <AppBar :stack="user.name" />
  <SafeAreaView>
    <!--  -->
    <ProfileImage :size="80" :src="ImageHelper.src(user?.avatar, `/images/avatar-${user.sex.toLowerCase()}.png`)" :h1="`${user.name} (${user.sex})`"
      :p="user.email" />
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
        <li v-for="(e, i) in fakeEvents" :key="i" class="">
          <img :src="ImageHelper.src(e?.thumbnail, '/uploads/thumbnial-1.jpg')" alt="" />
        </li>
      </ul>
    </SafeScrollView>
  </SafeAreaView>
</template>

<style scoped src="./UserView.scss"></style>
