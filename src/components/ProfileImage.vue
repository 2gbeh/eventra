<script setup lang="">
import VerifiedIcon from '~icons/ic/round-verified'

defineProps({
  src: String,
  size: Number | Number,
  h1: String,
  p: String,
  isVerified: Boolean
})
</script>

<template>
  <figure class="flex-center-center flex-col">
    <div class="relative">
      <img :src="src" alt="" :style="`width: ${size ?? '100'}px; height: ${size ?? '100'}px;`" />
      <i v-if="isVerified">
        <VerifiedIcon />
      </i>
    </div>
    <figcaption class="flex-center-center flex-col">
      <h1 v-if="h1">{{ h1 }}</h1>
      <p v-if="p">{{ p }}</p>
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
figure {
  margin-top: 30px;

  img {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 100%;
    /* width: 100px; */
    /* height: 100px; */
  }

  i {
    background-color: #fff;
    color: #0093dd;
    border-radius: 100%;
    font-size: 18px;
    position: absolute;
    right: 0;
    bottom: 5px;
  }

  figcaption {
    h1 {
      margin-top: 10px;
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 500;
    }

    p {
      margin-top: -2px;
      color: #777;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
