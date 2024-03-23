<script setup lang="ts">
const props = defineProps<{
  color?: string;
  centered?: boolean;
  offwhite?: boolean;
}>()

const styles = {
  backgroundColor: props.offwhite ? "#fafafa" : props.color || "#fff"
}
</script>

<template>
  <main :class="{ 'flex-center-center': centered }" :style="styles">
    <slot />
  </main>
</template>

<style scoped lang="scss">
main {
  padding-top: 60px;
  width: 100%;
  height: 100vh;
}
</style>
