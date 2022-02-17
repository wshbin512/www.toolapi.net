(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-217ea303"],{"31da":function(t,e,a){"use strict";a("b1e7")},"6da2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/admin/marketing/store_coupon_issue/index"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"mr20",domProps:{textContent:t._s(t.$route.params.id?"编辑优惠券":"添加优惠券")}})],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{attrs:{model:t.formData,"label-width":150}},[a("FormItem",{attrs:{label:"优惠券名称"}},[a("Input",{attrs:{placeholder:"请输入优惠券名称"},model:{value:t.formData.coupon_title,callback:function(e){t.$set(t.formData,"coupon_title",e)},expression:"formData.coupon_title"}})],1),a("FormItem",{attrs:{label:"发送方式"}},[a("RadioGroup",{model:{value:t.formData.receive_type,callback:function(e){t.$set(t.formData,"receive_type",e)},expression:"formData.receive_type"}},[a("Radio",{attrs:{label:1}},[t._v("手动领取")]),a("Radio",{attrs:{label:2}},[t._v("新人券")]),a("Radio",{attrs:{label:3}},[t._v("赠送券")]),a("Radio",{attrs:{label:4}},[t._v("会员券")])],1)],1),a("FormItem",{attrs:{label:"优惠劵类型"}},[a("RadioGroup",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("Radio",{attrs:{label:0}},[t._v("通用券")]),a("Radio",{attrs:{label:1}},[t._v("品类券")]),a("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:2===t.formData.type,expression:"formData.type === 2"}]},[t._l(t.productList,(function(e){return a("div",{key:e.product_id,staticClass:"upload-list"},[a("img",{attrs:{src:e.image}}),a("Icon",{attrs:{type:"ios-close-circle",size:"16"},on:{click:function(a){return t.remove(e.product_id)}}})],1)})),a("Icon",{attrs:{type:"ios-camera-outline",size:"26"},on:{click:function(e){t.modals=!0}}}),a("div",{staticClass:"info"},[t._v("选择商品")])],2),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:1===t.formData.type,expression:"formData.type === 1"}]},[a("Select",{staticStyle:{width:"320px"},model:{value:t.formData.category_id,callback:function(e){t.$set(t.formData,"category_id",e)},expression:"formData.category_id"}},t._l(t.categoryList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.cate_name))])})),1),a("div",{staticClass:"info"},[t._v("选择商品的品类")])],1),a("FormItem",{attrs:{label:"优惠券面值"}},[a("InputNumber",{attrs:{min:1,max:1e8},model:{value:t.formData.coupon_price,callback:function(e){t.$set(t.formData,"coupon_price",e)},expression:"formData.coupon_price"}})],1),a("FormItem",{attrs:{label:"使用门槛"}},[a("RadioGroup",{model:{value:t.isMinPrice,callback:function(e){t.isMinPrice=e},expression:"isMinPrice"}},[a("Radio",{attrs:{label:0}},[t._v("无门槛")]),a("Radio",{attrs:{label:1}},[t._v("有门槛")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.isMinPrice,expression:"isMinPrice"}]},[a("InputNumber",{attrs:{min:1,max:1e8},model:{value:t.formData.use_min_price,callback:function(e){t.$set(t.formData,"use_min_price",e)},expression:"formData.use_min_price"}}),a("div",{staticClass:"info"},[t._v("填写优惠券的最低消费金额")])],1),a("FormItem",{attrs:{label:"使用时间"}},[a("RadioGroup",{model:{value:t.isCouponTime,callback:function(e){t.isCouponTime=e},expression:"isCouponTime"}},[a("Radio",{attrs:{label:1}},[t._v("天数")]),a("Radio",{attrs:{label:0}},[t._v("时间段")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.isCouponTime,expression:"isCouponTime"}],attrs:{label:""}},[a("InputNumber",{attrs:{min:1,precision:0},model:{value:t.formData.coupon_time,callback:function(e){t.$set(t.formData,"coupon_time",e)},expression:"formData.coupon_time"}}),a("div",{staticClass:"info"},[t._v("领取后多少天内有效")])],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.isCouponTime,expression:"!isCouponTime"}],attrs:{label:""}},[a("DatePicker",{attrs:{value:t.datetime1,editable:!1,type:"datetimerange",placeholder:"领取后在这个时间段内可以使用"},on:{"on-change":t.dateChange}})],1),a("FormItem",{attrs:{label:"领取时间"}},[a("RadioGroup",{model:{value:t.isReceiveTime,callback:function(e){t.isReceiveTime=e},expression:"isReceiveTime"}},[a("Radio",{attrs:{label:1}},[t._v("限时")]),a("Radio",{attrs:{label:0}},[t._v("不限时")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.isReceiveTime,expression:"isReceiveTime"}],attrs:{label:""}},[a("DatePicker",{attrs:{value:t.datetime2,type:"datetimerange",placeholder:"在这个时间段内可领取"},on:{"on-change":t.timeChange}})],1),a("FormItem",{attrs:{label:"是否限量"}},[a("RadioGroup",{model:{value:t.formData.is_permanent,callback:function(e){t.$set(t.formData,"is_permanent",e)},expression:"formData.is_permanent"}},[a("Radio",{attrs:{label:0}},[t._v("限量")]),a("Radio",{attrs:{label:1}},[t._v("不限量")])],1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.formData.is_permanent,expression:"!formData.is_permanent"}],attrs:{label:""}},[a("InputNumber",{attrs:{min:1,max:1e8,precision:0},model:{value:t.formData.total_count,callback:function(e){t.$set(t.formData,"total_count",e)},expression:"formData.total_count"}}),a("div",{staticClass:"info"},[t._v("填写优惠券的发布数量")])],1),a("FormItem",{attrs:{label:"状态"}},[a("RadioGroup",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("Radio",{attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary",disabled:t.disabled},on:{click:t.save}},[t._v("立即创建")])],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.modals?a("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)},o=[],n=a("4838"),i=a.n(n),c=a("7736"),s=a("c4ad"),u=a("b7be");function m(t,e,a,r,o,n,i){try{var c=t[n](i),s=c.value}catch(u){return void a(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(r,o){var n=t.apply(e,a);function i(t){m(n,r,o,i,c,"next",t)}function c(t){m(n,r,o,i,c,"throw",t)}i(void 0)}))}}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var _={name:"storeCouponCreate",components:{goodsList:s["default"]},data:function(){return{disabled:!1,formData:{coupon_title:"",coupon_price:0,type:0,use_min_price:0,coupon_time:1,start_use_time:0,end_use_time:0,start_time:0,end_time:0,receive_type:1,is_permanent:1,total_count:1,sort:0,status:1,product_id:"",category_id:0},categoryList:[],productList:[],isMinPrice:0,isCouponTime:1,isReceiveTime:0,modals:!1,datetime1:[],datetime2:[]}},computed:f({},Object(c["e"])("admin/layout",["isMobile"])),created:function(){this.getCategoryList(),this.$route.params.id&&this.getCouponDetail()},methods:{getCategoryList:function(){var t=this;Object(u["l"])(1).then(function(){var e=d(i.a.mark((function e(a){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.data.forEach((function(t){t.cate_name="".concat(t.html).concat(t.cate_name)})),t.categoryList=a.data;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getCouponDetail:function(){var t=this;Object(u["n"])(this.$route.params.id).then((function(e){var a=e.data;t.formData.coupon_title=a.coupon_title,t.formData.type=a.type,t.formData.category_id=a.category_id,t.formData.coupon_price=parseFloat(a.coupon_price),t.formData.use_min_price=parseFloat(a.use_min_price),t.formData.coupon_time=a.coupon_time,t.formData.receive_type=a.receive_type,t.formData.is_permanent=a.is_permanent,t.formData.status=a.status,t.formData.product_id=a.product_id,t.formData.start_time=a.start_time,t.formData.end_time=a.end_time,t.formData.total_count=a.total_count,t.formData.sort=a.sort,"productInfo"in a&&(t.productList=a.productInfo),a.coupon_time||(t.isCouponTime=0,t.datetime1=[1e3*a.start_use_time,1e3*a.end_use_time],t.formData.start_use_time=t.makeDate(1e3*a.start_use_time),t.formData.end_use_time=t.makeDate(1e3*a.end_use_time)),a.start_time&&(t.isReceiveTime=1,t.datetime2=[1e3*a.start_time,1e3*a.end_time],t.formData.start_time=t.makeDate(1e3*a.start_time),t.formData.end_time=t.makeDate(1e3*a.end_time)),"0.00"!==a.use_min_price&&(t.isMinPrice=1)})).catch((function(e){t.$Message.error(e.msg)}))},makeDate:function(t){var e=new Date(t),a=e.getFullYear()+"-",r=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",o=e.getDate()<10?"0"+e.getDate():e.getDate(),n=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",i=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",c=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return a+r+o+" "+n+i+c},save:function(){var t=this;if(!this.formData.coupon_title)return this.$Message.error("请输入优惠券名称");if(2===this.formData.type&&!this.formData.product_id)return this.$Message.error("请选择商品");if(1===this.formData.type&&!this.formData.category_id)return this.$Message.error("请选择品类");if(this.formData.coupon_price<=0)return this.$Message.error("优惠券面值不能小于0");if(this.isMinPrice){if(this.formData.use_min_price<1)return this.$Message.error("优惠券最低消费不能小于0")}else this.formData.use_min_price=0;if(this.isCouponTime){if(this.formData.start_use_time=0,this.formData.end_use_time=0,this.formData.coupon_time<1)return this.$Message.error("使用有效期限不能小于1天")}else if(this.formData.coupon_time=0,!this.formData.start_use_time)return this.$Message.error("请选择使用有效期限");if(this.isReceiveTime){if(!this.formData.start_time)return this.$Message.error("请选择领取时间")}else this.formData.start_time=0,this.formData.end_time=0;if(this.formData.is_permanent)this.formData.total_count=0;else if(this.formData.total_count<1)return this.$Message.error("发布数量不能小于1");this.disabled=!1,Object(u["q"])(this.formData).then((function(e){t.disabled=!0,t.$Message.success(e.msg),setTimeout((function(){t.$router.push({path:"/admin/marketing/store_coupon_issue/index"})}),1e3)})).catch((function(e){t.$Message.error(e.msg)}))},dateChange:function(t){this.formData.start_use_time=t[0],this.formData.end_use_time=t[1]},timeChange:function(t){this.formData.start_time=t[0],this.formData.end_time=t[1]},unique:function(t){var e=new Map;return t.filter((function(t){return!e.has(t.product_id)&&e.set(t.product_id,1)}))},getProductId:function(t){var e=this;this.modals=!1,this.productList=this.unique(this.productList.concat(t)),this.formData.product_id="",this.productList.forEach((function(t){e.formData.product_id?e.formData.product_id+=",".concat(t.product_id):e.formData.product_id+="".concat(t.product_id)}))},cancel:function(){this.modals=!1},remove:function(t){for(var e=this,a=0;a<this.productList.length;a++)this.productList[a].product_id==t&&this.productList.splice(a,1);this.formData.product_id="",this.productList.forEach((function(t){e.formData.product_id?e.formData.product_id+=",".concat(t.product_id):e.formData.product_id+="".concat(t.product_id)}))}}},h=_,b=(a("31da"),a("5d22")),g=Object(b["a"])(h,r,o,!1,null,"0a7e79ce",null);e["default"]=g.exports},b1e7:function(t,e,a){},b7be:function(t,e,a){"use strict";a.d(e,"p",(function(){return o})),a.d(e,"m",(function(){return n})),a.d(e,"l",(function(){return i})),a.d(e,"q",(function(){return c})),a.d(e,"o",(function(){return s})),a.d(e,"r",(function(){return u})),a.d(e,"y",(function(){return m})),a.d(e,"z",(function(){return d})),a.d(e,"s",(function(){return l})),a.d(e,"n",(function(){return f})),a.d(e,"J",(function(){return p})),a.d(e,"c",(function(){return _})),a.d(e,"f",(function(){return h})),a.d(e,"e",(function(){return b})),a.d(e,"b",(function(){return g})),a.d(e,"a",(function(){return v})),a.d(e,"d",(function(){return D})),a.d(e,"i",(function(){return k})),a.d(e,"j",(function(){return O})),a.d(e,"F",(function(){return y})),a.d(e,"h",(function(){return j})),a.d(e,"g",(function(){return w})),a.d(e,"k",(function(){return x})),a.d(e,"w",(function(){return C})),a.d(e,"C",(function(){return T})),a.d(e,"B",(function(){return R})),a.d(e,"A",(function(){return P})),a.d(e,"D",(function(){return I})),a.d(e,"u",(function(){return M})),a.d(e,"v",(function(){return $})),a.d(e,"E",(function(){return F})),a.d(e,"x",(function(){return E})),a.d(e,"t",(function(){return G})),a.d(e,"K",(function(){return L})),a.d(e,"I",(function(){return N})),a.d(e,"G",(function(){return S})),a.d(e,"H",(function(){return H}));var r=a("b6bd");function o(t){return Object(r["a"])({url:"marketing/coupon/list",method:"get",params:t})}function n(t){return Object(r["a"])({url:"marketing/coupon/create/".concat(t),method:"get"})}function i(t){return Object(r["a"])({url:"product/category/tree/".concat(t),method:"get"})}function c(t){return Object(r["a"])({url:"marketing/coupon/save_coupon",method:"post",data:t})}function s(t){return Object(r["a"])({url:"marketing/coupon/".concat(t,"/edit"),method:"get"})}function u(t){return Object(r["a"])({url:"marketing/coupon/issue/".concat(t),method:"get"})}function m(t){return Object(r["a"])({url:"marketing/coupon/released",method:"get",params:t})}function d(t,e){return Object(r["a"])({url:"marketing/coupon/released/issue_log/".concat(t),method:"get",params:e})}function l(t){return Object(r["a"])({url:"marketing/coupon/status/".concat(t.id,"/").concat(t.status),method:"get"})}function f(t){return Object(r["a"])({url:"marketing/coupon/copy/".concat(t),method:"get"})}function p(t){return Object(r["a"])({url:"/marketing/coupon/user",method:"get",params:t})}function _(t){return Object(r["a"])({url:"marketing/bargain",method:"get",params:t})}function h(t){return Object(r["a"])({url:"marketing/bargain_list",method:"get",params:t})}function b(t){return Object(r["a"])({url:"marketing/bargain_list_info/".concat(t),method:"get"})}function g(t){return Object(r["a"])({url:"marketing/bargain/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"marketing/bargain/".concat(t.id),method:"POST",data:t})}function D(t){return Object(r["a"])({url:"marketing/bargain/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function k(t){return Object(r["a"])({url:"marketing/combination",method:"get",params:t})}function O(t){return Object(r["a"])({url:"marketing/combination/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function y(){return Object(r["a"])({url:"marketing/combination/statistics",method:"GET"})}function j(t){return Object(r["a"])({url:"marketing/combination/".concat(t),method:"get"})}function w(t){return Object(r["a"])({url:"marketing/combination/".concat(t.id),method:"POST",data:t})}function x(t){return Object(r["a"])({url:"marketing/combination/combine/list",method:"GET",params:t})}function C(t){return Object(r["a"])({url:"marketing/combination/order_pink/".concat(t),method:"GET"})}function T(t){return Object(r["a"])({url:"marketing/seckill",method:"GET",params:t})}function R(t){return Object(r["a"])({url:"marketing/seckill/".concat(t),method:"GET"})}function P(t){return Object(r["a"])({url:"marketing/seckill/".concat(t.id),method:"post",data:t})}function I(t){return Object(r["a"])({url:"marketing/seckill/set_status/".concat(t.id,"/").concat(t.status),method:"put"})}function M(t){return Object(r["a"])({url:"marketing/integral",method:"GET",params:t})}function $(t){return Object(r["a"])({url:"marketing/integral/statistics",method:"GET",params:t})}function F(){return Object(r["a"])({url:"marketing/seckill/time_list",method:"GET"})}function E(t,e){return Object(r["a"])({url:"product/product/attrs/".concat(t,"/").concat(e),method:"GET"})}function G(t){return Object(r["a"])({url:"marketing/coupon/released/".concat(t),method:"DELETE"})}function L(t){return Object(r["a"])({url:"export/userPoint",method:"get",params:t})}function N(t){return Object(r["a"])({url:"export/storeBargain",method:"get",params:t})}function S(t){return Object(r["a"])({url:"export/storeCombination",method:"get",params:t})}function H(t){return Object(r["a"])({url:"export/storeSeckill",method:"get",params:t})}}}]);