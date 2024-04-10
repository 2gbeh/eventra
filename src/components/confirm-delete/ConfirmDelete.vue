<script setup lang="">
import ModalOverlay from '../ModalOverlay.vue'
// 
const props = defineProps({
  show: Boolean,
  onClose: Function,
  handleConfirm: Function,
  confirming: Boolean,
  text: String,
})
</script>

<template>
  <ModalOverlay v-if="show" :on-close="onClose">
    <div class="container">
      <div class="wrapper">
        <div class="flex-center flex-col">
          <i class="icon">
            <slot />
          </i>
          <!--  -->
          <p>{{ text ?? "Are you sure?" }}</p>
        </div>
        <!--  -->
        <div class="button-group">
          <button @click="onClose" class="cancel">Cancel</button>
          <button @click="handleConfirm">{{ confirming ? 'Please wait...' : "Yes, Delete" }}</button>
        </div>
      </div>
    </div>
  </ModalOverlay>
</template>

<style scoped src="./ConfirmDelete.scss"></style>
