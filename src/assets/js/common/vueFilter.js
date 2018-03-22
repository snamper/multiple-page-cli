import Vue from 'Vue'

// 放过滤器

// 注册全局过滤器
Vue.filter('formatTime', function (time, format) {
    if (!time) {
        return '';
    }
    var formatMode = format || 'yyyy-MM-dd hh:mm:ss';
    var dateTime = (new Date(time)).format(formatMode);
    return dateTime;
})