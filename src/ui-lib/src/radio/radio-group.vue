<template>
<div class="ui-radio-group">
    <slot></slot>
</div>
</template>

<script>
// import emitter from '../../mixin/emitter'

export default {
    name: 'UiRadioGroup',
    componentName: 'UiRadioGroup',

    props: {
        value: {},
        type: String,
    },
    
    // mixins: [emitter],

    created() {
    
    }, 
    mounted() {
        this.$on('handleChange', value => {
            this.$emit('input', value);
        })
    }
}
</script>

<style scoped>
.ui-radio-group {
    /* border: 1px solid #eee; */
    width: 100%;
    /* display: inline-block; */
    font-size: 0;
    line-height: 1;
    vertical-align: middle;
}
</style>
