<template>
<header class="header page-header">
  <icon icon="back" @click="back"/>
  <h1 class="page-header__title">
    <slot></slot>
  </h1>
</header>
</template>

<script>
import icon from './icon'
export default {
  components: {
    icon
  },
  props: {
    // backFn: Function
  },
  methods: {
    back() {
      // this.backFn && this.backFn() || history.back();
      this.$emit('backFn');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variable';
@import '../css/mixin';

.page-header {
  @include line-height-center(100px);
  width: 100%;
  background-color: $white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid $black-eee;
  z-index: 20;
  // .left {
  //     position: absolute;
  //     top: 0;
  //     width: 100px;
  //     height: 100px;
  // }
  .icon-back {
      display: block;
      height: 100px;
      width: 100px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100px;
  }
  .right{
    top: 0;
    @include line-height-center(100px);
  }
}
.page-header__title {
  font-weight: 600;
}

.header__title {
  @include line-height-center(100px);
  // color: $brown;
  // font-weight: 600;
  // font-size: 42px;
}
</style>
