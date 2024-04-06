<script setup lang="">
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import EmailIcon from '~icons/ci/paper-plane';

defineProps({
  updating: Boolean,
  handleUpdate: Function
})
</script>

<template>
  <form>
    <fieldset :disabled="updating">
      <div class="form-group">
        <label for="email">
          Email Address
        </label>
        <div class="input-group">
          <input type="email" name="email" id="email" value="etugbeh@outlook.com" disabled required />
          <i>
            <EmailIcon />
          </i>
        </div>
        <a>Can't update email address</a>
      </div>
      <!--  -->
      <Button :action="handleUpdate" class="flex-center-center mt-8">
        Update
        <LoadingAlt v-if="updating" :class="{ 'ml-1': updating }" />
      </Button>
    </fieldset>
  </form>
</template>

<style scoped src="./EditProfile.scss"></style>
