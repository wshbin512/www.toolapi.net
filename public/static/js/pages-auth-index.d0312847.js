(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-index"],{"0b97":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},5502:function(t,e,n){"use strict";n.r(e);var i=n("b602"),o=n("9f82");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("63da");var u,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"213f5f6c",null,!1,i["a"],u);e["default"]=c.exports},5679:function(t,e,n){"use strict";var i=n("4ea4");n("c975"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("6cba")),a=i(n("0b97")),u=n("dfa2"),r=n("bc99"),c=n("ebfc"),s=n("8573"),d={name:"Auth",mixins:[a.default],data:function(){return{phone:"",captcha:"",key:"",authKey:"",scope:"",bindPhone:!1}},mounted:function(){},onLoad:function(t){var e=this,n=this,i=t.code,a=t.state,s=t.scope;if("snsapi_base"===s){this.url=t.url||t.back_url||"";var d=this.$Cache.get("spread"),f=this.$Cache.get(r.LOGINTYPE);(0,c.silenceAuth)({code:t.code||"",spread:d}).then((function(n){void 0!==n.data.key?(e.bindPhone=!0,e.authKey=n.data.key):(e.$store.commit("LOGIN",{token:n.data.token,time:parseInt(n.data.expires_time)-e.$Cache.time()}),e.$Cache.set(r.WX_AUTH,t.code),e.$Cache.clear(r.STATE_KEY),f&&e.$Cache.clear(r.LOGINTYPE),location.href=decodeURIComponent(decodeURIComponent(t.back_url)))}))}else o.default.auth(i,a).then((function(){location.href=decodeURIComponent(decodeURIComponent(t.back_url)),(0,u.getUserInfo)().then((function(t){n.$store.commit("SETUID",t.data.uid)}))})).catch((function(){location.replace("/")}))},methods:{editPwd:function(){var t=this,e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0,s.bindingPhone)({phone:e.phone,captcha:e.captcha,key:this.authKey}).then((function(n){var i=n.data.expires_time-t.$Cache.time();if(t.$store.commit("LOGIN",{token:n.data.token,time:i}),!t.url||-1===t.url.indexOf("http"))return e.$util.Tips({title:"绑定成功！",icon:"success"},{tab:4,url:"/pages/index/index"});location.href=t.url})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码！"}):e.$util.Tips({title:"请填写手机号码！"})},code:function(){var t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?void(0,s.verifyCode)().then((function(e){(0,s.registerVerify)(t.phone,"reset",e.data.key,t.captcha).then((function(e){t.$util.Tips({title:e.msg}),t.sendCode()})).catch((function(e){return t.$util.Tips({title:e})}))})):t.$util.Tips({title:"请输入正确的手机号码！"}):t.$util.Tips({title:"请填写手机号码！"})}}};e.default=d},"63da":function(t,e,n){"use strict";var i=n("7ec8"),o=n.n(i);o.a},"7ec8":function(t,e,n){var i=n("c33c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2cdceff6",i,!0,{sourceMap:!1,shadowMode:!1})},8573:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=a,e.getLogo=u,e.setFormId=r,e.setCouponReceive=c,e.getCoupons=s,e.getUserCoupons=d,e.getNewCoupon=f,e.getArticleCategoryList=l,e.getArticleList=h,e.getArticleHotList=p,e.getArticleBannerList=g,e.getArticleDetails=v,e.loginMobile=b,e.verifyCode=m,e.registerVerify=w,e.phoneRegister=y,e.phoneRegisterReset=C,e.phoneLogin=A,e.switchH5Login=_,e.bindingPhone=x,e.bindingUserPhone=k,e.logout=P,e.getTemlIds=$,e.pink=I,e.getCity=T,e.getLiveList=L,e.getDiy=U,e.follow=E,e.updatePhone=O,e.getCouponV2=R,e.getCouponNewUser=j,e.category=M,e.searchList=N,e.clearSearch=z,e.siteConfig=G;var o=i(n("8d0b"));function a(){return o.default.get("v2/index",{},{noAuth:!0})}function u(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function r(t){return o.default.post("wechat/set_form_id",{formId:t})}function c(t){return o.default.post("coupon/receive",{couponId:t})}function s(t){return o.default.get("v2/coupons",t,{noAuth:!0})}function d(t,e){return o.default.get("coupons/user/"+t,e)}function f(){return o.default.get("v2/new_coupon")}function l(){return o.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return o.default.get("article/hot/list",{},{noAuth:!0})}function g(){return o.default.get("article/banner/list",{},{noAuth:!0})}function v(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function b(t){return o.default.post("login/mobile",t,{noAuth:!0})}function m(){return o.default.get("verify_code",{},{noAuth:!0})}function w(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function y(t){return o.default.post("register",t,{noAuth:!0})}function C(t){return o.default.post("register/reset",t,{noAuth:!0})}function A(t){return o.default.post("login",t,{noAuth:!0})}function _(){return o.default.post("switch_h5",{from:"wechat"})}function x(t){return o.default.post("binding",t,{noAuth:!0})}function k(t){return o.default.post("user/binding",t)}function P(){return o.default.get("logout")}function $(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function I(){return o.default.get("pink",{},{noAuth:!0})}function T(){return o.default.get("city_list",{},{noAuth:!0})}function L(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function U(t){return o.default.get("diy/get_diy/"+t,{},{noAuth:!0})}function E(){return o.default.get("wechat/follow",{},{noAuth:!0})}function O(t){return o.default.post("user/updatePhone",t,{noAuth:!0})}function R(){return o.default.get("v2/get_today_coupon",{},{noAuth:!0})}function j(){return o.default.get("v2/new_coupon",{},{noAuth:!0})}function M(t){return o.default.get("category",t,{noAuth:!0})}function N(t){return o.default.get("v2/user/search_list",t,{noAuth:!0})}function z(){return o.default.get("v2/user/clean_search")}function G(){return o.default.get("site_config",{},{noAuth:!0})}},"9f82":function(t,e,n){"use strict";n.r(e);var i=n("5679"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},b602:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bindPhone?n("v-uni-view",[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:"填写手机号码","placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填写验证码","placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v("确认绑定")])],1)],1)],1):n("v-uni-view",{staticClass:"lottie-bg"},[n("v-uni-view",{attrs:{id:"lottie"}})],1)},a=[]},c33c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-213f5f6c]{background-color:#fff!important}.ChangePassword .phone[data-v-213f5f6c]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-213f5f6c]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-213f5f6c]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-213f5f6c]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-213f5f6c]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-213f5f6c]{width:%?340?%}.ChangePassword .list .item .code[data-v-213f5f6c]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-213f5f6c]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-213f5f6c]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}.lottie-bg[data-v-213f5f6c]{position:fixed;left:0;top:0;background-color:#fff;width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}#lottie[data-v-213f5f6c]{display:block;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);margin:auto}#lottie uni-image[data-v-213f5f6c]{width:%?200?%;height:%?200?%}body.?%PAGE?%[data-v-213f5f6c]{background-color:#fff!important}',""]),t.exports=e}}]);