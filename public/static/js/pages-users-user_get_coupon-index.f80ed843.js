(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_get_coupon-index"],{"05b9":function(t,e,n){"use strict";var i=n("eb33"),o=n.n(i);o.a},"0ed3":function(t,e,n){"use strict";n.r(e);var i=n("82af"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},"3eef":function(t,e,n){t.exports=n.p+"static/img/noCoupon.cca04173.png"},"48cb":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".nav[data-v-12efab07]{position:fixed;top:0;left:0;width:100%;height:%?106?%;background-color:#fff;font-size:%?30?%;color:#999;z-index:9}.nav .acea-row[data-v-12efab07]{border-top:%?5?% solid transparent;border-bottom:%?5?% solid transparent;cursor:pointer}.nav .acea-row.on[data-v-12efab07]{border-bottom-color:#e93323;color:#282828}.coupon-list .pic-num[data-v-12efab07]{color:#fff;font-size:%?24?%}.coupon-list .item .text .condition[data-v-12efab07]{display:flex;align-items:center}.coupon-list .item .text .condition .name[data-v-12efab07]{font-size:%?26?%;font-weight:500}.coupon-list .item .text .condition .pic[data-v-12efab07]{width:%?30?%;height:%?30?%;display:block;margin-right:%?10?%;display:inline-block;vertical-align:middle}.condition .line-title[data-v-12efab07]{width:%?70?%;height:%?32?%!important;line-height:%?30?%;text-align:center;box-sizing:border-box;background:#fff7f7;border:1px solid #e83323;opacity:1;border-radius:%?20?%;font-size:%?18?%!important;color:#e83323;margin-right:%?12?%;text-align:center;display:inline-block;vertical-align:middle}.condition .line-title.bg-color-huic[data-v-12efab07]{border-color:#bbb!important;color:#bbb!important;background-color:#f5f5f5!important}",""]),t.exports=e},"82af":function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u=i(n("ade3")),a=n("8573"),s=n("5f0a"),r=n("26cb"),c=(o={components:{},data:function(){return{couponsList:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:"通用券",count:0},{type:1,name:"品类券",count:0},{type:2,name:"商品券",count:0}],count:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,s.toLogin)()},deep:!0},(0,u.default)(o,"onLoad",(function(){this.isLogin?this.getUseCoupons():(0,s.toLogin)()})),(0,u.default)(o,"onReachBottom",(function(){this.getUseCoupons()})),(0,u.default)(o,"methods",{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,e){var n=this,i=n.couponsList;(0,a.setCouponReceive)(t).then((function(t){i[e].is_use=!0,n.$set(n,"couponsList",i),n.$util.Tips({title:"领取成功"})})).catch((function(t){return n.$util.Tips({title:t})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle="加载更多",void(0,a.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(e){var n=e.data.list,i=n.length<t.limit,o=t.$util.SplitArray(n,t.couponsList);e.data.count.forEach((function(e,n){t.navList[n].count=e,e&&t.count++})),t.$set(t,"couponsList",o),t.loadend=i,t.loading=!1,t.loadTitle=i?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}),o);e.default=c},8573:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=u,e.getLogo=a,e.setFormId=s,e.setCouponReceive=r,e.getCoupons=c,e.getUserCoupons=l,e.getNewCoupon=f,e.getArticleCategoryList=d,e.getArticleList=p,e.getArticleHotList=g,e.getArticleBannerList=v,e.getArticleDetails=h,e.loginMobile=_,e.verifyCode=b,e.registerVerify=w,e.phoneRegister=m,e.phoneRegisterReset=y,e.phoneLogin=C,e.switchH5Login=A,e.bindingPhone=L,e.bindingUserPhone=x,e.logout=k,e.getTemlIds=T,e.pink=U,e.getCity=$,e.getLiveList=z,e.getDiy=P,e.follow=R,e.updatePhone=I,e.getCouponV2=M,e.getCouponNewUser=S,e.category=j,e.searchList=E,e.clearSearch=D,e.siteConfig=O;var o=i(n("8d0b"));function u(){return o.default.get("v2/index",{},{noAuth:!0})}function a(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function s(t){return o.default.post("wechat/set_form_id",{formId:t})}function r(t){return o.default.post("coupon/receive",{couponId:t})}function c(t){return o.default.get("v2/coupons",t,{noAuth:!0})}function l(t,e){return o.default.get("coupons/user/"+t,e)}function f(){return o.default.get("v2/new_coupon")}function d(){return o.default.get("article/category/list",{},{noAuth:!0})}function p(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function g(){return o.default.get("article/hot/list",{},{noAuth:!0})}function v(){return o.default.get("article/banner/list",{},{noAuth:!0})}function h(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function _(t){return o.default.post("login/mobile",t,{noAuth:!0})}function b(){return o.default.get("verify_code",{},{noAuth:!0})}function w(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function m(t){return o.default.post("register",t,{noAuth:!0})}function y(t){return o.default.post("register/reset",t,{noAuth:!0})}function C(t){return o.default.post("login",t,{noAuth:!0})}function A(){return o.default.post("switch_h5",{from:"wechat"})}function L(t){return o.default.post("binding",t,{noAuth:!0})}function x(t){return o.default.post("user/binding",t)}function k(){return o.default.get("logout")}function T(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function U(){return o.default.get("pink",{},{noAuth:!0})}function $(){return o.default.get("city_list",{},{noAuth:!0})}function z(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function P(t){return o.default.get("diy/get_diy/"+t,{},{noAuth:!0})}function R(){return o.default.get("wechat/follow",{},{noAuth:!0})}function I(t){return o.default.post("user/updatePhone",t,{noAuth:!0})}function M(){return o.default.get("v2/get_today_coupon",{},{noAuth:!0})}function S(){return o.default.get("v2/new_coupon",{},{noAuth:!0})}function j(t){return o.default.get("category",t,{noAuth:!0})}function E(t){return o.default.get("v2/user/search_list",t,{noAuth:!0})}function D(){return o.default.get("v2/user/clean_search")}function O(){return o.default.get("site_config",{},{noAuth:!0})}},bc3e:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.count>1?i("v-uni-view",{staticClass:"acea-row row-around nav"},[t._l(t.navList,(function(e){return[e.count?i("v-uni-view",{key:e.type,class:["acea-row","row-middle",t.type===e.type?"on":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setType(e.type)}}},[t._v(t._s(e.name))]):t._e()]}))],2):t._e(),t.count>1?i("v-uni-view",{staticStyle:{height:"106rpx"}}):t._e(),t.couponsList.length?i("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item acea-row row-center-wrapper",class:{svip:4===e.receive_type}},[i("v-uni-view",{staticClass:"money",class:e.is_use?"moneyGray":""},[i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),e.use_min_price>0?i("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")]):i("v-uni-view",{staticClass:"pic-num"},[t._v("无门槛券")])],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"condition"},[i("v-uni-view",{staticClass:"name line2"},[0===e.type?i("v-uni-view",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"bg-color-huic":""},[t._v("通用劵")]):1===e.type?i("v-uni-view",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"bg-color-huic":""},[t._v("品类券")]):i("v-uni-view",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"bg-color-huic":""},[t._v("商品券")]),4===e.receive_type?i("v-uni-image",{staticClass:"pic",attrs:{src:"/static/images/fvip.png"}}):t._e(),t._v(t._s(e.title))],1)],1),i("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[e.coupon_time?i("v-uni-view",[t._v("领取后"+t._s(e.coupon_time)+"天内可用")]):i("v-uni-view",[t._v(t._s(e.start_time?e.start_time+"-":"")+t._s(e.end_time))]),1==e.is_use?i("v-uni-view",{staticClass:"bnt gray"},[t._v("已领取")]):2==e.is_use?i("v-uni-view",{staticClass:"bnt gray"},[t._v("已领完")]):i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getCoupon(e.id,n)}}},[t._v("立即领取")])],1)],1)],1)})),1):t._e(),t.couponsList.length?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t.couponsList.length||2!==t.page?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:n("3eef")}})],1)],1)],1)},u=[]},c7c7:function(t,e,n){"use strict";n.r(e);var i=n("bc3e"),o=n("0ed3");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("05b9");var a,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"12efab07",null,!1,i["a"],a);e["default"]=r.exports},eb33:function(t,e,n){var i=n("48cb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3505b044",i,!0,{sourceMap:!1,shadowMode:!1})}}]);