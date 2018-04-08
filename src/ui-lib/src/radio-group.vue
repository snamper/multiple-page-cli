<template>
<div class="ui-radio-group">
    <slot></slot>
</div>
</template>

<script>
import emitter from '../mixin/emitter'

export default {
    props: {
        value: {}
    },
    
    mixins: [emitter],

    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    },
    mounted: {

    }
}
</script>

<style scoped>
.ui-radio-group {
    border: 1px solid #eee;
    width: 100%;
    display: inline-block;
    font-size: 0;
    line-height: 1;
    vertical-align: middle;
}
</style>
