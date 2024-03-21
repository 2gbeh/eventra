<script setup lang="ts">
import useTheLogo from "./useTheLogo"

const props = withDefaults(defineProps<{
  size?: number | string
  hasTitle?: boolean
  hasBorder?: boolean
}>(), {
  size: 32
})

const { styles } = useTheLogo(props)
</script>

<template>
  <figure class="">
    <img src="/icon.png" :alt="$APP.name.toString()" :style="styles" />
    <figcaption v-if="hasTitle">{{ $APP.summary }}</figcaption>
  </figure>
</template>

<style scoped src="./TheLogo.scss"></style>