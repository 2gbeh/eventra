<template>
  <ul v-if="$M.sitemap">
    <li v-for="(path, name) in $PATH" v-bind:key="name">
      <RouterLink :to="path" class="capitalize">{{ name.toString().replaceAll('_', ' ') }}</RouterLink>
    </li>
  </ul>
  <div class="root-container">
    <router-view />
  </div>
</template>
