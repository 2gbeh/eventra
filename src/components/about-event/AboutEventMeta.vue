<script setup lang="">
import TimeIcon from '~icons/tdesign/time'
import DateIcon from '~icons/material-symbols/date-range-outline'
import VenueIcon from '~icons/octicon/location-16';
// 
import { wrap } from "@/utils";

const props = defineProps({
  date: String,
  time: String,
  venue: String,
})
</script>

<template>
  <ul class="flex-between">
    <li class="flex-center flex-col">
      <i class="flex-center-center">
        <DateIcon />
      </i>
      <b>{{ date }}</b>
    </li>
    <li class="flex-center flex-col">
      <i class="flex-center-center">
        <TimeIcon />
      </i>
      <b>{{ time }}</b>
    </li>
    <li class="flex-center flex-col">
      <i class="flex-center-center">
        <VenueIcon />
      </i>
      <b>{{ wrap(venue, 15) }}</b>
    </li>
  </ul>
</template>

<style scoped src="./AboutEventMeta.scss"></style>
