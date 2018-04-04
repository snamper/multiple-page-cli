<template>
<div class="ui-input-number">
    <span 
        class="ui-input-number__decrease"
        @click="decrease"
        >-</span>
    <span 
        class="ui-input-number__increase"
        @click="increase"
        >+</span>
    <input 
        class="ui-input-number__input"
        :type="type"
        :placeholder="placeholder"
        :value="currentValue"
        ref="input"
        @focus="focus" 
        @blur="blur" 
        @change="change" />
</div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: [String, Number],
        placeholder: String,
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    // watch: {
    //     'currentValue'(val, oldValue) {
    //         // console.log('watch' + val + ',' + oldValue)
    //         // this.$refs.input.setCurrentValue(val);
    //         this.setCurrentValue(val);
    //     }
    // },
    methods: {
        decrease() {
            if (this.currentValue > 1) {
                this.currentValue = this.currentValue - 1;                
                this.setCurrentValue(this.currentValue);                
            }
        },
        increase() {
            this.currentValue = this.currentValue + 1;
            this.setCurrentValue(this.currentValue);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
        change(event) {
            let newVal = event.target.value ? Number(event.target.value) : '';
            this.setCurrentValue(newVal);
        },
        setCurrentValue(value) {
            // if (value === this.currentValue) return;
            this.currentValue = value;
            console.log('setCurrentValue' + value)
            this.$emit('input', this.currentValue)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base';

.ui-input-number {
    position: relative;
    line-height: 48px;
    width: 160px;
    text-align: center;
}
.ui-input-number__decrease {
    position: absolute;
    z-index: 1;
    left: 0;
    height: auto;
    width: 40px;
    border-right: 1px solid #666666;
    border-radius: 4px 0 0 4px;
    font-weight: 600;
}
.ui-input-number__increase {
    position: absolute;
    z-index: 1;
    right: 0;
    height: auto;
    width: 40px;
    border-left: 1px solid #666666;
    border-radius: 0 4px 4px 0;
    font-weight: 600;
}
.ui-input-number__input {
    box-sizing: border-box;
    display: block;
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 48px;
    padding: 0 50px;
    border: 1px solid #666666;
    border-radius: 4px;
    text-align: center;
}
</style>
