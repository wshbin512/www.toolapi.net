(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f47e14"],{2310:function(e,t,n){"use strict";var i=n("38e6"),a=n.n(i);a.a},"318e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-account"},[n("div",{staticClass:"container",class:[e.fullWidth>768?"containerSamll":"containerBig"]},[e.fullWidth>768?n("swiper",{staticClass:"swiperPross",attrs:{options:e.swiperOption}},[e._l(e.swiperList,(function(e,t){return n("swiper-slide",{key:t,staticClass:"swiperPic"},[n("img",{attrs:{src:e.slide}})])})),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):e._e(),n("div",{staticClass:"index_from page-account-container"},[n("div",{staticClass:"page-account-top "},[n("div",{staticClass:"page-account-top-logo"},[n("img",{attrs:{src:e.login_logo,alt:"logo"}})])]),n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit("formInline")}}},[n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{type:"text",prefix:"ios-contact-outline",placeholder:"请输入用户名",size:"large"},model:{value:e.formInline.username,callback:function(t){e.$set(e.formInline,"username",t)},expression:"formInline.username"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码",size:"large"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}})],1),n("FormItem",{attrs:{prop:"code"}},[n("div",{staticClass:"code"},[n("Input",{attrs:{type:"text",prefix:"ios-keypad-outline",placeholder:"请输入验证码",size:"large"},model:{value:e.formInline.code,callback:function(t){e.$set(e.formInline,"code",t)},expression:"formInline.code"}}),n("img",{staticClass:"pictrue",attrs:{src:e.imgcode},on:{click:e.captchas}})],1)]),n("FormItem",[n("Button",{staticClass:"btn",attrs:{type:"primary",long:"",size:"large"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v(e._s(e.$t("page.login.submit"))+"\n                    ")])],1)],1)],1)],1),n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"请完成安全校验","mask-closable":!1,"z-index":2,width:"342"},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[n("div",{staticClass:"captchaBox"},[n("div",{ref:"captcha",staticStyle:{position:"relative"},attrs:{id:"captcha"}}),n("div",{attrs:{id:"msg"}})])])],1)},a=[],o=n("a34a"),s=n.n(o),r=n("5723"),c=n("3dda"),l=n.n(c),u=n("d708"),d=n("c276");n("7daa"),n("9973");function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var p=310,v=155,g=42,w=9,x=Math.PI,y=g+2*w+3;function b(e,t){return Math.round(Math.random()*(t-e)+e)}function k(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n}function C(e){var t=new Image;return t.crossOrigin="Anonymous",t.onload=e,t.onerror=function(){t.setSrc(T())},t.setSrc=function(e){var n=window.navigator.userAgent.indexOf("Trident")>-1;if(n){var i=new XMLHttpRequest;i.onloadend=function(e){var n=new FileReader;n.readAsDataURL(e.target.response),n.onloadend=function(e){t.src=e.target.result}},i.open("GET",e),i.responseType="blob",i.send()}else t.src=e},t.setSrc(T()),t}function I(e,t){var n=document.createElement(e);return n.className=t,n}function _(e,t){e.classList.add(t)}function E(e,t){e.classList.remove(t)}function T(){return"https://picsum.photos/".concat(p,"/").concat(v,"/?image=").concat(b(0,1084))}function F(e,t,n,i){e.beginPath(),e.moveTo(t,n),e.arc(t+g/2,n-w+2,w,.72*x,2.26*x),e.lineTo(t+g,n),e.arc(t+g+w-2,n+g/2,w,1.21*x,2.78*x),e.lineTo(t+g,n+g),e.lineTo(t,n+g),e.arc(t+w-2,n+g/2,w+.4,2.76*x,1.24*x,!0),e.lineTo(t,n),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e[i](),e.globalCompositeOperation="destination-over"}function L(e,t){return e+t}function M(e){return e*e}var S=function(){function e(t){var n=t.el,i=t.width,a=void 0===i?310:i,o=t.height,s=void 0===o?155:o,r=t.onSuccess,c=t.onFail,l=t.onRefresh;m(this,e),p=a,v=s,n.style.position="relative",n.style.width=p+"px",Object.assign(n.style,{position:"relative",width:p+"px",margin:"0 auto"}),this.el=n,this.onSuccess=r,this.onFail=c,this.onRefresh=l}return h(e,[{key:"init",value:function(){this.initDOM(),this.initImg(),this.bindEvents()}},{key:"initDOM",value:function(){var e=k(p,v),t=e.cloneNode(!0),n=I("div","sliderContainer");n.style.width=p+"px";var i=I("div","refreshIcon"),a=I("div","sliderMask"),o=I("div","slider"),s=I("span","sliderIcon"),r=I("span","sliderText");t.className="block",r.innerHTML="向右滑动填充拼图";var c=this.el;c.appendChild(e),c.appendChild(i),c.appendChild(t),o.appendChild(s),a.appendChild(o),n.appendChild(a),n.appendChild(r),c.appendChild(n),Object.assign(this,{canvas:e,block:t,sliderContainer:n,refreshIcon:i,slider:o,sliderMask:a,sliderIcon:s,text:r,canvasCtx:e.getContext("2d"),blockCtx:t.getContext("2d")})}},{key:"initImg",value:function(){var e=this,t=C((function(){e.draw(),e.canvasCtx.drawImage(t,0,0,p,v),e.blockCtx.drawImage(t,0,0,p,v);var n=e.y-2*w-1,i=e.blockCtx.getImageData(e.x-3,n,y,y);e.block.width=y,e.blockCtx.putImageData(i,0,n)}));this.img=t}},{key:"draw",value:function(){this.x=b(y+10,p-(y+10)),this.y=b(10+2*w,v-(y+10)),F(this.canvasCtx,this.x,this.y,"fill"),F(this.blockCtx,this.x,this.y,"clip")}},{key:"clean",value:function(){this.canvasCtx.clearRect(0,0,p,v),this.blockCtx.clearRect(0,0,p,v),this.block.width=p}},{key:"bindEvents",value:function(){var e=this;this.el.onselectstart=function(){return!1},this.refreshIcon.onclick=function(){e.reset(),"function"===typeof e.onRefresh&&e.onRefresh()};var t,n,i=[],a=!1,o=function(e){t=e.clientX||e.touches[0].clientX,n=e.clientY||e.touches[0].clientY,a=!0},s=function(o){if(!a)return!1;var s=o.clientX||o.touches[0].clientX,r=o.clientY||o.touches[0].clientY,c=s-t,l=r-n;if(c<0||c+38>=p)return!1;e.slider.style.left=c+"px";var u=(p-40-20)/(p-40)*c;e.block.style.left=u+"px",_(e.sliderContainer,"sliderContainer_active"),e.sliderMask.style.width=c+"px",i.push(l)},r=function(n){if(!a)return!1;a=!1;var o=n.clientX||n.changedTouches[0].clientX;if(o===t)return!1;E(e.sliderContainer,"sliderContainer_active"),e.trail=i;var s=e.verify(),r=s.spliced,c=s.verified;r?c?(_(e.sliderContainer,"sliderContainer_success"),"function"===typeof e.onSuccess&&e.onSuccess()):(_(e.sliderContainer,"sliderContainer_fail"),e.text.innerHTML="请再试一次",e.reset()):(_(e.sliderContainer,"sliderContainer_fail"),"function"===typeof e.onFail&&e.onFail(),setTimeout((function(){e.reset()}),1e3))};this.slider.addEventListener("mousedown",o),this.slider.addEventListener("touchstart",o),this.block.addEventListener("mousedown",o),this.block.addEventListener("touchstart",o),document.addEventListener("mousemove",s),document.addEventListener("touchmove",s),document.addEventListener("mouseup",r),document.addEventListener("touchend",r)}},{key:"verify",value:function(){var e=this.trail,t=e.reduce(L)/e.length,n=e.map((function(e){return e-t})),i=Math.sqrt(n.map(M).reduce(L)/e.length),a=parseInt(this.block.style.left);return{spliced:Math.abs(a-this.x)<10,verified:0!==i}}},{key:"reset",value:function(){this.sliderContainer.className="sliderContainer",this.slider.style.left=0,this.block.style.left=0,this.sliderMask.style.width=0,this.clean(),this.img.setSrc(T())}}]),e}();function R(e,t,n,i,a,o,s){try{var r=e[o](s),c=r.value}catch(l){return void n(l)}r.done?t(c):Promise.resolve(c).then(i,a)}function $(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){R(o,i,a,s,r,"next",e)}function r(e){R(o,i,a,s,r,"throw",e)}s(void 0)}))}}window.jigsaw={init:function(e){var t=new S(e);return t.init(),t}};var N={mixins:[l.a],data:function(){return{fullWidth:document.documentElement.clientWidth,swiperOption:{pagination:".swiper-pagination",autoplay:!0},modals:!1,autoLogin:!0,imgcode:"",formInline:{username:"",password:"",code:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},errorNum:0,jigsaw:null,login_logo:"",swiperList:[],defaultSwiperList:n("433f")}},created:function(){var e=this;top!=window&&(top.location.href=location.href),document.onkeydown=function(t){if("login"===e.$route.name){var n=window.event.keyCode;13===n&&e.handleSubmit("formInline")}},window.addEventListener("resize",this.handleResize)},watch:{fullWidth:function(e){if(!this.timer){this.screenWidth=e,this.timer=!0;var t=this;setTimeout((function(){t.timer=!1}),400)}},$route:function(e){this.captchas()}},mounted:function(){var e=this;this.$nextTick((function(){var t=e;e.jigsaw=jigsaw.init({el:e.$refs.captcha,onSuccess:function(){t.modals=!1,t.closeModel()},onFail:e.closefail,onRefresh:function(){}}),e.screenWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg",e.swiperData()})),this.captchas()},methods:{swiperData:function(){var e=this;Object(r["e"])().then((function(t){var i=t.data||{};e.login_logo=i.login_logo?i.login_logo:n("9d64"),e.swiperList=i.slide.length?i.slide:[{slide:e.defaultSwiperList}]})).catch((function(t){e.$Message.error(t.msg)}))},closeModel:function(){var e=this,t=this.$Message.loading({content:"登录中...",duration:0});Object(r["a"])({account:this.formInline.username,pwd:this.formInline.password,imgcode:this.formInline.code}).then(function(){var n=$(s.a.mark((function n(i){var a,o;return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.$store.dispatch("admin/account/setPageTitle"),t(),a=i.data.expires_time,d["a"].cookies.set("uuid",i.data.user_info.id,{expires:a}),d["a"].cookies.set("token",i.data.token,{expires:a}),d["a"].cookies.set("expires_time",i.data.expires_time,{expires:a}),n.next=8,e.$store.dispatch("admin/db/database",{user:!0});case 8:return o=n.sent,o.set("unique_auth",i.data.unique_auth).set("user_info",i.data.user_info).write(),e.$store.commit("admin/menus/getmenusNav",i.data.menus),e.$store.dispatch("admin/user/set",{name:i.data.user_info.account,avatar:i.data.user_info.head_pic,access:i.data.unique_auth,logo:i.data.logo,logoSmall:i.data.logo_square,version:i.data.version,newOrderAudioLink:i.data.newOrderAudioLink}),e.jigsaw&&e.jigsaw.reset(),n.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/admin/"}));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){t();var i=void 0===n?{}:n;e.errorNum++,e.captchas(),e.$Message.error(i.msg||"登录失败"),e.jigsaw&&e.jigsaw.reset()}))},getExpiresTime:function(e){var t=Math.round(new Date/1e3),n=e-t;return parseFloat(parseFloat(parseFloat(n/60)/60)/24)},closefail:function(){this.jigsaw&&this.jigsaw.reset(),this.$Message.error("校验错误")},handleResize:function(e){this.fullWidth=document.documentElement.clientWidth,this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},captchas:function(){this.imgcode=u["a"].apiBaseURL+"/captcha_pro?"+Date.parse(new Date)},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.errorNum>=2?t.modals=!0:t.closeModel())}))}},beforeCreate:function(){this.fullWidth<768?document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg"):document.getElementsByTagName("canvas")[0].className="index_bg"},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),document.getElementsByTagName("canvas")[0].removeAttribute("class","index_bg")}},j=N,O=(n("2310"),n("2877")),z=Object(O["a"])(j,i,a,!1,null,"1138e214",null);t["default"]=z.exports},"38e6":function(e,t,n){},"3dda":function(e,t){},"433f":function(e,t,n){e.exports=n.p+"view_admin/img/sw.0f5cb0c5.jpg"},"7daa":function(e,t){!function(){function e(e,t,n){return e.getAttribute(t)||n}function t(e){return document.getElementsByTagName(e)}function n(){var n=t("script"),i=n.length,a=n[i-1];return{l:i,z:e(a,"zIndex",-2),o:e(a,"opacity",.8),c:e(a,"color","255,255,255"),n:e(a,"count",240)}}function i(){o=r.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=r.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function a(){if(d+=1,d<5)m(a);else{d=0,u.clearRect(0,0,o,s);var e,t,n,i,r,l,f=[h].concat(p);p.forEach((function(a){for(a.x+=a.xa,a.y+=a.ya,a.xa*=a.x>o||a.x<0?-1:1,a.ya*=a.y>s||a.y<0?-1:1,u.fillRect(a.x-.5,a.y-.5,2,2),u.fillStyle="#FFFFFF",t=0;t<f.length;t++)e=f[t],a!==e&&null!==e.x&&null!==e.y&&(i=a.x-e.x,r=a.y-e.y,l=i*i+r*r,l<e.max&&(e===h&&l>=e.max/2&&(a.x-=.03*i,a.y-=.03*r),n=(e.max-l)/e.max,u.beginPath(),u.lineWidth=n/2,u.strokeStyle="rgba("+c.c+","+(n+.2)+")",u.moveTo(a.x,a.y),u.lineTo(e.x,e.y),u.stroke()));f.splice(f.indexOf(a),1)})),m(a)}}var o,s,r=document.createElement("canvas"),c=n(),l="c_n"+c.l,u=r.getContext("2d"),d=0,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},f=Math.random,h={x:null,y:null,max:2e4};r.id=l,r.style.cssText="position:fixed;top:0;left:0;z-index:"+c.z+";opacity:"+c.o,t("body")[0].appendChild(r),i(),window.onresize=i,window.onmousemove=function(e){e=e||window.event,h.x=e.clientX,h.y=e.clientY},window.onmouseout=function(){h.x=null,h.y=null};for(var p=[],v=0;c.n>v;v++){var g=f()*o,w=f()*s,x=2*f()-1,y=2*f()-1;p.push({x:g,y:w,xa:x,ya:y,max:6e3})}setTimeout((function(){a()}),100)}()},9973:function(e,t,n){}}]);