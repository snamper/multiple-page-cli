import {home, getUrlParams} from '@/assets/js/base'
import {getSpecialId} from '@/assets/js/common'
import {postSpeicalOrder, specialAddCart, getSku, getSpecialSeo} from '../../js/apiService'
import Loading from '@/ui-lib/src/loading/index'

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
            id: getSpecialId() || 1366,
            cartCount: 0,
            channel: '',
            channelMark: '',
            
            loading: null,
            openItem: {},   // 在skuDialog中打开的商品

            openSkuOrigin: 'buy',   // 打开选择规格的来源。立即购买buy，购物车cart，商品列表selectList
            showSkuDialog: false,
            showProductDialog: false,
            showForm: false,
            
        }
    },
    computed: {
        totalPrice() {
            return 0;
        }
    },
    methods: {
        setChannelMark (channelMark = '') {
            this.channelMark = channelMark;            
        },
        // 商品选择列表
        openProductDialog() {
            this.showProductDialog = true;
        },
        closeProductDialog() {
            this.showProductDialog = false;
        },
        // 表单
        openForm() {
            this.showForm = true;
        },
        closeForm() {
            this.showForm = false;
        },

        // 打开规格窗口，需要商品id去后台获取规格
        async openSkuDialog({item, origin}) {
            if (!item || !origin) return;
        
            // 打开loading
            this.loading = Loading();
            // 更改打开源。获取规格
            this.openSkuOrigin = origin;
            if (!item.skuList) {
                item.skuList = await getSku({id: item.itemId});
            }
            !item.count && (item.count = 1);

            // 设置打开商品。打开弹窗。关闭loading
            this.openItem = item;
            this.showSkuDialog = true;
            this.loading.close();
        },
        closeSkuDialog() {
            this.showSkuDialog = false;
            // this.openItem = {};
        },
        // 确认规格
        async setItemSku(item) {
            // 检查有没有选规格
            if (item.skuCount && !item.selectedSku) return await Promise.reject('请选择规格');
            
            // 更新对应商品
            item.selected = true;
            this.openItem = item;
            await this.updateProduct(item);

            // 根据不同来源入口，执行不同操作
            // 单品中的立即请购
            if (this.openSkuOrigin === 'buy') {
                return await this.openForm();
            }
            if (this.openSkuOrigin === 'cart') {
                console.log(this);
                return await this.addCart();
            }
            if (this.openSkuOrigin === 'selectList') {

                this.closeSkuDialog();
                return Promise.resolve();
            }
        },
        
        // 下单
        async postOrder(formData) {
            // data为表单传进来的地址信息
            if (!this.productList) return this.$message('没有商品信息，请刷新');
            if (!formData) return this.$message('没有表单信息，请刷新');
            
            let postData = {
                channel: this.channel,
                channel_mark: this.channelMark
            };
            let productData = {goods:[]};
            let rsp;
            let list = this.productList;
            // 获取商品
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                if (item.selected) {
                    productData.goods.push({
                    orderId: item.itemId,
                    sku: item.selectedSku || '',
                    skuname: item.selectedSkuText || '',
                    num: item.count || 1,
                  })
                }
            }
            
            // 拼合数据，发送请求
            Object.assign(postData, productData, formData);
            rsp = await postSpeicalOrder(postData)
                            .catch((e) => {
                                this.$message(e.tip || e);
                            });
            rsp && this.$message(rsp.tip || rsp.data || rsp);   // 错误提示
            rsp.url && (window.location.href = home() + '/' + rsp.url);
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

            this.loading = Loading();
            let rsp = await specialAddCart(postData)
                            .catch((e) => {
                                this.loading.close();            
                                return this.$message(e);
                            })
            this.loading.close();
            if (rsp) {
                this.cartCount = rsp.totalnum || 0;
                this.$message(rsp.tip || rsp);
                return Promise.resolve();
            }
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
        },

        // 更新商品列表信息
        updateProduct(newItem = {}) {
            let i;
            let list = this.productList;
            for(i = 0; i < list.length; i++) {
                let item = list[i];
                if (item.itemId === newItem.itemId) {
                    list.splice(i, 1, newItem);
                    return Promise.resolve();
                }
            }
        }
    },
    mounted() {
        this.channel = getUrlParams('channel');
        
    }
}