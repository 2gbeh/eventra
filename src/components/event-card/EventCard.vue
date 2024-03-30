<script setup lang="ts">
import PhUser from '~icons/ph/user';
import PhUsers from '~icons/ph/users';
import IonMale from '~icons/ion/male-outline';
import IonFemale from '~icons/ion/female-outline';
import useEventCard from './useEventCard'
import { wrap, live } from '@/utils'

const props = defineProps<{
  index?: number
  item?: Record<string, unknown>
}>()

const { styles, data, handleViewAttendance } = useEventCard(props)
</script>

<template>
  <div class="container flex-between">
    <!--  -->
    <time class="" title="Sep 15, 1992">
      <p>{{ data.f_date_day }}</p>
      <b :style="styles.time.border">{{ data.f_date_month }}</b>
    </time>
    <!--  -->
    <section class="backdrop" :style="styles.card">
      <article @click="handleViewAttendance">
        <h1 class="truncate">{{ wrap(data.title, 24) }}</h1>
        <ol class="flex-center gap-3">
          <!-- <li class="flex-center">
            <PhUser />
            <b title="Author: Gideon Olueh">{{ data.f_user_name }}</b>
          </li> -->
          <li class="flex-center">
            <PhUsers />
            <b title="Total: 1,509">{{ data.f_attendance_total }}</b>
          </li>
          <li class="flex-center">
            <IonMale />
            <b title="Male: 1,131">{{ data.f_attendance_male }}%</b>
          </li>
          <li class="flex-center">
            <IonFemale />
            <b title="Female: 377">{{ data.f_attendance_female }}%</b>
          </li>
        </ol>
      </article>
    </section>
  </div>
</template>

<style scoped src="./EventCard.scss"></style>
