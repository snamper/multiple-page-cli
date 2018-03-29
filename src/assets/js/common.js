/**
 * 2018/03/20 add.xfh
 * 用于存放一些商场项目中用的基本函数方法
 */

var common = {
    
    getOrderStatus: function (opts) {

        var opts = opts || {};
        var fStatus = parseInt(opts.followerStatus, 10);
        var pStatus = parseInt(opts.paymentStatus, 10);
        var defaultText = '未付款' || opts.defaultText;
        var map = $config.orderStatus || {};
        var result = true;
        var checkKey = '';

        for (var i in map) {
            result = true;
            for (var j in map[i]) {
                if ($b.getBaseType(map[i][j]) === 'array') {
                    switch (j) {
                        case 'followerStatus':
                            checkKey = fStatus;
                            break;
                        case 'paymentStatus':
                            checkKey = pStatus;
                            break;
                        default:
                            checkKey = fStatus;
                    }
                    map[i][j].indexOf(checkKey) < 0 && (result = false);
                }
            }
            if (result) {
                return map[i].t;
            }
        }

        return defaultText;
    }
}

export default common;