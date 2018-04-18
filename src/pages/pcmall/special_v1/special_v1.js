// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import Vuex from 'vuex'
import App from './special_v1.vue'

import '@/assets/css/middleware.scss';
// import '@/assets/js/commonFontsizeMatchDeviceWidthAdaptatePC'

import Message from '@/ui-lib/src/message/index'


Vue.use(Vuex)
Vue.prototype.$message = Message;

Vue.config.productionTip = false


/**
 * 放在外面的组件已经转为从props传数据了，从vuex剥离
 */

import {getSku, postSpeicalOrder, specialAddCart} from '@/assets/js/xhr/service' 
import {localhost} from '@/assets/js/config'
import {home} from '@/assets/js/base'

let today = new Date().format('yyyy年MM月dd日');
const store = new Vuex.Store({
  state: {
    productList: [
      // {
      //   file: 'https://sslresources.linghit.com/shopv2_1466155094.jpg',
      //   alt: '灵机独家设计开运六合转运珠银男女鸡年旺运送项链手链鸡年年链...',
      //   price: '258.00',
      //   oldPrice: '258.00',
      //   people: '2000人购买',
      //   selected: false,
      //   count: 1,
      //   selectedStyle: '',        
      //   styles: [
      //     {
      //       t: '生肖鼠女',
      //       selected: true
      //     },
      //     {
      //       t: '生肖我鼠女',
      //     },
      //     {
      //       t: '生肖鼠问问女',
      //     },
      //     {
      //       t: '生肖鼠女问问我我',
      //     },
      //     {
      //       t: '生肖',
      //     },
      //     {
      //       t: '生鼠女',
      //     },
      //     {
      //       t: '生肖鼠女',
      //     },
      //   ],
      // },
    ],

    noteList: [
      {name:"蒋蔚",mobile:"186******89",address:"广西壮族自治区",status: '已发货',time: today},
      {name:"胡春梅",mobile:"137******25",address:"贵州省凯里市",status: '已发货',time: today},
      {name:"孙宝",mobile:"135******13",address:"陕西省西安市",status: '已发货',time: today},
      {name:"马瑾",mobile:"159******20",address:"上海市杨浦区",status: '已发货',time: today},
      {name:"李国平",mobile:"159******61",address:"上海南桥",status: '已发货',time: today},
      {name:"武锡俊",mobile:"189******91",address:"新疆阿克苏市",status: '已发货',time: today},
      {name:"李昱达",mobile:"186******97",address:"北京市海淀区",status: '已发货',time: today},
      {name:"冯汉江",mobile:"187******32",address:"浙江省杭州市",status: '已发货',time: today},
      {name:"周光",mobile:"137******24",address:"广东中山市",status: '已发货',time: today},
      {name:"徐蕾",mobile:"187******02",address:"北京海淀区",status: '已发货',time: today},
      {name:"张清俊",mobile:"182******38",address:"山西省忻州市",status: '已发货',time: today},
      {name:"鄭裕豐",mobile:"886291***12",address:"新北市板橋區",status: '已发货',time: today},
      {name:"殷超群",mobile:"136******91",address:"海南省海口市",status: '已发货',time: today},
      {name:"胡开会",mobile:"139******12",address:"陕西咸阳市",status: '已发货',time: today},
      {name:"庞厚深",mobile:"136******76",address:"广东省东莞市",status: '已发货',time: today},
      {name:"唐继长",mobile:"152******11",address:"湖南省衡阳市",status: '已发货',time: today},
      {name:"成金灿",mobile:"131******33",address:"广东省清远市",status: '已发货',time: today},
      {name:"朱彤",mobile:"138******21",address:"四川省成都市",status: '已发货',time: today},
      {name:"黄柏凯",mobile:"189******35",address:"四川省成都市",status: '已发货',time: today},
      {name:"左全军",mobile:"150******68",address:"河南省南阳市",status: '已发货',time: today},
      {name:"赖薇",mobile:"189******35",address:"四川省成都市",status: '已发货',time: today},
      {name:"孙兴元",mobile:"135******66",address:"云南省楚雄州",status: '已发货',time: today},
      {name:"刘建萍",mobile:"137******86",address:"广东省清远市",status: '已发货',time: today},
      {name:"冯立明",mobile:"151******86",address:"山东省临沂市}",status: '已发货',time: today},
    ],
    caseList: [],

    showProList: false,
    selectedAll: false,
    showSkuList: false,
    openItem: {},
    totalPrice: 0,
    cartCount: 0,
    seo: {},
    case: {},

    // origin: 来源，打开skuList的入口按钮。购物车：cart，单品立即购买：buy，商品列表打开：selectList
    origin: 'buy',  
  },

  mutations: {
    toggleProList(state, show = false) {
      state.showProList = show;
    },
    toggleSkuList(state, show = false) {
      state.showSkuList = show;
    },

    // 全选
    toggleSelectedAll(state, data = {}) {
      state.selectedAll = data.selectedAll || false;
      state.productList.every((item) => {
        item.selected = data.selectedAll;
        return true;
      })
    },

    setSelectedAll(state, selectedAll){
      state.selectedAll = selectedAll;
    },

    getTotalPrice(state) {
      let price = 0;
      let list = state.productList;
      price = list.reduce((price, item) => {
        item.selected && (price = price + (Number(item.price) || 0) * (item.count|| 1));
        return price;
      }, price)
      console.log(price)
      state.totalPrice = price;
    },

    setSpecialSeo(state, data = {}) {
      state.seo = data;
    },

    setSpecialProductList(state, data = {}) {
      state.productList = data;
    },

    setSpecialCase(state, data = {}) {
      state.caseList = data;
    },

    setOpenItem(state, data = {}) {
      state.openItem = data;
    },

    setCartCount(state, count) {
      state.cartCount = count || 0;
    },

    // 调出选择款式
    changeOrigin(state, origin = 'buy') {
      state.origin = origin
    },

    // 更新商品列表信息
    updateProduct(state, {targetPro = {}, selected}) {
      let i;
      let newItem = targetPro;
      for(i = 0; i < state.productList.length; i++) {
        let item = state.productList[i];
        if (item.itemId === targetPro.itemId) {
          newItem.selected = selected || !!!targetPro.selected;
          break;
        }
      }
      state.productList.splice(i, 1, newItem);
    }

  },

  actions: {
    toggleSelected({state, commit}, {targetPro, selected}) {
      if (!targetPro) {
        commit('toggleSelectedAll', {selectedAll: !state.selectedAll})
      } else {
        commit('updateProduct', {targetPro: targetPro, selected: selected});

        let selectedAll = state.productList.every((item) => item.selected);
        commit('setSelectedAll', selectedAll)
      }
      commit('getTotalPrice');
    },

    // item: 商品
    openSkuList({state, commit}, {item, origin}) {
      // console.log(item)
      let openItem = item || {};
      commit('changeOrigin', origin);

      return new Promise((resolve, reject) => {
        if (!openItem.skuList) {
          resolve(getSku({id: openItem.itemId}));
        }
        resolve();
      })
      .then((rsp) => {
        if (rsp) {
          openItem.skuList = rsp.data || {};
          openItem.count = item.count || 1;
        }
      })
      .then(() => {
        commit('setOpenItem', openItem)
        // 有款式才调出skuList
        // if (openItem.skuCount) {
          commit('toggleSkuList', true);
        // }
        return Promise.resolve();
      })
    },

    closeskuList({state, commit}) {
      commit('toggleSkuList', false);      
      commit('setOpenItem', {});
    },

    confirmSku({state, commit, dispatch}, {origin}) {
      return dispatch('toggleSelected', {targetPro: state.openItem, selected: true})
        .then(() => {
          // 根据不同来源入口，进行不同的处理
          // 购物车，调接口
          if (origin === 'cart') {
            // console.log('cart')
            let openItem = state.openItem;
            let postData = {
              id: openItem.itemId,
              num: openItem.count,
              type: openItem.selectedSku,
              typename: openItem.selectedSkuText,
            }
            return specialAddCart(postData)
                    .then((rsp) => {
                      commit('toggleSkuList', false);
                      commit('setCartCount', rsp.totalnum || 0);
                      return Promise.resolve(rsp.tip || '成功加入购物车');                      
                    })
          }
          // 首页单品中的立即请购按钮
          if (origin === 'buy') {
            // console.log('buy')
            let openItem = state.openItem;
            if (openItem.skuCount && !openItem.selectedSku) return Promise.reject('请选择规格');
            return dispatch('postSpeicalOrder', [state.openItem]);
          }
          // 选择商品列表唤起的规格弹窗
          if (origin === 'selectList') {
            // console.log('selectList')
            // 关闭款式弹窗
            commit('toggleSkuList', false);
            return Promise.resolve('操作成功');
          }
        })

    },

    postSpeicalOrder({state}, data = {}) {
      let postData = {goods: []};
      let list = state.productList || data;

      return new Promise((resolve, reject) => {
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          if (item.selected) {
  
            // 对于有款式但是没选的商品，校验，商品数据中的skuCount字段标示规格数量
            if (item.skuCount && !item.selectedSku) {
              return reject('请选择规格');
            }
  
            postData.goods.push({
              orderId: item.itemId,
              sku: item.selectedSku || '',
              skuname: item.selectedSkuText || '',
              num: item.count || 1,
            })
          }
        }
        if (!postData.goods.length) {
          return reject('请选择商品');
        }
        return resolve(postData);
      })
      .then((data) => {
        // debugger
        return postSpeicalOrder(data);
      })
      .then((rsp) => {
        if (rsp) {
          rsp.url && (window.location.href = (localhost ? 'https://testshop.linghit.com' : home()) + '/' + rsp.url);
          // rsp.url && (window.location.href = ('https://testshop.linghit.com') + rsp.url);
        }
        return rsp || {};
      })
      .catch(err => {
        console.log(err)
        return Promise.reject(err);
      })
    },
  }
})


new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
