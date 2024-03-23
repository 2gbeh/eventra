<script setup lang="">
import Button from '@/components/button/Button.vue'
import AuthHeader from '@/components/AuthHeader.vue'
import AuthFooter from '@/components/AuthFooter.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerLockShare from '~icons/tabler/lock-share';
// 
import useLoginView from './useLoginView'
const { handleSubmit, submitting } = useLoginView()
</script>

<template>
  <AuthHeader h1="Welcome" p="back" />
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset :disabled="submitting">
        <!--  -->
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-group">
            <input type="email" id="email" placeholder="Ex. example@domain.com" required />
            <i>
              <TablerSend />
            </i>
          </div>
        </div>
        <!--  -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-group">
            <input type="password" id="password" placeholder="" required />
            <i>
              <TablerLockShare />
            </i>
          </div>
          <RouterLink class="" :to="$PATH.forgot_password">Forgot Password?</RouterLink>
        </div>
        <!--  -->
        <Button :action="handleSubmit" class="flex-center-center mt-5">
          Log in
          <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
        </Button>
      </fieldset>
    </form>
    <!--  -->
    <AuthFooter prompt="Don't have an account?" text="Register" :to="$PATH.register" />
  </main>
</template>

<style scoped src="@/components/_layouts/auth/AuthLayout.scss"></style>
