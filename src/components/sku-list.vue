<template>
<div class="wrapper style-list__layout">

    <section class="section-layout style-list__wrapper" 
        v-if="openItem.skuCount > 0"
        >
        <div class="section-header">
            <h1 class="style-list__wrapper__title section-header__title bold">规格</h1>
        </div>

        <!-- <div class="style-list__radio-group"> -->
        <ui-radio-group 
            class="style-list__radio-group"
            v-model="openItem.selectedSku"
        >
            <ui-radio-button 
                class="style-list__radio"
                v-for="(row, index) in openItem.skuList" 
                :key="index"
                :label="row[0]">
                {{row[1]}}
            </ui-radio-button>
        </ui-radio-group>
        <!-- </div> -->
    </section>

    <section class="section-layout style-list__wrapper">
        <div class="section-header">
            <h1 class="style-list__wrapper__title section-header__title bold">数量</h1>
            <div class="right vc">
                <ui-input-number 
                    class="style-list__wrapper__input-number"
                    type="text"
                    placeholder="默认"
                    v-model="openItem.count"
                    />
            </div>
        </div>
    </section>

</div>
</template>

<script>
// import {mapState, mapMutations} from 'vuex'
import _ from 'lodash'
import {UiRadioGroup, UiRadioButton, UiInputNumber} from '@/ui-lib/output'
import {specialAddCart} from '@/assets/js/xhr/service'

export default {
    props: {
        item: [Object],
    },
    components: {
        UiRadioGroup,
        UiRadioButton,
        UiInputNumber
    },
    data() {
        return {
            openItem: _.cloneDeep(this.item) || {},
        }
    },
    methods: {

    },
    watch: {
        'openItem': {
            handler: function (val) {
                        let text = '';
                        let list = this.openItem.skuList;
                        if (list) {
                            for (let i = 0; i < list.length; i++) {
                                let sku = list[i];
                                if (sku[0] === val.selectedSku) {
                                    text = sku[1];
                                    break;
                                }
                            }
                            this.openItem.selectedSkuText = text;
                        }
                        this.$emit('skuChange', this.openItem)
                        console.log(this.openItem)
                    },
            deep: true,
        },
    },
    mounted: function () {

    },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
@import '../assets/css/common.scss';

.style-list__layout {
    @include flex-box(column, flex-start);
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
