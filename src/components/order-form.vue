<template>
<section class="order-form">
    <dialog-wrapper opacity="visible">
        <page-header :backFn="backFn">确认订单</page-header>
        <div class="wrapper">
            <div class="order-form__content">
                <ul class="order-form__list">
                    <li class="order-form__list__item">
                        <span>您的姓名</span>
                        <input type="text" v-model="name" placeholder="请填写"/>
                    </li>
                    <li class="order-form__list__item">
                        <span>联系电话</span>
                        <input type="text" v-model="mobile" placeholder="非中国大陆电话请添加国际区号" />
                    </li>
                    <li class="order-form__list__item">
                        <span>所在地区</span>
                        <p>北京市</p>
                        <icon icon="more" class="right vc"/>
                    </li>
                    <li class="order-form__list__item">
                        <span>详细地址</span>
                        <input type="text" v-model="address" placeholder="请填写"/>
                    </li>
                    <li class="order-form__list__item">
                        <span>备注</span>
                        <input type="text" v-model="comment" placeholder="可不填"/>
                    </li>
                </ul>
                <h2 class="order-form__text">一对一电话人工服务</h2>
                <section class="order-form__help">
                    <ui-button 
                        class="order-form__help__button" 
                        size="full" 
                        type="success" 
                        radius="4"
                        font-size="medium"
                    >
                        <a class="position" href="tel:0000"></a>
                        <icon icon="phone"/>中国大陆用户
                    </ui-button>
                    <ui-button 
                        class="order-form__help__button" 
                        size="full" 
                        type="success" 
                        radius="4"
                        font-size="medium"
                    >
                        <icon icon="phone"/>非中国大陆用户
                    </ui-button>
                </section>
                <h3 class="order-form__text">如果您在请购途中遇到困难，请联系我们的客服人员。</h3>
            </div>
        </div>
        <dialog-footer>
            <ui-button 
                size="full"
                type="primary"
            >
                确认
            </ui-button>
        </dialog-footer>
    </dialog-wrapper>

    <transition name="dialogUp">
        <dialog-wrapper class="address-select">
            <dialog-layout>
                <section class="section-layout pdh-2">
                    <div class="section-header address-select__header">
                        <!-- <h2 class="section-header__plain-title address-select__plain-title">请选择</h2> -->
                        <!-- navMenus -->
                        <a class="operate_large right vc">确定</a>
                    </div>
                    <div>
                        <!-- 滚动列表 -->
                        <!-- 滚动列表 -->
                        <!-- 滚动列表 -->
                        <!-- 滚动列表 -->                        
                    </div>
                </section>
            </dialog-layout>
        </dialog-wrapper>
    </transition>
</section>
</template>

<script>
import pageHeader from '@/components/page__header'
import specialFooter from '@/components/special__footer'
import productListView from '@/components/product-list--view'
import productListSelect from '@/components/product-list--select'
import dialogWrapper from '@/components/dialog__wrapper'
import dialogLayout from '@/components/dialog__layout'
import dialogFooter from '@/components/dialog__footer'
import icon from '@/components/icon'
import UiButton from '@/ui-lib/src/button'

export default {
    components: {
        pageHeader,
        specialFooter,
        productListView,
        productListSelect,
        dialogWrapper,
        dialogLayout,
        dialogFooter,
        icon,
        UiButton
    },
    props: {
        backFn: Function,
    },
    data() {
        return {
            name: '',
            mobile: '',
            address: '',
            comment: '',
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common';

.page-header {

}
.order-form__content {
    background: $white;
    padding: 0 suit-size();
    overflow: hidden;
}
.order-form__list {
    @include flex-box(column);
}
.order-form__list__item {
    @include line-height-center(92px, 92px, left);
    @include flex-box(row, flex-start);
    position: relative;
    font-size: 32px;
    margin: 0 12px;
    padding: 0 12px;
    border-bottom: 1px solid $black-eee;
    span {
        font-weight: 600;
        flex: 0 1 112px;
        margin-right: 15px;
    }
    input {
        flex: 1 0;
    }
}
.order-form__text {
    margin: suit-size() suit-size(3);
    overflow: hidden;
}
.order-form__help {
    @include flex-box(row, space-between);
    margin: 0 suit-size();
    height: 86px;
    .order-form__help__button+.order-form__help__button {
        margin-left: suit-size();
    }
}

.address-select {

}
.address-select__header {
    @include line-height-center(90px);
}
.address-select__plain-title {
    max-width: 80%;
}
</style>
