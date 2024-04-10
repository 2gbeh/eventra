<script setup lang="">
import EditEventImage from './EditEventImage.vue'
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import SaveIcon from '~icons/fluent/save-edit-24-regular';
// 
defineProps({
  handleSubmit: Function,
  submitting: Boolean,
})
</script>

<template>
  <EditEventImage :submitting="submitting" />
  <!--  -->
  <form>
    <fieldset :disabled="submitting">
      <div class="form-group">
        <label for="title">
          Title<var>*</var>
        </label>
        <input type="search" name="title" id="title" value="Ex. Festival of Grace '24" required />
      </div>
      <!--  -->
      <div class="form-group">
        <label for="summary">
          Summary
        </label>
        <input type="text" name="summary" id="summary" value="Ex. Anointed to Flourish" />
      </div>
      <!--  -->
      <div class="flex-center-between gap-5">
        <div class="flex-1 form-group">
          <label for="date">
            Date<var>*</var>
          </label>
          <input type="date" name="date" id="date" value="2024-03-10" required />
        </div>
        <!--  -->
        <div class="flex-1 form-group">
          <label for="time">
            Time<var>*</var>
          </label>
          <input type="time" name="time" id="time" value="16:30" required />
        </div>
      </div>
      <!--  -->
      <div class="form-group">
        <label for="venue">
          Venue
        </label>
        <input type="venue" name="venue" id="venue" value="Ex. Jubilee Chapel, Sapele Road" />
      </div>
      <!--  -->
      <Button :action="handleSubmit" class="flex-center-center mt-8">
        <i class="mr-2">
          <SaveIcon />
        </i>
        Edit Event
        <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
      </Button>
    </fieldset>
  </form>
</template>

<style scoped src="./EditEvent.scss"></style>
