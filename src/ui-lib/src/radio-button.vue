<template>
<label class="ui-radio-button" 
    :class="[
        {'ui-radio-button--selected' : model === label},
        {'disabled' : isDisabled},
    ]"
    @click.stop.prevent="select">
    <input type="radio">
    <slot></slot>
</label>
</template>

<script>
import emitter from '../mixin/emitter'

export default {
    name: 'UiRadioButton',
    props: {
        value: {},
        label: {},
        disabled: Boolean,
    },
    mixins: [emitter],
    data() {
        return {
            // labelValue: this.label,
        }
    },
    computed: {
        _radioGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'UiRadioGroup') {
                    parent = parent.$parent;
                } else {
                    return parent;
                }
            }
            return false;
        },
        model: {
            // https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E7%9A%84%E8%A1%A8%E5%8D%95%E8%BE%93%E5%85%A5%E7%BB%84%E4%BB%B6
            get() {
                // 设置值
                return this._radioGroup ? this._radioGroup.value : this.value;
            },
            set(val) {
                // 敲黑板！！数值带出组件的关键
                // 通过 input 事件带出数值
                // this.$emit('input', val)
                
                if (this._radioGroup) {
                    this.dispatch('UiRadioButton', 'input', [val]);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        isDisabled() {
            return this.disabled;
        }
    },
    methods: {
        select() {
            if (this._radioGroup) {
                this.dispatch('UiRadioGroup', 'handleChange', [this.label]);
            } else {
                this.$emit('input', this.label);
            }
        }
    },
    mounted() {
        // console.log(this.disabled)
    }
}
</script>

<style lang="scss" scoped>
input {
    display: none;
}

.disabled {
    pointer-events: none;
    cursor: not-allowed;
    background: #eee;

}

.ui-radio-button {
    display: block;
    position: relative;
    height: 56px;
    line-height: 56px;
    font-size: 26px;
    padding: 0 30px;
    color: #666;
    border: 1px solid #666;
    border-radius: 4px;
}
.ui-radio-button--selected {
    border-color: #bc2228;
    color: #bc2228;
}
.ui-radio-button--selected::after {
    content: '';
    position: absolute;
    right: -1px;
    bottom: 0;
    height: 30px;
    width: 30px;
    background-image: url('../image/icon_tick3.png');
    background-size: contain;
}
</style>
