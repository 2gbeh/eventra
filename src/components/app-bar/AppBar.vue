<script setup lang="">
import SearchIcon from '~icons/iconamoon/search-bold';
import BackIcon from '~icons/ep/arrow-left-bold';
import OptionsIcon from '~icons/simple-line-icons/options';
import useNavigator from "@/hooks/useNavigator";

const props = defineProps({
  stack: String,
  action: Function,
})

const nav = useNavigator()
const goBack = () => nav(-1)
const viewProfile = () => nav(['profile'])
</script>

<!-- Onament: Floating Bottom Navbsr -->
<template>
  <header class="root-wrapper flex-center-between">
    <template v-if="stack">
      <i @click="goBack" title="Back">
        <BackIcon />
      </i>
      <h1>{{ stack }}</h1>
      <template v-if="action">
        <i @click="action" title="Options">
          <OptionsIcon />
        </i>
      </template>
      <template v-else>
        <i class="ml-4">&nbsp;</i>
      </template>
    </template>
    <!--  -->
    <template v-else>
      <figure class="flex-center" @click="viewProfile">
        <img src="/images/avatar.png" alt="Avatar" />
        <figcaption>
          <small>Hello,</small>
          <b>Fatima</b>
        </figcaption>
      </figure>
      <i @click="action" id="search" title="Search">
        <SearchIcon />
      </i>
    </template>
  </header>
</template>

<style scoped src="./AppBar.scss"></style>