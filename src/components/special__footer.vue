<template>
<div class="special-footer bdtop">

  <div class="special-footer__nav">
    <div class="special-footer__nav__item bdright">
      <icon icon="kefu"/>
      <h4 class="black-666">
        客服
      </h4>
    </div>
    <div class="special-footer__nav__item">
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
  @include page-footer();
}
.special-footer__nav {
  @include flex-box();
}
.special-footer__nav__item {
  flex: 1 0 auto;
  width: 124px;
  @include flex-box (column, space-around, center);
  .icon {
    display: inline-block;
    position: relative;
    height: 1.5rem;
  }
  h4 {
    @include line-height-center(24px);
    margin-bottom: 3px;
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
