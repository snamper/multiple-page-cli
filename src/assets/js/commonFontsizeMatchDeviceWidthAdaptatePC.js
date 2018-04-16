/**
 * Created by sun yi on 2016/11/17.
 * 移动设备适配
 * ps: 此种解决方法需要和  rem  配合使用
 * 
 */

(function() {

    var fontSizeMatchDeviceWidth = function() {
        var deviceWidth = document.documentElement.clientWidth,
            devicePixelRatio = window.devicePixelRatio || 1,
            fontSize = ( ( deviceWidth * 16 / 375 ) /** devicePixelRatio */),
            scale = 1;    //    1 / devicePixelRatio
            // fontSize = ( ( deviceWidth * 16 / 375 ) * devicePixelRatio/** devicePixelRatio */),
            // scale = 1/devicePixelRatio;    //    1 / devicePixelRatio

        // document.documentElement.style.fontSize = fontSize + 'px';

        // 当存在viewport时，添加 viewport-fit=cover
        var metaEL = document.querySelector('meta[name="viewport"]');
        try {
            metaEL.setAttribute(
                'content', 
                'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
            )
        } catch (e) {
            console.log(e);
        }
        
        // 不存在时，加
        if (!metaEL) {
            var newMeta = document.createElement('meta');
            var headNode = document.getElementsByTagName('head')[0];
            newMeta.setAttribute('name', 'viewport');
            newMeta.setAttribute(
                'content',
                'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
            )
            
            headNode.insertBefore(newMeta, headNode.childNodes[0]);
        }
        
    };

    (function() {
        var ua = navigator.userAgent;
        if( /android/i.test(ua) || /ipad|itouch|iphone/i.test(ua) || /tianqi/i.test(ua) ) {
            fontSizeMatchDeviceWidth();
        } else {    //在pc上优雅显示
            document.documentElement.style.fontSize = '24px';
            var container = document.querySelector('html');
            if (container) {
                container.style.cssText = 'max-width: 23.4375rem; min-width: 23.4375rem;margin: 0 auto;';
            }
            // document.getElementById('container').style.maxWidth = '30rem';
            // document.getElementById('container').style.minWidth = '22rem';
        }

        /*if( 'number' === typeof window.orientation && 'object' === typeof window.onorientationchange ) {
            window.addEventListener('orientationchange', function() {
                location.reload(false);
            }, false);
        } else {
            //为什么不用绑定resize?    请自测（即使做了防抖动，也会存在不好的体验）
        }*/
    })();

})();