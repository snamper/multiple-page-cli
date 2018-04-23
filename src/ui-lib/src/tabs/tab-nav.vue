<template>
<div class="ui-tabs__nav">
    <tab-bar 
        :tabs="panes"
        ref="navBar"
    />
    <div 
        class="ui-tabs__item"
        ref="tabs"
        v-for="(row,index) in panes"
        :key="index"
        @click="handleClick($event, row, index)"
    >
        {{row.$slots.label || row.label}}
    </div>
</div>
</template>

<script>
import TabBar from  './tab-bar'
function noop() {}

export default {
    components: {
        TabBar
    },
    props: {
        panes: {
            type: Array,
            default: () => [],
        },
        currentName: String,
        handleTabClick: {
            type: Function,
            default: noop
        }
    },
    methods: {

    },
    methods: {
        handleClick(event, pane, index) {
            let tabName = pane.name || pane.index || index;
            this.handleTabClick(pane, tabName, event);
        }
    }
}
</script>

<style scoped>
.ui-tabs__header>.ui-tabs__nav {
    position: relative;
    overflow: hidden;
}
.ui-tabs__item {
    float: left;
    padding: 0 12px;
}
</style>
