import {home} from '../base'
import {request} from './xhr'

// 获取专题seo
export const getSpecialSeo = (data = {}) => request(`${home()}/index.php?s=shop&c=special&a=getseo`, 'post', data);

// 获取专题的自定义插入内容
export const getSpecialContent = (data = {}) => request(`${home()}/index.php?s=shop&c=special&a=getcontent`, 'post', data);

// 获取专题的商品信息
export const getSpecialProductList = (data = {}) => request(`${home()}/index.php?s=shop&c=special&a=getproduct`, 'post', data);

// 获取专题的案例
export const getSpecialCase = (data = {}) => request(`${home()}/index.php?s=shop&c=special&a=getanli`, 'post', data);

// 获取某商品的款式
export const getSku = (data) => request(`${home()}/index.php?s=shop&c=special&a=getsku`, 'post', data);

// 新版专题提交订单接口
export const postSpeicalOrder = (data) => request(`${home()}/index.php?s=shop&c=special&a=newspecial`, 'post', data);

// 专题，单件商品加入购物车
export const specialAddCart = (data) => request(`${home()}/index.php?s=shop&c=cart&a=add`, 'post', data);

