
// 全局变量配置


// cookie中获取用户信息的key
export const userInfoCookieKey = 'linghit_b1bf4_member_info'
// 从找出的cookie中获取用户id的正则
export const userIdReg = /(s:2:"id";s:18:")([0-9]{18})/i

// 能够开始查询物流信息的订单付款状态
// orderStatusToQueryLogistics: [1,2],

// followerStatusToQueryLogistics: [2,3,4,5,6,7,8,9],

// 联系电话的校验
export const mobileRegExp = /^[\d-\+]{1,20}$/;

// 客服电话
export const customServicePhone = '400-150-0558'

// 以下为判断订单状态的条件（写在对象中以方便分隔后续其他新流程的状态判断,比如售后加一个流程。。）
// 状态对应值请去dictionary.json中确认        
export const orderStatus = {
    // 订单为未付款状态的条件
    unpaid: {
        followerStatus: [0,3],
        paymentStatus: [0],
        t: '未付款'
    },

    // 已付款
    paid: {
        followerStatus: [0,3],
        paymentStatus: [1],
        t: '已付款'
    },

    // 货到付款
    cashOnDelivery: {
        followerStatus: [0,3],
        paymentStatus: [2],
        t: '货到付款'
    },

    // 订单待发货
    pendingDelivery: {
        followerStatus: [1],
        t: '待发货'
    },

    // 订单待收货
    waitingReceive: {
        followerStatus: [2],
        t: '待收货'
    },

    // 订单已完成
    finished: {
        followerStatus: [4],
        t: '已完成'
    },

    // 订单已取消
    cancel: {
        followerStatus: [5,6,8,9],
        t: '已取消'
    }
}