<template>
<button class="ui-button" 
        :class="[
            btnSize, 
            btnType,
            {'disabled' : isDisabled},
        ]">
    <slot>默认按钮</slot>
</button>
</template>

<script>
export default {
    props: {
        size: [String],
        type: [String],
        disabled: Boolean,
    },
    computed: {
        btnSize() {
            return `ui-button--${this.size || 'default'}`;
        },
        btnType() {
            return this.type ? `ui-button--${this.type}` : '';
        },
        isDisabled() {
            return this.disabled;
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
}
.ui-button--small {
  font-size: 20px;
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
</style>
