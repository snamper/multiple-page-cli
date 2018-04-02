<template>
<footer class="footer dialog__footer">
    <slot></slot>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable';
@import '../assets/css/mixin';

.dialog__footer {
    @include line-height-center(140px);
}

</style>
