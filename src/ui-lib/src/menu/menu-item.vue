<template>
<li 
    class="ui-menu-item"
    :class="{
        'actived': actived,
    }"
    @click="handleClick"
>
    <slot></slot>
</li>
</template>

<script>
import Menu from './menu-mixin'
import Emitter from '../../mixin/emitter'

export default {
    name: 'UiMenuItem',
    componentName: 'UiMenuItem',
    props: {
        index: [String, Number],
    },
    mixins: [Menu, Emitter],
    data() {
        return {

        }
    },
    computed: {
        actived() {
            return this.index === this.rootMenu.activedIndex;
        }
    },
    methods: {
        handleClick() {
            if (!this.disabled) {
                this.dispatch('UiMenu', 'item-click', this);
                this.$emit('click', this);
            }
        }
    }
}
</script>

<style scoped>
.ui-menu-item {
    padding: 0 .4rem;
    transition: border-color .3s, 
                background-color .3s;
}
.ui-menu--horizon>.ui-menu-item {
    float: left;
}
.actived {
    border-bottom-color: red;
    color: red;
    background-color: #ccc;
}
</style>
