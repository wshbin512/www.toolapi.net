(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-login-index"],{"0ccb":function(t,e,n){var i=n("50c4"),a=n("1148"),r=n("1d80"),o=Math.ceil,s=function(t){return function(e,n,s){var c,u,l=String(r(e)),d=l.length,p=void 0===s?" ":String(s),f=i(n);return f<=d||""==p?l:(c=f-d,u=a.call(p,o(c/p.length)),u.length>c&&(u=u.slice(0,c)),t?l+u:u+l)}};t.exports={start:s(!1),end:s(!0)}},"139f":function(t,e,n){var i=n("8f43");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("cc5e00c4",i,!0,{sourceMap:!1,shadowMode:!1})},"387b":function(t,e,n){"use strict";var i=n("8f39"),a=n.n(i);a.a},"39c8":function(t,e,n){n("a15b"),n("fb6a"),n("accc"),n("f4b3"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("bf19"),function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",a="day",r="week",o="month",s="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+d(i,2,"0")+":"+d(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,o),a=e-i<0,r=t.clone().add(n+(a?-1:1),o);return Number(-(n+(e-i)/(a?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:o,y:c,w:r,d:a,D:"date",h:i,m:n,s:e,ms:t,Q:s}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",g={};g[h]=f;var b=function(t){return t instanceof $},v=function(t,e,n){var i;if(!t)return h;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var a=t.name;g[a]=t,i=a}return!n&&i&&(h=i),i||!n&&h},w=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},m=p;m.l=v,m.i=b,m.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var $=function(){function d(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var p=d.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(m.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(u);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return m},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return w(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<w(t)},p.$g=function(t,e,n){return m.u(t)?this[e]:this.set(n,t)},p.year=function(t){return this.$g(t,"$y",c)},p.month=function(t){return this.$g(t,"$M",o)},p.day=function(t){return this.$g(t,"$W",a)},p.date=function(t){return this.$g(t,"$D","date")},p.hour=function(t){return this.$g(t,"$H",i)},p.minute=function(t){return this.$g(t,"$m",n)},p.second=function(t){return this.$g(t,"$s",e)},p.millisecond=function(e){return this.$g(e,"$ms",t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,s){var u=this,l=!!m.u(s)||s,d=m.p(t),p=function(t,e){var n=m.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf(a)},f=function(t,e){return m.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},h=this.$W,g=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case c:return l?p(1,0):p(31,11);case o:return l?p(1,g):p(0,g+1);case r:var w=this.$locale().weekStart||0,$=(h<w?h+7:h)-w;return p(l?b-$:b+(6-$),g);case a:case"date":return f(v+"Hours",0);case i:return f(v+"Minutes",1);case n:return f(v+"Seconds",2);case e:return f(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(r,s){var u,l=m.p(r),d="set"+(this.$u?"UTC":""),p=(u={},u[a]=d+"Date",u.date=d+"Date",u[o]=d+"Month",u[c]=d+"FullYear",u[i]=d+"Hours",u[n]=d+"Minutes",u[e]=d+"Seconds",u[t]=d+"Milliseconds",u)[l],f=l===a?this.$D+(s-this.$W):s;if(l===o||l===c){var h=this.clone().set("date",1);h.$d[p](f),h.init(),this.$d=h.set("date",Math.min(this.$D,h.daysInMonth())).toDate()}else p&&this.$d[p](f);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[m.p(t)]()},p.add=function(t,s){var u,l=this;t=Number(t);var d=m.p(s),p=function(e){var n=w(l);return m.w(n.date(n.date()+Math.round(e*t)),l)};if(d===o)return this.set(o,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===a)return p(1);if(d===r)return p(7);var f=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[d]||1,h=this.$d.getTime()+t*f;return m.w(h,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=m.z(this),a=this.$locale(),r=this.$H,o=this.$m,s=this.$M,c=a.weekdays,u=a.months,d=function(t,i,a,r){return t&&(t[i]||t(e,n))||a[i].substr(0,r)},p=function(t){return m.s(r%12||12,t,"0")},f=a.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:m.s(s+1,2,"0"),MMM:d(a.monthsShort,s,u,3),MMMM:u[s]||u(this,n),D:this.$D,DD:m.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,c,2),ddd:d(a.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:m.s(r,2,"0"),h:p(1),hh:p(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:m.s(o,2,"0"),s:String(this.$s),ss:m.s(this.$s,2,"0"),SSS:m.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||h[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,u,l){var d,p=m.p(u),f=w(t),h=6e4*(f.utcOffset()-this.utcOffset()),g=this-f,b=m.m(this,f);return b=(d={},d[c]=b/12,d[o]=b,d[s]=b/3,d[r]=(g-h)/6048e5,d[a]=(g-h)/864e5,d[i]=g/36e5,d[n]=g/6e4,d[e]=g/1e3,d)[p]||g,l?b:m.a(b)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return g[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=v(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return m.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},d}();return w.prototype=$.prototype,w.extend=function(t,e){return t(e,$,w),w},w.locale=v,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=g[h],w.Ls=g,w}))},"64e5":function(t,e,n){"use strict";var i=n("d039"),a=n("0ccb").start,r=Math.abs,o=Date.prototype,s=o.getTime,c=o.toISOString;t.exports=i((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!i((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),i=e<0?"-":e>9999?"+":"";return i+a(r(e),i?6:4,0)+"-"+a(t.getUTCMonth()+1,2,0)+"-"+a(t.getUTCDate(),2,0)+"T"+a(t.getUTCHours(),2,0)+":"+a(t.getUTCMinutes(),2,0)+":"+a(t.getUTCSeconds(),2,0)+"."+a(n,3,0)+"Z"}:c},"7d86":function(t,e,n){"use strict";var i=n("139f"),a=n.n(i);a.a},"8a33":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},"8f39":function(t,e,n){var i=n("edc4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3a2131d3",i,!0,{sourceMap:!1,shadowMode:!1})},"8f43":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.appLogin[data-v-2cb8aade]{margin-top:%?60?%}.appLogin .hds[data-v-2cb8aade]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;color:#b4b4b4}.appLogin .hds .line[data-v-2cb8aade]{width:%?68?%;height:%?1?%;background:#ccc}.appLogin .hds p[data-v-2cb8aade]{margin:0 %?20?%}.appLogin .btn-wrapper[data-v-2cb8aade]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?30?%}.appLogin .btn-wrapper .btn[data-v-2cb8aade]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?68?%;height:%?68?%;border-radius:50%}.appLogin .btn-wrapper .apple-btn[data-v-2cb8aade]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?246?%;height:%?66?%;margin-left:%?30?%;background:#eaeaea;border-radius:%?34?%;font-size:%?24?%}.appLogin .btn-wrapper .apple-btn .icon-s-pingguo[data-v-2cb8aade]{color:#333;margin-right:%?10?%;font-size:%?34?%}.appLogin .btn-wrapper .iconfont[data-v-2cb8aade]{font-size:%?40?%;color:#fff}.appLogin .btn-wrapper .wx[data-v-2cb8aade]{margin-right:%?30?%;background-color:#61c64f}.appLogin .btn-wrapper .mima[data-v-2cb8aade]{background-color:#28b3e9}.appLogin .btn-wrapper .yanzheng[data-v-2cb8aade]{background-color:#f89c23}.code img[data-v-2cb8aade]{width:100%;height:100%}.acea-row.row-middle uni-input[data-v-2cb8aade]{margin-left:%?20?%;display:block}.login-wrapper[data-v-2cb8aade]{padding:%?30?%}.login-wrapper .shading[data-v-2cb8aade]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;margin-top:%?200?%}.login-wrapper .shading uni-image[data-v-2cb8aade]{width:%?180?%;height:%?180?%}.login-wrapper .whiteBg[data-v-2cb8aade]{margin-top:%?100?%}.login-wrapper .whiteBg .list[data-v-2cb8aade]{border-radius:%?16?%;overflow:hidden}.login-wrapper .whiteBg .list .item[data-v-2cb8aade]{border-bottom:1px solid #f0f0f0;background:#fff}.login-wrapper .whiteBg .list .item .row-middle[data-v-2cb8aade]{position:relative;padding:%?16?% %?45?%}.login-wrapper .whiteBg .list .item .row-middle uni-input[data-v-2cb8aade]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;height:%?80?%}.login-wrapper .whiteBg .list .item .row-middle .code[data-v-2cb8aade]{position:absolute;right:%?30?%;top:50%;color:#e93323;font-size:%?26?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.login-wrapper .whiteBg .logon[data-v-2cb8aade]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:%?86?%;margin-top:%?80?%;background-color:#e93323;border-radius:%?120?%;color:#fff;font-size:%?30?%}.login-wrapper .whiteBg .tips[data-v-2cb8aade]{margin:%?30?%;text-align:center;color:#999}',""]),t.exports=e},"9ed6":function(t,e,n){"use strict";n.r(e);var i=n("b098"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a2b13:function(t,e){},accc:function(t,e,n){var i=n("23e7"),a=n("64e5");i({target:"Date",proto:!0,forced:Date.prototype.toISOString!==a},{toISOString:a})},b098:function(t,e,n){"use strict";(function(t){var i=n("dbce"),a=n("4ea4");n("c975"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),o=(a(n("39c8")),a(n("8a33"))),s=n("ad08"),c=(i(n("3ab0")),n("a2b13"),n("a203")),u=n("b829"),l="login_back_url",d={name:"Login",mixins:[o.default],data:function(){return{navList:["快速登录","账号登录"],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1,keyLock:!0}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){"ios"==e.platform.toLowerCase()&&e.system.split(" ")[1]>=13&&(t.appleShow=!0)}})},mounted:function(){this.getLogoImage()},methods:{appleLogin:function(){var t=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"apple",timeout:1e4,success:function(e){uni.getUserInfo({provider:"apple",success:function(e){t.appleUserInfo=e.userInfo,t.appleLoginApi()},fail:function(){uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(t){}})},appleLoginApi:function(){var t=this;(0,s.appleLogin)({openId:t.appleUserInfo.openId,email:t.appleUserInfo.email||"",phone:this.account,captcha:this.captcha}).then((function(e){var n=e.data;if(n.isbind)uni.showModal({title:"提示",content:"请绑定手机号后，继续操作",showCancel:!1,success:function(e){e.confirm&&(t.current=1,t.appleLoginStatus=!0)}});else{t.$store.commit("LOGIN",{token:n.token,time:n.expires_time-t.$Cache.time()});var i=t.$Cache.get(l)||"/pages/index/index";t.$Cache.clear(l),t.$store.commit("SETUID",n.userInfo.uid),uni.reLaunch({url:i})}})).catch((function(t){uni.showModal({title:"提示",content:"错误信息".concat(t),success:function(t){t.confirm||t.cancel}})}))},wxLogin:function(){var t=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"weixin",success:function(e){uni.getUserInfo({provider:"weixin",success:function(e){t.appUserInfo=e.userInfo,t.wxLoginApi()},fail:function(){uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(){uni.showToast({title:"登录失败",icon:"none",duration:2e3})}})},wxLoginApi:function(){var t=this;wechatAppAuth({userInfo:t.appUserInfo,phone:this.account,code:this.captcha}).then((function(e){var n=e.data;if(n.isbind)uni.showModal({title:"提示",content:"请绑定手机号后，继续操作",showCancel:!1,success:function(e){e.confirm&&(t.current=1,t.appLoginStatus=!0)}});else{t.$store.commit("LOGIN",{token:n.token,time:n.expires_time-t.$Cache.time()});var i=t.$Cache.get(l)||"/pages/index/index";t.$Cache.clear(l),t.$store.commit("SETUID",n.userInfo.uid),uni.reLaunch({url:i})}})).catch((function(t){uni.showModal({title:"提示",content:"错误信息".concat(t),success:function(t){t.confirm||t.cancel}})}))},again:function(){this.codeUrl=u.VUE_APP_API_URL+"/sms_captcha?key="+this.keyCode+Date.parse(new Date)},code:function(){var t=this;(0,s.getCodeApi)().then((function(e){t.keyCode=e.data.key,t.getCode()})).catch((function(e){t.$util.Tips({title:e})}))},getLogoImage:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,c.getLogo)(2).then((function(t){n.logoUrl=t.data.logo_url}));case 2:case"end":return e.stop()}}),e)})))()},loginMobile:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 9:if(!n.appLoginStatus){e.next=13;break}n.wxLoginApi(),e.next=23;break;case 13:if(!n.appleLoginStatus){e.next=17;break}n.appleLoginApi(),e.next=23;break;case 17:if(!t.keyLock){e.next=21;break}t.keyLock=!t.keyLock,e.next=22;break;case 21:return e.abrupt("return",n.$util.Tips({title:"请勿重复点击"}));case 22:(0,s.loginMobile)({phone:n.account,captcha:n.captcha,spread:n.$Cache.get("spread")}).then((function(e){var i=e.data;n.$store.commit("LOGIN",{token:i.token,time:i.expires_time-t.$Cache.time()});var a=n.$Cache.get(l)||"/pages/index/index";n.$Cache.clear(l),(0,s.getUserInfo)().then((function(e){t.keyLock=!0,n.$store.commit("SETUID",e.data.uid),-1!==a.indexOf("/pages/users/login/index")&&(a="/pages/index/index"),uni.reLaunch({url:a})}))})).catch((function(e){t.keyLock=!0,n.$util.Tips({title:e})}));case 23:case"end":return e.stop()}}),e)})))()},register:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 9:if(n.password){e.next=11;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 11:if(!/^([0-9]|[a-z]|[A-Z]){0,6}$/i.test(n.password)){e.next=13;break}return e.abrupt("return",n.$util.Tips({title:"您输入的密码过于简单"}));case 13:(0,s.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 14:case"end":return e.stop()}}),e)})))()},getCode:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:return 2==n.formItem&&(n.type="register"),e.next=8,(0,s.registerVerify)({phone:n.account,type:n.type,key:n.keyCode,code:n.codeVal}).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){n.$util.Tips({title:t})}));case 8:case"end":return e.stop()}}),e)})))()},navTap:function(t){this.current=t},submit:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写账号"}));case 3:if(/^[\w\d]{5,16}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的账号"}));case 5:if(n.password){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 7:if(!t.keyLock){e.next=11;break}t.keyLock=!t.keyLock,e.next=12;break;case 11:return e.abrupt("return",n.$util.Tips({title:"请勿重复点击"}));case 12:(0,s.loginH5)({account:n.account,password:n.password,spread:n.$Cache.get("spread")}).then((function(e){var i=e.data;n.$store.commit("LOGIN",{token:i.token,time:i.expires_time-t.$Cache.time()});var a=n.$Cache.get(l)||"/pages/index/index";n.$Cache.clear(l),(0,s.getUserInfo)().then((function(e){t.keyLock=!0,n.$store.commit("SETUID",e.data.uid),uni.reLaunch({url:a})})).catch((function(e){t.keyLock=!0}))})).catch((function(e){t.keyLock=!0,n.$util.Tips({title:e})}));case 13:case"end":return e.stop()}}),e)})))()}}};e.default=d}).call(this,n("5a52")["default"])},bf19:function(t,e,n){"use strict";var i=n("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c0e4:function(t,e,n){"use strict";n.r(e);var i=n("d0d5"),a=n("9ed6");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("387b"),n("7d86");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2cb8aade",null,!1,i["a"],o);e["default"]=c.exports},d0d5:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login-wrapper"},[n("v-uni-view",{staticClass:"shading"},[t.logoUrl?n("v-uni-image",{attrs:{src:t.logoUrl}}):n("v-uni-image",{attrs:{src:"/static/images/logo2.png"}})],1),1===t.formItem?n("v-uni-view",{staticClass:"whiteBg"},[1!==t.current?n("v-uni-view",{staticClass:"list"},[n("v-uni-form",{on:{submit:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号码",required:!0},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_1.png"}}),n("v-uni-input",{attrs:{type:"password",placeholder:"填写登录密码",required:!0},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1):t._e(),0!==t.current||t.appLoginStatus||t.appleLoginStatus?n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号码"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),t.isShowCode?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}}),n("v-uni-view",{staticClass:"code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.codeUrl}})])],1)],1):t._e()],1):t._e(),0!==t.current?n("v-uni-view",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginMobile.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),0===t.current?n("v-uni-view",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),n("v-uni-view",{staticClass:"tips"},[0==t.current?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=1}}},[t._v("快速登录")]):t._e(),1==t.current?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=0}}},[t._v("账号登录")]):t._e()],1),n("v-uni-view",{staticClass:"tips"},[0==t.current?n("v-uni-navigator",{staticClass:"forgetPwd",attrs:{"hover-class":"none",url:"/pages/users/register/index"}},[t._v("用户注册")]):t._e()],1)],1):t._e(),n("v-uni-view",{staticClass:"bottom"})],1)},r=[]},edc4:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-2cb8aade]{background:#fff}body.?%PAGE?%[data-v-2cb8aade]{background:#fff}",""]),t.exports=e},f4b3:function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),r=n("7b0b"),o=n("c04e"),s=a((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}));i({target:"Date",proto:!0,forced:s},{toJSON:function(t){var e=r(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})}}]);