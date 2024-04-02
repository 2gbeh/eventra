<script setup lang="">
import FilterIcon from '~icons/octicon/filter-16'
import Fab from '@/components/Fab.vue'
import BottomSheet from '@/components/BottomSheet.vue'
import SearchInput, { useSearchInput } from '@/components/search-input/SearchInput.vue'
import EventCard from '@/components/event-card/EventCard.vue'
import AddEvent from '@/components/add-event/AddEvent.vue'
// 
import useHomeView from './useHomeView'
const { showSearch, toggleSearch } = useSearchInput();
const { data, showOffcanvas, toggleOffcanvas, handleSubmit, submitting } = useHomeView();
</script>

<template>
  <AppBar :action="toggleSearch" />
  <!--  -->
  <Fab :handle-click="toggleOffcanvas" />
  <!--  -->
  <SafeAreaView>
    <!--  -->
    <SearchInput v-if="showSearch" />
    <!--  -->
    <section class="flex-center-between">
      <h1>Recent Events</h1>
      <!-- <RouterLink :to="$PATH.events">View all</RouterLink> -->
      <i title="Filter">
        <FilterIcon />
      </i>
    </section>
    <!--  -->
    <SafeScrollView>
      <!-- <EventCard v-for="n in 6" :key="n" :index="n" /> -->
      <EventCard v-for="(e, i) of data" :key="e.id" :index="i" :item="e" />
    </SafeScrollView>
    <!--  -->
    <BottomSheet v-if="showOffcanvas" :on-close="toggleOffcanvas">
      <AddEvent :handle-submit="handleSubmit" :submitting="submitting" />
    </BottomSheet>
  </SafeAreaView>
</template>

<style scoped src="./HomeView.scss"></style>
