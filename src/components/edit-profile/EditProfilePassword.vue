<script setup lang="">
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import EyeIcon from '~icons/gg/eye'
import KeyIcon from '~icons/tabler/key'
import LockIcon from '~icons/mingcute/lock-line'

defineProps({
  updating: Boolean,
  handleUpdate: Function
})
</script>

<template>
  <form>
    <fieldset :disabled="updating">
      <div class="form-group">
        <label for="old_password">
          Current Password
        </label>
        <div class="input-group">
          <input type="password" name="old_password" id="old_password" required />
          <i>
            <EyeIcon />
          </i>
        </div>
      </div>

      <div class="form-group">
        <label for="new_password">
          New Password
        </label>
        <div class="input-group">
          <input type="password" name="new_password" id="new_password" required />
          <i>
            <KeyIcon />
          </i>
        </div>
      </div>

      <div class="form-group">
        <label for="cfm_password">
          Confirm New Password
        </label>
        <div class="input-group">
          <input type="password" name="cfm_password" id="cfm_password" required />
          <i>
            <KeyIcon />
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

