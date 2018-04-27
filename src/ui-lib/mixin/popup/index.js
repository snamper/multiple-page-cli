import PopupManager from './popup-manager'

// 递增数，作为弹窗实例的id
let idSeed = 1;

export default {
    props: {

    },

    data() {
        return {

        }
    },

    methods: {

    },

    beforeMount() {
        this._popupId = 'popup-' + idSeed++;
        this.register(this._popupId, this);
    },
    beforeDestroy() {
        PopupManager.deregister(this._popupId);
        
    }
}