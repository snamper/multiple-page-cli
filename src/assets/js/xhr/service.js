import {request} from './xhr'

// 获取专题seo
export const getSpecialSeo = (data = {}) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getseo', 'post', data);

// 获取专题的商品信息
export const getSpecialProductList = (data = {}) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getproduct', 'post', data);

// 获取专题的案例
export const getSpecialCase = (data = {}) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getanli', 'post', data);

// 获取某商品的款式
export const getSku = (data) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getsku', 'post', data);