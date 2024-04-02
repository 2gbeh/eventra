<script setup lang="">
const props = defineProps({
  color: String,
  centered: Boolean,
  offwhite: Boolean,
})

const styles = {
  backgroundColor: props.offwhite ? "#fafafa" : props.color || "#fff",
  paddingTop: "60px",
  width: "100%",
  height: "100vh",
}
</script>

<template>
  <main :class="{ 'flex-center-center': centered }" :style="styles">
    <slot />
  </main>
</template>