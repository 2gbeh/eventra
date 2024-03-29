<script setup lang="">
import SearchIcon from '~icons/iconamoon/search-bold';
import FilterIcon from '~icons/codicon/settings'
</script>

<template>
  <form>
    <div class="relative">
      <input type="search" id="search" placeholder="Search ( / )" required />
      <!--  -->
      <i id="left">
        <SearchIcon />
      </i>
      <i id="right">
        <FilterIcon />
      </i>
    </div>
  </form>
</template>

<style scoped src="./SearchInput.scss"></style>