<template>
<div class="special-footer bdtop">

  <div class="special-footer__nav">
    <div class="special-footer__nav__item bdright">
      <a :href="customServiceHref"></a>
      <icon icon="kefu"/>
      <h4 class="black-666">
        客服
      </h4>
    </div>
    <div class="special-footer__nav__item">
      <a :href="cartHref"></a>
      <icon icon="cart"/>
      <b v-if="count">{{count}}</b>
      <h4 class="black-666">
        购物车
      </h4>
    </div>
    <div class="special-footer__nav__item btn-brown">
      <a :href="customServicePhone"></a>
      <h1>电话下单</h1>
    </div>
    <div class="special-footer__nav__item btn-red" 
        @click="buy">
      <h1>立即请购</h1>
    </div>
  </div>

</div>
</template>

<script>
import {home} from '@/assets/js/base'
import {customServicePhone} from '@/assets/js/config'
import icon from './icon'

export default {
  props: {
    clickBuy: Function,
    count: [String, Number]
  },
  components: {
    icon
  },
  data() {
    return {
      customServiceHref: 'https://shoplinghit.qiyukf.com/client?k=519bff0bdccf6c8cf2b98f15a94def0f&wp=1?channel=mlinghit',
      cartHref: `${home()}/index.php?s=shop&c=cart`,
      customServicePhone: `tel:${customServicePhone}`,
    }
  },
  methods: {
    buy() {
      this.$emit('clickBuy');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
@import '../assets/css/icon.scss';

.special-footer{
  @include page-footer();
  @include fixedPC();
}
.special-footer__nav {
  @include flex-box();
}
.special-footer__nav__item {
  @include flex-box (column, space-around, center);
  flex: 1 0 auto;
  width: 124px;
  position: relative;
  .icon {
    position: relative;
    height: 1.5rem;
  }
  b {
    @include line-height-center(30px);
    display: inline-block;
    background: $red-1;
    color: $white;
    border-radius: 50%;
    min-width: 24px;
    max-width: 64px;
    padding: 2px 4px;
    position: absolute;
    top: 0;
    right: 4px;
  }
  h4 {
    @include line-height-center(0px);
    margin-bottom: 3px;
  }
  a {
    @include absolute();
    z-index: 1;
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
