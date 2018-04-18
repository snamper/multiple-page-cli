<template>
<div 
    class="dialog__layout" 
    :class="[
        {'dialog__layout--padding': this.padding},
    ]"
>
    <slot>这是弹窗中的布局块</slot>
</div>
</template>

<script>
export default {
    props: {
        padding: [Boolean]
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable';
@import '../assets/css/mixin';

.dialog__layout {
    @include flex-box(column, flex-start);
    @include fixedPC();
    position: fixed;
    width: 100%;
    bottom: 0;
    background: $white;
    min-height: 20%;
    box-sizing: border-box;
}
.dialog__layout--padding {
    padding: 0 suit-size();
}
</style>
