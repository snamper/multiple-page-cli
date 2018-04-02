// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import Vuex from 'vuex'
import App from './special_v1.vue'

import '@/assets/css/middleware.scss';
import '@/ui-lib/output'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    productList: [
      {
        imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
        t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
        price: '258.00',
        oldPrice: '258.00',
        people: '2000人购买',
        selected: false,
        count: 1,
        selectedStyle: '',        
        styles: [
          {
            t: '生肖鼠女',
            selected: true
          },
          {
            t: '生肖我鼠女',
          },
          {
            t: '生肖鼠问问女',
          },
          {
            t: '生肖鼠女问问我我',
          },
          {
            t: '生肖',
          },
          {
            t: '生鼠女',
          },
          {
            t: '生肖鼠女',
          },
        ],
      },
      {
        imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
        t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
        price: '258.00',
        oldPrice: '258.00',
        people: '2000人购买',
        selected: false,
        count: 1,        
        selectedStyle: '',                
        styles: [
          {
            t: '生肖鼠女',
            selected: true
          },
          {
            t: '生肖我鼠女',
          },
          {
            t: '生肖鼠问问女',
          },
          {
            t: '生肖鼠女问问我我',
          },
          {
            t: '生肖',
          },
          {
            t: '生鼠女',
          },
          {
            t: '生肖鼠女',
          },
        ],
      },
      {
        imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
        t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
        price: '258.00',
        oldPrice: '258.00',
        people: '2000人购买',
        selected: false,
        count: 1,        
        selectedStyle: '',                
        styles: [
          {
            t: '生肖鼠女',
            selected: true
          },
          {
            t: '生肖我鼠女',
          },
          {
            t: '生肖鼠问问女',
          },
          {
            t: '生肖鼠女问问我我',
          },
          {
            t: '生肖',
          },
          {
            t: '生鼠女',
          },
          {
            t: '生肖鼠女',
          },
        ],
      },
      {
        imgSrc: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
        t: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
        price: '258.00',
        oldPrice: '258.00',
        people: '2000人购买',
        selected: false,
        count: 1,        
        selectedStyle: '',                
        styles: [
          {
            t: '生肖鼠女',
            selected: true
          },
          {
            t: '生肖我鼠女',
          },
          {
            t: '生肖鼠问问女',
          },
          {
            t: '生肖鼠女问问我我',
          },
          {
            t: '生肖',
          },
          {
            t: '生鼠女',
          },
          {
            t: '生肖鼠女',
          },
        ],
      },
    ],
    noteList: [
      {
        name: '周公山',
        mobile: '137xxxxx26',
        time: '2017年11月24日',
        address: '浙江省杭州市',
        sex: '女',
        status: '已发货',
        age: '28',
        content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
      },
      {
        name: '周公山',
        mobile: '137xxxxx26',
        time: '2017年11月24日',
        address: '浙江省杭州市',
        sex: '女',
        status: '已发货',
        age: '28',
        content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
      },
      {
        name: '周公山',
        mobile: '137xxxxx26',
        time: '2017年11月24日',
        address: '浙江省杭州市',
        sex: '女',
        status: '已发货',
        age: '28',
        content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
      },
      {
        name: '周公山',
        mobile: '137xxxxx26',
        time: '2017年11月24日',
        address: '浙江省杭州市',
        sex: '女',
        status: '已发货',
        age: '28',
        content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
      },
      {
        name: '周公山',
        mobile: '137xxxxx26',
        time: '2017年11月24日',
        address: '浙江省杭州市',
        sex: '女',
        status: '已发货',
        age: '28',
        content: '测2017年的感情运说下半年有正桃花，果然这个月就遇到现在的男朋友了，真的好开心！还挺准的，哈哈！'
      },
    ],
    
    showProList: false,
    selectedAll: false,
    showStyleList: false,
    openItem: {},
    styles: [],
    totalPrice: 0,
  },

  mutations: {
    toggleProList(state, show) {
      state.showProList = show;
    },

    toggleStyleList(state, {show, item}) {
      state.showStyleList = show;
      item && (state.openItem = item || {});
    },

    getTotalPrice(state) {
      let price = 0;
      let list = state.productList;
      price = list.reduce((price, item) => {
        item.selected && (price = price + (Number(item.price) || 0));
        return price;
      }, price)
      console.log(price)
      state.totalPrice = price;
    }
  },

  actions: {
    toggleSelected({state, commit}, target) {
      if (!target) {
        state.selectedAll = !state.selectedAll;
        state.productList.every((item) => {
          item.selected = state.selectedAll;
          return true;
        })
      } else {
        target.selected = !target.selected;
        state.selectedAll = state.productList.every((item) => item.selected);
      }
      commit('getTotalPrice');
    },
  }
})

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
