(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-delivery-index"],{"0a48":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"deliver-goods"},[n("header",[n("v-uni-view",{staticClass:"order-num acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"num line1"},[e._v("订单号："+e._s(e.order_id))]),n("v-uni-view",{staticClass:"name line1"},[n("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.delivery.nickname))])],1),n("v-uni-view",{staticClass:"address"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(e.delivery.real_name)),n("span",{staticClass:"phone"},[e._v(e._s(e.delivery.user_phone))])]),n("v-uni-view",[e._v(e._s(e.delivery.user_address))])],1),n("v-uni-view",{staticClass:"line"},[n("v-uni-image",{attrs:{src:i("f21f")}})],1)],1),n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("发货方式")]),n("v-uni-view",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,i){return n("v-uni-view",{key:i,staticClass:"goods",class:e.active===i?"on":"",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changeType(t,i)}}},[e._v(e._s(t.title)),n("span",{staticClass:"iconfont icon-xuanzhong2"})])})),1)],1),e.logistics.length>0?[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}],staticClass:"list"},[1==e.delivery.config_export_open?n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("发货类型")]),n("v-uni-view",{staticClass:"mode acea-row row-middle row-right"},e._l(e.expressType,(function(t,i){return n("v-uni-view",{key:i,staticClass:"goods",class:e.curExpress===t.key?"on":"",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changeExpTpe(t,i)}}},[e._v(e._s(t.title)),n("span",{staticClass:"iconfont icon-xuanzhong2"})])})),1)],1):e._e(),1==e.curExpress?[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("快递公司")]),n("v-uni-view",{staticClass:"select-box"},[n("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.seIndex,range:e.logistics,"range-key":"name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.logistics[e.seIndex].name))])],1)],1)],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("快递单号")]),n("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写快递单号"},model:{value:e.delivery_id,callback:function(t){e.delivery_id=t},expression:"delivery_id"}}),e.isWeixin?n("v-uni-text",{staticClass:"iconfont icon-xiangji",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scanCode.apply(void 0,arguments)}}}):e._e(),1==e.curExpress?n("v-uni-text",{staticClass:"trip"},[e._v("顺丰请输入单号 :收件人或寄件人手机号后四位")]):e._e(),1==e.curExpress?n("v-uni-text",{staticClass:"trip"},[e._v("例如：SF000000000000:3941")]):e._e()],1)]:e._e(),2==e.curExpress?[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("快递公司")]),n("v-uni-view",{staticClass:"select-box"},[n("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.seIndex,range:e.logistics,"range-key":"name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.logistics[e.seIndex].name))])],1)],1)],1),e.expTemp.length>0?n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("电子面单")]),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.expIndex,range:e.expTemp,"range-key":"title"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTempChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.expTemp[e.expIndex].title))])],1),n("div",{staticClass:"look",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}},[e._v("预览")])],1)],1):e._e(),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("寄件人姓名：")]),n("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写寄件人姓名"},model:{value:e.to_name,callback:function(t){e.to_name=t},expression:"to_name"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("寄件人电话：")]),n("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写寄件人电话"},model:{value:e.to_tel,callback:function(t){e.to_tel=t},expression:"to_tel"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("寄件人地址：")]),n("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写寄件人地址"},model:{value:e.to_addr,callback:function(t){e.to_addr=t},expression:"to_addr"}})],1)]:e._e()],2)]:e._e(),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}],staticClass:"list"},[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[e._v("送货人")]),e.postPeople.length>0?n("v-uni-view",{staticClass:"select-box"},[n("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.postIndex,range:e.postPeople,"range-key":"wx_name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPostChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.postPeople[e.postIndex].wx_name))])],1)],1):e._e()],1)],1),n("v-uni-textarea",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active === 2"}],staticClass:"textarea",attrs:{placeholder:"备注",maxlength:500,"auto-height":!0},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTextAreaBlur.apply(void 0,arguments)}},model:{value:e.fictitious_content,callback:function(t){e.fictitious_content=t},expression:"fictitious_content"}})],2),n("v-uni-view",{staticStyle:{height:"1.2rem"}}),n("v-uni-view",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveInfo.apply(void 0,arguments)}}},[e._v("确认提交")])],1)},r=[]},"121a":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getStatisticsInfo=r,t.getStatisticsMonth=o,t.getAdminOrderList=s,t.setAdminOrderPrice=d,t.setAdminOrderRemark=l,t.getAdminOrderDetail=c,t.getAdminOrderDelivery=u,t.setAdminOrderDelivery=v,t.getStatisticsTime=p,t.setOfflinePay=f,t.setOrderRefund=g,t.getLogistics=m,t.orderVerific=h,t.orderExportTemp=w,t.orderDeliveryInfo=x,t.orderOrderDelivery=_;var a=n(i("1005"));function r(){return a.default.get("admin/order/statistics",{},{login:!0})}function o(e){return a.default.get("admin/order/data",e,{login:!0})}function s(e){return a.default.get("admin/order/list",e,{login:!0})}function d(e){return a.default.post("admin/order/price",e,{login:!0})}function l(e){return a.default.post("admin/order/remark",e,{login:!0})}function c(e){return a.default.get("admin/order/detail/"+e,{},{login:!0})}function u(e){return a.default.get("admin/order/delivery/gain/"+e,{},{login:!0})}function v(e,t){return a.default.post("admin/order/delivery/keep/"+e,t,{login:!0})}function p(e){return a.default.get("admin/order/time",e,{login:!0})}function f(e){return a.default.post("admin/order/offline",e,{login:!0})}function g(e){return a.default.post("admin/order/refund",e,{login:!0})}function m(e){return a.default.get("logistics",e,{login:!1})}function h(e,t){return a.default.post("order/order_verific",{verify_code:e,is_confirm:t})}function w(e){return a.default.get("admin/order/export_temp",e)}function x(){return a.default.get("admin/order/delivery_info")}function _(){return a.default.get("admin/order/delivery")}},4030:function(e,t,i){"use strict";i.r(t);var n=i("0a48"),a=i("e776");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("f299");var o,s=i("f0c5"),d=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"359ab764",null,!1,n["a"],o);t["default"]=d.exports},a40c:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=n(i("1da1")),r=i("121a"),o=(i("3ab0"),{name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:"express",title:"发货",key:1},{type:"send",title:"送货",key:2},{type:"fictitious",title:"无需物流",key:3}],expressType:[{title:"手动填写",key:1},{title:"电子面单打印",key:2}],curExpress:1,active:0,order_id:"",delivery:[],logistics:[],delivery_type:"1",delivery_name:"",delivery_id:"",seIndex:0,expIndex:0,expTemp:[],to_name:"",to_tel:"",to_addr:"",postPeople:[],postIndex:0,fictitious_content:"",isWeixin:this.$wechat.isWeixin()}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.getIndex(),this.getLogistics(),this.orderDeliveryInfo(),this.geTorderOrderDelivery()},methods:{scanCode:function(){var e=this;this.$wechat.isWeixin()&&this.$wechat.wechatEvevt("scanQRCode",{needResult:1,scanType:["barCode"]}).then((function(t){e.delivery_id=t.resultStr}))},previewImage:function(){uni.previewImage({urls:[this.expTemp[this.expIndex].pic],success:function(){},fail:function(e){}})},geTorderOrderDelivery:function(){var e=this;(0,r.orderOrderDelivery)().then((function(t){e.postPeople=t.data}))},bindPostChange:function(e){this.postIndex=e.detail.value},changeExpTpe:function(e,t){this.curExpress=e.key,this.getLogistics(t||"")},changeType:function(e,t){this.active=t,this.delivery_type=e.key},getIndex:function(){var e=this;(0,r.getAdminOrderDelivery)(e.order_id).then((function(t){e.delivery=t.data}),(function(t){e.$util.Tips({title:t})}))},getLogistics:function(e){var t=this;(0,r.getLogistics)({status:e}).then((function(e){t.logistics=e.data,t.getExpTemp(e.data[0].code)}),(function(e){t.$util.Tips({title:e})}))},saveInfo:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n,a,r,o,s,d,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,n=i.delivery_type,a=i.logistics[i.seIndex].name,r=i.delivery_id,i.delivery_name,o={},o.delivery_type=a,o.delivery_code=i.logistics[i.seIndex].code,o.delivery_name=i.logistics[i.seIndex].id,o.type=i.active+1,1!=n||1!=e.curExpress){t.next=11;break}if(r){t.next=8;break}return t.abrupt("return",e.$util.Tips({title:"请填写快递单号"}));case 8:o.express_record_type=i.curExpress,o.delivery_id=r,i.setInfo(o);case 11:if(1!=n||2!=e.curExpress){t.next=28;break}if(i.to_name){t.next=14;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人姓名"}));case 14:if(i.to_tel){t.next=16;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人手机号码"}));case 16:if(/^1[3456789]\d{9}$/.test(i.to_tel)){t.next=18;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人手机号码"}));case 18:if(i.to_addr){t.next=20;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人地址"}));case 20:if(0!=i.expTemp.length){t.next=22;break}return t.abrupt("return",e.$util.Tips({title:"请选择电子面单"}));case 22:o.express_record_type=i.curExpress,o.to_name=i.to_name,o.to_tel=i.to_tel,o.to_addr=i.to_addr,o.express_temp_id=i.expTemp[i.expIndex].temp_id,i.setInfo(o);case 28:2==n&&(s=e.postPeople[e.postIndex],d={},d.type=i.delivery_type,d.sh_delivery_name=s.wx_name,d.sh_delivery_id=s.phone,d.sh_delivery_uid=s.uid,i.setInfo(d)),3==n&&(l={},l.type=i.delivery_type,l.fictitious_content=i.fictitious_content,i.setInfo(l));case 30:case"end":return t.stop()}}),t)})))()},setInfo:function(e){var t=this;(0,r.setAdminOrderDelivery)(t.delivery.id,e).then((function(e){t.$util.Tips({title:e.msg,icon:"success",mask:!0}),setTimeout((function(e){uni.navigateBack()}),2e3)}),(function(e){t.$util.Tips({title:e})}))},bindPickerChange:function(e){this.seIndex=e.detail.value,this.getExpTemp(this.logistics[e.detail.value].code)},bindTempChange:function(e){this.expIndex=e.detail.value},getExpTemp:function(e){var t=this;(0,r.orderExportTemp)({com:e}).then((function(e){t.expTemp=e.data.data}))},orderDeliveryInfo:function(){var e=this;(0,r.orderDeliveryInfo)().then((function(t){e.to_name=t.data.to_name,e.to_tel=t.data.to_tel,e.to_addr=t.data.to_add}))}}});t.default=o},e703:function(e,t,i){var n=i("f726");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("316e2e7a",n,!0,{sourceMap:!1,shadowMode:!1})},e776:function(e,t,i){"use strict";i.r(t);var n=i("a40c"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},f21f:function(e,t,i){e.exports=i.p+"static/img/line.05bf1c84.jpg"},f299:function(e,t,i){"use strict";var n=i("e703"),a=i.n(n);a.a},f726:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*发货*/.deliver-goods header[data-v-359ab764]{width:100%;background-color:#fff;margin-top:%?10?%}.deliver-goods header .order-num[data-v-359ab764]{padding:0 %?30?%;border-bottom:1px solid #f5f5f5;height:%?67?%}.deliver-goods header .order-num .num[data-v-359ab764]{width:%?430?%;font-size:%?26?%;color:#282828;position:relative}.deliver-goods header .order-num .num[data-v-359ab764]:after{position:absolute;content:"";width:1px;height:%?30?%;background-color:#ddd;top:50%;margin-top:%?-15?%;right:0}.deliver-goods header .order-num .name[data-v-359ab764]{width:%?260?%;font-size:%?26?%;color:#282828;text-align:center}.deliver-goods header .order-num .name .iconfont[data-v-359ab764]{font-size:%?35?%;color:#477ef3;vertical-align:middle;margin-right:%?10?%}.deliver-goods header .address[data-v-359ab764]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?30?%}.deliver-goods header .address .name[data-v-359ab764]{font-size:%?34?%;color:#282828;margin-bottom:%?10?%}.deliver-goods header .address .name .phone[data-v-359ab764]{margin-left:%?40?%}.deliver-goods header .line[data-v-359ab764]{width:100%;height:%?3?%}.deliver-goods header .line uni-image[data-v-359ab764]{width:100%;height:100%;display:block}.deliver-goods .wrapper[data-v-359ab764]{width:100%;background-color:#fff}.deliver-goods .wrapper .item[data-v-359ab764]{border-bottom:1px solid #f0f0f0;padding:0 %?30?%;height:%?96?%;font-size:%?32?%;color:#282828;position:relative}.deliver-goods .wrapper .item .mode[data-v-359ab764]{width:%?460?%;height:100%;text-align:right}.deliver-goods .wrapper .item .mode .iconfont[data-v-359ab764]{font-size:%?30?%;margin-left:%?13?%}.deliver-goods .wrapper .item .mode .goods ~ .goods[data-v-359ab764]{margin-left:%?30?%}.deliver-goods .wrapper .item .mode .goods[data-v-359ab764]{color:#bbb}.deliver-goods .wrapper .item .mode .goods.on[data-v-359ab764]{color:#477ef3}.deliver-goods .wrapper .item .icon-up[data-v-359ab764]{position:absolute;font-size:%?35?%;color:#2c2c2c;right:%?30?%}.deliver-goods .wrapper .item select[data-v-359ab764]{direction:rtl;padding-right:%?60?%;position:relative;z-index:2}.deliver-goods .wrapper .item uni-input[data-v-359ab764]::-webkit-input-placeholder{color:#bbb}.deliver-goods .wrapper .item uni-input[data-v-359ab764]::placeholder{color:#bbb}.deliver-goods .confirm[data-v-359ab764]{font-size:%?32?%;color:#fff;width:100%;height:%?100?%;background-color:#477ef3;text-align:center;line-height:%?100?%;position:fixed;bottom:0}.select-box[data-v-359ab764]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}.select-box .pickerBox[data-v-359ab764]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;width:100%;height:100%}.look[data-v-359ab764]{margin-left:%?20?%;color:#1890ff}.textarea[data-v-359ab764]{display:block;min-height:%?192?%;padding:%?30?%}.icon-xiangji[data-v-359ab764]{font-size:%?35?%;color:#477ef3}.trip[data-v-359ab764]{font-size:%?22?%;color:#ccc;padding:%?6?% %?10?%}',""]),e.exports=t}}]);