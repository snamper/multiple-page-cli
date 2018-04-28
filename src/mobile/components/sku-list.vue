<template>
<dialog-wrapper @close="close" :remove-height="removeHeight">
    <div class="wrapper style-list__layout">

        <section class="section-layout style-list__wrapper" 
            v-if="openItem.skuCount > 0"
            >
            <div class="section-header">
                <h1 class="style-list__wrapper__title section-header__title bold">规格</h1>
            </div>

            <ui-radio-group 
                class="style-list__radio-group"
                v-model="openItem.selectedSku"
            >
                <ui-radio-button 
                    class="style-list__radio"
                    v-for="(row, index) in openItem.skuList.data" 
                    :key="index"
                    :label="row[0]"
                >
                    {{row[1]}}
                </ui-radio-button>
            </ui-radio-group>
        </section>

        <section class="section-layout style-list__wrapper">
            <div class="section-header">
                <h1 class="style-list__wrapper__title section-header__title bold">数量</h1>
                <div class="right vc">
                    <ui-input-number 
                        class="style-list__wrapper__input-number"
                        type="text"
                        :min="1"
                        placeholder="默认"
                        v-model="openItem.count"
                    />
                </div>
            </div>
        </section>

    </div>

    <dialog-footer height="high">
        <a class="footer__btn--large btn_primary vhc" 
            @click="confirm"
        >
            确认
        </a>
    </dialog-footer>
</dialog-wrapper>
</template>

<script>
// import {mapState, mapMutations} from 'vuex'
import _ from 'lodash'
import {UiRadioGroup, UiRadioButton, UiInputNumber} from '@/ui-lib/output'
import dialogWrapper from './dialog__wrapper'
import dialogFooter from './dialog__footer'

import {specialAddCart} from '../js/apiService'

export default {
    props: {
        value: [Object],
        removeHeight: {},
    },
    components: {
        UiRadioGroup,
        UiRadioButton,
        UiInputNumber,
        dialogWrapper,
        dialogFooter,
    },
    data() {
        return {
            openItem: _.cloneDeep(this.value) || {},
            // openItem: this.value || {}
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        confirm() {
            if (this.openItem.skuCount && !this.openItem.selectedSku) return this.$message('请选择规格');
            this.close();
            this.$emit('confirm', this.openItem);
        }
    },
    watch: {
        'openItem': {
            handler: function (val) {
                        let text = '';
                        let list = this.openItem.skuList.data;
                        if (list) {
                            for (let i = 0; i < list.length; i++) {
                                let sku = list[i];
                                if (sku[0] === val.selectedSku) {
                                    text = sku[1];
                                    break;
                                }
                            }
                            this.openItem.selectedSkuText = text;
                            // this.$emit('input', this.openItem);
                        }
                    },
            deep: true,
        },
    },
    mounted: function () {

    },
}
</script>

<style lang="scss" scoped>
// @import '../css/variable';
// @import '../css/mixin';
@import '~@/mobile/css/mobile-component-output';


.style-list__layout {
    // @include flex-box(column, flex-start);
    margin-top: 0;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    height: auto;
    min-height: auto;
    background: $white;
    max-height: 60%;
    overflow: scroll;
    margin: 0 auto 140px;
}

.style-list__wrapper {
    background: $white;
    padding: 0 suit-size(2);
    border: 0;
    border-top: 1px solid #cccccc;
    // flex: 0 1 auto;
}
.style-list__wrapper__title {
    text-align: left;
}
.style-list__radio-group {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-right: -(suit-size(2));
    .style-list__radio {
        margin-right: suit-size(2);
        margin-bottom: suit-size(2);
    }
}
// .style-list__wrapper__input-number {
    
// }
</style>
