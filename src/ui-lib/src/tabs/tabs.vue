<script>
import TabNav from './tab-nav'

export default {
    name: 'UiTabs',
    componentName: 'UiTabs',
    
    components: {
        TabNav
    },
    props: {
        value: {},
        activeName: String,
    },
    data() {
        return {
            currentName: this.value || this.activeName,
            panes: [],
        }
    },
    watch: {
        activeName(val) {
            this.setCurrentName(val);
        },
        value(val) {
            this.setCurrentName(val);
        }
    },

    render(h) {
        let {
            currentName,
            panes,
            handleTabClick
        } = this;

        const navData = {
            props: {
                currentName,
                panes,
                handleTabClick
            },
            ref: 'nav',
        }

        // 有空得补jsx语法。。。
        const header = (
            <div class={['ui-tabs__header']}>
                <tab-nav {...navData}></tab-nav>
            </div>
        );
        const panels = (
            <div class="ui-tabs__content">
                {this.$slots.default}
            </div>
        );
        return (
            <div class={{
                'ui-tabs': true
            }}>
                {[header,panels]}
            </div>
        )
    },
    methods: {
        addPanes(item) {
            const index = this.$slots.default.filter(row => {
                return row.elm.nodeType === 1 && /\bui-tab-pane\b/.test(row.elm.className);
            }).indexOf(item.$vnode);
            this.panes.splice(index, 0, item);
        },
        removePanes(item) {
            const panes = this.panes;
            const index = panes.indexOf(item);
            if (index > -1) {
                panes.splice(index, 1);
            }
        },
        setCurrentName(value) {
            this.currentName = value;
            this.$emit('input', value);
        },
        handleTabClick(tab, tabName, event) {
            if (tab.disabled) return;
            this.setCurrentName(tabName);
            this.$emit('tab-click', tab, event);
        }
    },
    mounted() {
        this.$on('add-panes', this.addPanes);
        this.$on('remove-panes', this.removePanes);
    }
}
</script>

<style scoped>
.ui-tabs {
    height: 100%;
    overflow: hidden;
}
.ui-tabs__header {
    height: 90px;
    line-height: 90px;
    position: relative;
    border-bottom: 1px solid #ccc;
}
.ui-tabs__content {
    height: 100%;
    height: calc(100% - 90px);
}
</style>
