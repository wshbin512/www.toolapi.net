(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-privacy-index"],{"09f3":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("1473"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,r="",i=0;n=e[i];i++){if("/"==n&&"/"!=e[i-1]&&"/"!=e[i+1])break;r+=Math.random()>.5?n.toUpperCase():n}return r+=e.substr(i),this[t]=r}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,n="",r=(0,_createForOfIteratorHelper2.default)(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;if("text"==i.type)n+=i.text;else{for(var a in n+="<"+i.name,i.attrs||{})n+=" "+a+'="'+i.attrs[a]+'"';i.children&&i.children.length?n+=">"+this._Dom2Str(i.children)+"</"+i.name+">":n+=">"}}}catch(o){r.e(o)}finally{r.f()}return n},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var n="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var r in cfg.userAgentStyles)n+="".concat(r,"{").concat(cfg.userAgentStyles[r],"}");for(r in this.tagStyle)n+="".concat(r,"{").concat(this.tagStyle[r],"}");n+="</style>",t=n+t}return t},setContent:function(t,e){var n=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var i,a=this.rtf.getElementsByTagName("style"),o=0;i=a[o++];)i.innerHTML=i.innerHTML.replace(/body/g,"#rtf"+this._uid),i.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var l,u=this.rtf.getElementsByTagName("img"),f=0,h=0;l=u[f];f++){l.style.maxWidth="100%";var d=l.getAttribute("src");this.domain&&d&&("/"==d[0]?"/"==d[1]?l.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+d:l.src=this.domain+d:d.includes("://")||(l.src=this.domain+"/"+d)),l.hasAttribute("ignore")||"A"==l.parentElement.nodeName||(l.i=h++,s.imgList.push(l.src||l.getAttribute("data-src")),l.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),l.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&l.src&&0!=l.i&&(l.setAttribute("data-src",l.src),l.removeAttribute("src"),this._observer.observe(l))}var p,m=this.rtf.getElementsByTagName("a"),g=(0,_createForOfIteratorHelper2.default)(m);try{for(g.s();!(p=g.n()).done;){var _=p.value;_.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(A){g.e(A)}finally{g.f()}var v=this.rtf.getElementsByTagName("video");s.videoContexts=v;for(var b,y=0;b=v[y++];)b.style.maxWidth="100%",b.onerror=function(){s.$emit("error",{source:"video",target:this})},b.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var w,x,M=this.rtf.getElementsByTagName("audios"),T=(0,_createForOfIteratorHelper2.default)(M);try{for(T.s();!(w=T.n()).done;){var k=w.value;k.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(A){T.e(A)}finally{T.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[n.rtf.getBoundingClientRect()];n.width=t[0].width,t[0].height==x&&(n.$emit("ready",t[0]),clearInterval(n._timer)),x=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var n=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(n,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=n/2,this._tMin=(n-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},1473:function(t,e,n){function r(t){for(var e={},n=t.split(","),r=n.length;r--;)e[n[r]]=!0;return e}n("ac1f"),n("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:r(" , ,\t,\r,\n,\f"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:r("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:r("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:r("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:r("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:r("autoplay,controls,ignore,loop,muted"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"1cba":function(t,e,n){"use strict";n.r(e);var r=n("436d"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"2b50":function(t,e,n){"use strict";n.r(e);var r=n("09f3"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"36a6":function(t,e,n){"use strict";n.r(e);var r=n("3878"),i=n("2b50");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7205");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"2358c866",null,!1,r["a"],o);e["default"]=c.exports},3878:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},"436d":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("36a6")),a={components:{"jyf-parser":i.default},data:function(){return{tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},content:"提示条款：\n本协议是您与西安众邦网络科技有限公司共同签署。<br/>\n<strong>CRMEB客户管理+电商系统（以下称“CRMEB”），由西安众邦网络科技有限公司（以下称“众邦科技”）独创开发，版权所有Copyright (c)2014-2024，众邦科技保留所有权利。CRMEB是国内最稳定、最强大、最先进的互联网电商平台解决方案之一，CRMEB基于 PHP + MySQL 的技术，采用ThinkPHP框架开发。CRMEB官方对此拥有最终修改权和解释权。</strong><br/>\nCRMEB官方网站：http://www.crmeb.com<br/>\n<strong>在使用CRMEB客户管理+电商系统（以下称“许可软件”或“本软件”）之前，请您仔细阅读本协议，特别是法律适用和争议解决条款，此等条款将以粗体标识，您需要重点阅读。如您对协议有任何疑问，可向客服咨询。如果您已下载、复制、安装或以其他任何方式使用该软件，则视为已经接受本协议。如果您不接受本协议的全部或部分条款，您将无权使用本软件。请立即终止安装、或以其他方式使用该软件，删除您已经安装或保留的该软件的任何组件。</strong><br/>\n由于互联网高速发展，您与我们签署的本协议列明的条款并不能完整罗列并覆盖您与我们所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。\n因此，《版权声明》及其他规则均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用许可软件，视为您同意上述补充协议。我们如修改本协议或其补充协议，协议条款修改后，请您仔细阅读并接受修改后的协议后再继续使用许可软件。\n<br/>\n一、定义\n软件（许可软件或本软件）：本协议中的“软件”是指CRMEB客户管理+电商系统，由若干模块或功能组成的已经植入或即将植入众邦科技指定产品内的信息处理程序或支持文件，其中支持文件具体包括软件的源代码、目标码以及相关软件中所包含的图片、照片、图标、动画、录音、录像、音乐、文字、代码的全部或部分，还包括与许可软件或众邦产品相关的所有描述其功能、特点、内容、质量、测试、用户手册、用户许可协议等纸质或电子版的资料、技术文档等。\n您：本协议中的“您”是指取得众邦科技合法许可使用本软件权利的个人或单个法人实体，法人实体包括公司、企业、机构、组织或单位。\n我们：本协议中的“我们”即是CRMEB官方，是指众邦科技，即西安众邦网络科技有限公司及其关联公司。\n二次开发：本协议中的“二次开发”在现有的软件上进行定制修改，如对功能扩展，达到您想要的功能，原则不得改变本软件原有系统内核及系统设定的框架，我们允许的二次开发仅指对部分软件界面、功能删改或扩展，并非对内核及框架进行实质性修改。\n<br/>\n二、软件许可使用内容\n在您遵守本协议内容的前提下，您通过我们指定合法渠道购买软件商用许可后，众邦科技授予您的商用许可权利包括：\n1、安装和使用权利：您可以为商用目的安装和使用本软件，使用本软件提供的全部功能。\n2、绑定唯一域名的权利：在安装本软件前，您应当自备一个域名并告知我们，以便我们将域名与本软件进行绑定。该绑定域名是商用许可软件的唯一指向。您应确保域名的唯一性、有效性，域名一经绑定，不得随意更换。您自备的域名可以是顶级、二级、或三级域名，您应对域名合法性、有效性承担责任。在使用本软件过程中，如需更换域名，应提前三个工作日以书面方式告知我们并如实告知被更换域名存在的问题，否则，我们有权利不予更换。\n3、申请商用授权码的权利：您在我们指定合法渠道购买软件商用许可后，凭借订单号可以在我们官网申请商用授权码，并通过我们官方网站下载授权证书。\n4、获取商用授权证书的权利：通过我们官方网站下载的商用授权证书是许可您将软件商用的合法凭证。该授权证书是授予您以本协议约定方式合法使用软件的永久授权，但我们不对授权作无限制使用的永久承诺。\n5、授权内容使用权：在取得我们许可后，您拥有使用本软件构建的网站全部内容使用权，并独立承担与之相关法律义务。您可以在协议规定的约束条件下和限制范围内修改 CRMEB 源代码或界面风格以适应您的网站要求，但应保留我们的版权信息。不管你的网站是否整体使用 CRMEB ，还是部份栏目使用 CRMEB，在你使用了 CRMEB 的网站主页上必须加上 CRMEB 官方网址(www.CRMEB.com)的链接。\n6、在获得商业授权之后，您才可以将本软件应用于商业用途，同时依据所购买的授权类型确定技术支持内容。商业授权用户享有反馈意见和提出建议的权力，相关意见和建议将在我们下一次软件升级中被优先考虑，但我们对此不作承诺或保证。\n7、CRMEB著作权已在中华人民共和国国家版权局注册(中国国家版权局著作权登记号 2018SR024463)，著作权受到法律和国际公约保护。未经我们书面许可，不得删除网站底部及相应的官方链接。购买商业授权请联系众邦科技了解最新说明。\n8、本软件适用运营环境，在软件相关文档中已经明确提示，如因软件安装不符运营环境造成的故障，我们不承担任何责任。\n<br/>\n三、权利限制\n1、单一使用限制：同一个域名，只允许绑定一次。您购买的许可，只允许您自己使用，不得再许可任何第三人使用。\n2、共享软件限制：您不得通过共享软件的全部或部分，允许多人使用软件的部分或全部功能。\n3、软件分解限制：您不得通过分解软件，把不同功能或把软件的不同部分嵌入到其他软件系统。\n4、软件完整性限制：您不得删除软件中的任何版权申明、提示，亦不得对软件中出现的任何商标或标识进行涂抹、修改或删除，除非已经获得我们的书面同意，您应将需要修改的标识等详细情况书面告知我们，以便我们评估您的需要。\n5、反向工程、反编译、反汇编限制：您不得对软件进行反向工程、反编译、反汇编，除非法律明确规定允许这些行为除外。\n6、转让限制：未经众邦科技的书面同意，您不得公开、转让、出租、出借、再许可、分发该软件的全部或任何部分或软件单一备份副本给第三方。\n7、保密限制：未经众邦科技书面同意，您不得将本软件的性能或其他任何评估、测试结果、技术秘密透露给任何第三方。\n<br/>\n四、权利保留\n1、 众邦科技依法保留未在本协议中明确授予给您的其他一切在法律上属于众邦科技的权利。\n2、本软件受著作权法、国际著作权条约和其他的知识产权法律或国际条约保护。根据本协议，在此仅许可您非独占性的、非排他性的一般许可使用该软件的权利，而不是出售或转让。\n3、商标权：本协议不授予您众邦科技或其供应商的任何商标或服务标志相关的任何权利。\n4、本软件所涉及到的一切知识产权，包括但不限于专利权、著作权、商标权、商业秘密、技术秘密，均属于各自内容拥有者的财产，众邦科技保留从其所拥有的知识产权获取利益的权利。\n5、未经我们书面许可，不得对本软件或与之关联的商业授权进行出租、出售、抵押或发放子许可证。\n6、未经我们书面许可，禁止在 CRMEB 的整体或任何部分基础上以发展任何派生版本、修改版本或第三方版本用于重新分发。\n7、您一旦开始确认本协议并安装 CRMEB，即被视为完全理解并接受本协议的各项条款，在享有上述条款授予的权力的同时，受到相关的约束和限制。协议许可范围以外的行为，将直接违反本授权协议并构成侵权，我们有权立即终止授权，责令停止损害，并保留追究相关责任的权力。\n<br/>\n五、知识产权\n1、我们拥有许可软件的著作权、商业秘密以及其他相关的知识产权，包括与许可软件有关的各种文档资料。许可软件的相关标识属于我们及我们的关联公司的知识产权，并受到相关法律法规的保护。\n2、在未获得我们明确同意前，您不得复制、模仿、使用或发布上述图标，也不得修改或删除应用产品中体现我们及其关联公司的任何标识、图标或身份信息。\n3、未经我们及我们的关联公司事先书面同意，您不得为任何营利性或非营利性的目的自行实施、利用、转让或许可任何第三方实施、利用、转让上述知识产权。\n4、除非在此明确地许可或授予，本协议并不涉及任何技术转让，软件里所包含和涉及所有权利，产权和利益属于我们独自所有。除非在此明确地许可，本合同并不将任何技术转让给您。\n<br/>\n六、升级版本\n1、我们会根据需要在后续进行一系列免费升级操作，您只有在获得商业使用授权许可后，才享有软件免费升级权益。我们有权决定将升级包何时以何种方式发送给您。\n2、升级版本的许可：如果该软件经众邦科技同意升级，除非升级版本有替代的软件许可协议，否则升级版本仍应遵循本协议条款。\n3、不论软件是否升级，您必须遵守本协议。\n<br/>\n七、无担保和责任限制\n1、除众邦科技明确明示保证的事项以外，对其他任何默示、特定用途、适销性不做任何默示或明示的保证，由此引起的风险由您自己承担。\n2、有关本软件在使用过程中存在不适用性情况，您应当立即以书面方式反馈给我们，在我们现有技术可以解决的情况下，将依照众邦科技的软件产品标准保修政策规定。\n1)众邦科技不对试用期及免费试用软件因使用而产生的损失承担任何明示或暗示的责任。\n2)众邦科技承担的所有责任以您购买该软件所支付的价款为限。\n3、对因意外事故、滥用、错误使用、擅自修改所引起的软件使用问题，我们不承担任何责任，也不做任何保证。对因软件产品存在被攻击，或者自然灾害等不可抗力因素或非众邦科技原因导致软件不能使用，或造成损失的，我们不承担任何责任，也不做任何保证。\n4、对因使用软件引起的其他任何附带的、间接的或惩罚性的损失，包括但不限于商业利润的损失、信息或数据的丢失，众邦科技不承担任何责任，即使众邦科技已被告知存在此种损害的可能性也不例外。\n5、除法律法规有明确规定外，我们将尽最大努力确保许可软件及其所涉及的技术及信息安全、有效、准确、可靠，但受限于我们现有技术，您充分理解我们不能对此进行担保。您理解，对于因您自身、不可抗力及第三方原因导致的您的直接或间接损失，我们无法承担责任。\n6、由于您因下述任一情况所引起或与此有关的人身伤害或附带的、间接的损害赔偿，包括但不限于利润损失、资料损失、业务中断的损害赔偿或其他商业损害赔偿或损失，需由您自行承担：使用或未能使用许可软件；第三方未经批准的使用许可软件或更改您的数据；使用许可软件进行的行为产生的费用及损失；您对许可软件的误解；非因我们的原因而引起的与许可软件有关的其他损失。\n7、非经我们或我们授权开发并正式发布的其他任何由许可软件衍生的软件均属非法，下载、安装、使用此类软件，或未经绑定唯一指向域名，可能导致不可预知的风险，由此产生的法律责任与纠纷与我们无关，我们有权中止、终止使用许可和（或）其他一切服务。\n8、您与其他使用许可软件的用户之间通过许可软件进行时，因您受误导或欺骗而导致或可能导致的任何心理、生理上的伤害以及经济上的损失，均应由侵权方依法承担所有责任。\n<br/>\n八、保密条款\n双方都应为可能获知另一方的商业计划、客户方资料、技术、产品、代码、文档和其他作为该方商业秘密的秘密信息予以保密。秘密信息包括所有有形的或无形的、标明为秘密的信息。秘密信息归披露方所有，除非经披露方声明许可否则不得披露或使用。\n<br/>\n九、协议终止和违约责任\n1、如果您没有遵守本协议的部分或全部条款，众邦科技可以随时单方终止本协议。协议终止后，我们将取消对您的商用许可授权，同时您必须立即停止使用该软件，对已经安装的软件进行卸载，如果由于您违反了本协议的规定给众邦科技造成损失，应承担损失赔偿责任。\n2、您应理解按授权范围使用许可软件、尊重软件及软件包含内容的知识产权、按规范使用软件、按本协议约定履行义务是您获取我们授权使用软件的前提，如您违反本协议，我们有权终止使用许可。\n3、您对软件的使用有赖于我们及关联公司为您提供的配套服务，您违反与我们或我们关联公司的条款、协议、规则、通告等相关规定，我们有权终止使用许可。您违反了本协议的规定给众邦科技造成损失，应承担给我们造成损失的赔偿责任。\n4、您理解出于维护软件系统及软件平台秩序的目的，如果您向我们及（或）我们的关联公司作出任何形式的承诺，且相关公司已确认您违反了该承诺并通知我们依据您与其相关约定进行处理的，则我们可按您的承诺或协议约定的方式对您的使用许可及其他我们可控制的权益采取限制措施，包括中止或终止对您的使用许可，并追究您相关法律责任的权利。\n5、您如从获得我们授权认可的第三方取得许可软件，您需要遵守本协议及第三方对您使用许可软件方式与限制的约定，如果您违反本协议及与第三方约定，我们有权终止对您的使用许可，并追究您相关法律责任。\n6、您应对从本软件获得的代码、文档等技术信息保密，不得对源代码、文档及框架进行删改，不得破译加密部分，不得非法进行倒卖本软件，我们不对非法软件使用后果承担任何责任，并有权追究您的法律责任，您应当赔偿因您的侵权行为给我们造成的直接和间接损失。\n7、如您违反本协议规定的条款，则构成违约，应当承担软件销售价格十倍至五十倍不等的违约金，如给我们或其他用户造成损失的，您必须承担全部的赔偿责任（包括直接损失和间接损失），包括但不限于咨询费、诉讼费、执行费、保全费、保险费、律师费等费用。\n<br/>\n十、管辖法律及可分割性\n1、<strong>本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，如无相关法律规定的，则应参照通用国际商业惯例和（或）行业惯例。本协议由您与我们于我们服务器所在地陕西省西安市莲湖区签署。因本协议产生或与本协议有关的争议，您可与我们以友好协商，协商不成时，提交西安仲裁委员会予以裁决。仲裁裁决是终局的，对双方均有拘束力。</strong>\n2、本协议任何条款被认定为无效的，不应影响其他条款或其任何部分的效力，您与我们仍应善意履行。\n<br/>\n十一、其他\n1、本协议未约定的，由双方另行商定。\n2、本协议的所有标题仅是为了醒目及阅读方便，本身并没有实际涵义，不能作为解释本协议涵义的依据。（正文完）\n\n西安众邦网络科技有限公司"}}};e.default=a},"5bda":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={jyfParser:n("36a6").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("jyf-parser",{ref:"article",attrs:{html:t.content,"tag-style":t.tagStyle}})],1)},a=[]},"5d63":function(t,e,n){"use strict";n.r(e);var r=n("5bda"),i=n("1cba");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("76f1");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"52de7156",null,!1,r["a"],o);e["default"]=c.exports},"6a2c":function(t,e,n){var r=n("e3b2");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("93866436",r,!0,{sourceMap:!1,shadowMode:!1})},"6ebb":function(t,e,n){var r=n("dfe2");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("7d683a1c",r,!0,{sourceMap:!1,shadowMode:!1})},7205:function(t,e,n){"use strict";var r=n("6a2c"),i=n.n(r);i.a},"76f1":function(t,e,n){"use strict";var r=n("6ebb"),i=n.n(r);i.a},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=i(n("06c5"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,r.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},dfe2:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".content[data-v-52de7156]{padding:%?40?% %?30?%;line-height:2}",""]),t.exports=e},e3b2:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes show-data-v-2358c866{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-2358c866{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e}}]);