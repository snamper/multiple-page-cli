<template>
<header class="header page-header">

</header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

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
  .left {
      position: absolute;
      top: 0;
      width: 100px;
      height: 100px;
  }
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

.header__title {
  @include line-height-center(100px);
  // color: $brown;
  // font-weight: 600;
  // font-size: 42px;
}
</style>
