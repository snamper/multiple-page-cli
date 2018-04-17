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
      <!-- <product-list-view :product-list="productList" :openSkuList="openSkuListDialog"/> -->
      <product-list-view/>      

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

    <section class="section-layout note-wrapper" v-if="showSpecialCase">
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
            {{row.alt}}
            <span>
              {{row.sex}}
              {{row.age}}岁
            </span>
            <span class="right">
              {{row.address}}
            </span>
            <p class="note-list__item__content black-999">
              {{row.skuname}}
            </p>
          </h3>
        </li>
      </ul>
    </section>
  </div>
  <!-- wrapper end -->

  <special-footer :toBuy="toggleProList" v-if="showProductList"/>

  <transition name="dialogUp">
    <dialog-wrapper 
        opacity="visible" 
        v-if="showProList" >
      <product-list-select/>
      <dialog-footer>
          <pay-footer 
            :totalPrice="totalPrice" 
            :payFn="postOrder"
            />
      </dialog-footer>
    </dialog-wrapper>
  </transition>

  <transition name="dialogUp">
    <dialog-wrapper v-if="showSkuList" 
        v-on:click.native.prevent.self="closeskuList">
      <sku-list :item="openItem" v-on:skuChange="skuChange"/>
      <dialog-footer>
        <a class="dialog__footer__btn--large btn_primary vhc" 
            v-on:click.prevent="setItemSku">确认</a>
      </dialog-footer>
    </dialog-wrapper>
  </transition>
</div>
</template>

<script>
import {getSpecialId} from '@/assets/js/common'
import {entityToString} from '@/assets/js/base'

import specialHeader from '@/components/special__header'
import specialFooter from '@/components/special__footer'
import productListView from '@/pages/pcmall/special_v1/components/special__product-list--view'
import productListSelect from '@/pages/pcmall/special_v1/components/special__product-list--select'
import dialogWrapper from '@/components/dialog__wrapper'
import skuList from '@/components/sku-list'
import dialogFooter from '@/components/dialog__footer'
import icon from '@/components/icon'
import payFooter from '@/components/pay__footer'

// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import {mapState, mapMutations, mapActions} from 'vuex'
import {getSpecialSeo, getSpecialProductList, getSpecialCase, getSpecialContent} from '@/assets/js/xhr/service'

import Loading from '@/ui-lib/src/loading/index'

export default {
  // 新专题模板v1
  name: 'special_v1',
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
    payFooter
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
      contentdata: '',
    }
  },
  computed: {
    ...mapState([
      'showProList',
      'productList',
      'noteList',
      'caseList',
      'showSkuList',
      'skuList',
      'openItem',
      'origin',
      'totalPrice',
    ]),
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
    showSpecialCase() {
      return this.modalData.indexOf('5') >= 0;
    },
    // 是否显示底部信息
    showBottomInfo() {
      return this.modalData.indexOf('6') >= 0;
    },
  },
  methods: {
    ...mapMutations([
      'setSpecialSeo',
      'setSpecialProductList',
      'setSpecialCase',
      'toggleProList',
      'setOpenItem',
    ]),
    ...mapActions([
      // 'openSkuList',
      'closeskuList',
      'confirmSku',
      'postSpeicalOrder',
    ]),
    setItemSku() {
      new Promise((resolve, reject) => {
        this.loading = Loading();
        resolve(this.confirmSku({origin: this.origin}));
      })
      .then((rsp) => {
        // console.log(rsp);
        this.loading.close();
        this.$message(rsp.tip || rsp);
      })
      .catch((err) => {
        this.$message(err);
        this.loading.close();        
      })
    },

    // 接收skuList组件回传的item数据
    skuChange(val) {
      this.setOpenItem(val);
    },

    postOrder() {
      return new Promise((resolve, reject) => {
        resolve(this.postSpeicalOrder());
      })
    }
  },
  mounted() {
    // 关于SEO，想使用nuxt的，暂时搭不出来。用渲染方式顶着。。
    const id = getSpecialId() || 1366;

    // 发请求
    // SEO
    getSpecialSeo({id: id}).then((rsp) => {
      console.log(rsp);
      if (rsp.data) {
        let data = rsp.data;
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
      // console.log(rsp)
      if (rsp && rsp.productList) {
        this.setSpecialProductList(rsp.productList);
      }
      this.loading.close();
    })
    
    // 案例 + 模块
    getSpecialCase({id: id}).then((rsp) => {
      // console.log(rsp)
      rsp && rsp.anlidata && this.setSpecialCase(rsp.anlidata);
      rsp.modata && (this.modalData = rsp.modata);
    })

    // 获取专题内容
    getSpecialContent({id: id}).then((rsp) => {
      console.log(rsp)
      rsp.contentdata && (this.contentdata = entityToString(rsp.contentdata));
    })

  }
}
</script>

<style lang="scss">
.special-img-list {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
@import '../../../assets/css/variable.scss';
@import '../../../assets/css/mixin.scss';
@import '../../../assets/css/common.scss';

.swiper-container {
  height: 520px;
}

.container {
  background: #f4efea;
  position: relative;
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
