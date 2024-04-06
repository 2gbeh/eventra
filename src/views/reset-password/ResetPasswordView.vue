<script setup lang="">
import Button from '@/components/button/Button.vue'
import AuthHeader from '@/components/AuthHeader.vue'
import AuthFooter from '@/components/AuthFooter.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerLockShare from '~icons/tabler/lock-share';
// 
import useResetPasswordView from './useResetPasswordView'
const { handleSubmit, submitting } = useResetPasswordView()
</script>

<template>
  <AuthHeader h1="Reset" p="Password" />
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset :disabled="submitting">
        <!--  -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-group">
            <input type="password" id="password" placeholder="" required />
            <i>
              <TablerLockShare />
            </i>
          </div>
        </div>
        <!--  -->
        <div class="form-group">
          <label for="confirm_password">Confirm Password</label>
          <div class="input-group">
            <input type="password" id="confirm_password" placeholder="" required />
            <i>
              <TablerLockShare />
            </i>
          </div>
        </div>
        <Button :action="handleSubmit" class="flex-center-center mt-10">
          Update
          <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
        </Button>
      </fieldset>
    </form>
    <!--  -->
    <AuthFooter prompt="Return to" text="Log in" :to="$PATH.login" />
  </main>
</template>

<style scoped src="@/components/_layouts/auth/AuthLayout.scss"></style>
