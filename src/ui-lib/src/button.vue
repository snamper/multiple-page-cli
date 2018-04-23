<template>
<button class="ui-button" 
        @click="handleClick"
        :class="[
            btnSize, 
            btnType,
            btnFontSize,
            {'disabled' : isDisabled},
        ]" 
        :style="{
            borderRadius: radius + 'px',
        }"
        >
    <slot>默认按钮</slot>
</button>
</template>

<script>
export default {
    props: {
        size: [String],
        type: [String],
        radius: [String, Number],
        fontSize: [String, Number],
        disabled: Boolean,
    },
    computed: {
        btnSize() {
            return `ui-button--${this.size || 'default'}`;
        },
        btnType() {
            return this.type ? `ui-button--${this.type}` : '';
        },
        btnFontSize() {
            return `ui-button--font_${this.fontSize || 'medium'}`;
        },
        isDisabled() {
            return this.disabled;
        }
    },
    methods: {
        handleClick() {
            this.$emit('click', this);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base';

.disabled {
    pointer-events: none;
    cursor: not-allowed;
    background: #eee;
}

.ui-button {
    height: 46px;
    line-height: 46px;
    padding: 0 16px;
    display: inline-block;
    border-radius: 3px;
    color: #666;  
    box-sizing: border-box;
    min-width: 96px;
    font-size: 24px;  
    background: #fff;
    vertical-align: middle;
    position: relative;
    align-content: center;
}
.ui-button--small {
  font-size: 20px;
}
.ui-button--full {
    border-radius: 0;
    width: 100%;
    height: 100%;
    font-size: 32px;
}
.ui-button--default {
  border: 1px solid #666;
  color: #666;
}

.ui-button--confirm {
  border: 1px solid #bc2228;
  color: #bc2228;
}
.ui-button--primary {
  color: #fff;
  background: #ff0000;
  border: 1px solid #ff0000;  
}
.ui-button--success {
    color: #6cb333;
    border: 1px solid #6cb333;
}

.ui-button--font_small {
    font-size: 12px;
}
.ui-button--font_medium {
    font-size: 24px;
}
.ui-button--font_large {
    font-size: 32px;
}
</style>
