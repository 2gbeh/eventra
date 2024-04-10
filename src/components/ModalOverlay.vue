<script setup lang="">
defineProps({
  header: String,
  onClose: Function,
})
</script>

<template>
  <div class="overlay" @click.self="onClose">
    <div class="root-wrapper-center">
      <!-- WITH HERADER -->
      <template v-if="header">
        <div class="container">
          <div class="wrapper">
            <section class="flex-center-between">
              <h1>{{ header }}</h1>
              <i title="Close" @click="onClose">&times;</i>
            </section>
            <slot />
          </div>
        </div>
      </template>
      <template v-else>
        <!-- WITHOUT HERADER -->
        <slot />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin-top: 40px;
  padding: 40px 20px;
}

.wrapper {
  background-color: #fff;
  border-radius: 12px;
}

section {
  // background-color: #ffc;
  border-bottom: 1px solid #eee;
  padding: 15px 20px 12px;

  h1 {
    // border-bottom: 1px solid #eee;
    color: #333;
    font-weight: 500;
  }

  i {
    color: #999;
    // margin-top: -5px;
    font-size: 28px;
    font-weight: lighter;
    line-height: 0;

    &:hover {
      color: #e11;
      cursor: pointer;
    }
  }
}
</style>