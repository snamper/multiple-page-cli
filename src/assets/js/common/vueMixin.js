/**
 * 放一些vue实例的公共方法
 */


const mixin = {
    created: function () {
        console.log('mixin loaded')
        // axios.get('https://s103.ggwan.com/shopv2/member/new_member/dictionary.json')
        // .then(function (rsp) {
        //     // 将字典存在实例中
        //     this.$dic = rsp.data;
        // }.bind(this))
    },

    methods: {
        /**
         * 字典翻译 将 值 翻译为 字典中的文字 
         * decode(listName, sourceValue, v, t[, defaultValue])
         * @param listName string 指示查字典中的某一项
         * @param sourceValue string/number 需要翻译的值
         * @param v string 遍历项用于与sourceValue比对的key
         * @param t string v比对成功时从遍历项返回的属性
         * @param default string 当没有匹配项时的返回值
         * 
         * @return 翻译的值
         */
        decode: function (listName, sourceValue, v, t, defaultValue) {
            try {
                var list = this.$dic[listName];
                var source = sourceValue || '';
                var v = v || "v";   // 字典默认key=>v , value=>t
                var t = t || "t";
                for (var i = 0; i < list.length; i++) {
                    if(source == list[i][v]) {
                        return list[i][t];
                    }
                }
                return defaultValue || sourceValue;
            }
            catch(e) {
                // console.log('dictionary load failed, please reload this page');
            }
        },
        // 后退
        back () {
            window.history.back();
        },

        // 跳转客服
        callCustomService () {
            window.location.href = 'https://shoplinghit.qiyukf.com/client?k=519bff0bdccf6c8cf2b98f15a94def0f&wp=1';
        },

        // clipboard 在vue中不知为啥copy不了。。
        // 直接用execCommand（只能在input标签的type=text、button 用
        // 目前为copy目标node的value，有空再改
        copyInput: function (selection, attr) {
            // // 剪贴板
            // var clipboard = new Clipboard('#copyId', {
            //     text: function (trigger) {
            //         return trigger.getAttribute('data-clipboard-text');
            //     }
            // });

            // clipboard.on('success', function (e) {
            //     instance.$shopui.toast('复制成功');
            //     console.info('Action:', e.action);
            //     console.info('Text:', e.text);
            //     console.info('Trigger:', e.trigger);
            //     e.clearSelection();     // 清除选择器（即清除按钮功能
            //     clipboard.destroy();    // 回收内存
            // })

            // clipboard.on('error', function() {
            //     instance.$shopui.toast('复制失败，请重试');
            //     e.clearSelection();     // 清除选择器（即清除按钮功能
            //     clipboard.destroy();    // 回收内存
            // });
            try {
                var el = document.querySelector(selection);
                el.focus();
                el.select();
                document.execCommand("copy");
                el.blur();
                instance.$shopui.toast('复制成功');                    
            } catch (e) {
                console.log(e);
                instance.$shopui.toast('复制失败，请重试');
            }
        }
    },
    
}

export default mixin;