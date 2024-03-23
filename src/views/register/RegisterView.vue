<script setup>
import Button from '@/components/button/Button.vue'
import AuthHeader from '@/components/AuthHeader.vue'
import AuthFooter from '@/components/AuthFooter.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import TablerSend from '~icons/tabler/send';
import TablerUserCircle from '~icons/tabler/user-circle';
import TablerLockShare from '~icons/tabler/lock-share';
// 
import useRegisterView from './useRegisterView'
const { handleSubmit, submitting } = useRegisterView()
</script>

<template>
  <AuthHeader h1="Create an" p="account" />
  <!--  -->
  <main class="h-screen">
    <form>
      <fieldset :disabled="submitting">
        <!--  -->
        <div class="form-group">
          <label for="name">Name</label>
          <div class="input-group">
            <input type="search" id="name" placeholder="N/b: Surname first" required />
            <i>
              <TablerUserCircle />
            </i>
          </div>
        </div>
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
        <!--  -->
        <Button :action="handleSubmit" class="flex-center-center mt-8">
          Register
          <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
        </Button>
      </fieldset>
    </form>
    <!--  -->
    <AuthFooter prompt="Already have an account?" text="Log in" :to="$PATH.login" />
  </main>
</template>

<style scoped src="@/components/_layouts/auth/AuthLayout.scss"></style>
