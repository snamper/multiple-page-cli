<template>
<label class="ui-radio-button" 
    :class="[
        model === labelValue ? 'ui-radio-button--selected' : ''
    ]"
    @click.stop.prevent="select">
    <input type="radio">
    <slot></slot>
</label>
</template>

<script>
import emitter from '../mixin/emitter'

export default {
    props: {
        value: {},
        label: {}
    },
    mixins: [emitter],
    data() {
        return {
            // modelValue: this.model,
            labelValue: this.label,
        }
    },
    computed: {
        model: {

            // https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E7%9A%84%E8%A1%A8%E5%8D%95%E8%BE%93%E5%85%A5%E7%BB%84%E4%BB%B6
            get() {
                // 设置值
                return this.value
            },
            set(val) {
                // 敲黑板！！数值带出组件的关键
                // 通过 input 事件带出数值
                this.$emit('input', val)
            }
        }
    },
    methods: {
        select() {
            this.model = this.labelValue;
            this.dispatch('radioChange', this.modelValue);
        }
    },
    created() {
        // this.$on('input', () => console.log('listen input'))
    }
}
</script>

<style lang="scss" scoped>
input {
    display: none;
}

.ui-radio-button {
    display: block;
    position: relative;
    height: 56px;
    line-height: 56px;
    font-size: 26px;
    padding: 0 20px;
    color: #666;
    border: 1px solid #666;
    border-radius: 4px;
}
.ui-radio-button--selected::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 20px;
    width: 20px;
    background-image: url('../image/logo.png');
    background-size: contain;
}
</style>
