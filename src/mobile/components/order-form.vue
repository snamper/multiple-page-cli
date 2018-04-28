<template>
<section class="order-form">
    <dialog-wrapper 
        opacity="visible" 
        :remove-height="openOrigin !== 'selectList'"
        class="order-form__form-wrapper"
    >
        <page-header @backFn="closeForm">确认订单</page-header>
        <div class="wrapper order-form__form-layout">
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
                    <li class="order-form__list__item" @click="openAddressSelect">
                        <span>所在地区</span>
                        <p>{{formAddress}}</p>
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
                @click="confirmForm"
            >
                确认
            </ui-button>
        </dialog-footer>
    </dialog-wrapper>

    <dialog-wrapper 
        class="address-select" 
        v-if="showAddressSelect"
        :remove-height="false"
        @close="closeAddressSelect"
    >
        <dialog-layout class="address-select__layout">
            <section class="section-layout pdh-2">
                <!-- <h2 class="section-header__plain-title address-select__plain-title">请选择</h2> -->
                <!-- <ui-menu class="section-header__plain-title address-select__plain-title">
                    <ui-menu-item index="0">请选择</ui-menu-item>
                    <ui-menu-item index="1">省</ui-menu-item>
                    <ui-menu-item index="2">市</ui-menu-item>
                </ui-menu> -->
                <ui-tabs v-model="activeName" ref="tabs">
                    <ui-tab-pane :label="countryText() || '国家'" name="country">
                        <ui-radio-group 
                            v-model="country" 
                            class="address-select__scroll-group"
                            type="scrollGroup"                            
                        >
                            <ui-radio
                                v-for="row in countries"
                                :key="row.v"
                                :label.once="row.v"
                                text-align="left"
                            >
                                {{row.t}}
                            </ui-radio>
                        </ui-radio-group>
                    </ui-tab-pane>
                    <ui-tab-pane :label="provinceText() || '省份'" name="province">
                        <ui-radio-group 
                            v-model="province" 
                            class="address-select__scroll-group"
                            type="scrollGroup"
                        >
                            <ui-radio
                                v-for="row in provinces"
                                :key="row.v"
                                :label="row.v"
                                text-align="left"
                            >
                                {{row.t}}
                            </ui-radio>
                        </ui-radio-group>
                    </ui-tab-pane>
                    <ui-tab-pane :label="cityText() || '城市'" name="city">
                        <ui-radio-group 
                            v-model="city" 
                            class="address-select__scroll-group"
                            type="scrollGroup"
                        >
                            <ui-radio
                                v-for="row in cities"
                                :key="row.v"
                                :label="row.v"
                                text-align="left"
                            >
                                {{row.t}}
                            </ui-radio>
                        </ui-radio-group>
                    </ui-tab-pane>                            
                    <ui-tab-pane :label="districtText() || '区域'" name="district">
                        <ui-radio-group 
                            v-model="district" 
                            class="address-select__scroll-group"
                            type="scrollGroup"                            
                        >
                            <ui-radio
                                v-for="row in districts"
                                :key="row.v"
                                :label="row.v"
                                text-align="left"
                            >
                                {{row.t}}
                            </ui-radio>
                        </ui-radio-group>    
                    </ui-tab-pane>                            
                </ui-tabs>
                <div class="address-select__operate-container top right">
                    <a class="operate_large" @click="confirmFormAddress">确定</a>
                </div>
            </section>
        </dialog-layout>
    </dialog-wrapper>
</section>
</template>

<script>
import pageHeader from './page__header'
import specialFooter from './special__footer'
import productListView from './product-list--view'
import productListSelect from './product-list--select'
import dialogWrapper from './dialog__wrapper'
import dialogLayout from './dialog__layout'
import dialogFooter from './dialog__footer'
import icon from './icon'

import {UiTabs, UiTabPane, UiButton, UiRadioGroup, UiRadio} from '@/ui-lib/output'

