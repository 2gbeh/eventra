<script setup lang="">
import ChevronIcon from '~icons/fluent/chevron-right-12-filled'
defineProps({
  handleEdit: Function
})
</script>

<template>
  <section>
    <ul>
      <li class="flex-center-between">
        <div>
          <b>Name</b>
          <p>Emmanuel Tugbeh</p>
        </div>
        <i @click="handleEdit(2)">
          <ChevronIcon />
        </i>
      </li>
      <li class="flex-center-between">
        <div>
          <b>Email</b>
          <p>
            etugbeh@outlook.com
            <a>Verified</a>
          </p>
        </div>
        <i @click="handleEdit(2)">
          <ChevronIcon />
        </i>
      </li>
      <li class="flex-center-between">
        <div>
          <b>Password</b>
          <p>**** ****</p>
        </div>
        <i @click="handleEdit(2)">
          <ChevronIcon />
        </i>
      </li>
      <li>
        <b>Role</b>
        <p>WEBMASTER</p>
      </li>
      <li>
        <b>Joined</b>
        <p>15/09/1992</p>
      </li>
    </ul>
  </section>
</template>

<style scoped src="./ProfileContent.scss"></style>
