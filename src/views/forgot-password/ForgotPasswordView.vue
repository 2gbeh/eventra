<script setup lang="">
import Button from '@/components/button/Button.vue'
import AuthHeader from '@/components/AuthHeader.vue'
import AuthFooter from '@/components/AuthFooter.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerLockShare from '~icons/tabler/lock-share';
// 
import useForgotPasswordView from './useForgotPasswordView'
const { handleSubmit, submitting } = useForgotPasswordView()
</script>

<template>
  <AuthHeader h1="Forgot" p="Password" />
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset :disabled="submitting">
        <!--  -->
        <div class="form-group">
          <label for="email">Email Address</label>
          <div class="input-group">
            <input type="email" id="email" placeholder="Ex. example@domain.com" required />
            <i>
              <TablerSend />
            </i>
          </div>
          <span>Your password reset link will be sent to this email</span>
        </div>
        <!--  -->
        <Button :action="handleSubmit" class="flex-center-center mt-10">
          Send
          <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
        </Button>
      </fieldset>
    </form>
    <!--  -->
    <AuthFooter prompt="Return to" text="Log in" :to="$PATH.login" />
  </main>
</template>

<style scoped src="@/components/_layouts/auth/AuthLayout.scss"></style>
