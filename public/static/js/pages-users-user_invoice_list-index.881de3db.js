(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_list-index"],{"1ad1":function(t,e,i){"use strict";var n=i("cb25"),a=i.n(n);a.a},3409:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},o=[]},"4c01":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),a={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=a},"5d29":function(t,e,i){"use strict";i.r(e);var n=i("86f3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"5eeb":function(t,e,i){"use strict";i.r(e);var n=i("4c01"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"63d9":function(t,e,i){"use strict";var n=i("9827"),a=i.n(n);a.a},6525:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCartCounts=o,e.getCartList=r,e.getResetCart=c,e.changeCartNum=s,e.cartDel=d,e.getOrderList=u,e.orderProduct=l,e.orderComment=f,e.orderPay=v,e.orderData=p,e.orderCancel=h,e.orderDel=g,e.getOrderDetail=m,e.orderAgain=w,e.orderTake=b,e.express=_,e.ordeRefundReason=C,e.orderRefundVerify=x,e.orderConfirm=y,e.getCouponsOrderPrice=k,e.orderCreate=L,e.postOrderComputed=I,e.orderCoupon=z,e.offlineCheckPrice=O,e.offlineCreate=T,e.orderOfflinePayType=E,e.orderInvoiceList=M,e.orderInvoiceDetail=$,e.aliPay=P;var a=n(i("8d0b"));function o(t){return a.default.get("cart/count",{numType:void 0===t?0:t})}function r(t){return a.default.get("cart/list",t)}function c(t){return a.default.post("v2/reset_cart",t)}function s(t,e){return a.default.post("cart/num",{id:t,number:e})}function d(t){return"object"===typeof t&&(t=t.join(",")),a.default.post("cart/del",{ids:t})}function u(t){return a.default.get("order/list",t)}function l(t){return a.default.post("order/product",{unique:t})}function f(t){return a.default.post("order/comment",t)}function v(t){return a.default.post("order/pay",t)}function p(){return a.default.get("order/data")}function h(t){return a.default.post("order/cancel",{id:t})}function g(t){return a.default.post("order/del",{uni:t})}function m(t){return a.default.get("order/detail/"+t)}function w(t){return a.default.post("order/again",{uni:t})}function b(t){return a.default.post("order/take",{uni:t})}function _(t){return a.default.get("order/express/"+t)}function C(){return a.default.get("order/refund/reason")}function x(t){return a.default.post("order/refund/verify",t)}function y(t,e){return a.default.post("order/confirm",{cartId:t,new:e})}function k(t,e){return a.default.get("coupons/order/"+t,e)}function L(t,e){return a.default.post("order/create/"+t,e)}function I(t,e){return a.default.post("order/computed/"+t,e)}function z(t){return a.default.post("v2/order/product_coupon/"+t)}function O(t){return a.default.post("order/offline/check/price",t)}function T(t){return a.default.post("order/offline/create",t)}function E(){return a.default.get("order/offline/pay/type")}function M(t){return a.default.get("v2/order/invoice_list",t)}function $(t){return a.default.get("v2/order/invoice_detail/".concat(t))}function P(t,e){return a.default.get("ali_pay",{key:t,quitUrl:e},{noAuth:!0})}},"764f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-4bff0b6f]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"80d5":function(t,e,i){"use strict";i.r(e);var n=i("8a1f"),a=i("5d29");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("63d9");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"47c082da",null,!1,n["a"],r);e["default"]=s.exports},"855e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.nav[data-v-47c082da]{position:fixed;top:0;left:0;z-index:9;width:100%;height:%?90?%;background-color:#fff}.nav .acea-row[data-v-47c082da]{flex:1;border-top:%?3?% solid transparent;border-bottom:%?3?% solid transparent;font-size:%?30?%;color:#282828}.nav .on[data-v-47c082da]{border-bottom-color:#e93323;color:#e93323}.list[data-v-47c082da]{padding:%?14?% %?32?%;margin-top:%?90?%;margin-bottom:%?140?%}.list .item[data-v-47c082da]{padding:%?28?% %?32?%;background-color:#fff}.list .item ~ .item[data-v-47c082da]{margin-top:%?14?%}.list .item-hd .acea-row[data-v-47c082da]{flex:1;min-width:0}.list .name[data-v-47c082da]{font-weight:600;font-size:%?30?%;color:#282828}.list .label[data-v-47c082da]{width:%?56?%;height:%?28?%;border:%?1?% solid #e93323;margin-left:%?18?%;font-size:%?20?%;line-height:%?26?%;text-align:center;color:#e93323}.list .type[data-v-47c082da]{width:%?172?%;height:%?42?%;margin-left:%?30?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.list .type.special[data-v-47c082da]{background-color:#fde9e7;color:#e93323}.list .item-bd[data-v-47c082da]{margin-top:%?18?%}.list .cell[data-v-47c082da]{font-size:%?26?%;color:#666}.list .cell ~ .cell[data-v-47c082da]{margin-top:%?12?%}.list .item-ft[data-v-47c082da]{margin-top:%?11?%}.list .btn[data-v-47c082da]{font-size:%?26?%;color:#282828;cursor:pointer}.list .btn ~ .btn[data-v-47c082da]{margin-left:%?35?%}.list .btn .iconfont[data-v-47c082da]{margin-right:%?10?%;font-size:%?24?%;color:#000}.add-link[data-v-47c082da]{position:fixed;right:%?30?%;bottom:%?53?%;left:%?30?%;height:%?86?%;border-radius:%?43?%;background-color:#e93323;font-size:%?30?%;line-height:%?86?%;text-align:center;color:#fff}.add-link .iconfont[data-v-47c082da]{margin-right:%?14?%;font-size:%?28?%}.nothing[data-v-47c082da]{margin-top:%?254?%;font-size:%?26?%;text-align:center;color:#999}.nothing .image[data-v-47c082da]{width:%?400?%;height:%?260?%;margin-bottom:%?20?%}.record-wrapper[data-v-47c082da]{margin-top:%?110?%}.record-wrapper .item[data-v-47c082da]{padding-right:%?30?%;padding-left:%?30?%;border-radius:%?6?%;margin:%?30?%;background-color:#fff}.record-wrapper .item .item-hd[data-v-47c082da]{padding-top:%?36?%;padding-bottom:%?36?%}.record-wrapper .item .item-hd .image[data-v-47c082da]{width:%?78?%;height:%?78?%;border-radius:%?6?%}.record-wrapper .item .item-hd .text[data-v-47c082da]{flex:1;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-left:%?24?%;font-size:%?26?%;line-height:%?37?%;color:#282828}.record-wrapper .item .item-bd[data-v-47c082da]{padding:%?26?% %?30?% %?25?% %?32?%;border-radius:%?20?%;background-color:#f5f6f7;font-size:%?26?%;line-height:%?37?%;color:#818181}.record-wrapper .item .item-bd .name[data-v-47c082da]{margin-bottom:%?8?%;font-weight:700;font-size:%?26?%;color:#282828}.record-wrapper .item .item-bd .money[data-v-47c082da]{font-weight:700;font-size:%?24?%;color:#282828}.record-wrapper .item .item-bd .money .num[data-v-47c082da]{font-size:%?32?%}.record-wrapper .item .item-ft[data-v-47c082da]{padding-top:%?30?%;padding-bottom:%?30?%;font-weight:700;font-size:%?28?%;color:#282828}.record-wrapper .item .item-ft .link[data-v-47c082da]{width:%?150?%;height:%?57?%;border:%?1?% solid #707070;border-radius:%?29?%;font-weight:400;font-size:%?26?%;line-height:%?57?%;text-align:center;color:#282828}',""]),t.exports=e},"86f3":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("c740"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("89af")),o=i("2f62"),r=i("dfa2"),c=i("6525"),s={components:{home:a.default},data:function(){return{orderList:[],invoiceList:[],nav:1,page:1,limit:30,loading:!1,finished:!1,specialInvoice:!0}},watch:{nav:{immediate:!0,handler:function(t){switch(this.page=1,t){case 1:this.orderList=[],this.getOrderList();break;case 2:this.invoiceList=[],this.getInvoiceList();break}}}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){"invoice_form"===t.from&&(this.nav=2),this.getUserInfo()},methods:{getUserInfo:function(){var t=this;(0,r.getUserInfo)().then((function(e){var i=e.data.special_invoice;t.specialInvoice=i}))},navTab:function(t){this.nav!==t&&(this.nav=t)},getOrderList:function(){var t=this;uni.showLoading({title:"加载中"}),(0,c.orderInvoiceList)({page:this.page,limit:this.limit}).then((function(e){var i=e.data;uni.hideLoading(),t.orderList=t.orderList.concat(i),t.finished=i.length<t.limit,t.page+=1})).catch((function(t){uni.showToast({title:t.msg,icon:"none"})}))},getInvoiceList:function(){var t=this;uni.showLoading({title:"加载中"}),(0,r.invoiceList)({page:this.page,limit:this.limit}).then((function(e){var i=e.data;uni.hideLoading(),t.invoiceList=t.invoiceList.concat(i),t.finished=i.length<t.limit,t.page+=1})).catch((function(t){uni.showToast({title:t.msg,icon:"none"})}))},editInvoice:function(t){uni.navigateTo({url:"/pages/users/user_invoice_form/index?id=".concat(t)})},deleteInvoice:function(t){var e=this;uni.showModal({content:"删除该发票？",confirmColor:"#E93323",success:function(i){i.confirm&&(0,r.invoiceDelete)(t).then((function(){e.$util.Tips({title:"删除成功",icon:"success"},(function(){var i=e.invoiceList.findIndex((function(e){return e.id==t}));e.invoiceList.splice(i,1)}))})).catch((function(t){return e.$util.Tips({title:t})}))}})}}};e.default=s},"89af":function(t,e,i){"use strict";i.r(e);var n=i("3409"),a=i("5eeb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1ad1");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4bff0b6f",null,!1,n["a"],r);e["default"]=s.exports},"8a1f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"acea-row nav"},[i("v-uni-view",{staticClass:"acea-row row-center-wrapper",class:{on:1===t.nav},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTab(1)}}},[t._v("发票记录")]),i("v-uni-view",{staticClass:"acea-row row-center-wrapper",class:{on:2===t.nav},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTab(2)}}},[t._v("抬头管理")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.nav,expression:"nav === 1"}],staticClass:"record-wrapper"},[t._l(t.orderList,(function(e){return i("v-uni-view",{key:e.id,staticClass:"item"},[i("v-uni-view",{staticClass:"item-hd acea-row"},[i("v-uni-image",{staticClass:"image",attrs:{src:e.order.cartInfo[0].productInfo.image}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.order.cartInfo[0].productInfo.store_name+e.order.cartInfo[0].productInfo.attrInfo.suk||""))])],1),i("v-uni-view",{staticClass:"item-bd acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-view",{staticClass:"name"},[t._v(t._s(1===e.header_type?"个人":"企业")+t._s(1===e.type?"普通":"专用")+"发票")]),i("v-uni-view",[t._v("申请时间 "+t._s(e.add_time))])],1),i("v-uni-view",{staticClass:"money"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.order.pay_price))])],1)],1),i("v-uni-view",{staticClass:"item-ft acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(e.is_invoice?"已开票":"未开票"))]),i("v-uni-navigator",{staticClass:"link",attrs:{url:"/pages/users/user_invoice_order/index?order_id="+e.order.order_id}},[t._v("查看详情")])],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.page&&!t.orderList.length,expression:"page === 2 && !orderList.length"}],staticClass:"nothing"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/images/noInvoice.png"}}),i("v-uni-view",[t._v("没有发票信息哟~")])],1)],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.nav,expression:"nav === 2"}]},[t.invoiceList.length?i("v-uni-view",{staticClass:"list"},[t._l(t.invoiceList,(function(e){return[1===e.type||2===e.type&&t.specialInvoice?i("v-uni-view",{key:e.id,staticClass:"item"},[i("v-uni-view",{staticClass:"acea-row item-hd"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),e.is_default?i("v-uni-view",{staticClass:"label"},[t._v("默认")]):t._e()],1),i("v-uni-view",{staticClass:"type",class:{special:2===e.type}},[t._v(t._s(1===e.type&&1===e.header_type?"个人普通发票":1===e.type&&2===e.header_type?"企业普通发票":"企业专用发票"))])],1),i("v-uni-view",{staticClass:"item-bd"},[i("v-uni-view",{staticClass:"cell"},[t._v("联系邮箱 "+t._s(e.email))]),2===e.header_type?i("v-uni-view",{staticClass:"cell"},[t._v("企业税号 "+t._s(e.duty_number))]):t._e(),1===e.header_type&&e.drawer_phone?i("v-uni-view",{staticClass:"cell"},[t._v("联系电话 "+t._s(e.drawer_phone))]):t._e()],1),i("v-uni-view",{staticClass:"acea-row row-right item-ft"},[i("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editInvoice(e.id)}}},[i("v-uni-text",{staticClass:"iconfont icon-bianji"}),t._v("编辑")],1),i("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteInvoice(e.id)}}},[i("v-uni-text",{staticClass:"iconfont icon-shanchu"}),t._v("删除")],1)],1)],1):t._e()]}))],2):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.page&&!t.invoiceList.length,expression:"page === 2 && !invoiceList.length"}],staticClass:"nothing"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/images/noInvoice.png"}}),i("v-uni-view",[t._v("没有发票信息哟~")])],1),i("v-uni-navigator",{staticClass:"add-link",attrs:{url:"/pages/users/user_invoice_form/index?specialInvoice="+t.specialInvoice}},[i("v-uni-text",{staticClass:"iconfont icon-fapiao"}),t._v("添加新发票")],1)],1),i("home")],1)},o=[]},9827:function(t,e,i){var n=i("855e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("04fb04e0",n,!0,{sourceMap:!1,shadowMode:!1})},cb25:function(t,e,i){var n=i("764f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2145704a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);