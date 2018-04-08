<template>
<div class="product-selectlist__container">

  <header class="product-selectlist__header">
    <span class="left vc" 
        @click="toggleSelected">
      <icon :icon="selectedAll ? 'tick4' : 'circle'"/>
      全选
    </span>
    <h2 class="bold">
      支持货到付款
    </h2>
    <a class="btn_default right vc" 
        @click="toggleProList(false)">取消</a>
  </header>

  <div class="wrapper">
    <div class="product-selectlist">
      <div class="product-selectlist__item" 
            v-for="(row, index) in productList" 
            :key="index">

        <!-- <div class="product-selectlist__item__select-icon left vc"> -->
          <!-- <i class="icon icon-circle"></i> -->
          <icon :icon="row.selected ? 'tick4' : 'circle'" 
                class="product-selectlist__item__select-icon vc" 
                v-on:click.native="toggleSelected({targetPro: row})"/>
        <!-- </div> -->
        <dl>
          <dt class="product-selectlist__item__img-wrapper">
            <img :src="row.file"/>
          </dt>
          <dd class="product-selectlist__item__info-wrapper">
            <h3 class="product-selectlist__item__name bold">
              {{row.alt}}
            </h3>
            <p class="product-selectlist__item__operation bottom">
              <em>{{row.price}}</em>
              <a class="product-selectlist__item__operation-btn--right btn_default" 
                  @click="openStyleList({item: row})">
                {{row.selectedStyle ? row.selectedStyle + row.count + '件' : '选择规格'}}
                <icon class="right vc" 
                      icon="more"/>
              </a>
            </p>
          </dd>
        </dl>

      </div>
    </div>
  </div>

  <pay-footer 
      :payUrl="payUrl"
      :totalPrice="totalPrice"/>

</div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import icon from './icon'
import payFooter from './pay__footer'

// 该组件为商品列表的展示，多选购买
export default {
  components: {icon, payFooter},
  data() {
    return {
      icon: 'circle1',
    }
  },
  computed: {
    ...mapState([
      'showProList',
      'showStyleList',
      'productList',
      'selectedAll',
      'payUrl',
      'totalPrice',
    ]),
    // allSelectedIcon() {
    //   return this.selectedAll ? 'tick4' : 'circle';
    // },
    selectedStyle() {
      return '选择规格';
    }
  },
  methods: {
    ...mapMutations([
      'toggleProList',
    ]),
    ...mapActions([
      'toggleSelected',
      'openStyleList',
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
@import '../assets/css/common.scss';

.wrapper {
  height: 90%;
  height: calc(100vh - 200px);
  overflow: scroll;
}

.product-selectlist__container {
  position: relative;
  overflow: hidden;
  background: $white-2;
  height: 100%;
}
.product-selectlist__header {
  @include line-height-center(100px);
  @include flex-box();
  width: 100%;
  background-color: $white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid $black-eee;
  z-index: 20;
  span {
    left: suit-size(2);
    .icon {
      position: relative;
      display: inline-block;
      vertical-align: text-bottom;
    }
  }
  a {
    right: suit-size(2);
  }
}

.product-selectlist {
  background: $white;
}
.product-selectlist__item {
  padding: 35px;
  padding-left: 90px;
  min-height: 210px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid $black-ccc;
  &:first-child {
    border-top: 1px solid $black-ccc;
  }
  &:last-child {
    border-bottom: 0;
  }
  .product-selectlist__item__select-icon {
    left: suit-size(2);
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
    @include flex-box(column, space-between);
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
    @include line-height-center(48px, 48px, left);
    width: 100%;
    em {
      font-size: 28px;
    }
  }
  .product-selectlist__item__operation-btn--right {
    position: absolute;
    right: 0;
    padding-right: 40px;
  }
}

</style>
