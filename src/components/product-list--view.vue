<template>
<div class="product-viewlist">

  <div class="product-viewlist__item"
        :class="[productList.length == 1 ? 'product-viewlist__item--single': '']" 
        v-for="(row, index) in productList" 
        :key="index">

    <dl>
      <dt>
        <img class="small-img" 
              :src="row.file"/>
        <span>2000人购买</span>
      </dt>
      <dd>
        <h4>
          {{row.alt}}
        </h4>
        <p class="price">
          <em>¥ {{row.price}}</em>
          <del>{{row.oldPrice}}</del>
        </p>
        <p class="operation">
          <a @click="openSku(row, 'cart')">
            <icon icon="cart"/>
          </a>
          <a class="operate btn_confirm" 
              @click="openSku(row, 'buy')">立即购买</a>
        </p>
      </dd>
    </dl>

  </div>
</div>
</template>

<script>
// import {mapState, mapMutations, mapActions} from 'vuex'
import icon from '@/components/icon'
import Loading from '@/ui-lib/src/loading/index'


// 该组件为商品列表的展示，单个购买
export default {
  props: {
    productList: Array,
  },
  components: {
    icon,
  },
  data() {
    return {
      loading: null,
    }
  },
  methods: {
    openSku(item, origin) {
      let data = {item: item, origin: origin};
      this.$emit('openSkuDialog', data);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
// @import '../assets/css/common.scss';

.product-viewlist {
  overflow: hidden;
  position: relative;
  margin: 0;
}
.product-viewlist__item {
  padding: 24px;
  min-height: 140px;
  box-sizing: border-box;
  border-bottom: 1px solid $black-ccc;
  &:first-child {
    border-top: 1px solid $black-ccc;
  }
  &:last-child {
    border-bottom: 0;
  }
  dl {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-content: stretch;
  }
  dt {
    @include square(240px);
    display: inline-block;
    position: relative;
    overflow: hidden;
    margin-right: 40px;
    border-radius: 4px;
    overflow: hidden;
    img {
      @include square(240px);
    }
    span {
      position: absolute;
      // top
    }
  }
  dd {
    position: relative;
    font-size: 24px;
    flex: 1 0;
  }
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: $black-333;
    font-weight: 600;
    padding-right: 0;
    line-height: 40px;
    height: 80px;
    font-size: 26px;
    margin-top: 24px;
    margin-bottom: 16px;
    span{
      position: absolute;
      top: 0;
      right: 0;
      color: $black-666;
    }
  }
  p {
    margin-top: 2px;
    color: $black-666;
    position: relative;
    span{
      position: absolute;
      right: 0;
    }
  }
  .price{
    font-weight: 600;
    font-size: 28px;
    del {
      color: $black-666;
      text-decoration: line-through;
    }
  }
  .operation {
    position: absolute;
    bottom: 0;
    width: 100%;
    .icon {
      @include square(50px);
    }
    .btn_confirm {
      @include line-height-center(50px);
      padding: 0 30px;
      float: right;
    }
  }
}

.product-viewlist__item--single {
  dl {
    @include flex-box(column);
  }
  dt {
    @include square(700px);
    margin-right: 0;
    img {
      @include square(700px);      
    }
  }
  dd {
    padding-bottom: 70px;
  }
}
</style>
