import {postSpeicalOrder, specialAddCart} from '@/assets/js/xhr/service'

const today = new Date().format('yyyy年MM月dd日');
export default {
    data() {
        return {
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
            productList: [],
            caseList: [],
            
            selectedAll: false,

            openBuyOrigin: 'buy',   // 打开选择规格的来源。立即购买buy，购物车cart，商品列表selectList
            showSkuDialog: false,
            showProductDialog: false,
            showForm: false,

            openItem: {},
            // totalPrice: 0,
            // cartCount: 0,
            seo: {},
            case: {},
        
            // origin: 来源，打开skuList的入口按钮。购物车：cart，单品立即购买：buy，商品列表打开：selectList
            origin: 'buy',
        }
    },
    computed: {
        cartCount() {
            return 0;
        },
        totalPrice() {
            return 0;
        }
    },
    methods: {
        // 商品选择列表
        openProductDialog() {
            this.showProList = true;
        },
        closeProductDialog() {
            this.showProList = false;
        },
        // 表单
        openForm() {
            this.showForm = true;
        },
        closeForm() {
            this.showForm = false;
        },

        // 打开规格窗口，需要商品id去后台获取规格
        async openSkuDialog(item, origin) {
            if (!item || !origin) return;
        
            // 更改打开源。获取规格
            this.origin = origin;
            if (!item.skuList) {
                item.skuList = await getSku({id: item.itemId});
            }
            !item.count && (item.count = 1);

            // 设置打开商品。打开弹窗
            this.openItem = item;
            this.showSkuDialog = true;
            return item;
        },
        closeSkuDialog() {
            this.showSkuDialog = false;
            this.openItem = {};
        },
        // 确认规格
        async setItemSku() {
            let openItem = this.openItem;
            // 检查有没有选规格
            if (openItem.skuCount && !openItem.selectedSku) return await Promise.reject('请选择规格');

            // 根据不同来源入口，执行不同操作
            // 单品中的立即请购
            if (this.origin === 'buy') {
                return await this.postOrder();
            }
            if (this.origin === 'cart') {
                return await this.addCart();
            }
            if (this.origin === 'selectList') {
                this.openItem.selected = true;

                // 更新对应商品
                let i;
                let list = this.productList;
                let len = list.length;
                for (i = 0; i < len; i++) {
                    if (openItem.itemid === list[i].itemid) {
                        list.splice(i, 0, openItem);
                        break;
                    }
                }

                this.closeSkuDialog();
                return Promise.resolve();
            }
        },
        
        // 下单
        async postOrder(formData) {
            // data为表单传进来的地址信息
            if (!formData || !this.productList) return await Promise.reject('没有选择商品');
            
            let productData = {goods:[]};
            let postData = {};
            let rsp;
            let list = this.productList;
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                if (item.selected) {
                  postData.goods.push({
                    orderId: item.itemId,
                    sku: item.selectedSku || '',
                    skuname: item.selectedSkuText || '',
                    num: item.count || 1,
                  })
                }
            }
            
            Object.assign(postData, productData, formData);
            rsp = await postSpeicalOrder(postData)
                        .catch((e) => {
                            console.log(e);
                        });
            if (rsp.url) {
                // rsp.url && (window.location.href = home() + '/' + rsp.url);
            }
        },

        // 加入购物车
        async addCart() {
            if (!this.openItem) return await Promise.reject('没有选择商品');
            let item = this.openItem;
            let postData = {
              id: item.itemId,
              num: item.count,
              type: item.selectedSku,
              typename: item.selectedSkuText,
            };

            return await specialAddCart(postData)
                            .catch((e) => {
                                console.log(e);
                            })
        },

        // 商品选择列表中，去结算时，检查商品信息是否齐全
        async selectListToForm() {
            let list = this.productList;
            let selectedCount = 0;
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                if (item.selected) {
                    selectedCount++;
                    // 对于有款式但是没选的商品，校验，商品数据中的skuCount字段标示规格数量
                    if (item.skuCount && !item.selectedSku) {
                        return this.$message('请选择规格');
                    }
                }
            }
            if (!selectedCount) {
                return this.$message('请选择商品');
            }
            this.openForm();
        }
    }
}