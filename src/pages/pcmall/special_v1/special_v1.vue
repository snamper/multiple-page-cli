<template>
<div id="special_v1" class="container">
  <specialHeaderNav/>
  <div class="wrapper">
    <section class="special-img-list">
      <img src="https://sslresources.linghit.com/shopv2_1508482864.jpg"/>
    </section>
    <section class="product-wrapper">
      <div class="section-header">
        <h3>
          <i class="icon icon-square"></i>
          在线请购
          <i class="icon icon-square"></i>          
        </h3>
        <p>
          <span class="tag">
            <i class="icon icon-tick2"></i>
            支持货到付款
          </span>
          <span class="tag">
            <i class="icon icon-tick2"></i>
            大陆包邮
          </span>
          <span class="tag">
            <i class="icon icon-tick2"></i>
            7天无理由退换
          </span>
        </p>
      </div>
      <div class="product-list">
        <div class="product-list_item" 
              v-for="(row, index) in list" 
              :key="index">
          <dl>
            <dt>
              <img class="small-img" 
                    :src="row.imgSrc"/>
            </dt>
            <dd>
              <h4>
                {{row.t}}
              </h4>
              <p class="price">
                {{row.price}}
                <em>{{row.oldPrice}}</em>
              </p>
              <p class="operation">
                <i class="icon icon-cart"></i>
                <a class="operate btn-confirm">立即购买</a>
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </section>

    <section class="info-wrapper">
      <div class="section-header">
        <h3>
          <i class="icon icon-square"></i>
            大家都在买
          <i class="icon icon-square"></i>          
        </h3>
      </div>

      <!-- 这里用一层div包裹，是以防后面稿子改为一行放多个list这样 -->
      <ul class="note-list">
        <li class="note-list_item"
            v-for="(row, index) in list2" 
            :key="index">
          <h3 class="black-666 bold">
            {{row.name}}
            <span>
              {{row.mobile}}
            </span>
            <span class="right">
              {{row.time}}
            </span>
          </h3>
          <p class="black-999">
            {{row.address}}
            <span class="right red-2 bold">
              {{row.status}}
            </span>
          </p>
        </li>
      </ul>

    </section>
  </div>
</div>
</template>

<script>
import specialHeaderNav from '@/components/special_header_nav'

export default {
  // 新专题模板v1
  name: 'special_v1',
  components: {specialHeaderNav},
  data() {
    return {
      list: [
        {
          imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
          t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
          price: '￥258.00',
          oldPrice: '￥258.00',
          people: '2000人购买'
        },
        {
          imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
          t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
          price: '￥258.00',
          oldPrice: '￥258.00',
          people: '2000人购买'
        },
        {
          imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
          t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
          price: '￥258.00',
          oldPrice: '￥258.00',
          people: '2000人购买'
        },
        {
          imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
          t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
          price: '￥258.00',
          oldPrice: '￥258.00',
          people: '2000人购买'
        },
        {
          imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
          t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
          price: '￥258.00',
          oldPrice: '￥258.00',
          people: '2000人购买'
        },
        {
          imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
          t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
          price: '￥258.00',
          oldPrice: '￥258.00',
          people: '2000人购买'
        },
      ],

      list2: [
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货'
        },
      ]
    }
  },
  methods: {

  },
  mounted: function() {
    // 关于SEO，想使用nuxt的，暂时搭不出来。用渲染方式顶着。。
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/lib/mixin.scss';

.container {
  background: #f4efea;
}

.special-img-list {
  img {
    width: 100%;
  }
}

// 对product-wrapper 独立定制一部分
.product-wrapper {
  margin: 16px 0;
}
.product-list {
  margin: 0;
  .product-list_item {
    padding: 24px;
    &:first-child {
      border-top: 1px solid $black-ccc;
    }
  }
  dt {
    @include square(240px);
    margin-right: 40px;
    img {
      @include square(240px);
    }
  }
  h4 {
    color: $black-333;
    font-weight: 600;
    padding-right: 0;
    line-height: 40px;
    height: 80px;
    font-size: 26px;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .price{
    font-weight: 600;
    font-size: 28px;
    color: $red-1;
    em {
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
    .btn-confirm {
      @include line-height-center(50px);
      padding: 0 30px;
      float: right;
    }
  }
}

.info-wrapper {
  margin: 16px auto 0;
  width: 700px;
  background: $white;
}
.note-list {
  .note-list_item {
    position: relative;
    h3 {
      font-size: 26px;
      font-weight: 500;
    }
    p {
      padding: 0;
      span {

      }
    }
  }
}
</style>
