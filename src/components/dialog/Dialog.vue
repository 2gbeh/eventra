<script setup lang="">
import ModalOverlay from '../ModalOverlay.vue'
// 
const props = defineProps({
  show: Boolean,
  onClose: Function,
  handleConfirm: Function,
  confirming: Boolean,
})
</script>

<template>
  <ModalOverlay v-if="show" :on-close="onClose">
    <div class="container">
      <div class="wrapper">
        <div class="flex-start">
          <i class="">
            <slot />
          </i>
          <p>
            Are you sure you want to delete this <b>Event</b>?
          </p>
        </div>
        <div class="flex-center-end gap-5">
          <button type="reset" @click="onClose">Cancel</button>
          <button type="button" @click="handleConfirm">{{ confirming ? 'Please wait...' : 'OK' }}</button>
        </div>
      </div>
    </div>
  </ModalOverlay>
</template>

<style scoped src="./Dialog.scss"></style>
