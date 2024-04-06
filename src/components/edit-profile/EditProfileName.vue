<script setup lang="">
import Button from '@/components/button/Button.vue'
import UserIcon from '~icons/bx/user'

defineProps({
  submitting: Boolean,
  handleSubmit: Function
})
</script>

<template>
  <form>
    <fieldset :disabled="submitting">
      <div class="form-group">
        <label for="name">
          Full Name
        </label>
        <div class="input-group">
          <input type="text" name="name" id="name" value="Emmanuel Tugbeh" required />
          <i>
            <UserIcon />
          </i>
        </div>
      </div>
      <!--  -->
      <Button :action="handleSubmit" class="flex-center-center mt-8">
        Update
        <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
      </Button>
    </fieldset>
  </form>
</template>

<style scoped src="./EditProfile.scss"></style>

