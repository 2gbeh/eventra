<script setup lang="ts">
import SearchIcon from '~icons/iconamoon/search-bold';
import BackIcon from '~icons/ep/arrow-left-bold';
import OptionsIcon from '~icons/simple-line-icons/options';

const props = withDefaults(defineProps<{
  avatar?: string,
  greetings?: string,
  name?: string,
  stack?: string,
  toggleSearch?: () => void,
}>(), {
  avatar: '/images/avatar.png',
  greetings: 'Hello,',
  name: 'Anonymous'
})

import useAppBar from './useAppBar'
const { handleGoBack, handleEventDetails } = useAppBar(props)
</script>

<!-- Onament: Floating Bottom Navbsr -->
<template>
  <header class="root-wrapper flex-center-between">
    <template v-if="stack">
      <i @click="handleGoBack" title="Go Back">
        <BackIcon />
      </i>
      <h1>{{ stack }}</h1>
      <i @click="handleEventDetails" title="About Event">
        <OptionsIcon />
      </i>
    </template>
    <template v-else>
      <figure class="flex-center">
        <img :src="avatar" alt="Avatar" />
        <figcaption>
          <small>{{ greetings }}</small>
          <b>{{ name }}</b>
        </figcaption>
      </figure>
      <i @click="toggleSearch" id="search" title="Search">
        <SearchIcon />
      </i>
    </template>
  </header>
</template>

<style scoped src="./AppBar.scss"></style>