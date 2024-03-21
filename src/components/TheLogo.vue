<template>
  <figure>
    <img src="/icon.png" :alt="$APP.name" />
    <figcaption>Jubilee Chapel HQ</figcaption>
  </figure>
</template>

<style scoped lang="scss">
figure {
  text-align: center;

  img {
    border-radius: 100%;
    width: 80px;
    height: 80px;
    display: inline-block;
  }

  figcaption {
    margin-top: 12px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>