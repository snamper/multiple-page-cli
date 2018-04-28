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

  <section class="section-wrapper swiper-wrapper">
    <img class="full-h hc" src="../../image/banner1.png"/>
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
    <section class="section-wrapper swiper-wrapper">
      <img src="../../image/sub-banner.png"/>
    </section>
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../css/output';

.pcmall-index {
  background: #f7f3ed;
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
  // overflow: hidden;
}

.section-wrapper {
  width: 100%;
  position: relative;
}

.swiper-wrapper {
  height: 520PX;
  position: relative;
}
.summary-wrapper img{
  // width: 100%;
}
.seperate-wrapper {
  height: 80PX;
}
</style>
