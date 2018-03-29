<template>
<div class="product-selectlist__container">

  <header class="product-selectlist__header">
    title
  </header>

  <div class="wrapper">
    <div class="product-selectlist">
      <div class="product-selectlist__item" 
            v-for="(row, index) in list" 
            :key="index">

        <div class="">
          <i class="icon icon-circle"></i>
        </div>
        <dl>
          <dt class="product-selectlist__item__img-wrapper">
            <img :src="row.imgSrc"/>
          </dt>
          <dd class="product-selectlist__item__info-wrapper">
            <h3 class="product-selectlist__item__name bold">
              {{row.t}}
            </h3>
            <p class="product-selectlist__item__operation bottom">
              <span>{{row.price}}</span>
              <a class="operate btn_default right">
                选择规格
                <i class="icon icon-arrowdown"></i>
              </a>
            </p>
          </dd>
        </dl>

      </div>
    </div>
  </div>

</div>
</template>

<script>
// 该组件为商品列表的展示，多选购买
export default {
  props: {
    productList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      list: this.productList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';

.wrapper {
  height: 10rem;
  overflow: scroll;
}

.product-selectlist__container {
  position: relative;
  overflow: hidden;
  background: $white-2;
}
.product-selectlist__header {
  @include line-height-center(100px);
  width: 100%;
  background-color: $white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid $black-eee;
  z-index: 20;
}

.product-selectlist {
  background: $white;
}
.product-selectlist__item {
  padding: 35px;
  padding-left: 90px;
  min-height: 210px;
  box-sizing: border-box;
  border-bottom: 1px solid $black-ccc;
  &:first-child {
    border-top: 1px solid $black-ccc;
  }
  &:last-child {
    border-bottom: 0;
  }
  dl {
    // overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-content: stretch;
    height: 144px;    
  }
  .product-selectlist__item__img-wrapper {
    @include square(144px);
    margin-right: 30px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    img {
      @include square(144px);
    }
  }
  .product-selectlist__item__info-wrapper {
    @include flexBox(column, space-between);
    height: 100%;
    position: relative;
    flex: 1 0;
  }
  .product-selectlist__item__name {
    height: 70px;
    line-height: 35px;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    span{
      position: absolute;
      top: 0;
      right: 0;
      color: $black-666;
    }
  }
  .product-selectlist__item__operation{
    @include line-height-center(48px, left);
    width: 100%;
    span {
      font-size: 28px;
      font-weight: 600;
      color: $red-1;
    }
  }
}

</style>
