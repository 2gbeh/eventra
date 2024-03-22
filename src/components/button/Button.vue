<script setup lang="ts">
// import useTheLogo from "./useTheLogo"

const props = withDefaults(defineProps<{
  text: string
  handleClick?: (() => void) | null
  variant?: 'primary' | 'secondary'
  isLink?: boolean
}>(), {
  variant: 'primary'
})

// const { styles } = useTheLogo(props)
</script>

<template>
  <button :class="variant" @click="handleClick">{{ text }}</button>
</template>

<style scoped src="./Button.scss"></style>