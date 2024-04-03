<script setup lang="">
defineProps({
  onClose: Function,
})
</script>

<template>
  <div class="overlay" @click.self="onClose">
    <div class="root-wrapper-center">
      <!-- <div class="flex-center-center container"> -->
        <slot />
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
/* margin: 20px; */
  background-color: #fff;
  border-radius: 10px;
  /* height: 100px; */
}
</style>