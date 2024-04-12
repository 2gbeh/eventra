<script setup lang="">
import ToggleInput from '@/components/ToggleInput.vue'
import ImageHelper from '@/utils/helpers/ImageHelper'
import useNavigator from '@/hooks/useNavigator'
import { wrap } from '@/utils'
// 
const props = defineProps({
  index: Number,
  item: Object,
  alt: { type: Boolean, default: false },
  toggleStatus: Function,
})

const nav = useNavigator(props.index)
const viewUser = () => nav("user", 'userId')
</script>

<template>
  <div class="flex-center-between container">
    <!--  -->
    <figure class="flex-center" @click="viewUser">
      <img :src="ImageHelper.src(item.avatar, '/images/avatar.png')" alt="" />
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
