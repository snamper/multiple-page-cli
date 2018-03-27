<template>
<header id="special-header-nav" class="special-header-nav header">

    <div>
      <a>
        <img src="https://s103.ggwan.com/shopv2/special/images/logo_special.png"/>
      </a>
    </div>
    <ul>
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
import middleware from '@/assets/js/middleware.js'
let {base} = middleware

export default {
  data() {
    return {

      // 顶部导航列表
      list: [
        {
          t: '首页',
          href: `${base.home()}/special/single2015/411.html`
        },
        {
          t: '生肖流年',
          href: `${base.home()}/special/single2015/411.html`          
        },
        {
          t: '本命佛',
          href: `${base.home()}/special/single2015/411.html`          
        },
        {
          t: '招财转运',
          href: `${base.home()}/special/single2015/411.html`          
        }
      ]
    }
  },
  mounted: function () {
    console.log(middleware)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/middleware.scss';

.header {
  background: #faf7ee;
}
div {
  @include absolute();
  right: unset;
  width: 160px;
  overflow: hidden;
  margin: 0 20px;
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
}
ul {
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
