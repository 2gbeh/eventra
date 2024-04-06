<script setup lang="">
import Button from '@/components/button/Button.vue'
import AuthHeader from '@/components/AuthHeader.vue'
import AuthFooter from '@/components/AuthFooter.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerLockShare from '~icons/tabler/lock-share';
// 
import useVerifyEmailView from './useVerifyEmailView'
const { handleSubmit, submitting } = useVerifyEmailView()
</script>

<template>
  <AuthHeader h1="Account" p="verification" />
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset :disabled="submitting">
        <!--  -->
        <article>
          <i class="">
            <TablerSend />
          </i>
          <p>
            An email verification link was sent to <mark>example@domain.com</mark>, 
            simply follow the link to complete your registration.
          </p>
          <p>
            If you didn't receive the email, kindly check your spam or junk
            folder, or click the <b>Resend</b> button below.
          </p>
        </article>
        <!--  -->
        <Button :action="handleSubmit" class="flex-center-center mt-10">
          Resend
          <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
        </Button>
      </fieldset>
    </form>
    <!--  -->
    <AuthFooter prompt="Return to" text="Log in" :to="$PATH.login" />
  </main>
</template>

<style scoped src="@/components/_layouts/auth/AuthLayout.scss"></style>
