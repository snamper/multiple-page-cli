<template>
<div class="wrapper style-list__layout">
    <section class="section-layout style-list__wrapper">
        <div class="section-header">
            <h1 class="style-list__wrapper__title section-header__title bold">规格</h1>
        </div>

        <div class="style-list__radio-group">
            <ui-radio-button 
                class="style-list__radio"
                v-for="(row, index) in styleList" 
                :key="index"
                v-model="selectedValue"
                :label="row.t">
                {{row.t}}
            </ui-radio-button>
        </div>
    </section>

    <section class="section-layout style-list__wrapper">
        <div class="section-header">
            <h1 class="style-list__wrapper__title section-header__title bold">数量</h1>
            <div class="right vc">
                <ui-input-number 
                    class="style-list__wrapper__input-number"
                    type="text"
                    placeholder="默认"
                    v-model="num"
                    />
            </div>
        </div>
    </section>

</div>
</template>

<script>
import {UiRadioButton, UiInputNumber} from '@/ui-lib/output'

export default {
    props: {
        styleList: {
            type: Array,
            default: []
        },
        count: {
            type: [String, Number],
            default: 1
        }
    },
    data() {
        return {
            selectedValue: this.styleList[0].t || '',
            num: this.count
        }
    },
    components: {
        UiRadioButton,
        UiInputNumber
    },
    mounted: function () {
        // console.log(this);
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.style-list__layout {
    @include flex-box(column, flex-start);
    margin-top: 0;
    position: absolute;
    bottom: 0;
    // margin-bottom: 0;
    // top: 50%;
    // min-height: 50%;
    // height: calc(50% - 100px);
    height: auto;
    min-height: auto;
    background: $white;
}

.style-list__wrapper {
    background: $white;
    padding: 0 suit-size(2);
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
.style-list__wrapper__input-number {
    
}
</style>
