<script setup lang="ts">
enum EVariant {
  'solid' = 1,
  'outline',
  'solid_',
  'outline_',
}

const props = withDefaults(defineProps<{
  variant?: keyof typeof EVariant
  action?: (() => void) | string | null
  isLink?: boolean
  alt?: boolean
}>(), {
  variant: 'solid'
})

// console.log(props, EVariant)
</script>

<template>
  <RouterLink v-if="isLink" :to="action" :class="{ variant, 'danger': alt }">
    <slot />
  </RouterLink>
  <button v-else type="button" @click="action" :class="{ variant, 'danger': alt }">
    <slot />
  </button>
</template>

<style scoped src="./Button.scss"></style>