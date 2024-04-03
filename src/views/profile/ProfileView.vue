<script setup lang="">
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import Modal from '@/components/Modal.vue'
import EditName from '@/components/edit-name/EditName.vue'
import EditEmail from '@/components/edit-email/EditEmail.vue'
import EditPassword from '@/components/edit-password/EditPassword.vue'
import ProfileContentImage from '@/components/profile-content-image/ProfileContentImage.vue'
import ProfileContent from '@/components/profile-content/ProfileContent.vue'
import VerifiedIcon from '~icons/ic/round-verified'
import LogoutIcon from '~icons/tabler/logout-2'
import useProfileView from "./useProfileView";

const {
  showEditModal,
  editFormType,
  submitting,
  toggleShowEdit,
  handleSubmit,
} = useProfileView()
</script>

<template>
  <AppBar stack="Profile" />
  <SafeAreaView>
    <!--  -->
   <ProfileContentImage />
    <!--  -->
    <Modal v-if="showEditModal" :on-close="toggleShowEdit" header="">
      <EditName v-if="editFormType == 0" />
      <EditEmail v-if="editFormType == 1" />
      <EditPassword v-if="editFormType == 2" />
    </Modal>
    <ProfileContent :handle-edit="toggleShowEdit" />
    <!--  -->
    <footer>
      <Button :action="handleSubmit" class="flex-center-center mt-8">
        <i class="mr-2">
          <LogoutIcon />
        </i>
        Log out
        <LoadingAlt v-if="submitting" :class="{ 'ml-1': submitting }" />
      </Button>
    </footer>
  </SafeAreaView>
</template>

<style scoped src="./ProfileView.scss"></style>
