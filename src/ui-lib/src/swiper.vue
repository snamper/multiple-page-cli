<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    options: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      swiper: {},
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.swiper-wrapper {
  display: flex;
  flex-flow: columns nowrap;
}
</style>
