(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-offline_pay-index"],{"05a5":function(t,e,n){"use strict";var i=n("13385"),a=n.n(i);a.a},1329:function(t,e,n){"use strict";n.r(e);var i=n("245d"),a=n("d901");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("05a5"),n("3be4");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2fdb6b58",null,!1,i["a"],r);e["default"]=c.exports},13385:function(t,e,n){var i=n("6ed3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("24592a89",i,!0,{sourceMap:!1,shadowMode:!1})},"245d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-form",{staticClass:"form",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.checkForm.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-section"},[n("v-uni-view",{staticClass:"section-hd"},[t._v("支付金额")]),n("v-uni-view",{staticClass:"section-bd"},[n("v-uni-view",{staticClass:"input-group"},[t._v("￥"),n("v-uni-input",{staticClass:"input",attrs:{name:"money",type:"digit",placeholder:"0.00"},model:{value:t.money,callback:function(e){t.money=t._n(e)},expression:"money"}})],1),t.payPrice?n("v-uni-view",{staticClass:"discount"},[t._v("会员优惠金额：￥"+t._s(t.payPrice))]):t._e()],1)],1),n("v-uni-view",{staticClass:"radio-section"},[n("v-uni-view",{staticClass:"section-hd"},[t._v("支付方式")]),n("v-uni-radio-group",{staticClass:"section-bd",attrs:{name:"method"}},[t.yuePay?n("v-uni-label",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-yue"}),n("v-uni-text",{staticClass:"name"},[t._v("余额支付"),n("v-uni-text",{staticClass:"money"},[t._v("可用余额:"+t._s(t.now_money||0)+"￥")])],1),n("v-uni-radio",{attrs:{value:"yue",checked:"yue"===t.payType}})],1):t._e(),t.wxpay?n("v-uni-label",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-weixinzhifu"}),n("v-uni-text",{staticClass:"name"},[t._v("微信支付")]),n("v-uni-radio",{attrs:{value:"weixin",checked:"weixin"===t.payType}})],1):t._e()],1)],1),n("v-uni-button",{staticClass:"button",attrs:{"form-type":"submit"}},[t._v("确认")]),n("v-uni-view",{staticClass:"alipay",domProps:{innerHTML:t._s(t.alipayHtml)}})],1)},o=[]},"3be4":function(t,e,n){"use strict";var i=n("ca3d"),a=n.n(i);a.a},"52cc":function(t,e,n){"use strict";n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("e7ca"),a=n("cd0e"),o=n("2f62"),r=getApp(),s={data:function(){return{money:"",payPrice:"",payType:"weixin",alipayHtml:"",alipay:!1,wxpay:!1,yuePay:!1,paying:!1,now_money:0,isWeixin:!1,site_name:"",isCommitted:!1}},watch:{money:function(t,e){t&&"number"===typeof t?this.checkPrice():this.payPrice=""}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){if(this.isLogin||(0,a.toLogin)(),t.code){var e=r.globalData.spid?r.globalData.spid:"";wechatAuthV2(t.code,e).then((function(e){location.href=decodeURIComponent(decodeURIComponent(t.back_url))}))}},onShow:function(){this.isLogin&&this.getPayType(),this.isWeixin=this.$wechat.isWeixin()},methods:{getPayType:function(){var t=this;(0,i.orderOfflinePayType)().then((function(e){var n=e.data,i=n.ali_pay_status,a=n.pay_weixin_open,o=n.yue_pay_status,r=n.offline_pay_status,s=n.site_name,c=n.now_money;t.alipay="1"===i,t.wxpay=1===a,t.yuePay=1===o,t.now_money=c,t.site_name=s,r||uni.showModal({title:"支付提醒",content:"线下支付已关闭，请点击确认按钮返回主页",showCancel:!1,success:function(){uni.navigateTo({url:"/pages/index/index"})}}),s&&uni.setNavigationBarTitle({title:s})})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},checkForm:function(t){var e=t.detail.value,n=e.money,i=e.method;n?this.combData(i):uni.showToast({title:"请输入支付金额",icon:"none"})},checkPrice:function(){var t=this;(0,i.offlineCheckPrice)({pay_price:this.money}).then((function(e){t.payPrice=e.data.pay_price})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},combData:function(t){var e=this,n={type:3,pay_type:t,from:"weixinh5",price:this.payPrice||this.money,money:this.money};this.isWeixin&&(n.from="weixin"),this.paying||(this.paying=!0,uni.showLoading({title:"正在确认…"}),(0,i.offlineCreate)(n).then((function(t){uni.hideLoading(),e.callPay(t)})).catch((function(t){e.paying=!1,uni.showToast({title:t,icon:"none"})})))},callPay:function(t){var e=this,n=t.data,i=n.status,a=n.result,o=a.orderId,r=a.jsConfig,s="/pages/annex/offline_result/index?site_name="+this.site_name;switch(i){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":this.paying=!1,this.$util.Tips({title:t.msg},{tab:5,url:s});break;case"SUCCESS":this.paying=!1,this.money="",this.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:s});break;case"WECHAT_PAY":this.$wechat.pay(a.jsConfig).then((function(t){e.paying=!1,e.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:"/pages/annex/offline_result/index"})})).catch((function(t){e.paying=!1,"chooseWXPay:cancel"==t.errMsg&&uni.showToast({title:"取消支付",icon:"none"})}));break;case"PAY_DEFICIENCY":this.paying=!1,this.$util.Tips({title:t.msg});break;case"WECHAT_H5_PAY":this.paying=!1,uni.showToast({title:t.msg,success:function(){location.href=r.mweb_url}});break;case"ALIPAY_PAY":this.paying=!1,this.$wechat.isWeixin()?uni.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(o,"&link=").concat(r.qrCode)}):(this.alipayHtml=r,this.$nextTick((function(){document.getElementById("alipaysubmit").submit()})));break}}}};e.default=s},"6ed3":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-2fdb6b58]{background-color:#fff}body.?%PAGE?%[data-v-2fdb6b58]{background-color:#fff}",""]),t.exports=e},afca:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.input-section .section-hd[data-v-2fdb6b58]{padding:%?30?%;font-size:%?28?%;color:#666}.input-section .section-bd[data-v-2fdb6b58]{padding-right:%?30?%;padding-left:%?30?%}.input-section .input-group[data-v-2fdb6b58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;padding:%?45?% %?20?% %?47?%;font-size:%?80?%;color:#999}.input-section .input[data-v-2fdb6b58]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?110?%;margin-left:%?15?%;font-size:%?100?%;color:#282828}.input-section .discount[data-v-2fdb6b58]{padding:%?27?% %?20?%;border-top:%?1?% solid #eee;font-size:%?28?%;color:#e93323}.radio-section[data-v-2fdb6b58]{border-top:%?20?% solid #f5f5f5}.radio-section .section-hd[data-v-2fdb6b58]{padding:%?30?%;font-size:%?28?%;color:#666}.radio-section .section-bd[data-v-2fdb6b58]{padding-left:%?50?%}.radio-section .item[data-v-2fdb6b58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?30?%;padding-right:%?30?%;padding-bottom:%?30?%;border-bottom:%?1?% solid #f5f5f5}.radio-section .iconfont[data-v-2fdb6b58]{font-size:%?44?%}.radio-section .icon-yue[data-v-2fdb6b58]{color:#fe960f}.radio-section .icon-weixinzhifu[data-v-2fdb6b58]{color:#41b035}.radio-section .icon-zhifubao[data-v-2fdb6b58]{color:#099bdf}.radio-section .name[data-v-2fdb6b58]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?30?%;font-size:%?30?%;color:#333}.radio-section .money[data-v-2fdb6b58]{float:right;padding-right:%?20?%;font-size:%?20?%}.button[data-v-2fdb6b58]{height:%?86?%;border-radius:%?43?%;margin:%?114?% %?30?% %?30?%;background-color:#e93323;font-size:%?30?%;line-height:%?86?%;color:#fff}.alipay[data-v-2fdb6b58]{display:none}',""]),t.exports=e},ca3d:function(t,e,n){var i=n("afca");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("29af15e6",i,!0,{sourceMap:!1,shadowMode:!1})},d901:function(t,e,n){"use strict";n.r(e);var i=n("52cc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e7ca:function(t,e,n){"use strict";var i=n("4ea4");n("a15b"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCartCounts=o,e.getCartList=r,e.getResetCart=s,e.changeCartNum=c,e.cartDel=u,e.getOrderList=d,e.orderProduct=f,e.orderComment=l,e.orderPay=p,e.orderData=b,e.orderCancel=y,e.orderDel=h,e.getOrderDetail=v,e.orderAgain=g,e.orderTake=m,e.express=w,e.ordeRefundReason=_,e.orderRefundVerify=x,e.orderConfirm=C,e.getCouponsOrderPrice=k,e.orderCreate=P,e.postOrderComputed=T,e.orderCoupon=A,e.offlineCheckPrice=E,e.offlineCreate=R,e.orderOfflinePayType=D,e.orderInvoiceList=z,e.orderInvoiceDetail=L,e.aliPay=O;var a=i(n("1005"));function o(t){return a.default.get("cart/count",{numType:void 0===t?0:t})}function r(t){return a.default.get("cart/list",t)}function s(t){return a.default.post("v2/reset_cart",t)}function c(t,e){return a.default.post("cart/num",{id:t,number:e})}function u(t){return"object"===typeof t&&(t=t.join(",")),a.default.post("cart/del",{ids:t})}function d(t){return a.default.get("order/list",t)}function f(t){return a.default.post("order/product",{unique:t})}function l(t){return a.default.post("order/comment",t)}function p(t){return a.default.post("order/pay",t)}function b(){return a.default.get("order/data")}function y(t){return a.default.post("order/cancel",{id:t})}function h(t){return a.default.post("order/del",{uni:t})}function v(t){return a.default.get("order/detail/"+t)}function g(t){return a.default.post("order/again",{uni:t})}function m(t){return a.default.post("order/take",{uni:t})}function w(t){return a.default.get("order/express/"+t)}function _(){return a.default.get("order/refund/reason")}function x(t){return a.default.post("order/refund/verify",t)}function C(t,e){return a.default.post("order/confirm",{cartId:t,new:e})}function k(t,e){return a.default.get("coupons/order/"+t,e)}function P(t,e){return a.default.post("order/create/"+t,e)}function T(t,e){return a.default.post("order/computed/"+t,e)}function A(t){return a.default.post("v2/order/product_coupon/"+t)}function E(t){return a.default.post("order/offline/check/price",t)}function R(t){return a.default.post("order/offline/create",t)}function D(){return a.default.get("order/offline/pay/type")}function z(t){return a.default.get("v2/order/invoice_list",t)}function L(t){return a.default.get("v2/order/invoice_detail/".concat(t))}function O(t,e){return a.default.get("ali_pay",{key:t,quitUrl:e},{noAuth:!0})}}}]);