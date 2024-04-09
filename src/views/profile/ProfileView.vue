<script setup lang="">
import VerifiedIcon from '~icons/ic/round-verified'
import LogoutIcon from '~icons/tabler/logout-2'
import ChevronIcon from '~icons/fluent/chevron-right-12-filled'
import UserIcon from '~icons/bx/user'
import EmailIcon from '~icons/ci/paper-plane';
import KeyIcon from '~icons/tabler/key'
import RoleIcon from '~icons/uil/accessible-icon-alt';
import DateIcon from '~icons/material-symbols/date-range-outline'
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import Modal from '@/components/Modal.vue'
import EditProfileImage from '@/components/edit-profile/EditProfileImage.vue'
import EditProfileName from '@/components/edit-profile/EditProfileName.vue'
import EditProfileEmail from '@/components/edit-profile/EditProfileEmail.vue'
import EditProfilePassword from '@/components/edit-profile/EditProfilePassword.vue'
// 
import useProfileView from "./useProfileView";

const {
  formData,
  submitting,
  updating,
  showEditModal,
  editFormType,
  editFormHeader,
  toggleShowEdit,
  handleSubmit,
  handleUpdate
} = useProfileView()
</script>

<template>
  <AppBar stack="Profile" />
  <SafeAreaView>
    <!--  -->
    <EditProfileImage />
    <!--  -->
    <Modal v-if="showEditModal" :on-close="toggleShowEdit" :header="editFormHeader">
      <EditProfileName v-if="editFormType == 0" :updating="updating" :handleUpdate="handleUpdate"/>
      <EditProfileEmail v-if="editFormType == 1" :updating="updating" :handleUpdate="handleUpdate"/>
      <EditProfilePassword v-if="editFormType == 2" :updating="updating" :handleUpdate="handleUpdate"/>
    </Modal>
    <ul>
      <li v-for="(e, i) in formData" :key="i" class="flex-center-between">
        <div class="flex-center">
          <i class="flex-center-center">
            <UserIcon v-if="e.label === 'Name'" />
            <EmailIcon v-if="e.label === 'Email'" />
            <KeyIcon v-if="e.label === 'Password'" />
            <RoleIcon v-if="e.label === 'Role'" />
            <DateIcon v-if="e.label === 'Joined'" />
          </i>
          <div>
            <b>{{ e.label }}</b>
            <p>
              {{ e.value }}
              <a v-if="e.isVerified">Verified</a>
            </p>
          </div>
        </div>
        <i v-if="e.canEdit" @click="toggleShowEdit(i)" id="more">
          <ChevronIcon />
        </i>
      </li>
    </ul>
    <!--  -->
    <footer class="">
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
