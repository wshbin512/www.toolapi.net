(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-activity-index"],{"0228":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-footer[data-v-30ad9c36]{position:fixed;bottom:0;z-index:30;display:flex;align-items:center;width:100%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-30ad9c36]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column}.page-footer .foot-item uni-image[data-v-30ad9c36]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-30ad9c36]{font-size:%?24?%}',""]),t.exports=e},"08a2":function(t,e,n){var i=n("6a50");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7ff1e9e2",i,!0,{sourceMap:!1,shadowMode:!1})},2288:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{style:{height:t.footHeight+"px"}}),n("v-uni-view",[n("v-uni-view",{staticClass:"page-footer",style:{"background-color":t.configData.bgColor.color[0].item},attrs:{id:"target"}},t._l(t.configData.menuList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"foot-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goRouter(e)}}},[e.link==t.activeRouter?[n("v-uni-image",{attrs:{src:e.imgList[0]}}),n("v-uni-view",{staticClass:"txt",style:{color:t.configData.activeTxtColor.color[0].item}},[t._v(t._s(e.name))])]:[n("v-uni-image",{attrs:{src:e.imgList[1]}}),n("v-uni-view",{staticClass:"txt",style:{color:t.configData.txtColor.color[0].item}},[t._v(t._s(e.name))])]],2)})),1)],1)],1)},a=[]},"282c":function(t,e,n){"use strict";n.r(e);var i=n("a551"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"2b06":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("bf67"),a=i(n("5ad4")),u=(getApp(),{components:{pageFooter:a.default},data:function(){return{bastList:[],limit:10,page:1,loading:!1,loadend:!1,sysHeight:0,alias:"activity"}},onLoad:function(){var t=this;t.sysHeight=uni.getSystemInfoSync().statusBarHeight+"px",t.getAdvertise(),uni.setNavigationBarTitle({title:"活动"})},methods:{openSubcribe:function(e){t("log","跳转外链",e," at pages/activity/activity/index.vue:65"),uni.navigateTo({url:"/pages/annex/web_view/index?url=".concat(e.url)})},getAdvertise:function(e){var n=this;n.loading||n.loaded||(n.loading=!0,uni.showLoading({title:"数据加载中"}),(0,o.getAdvertise)({alias:n.alias,page:n.page,limit:n.limit}).then((function(e){t("log","请求广告成功",e.data," at pages/activity/activity/index.vue:90"),n.loading=!1,n.loaded=e.data.length<10,n.page++,n.bastList=n.bastList.concat(e.data),uni.hideLoading()})).catch((function(e){t("log","请求广告失败",e," at pages/activity/activity/index.vue:97"),uni.hideLoading(),n.$util.Tips({title:e})})))}},onPullDownRefresh:function(){},onReachBottom:function(){this.getAdvertise()}});e.default=u}).call(this,n("0de9")["log"])},"2e58":function(t,e,n){"use strict";n.r(e);var i=n("2b06"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},4530:function(t,e,n){"use strict";var i=n("08a2"),o=n.n(i);o.a},"5ad4":function(t,e,n){"use strict";n.r(e);var i=n("2288"),o=n("282c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6629");var u,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"30ad9c36",null,!1,i["a"],u);e["default"]=c.exports},6629:function(t,e,n){"use strict";var i=n("dd53"),o=n.n(i);o.a},"6a50":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".header[data-v-520f7be6]{height:%?120?%;line-height:%?120?%;padding:0 %?30?%;background:linear-gradient(90deg,#ff8d1a 50%,#ff8d1a);color:#fff;font-size:%?32?%;font-weight:700}.group-list .list[data-v-520f7be6]{margin-top:%?30?%}.group-list .list .item[data-v-520f7be6]{width:%?690?%;height:%?208?%;background-color:#fff;border-radius:%?6?%;box-sizing:border-box;margin:0 auto %?20?% auto}.group-list .list .item .pictrue[data-v-520f7be6]{width:%?690?%;height:%?208?%}.group-list .list .item .pictrue uni-image[data-v-520f7be6]{width:100%;height:100%;border-radius:%?6?%}",""]),t.exports=e},"6deb":function(t,e,n){"use strict";n.r(e);var i=n("98ba"),o=n("2e58");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("4530");var u,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"520f7be6",null,!1,i["a"],u);e["default"]=c.exports},"98ba":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-uni-view",{staticClass:"group-list"},[n("v-uni-view",{staticClass:"header acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"title"}),n("v-uni-view",{staticClass:"title"},[t._v("活动")]),n("v-uni-view",{staticClass:"title"})],1),n("v-uni-view",{staticClass:"list"},[t._l(t.bastList,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"item acea-row row-between-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openSubcribe(e)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.images}})],1)],1)]}))],2)],1),n("pageFooter")],1)},a=[]},a551:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5530")),a=n("26cb"),u=n("1c58"),r={name:"pageFooter",props:{curTitle:{type:String|Number}},computed:(0,o.default)({},(0,a.mapState)({configData:function(t){return t.app.pageFooter}})),watch:{configData:{handler:function(t,e){var n=this,i=uni.createSelectorQuery().in(this);this.newData=t,this.$nextTick((function(){i.select("#target").boundingClientRect((function(t){n.footHeight=t.height+20})).exec()}))},deep:!0}},created:function(){var t=this;(0,u.getNavigation)().then((function(e){uni.setStorageSync("pageFoot",e.data),t.$store.commit("FOOT_UPLOAD",e.data)}))},mounted:function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e,this.newData=this.$store.state.app.pageFooter},data:function(){return{newData:{},activeRouter:"/",footHeight:0}},methods:{goRouter:function(t){t.name!=this.curTitle&&uni.reLaunch({url:t.link})}}};e.default=r},bf67:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndex=a,e.getSystem=u,e.getIndexData=r,e.getLogo=c,e.setFormId=s,e.setCouponReceive=f,e.getCoupons=l,e.getUserCoupons=d,e.getNewCoupon=g,e.getArticleCategoryList=v,e.getArticleList=h,e.getArticleHotList=p,e.getArticleBannerList=b,e.getArticleDetails=m,e.loginMobile=w,e.verifyCode=y,e.registerVerify=A,e.phoneRegister=x,e.phoneRegisterReset=_,e.phoneLogin=C,e.switchH5Login=L,e.bindingPhone=k,e.bindingUserPhone=D,e.logout=R,e.getTemlIds=S,e.pink=P,e.getCity=T,e.getLiveList=F,e.getDiy=H,e.follow=M,e.updatePhone=O,e.getCouponV2=$,e.getCouponNewUser=B,e.category=I,e.searchList=j,e.clearSearch=z,e.siteConfig=N,e.getAdvertise=U,e.setBrowse=E;var o=i(n("7833"));function a(){return o.default.get("index",{},{noAuth:!0})}function u(t){return o.default.get("system",t,{noAuth:!0})}function r(){return o.default.get("v2/index",{},{noAuth:!0})}function c(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function s(t){return o.default.post("wechat/set_form_id",{formId:t})}function f(t){return o.default.post("coupon/receive",{couponId:t})}function l(t){return o.default.get("v2/coupons",t,{noAuth:!0})}function d(t,e){return o.default.get("coupons/user/"+t,e)}function g(){return o.default.get("v2/new_coupon")}function v(){return o.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return o.default.get("article/hot/list",{},{noAuth:!0})}function b(){return o.default.get("article/banner/list",{},{noAuth:!0})}function m(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function w(t){return o.default.post("login/mobile",t,{noAuth:!0})}function y(){return o.default.get("verify_code",{},{noAuth:!0})}function A(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function x(t){return o.default.post("register",t,{noAuth:!0})}function _(t){return o.default.post("register/reset",t,{noAuth:!0})}function C(t){return o.default.post("login",t,{noAuth:!0})}function L(){return o.default.post("switch_h5",{from:"wechat"})}function k(t){return o.default.post("binding",t,{noAuth:!0})}function D(t){return o.default.post("user/binding",t)}function R(){return o.default.get("logout")}function S(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function P(){return o.default.get("pink",{},{noAuth:!0})}function T(){return o.default.get("city_list",{},{noAuth:!0})}function F(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function H(t){return o.default.get("diy/get_diy/"+t,{},{noAuth:!0})}function M(){return o.default.get("wechat/follow",{},{noAuth:!0})}function O(t){return o.default.post("user/updatePhone",t,{noAuth:!0})}function $(){return o.default.get("v2/get_today_coupon",{},{noAuth:!0})}function B(){return o.default.get("v2/new_coupon",{},{noAuth:!0})}function I(t){return o.default.get("category",t,{noAuth:!0})}function j(t){return o.default.get("v2/user/search_list",t,{noAuth:!0})}function z(){return o.default.get("v2/user/clean_search")}function N(){return o.default.get("site_config",{},{noAuth:!0})}function U(t){return o.default.get("advertise",t,{noAuth:!0})}function E(t){return o.default.get("setBrowse",t,{noAuth:!0})}},dd53:function(t,e,n){var i=n("0228");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("b816357a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);