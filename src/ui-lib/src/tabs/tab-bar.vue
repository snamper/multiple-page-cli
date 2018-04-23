<template>
    <div 
        class="ui-tabs__active-bar" 
        :style="barStyle"
    >
        {{barStyle}}
    </div>
</template>

<script>
export default {
    name: 'uiTabBar',
    componentName: 'uiTabBar',
    props: {
        tabs: Array

    },

    computed: {
        barStyle: {
            cache: false,
            get() {
                if (!this.$parent.$refs.tabs) return {};     // 使用ref是因为要获取原生dom，拿clientWidth
                let style = {};
                let offset = 0;
                let tabSize = 0;

                const firstUpperCase = str => {
                    return str.toLowerCase().replace(/^[a-z]/g, L => L.toUpperCase());
                }
                for (let i = 0, len = this.tabs.length; i < len; i++) {
                    let $el = this.$parent.$refs.tabs[i];
                    let tab = this.tabs[i];
                    if (!$el) continue;

                    if (!tab.active) {
                        offset = offset + $el[`clientWidth`];
                        continue;
                    } else {
                        tabSize = $el[`clientWidth`];
                        break;
                    }
                }

                const transform = `translateX(${offset}px)`;
                style.width = tabSize + 'px';
                style.transform = transform;
                style.msTransform = transform;
                style.webkitTransform = transform;

                return style;
            }
        }
    },
    mounted() {
        // 由于不是使用jsx，computed过早（先于render）执行导致$refs中没有dom，
        // 出现问题：获取宽度失败。所以在mounted阶段强制重新渲染一次，这个时候就有dom了
        this.$forceUpdate()
    }
}
</script>

<style scoped>
.ui-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    z-index: 1;
    background: red;
    transition: all .3s;
}
</style>
