<template>
<div id="special_v1" class="container">
  <special-header v-if="showHeaderNav"/>
  <div class="wrapper">
    <section class="special-img-list" v-html="contentdata"></section>
    <!-- <img src="https://sslresources.linghit.com/shopv2_1508482864.jpg"/> -->

    <section class="section-layout product-wrapper" v-if="showProductList">
      <div class="section-header">
        <h1 class="section-header__title">
          <icon icon="square"/>          
          在线请购
          <icon icon="square"/>          
        </h1>
        <p class="section-header__sub-title tags">
          <span class="tag">
            <icon icon="tick2"/>
            支持货到付款
          </span>
          <span class="tag">
            <icon icon="tick2"/>
            大陆包邮
          </span>
          <span class="tag">
            <icon icon="tick2"/>
            7天无理由退换
          </span>
        </p>
      </div>

      <!-- 商品列表 -->
      <product-list-view 
        @openSkuDialog="openSkuDialog" 
        :productList="productList"
      />

    </section>

    <section class="section-layout note-wrapper" v-if="showBuyRecord">
      <div class="section-header bdbottom">
        <h1 class="section-header__title">
          <icon icon="square"/>
            大家都在买
          <icon icon="square"/>
        </h1>
      </div>

      <!-- 滚动轮播 -->
      <div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(row, index) in noteList" :key="index" class="swiper-no-swiping">
              <div class="note-list__item">
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
              </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="section-layout note-wrapper" v-if="showcases">
      <div class="section-header bdbottom">
        <h1 class="section-header__title">
          <icon icon="square"/>
            来看看别人怎么说
          <icon icon="square"/>          
        </h1>
      </div>

      <ul class="note-list">
        <li class="note-list__item" 
            v-for="(row,index) in caseList" 
            :key="index">
          <h3 class="note-list__item__title black-666 bold">
            {{row.name}}
            <span>
              {{randomAge()}}岁
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

  <!-- 专题footer -->
  <special-footer 
    @clickBuy="openProductDialog" 
    :count="cartCount"
    v-if="showProductList"
  />

  <!-- 商品选择列表 -->
  <product-list-select 
    v-if="showProductDialog"
    :productList="productList" 
    @close="closeProductDialog" 
    @openSkuDialog="openSkuDialog"
    @clickPay="openForm"
  />

  <!-- 规格选择弹窗 -->
  <sku-list 
    :remove-height="openSkuOrigin !== 'selectList'"
    v-if="showSkuDialog"
    v-model="openItem" 
    @close="closeSkuDialog"
    @confirm="setItemSku"
  />
    <!-- @update="updateProduct" -->

  <!-- 表单弹窗 -->
  <order-form 
    :open-origin="openSkuOrigin"
    @confirmForm="postOrder" 
    @back="closeForm" 
    v-if="showForm"/>
</div>
</template>

<script>
import {getSpecialId} from '@/assets/js/common'
import {entityToString, getUrlParams} from '@/assets/js/base'

import specialHeader from '../../components/special__header'
import specialFooter from '../../components/special__footer'
import productListView from '../../components/product-list--view'
import productListSelect from '../../components/product-list--select'
import dialogWrapper from '../../components/dialog__wrapper'
import skuList from '../../components/sku-list'
import dialogFooter from '../../components/dialog__footer'
import icon from '../../components/icon'
import payFooter from '../../components/pay__footer'
import orderForm from '../../components/order-form'

// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import specialBuy from '../..//components/mixin/specialBuy'
import {getSpecialSeo, getSpecialProductList, getSpecialCase, getSpecialContent} from '../../js/apiService'

import Loading from '@/ui-lib/src/loading/index'

export default {
  // 新专题模板v1
  name: 'special_v1',
  mixins: [specialBuy],
  components: {
    specialHeader, 
    specialFooter, 
    dialogWrapper, 
    productListView,
    productListSelect,
    skuList,
    dialogFooter,
    icon,
    swiper,
    swiperSlide,
    payFooter,
    orderForm
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical', 
        slidesPerView: 4,
        loop: true,
        noSwiping: true,
        autoplay: {
          delay: 1000
        },
      },
      loading: null,
      
      // 显示的模块标记
      // 1.顶部导航 2.在线下单 3.产品列表 4.订购记录 5.真实案例 6.网页底部信息 7.更多推荐
      // 【2和3好像差不多。。只用2就好了
      modalData: [],
      caseList: [],
      contentdata: '',
    }
  },
  computed: {
    // 是否显示顶部导航
    showHeaderNav() {
      return this.modalData.indexOf('1') >= 0;
    },
    // 是否显示商品列表+下单
    showProductList() {
      return this.modalData.indexOf('2') >= 0;
    },
    // 是否显示购买记录
    showBuyRecord() {
      return this.modalData.indexOf('4') >= 0;
    },
    // 是否显示真实案例
    showcases() {
      return this.modalData.indexOf('5') >= 0;
    },
    // 是否显示底部信息
    showBottomInfo() {
      return this.modalData.indexOf('6') >= 0;
    },
  },
  methods: {
    // 输出随机数（年龄
    randomAge() {
      return Math.round(28 + Math.random() * 17);
    },

  },
  mounted() {

    require('../../js/commonFontsizeMatchDeviceWidthAdaptatePC')

    // 关于SEO，先用着渲染方式。。
    const id = getSpecialId() || 1366;

    // 发请求
    // SEO
    getSpecialSeo({id: id}).then((rsp) => {
      if (rsp.data) {
        let data = rsp.data;
        // console.log(data)
        this.setChannelMark(data.channelmark || '');
        document.querySelector('title').innerHTML = data.title;
      }
    })
    .catch((err) => {
      console.log(err);
    })

    // 获取商品列表
    new Promise((resolve, reject) => {
      this.loading = Loading();
      resolve(getSpecialProductList({id: id}));
    })
    .then((rsp) => {
      if (rsp && rsp.productList) {
        let list = rsp.productList;
        for (let i = 0; i < list.length; i++) {
          list[i].selected = false;
          this.productList.splice(i, 0, list[i]);
        }
      }
      this.cartCount = rsp.cartCount || 0;
      this.loading.close();
    })
    
    // 案例 + 模块
    getSpecialCase({id: id}).then((rsp) => {
      // console.log(rsp)
      rsp && rsp.anlidata && (this.caseList = rsp.anlidata);
      rsp.modata && (this.modalData = rsp.modata);
    })

    // 获取专题内容
    getSpecialContent({id: id}).then((rsp) => {
      // console.log(rsp)
      rsp.contentdata && (this.contentdata = entityToString(rsp.contentdata));
    })

  }
}
</script>

<style lang="scss">
// @import '../../../assets/css/variable.scss';
// @import '../../../assets/css/mixin.scss';
@import '../../css/middleware.scss';

.swiper-container {
  height: 520px;
}

.container {
  background: #f4efea;
}

// 对product-wrapper 独立定制一部分
.product-wrapper {
  margin: 16px 0;
}


.note-wrapper {
  margin: 16px auto 0;
  max-width: 700px;
  background: $white;
  border-radius: 10px;
  border: 2px solid $black-eee;
}
.special-img-list {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
