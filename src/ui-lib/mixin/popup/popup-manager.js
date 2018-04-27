/**
 * 管理所有弹窗的管理器
 * 拥有一个管理对象
 */

import Vue from 'vue'
import {addClass, removeClass} from '@/ui-lib/utils/dom'

let hasModal = false;

// 弹窗时的半透明背景
const getModal = function () {
    if (Vue.prototype.$isServer) return;
    let modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;

        modalDom.addEventListener('touchmove', function(event) {
            event.preventDefault();
            event.stopPropagation();
        })

        modalDom.addEventListener('click', function () {
            PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        })
    }
}

const instances = {};

const PopupManager = {

    modalDom: null,
    modalStack: [],

    zIndex: 2000,

    // 获取一个栈中的实例
    getInstance: function(id) {
        return instances[id];
    },
    
    // 注册一个实例进栈
    register: function(id, instance) {
        if (id && instance) {
            instance[id] = instance
        }
    },

    // zIndex加一，保证后面出现的弹窗的zIndex一定更大
    nextZIndex() {
        return PopupManager.zIndex++;
    },

    // 打开一个半透明层
    openModal(id, zIndex) {
        if (Vue.prototype.$isServer) return;
        if (!id || zIndex === undefined) return;

        // 检查当前栈中是否已存在该id的弹窗，若存在表示在页面上，直接返回
        modalStack = this.modalStack;
        for (let i = 0, len = modalStack.length; i < len; i++) {
            if (modalStack[i].id === id) {
                return;
            }
        }

        const modalDom = getModal();
        addClass(modalDom, 'v-modal');
        addClass(modalDom, 'v-modal-enter');
        setTimeout(function() {
            removeClass(modalDom, 'v-modal-enter');
        }, 200);

        document.body.appendChild(modalDom);
        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }

        // 将该弹窗加入栈
        this.modalStack.push({id: id, zIndex: zIndex});
    },

    // 点击半透明层时触发的函数
    doOnModalClick () {

    }
}

export default PopupManager;