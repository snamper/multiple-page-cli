<template>
<div class="pcmall-index">
  <header class="page-header">
    <div class="full-h">
      <a class="left full-h"><img class="logo vc full-w" src="../../image/logo.png"/></a>
      <div class="page-header__tabs right full-h">
        <a class="full-h"><img class="vhc" src="../../image/tab1.png"/></a>
        <a class="full-h"><img class="vhc" src="../../image/tab2.png"/></a>
      </div>
    </div>
  </header>

  <section class="section-wrapper main-swiper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../../image/banner1.png"/>
      </swiper-slide>
      <swiper-slide>
        <img src="../../image/banner2.png"/>
      </swiper-slide>
      <div class="main-swiper__button-prev" slot="button-prev">
        <icon icon="swiper-button-prev"/>
      </div>
      <div class="main-swiper__button-next" slot="button-next">
        <icon icon="swiper-button-next"/>        
      </div>
    </swiper>
  </section>

  <div class="page-wrapper">
    <section class="section-wrapper summary-wrapper">
      <img src="../../image/summary.png"/>
    </section>
    <section class="section-wrapper vedio-wrapper">
      <img class="full-w" src="../../image/vedio.png"/>
    </section>
    <section class="section-wrapper seperate-wrapper full-w">
      <img class="vhc" src="../../image/seperate.png"/>
    </section>

    <section class="section-wrapper sub-swiper">    
      <swiper :options="subBannerSwiperOption">
        <swiper-slide>
          <img src="../../image/sub-banner.png"/>
        </swiper-slide>
        <swiper-slide>
          <img src="../../image/sub-banner.png"/>
        </swiper-slide>
        <div class="sub-swiper__pagination" slot="pagination"></div>
      </swiper>
    </section>

    <section class="section-wrapper product-swiper">
      <swiper :options="productSwiperOption">
        <swiper-slide>
          <div class="product-swiper-item">
            <img src="../../image/product.png"/>
            <h1>有钱花 摇钱树壁画<em class="right">¥468.00</em></h1>
            <p class="black-666">现代家庭装修讲究轻装修、重装饰，其中壁画也是我们装饰的重点。著名台湾风水胡大师结合玄学命理，推荐有钱花招财树壁画。</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-swiper-item">
            <img src="../../image/product.png"/>
            <h1>有钱花 摇钱树壁画<em class="right">¥468.00</em></h1>
            <p class="black-666">现代家庭装修讲究轻装修、重装饰，其中壁画也是我们装饰的重点。著名台湾风水胡大师结合玄学命理，推荐有钱花招财树壁画。</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-swiper-item">
            <img src="../../image/product.png"/>
            <h1>有钱花 摇钱树壁画<em class="right">¥468.00</em></h1>
            <p class="black-666">现代家庭装修讲究轻装修、重装饰，其中壁画也是我们装饰的重点。著名台湾风水胡大师结合玄学命理，推荐有钱花招财树壁画。</p>
          </div>
        </swiper-slide>
        <div class="product-swiper__button-prev" slot="button-prev">
          <icon icon="swiper-button-prev"/>
        </div>
        <div class="product-swiper__button-next" slot="button-next">
          <icon icon="swiper-button-next"/>
        </div>
      </swiper>
    </section>

    <section class="section-wrapper event-wrapper">
      <div class="event-wrapper-item">
        <img src="../../image/event1.png"/>
        <h1>生肖运程</h1>
        <p class="black-666">互联网+传统文化的推动者，运用自身在互联网技术上的创新力，将传统文化结合互联网，把一些晦涩难懂的国学知识，化繁为简，以简单易懂的互联 网语言表达出来。 </p>
        <a class="btn_default event-wrapper-item-more">查看详情</a>        
      </div>
      <div class="event-wrapper-item">
        <img src="../../image/event1.png"/>
        <h1>生肖运程</h1>
        <p class="black-666">互联网+传统文化的推动者，运用自身在互联网技术上的创新力，将传统文化结合互联网，把一些晦涩难懂的国学知识，化繁为简，以简单易懂的互联 网语言表达出来。 </p>
        <a class="btn_default event-wrapper-item-more">查看详情</a>
      </div>
      <div class="event-wrapper-item">
        <img src="../../image/event1.png"/>
        <h1>生肖运程</h1>
        <p class="black-666">互联网+传统文化的推动者，运用自身在互联网技术上的创新力，将传统文化结合互联网，把一些晦涩难懂的国学知识，化繁为简，以简单易懂的互联 网语言表达出来。 </p>
        <a class="btn_default event-wrapper-item-more">查看详情</a>
      </div>
    </section>
  </div>

  <page-footer/>

