<script setup lang="ts">
import useTheLogo from "./useTheLogo"

const props = withDefaults(defineProps<{
  size?: number | string
  to?: string
  hasTitle?: boolean
  hasBorder?: boolean
}>(), {
  size: 32
})

const { styles } = useTheLogo(props)
</script>

<template>
  <figure>
    <!--  -->
    <RouterLink v-if="to" :to>
      <img src="/icon.png" :alt="$APP.name.toString()" :style="styles" />
    </RouterLink>
    <img v-else src="/icon.png" :alt="$APP.name.toString()" :style="styles" />
    <!--  -->
    <figcaption v-if="hasTitle">{{ $APP.summary }}</figcaption>
  </figure>
</template>

<style scoped src="./TheLogo.scss"></style>