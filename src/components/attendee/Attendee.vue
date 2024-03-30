<script setup lang="ts">
import EpArrowRightBold from '~icons/ep/arrow-right-bold';
import { wrap, live } from '@/utils'
// 
import useAttendee from './useAttendee'

const props = defineProps<{
  index?: number
  item?: Record<string, unknown>
}>()

// const { styles, data, handleViewAttendance } = useAttendee(props)
</script>

<template>
  <div class="flex-center-between container">
    <figure class="flex-center">
      <img :src="live && item?.avatar ? item.avatar : '/images/avatar.png'" alt="" />
      <figcaption>
        <h1>{{ item.name }}</h1>
        <p>{{ wrap(item.email, 24) }}</p>
      </figcaption>
    </figure>
    <i>
      <EpArrowRightBold />
    </i>
  </div>
</template>

<style scoped src="./Attendee.scss"></style>
<style scoped lang="scss">
.container {
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}

figure {
  /* padding: 0 20px; */

  img {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }

  figcaption {
    margin-left: 12px;

    h1 {
      font-weight: 500;
    }

    p {
      color: #555;
      margin-top: -2px;
      font-size: 14px;
    }
  }
}

i {
  color: #555;
  font-size: 14px;
}
</style>
