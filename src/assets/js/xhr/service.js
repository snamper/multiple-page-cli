import {request} from './xhr'

export const getSpecialSeo = (data = {}) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getseo', 'post', data);

export const getSpecialProductList = (data = {}) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getproduct', 'post', data);

export const getSpecialCase = (data = {}) => request('https://testshop.linghit.com/index.php?s=shop&c=special&a=getanli', 'post', data);