<script setup lang="ts">
import AddEventImage from '@/components/add-event-image/AddEventImage.vue'
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
// 
defineProps<{
  handleSubmit: () => void,
  submitting: boolean,
}>()
</script>

<template>
  <AddEventImage :submitting="submitting" />
  <!--  -->
  <form>
    <fieldset :disabled="submitting">
      <div class="form-group">
        <label for="title">
          Title<var>*</var>
        </label>
        <input type="search" name="title" id="title" placeholder="Ex. Festival of Grace '24" required />
      </div>
      <!--  -->
      <div class="form-group">
        <label for="summary">
          Summary
        </label>
        <input type="text" name="summary" id="summary" placeholder="Ex. Anointed to Flourish" />
      </div>
      <!--  -->
      <div class="flex-center-between gap-5">
        <div class="flex-1 form-group">
          <label for="date">
            Date<var>*</var>
          </label>
          <input type="date" name="date" id="date" placeholder="" required />
        </div>
        <!--  -->
        <div class="flex-1 form-group">
          <label for="time">
            Time<var>*</var>
          </label>
          <input type="time" name="time" id="time" placeholder="" required />
        </div>
      </div>
      <!--  -->
      <div class="form-group">
        <label for="venue">
          Venue
        </label>
        <input type="venue" name="venue" id="venue" placeholder="Ex. Jubilee Chapel, Sapele Road" />
      </div>
      <!--  -->
      <Button :action="handleSubmit" class="flex-center-center mt-8">
        Add Event
        <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
      </Button>
    </fieldset>
  </form>
</template>

<style scoped src="./AddEvent.scss"></style>
