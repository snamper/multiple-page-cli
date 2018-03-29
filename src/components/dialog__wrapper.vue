<template>
<div class="dialog__wrapper">
  <slot>提示：该组件是一个全屏弹窗，需要嵌套其他组件</slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable';
@import '../assets/css/mixin';

.dialog__wrapper {
  @include fixed();
  background: $white-1;
  z-index: 30;
  // display: none;
}
</style>
