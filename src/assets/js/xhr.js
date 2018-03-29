/**
 * 封装发送请求的类
 */

import axios from 'axios'
import base from './base.js'


export default class XHR {

    constructor (baseUrl) {

        this.baseUrl = baseUrl || (window.location.protocol + '//' + window.location.host);
    }

    request (params, method, data) {
        var paramsMap = base.getTypeMap(base.getBaseType(params) !== 'array' && [params] || params);
        var requestUrl = getRequestUrl(paramsMap);

        return axios[method](requestUrl)
                .then(function (rsp) {
                    return rsp && rsp.data || {};
                })
    }

    get (params) {
        return request(params, 'get');
    }

    post (params, data) {
        var data = data || {};
        return request(params, 'post', data);
    }

    getRequestUrl (paramsMap, options) {
        var urlHead = '';
        var urlTail = '';
        var tailCacheArr = [];
        var requestUrl = '';
        var options = options || {};
        var defaultSearch = options.defaultSearch || false;  // 是否加上原来的 location.search

        if (base.getBaseType(paramsMap) === 'object') {
            if (paramsMap['string']) {
                urlHead = window.location.protocol + '//' + window.location.host + (paramsMap['string'].slice(0,1) === '/' ? '' : '/') + paramsMap['string'];
            }
            if (paramsMap['object']) {
                for (var key in paramsMap['object']) {
                    tailCacheArr.push(key + '=' + paramsMap['object'][key]);
                }
                urlTail = tailCacheArr.join('&');
            }

            requestUrl = urlHead + (defaultSearch && window.location.search ? window.location.search : '?') + urlTail;
            
        }
        console.log(requestUrl);
        return requestUrl;
    }
}
