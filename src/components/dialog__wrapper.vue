<template>
<div class="dialog__wrapper" :class="bg">
  <slot>提示：该组件是一个全屏弹窗，需要嵌套其他组件</slot>
</div>
</template>

<script>
export default {
  props: {

    // 是否半透明
    // @default 'trans' 半透明
    //          'visible' 不透明
    opacity: {
      type: String,
      default: 'trans'
    }
  },
  computed: {
    bg: function () {
      return this.opacity;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable';
@import '../assets/css/mixin';

.dialog__wrapper {
  @include fixedPC();
  background: $white-1;
  z-index: 30;
}
.trans {
  background: rgba(51, 51, 51, .6);
}
.visible {
  background: #f4efea;
}
</style>
