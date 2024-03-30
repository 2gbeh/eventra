<script setup lang="">
import Fab from '@/components/Fab.vue'
import Attendee from '@/components/attendee/Attendee.vue'
import SearchInput from '@/components/search-input/SearchInput.vue'
import users from '@/data/fake-users.jjs'
// 
import useSearchInput from '@/components/search-input/useSearchInput'
const { showSearch, toggleSearch } = useSearchInput();
</script>

<template>
  <AppBar name="Fatima" stack="Attendance" :toggle-search="toggleSearch" />
  <!--  -->
  <SafeAreaView>
    <!--  -->
    <SearchInput v-if="showSearch" />
    <!--  -->
    <section class="flex-center-between mt-2 tabs">
      <button class="flex-1" id="active">Attended</button>
      <button class="flex-1">Unattended</button>
    </section>
    <!--  -->
    <SafeScrollView>
      <Attendee v-for="(e, i) of users" :key="e.id" :index="i" :item="e" />
    </SafeScrollView>
  </SafeAreaView>
</template>

<style scoped src="./AttendanceView.scss"></style>
