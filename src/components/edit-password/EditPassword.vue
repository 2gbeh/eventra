<script setup lang="">
import Button from '@/components/button/Button.vue'
import EyeIcon from '~icons/ant-design/eye-filled'
import LockIcon from '~icons/ooui/lock'

defineProps({
  variant: String
})
</script>

<template>
  <div class="container mt-10">
    <div class="wrapper">
      <div class="_flex-center-between">
        <h1>Update Password</h1>
        <!-- <i>&times;</i> -->
      </div>
      <form>
        <fieldset :disabled="submitting">
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
                <LockIcon />
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
                <LockIcon />
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
    </div>
  </div>
</template>

<style scoped src="./EditPassword.scss"></style>
