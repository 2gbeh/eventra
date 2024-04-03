<script setup lang="">
import useTheLogo from "./useLogo"

const props = defineProps({
  size: Number | String,
  to: String,
  hasTitle: Boolean,
  hasBorder: Boolean,
})

const { styles } = useTheLogo(props)
</script>

<template>
  <figure>
    <!--  -->
    <RouterLink v-if="to" :to="to">
      <img src="/icon.png" :alt="$APP.name.toString()" :style="styles" />
    </RouterLink>
    <img v-else src="/icon.png" :alt="$APP.name.toString()" :style="styles" />
    <!--  -->
    <figcaption v-if="hasTitle">{{ $APP.summary }}</figcaption>
  </figure>
</template>

<style scoped src="./Logo.scss"></style>