(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-users-login-index"],{"0f68":function(t,e,n){var i=n("1aca");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("998e7fbe",i,!0,{sourceMap:!1,shadowMode:!1})},"1aca":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zh_text_white[data-v-7596adf0]{color:#fff}.zh_text_black[data-v-7596adf0]{color:#fff}",""]),t.exports=e},"66f0":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={zhihuaiDigitJump:n("7f67").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"coupon-window",class:1==t.window?"on":"",style:"background-image: url("+t.bgImage+")"}),i("v-uni-view",{staticClass:"bottom",attrs:{hidden:0==t.window}},[i("v-uni-image",{attrs:{src:n("9879")}}),i("v-uni-view",{staticClass:"b-t"},[t._v("欢迎来到印度最多的影视UTV平台")]),i("v-uni-view",{staticClass:"list acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"number"},[i("zhihuai-DigitJump",{attrs:{digitTo:t.regNum,digitFiex:0}})],1),i("v-uni-view",[t._v("注册会员人数")])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"number"},[i("zhihuai-DigitJump",{attrs:{digitTo:t.lineNum,digitFiex:0}})],1),i("v-uni-view",[t._v("在线会员人数")])],1)],1)],1),i("v-uni-view",{staticClass:"times",attrs:{hidden:0==t.window}},[t._v(t._s(t.times)+"s 跳过")]),i("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"true",hidden:0==t.window}})],1)},r=[]},"76fa":function(t,e,n){"use strict";n.r(e);var i=n("c0c0"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"79d1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:[t.textColor]},[t._v(t._s(t.digit))])},r=[]},"7f67":function(t,e,n){"use strict";n.r(e);var i=n("79d1"),o=n("76fa");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("bb64");var u,a=n("f0c5"),d=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"7596adf0",null,!1,i["a"],u);e["default"]=d.exports},"8c52":function(t,e,n){"use strict";n.r(e);var i=n("bb80"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},9879:function(t,e,n){t.exports=n.p+"static/img/logo2.739b2989.png"},"9e26":function(t,e,n){"use strict";n.r(e);var i=n("66f0"),o=n("8c52");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("bfd4");var u,a=n("f0c5"),d=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"569b396d",null,!1,i["a"],u);e["default"]=d.exports},bb64:function(t,e,n){"use strict";var i=n("0f68"),o=n.n(i);o.a},bb80:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{window:{type:Boolean|String|Number,default:!1},times:{type:Boolean|String|Number,default:!1},regNum:{type:Number,default:!1},lineNum:{type:Number,default:!1},bgImage:{type:String,default:""}},data:function(){return{}},methods:{close:function(){this.$emit("onColse")}}};e.default=i},bd5e:function(t,e,n){var i=n("d863");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("bbd2c9fc",i,!0,{sourceMap:!1,shadowMode:!1})},bf67:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndex=r,e.getIndexData=u,e.getLogo=a,e.setFormId=d,e.setCouponReceive=s,e.getCoupons=c,e.getUserCoupons=f,e.getNewCoupon=l,e.getArticleCategoryList=g,e.getArticleList=h,e.getArticleHotList=p,e.getArticleBannerList=v,e.getArticleDetails=b,e.loginMobile=w,e.verifyCode=A,e.registerVerify=m,e.phoneRegister=T,e.phoneRegisterReset=x,e.phoneLogin=y,e.switchH5Login=k,e.bindingPhone=D,e.bindingUserPhone=z,e.logout=L,e.getTemlIds=C,e.pink=B,e.getCity=E,e.getLiveList=F,e.getDiy=M,e.follow=P,e.updatePhone=R,e.getCouponV2=U,e.getCouponNewUser=Y,e.category=N,e.searchList=Q,e.clearSearch=O,e.siteConfig=j,e.getAdvertise=_,e.setBrowse=H;var o=i(n("7833"));function r(){return o.default.get("index",{},{noAuth:!0})}function u(){return o.default.get("v2/index",{},{noAuth:!0})}function a(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function d(t){return o.default.post("wechat/set_form_id",{formId:t})}function s(t){return o.default.post("coupon/receive",{couponId:t})}function c(t){return o.default.get("v2/coupons",t,{noAuth:!0})}function f(t,e){return o.default.get("coupons/user/"+t,e)}function l(){return o.default.get("v2/new_coupon")}function g(){return o.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return o.default.get("article/hot/list",{},{noAuth:!0})}function v(){return o.default.get("article/banner/list",{},{noAuth:!0})}function b(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function w(t){return o.default.post("login/mobile",t,{noAuth:!0})}function A(){return o.default.get("verify_code",{},{noAuth:!0})}function m(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function T(t){return o.default.post("register",t,{noAuth:!0})}function x(t){return o.default.post("register/reset",t,{noAuth:!0})}function y(t){return o.default.post("login",t,{noAuth:!0})}function k(){return o.default.post("switch_h5",{from:"wechat"})}function D(t){return o.default.post("binding",t,{noAuth:!0})}function z(t){return o.default.post("user/binding",t)}function L(){return o.default.get("logout")}function C(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function B(){return o.default.get("pink",{},{noAuth:!0})}function E(){return o.default.get("city_list",{},{noAuth:!0})}function F(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function M(t){return o.default.get("diy/get_diy/"+t,{},{noAuth:!0})}function P(){return o.default.get("wechat/follow",{},{noAuth:!0})}function R(t){return o.default.post("user/updatePhone",t,{noAuth:!0})}function U(){return o.default.get("v2/get_today_coupon",{},{noAuth:!0})}function Y(){return o.default.get("v2/new_coupon",{},{noAuth:!0})}function N(t){return o.default.get("category",t,{noAuth:!0})}function Q(t){return o.default.get("v2/user/search_list",t,{noAuth:!0})}function O(){return o.default.get("v2/user/clean_search")}function j(){return o.default.get("site_config",{},{noAuth:!0})}function _(t){return o.default.get("advertise",t,{noAuth:!0})}function H(t){return o.default.get("setBrowse",t,{noAuth:!0})}},bfd4:function(t,e,n){"use strict";var i=n("bd5e"),o=n.n(i);o.a},c0c0:function(t,e,n){"use strict";n("a9e3"),n("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{speed:10,digit:1e3}},props:{digitTo:{type:Number,default:1e3},digitFrom:{type:Number,default:0},runTime:{type:Number,default:1e3},digitFiex:{type:Number,default:0},digitDelay:{type:Number,default:1e3},modeType:{type:String,default:"RANDOM"},textColor:{type:String,default:"zh_text_black"}},methods:{start:function(){var t=this;if(t.digit=t.digitFrom,"RANDOM"==t.modeType)var e=t.runTime/t.speed,n=setInterval((function(){var i=0;if(0==e)clearInterval(n);else if(1==e){var o=(t.digitTo-t.digit)/e;i=o}else{o=(t.digitTo-t.digit)/e;i=parseFloat(Math.random()*o).toFixed(t.digitFiex)}t.digit=(parseFloat(t.digit)+parseFloat(i)).toFixed(t.digitFiex),e--}),t.speed);else if("AVERAGE"==t.modeType){e=t.runTime/t.speed;var i=(t.digitTo-t.digitFrom)/e,o=0,r=setInterval((function(){t.digit=parseFloat(t.digitFrom+i*o).toFixed(t.digitFiex),e==o&&clearInterval(r),o++}),t.speed)}}},created:function(){var t=this;setTimeout((function(){t.start()}),t.digitDelay)},watch:{digitTo:function(t,e){this.digitFrom=e,this.start()}}};e.default=i},d863:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.times[data-v-569b396d]{position:fixed;top:%?20?%;right:%?20?%;padding:%?5?% %?10?%;background:#666;text-align:center;color:#fff;z-index:999}.bottom[data-v-569b396d]{position:fixed;bottom:%?0?%;right:%?0?%;padding:%?5?% %?10?%;background:hsla(0,0%,40%,.3);text-align:center;color:#fff;z-index:999;width:%?750?%;text-align:center;font-weight:600}.bottom uni-image[data-v-569b396d]{width:%?200?%;height:%?200?%;margin:%?20?% auto}.bottom .b-t[data-v-569b396d]{line-height:%?80?%}.bottom .list[data-v-569b396d]{padding:%?50?%;line-height:%?80?%;margin-bottom:%?20?%;color:#fff}.bottom .list .left[data-v-569b396d]{border-right:solid %?2?% #fff;margin-right:%?80?%;padding-right:%?80?%}.bottom .list .number[data-v-569b396d]{font-size:%?48?%}.coupon-window[data-v-569b396d]{background-repeat:no-repeat;background-size:100% 100%;width:%?750?%;height:100%;position:fixed;top:0;left:0;z-index:99;-webkit-transform:translate3d(0,-200%,0);transform:translate3d(0,-200%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.coupon-window.on[data-v-569b396d]{-webkit-transform:translateZ(0);transform:translateZ(0)}.coupon-window .couponWinList[data-v-569b396d]{width:%?750?%;height:%?1000?%;overflow:auto;text-align:center;background:#e6e6e6}.coupon-window .couponWinList uni-image[data-v-569b396d]{width:%?200?%;height:%?200?%;margin:%?400?% auto 0}.coupon-window .couponWinList .item[data-v-569b396d]{width:100%;height:%?120?%;background-color:#fff;position:relative;margin-bottom:%?17?%}.coupon-window .couponWinList .item[data-v-569b396d]::after{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:#f2443a;left:25.5%;bottom:0;margin-bottom:%?-9?%}.coupon-window .couponWinList .item[data-v-569b396d]::before{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:#f2443a;left:25.5%;top:0;margin-top:%?-9?%}.coupon-window .couponWinList .item .money[data-v-569b396d]{width:%?130?%;border-right:1px dashed #ddd;height:100%;text-align:center;line-height:%?120?%;font-size:%?26?%;font-weight:700}.coupon-window .couponWinList .item .money .num[data-v-569b396d]{font-size:%?40?%}.coupon-window .couponWinList .item .text[data-v-569b396d]{width:%?349?%;font-size:%?22?%;color:#999;padding:0 %?29?%;box-sizing:border-box}.coupon-window .couponWinList .item .text .name[data-v-569b396d]{font-size:%?26?%;color:#282828;font-weight:700;margin-bottom:%?9?%}.coupon-window .lid[data-v-569b396d]{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-size:100% 100%;width:%?573?%;height:%?224?%;position:fixed;left:50%;top:20%;margin:%?424?% 0 0 %?-296?%}.coupon-window .lid .bnt[data-v-569b396d]{font-size:%?29?%;width:%?440?%;height:%?80?%;border-radius:%?40?%;background-color:#f9f1d3;text-align:center;line-height:%?80?%;font-weight:700;margin:%?98?% auto 0 auto}.coupon-window .lid .iconfont[data-v-569b396d]{color:#fff;font-size:%?60?%;text-align:center;margin-top:%?87?%}',""]),t.exports=e}}]);