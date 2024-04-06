<script setup lang="">
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import UserIcon from '~icons/bx/user'

defineProps({
  updating: Boolean,
  handleUpdate: Function
})
</script>

<template>
  <form>
    <fieldset :disabled="updating">
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
      <Button :action="handleUpdate" class="flex-center-center mt-8">
        Update
        <LoadingAlt v-if="updating" :class="{ 'ml-1': updating }" />
      </Button>
    </fieldset>
  </form>
</template>

<style scoped src="./EditProfile.scss"></style>

