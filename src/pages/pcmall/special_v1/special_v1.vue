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
      <product-list-view :product-list="productList"/>

    </section>

    <section class="section-layout note-wrapper">
      <div class="section-header bdbottom">
        <h1 class="section-header__title">
          <icon icon="square"/>
            大家都在买
          <icon icon="square"/>
        </h1>
      </div>

      <!-- <ul class="note-list">
        <li class="note-list__item"
            v-for="(row, index) in noteList" 
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
      </ul> -->

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

    <section class="section-layout note-wrapper">
      <div class="section-header bdbottom">
        <h1 class="section-header__title">
          <icon icon="square"/>          
            来看看别人怎么说
          <icon icon="square"/>          
        </h1>
      </div>

      <ul class="note-list">
        <li class="note-list__item" 
            v-for="(row,index) in noteList" 
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

  <special-footer :toBuy="toggleProList"/>

  <transition name="dialogUp">
    <dialog-wrapper 
        opacity="visible" 
        v-if="showProList" >
      <product-list-select/>
    </dialog-wrapper>
  </transition>

  <transition name="dialogUp">
    <dialog-wrapper v-if="showStyleList" 
        v-on:click.native.prevent.self="closeStyleList">
      <style-list/>
      <dialog-footer>
        <a class="dialog__footer__btn--large btn_primary vhc" 
            v-on:click.prevent="confirmStyle">确认</a>
      </dialog-footer>
    </dialog-wrapper>
  </transition>
</div>
</template>

<script>
import specialHeader from '@/components/special__header'
import specialFooter from '@/components/special__footer'
import productListView from '@/components/special__product-list--view'
import productListSelect from '@/components/special__product-list--select'
import dialogWrapper from '@/components/dialog__wrapper'
import styleList from '@/components/style__list'
import dialogFooter from '@/components/dialog__footer'
import icon from '@/components/icon'

// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import {mapState, mapMutations, mapActions} from 'vuex'
import {getSpecialSeo, getSpecialProductList, getSpecialCase} from '@/assets/js/xhr/service'

export default {
  // 新专题模板v1
  name: 'special_v1',
  components: {
    specialHeader, 
    specialFooter, 
    dialogWrapper, 
    productListView,
    productListSelect,
    styleList,
    dialogFooter,
    icon,
    swiper,
    swiperSlide,
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
      }
    }
  },
  computed: {
    ...mapState([
      'showProList',
      'productList',
      'noteList',
      'showStyleList',
      'styleList',
    ])
  },
  methods: {
    ...mapMutations([
      'setSpecialSeo',
      'setSpecialProduct',
      'setSpecialCase',
      'toggleProList',
    ]),
    ...mapActions([
      'openStyleList',
      'closeStyleList',
      'confirmStyle',
    ]),
  },
  mounted() {
    // 关于SEO，想使用nuxt的，暂时搭不出来。用渲染方式顶着。。

    // 发请求
    // SEO
    getSpecialSeo({id: '1358'}).then((rsp) => {
      console.log(rsp);

    })
    .catch((err) => {
      console.log(err);
    })

    //
    getSpecialProductList({id: '1358'}).then((rsp) => {
      console.log(rsp)
    })
    
    // //
    getSpecialCase({id: '1358'}).then((rsp) => {
      console.log(rsp)
      // rsp && rsp.anlidata && this.setSpecialCase(rsp.anlidata);
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/variable.scss';
@import '../../../assets/css/mixin.scss';
@import '../../../assets/css/common.scss';

.swiper-container {
  height: 520px;
}

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
