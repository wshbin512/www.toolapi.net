(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_details-index"],{"00c4":function(t,e,n){"use strict";n.r(e);var i=n("be3d"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"0419":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},r=[]},"0638":function(t,e,n){"use strict";var i=n("ac1b"),a=n.n(i);a.a},"1ad1":function(t,e,n){"use strict";var i=n("cb25"),a=n.n(i);a.a},"1d60":function(t,e,n){"use strict";var i=n("d5f5"),a=n.n(i);a.a},"1f1e":function(t,e,n){function i(t){for(var e={},n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}n("ac1f"),n("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:i(" , ,\t,\r,\n,\f"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:i("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:i("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:i("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:i("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:i("autoplay,controls,ignore,loop,muted"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},3409:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"touch-action":"none"}},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},4654:function(t,e,n){var i=n("695a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2e3fcedd",i,!0,{sourceMap:!1,shadowMode:!1})},"4b0e":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={jyfParser:n("6d37").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"newsDetail"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.articleInfo.title))]),n("v-uni-view",{staticClass:"list acea-row row-middle"},[n("v-uni-view",{staticClass:"label"},[t._v(t._s(t.articleInfo.catename))]),n("v-uni-view",{staticClass:"item"},[t._v(t._s(t.articleInfo.add_time))]),n("v-uni-view",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-liulan"}),t._v(t._s(t.articleInfo.visit))],1)],1),n("v-uni-view",{staticClass:"conters"},[n("jyf-parser",{ref:"article",attrs:{html:t.content,"tag-style":t.tagStyle}})],1),t.store_info.id?n("v-uni-navigator",{staticClass:"picTxt acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+t.store_info.id,"hover-class":"none"}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.store_info.image}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(t.store_info.store_name))]),n("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(t.store_info.price))])],1),n("v-uni-view",{staticClass:"y_money"},[t._v("￥"+t._s(t.store_info.ot_price))])],1),n("v-uni-navigator",{staticClass:"label"},[n("v-uni-text",{staticClass:"span"},[t._v("查看商品")])],1)],1):t._e(),this.$wechat.isWeixin()?n("v-uni-button",{staticClass:"bnt bg-color",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.listenerActionSheet.apply(void 0,arguments)}}},[t._v("和好友一起分享")]):t._e()],1),n("shareInfo",{attrs:{shareInfoStatus:t.shareInfoStatus},on:{setShareInfoStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.setShareInfoStatus.apply(void 0,arguments)}}}),n("home")],1)},r=[]},"4c01":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("26cb"),a={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=a},"4f93":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.shareInfoStatus?n("v-uni-view",{staticClass:"poster-first"},[n("v-uni-view",{staticClass:"mask-share"},[n("v-uni-image",{attrs:{src:"/static/images/share-info.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shareInfoClose.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),(!1).apply(void 0,arguments)}}})],1)],1):t._e()},r=[]},5908:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"@-webkit-keyframes show-data-v-2358c866{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-2358c866{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"5eeb":function(t,e,n){"use strict";n.r(e);var i=n("4c01"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"695a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-167dda5a]{background-color:#fff!important}.newsDetail .title[data-v-167dda5a]{padding:0 %?30?%;font-size:%?34?%;color:#282828;font-weight:700;margin:%?45?% 0 %?23?% 0;line-height:1.5}.newsDetail .list[data-v-167dda5a]{margin:0 %?30?%;padding-bottom:%?25?%}.newsDetail .list .label[data-v-167dda5a]{font-size:%?30?%;color:#b1b2b3}.newsDetail .list .item[data-v-167dda5a]{margin-left:%?27?%;font-size:%?30?%;color:#b1b2b3}.newsDetail .list .item .iconfont[data-v-167dda5a]{font-size:%?28?%;margin-right:%?10?%}.newsDetail .list .item .iconfont.icon-shenhezhong[data-v-167dda5a]{font-size:%?26?%}.newsDetail .conters[data-v-167dda5a]{padding:0 %?30?%;font-size:%?32?%;color:#8a8b8c;line-height:1.7}.newsDetail .picTxt[data-v-167dda5a]{width:%?690?%;height:%?200?%;border-radius:%?20?%;border:1px solid #e1e1e1;position:relative;margin:%?30?%}.newsDetail .picTxt .pictrue[data-v-167dda5a]{width:%?200?%;height:%?200?%}.newsDetail .picTxt .pictrue uni-image[data-v-167dda5a]{width:100%;height:100%;border-radius:%?20?% 0 0 %?20?%;display:block}.newsDetail .picTxt .text[data-v-167dda5a]{width:%?460?%}.newsDetail .picTxt .text .name[data-v-167dda5a]{font-size:%?30?%;color:#282828}.newsDetail .picTxt .text .money[data-v-167dda5a]{font-size:%?24?%;margin-top:%?40?%;font-weight:700}.newsDetail .picTxt .text .money .num[data-v-167dda5a]{font-size:%?36?%}.newsDetail .picTxt .text .y_money[data-v-167dda5a]{font-size:%?26?%;color:#999;text-decoration:line-through}.newsDetail .picTxt .label[data-v-167dda5a]{position:absolute;background-color:#303131;width:%?160?%;height:%?50?%;right:%?-7?%;border-radius:%?25?% 0 %?6?% %?25?%;text-align:center;line-height:%?50?%;bottom:%?24?%}.newsDetail .picTxt .label .span[data-v-167dda5a]{background-image:linear-gradient(90deg,#fff71e 0,#f9b513);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.newsDetail .picTxt .label[data-v-167dda5a]:after{content:" ";position:absolute;width:0;height:0;border-bottom:%?8?% solid #303131;border-right:%?8?% solid transparent;top:%?-7?%;right:0}.newsDetail .bnt[data-v-167dda5a]{color:#fff;font-size:%?30?%;width:%?690?%;height:%?90?%;border-radius:%?45?%;margin:%?48?% auto;text-align:center;line-height:%?90?%}body.?%PAGE?%[data-v-167dda5a]{background-color:#fff!important}',""]),t.exports=e},"6bee":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("1f1e"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i="",a=0;n=e[a];a++){if("/"==n&&"/"!=e[a-1]&&"/"!=e[a+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(a),this[t]=i}if(this[t]=e,e.includes("data:image")){var r=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!r)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,n="",i=(0,_createForOfIteratorHelper2.default)(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;if("text"==a.type)n+=a.text;else{for(var r in n+="<"+a.name,a.attrs||{})n+=" "+r+'="'+a.attrs[r]+'"';a.children&&a.children.length?n+=">"+this._Dom2Str(a.children)+"</"+a.name+">":n+=">"}}}catch(o){i.e(o)}finally{i.f()}return n},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var n="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var i in cfg.userAgentStyles)n+="".concat(i,"{").concat(cfg.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t},setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var a,r=this.rtf.getElementsByTagName("style"),o=0;a=r[o++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var u,l=this.rtf.getElementsByTagName("img"),f=0,d=0;u=l[f];f++){u.style.maxWidth="100%";var h=u.getAttribute("src");this.domain&&h&&("/"==h[0]?"/"==h[1]?u.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+h:u.src=this.domain+h:h.includes("://")||(u.src=this.domain+"/"+h)),u.hasAttribute("ignore")||"A"==u.parentElement.nodeName||(u.i=d++,s.imgList.push(u.src||u.getAttribute("data-src")),u.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),u.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&u.src&&0!=u.i&&(u.setAttribute("data-src",u.src),u.removeAttribute("src"),this._observer.observe(u))}var p,g=this.rtf.getElementsByTagName("a"),v=(0,_createForOfIteratorHelper2.default)(g);try{for(v.s();!(p=v.n()).done;){var m=p.value;m.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(T){v.e(T)}finally{v.f()}var b=this.rtf.getElementsByTagName("video");s.videoContexts=b;for(var _,w=0;_=b[w++];)_.style.maxWidth="100%",_.onerror=function(){s.$emit("error",{source:"video",target:this})},_.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var y,x,A=this.rtf.getElementsByTagName("audios"),k=(0,_createForOfIteratorHelper2.default)(A);try{for(k.s();!(y=k.n()).done;){var C=y.value;C.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(T){k.e(T)}finally{k.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[n.rtf.getBoundingClientRect()];n.width=t[0].width,t[0].height==x&&(n.$emit("ready",t[0]),clearInterval(n._timer)),x=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var n=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(n,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=n/2,this._tMin=(n-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},"6d37":function(t,e,n){"use strict";n.r(e);var i=n("0419"),a=n("dbe0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0638");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"2358c866",null,!1,i["a"],o);e["default"]=c.exports},"764f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-4bff0b6f]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"7b80":function(t,e,n){"use strict";var i=n("4654"),a=n.n(i);a.a},8573:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndex=r,e.getIndexData=o,e.getLogo=s,e.setFormId=c,e.setCouponReceive=u,e.getCoupons=l,e.getUserCoupons=f,e.getNewCoupon=d,e.getArticleCategoryList=h,e.getArticleList=p,e.getArticleHotList=g,e.getArticleBannerList=v,e.getArticleDetails=m,e.loginMobile=b,e.verifyCode=_,e.registerVerify=w,e.phoneRegister=y,e.phoneRegisterReset=x,e.phoneLogin=A,e.switchH5Login=k,e.bindingPhone=C,e.bindingUserPhone=T,e.logout=I,e.getTemlIds=S,e.pink=M,e.getCity=D,e.getLiveList=E,e.getDiy=L,e.follow=O,e.updatePhone=$,e.getCouponV2=z,e.getCouponNewUser=B,e.category=X,e.searchList=q,e.clearSearch=j,e.siteConfig=P,e.getAdvertise=H;var a=i(n("8d0b"));function r(){return a.default.get("index",{},{noAuth:!0})}function o(){return a.default.get("v2/index",{},{noAuth:!0})}function s(){return a.default.get("wechat/get_logo",{},{noAuth:!0})}function c(t){return a.default.post("wechat/set_form_id",{formId:t})}function u(t){return a.default.post("coupon/receive",{couponId:t})}function l(t){return a.default.get("v2/coupons",t,{noAuth:!0})}function f(t,e){return a.default.get("coupons/user/"+t,e)}function d(){return a.default.get("v2/new_coupon")}function h(){return a.default.get("article/category/list",{},{noAuth:!0})}function p(t,e){return a.default.get("article/list/"+t,e,{noAuth:!0})}function g(){return a.default.get("article/hot/list",{},{noAuth:!0})}function v(){return a.default.get("article/banner/list",{},{noAuth:!0})}function m(t){return a.default.get("article/details/"+t,{},{noAuth:!0})}function b(t){return a.default.post("login/mobile",t,{noAuth:!0})}function _(){return a.default.get("verify_code",{},{noAuth:!0})}function w(t,e,n,i){return a.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function y(t){return a.default.post("register",t,{noAuth:!0})}function x(t){return a.default.post("register/reset",t,{noAuth:!0})}function A(t){return a.default.post("login",t,{noAuth:!0})}function k(){return a.default.post("switch_h5",{from:"wechat"})}function C(t){return a.default.post("binding",t,{noAuth:!0})}function T(t){return a.default.post("user/binding",t)}function I(){return a.default.get("logout")}function S(){return a.default.get("wechat/teml_ids",{},{noAuth:!0})}function M(){return a.default.get("pink",{},{noAuth:!0})}function D(){return a.default.get("city_list",{},{noAuth:!0})}function E(t,e){return a.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function L(t){return a.default.get("diy/get_diy/"+t,{},{noAuth:!0})}function O(){return a.default.get("wechat/follow",{},{noAuth:!0})}function $(t){return a.default.post("user/updatePhone",t,{noAuth:!0})}function z(){return a.default.get("v2/get_today_coupon",{},{noAuth:!0})}function B(){return a.default.get("v2/new_coupon",{},{noAuth:!0})}function X(t){return a.default.get("category",t,{noAuth:!0})}function q(t){return a.default.get("v2/user/search_list",t,{noAuth:!0})}function j(){return a.default.get("v2/user/clean_search")}function P(){return a.default.get("site_config",{},{noAuth:!0})}function H(t){return a.default.get("advertise",t,{noAuth:!0})}},"89af":function(t,e,n){"use strict";n.r(e);var i=n("3409"),a=n("5eeb");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1ad1");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4bff0b6f",null,!1,i["a"],o);e["default"]=c.exports},"8a2b":function(t,e,n){"use strict";n.r(e);var i=n("93cc"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"93cc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{shareInfoStatus:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){},methods:{shareInfoClose:function(){this.$emit("setShareInfoStatus")}}};e.default=i},"9bae":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.poster-first[data-v-1397b0ea]{overscroll-behavior:contain}.mask-share[data-v-1397b0ea]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99}.mask-share uni-image[data-v-1397b0ea]{width:100%;height:100%}',""]),t.exports=e},a0ec:function(t,e,n){"use strict";n.r(e);var i=n("4b0e"),a=n("00c4");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("7b80");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"167dda5a",null,!1,i["a"],o);e["default"]=c.exports},ac1b:function(t,e,n){var i=n("5908");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1cac4bcd",i,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=a(n("06c5"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,i.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},be3d:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("8573"),r=i(n("ebd4")),o=i(n("89af")),s=i(n("6d37")),c={components:{shareInfo:r.default,home:o.default,"jyf-parser":s.default},data:function(){return{id:0,articleInfo:[],store_info:{},content:"",shareInfoStatus:!1,tagStyle:{img:"width:100%;"}}},onLoad:function(t){t.hasOwnProperty("id")?this.id=t.id:history.back()},onShow:function(){this.getArticleOne()},methods:{getArticleOne:function(){var t=this,e=this;(0,a.getArticleDetails)(e.id).then((function(n){uni.setNavigationBarTitle({title:n.data.title.substring(0,7)+"..."}),e.$set(e,"articleInfo",n.data),e.$set(e,"store_info",n.data.store_info?n.data.store_info:{}),e.content=n.data.content,t.$wechat.isWeixin()&&t.setShareInfo()}))},listenerActionSheet:function(){this.shareInfoStatus=!0},setShareInfoStatus:function(){this.shareInfoStatus=!1},setShareInfo:function(){var t=location.href,e={desc:this.articleInfo.synopsis,title:this.articleInfo.title,link:t,imgUrl:this.articleInfo.image_input.length?this.articleInfo.image_input[0]:""};this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],e)}}};e.default=c},cb25:function(t,e,n){var i=n("764f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2145704a",i,!0,{sourceMap:!1,shadowMode:!1})},d5f5:function(t,e,n){var i=n("9bae");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2794237e",i,!0,{sourceMap:!1,shadowMode:!1})},dbe0:function(t,e,n){"use strict";n.r(e);var i=n("6bee"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},ebd4:function(t,e,n){"use strict";n.r(e);var i=n("4f93"),a=n("8a2b");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1d60");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1397b0ea",null,!1,i["a"],o);e["default"]=c.exports}}]);