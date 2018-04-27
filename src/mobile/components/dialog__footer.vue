<template>
<footer class="dialog__footer" :class="[{'high': height === 'high'}]">
    <slot></slot>
</footer>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: ''
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../css/variable';
@import '../css/mixin';

.dialog__footer {
    @include line-height-center(90px);
    @include fixedPC();
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
}
.high {
    @include line-height-center(140px);
}

</style>
