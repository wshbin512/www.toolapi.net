(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-download-index"],{"0f68":function(t,e,n){var i=n("1aca");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("998e7fbe",i,!0,{sourceMap:!1,shadowMode:!1})},"1aca":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zh_text_white[data-v-7596adf0]{color:#fff}.zh_text_black[data-v-7596adf0]{color:#fff}",""]),t.exports=e},"4a3d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2888bea4]{background:#000}.login-wrapper .posters[data-v-2888bea4]{width:100%}.login-wrapper .posters uni-image[data-v-2888bea4]{width:100%}.login-wrapper .shading[data-v-2888bea4]{display:flex;align-items:center;justify-content:center;width:100%}.login-wrapper .shading uni-image[data-v-2888bea4]{width:%?180?%;height:%?180?%}.login-wrapper .whiteBg[data-v-2888bea4]{margin-top:%?50?%}.login-wrapper .whiteBg .InviteCode[data-v-2888bea4]{font-size:%?40?%;color:#fff;margin:auto;width:100%;text-align:center}.login-wrapper .whiteBg .list[data-v-2888bea4]{padding:%?50?%;line-height:%?80?%;margin-bottom:%?20?%;color:#fff}.login-wrapper .whiteBg .list .left[data-v-2888bea4]{border-right:solid %?2?% #fff;margin-right:%?80?%;padding-right:%?80?%}.login-wrapper .whiteBg .list .number[data-v-2888bea4]{font-size:%?48?%;width:%?200?%;text-align:center}.login-wrapper .whiteBg .list .number-title[data-v-2888bea4]{width:%?200?%;text-align:center}.login-wrapper .whiteBg .tips[data-v-2888bea4]{margin:%?20?%;text-align:center;color:#999}.login-wrapper .whiteBg .tips .goLogin[data-v-2888bea4]{color:#ff8d1a}.login-wrapper .whiteBg .tips .agreement uni-text[data-v-2888bea4]{color:#ff8d1a;margin-right:%?20?%}.login-wrapper .whiteBg .tips .webUrl[data-v-2888bea4]{width:%?278?%;height:%?88?%;line-height:%?88?%;background:linear-gradient(90deg,#d04aff 30%,#5154ff 60%,#14ace7);border-radius:%?48?%;color:#fff;font-size:%?32?%;text-align:center;margin:0 %?30?%}.login-wrapper .whiteBg .tips .appUrl[data-v-2888bea4]{width:%?278?%;height:%?88?%;line-height:%?88?%;background:linear-gradient(90deg,#d04aff 30%,#5154ff 60%,#14ace7);border-radius:%?48?%;color:#fff;font-size:%?32?%;text-align:center;margin:0 %?30?%}body.?%PAGE?%[data-v-2888bea4]{background:#000}',""]),t.exports=e},"6b0a":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={zhihuaiDigitJump:n("7f67").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"posters"},[t.appData?n("v-uni-image",{attrs:{mode:"widthFix",src:t.appData.posters}}):n("v-uni-image",{attrs:{mode:"widthFix",src:"/static/images/photo.png"}})],1),n("div",{staticClass:"shading"},[t.appData.image?n("v-uni-image",{attrs:{src:t.appData.image}}):n("v-uni-image",{attrs:{src:"/static/images/icon@photo.png"}})],1),n("div",{staticClass:"whiteBg"},[n("div",{staticClass:"InviteCode"},[t._v("邀请码："+t._s(t.spread))]),n("v-uni-view",{staticClass:"list acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"number"},[n("zhihuai-DigitJump",{attrs:{digitTo:t.regNum,digitFiex:0}})],1),n("v-uni-view",{staticClass:"number-title"},[t._v("注册会员人数")])],1),n("v-uni-view",[n("v-uni-view",{staticClass:"number"},[n("zhihuai-DigitJump",{attrs:{digitTo:t.lineNum,digitFiex:0}})],1),n("v-uni-view",{staticClass:"number-title"},[t._v("在线会员人数")])],1)],1),n("v-uni-view",{staticClass:"tips acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"webUrl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onWeb()}}},[t._v("网页版本")]),n("v-uni-view",{staticClass:"appUrl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onApp()}}},[t._v("APP下载")])],1)],1)])},r=[]},"76fa":function(t,e,n){"use strict";n.r(e);var i=n("c0c0"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"79d1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:[t.textColor]},[t._v(t._s(t.digit))])},r=[]},"7f67":function(t,e,n){"use strict";n.r(e);var i=n("79d1"),a=n("76fa");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("bb64");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"7596adf0",null,!1,i["a"],o);e["default"]=s.exports},a301:function(t,e,n){"use strict";(function(t){n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("bf67"),a={name:"Login",data:function(){return{navList:["快速登录","账号登录"],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,spread:0,appId:"APPFJZZ3ATY050L708",appData:[],regNum:1e4,lineNum:2e3}},onLoad:function(t){var e=this;e.sysHeight=uni.getSystemInfoSync().statusBarHeight+"px",e.spread=t.spread,e.appId=t.appId,t.spread,e.appId,e.getSystem()},methods:{getSystem:function(){var t=this;(0,i.getSystem)({appId:t.appId}).then((function(e){t.appData=e.data.appData,t.$set(t,"regNum",parseInt(e.data.userCount)),t.$set(t,"lineNum",parseInt(e.data.userOnline))})).catch((function(e){t.$util.Tips({title:e})}))},onWeb:function(){window.open(this.appData.webUrl)},onApp:function(){window.open(this.appData.appUrl)}}};e.default=a}).call(this,n("5a52")["default"])},b4ed:function(t,e,n){"use strict";n.r(e);var i=n("a301"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},bb64:function(t,e,n){"use strict";var i=n("0f68"),a=n.n(i);a.a},bf67:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndex=r,e.getSystem=o,e.getIndexData=u,e.getLogo=s,e.setFormId=d,e.setCouponReceive=c,e.getCoupons=f,e.getUserCoupons=l,e.getNewCoupon=g,e.getArticleCategoryList=p,e.getArticleList=h,e.getArticleHotList=v,e.getArticleBannerList=w,e.getArticleDetails=m,e.loginMobile=b,e.verifyCode=A,e.registerVerify=y,e.phoneRegister=_,e.phoneRegisterReset=x,e.phoneLogin=C,e.switchH5Login=F,e.bindingPhone=I,e.bindingUserPhone=D,e.logout=T,e.getTemlIds=B,e.pink=L,e.getCity=N,e.getLiveList=k,e.getDiy=P,e.follow=U,e.updatePhone=M,e.getCouponV2=z,e.getCouponNewUser=S,e.category=O,e.searchList=R,e.clearSearch=E,e.siteConfig=$,e.getAdvertise=j,e.setBrowse=J;var a=i(n("7833"));function r(){return a.default.get("index",{},{noAuth:!0})}function o(t){return a.default.get("system",t,{noAuth:!0})}function u(){return a.default.get("v2/index",{},{noAuth:!0})}function s(){return a.default.get("wechat/get_logo",{},{noAuth:!0})}function d(t){return a.default.post("wechat/set_form_id",{formId:t})}function c(t){return a.default.post("coupon/receive",{couponId:t})}function f(t){return a.default.get("v2/coupons",t,{noAuth:!0})}function l(t,e){return a.default.get("coupons/user/"+t,e)}function g(){return a.default.get("v2/new_coupon")}function p(){return a.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return a.default.get("article/list/"+t,e,{noAuth:!0})}function v(){return a.default.get("article/hot/list",{},{noAuth:!0})}function w(){return a.default.get("article/banner/list",{},{noAuth:!0})}function m(t){return a.default.get("article/details/"+t,{},{noAuth:!0})}function b(t){return a.default.post("login/mobile",t,{noAuth:!0})}function A(){return a.default.get("verify_code",{},{noAuth:!0})}function y(t,e,n,i){return a.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function _(t){return a.default.post("register",t,{noAuth:!0})}function x(t){return a.default.post("register/reset",t,{noAuth:!0})}function C(t){return a.default.post("login",t,{noAuth:!0})}function F(){return a.default.post("switch_h5",{from:"wechat"})}function I(t){return a.default.post("binding",t,{noAuth:!0})}function D(t){return a.default.post("user/binding",t)}function T(){return a.default.get("logout")}function B(){return a.default.get("wechat/teml_ids",{},{noAuth:!0})}function L(){return a.default.get("pink",{},{noAuth:!0})}function N(){return a.default.get("city_list",{},{noAuth:!0})}function k(t,e){return a.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function P(t){return a.default.get("diy/get_diy/"+t,{},{noAuth:!0})}function U(){return a.default.get("wechat/follow",{},{noAuth:!0})}function M(t){return a.default.post("user/updatePhone",t,{noAuth:!0})}function z(){return a.default.get("v2/get_today_coupon",{},{noAuth:!0})}function S(){return a.default.get("v2/new_coupon",{},{noAuth:!0})}function O(t){return a.default.get("category",t,{noAuth:!0})}function R(t){return a.default.get("v2/user/search_list",t,{noAuth:!0})}function E(){return a.default.get("v2/user/clean_search")}function $(){return a.default.get("site_config",{},{noAuth:!0})}function j(t){return a.default.get("advertise",t,{noAuth:!0})}function J(t){return a.default.get("setBrowse",t,{noAuth:!0})}},c0c0:function(t,e,n){"use strict";n("a9e3"),n("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{speed:10,digit:1e3}},props:{digitTo:{type:Number,default:1e3},digitFrom:{type:Number,default:0},runTime:{type:Number,default:1e3},digitFiex:{type:Number,default:0},digitDelay:{type:Number,default:1e3},modeType:{type:String,default:"RANDOM"},textColor:{type:String,default:"zh_text_black"}},methods:{start:function(){var t=this;if(t.digit=t.digitFrom,"RANDOM"==t.modeType)var e=t.runTime/t.speed,n=setInterval((function(){var i=0;if(0==e)clearInterval(n);else if(1==e){var a=(t.digitTo-t.digit)/e;i=a}else{a=(t.digitTo-t.digit)/e;i=parseFloat(Math.random()*a).toFixed(t.digitFiex)}t.digit=(parseFloat(t.digit)+parseFloat(i)).toFixed(t.digitFiex),e--}),t.speed);else if("AVERAGE"==t.modeType){e=t.runTime/t.speed;var i=(t.digitTo-t.digitFrom)/e,a=0,r=setInterval((function(){t.digit=parseFloat(t.digitFrom+i*a).toFixed(t.digitFiex),e==a&&clearInterval(r),a++}),t.speed)}}},created:function(){var t=this;setTimeout((function(){t.start()}),t.digitDelay)},watch:{digitTo:function(t,e){this.digitFrom=e,this.start()}}};e.default=i},d3ed:function(t,e,n){"use strict";n.r(e);var i=n("6b0a"),a=n("b4ed");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("fc62");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"2888bea4",null,!1,i["a"],o);e["default"]=s.exports},d810:function(t,e,n){var i=n("4a3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("276ab5ec",i,!0,{sourceMap:!1,shadowMode:!1})},fc62:function(t,e,n){"use strict";var i=n("d810"),a=n.n(i);a.a}}]);