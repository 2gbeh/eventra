<script setup lang="">
defineProps({
  prompt: String,
  text: String,
  to: String
})
</script>

<template>
  <footer>
    {{ prompt }}
    <RouterLink :to="to">{{ text }}</RouterLink>
  </footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
  font-size: 15px;

  a {
    color: var(--brand_blue);
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>