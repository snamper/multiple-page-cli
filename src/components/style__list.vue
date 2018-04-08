<template>
<div class="wrapper style-list__layout">
    <section class="section-layout style-list__wrapper">
        <div class="section-header">
            <h1 class="style-list__wrapper__title section-header__title bold">规格</h1>
        </div>

        <div class="style-list__radio-group">
            <ui-radio-button 
                class="style-list__radio"
                v-for="(row, index) in openItem.skuList" 
                :key="index"
                v-model="openItem.selectedSku"
                :label="row[0]">
                {{row[1]}}
            </ui-radio-button>
            {{openItem.selectedSku}}
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
                    v-model="openItem.count"
                    />
            </div>
        </div>
    </section>

</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {UiRadioButton, UiInputNumber} from '@/ui-lib/output'

export default {
    components: {
        UiRadioButton,
        UiInputNumber
    },
    computed: {
        ...mapState([
            'openItem',

        ]),
    },
    watch: {
        'openItem.selectedSku': (val) => {
            
        }
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
    margin-bottom: 0;
    padding-bottom: 140px;
    position: absolute;
    bottom: 0;
    height: auto;
    min-height: auto;
    background: $white;
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