</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import icon from '../../components/icon'
import pageFooter from '../../components/page__footer'

export default {
  components: {
    swiper, swiperSlide, icon, pageFooter
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        // centeredSlides: true,   //slides grid 部分，active slide居中
        navigation: {
          nextEl: '.main-swiper-button-next',
          prevEl: '.main-swiper-button-prev',
        }
      },
      subBannerSwiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.sub-banner-swiper-pagination',
          clickable :true,
        }
      },
      productSwiperOption: {
        loop: true,
        autoplay: false,
        slidesPerView: 3,
        spaceBetween: 16,
        navigation: {
          nextEl: '.product-swiper-button-next',
          prevEl: '.product-swiper-button-prev'
        }
      }
    }
  },

  mounted() {

  }
}
</script>

<style lang="scss">
@import '../../css/output';

.pcmall-index {
  background: #f7f3ed;
  min-width: 1200PX;
  overflow: hidden;
}

.page-header {
  // position: relative;
  // height: 100PX;
  @include page-header();
  & > div {
    width: 1200PX;
    margin: 0 auto;
    position: relative;
    & > a {
      display: block;
      width: 300PX;
    }
  }
  .page-header__tabs {
    overflow: hidden;
    a{
      @include square(100PX);
      float: left;
      position: relative;
      box-sizing: border-box;
      border-bottom: 3PX solid transparent;
      &:first-child {
        border-color: $brown;
      }
    }
  }
}

.page-wrapper {
  width: 1200PX;
  margin: 0 auto;
}

.section-wrapper {
  width: 100%;
  position: relative;
  margin: 0 auto;
}

.main-swiper {
  height: 520PX;
  position: relative;
  .swiper-container {
    // width: 1200PX;
    height: 520PX;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .main-swiper__button-prev {
    position: absolute;
    top: 200PX;
    left: 360PX;
    z-index: 10;
  }
  .main-swiper__button-next {
    position: absolute;
    top: 200PX;
    right: 360PX;
    z-index: 10;
  }
}
.summary-wrapper{
  margin-top: 100PX;
}
.vedio-wrapper {
  margin-top: 100PX;
}
.seperate-wrapper {
  height: 130PX;
}

.sub-swiper__pagination {
  @include line-height-center(60PX, 60PX, right);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-right: 20PX;
  box-sizing: border-box;
  z-index: 10;
  &>.swiper-pagination-bullet {
    @include round(16PX);
    background: #fff;
    border: 3px solid transparent;
    opacity: 1;
    margin-left: 10PX;
  }
  &>.swiper-pagination-bullet-active {
    border-color: $brown;
  }
}
.product-swiper {
  margin-top: 87PX;
  .product-swiper-item {
    padding: 12PX 24PX;
    background: $white;
    box-sizing: border-box;
    img {
      width: 100%;
    }
    h1 {
      margin-top: 20PX;
      position: relative;
    }
    p {
      margin-top: 15PX;
      line-height: 30PX;
    }
  }
  .product-swiper__button-prev {
    position: absolute;
    top: 200PX;
    left: 5PX;
    z-index: 10;
  }
  .product-swiper__button-next {
    position: absolute;
    top: 200PX;
    right: 5PX;
    z-index: 10;
  }
}
.event-wrapper {
  // @include flex-box(row, space-around);
  overflow: hidden;
  margin-top: 70PX;
  background: $white;
  padding: 30PX 60PX;
  box-sizing: border-box;
  .event-wrapper-item {
    float: left;
    width: 320PX;
    margin-right: 60PX;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 320PX;
      height: 300PX;
    }
    h1 {
      margin-top: 30PX;
    }
    p {
      @include ellipsis(4);
      line-height: 30PX;
      margin-top: 10PX;
      margin-bottom: 30PX;
    }
  }
  .event-wrapper-item-more {
    display: block;
    width: 156PX;
    margin: 0 auto;
    border-radius: 25PX;
  }
}
</style>
