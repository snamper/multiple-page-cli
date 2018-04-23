<template>
<i :class="className" @click="click">
  <slot></slot>
</i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    className() {
      return `icon icon-${this.icon}`;
    }
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/common.scss';

/*
 *  放icon的
 */

// icon 全用背景图吧
.icon {
  position: absolute;
  display: block;
  height: 40px;
  width: 40px;
  background: {
    position: center;
    repeat: no-repeat;
    size: cover;
  }
}

// 神奇的 map 结构，拯救以后改 icon 路径的我
// 官网没细写，看这个 => https://www.w3cplus.com/preprocessor/sass-maps.html
$icon-map: (
  back: 'back.jpg',
  // truck: 'truck.jpg',
  more: 'more.jpg',
  // location: 'location.jpg',
  // location2: 'location2.png',
  // edit: 'edit.png',
  // transhbin: 'trashbin.png',
  // selected: 'selected.png',
  tick1: 'tick1.png',
  tick2: 'tick2.png',
  tick3: 'tick3.png',
  tick4: 'tick4.png',  
  circle: 'circle.png',
  circle1: 'circle1.png',
  circle2: 'circle2.png',
  // loading: 'loading.gif',
  // wallet: 'wallet.png',
  // waitinglist: 'waitinglist.png',
  home: 'home.png',
  // type: 'type.png',
  // good: 'good.png',
  cart: 'cart.png',
  // private: 'private.png',
  square: 'square.png',
  phone: 'phone.png',
);

// 统一生成路径。。改的时候可以偷懒
@each $key,$value in $icon-map {
  .icon-#{$key} {
    background-image: url('../assets/image/icon_#{$value}');
  }
}

// 路径不同的，隔离
.icon-location {
  background-image: url(https://s103.ggwan.com/shopv2/new_cart/order/icon_location.jpg);
}
.icon-avatar{
  background-image: url(http://sandbox.user.linghit.com/bundles/userbundle/images/personal_icon_user.png);
}
.icon-kefu {
  background-image: url(https://s103.ggwan.com/shopv2/new_cart/img/kefu.png);
}
</style>
