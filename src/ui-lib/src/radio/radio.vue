<template>
<label class="ui-radio-button" 
    :class="[
        {'ui-radio-button--selected' : model === label},
        {'disabled' : isDisabled},
        {'scroll-item' : type === 'scrollGroup'},
    ]"
    :style="radioStyle"
    @click.stop.prevent="select"
>
    <input type="radio">
    <slot></slot>
</label>
</template>

<script>
import emitter from '../../mixin/emitter'

export default {
    name: 'UiRadioButton',
    props: {
        value: {},
        label: {},
        textAlign: {
            type: String,
            default: 'center'
        },
        disabled: Boolean,
    },
    mixins: [emitter],
    data() {
        return {
            radioStyle: {
                textAlign: `${this.textAlign}`
            },
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
        type() {
            let type = '';
            if (this._radioGroup) {
                return this._radioGroup.type;
            }
            return type;
        },
        model() {
            return this._radioGroup ? this._radioGroup.value : this.value;
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

<style scoped>
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
    border-radius: 4px;
}
.ui-radio-button--selected {
    color: #bc2228;
}
.ui-radio-button--selected::after {
    content: '';
    position: absolute;
    right: -1px;
    bottom: 0;
    height: 30px;
    width: 30px;
    background-size: contain;
}
.scroll-item {
    padding: 4px 20px;
    border-bottom: 1px solid #eee;
}
</style>
