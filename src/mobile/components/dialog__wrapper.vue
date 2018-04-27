<template>
<transition name="dialogUp">
  <div 
    class="dialog__wrapper" 
    :class="bg"
    @click.self="close"
  >
    <slot>提示：该组件是一个全屏弹窗，需要嵌套其他组件</slot>
  </div>
</transition>
</template>

<script>
import lockScroll from '@/ui-lib/mixin/lockScroll'

export default {
  componentName: 'dialogWrapper',
  props: {
    // 是否半透明
    // @default 'trans' 半透明
    //          'visible' 不透明
    opacity: {
      type: String,
      default: 'trans'
    }
  },
  mixins: [lockScroll],
  data() {
    return {

    }
  },
  computed: {
    bg: function () {
      return this.opacity;
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    touchmoveHandler() {
      
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variable';
@import '../css/mixin';

.dialog__wrapper {
  @include fixed();
  // @include absolute();
  // height: 100vh;
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
