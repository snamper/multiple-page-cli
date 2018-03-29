<template>
<div id="special_v1" class="container">
  <special-header/>
  <div class="wrapper">
    <section class="special-img-list">
      <img src="https://sslresources.linghit.com/shopv2_1508482864.jpg"/>
    </section>
    <section class="section-layout product-wrapper">
      <div class="section-header">
        <h1 class="section-header__title">
          <i class="icon icon-square"></i>
          在线请购
          <i class="icon icon-square"></i>
        </h1>
        <p class="tags">
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

      <!-- 商品列表 -->
      <product-list-view :product-list="list"/>

    </section>

    <section class="section-layout note-wrapper">
      <div class="section-header bdbottom">
        <h1 class="section-header__title">
          <i class="icon icon-square"></i>
            大家都在买
          <i class="icon icon-square"></i>
        </h1>
      </div>

      <ul class="note-list">
        <li class="note-list__item"
            v-for="(row, index) in list2" 
            :key="index">
          <h3 class="note-list__item__title black-666 bold">
            {{row.name}}
            <span>
              {{row.mobile}}
            </span>
            <span class="right">
              {{row.time}}
            </span>
          </h3>
          <p class="note-list__item__content black-999">
            {{row.address}}
            <span class="right red-2 bold">
              {{row.status}}
            </span>
          </p>
        </li>
      </ul>

    </section>

    <section class="section-layout note-wrapper">
      <div class="section-header bdbottom">
        <h1 class="section-header__title">
          <i class="icon icon-square"></i>
            来看看别人怎么说
          <i class="icon icon-square"></i>      
        </h1>    
      </div>

      <ul class="note-list">
        <li class="note-list__item" 
            v-for="(row,index) in list2" 
            :key="index">
          <h3 class="note-list__item__title black-666 bold">
            {{row.name}}
            <span>
              {{row.sex}}
              {{row.age}}岁
            </span>
            <span class="right">
              {{row.address}}
            </span>
            <p class="note-list__item__content black-999">
              {{row.content}}
            </p>
          </h3>
        </li>
      </ul>
    </section>
  </div>
  <!-- wrapper end -->

  <special-footer/>

  <dialog-wrapper>
    <product-list-select :product-list="list"/>
  </dialog-wrapper>
</div>
</template>

<script>
import specialHeader from '@/components/special__header'
import specialFooter from '@/components/special__footer'
import productListView from '@/components/special__product-list--view'
import productListSelect from '@/components/special__product-list--select'
import dialogWrapper from '@/components/dialog__wrapper'

export default {
  // 新专题模板v1
  name: 'special_v1',
  components: {
    specialHeader, 
    specialFooter, 
    dialogWrapper, 
    productListView,
    productListSelect
  },
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
          status: '已发货',
          age: '28',
          content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货',
          age: '28',
          content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货',
          age: '28',
          content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货',
          age: '28',
          content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
        },
        {
          name: '周公山',
          mobile: '137xxxxx26',
          time: '2017年11月24日',
          address: '浙江省杭州市',
          sex: '女',
          status: '已发货',
          age: '28',
          content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
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
@import '../../../assets/css/mixin.scss';

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


.note-wrapper {
  margin: 16px auto 0;
  width: 700px;
  background: $white;
  border-radius: 10px;
  border: 2px solid $black-eee;
}
</style>
