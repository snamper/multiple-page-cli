/**
 * 2018/03/20 add.xfh
 * 用于存放一些商场项目中用的基本函数方法
 */

import _ from 'lodash'

import {trim} from '@/assets/js/base'
import {mobileRegExp} from '@/assets/js/config'
import {dictionary} from '@/assets/constant/dictionary'
let dic = dictionary || {};

/*
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

export function decode (listName, sourceValue, v, t, defaultValue) {
   try {
       var list = dic[listName];
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
};

/**
 * 
 * title: 筛选地址的方法
 * 
 * 根据原有地址数据【详见 @/constant/areaData
 * 国家是一个数组，省市区是一个数组（并没有分开）
 * 所以特地写方法过滤
 * 
 * ps：地址数据不是经常用，分一个文件写。【而且数据模式和字典不一样，写这里避免混淆
 */

export function getCountries() {
    return _.cloneDeep(dic.countries);
}

export function getProvinces(id) {
    if (id != 1) return [];
    let provinces = dic.area.filter(item => {
        return !item.parent;
    })
    return provinces;
};

export function getCities(id) {
    if (!id) return [];
    let cities = dic.area.filter(item => {
        return item.parent == id;
    })
    return cities;
};

export function getDistrict(id) {
    if (!id) return [];
    let district = dic.area.filter(item => {
        return item.parent == id;
    })
    return district;
};


export function getOrderStatus (opts) {

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

/**
 * 专题的url都是下面这种格式的
 * http://testshop.linghit.com/specialtemplate/speical/1362.html
 * 
 * id不在search里面，因此特地写一个方法获取专题的id。。。
 */
export function getSpecialId () {
    let reg = /\/(\w+)\.html/;
    let path = location.path || '';
    // let path = 'http://testshop.linghit.com/specialtemplate/speical/1362.html';

    let result = path.match(reg);
    let specialId = result && result[1] || '';
    return specialId;
}

export function testMobile(str) {
    return mobileRegExp.test(str || '');
}