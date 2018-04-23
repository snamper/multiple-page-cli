<template>
  <footer class="pay__footer">
    <div class="pay__footer__layout">
      <div class="black-333 bold">
        总计<em>￥{{totalPrice}}</em>
      </div>
      <a class="btn_primary" 
          @click.prevent.self="clickFn">去结算</a>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    // payUrl: String,
    payFn: Function,
    totalPrice: [String, Number],
  },
  data() {
    return {
      btnDisabled: false
    }
  },
  methods: {
    clickFn() {
      return Promise.resolve(this.payFn())
      .then(() => {
        return Promise.resolve();
      })
      .catch(err => {
        return Promise.reject(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';

.pay__footer {
  @include page-footer();
  @include fixedPC();
}

.pay__footer__layout {
  @include flex-box(row, space-between);
  font-size: 40px;
  padding-left: suit-size(3);
  div em {
      font-size: 40px;
  }
  a {
    @include line-height-center(auto, unset);
    font-weight: 500;
    width: 226px;
    border-radius: 0;
  }
}
</style>
