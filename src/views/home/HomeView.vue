<script setup lang="">
import Fab from '@/components/Fab.vue'
import EventCard from '@/components/event-card/EventCard.vue'
import AddEventOffcanvas from '@/components/add-event-offcanvas/AddEventOffcanvas.vue'
import events from '@/data/fake-events'

// import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getEvents);
</script>

<template>
  <AppBar name="Gideon" />
  <!--  -->
  <Fab />
  <!--  -->
  <SafeAreaView offwhite>
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
    <!-- <AddEventOffcanvas /> -->
  </SafeAreaView>
</template>

<style scoped src="./HomeView.scss"></style>
