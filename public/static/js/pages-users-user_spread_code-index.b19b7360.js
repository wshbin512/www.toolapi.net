(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_spread_code-index"],{"0e18":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".zb-code[data-v-50568d9f]{position:relative}.zb-code-canvas[data-v-50568d9f]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},1951:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={zbCode:n("538e").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"distribution-posters"},[n("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"previous-margin":"40px","next-margin":"40px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindchange.apply(void 0,arguments)}}},[t._l(t.spreadData,(function(e,i){return[n("v-uni-swiper-item",{key:i+"_0",staticClass:"aaa"},[n("div",{ref:"bill",refInFor:!0,staticClass:"box",class:t.swiperIndex==i?"active":"quiet"},[n("v-uni-view",{staticClass:"user-msg"},[n("v-uni-view",{staticClass:"user-code"},[t.posterImage[i]?n("v-uni-image",{staticClass:"canvas",attrs:{src:t.posterImage[i]}}):n("v-uni-canvas",{staticClass:"canvas",attrs:{"canvas-id":"myCanvas"+i}})],1)],1)],1)])]}))],2)],1),n("v-uni-view",{staticClass:"qrimg"},[n("zb-code",{ref:"qrcode",attrs:{show:t.codeShow,cid:t.cid,val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,onval:t.onval,loadMake:t.loadMake},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1)],1)},r=[]},"309d":function(t,e,n){"use strict";var i=n("4637"),o=n.n(i);o.a},"30f0":function(t,e,n){"use strict";var i=n("cfde"),o=n.n(i);o.a},"3ecd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"touch-action":"none"}},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},4084:function(t,e,n){"use strict";n.r(e);var i=n("91123"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},4349:function(t,e,n){"use strict";n.r(e);var i=n("1951"),o=n("bb97");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("30f0");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"08fb4382",null,!1,i["a"],a);e["default"]=u.exports},4502:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-4bff0b6f]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},4637:function(t,e,n){var i=n("0e18");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("6f080b90",i,!0,{sourceMap:!1,shadowMode:!1})},4893:function(t,e,n){var i=n("4502");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("d4d2411c",i,!0,{sourceMap:!1,shadowMode:!1})},"4ede":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-08fb4382]{background-color:#fff!important}.header[data-v-08fb4382]{height:%?120?%;line-height:%?120?%;padding:0 %?30?%;background:rgba(255,141,26,.8);color:#fff;font-size:%?32?%;font-weight:700}.canvas[data-v-08fb4382]{width:100%;height:550px}.box[data-v-08fb4382]{width:100%;height:100%;position:relative;border-radius:%?18?%;overflow:hidden;border:solid %?1?% #ff8d1a}.box .user-msg[data-v-08fb4382]{position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.box .user-msg .user-code[data-v-08fb4382]{width:100%;display:flex;align-items:center;justify-content:center;justify-content:space-between}.box .user-msg .user-code uni-image[data-v-08fb4382]{width:100%}.img-list[data-v-08fb4382]{margin-right:40px}.distribution-posters uni-swiper[data-v-08fb4382]{width:100%;height:%?1000?%;position:relative;margin-top:%?40?%}.distribution-posters .slide-image[data-v-08fb4382]{width:100%;height:100%;margin:0 auto;border-radius:%?15?%}.distribution-posters[data-v-08fb4382] .active{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s}.distribution-posters[data-v-08fb4382] .quiet{-webkit-transform:scale(.83333);transform:scale(.83333);transition:all .2s ease-in 0s}.distribution-posters .keep[data-v-08fb4382]{font-size:%?30?%;color:#fff;width:%?600?%;height:%?80?%;border-radius:%?50?%;text-align:center;line-height:%?80?%;margin:%?38?% auto}.distribution-posters .preserve[data-v-08fb4382]{color:#fff;text-align:center;margin-top:%?38?%}.distribution-posters .preserve .line[data-v-08fb4382]{width:%?100?%;height:1px;background-color:#fff}.distribution-posters .preserve .tip[data-v-08fb4382]{margin:0 %?30?%}body.?%PAGE?%[data-v-08fb4382]{background-color:#fff!important}',""]),t.exports=e},"538e":function(t,e,n){"use strict";n.r(e);var i=n("f009"),o=n("4084");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("309d");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"50568d9f",null,!1,i["a"],a);e["default"]=u.exports},91123:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=i(n("9801")),a={name:"zb-code",props:{cid:{type:String,default:"zb-code-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):o=new r.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),o.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)||"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){n._makeCode()}),100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){n._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=a},9801:function(t,e,n){"use strict";n("cb29"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={};(function(){function t(t){var e,n,i;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),i=128+(63&t),[e,n,i])}function e(e){for(var n=[],i=0;i<e.length;i++)for(var o=e.charCodeAt(i),r=t(o),a=0;a<r.length;a++)n.push(r[a]);return n}function n(t,n){this.typeNumber=-1,this.errorCorrectLevel=n,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}n.prototype={constructor:n,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+n][e+i]=0<=n&&n<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=i&&i<=4)},createQrcode:function(){for(var t=0,e=0,n=null,i=0;i<8;i++){this.makeImpl(i);var o=a.getLostPoint(this);(0==i||t>o)&&(t=o,e=i,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var i=t[e],o=t[n];if(null==this.modules[i][o])for(var r=-2;r<=2;r++)for(var s=-2;s<=2;s++)this.modules[i+r][o+s]=-2==r||2==r||-2==s||2==s||0==r&&0==s}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var i=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=i,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=i}},setupTypeInfo:function(t,e){for(var n=o[this.errorCorrectLevel]<<3|e,i=a.getBCHTypeInfo(n),r=0;r<15;r++){var s=!t&&1==(i>>r&1);r<6?this.modules[r][8]=s:r<8?this.modules[r+1][8]=s:this.modules[this.moduleCount-15+r][8]=s;s=!t&&1==(i>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=s:r<9?this.modules[8][15-r-1+1]=s:this.modules[8][15-r-1]=s}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new l,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=0,o=this.utf8bytes.length;i<o;i++)t.put(this.utf8bytes[i],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(n.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(n.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,i=0,o=this.rsBlock.length/3,r=new Array,s=0;s<o;s++)for(var u=this.rsBlock[3*s+0],d=this.rsBlock[3*s+1],l=this.rsBlock[3*s+2],f=0;f<u;f++)r.push([l,d]);for(var h=new Array(r.length),g=new Array(r.length),p=0;p<r.length;p++){var v=r[p][0],m=r[p][1]-v;n=Math.max(n,v),i=Math.max(i,m),h[p]=new Array(v);for(s=0;s<h[p].length;s++)h[p][s]=255&t.buffer[s+e];e+=v;var b=a.getErrorCorrectPolynomial(m),w=new c(h[p],b.getLength()-1),y=w.mod(b);g[p]=new Array(b.getLength()-1);for(s=0;s<g[p].length;s++){var x=s+y.getLength()-g[p].length;g[p][s]=x>=0?y.get(x):0}}var T=new Array(this.totalDataCount),C=0;for(s=0;s<n;s++)for(p=0;p<r.length;p++)s<h[p].length&&(T[C++]=h[p][s]);for(s=0;s<i;s++)for(p=0;p<r.length;p++)s<g[p].length&&(T[C++]=g[p][s]);return T},mapData:function(t,e){for(var n=-1,i=this.moduleCount-1,o=7,r=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[i][s-u]){var c=!1;r<t.length&&(c=1==(t[r]>>>o&1));var d=a.getMask(e,i,s-u);d&&(c=!c),this.modules[i][s-u]=c,o--,-1==o&&(r++,o=7)}if(i+=n,i<0||this.moduleCount<=i){i-=n,n=-n;break}}}}},n.PAD0=236,n.PAD1=17;for(var o=[1,0,3,2],r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case r.PATTERN000:return(e+n)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return n%3==0;case r.PATTERN011:return(e+n)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.PATTERN101:return e*n%2+e*n%3==0;case r.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),n=0;n<t;n++)e=e.multiply(new c([1,s.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,i=0,o=0;o<e;o++)for(var r=0,a=t.modules[o][0],s=0;s<e;s++){var u=t.modules[o][s];if(s<e-6&&u&&!t.modules[o][s+1]&&t.modules[o][s+2]&&t.modules[o][s+3]&&t.modules[o][s+4]&&!t.modules[o][s+5]&&t.modules[o][s+6]&&(s<e-10?t.modules[o][s+7]&&t.modules[o][s+8]&&t.modules[o][s+9]&&t.modules[o][s+10]&&(n+=40):s>3&&t.modules[o][s-1]&&t.modules[o][s-2]&&t.modules[o][s-3]&&t.modules[o][s-4]&&(n+=40)),o<e-1&&s<e-1){var c=0;u&&c++,t.modules[o+1][s]&&c++,t.modules[o][s+1]&&c++,t.modules[o+1][s+1]&&c++,0!=c&&4!=c||(n+=3)}a^u?r++:(a=u,r>=5&&(n+=3+r-5),r=1),u&&i++}for(s=0;s<e;s++)for(r=0,a=t.modules[0][s],o=0;o<e;o++){u=t.modules[o][s];o<e-6&&u&&!t.modules[o+1][s]&&t.modules[o+2][s]&&t.modules[o+3][s]&&t.modules[o+4][s]&&!t.modules[o+5][s]&&t.modules[o+6][s]&&(o<e-10?t.modules[o+7][s]&&t.modules[o+8][s]&&t.modules[o+9][s]&&t.modules[o+10][s]&&(n+=40):o>3&&t.modules[o-1][s]&&t.modules[o-2][s]&&t.modules[o-3][s]&&t.modules[o-4][s]&&(n+=40)),a^u?r++:(a=u,r>=5&&(n+=3+r-5),r=1)}var d=Math.abs(100*i/e/e-50)/5;return n+=10*d,n}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=s.gexp(s.glog(this.get(n))+s.glog(t.get(i)));return new c(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var i=new Array(e),o=0;o<e;o++)i[o]=this.get(o);while(i.length>=n){var r=s.glog(i[0])-s.glog(t.get(0));for(o=0;o<t.getLength();o++)i[o]^=s.gexp(s.glog(t.get(o))+r);while(0==i[0])i.shift()}return new c(i,0)}};var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function l(){this.buffer=new Array,this.length=0}n.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=d[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,i=0,o=0;o<n;o++){var r=e[3*o+0],a=e[3*o+2];i+=a*r}var s=t>9?2:1;if(this.utf8bytes.length+s<i||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=i;break}}},l.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[];i=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var i=null,o=(e=0,f.length);e<o;e++)if(f[e].text==this.options.text&&f[e].text.correctLevel==this.options.correctLevel){i=f[e].obj;break}e==o&&(i=new n(this.options.text,this.options.correctLevel),f.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:i}));var r=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},a=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),n=i.getModuleCount(),o=t.size,a=t.imageSize,s=(o/n).toPrecision(4),u=(o/n).toPrecision(4),c=0;c<n;c++)for(var d=0;d<n;d++){var l=Math.ceil((d+1)*s)-Math.floor(d*s),f=Math.ceil((c+1)*s)-Math.floor(c*s),h=r({row:c,col:d,count:n,options:t});e.setFillStyle(i.modules[c][d]?h:t.background),e.fillRect(Math.round(d*s),Math.round(c*u),l,f)}if(t.image){var g=function(e,n,i,o,r,a,s,u,c){e.setLineWidth(s),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(n+a,i),e.arcTo(n+o,i,n+o,i+a,a),e.arcTo(n+o,i+r,n+o-a,i+r,a),e.arcTo(n,i+r,n,i+r-a,a),e.arcTo(n,i,n+a,i,a),e.closePath(),u&&e.fill(),c&&e.stroke()},p=Number(((o-a)/2).toFixed(2)),v=Number(((o-a)/2).toFixed(2));g(e,p,v,a,a,2,6,!0,!0),e.drawImage(t.image,p,v,a,a)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)};a(this.options)},i.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var o=i;e.default=o},b1d7:function(t,e,n){"use strict";n.r(e);var i=n("b5f2"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},b28c:function(t,e,n){"use strict";var i=n("4893"),o=n.n(i);o.a},b5f2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("26cb"),o={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=o},bb97:function(t,e,n){"use strict";n.r(e);var i=n("ed7d"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},cb29:function(t,e,n){var i=n("23e7"),o=n("81d5"),r=n("44d2");i({target:"Array",proto:!0},{fill:o}),r("fill")},cfde:function(t,e,n){var i=n("4ede");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("711419ea",i,!0,{sourceMap:!1,shadowMode:!1})},e208:function(t,e,n){"use strict";n.r(e);var i=n("3ecd"),o=n("b1d7");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("b28c");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4bff0b6f",null,!1,i["a"],a);e["default"]=u.exports},ed7d:function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("d3b7"),n("ac1f"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("1da1")),r=i(n("538e")),a=n("97be"),s=n("d833"),u=n("26cb"),c=i(n("e208")),d={components:{home:c.default,zbCode:r.default},data:function(){return{imgUrls:[],indicatorDots:!1,posterImageStatus:!0,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],userInfo:{},poster:"",isAuto:!1,isShowAuth:!1,spreadData:[{}],nickName:"",siteName:"",mpUrl:"",canvasImageUrl:"",posterImage:[],codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#32dbc6",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:0,hg:0,qrcode:"",sysHeight:0}},computed:(0,u.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,e){t&&this.userSpreadBannerList()},deep:!0},userData:{handler:function(t,e){t&&this.$set(this,"userInfo",t)},deep:!0}},onReady:function(){this.isLogin?this.spreadMsg():(0,s.toLogin)()},onShow:function(){var t=this;this.sysHeight=uni.getSystemInfoSync().statusBarHeight+"px",this.$nextTick((function(){var e=uni.createSelectorQuery().select(".aaa");e.fields({size:!0},(function(e){t.wd=e.width,t.hg=e.height})).exec()}))},methods:{returns:function(t){uni.navigateBack()},onLoadFun:function(t){this.$set(this,"userInfo",t),this.userSpreadBannerList()},qrR:function(t){this.codeSrc=t},spreadMsg:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n,i,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.spreadMsg)();case 2:return n=e.sent,t.spreadData=n.data.spread,t.nickName=n.data.nickname,t.siteName=n.data.site_name,e.next=8,t.imgToBase(n.data.qrcode);case 8:return t.qrcode=e.sent,e.next=11,(0,a.getUserInfo)();case 11:i=e.sent,t.val=window.location.origin+"?spread="+i.data.uid,"?spread="+t.userInfo.uid,o=regeneratorRuntime.mark((function e(i){var o,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,r=void 0,e.next=4,t.imgToBase(n.data.spread[i].pic);case 4:a=e.sent,r=[t.qrcode||t.codeSrc,a],o.$util.userPosterCanvas(r,n.data.nickname,n.data.site_name,i,t.wd,t.hg,(function(t){o.$set(o.posterImage,i,t)}));case 7:case"end":return e.stop()}}),e)})),r=0;case 16:if(!(r<n.data.spread.length)){e.next=21;break}return e.delegateYield(o(r),"t0",18);case 18:r++,e.next=16;break;case 21:case"end":return e.stop()}}),e)})))()},downloadImg:function(){uni.saveImageToPhotosAlbum({filePath:this.posterImage[this.swiperIndex],success:function(){t("log","save success"," at pages/users/user_spread_code/index.vue:243")}})},routineCode:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.routineCode)();case 2:n=e.sent,t.mpUrl=n.data.url;case 4:case"end":return e.stop()}}),e)})))()},imgToBase:function(t){return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.imgToBase)({image:t});case 2:return n=e.sent,e.abrupt("return",n.data.image);case 4:case"end":return e.stop()}}),e)})))()},codeImg:function(){},authColse:function(t){this.isShowAuth=t},bindchange:function(t){this.spreadList;this.swiperIndex=t.detail.current},savePosterPathMp:function(t){var e=this;uni.getSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?uni.saveImageToPhotosAlbum({filePath:t,success:function(t){e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):uni.authorize({scope:"scope.writePhotosAlbum",success:function(){uni.saveImageToPhotosAlbum({filePath:t,success:function(t){e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},downloadFilestoreImage:function(t){var e=this;return new Promise((function(n,i){var o=e;uni.downloadFile({url:t,success:function(t){n(t.tempFilePath)},fail:function(){return o.$util.Tips({title:""})}})}))},setShareInfoStatus:function(){var t=this;this.$wechat.isWeixin()&&(this.isLogin?(0,a.getUserInfo)().then((function(e){var n={desc:"分销海报",title:e.data.nickname+"-分销海报",link:"/pages/index/index?spread="+e.data.uid,imgUrl:t.spreadList[0]};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)})):(0,s.toLogin)())},userSpreadBannerList:function(){var t=this;uni.showLoading({title:"获取中",mask:!0}),(0,a.spreadBanner)().then((function(e){uni.hideLoading(),t.$set(t,"spreadList",e.data),t.$set(t,"poster",e.data[0].poster),t.setShareInfoStatus()})).catch((function(t){uni.hideLoading()}))}}};e.default=d}).call(this,n("0de9")["log"])},f009:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"zb-code"},[n("v-uni-canvas",{staticClass:"zb-code-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},r=[]}}]);