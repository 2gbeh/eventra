<template>
  <ul v-if="$M.sitemap">
    <li v-for="(path, name) in $PATH" :key="name">
      <RouterLink :to="path.toString()" class="capitalize">{{ name.replaceAll('_', ' ') }}</RouterLink>
    </li>
  </ul>
  <div class="root-container">
    <router-view />
  </div>
</template>
