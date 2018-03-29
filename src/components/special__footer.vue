<template>
<div class="special-footer bdtop">

  <div class="special-footer__nav">
    <div class="special-footer__nav__item bdright">
      <!-- <i class="icon icon-kefu"></i> -->
      <icon icon="kefu"/>
      <h4 class="black-666">
        客服
      </h4>
    </div>
    <div class="special-footer__nav__item">
      <!-- <i class="icon icon-cart"></i> -->
      <icon icon="cart"/>
      <h4 class="black-666">
        购物车
      </h4>
    </div>
    <div class="special-footer__nav__item btn-brown">
      <h1>电话下单</h1>
    </div>
    <div class="special-footer__nav__item btn-red">
      <h1>立即请购</h1>
    </div>
  </div>

</div>
</template>

<script>
import icon from './icon'

export default {
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
@import '../assets/css/icon.scss';

.special-footer{
  height: 90px;
  // padding: 0 24px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: $white;
  color: $black-666;
  border-top: 1px solid $black-eee;
  z-index: 20;
}
.special-footer__nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: stretch;
  text-align: center;
}
.special-footer__nav__item {
  flex: 1 0 auto;
  width: 124px;
  .icon {
    display: inline-block;
    position: relative;
    height: 1.5rem;
    // background-size: 1.5625rem;
    // background-position: 50% 50%;
    // background-repeat: no-repeat;
    margin-top: .2rem;
  }
  h4 {
    @include line-height-center(24px);
  }
}

.btn-brown {
  @include line-height-center(90px);
  width: 250px;
  color: #fff;
  background: $brown-1;
}
.btn-red {
  @include line-height-center(90px);
  width: 250px;
  color: #fff;
  background: $red-3;
}
</style>
