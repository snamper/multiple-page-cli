<template>
<header class="special-header">

    <div class="special-header__logo">
      <a :href="logoHref">
        <img src="https://s103.ggwan.com/shopv2/special/images/logo_special.png"/>
      </a>
    </div>
    <ul class="special-header__nav">
      <li v-for="(row, index) in list"
          :key="index">
        <a :href="row.href">
          {{row.t}}
        </a>
      </li>
    </ul>

</header>
</template>

<script>
import {home} from '@/assets/js/base.js'

export default {
  data() {
    return {
      logoHref: `${home()}?channel=mlinghit`,

      // 顶部导航列表
      list: [
        {
          t: '首页',
          href: `${home()}?channel=mlinghit`
        },
        {
          t: '生肖流年',
          href: `${home()}/special/zhuanti/1816.html?channel=mlinghit`
        },
        {
          t: '本命佛',
          href: `${home()}/shop/cat/31.html?channel=mlinghit`          
        },
        {
          t: '招财转运',
          href: `https://user.linghit.com/login?redirect_uri=https://shop.linghit.com/login.html&source=3002&channel=mlinghit`          
        }
      ]
    }
  },
  mounted: function () {
    // console.log(middleware)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';

.special-header {
  @include page-header();
  // @include line-height-center(100px);
  // background: $white-2;
  // width: 100%;
  // position: fixed;
  // top: -100px;
  // left: 0;
  // right: 0;
  // border-bottom: 1px solid $black-eee;
  // z-index: 20;
}
.special-header__logo {
  @include absolute();
  right: unset;
  width: 160px;
  overflow: hidden;
  margin: 0 20px;
  a {
    @include absolute();
  }
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
}
.special-header__nav {
  display: flex;
  height: 100%;
  padding-left: 200px;
  font-size: 28px;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: stretch;
  li {
    text-align: center;
    width: 50%;
    position: relative;
    a {
      @include absolute();
      height: 100%;
      color: $black-666;
    }
  }
}
</style>
