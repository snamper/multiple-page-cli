<template>
<ul class="ui-menu"
    :class="[
        `ui-menu--${mode}`,

    ]"
>
    <slot></slot>
</ul>
</template>

<script>
export default {
    name: 'UiMenu',
    componentName: 'UiMenu',    
    props: {
        mode: {
            type: String,
            default: 'horizon',
        },
        defaultActive: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            activedIndex: this.defaultActive,
        }
    },
    provide() {
        return {
            rootMenu: this
        }
    },
    methods: {
        handleItemClick(item) {
            const {index} = item
            this.activedIndex = item.index;
        },
    },
    mounted() {
        this.$on('item-click', this.handleItemClick);
    }
}
</script>

<style scoped>
.ui-menu {
    overflow: hidden;
}
.ui-menu--horizon {

}
</style>
