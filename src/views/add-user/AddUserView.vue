<script setup lang="">
import Fab from '@/components/Fab.vue'
import Pill from '@/components/Pill.vue'
import Attendee from '@/components/attendee/Attendee.vue'
import SearchInput from '@/components/search-input/SearchInput.vue'
import useNavigator from "@/hooks/useNavigator";
// 
import useAddUserView from './useAddUserView'

const props = defineProps({ eventId: String | Number })

const nav = useNavigator(props.eventId)
const viewEventDetails = () => nav("event", 'eventId')
const { showAll, toggleShowAll, data, dataPipe, toggleStatus } = useAddUserView();
</script>

<template>
  <AppBar stack="Add User" :action="viewEventDetails" />
  <!--  -->
  <SafeAreaView>
    <!--  -->
    <SearchInput />
    <!--  -->
    <section class="flex-center-between gap-2 mt-2 tabs">
      <button class="flex-1" :class="{ active: showAll }" @click="toggleShowAll">All</button>
      <button class="flex-1" :class="{ active: !showAll }" @click="toggleShowAll">
        Attended
        <Pill :value="dataPipe.length" />
      </button>
    </section>
    <!--  -->
    <SafeScrollView>
      <template v-if="showAll">
        <Attendee v-for="(e, i) of data.attendance" :key="e.id" :index="i" :item="e" :toggle-status="toggleStatus" />
      </template>
      <template v-else>
        <Attendee v-for="(e, i) of dataPipe" :key="e.id" :index="i" :item="e" alt />
      </template>
    </SafeScrollView>
  </SafeAreaView>
</template>

<style scoped src="./AddUserView.scss"></style>
