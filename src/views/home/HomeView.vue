<script setup lang="">
import Fab from '@/components/Fab.vue'
import BottomSheet from '@/components/BottomSheet.vue'
import SearchInput from '@/components/search-input/SearchInput.vue'
import EventCard from '@/components/event-card/EventCard.vue'
import AddEvent from '@/components/add-event/AddEvent.vue'
import events from '@/data/fake-events'
// 
import useHomeView from './useHomeView'
const { showSearch, toggleSearch, showOffcanvas, toggleOffcanvas, handleSubmit, submitting } = useHomeView();
</script>

<template>
  <AppBar name="Fatima" :toggle-search="toggleSearch" />
  <!--  -->
  <Fab :handle-click="toggleOffcanvas" />
  <!--  -->
  <SafeAreaView offwhite>
    <!--  -->
    <SearchInput v-if="showSearch" />
    <!--  -->
    <section class="flex-center-between">
      <h1>Recent Events</h1>
      <RouterLink :to="$PATH.events">View all</RouterLink>
    </section>
    <!--  -->
    <div class="px-5">
      <!-- <EventCard v-for="n in 6" :key="n" :index="n" /> -->
      <EventCard v-for="(e, i) of events" :key="e.id" :index="i" :event="e" />
    </div>
    <!--  -->
    <BottomSheet v-if="showOffcanvas" :on-close="toggleOffcanvas">
      <AddEvent :handle-submit="handleSubmit" :submitting="submitting" />
    </BottomSheet>
  </SafeAreaView>
</template>

<style scoped src="./HomeView.scss"></style>
