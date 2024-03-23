<script setup lang="ts">
import PhUser from '~icons/ph/user';
import PhUsers from '~icons/ph/users';
import IonMale from '~icons/ion/male-outline';
import IonFemale from '~icons/ion/female-outline';
import useEventCard from './useEventCard'

const props = defineProps<{
  index?: number
  event?: Record<string, unknown>
}>()

const { data, styles } = useEventCard(props)
</script>

<template>
  <div class="container flex-between">
    <time class="" title="Sep 15, 1992">
      <p>15</p>
      <b>Sep</b>
    </time>
    <article class="backdrop" :style="styles">
      <h1 class="truncate">{{data.title}}</h1>
      <ol class="flex-center gap-3">
        <li class="flex-center">
          <PhUser />
          <b title="Author: Gideon Olueh">G. Olueh</b>
        </li>
        <li class="flex-center">
          <PhUsers />
          <b title="Total: 1,509">1,509</b>
        </li>
        <li class="flex-center">
          <IonMale />
          <b title="Male: 1,131">75%</b>
        </li>
        <li class="flex-center">
          <IonFemale />
          <b title="Female: 377">25%</b>
        </li>
      </ol>
    </article>
  </div>
</template>

<style scoped src="./EventCard.scss"></style>import { getRandomValues } from 'crypto';
