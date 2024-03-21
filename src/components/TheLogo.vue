<script setup lang="ts">
import useGlobalProperties from '@/hooks/useGlobalProperties'
const _ = useGlobalProperties()

const props = withDefaults(defineProps<{
  size?: number | string
  hasTitle?: boolean
  hasBorder?: boolean
}>(), {
  size: 32
})


const styles = {
  width: props.size + 'px',
  height: props.size + 'px',
  border: props.hasBorder ? `5px solid ${_.$COLOR.brand_light}` : '',
}
</script>

<template>
  <figure>
    <img src="/icon.png" :alt="$APP.name.toString()" :style="styles" />
    <figcaption v-if="hasTitle">{{ $APP.summary }}</figcaption>
  </figure>
</template>

<style scoped lang="scss">
figure {
  text-align: center;

  img {
    border-radius: 100%;
    display: inline-block;
  }

  figcaption {
    margin-top: 12px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: bold;
  }
}
</style>

