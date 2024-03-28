<script setup lang="ts">
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import BiImageFill from '~icons/bi/image-fill';
// 
defineProps<{
  variant: string
}>()
// 
const handleSubmit = () => true;
const submitting = false;
</script>

<template>
  <div class="overlay">
    <div class="root-wrapper-center">
      <section class="root-wrapper container">
        <div class="notch-wrapper">
          <span class="notch" title="Close Drawer"></span>
        </div>
        <!--  -->
        <div class="flex-center-center image-wrapper">
          <!-- <img src="/images/camera.png" alt="" /> -->
          <i>
            <BiImageFill />
          </i>
          <input type="hidden" name="thumbnail" id="thumbnail" />
        </div>
        <!--  -->
        <form>
          <fieldset :disabled="submitting">
            <div class="form-group">
              <label for="title">
                Title*
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
                  Date*
                </label>
                <input type="date" name="date" id="date" placeholder="" required />
              </div>
              <!--  -->
              <div class="flex-1 form-group">
                <label for="time">
                  Time*
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
      </section>
    </div>
  </div>
</template>

<style scoped src="./AddEventOffcanvas.scss"></style>