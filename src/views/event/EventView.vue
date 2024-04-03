<script setup lang="">
import FilterIcon from '~icons/octicon/filter-16'
import Fab from '@/components/Fab.vue'
import BottomSheet from '@/components/BottomSheet.vue'
import SearchInput, { useSearchInput } from '@/components/search-input/SearchInput.vue'
import EventCard from '@/components/event-card/EventCard.vue'
import AddEvent from '@/components/add-event/AddEvent.vue'
// 
// import useHomeView from './useHomeView'
const { showSearch, toggleSearch } = useSearchInput();
// const { data, showOffcanvas, toggleOffcanvas, handleSubmit, submitting } = useHomeView();
</script>

<template>
  <AppBar stack="Attendance" :action="viewEventDetails" />
  <!--  -->
  <SafeAreaView>

  </SafeAreaView>
</template>

<!-- <style scoped src="./HomeView.scss"></style> -->
