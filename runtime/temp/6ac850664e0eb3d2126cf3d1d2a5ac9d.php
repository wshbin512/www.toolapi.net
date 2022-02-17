<?php /*a:1:{s:51:"/www/wwwroot/test.vzelf.com/public/admin/index.html";i:1644200136;}*/ ?>
<!DOCTYPE html><html><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1,user-scalable=no"><link rel="shortcut icon" href=/admin/favicon.ico><title>UTV</title><link href=/admin/view_admin/css/chunk-vendors.81c82c08.css rel=stylesheet><link href=/admin/view_admin/css/app.301be010.css rel=stylesheet></head><body><noscript><strong>请开启 JavaScript 功能来使用 UTV。</strong></noscript><div id=app></div><script src=/admin/view_admin/js/chunk-vendors.06a9c557.js></script><script src=/admin/view_admin/js/app.ad1a7fca.js></script></body><script>// dataset 方法兼容 IE 浏览器。ie10及以下不支持dataset
    if (window.HTMLElement) {
        if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
            Object.defineProperty(HTMLElement.prototype, 'dataset', {
                get: function () {
                    var attributes = this.attributes // 获取节点的所有属性
                    var name = []
                    var value = [] // 定义两个数组保存属性名和属性值
                    var obj = {} // 定义一个空对象
                    for (var i = 0; i < attributes.length; i++) { // 遍历节点的所有属性
                        if (attributes[i].nodeName.slice(0, 5) === 'data-') { // 如果属性名的前面5个字符符合"data-"
                            // 取出属性名的"data-"的后面的字符串放入name数组中
                            name.push(attributes[i].nodeName.slice(5));
                            // 取出对应的属性值放入value数组中
                            value.push(attributes[i].nodeValue);
                        }
                    }
                    for (var j = 0; j < name.length; j++) { // 遍历name和value数组
                        obj[name[j]] = value[j]; // 将属性名和属性值保存到obj中
                    }
                    return obj // 返回对象
                }
            })
        }
    }</script></html>