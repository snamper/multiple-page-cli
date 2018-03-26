// 字典，值与文字的对应，用于转换/翻译

const dictionary = {
    paymentStatus: [
        {v: 0, t: "未付款"},
        {v: 1, t: "已付款"},
        {v: 2, t: "货到付款"}
    ],
    followerStatus: [
        {v: 0, t: "未跟进"},
        {v: 1, t: "待发货"},
        {v: 2, t: "已发货"},
        {v: 3, t: "需要再跟进"},
        {v: 4, t: "交易成功"},
        {v: 5, t: "拒签"},
        {v: 6, t: "不要"},
        {v: 7, t: "售后"},
        {v: 8, t: "已退款"},
        {v: 9, t: "已关闭"}
    ],
    payway: [
        {v: "hdfk", t: "货到付款"},
        {v: "wx", t: "微信支付"},
        {v: "allpay", t: "VISA"},
        {v: "alipay", t: "支付宝支付"},
        {v: "paypal", t: "paypal/信用卡支付"}
    ],
    deliverStatus: [
        {v: 0, t: "在途中"},
        {v: 1, t: "已揽收"},
        {v: 2, t: "疑难"},
        {v: 3, t: "已签收"},
        {v: 4, t: "退签"},
        {v: 5, t: "同城派送中"},
        {v: 6, t: "退回"},
        {v: 10, t: "待清关"},
        {v: 11, t: "清关中"},
        {v: 12, t: "已清关"},
        {v: 13, t: "清关异常"},
        {v: 14, t: "收件人拒签"}
    ],
    deliverCompany: [
        {v: "yuantong", t: "圆通"},
        {v: "shentong", t: "申通"},
        {v: "shunfeng", t: "顺丰"},
        {v: "youzhengguonei", t: "邮政"},
        {v: "youzhengguoji", t: "邮政"}
    ],
}

export default dictionary;