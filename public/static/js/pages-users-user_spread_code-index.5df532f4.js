(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_spread_code-index"],{"1ad1":function(t,e,a){"use strict";var n=a("cb25"),i=a.n(n);i.a},3409:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticStyle:{"touch-action":"none"}},[a("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?a("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[a("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),a("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),a("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),a("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},"4c01":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("2f62"),i={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=i},"5eeb":function(t,e,a){"use strict";a.r(e);var n=a("4c01"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"728d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4a9726a8]{background-color:#a3a3a3!important}.canvas[data-v-4a9726a8]{width:100%;height:550px}.box[data-v-4a9726a8]{width:100%;height:100%;position:relative;border-radius:%?18?%;overflow:hidden}.box .user-msg[data-v-4a9726a8]{position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.box .user-msg .user-code[data-v-4a9726a8]{width:100%;display:flex;align-items:center;justify-content:center;justify-content:space-between}.box .user-msg .user-code uni-image[data-v-4a9726a8]{width:100%}.img-list[data-v-4a9726a8]{margin-right:40px}.distribution-posters uni-swiper[data-v-4a9726a8]{width:100%;height:%?1000?%;position:relative;margin-top:%?40?%}.distribution-posters .slide-image[data-v-4a9726a8]{width:100%;height:100%;margin:0 auto;border-radius:%?15?%}.distribution-posters[data-v-4a9726a8] .active{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s}.distribution-posters[data-v-4a9726a8] .quiet{-webkit-transform:scale(.83333);transform:scale(.83333);transition:all .2s ease-in 0s}.distribution-posters .keep[data-v-4a9726a8]{font-size:%?30?%;color:#fff;width:%?600?%;height:%?80?%;border-radius:%?50?%;text-align:center;line-height:%?80?%;margin:%?38?% auto}.distribution-posters .preserve[data-v-4a9726a8]{color:#fff;text-align:center;margin-top:%?38?%}.distribution-posters .preserve .line[data-v-4a9726a8]{width:%?100?%;height:1px;background-color:#fff}.distribution-posters .preserve .tip[data-v-4a9726a8]{margin:0 %?30?%}body.?%PAGE?%[data-v-4a9726a8]{background-color:#a3a3a3!important}',""]),t.exports=e},"764f":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-4bff0b6f]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},7808:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={zbCode:a("a5db").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"distribution-posters"},[a("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"previous-margin":"40px","next-margin":"40px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindchange.apply(void 0,arguments)}}},[t._l(t.spreadData,(function(e,n){return[a("v-uni-swiper-item",{key:n+"_0",staticClass:"aaa"},[a("div",{ref:"bill",refInFor:!0,staticClass:"box",class:t.swiperIndex==n?"active":"quiet"},[a("v-uni-view",{staticClass:"user-msg"},[a("v-uni-view",{staticClass:"user-code"},[t.posterImage[n]?a("v-uni-image",{staticClass:"canvas",attrs:{src:t.posterImage[n]}}):a("v-uni-canvas",{staticClass:"canvas",attrs:{"canvas-id":"myCanvas"+n}})],1)],1)],1)])]}))],2),a("div",{staticClass:"preserve acea-row row-center-wrapper"},[a("div",{staticClass:"line"}),a("div",{staticClass:"tip"},[t._v("长按保存图片")]),a("div",{staticClass:"line"})])],1),a("home"),a("v-uni-view",{staticClass:"qrimg"},[a("zb-code",{ref:"qrcode",attrs:{show:t.codeShow,cid:t.cid,val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,onval:t.onval,loadMake:t.loadMake},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1)],1)},r=[]},"89af":function(t,e,a){"use strict";a.r(e);var n=a("3409"),i=a("5eeb");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("1ad1");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4bff0b6f",null,!1,n["a"],s);e["default"]=c.exports},"907a":function(t,e,a){var n=a("728d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("02df1120",n,!0,{sourceMap:!1,shadowMode:!1})},a211:function(t,e,a){"use strict";a.r(e);var n=a("c2f7"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b9de:function(t,e,a){"use strict";a.r(e);var n=a("7808"),i=a("a211");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d4c8");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"4a9726a8",null,!1,n["a"],s);e["default"]=c.exports},c2f7:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("d3b7"),a("ac1f"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("a5db")),s=a("dfa2"),o=a("5f0a"),c=a("2f62"),u=n(a("89af")),d={components:{home:u.default,zbCode:r.default},data:function(){return{imgUrls:[],indicatorDots:!1,posterImageStatus:!0,circular:!1,autoplay:!1,interval:3e3,duration:500,swiperIndex:0,spreadList:[],userInfo:{},poster:"",isAuto:!1,isShowAuth:!1,spreadData:[{}],nickName:"",siteName:"",mpUrl:"",canvasImageUrl:"",posterImage:[],codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#32dbc6",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:0,hg:0,qrcode:""}},computed:(0,c.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,e){t&&this.userSpreadBannerList()},deep:!0},userData:{handler:function(t,e){t&&this.$set(this,"userInfo",t)},deep:!0}},onReady:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLogin){e.next=5;break}return e.next=3,t.spreadMsg();case 3:e.next=6;break;case 5:(0,o.toLogin)();case 6:case"end":return e.stop()}}),e)})))()},onShow:function(){var t=this;this.$nextTick((function(){var e=uni.createSelectorQuery().select(".aaa");e.fields({size:!0},(function(e){t.wd=e.width,t.hg=e.height})).exec()}))},methods:{onLoadFun:function(t){this.$set(this,"userInfo",t),this.userSpreadBannerList()},qrR:function(t){this.codeSrc=t},spreadMsg:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a,n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.spreadMsg)();case 2:return a=e.sent,t.spreadData=a.data.spread,t.nickName=a.data.nickname,t.siteName=a.data.site_name,e.next=8,t.imgToBase(a.data.qrcode);case 8:return t.qrcode=e.sent,e.next=11,(0,s.getUserInfo)();case 11:n=e.sent,t.val=window.location.origin+"?spread="+n.data.uid,"?spread="+t.userInfo.uid,i=regeneratorRuntime.mark((function e(n){var i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,r=void 0,t.spreadData,e.next=6,t.imgToBase(a.data.spread[n].pic);case 6:s=e.sent,r=[t.qrcode||t.codeSrc,s],i.$util.userPosterCanvas(r,a.data.nickname,a.data.site_name,n,t.wd,t.hg,(function(t){i.$set(i.posterImage,n,t)}));case 9:case"end":return e.stop()}}),e)})),r=0;case 17:if(!(r<a.data.spread.length)){e.next=22;break}return e.delegateYield(i(r),"t0",19);case 19:r++,e.next=17;break;case 22:case"end":return e.stop()}}),e)})))()},downloadImg:function(){uni.saveImageToPhotosAlbum({filePath:this.posterImage[this.swiperIndex],success:function(){}})},routineCode:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.routineCode)();case 2:a=e.sent,t.mpUrl=a.data.url;case 4:case"end":return e.stop()}}),e)})))()},imgToBase:function(t){return(0,i.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.imgToBase)({image:t});case 2:return a=e.sent,e.abrupt("return",a.data.image);case 4:case"end":return e.stop()}}),e)})))()},codeImg:function(){},authColse:function(t){this.isShowAuth=t},bindchange:function(t){this.spreadList;this.swiperIndex=t.detail.current},savePosterPathMp:function(t){var e=this;uni.getSetting({success:function(a){a.authSetting["scope.writePhotosAlbum"]?uni.saveImageToPhotosAlbum({filePath:t,success:function(t){e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):uni.authorize({scope:"scope.writePhotosAlbum",success:function(){uni.saveImageToPhotosAlbum({filePath:t,success:function(t){e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},downloadFilestoreImage:function(t){var e=this;return new Promise((function(a,n){var i=e;uni.downloadFile({url:t,success:function(t){a(t.tempFilePath)},fail:function(){return i.$util.Tips({title:""})}})}))},setShareInfoStatus:function(){var t=this;this.$wechat.isWeixin()&&(this.isLogin?(0,s.getUserInfo)().then((function(e){var a={desc:"分销海报",title:e.data.nickname+"-分销海报",link:"/pages/index/index?spread="+e.data.uid,imgUrl:t.spreadList[0]};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],a)})):(0,o.toLogin)())},userSpreadBannerList:function(){var t=this;uni.showLoading({title:"获取中",mask:!0}),(0,s.spreadBanner)().then((function(e){uni.hideLoading(),t.$set(t,"spreadList",e.data),t.$set(t,"poster",e.data[0].poster),t.setShareInfoStatus()})).catch((function(t){uni.hideLoading()}))}}};e.default=d}).call(this,a("5a52")["default"])},cb25:function(t,e,a){var n=a("764f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2145704a",n,!0,{sourceMap:!1,shadowMode:!1})},d4c8:function(t,e,a){"use strict";var n=a("907a"),i=a.n(n);i.a}}]);