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
// @import '../css/variable';
// @import '../css/mixin';
@import '~@/mobile/css/mobile-component-output';


.special-header {
  @include page-header();
  @include flex-box();
  @include fixedPC();
  // width: 100%;
}
.special-header__logo {
  // @include absolute();
  position: relative;
  right: unset;
  // width: 160px;
  flex: 0 1 160px;
  overflow: hidden;
  margin: 0 20px;
  a {
    // @include absolute();
    display: block;
    height: 100%;
  }
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
}
.special-header__nav {
  @include flex-box(row, space-between);
  height: 100%;
  font-size: 28px;
  flex: 1 1 auto;
  li {
    text-align: center;
    width: 50%;
    position: relative;
    a {
      // @include absolute();
      display: block;
      width: 100%;
      height: 100%;
      color: $black-666;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
