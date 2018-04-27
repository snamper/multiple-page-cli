export default {
    props: {
        // 控制是否清除body的高度（多弹窗比较需要用
        removeHeight: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            lockScroll: false,
            visible: false,
            bodyOverflow: null,
        }
    },
    watch: {
        visible(val) {
            this.doOpen();
        }
    },

    methods: {
        doOpen() {
            if (this.$isServer) return;
            if (this.lockScroll) return;
            this.lockScroll = true;

            if (!this.bodyOverflow) {
                this.bodyOverflow = document.body.style.overflow;
                // this.bodyClientHeight = document.body.style.height;
            }
            
            document.body.style.overflow = 'hidden';
            document.body.style.height = document.documentElement.clientHeight + 'px';
        },

        doClose() {
            this.lockScroll = false;

            document.body.style.overflow = this.bodyOverflow;
            this.removeHeight && (document.body.style.height = '');
            this.bodyOverflow = null;
            console.log(this)
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.doOpen();
        })
    },
    beforeDestroy() {
        this.doClose();
    }
}