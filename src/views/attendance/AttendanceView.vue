<script setup lang="">
import Fab from '@/components/Fab.vue'
import Attendee from '@/components/attendee/Attendee.vue'
import SearchInput from '@/components/search-input/SearchInput.vue'
import users from '@/data/fake-users'
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
    <ScrollView>
      <Attendee v-for="(e, i) of users" :key="e.id" :index="i" :item="e" />
    </ScrollView>
  </SafeAreaView>
</template>

<style scoped src="./AttendanceView.scss"></style>