import {decode, getCountries, getProvinces, getCities, getDistrict, testMobile} from '@/assets/js/common'

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
        UiButton,
        UiTabs,
        UiTabPane,
        UiRadioGroup,
        UiRadio,
    },
    props: {
        // backFn: Function,
        openOrigin: String,
        removeHeight: Boolean
    },
    data() {
        return {
            showAddressSelect: false,

            // 这些是表单中的字段
            name: '',
            mobile: '',
            address: '',
            comment: '',
            formArea: '',
            formCountry: '',
            formPorvince: '',
            formCity: '',
            formDistrict: '',

            // 这些是地址选择器中的字段
            activeName: 'country',
            countries: getCountries(),
            country: '',
            province: '',
            city: '',
            district: '',
        }
    },
    computed: {
        provinces() {
            return getProvinces(this.country);
        },
        cities() {
            return getCities(this.province);
        },
        districts() {
            return getDistrict(this.city);
        },
        formAddress() {
            return this.formCountry + this.formPorvince + this.formCity + this.formDistrict
                    || "请选择";
        }
    },
    methods: {
        closeForm() {
            // this.backFn && this.backFn();
            console.log('closeForm')
            this.$emit('back');
        },
        openAddressSelect() {
            this.showAddressSelect = true;
        },
        closeAddressSelect() {
            this.showAddressSelect = false;
        },
        countryText() {
            return this.country ? decode('countries', this.country) : '';
        },
        provinceText() {
            return this.province ? decode('area', this.province) : '';
        },
        cityText() {
            return this.city ? decode('area', this.city) : '';
        },
        districtText() {
            return this.district ? decode('area', this.district) : '';
        },
        confirmFormAddress() {
            this.formArea = this.country;
            this.formCountry = this.countryText();
            this.formPorvince = this.provinceText();
            this.formCity = this.cityText();
            this.formDistrict = this.districtText();
            this.closeAddressSelect();
        },
        confirmForm() {
            if (!this.name) return this.$message('请填写姓名');
            if (!testMobile(this.mobile)) return this.$message('请填写正确的联系电话');
            if (!this.formAddress || this.formAddress === '请选择') return this.$message('请选择所在地区');
            if (!this.address) return this.$message('请填写详细地址');
            let data = {
                username: this.name,
                tel: this.mobile,
                area: this.formArea,
                country: this.countryText(),
                province: this.provinceText(),
                city: this.cityText(),
                district: this.districtText(),
                address: this.address,
                usecomment: this.comment
            }
            this.$emit('confirmForm', data);
        }
    },
    mounted() {

    },
    watch: {
        country(val) {
            let el1 = document.querySelector('.ui-tabs__item:nth-child(3)');
            let el2 = document.querySelector('.ui-tabs__item:nth-child(4)');
            let el3 = document.querySelector('.ui-tabs__item:nth-child(5)');
            if (val != 1) {
                // 非大陆
                this.province = '';
                this.city = '';
                this.district = '';

                el1 && (el1.style.display = 'none');
                el2 && (el2.style.display = 'none');
                el3 && (el3.style.display = 'none');
                this.$refs.tabs.$refs.nav.$refs.navBar.$forceUpdate();
                
            } else{
                // 大陆
                this.activeName = 'province';

                el1 && (el1.style.display = '');
                el2 && (el2.style.display = '');
                el3 && (el3.style.display = '');
            }
        },
        province(val, oldValue) {
            this.district = '';
            this.city = '';
            if (val) {
                this.activeName = 'city';
            }
        },
        city(val) {
            this.district = '';
            if (val) {
                this.activeName = 'district';
            }
        },
        district(val) {
            if (!val) return;
            this.$refs.tabs.$refs.nav.$refs.navBar.$forceUpdate();
        }
    }
}
</script>

<style lang="scss" scoped>
// @import '../css/variable';
// @import '../css/mixin';
@import '~@/mobile/css/mobile-component-output';

.page-header {

}
.order-form {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .order-form__form-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .order-form__form-layout {
        position: absolute;
    }
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
    .icon-phone {
        @include flex-small-device(display, none, true);
    }
}

.address-select__layout {
    height: 60%;
}
.address-select__header {
    @include line-height-center(90px);
}
.address-select__plain-title {
    max-width: 80%;
}
.address-select__scroll-group {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}
.address-select__operate-container{
    @include line-height-center(90px);
    min-width: 3rem;
}
</style>
