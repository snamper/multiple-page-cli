/** 
 * 放一些原生拓展方法
*/

Date.prototype.format = Date.prototype.format || function(format) {
    var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
    }

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}


export function getTypeOf (source) {
    if (!source) {
        return;
    }

    var type;
    if (typeof source !== 'object') {
        type = typeof source;
    } else {
        switch (Object.prototype.toString.call(source)) {
            case '[object Object]':
                type = 'object';
                break;
            case '[object Array]':
                type = 'array';
                break;
            // 待补充 Date、RegExp 等。。现在比较赶
        }
    }
    return type;    
}

export function getTypeMap (source) {
    var typeMap = {};
    if ($b.getBaseType(source) === 'array') {
        for (var i = 0; i < source.length; i++) {
            typeMap[$b.getBaseType(source[i])] = source[i]
        }
    }
    return typeMap;
}

export function getUrlParams (key) {
    var search = window.location.search || '';
    var paramsCache = [];
    var result = {};
    if (search) {
        paramsCache = search.slice(1).split('&')
        for(var i = 0; i < paramsCache.length; i++) {
            var row = paramsCache[i].split('=')
            if (key && key === row[0]) {
                return row[1];
            }
            result[row[0]] = row[1];
        }
    }
    return result;
}

// 在原来项目中copy过来的，感觉不是很好
//cookies设置
export function setCookie (name, value) {
    var argv = arguments;
    var argc = arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var LargeExpDate = new Date ();    
    if(expires!=null) {
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
    }
    document.cookie = name + "=" + encodeURIComponent (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}

    //cookies读取
export function getCookie (Name) {
    var search = Name + "=";
    if(document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if(offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if(end == -1) {
                end = document.cookie.length
            }
            return decodeURIComponent(document.cookie.substring(offset, end))
        }
        else{
            return "";
        }
    }
}

// 获取域名
export function home () {
    let location = window.location;
    let host = location.host;
    return host.includes('localhost') ? 'https://testshop.linghit.com' : `${location.protocol}//${location.host}`;    
}

// 将html实体转换为字符
export function entityToString(entity = '') {
    let div = document.createElement('div');
    div.innerHTML = entity;

    let res = div.innerText || div.textContent;
    return res;
}
export function trim(str) {
    return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}
