<script setup lang="">
defineProps({
  onClose: Function,
})
</script>

<template>
  <div class="overlay" @click.self="onClose">
    <div class="root-wrapper-center">
      <div class="root-wrapper container">
        <div class="notch-wrapper">
          <span class="notch" @click="onClose" title="Close"></span>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  position: absolute;
  bottom: 0;
}

.notch-wrapper {
  margin: 5px 0;
  text-align: center;

  .notch {
    background-color: #eee;
    border-radius: 100px;
    width: 120px;
    min-height: 8px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>