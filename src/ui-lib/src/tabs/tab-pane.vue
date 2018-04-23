<template>
<div 
    class="ui-tab-pane" 
    v-show="active"
>
    <slot></slot>
</div> 
</template>

<script>
import Emitter from '../../mixin/emitter'

export default {
    name: 'UiTabPane',
    componentName: 'UiTabPane',
    mixins: [Emitter],
    props: {
        name: String,
        label: String,
    },
    data() {
        return {
            // label: this.label
        }
    },
    computed: {
        active() {
            return this.$parent.currentName === (this.name || this.index);
        },
        paneName() {
            return this.name || this.index;
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.dispatch('UiTabs', 'add-panes', this);
        // }, 0)
        this.$parent.addPanes(this);
    },
    destroyed() {
        this.dispatch('UiTabs', 'remove-panes', this);
    },
    watch: {
        label() {
            this.$parent.$forceUpdate();    // 迫使vue实例重新渲染
        }
    }
}
</script>

<style scoped>
.ui-tab-pane {
    position: relative;
    height: 100%;
}
</style>
