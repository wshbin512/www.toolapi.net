(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video_details-index"],{"0147":function(t,e,i){"use strict";i.r(e);var n=i("6281"),a=i("5eef");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b226");var d,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4cb28985",null,!1,n["a"],d);e["default"]=r.exports},"0a3c":function(t,e,i){"use strict";var n=i("cc80"),a=i.n(n);a.a},"0a7b":function(t,e,i){"use strict";i.r(e);var n=i("f6ce"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1b5e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={jyfParser:i("66a5").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"product-con"},[i("v-uni-view",[i("v-uni-scroll-view",{style:"height:"+t.height+"px;",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true","scroll-with-animation":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{attrs:{id:"past0"}},[i("videoSwiper",{attrs:{imgUrls:t.slider_image,videoline:t.video_link}}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"list-box acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"video_title line1 acea-row"},[t._v(t._s(t.videoInfo.name))])],1)],1)],1),i("v-uni-view",{staticClass:"userEvaluation",attrs:{id:"past1"}},[i("v-uni-view",{staticClass:"titles acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLink(t.adImg)}}},[i("v-uni-image",{attrs:{src:t.adImg.images}})],1)],1),i("v-uni-view",{staticClass:"headers acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"login-type",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=0}}},[i("v-uni-view",{staticClass:"titles",class:0===t.current?"on":""},[t._v("影片详情")])],1),i("v-uni-view",{staticClass:"login-type",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=1}}},[i("v-uni-view",{staticClass:"titles",class:1===t.current?"on":""},[t._v("推荐影片")])],1)],1),0==t.current?i("v-uni-view",{staticClass:"product-intro",attrs:{id:"past3"}},[i("v-uni-view",{staticClass:"conter"},[i("jyf-parser",{ref:"article",attrs:{html:t.description,"tag-style":t.tagStyle}})],1)],1):t._e(),1==t.current?i("v-uni-view",{staticClass:"superior",attrs:{if:"good_list.length",id:"past2"}},[i("videoRecommend",{attrs:{isSortType:t.isSortType,bastList:t.bastList},on:{changeVideo:function(e){arguments[0]=e=t.$handleEvent(e),t.changeVideo.apply(void 0,arguments)}}})],1):t._e()],1)],1)],1)},o=[]},"5eef":function(t,e,i){"use strict";i.r(e);var n=i("993e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},6281:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"video-bg"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"myVideo",src:t.videoline,objectFit:"cover",controls:!0,"show-center-play-btn":!0,"show-mute-btn":"true","auto-pause-if-navigate":!0,"custom-cache":!1}}),t.controls?n("v-uni-view",{staticClass:"poster"},[n("v-uni-image",{staticClass:"image",attrs:{src:t.imgUrls}})],1):t._e(),t.controls?n("v-uni-view",{staticClass:"stop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPause.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"image",attrs:{src:i("8ceb")}})],1):t._e()],1)],1)},o=[]},"6eed":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-con[data-v-f413bdd8]{background:#fff}.product-con .headers[data-v-f413bdd8]{margin-top:%?50?%}.product-con .headers .login-type[data-v-f413bdd8]{width:50%;text-align:center}.product-con .headers .login-type .titles[data-v-f413bdd8]{width:%?150?%;text-align:center;margin:auto;padding-bottom:%?20?%;font-size:%?36?%}.product-con .headers .login-type .titles.on[data-v-f413bdd8]{border-bottom:solid %?1?% #ff8d1a;color:#ff8d1a}.product-con .video_title[data-v-f413bdd8]{font-weight:700;color:#000;font-size:%?32?%}.product-con .superior[data-v-f413bdd8]{background-color:#fff;margin-top:%?20?%;padding-bottom:%?10?%}.product-con .superior .titles[data-v-f413bdd8]{height:%?98?%}.product-con .superior .titles uni-image[data-v-f413bdd8]{width:%?30?%;height:%?30?%}.product-con .superior .titles .titleTxt[data-v-f413bdd8]{margin:0 %?20?%;font-size:%?30?%;background-image:linear-gradient(90deg,#f57a37 0,#f21b07);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.product-con .conter[data-v-f413bdd8]{display:block;padding:%?20?%;background:#fff}.product-con .conter img[data-v-f413bdd8]{display:block}.product-con .wrapper .share .money uni-image[data-v-f413bdd8]{width:%?66?%;height:%?26?%}.product-con .wrapper .share .money .hint[data-v-f413bdd8]{font-size:%?24?%}.product-con .wrapper .channel[data-v-f413bdd8]{border-radius:%?30?%;height:%?60?%;line-height:%?60?%;border:solid %?1?% #ff8d1a;color:#ff8d1a;padding:0 %?30?%;margin-right:%?20?%}.product-con .wrapper .channel.on[data-v-f413bdd8]{background:#ff8d1a;color:#fff}.product-con .wrapper .list-box[data-v-f413bdd8]{padding:%?30?%;border-bottom:%?1?% solid #f5f5f5;font-size:%?26?%;color:#82848f}.product-con .wrapper .label[data-v-f413bdd8]{padding:%?0?% 0 %?20?%}.product-con .userEvaluation[data-v-f413bdd8]{margin-top:%?30?%}.product-con .userEvaluation uni-image[data-v-f413bdd8]{width:%?690?%;height:%?315?%;margin:auto}.product-con .product-intro[data-v-f413bdd8]{margin-top:0}.title[data-v-f413bdd8]{color:#fff;height:%?100?%;z-index:100;background:#ff8d1a;font-size:%?33?%;font-weight:700}.home[data-v-f413bdd8]{top:%?20?%!important}.home[data-v-f413bdd8]{color:#fff;position:fixed;width:%?56?%;height:%?56?%;z-index:100;left:%?20?%;background:hsla(0,0%,74.5%,0);border-radius:50%;font-size:%?33?%;font-weight:700}.home.on[data-v-f413bdd8]{background:unset;color:#333}.home .icon-xiangzuo[data-v-f413bdd8]{font-size:%?28?%}',""]),t.exports=e},"83da":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.video-bg[data-v-4cb28985]{width:100%;height:%?375?%;position:relative}.video-bg uni-swiper[data-v-4cb28985]{width:100%;height:100%;position:relative}.video-bg .slide-image[data-v-4cb28985]{width:100%;height:100%}.video-bg .pages[data-v-4cb28985]{position:absolute;background-color:#fff;height:%?34?%;padding:0 %?10?%;border-radius:%?3?%;right:%?30?%;bottom:%?30?%;line-height:%?34?%;font-size:%?24?%;color:#050505}#myVideo[data-v-4cb28985]{width:100%;height:100%}.video-bg .item[data-v-4cb28985]{position:relative;width:100%;height:100%}.video-bg .item .poster[data-v-4cb28985]{position:absolute;top:0;left:0;height:%?375?%;width:100%;z-index:9}.video-bg .item .poster .image[data-v-4cb28985]{width:100%;height:100%}.video-bg .item .stop[data-v-4cb28985]{position:absolute;top:50%;left:50%;width:%?136?%;height:%?136?%;margin-top:%?-68?%;margin-left:%?-68?%;z-index:9}.video-bg .item .stop .image[data-v-4cb28985]{width:100%;height:100%}',""]),t.exports=e},"8ceb":function(t,e,i){t.exports=i.p+"static/img/stop.5a8e6dc1.png"},"993e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{imgUrls:{type:String,value:""},videoline:{type:String,value:""}},data:function(){return{indicatorDots:!0,circular:!0,autoplay:!0,interval:3e3,duration:500,currents:"1",controls:!0}},mounted:function(){this.videoContext=uni.createVideoContext("myVideo",this)},methods:{bindPause:function(){this.videoContext.play(),this.$set(this,"controls",!1),this.autoplay=!1},change:function(t){this.$set(this,"currents",t.detail.current+1)}}};e.default=n},af2a:function(t,e,i){"use strict";i.r(e);var n=i("1b5e"),a=i("0a7b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0a3c");var d,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f413bdd8",null,!1,n["a"],d);e["default"]=r.exports},b226:function(t,e,i){"use strict";var n=i("f199"),a=i.n(n);a.a},cc80:function(t,e,i){var n=i("6eed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7969fb5a",n,!0,{sourceMap:!1,shadowMode:!1})},f199:function(t,e,i){var n=i("83da");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("903e9740",n,!0,{sourceMap:!1,shadowMode:!1})},f6ce:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("a4d3"),i("e01a"),i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("bf67"),d=i("36bd"),s=i("97be"),r=i("d833"),c=i("26cb"),l=n(i("0147")),u=n(i("65bf")),v=n(i("66a5")),f=(n(i("85a7")),getApp()),p={components:{videoSwiper:l.default,"jyf-parser":v.default,videoRecommend:u.default},data:function(){return{navH:"",opacity:0,navbarRight:0,navActive:0,navList:[],returnShow:!0,homeTop:20,scrollTop:0,height:0,scrollY:0,video_link:"https://crmen.oss-cn-shenzhen.aliyuncs.com/1624115120945612.mp4",slider_image:"/static/images/slide1.png",description:"影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介影片简介",tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},isSortType:0,topArr:[],lock:!1,current:0,channel:1,sysHeight:0,videoInfo:[],bastList:[],page:1,isScroll:!0,aliasDetails:"videoInfo",adImg:[],pages:"videoDetails",video_id:0}},computed:(0,a.default)({},(0,c.mapGetters)({isLogin:"isLogin"})),onLoad:function(t){var e=this;e.sysHeight=uni.getSystemInfoSync().statusBarHeight+"px",e.id=t.id,uni.getSystemInfo({success:function(t){e.height=t.windowHeight}}),e.pagesLog(),e.getVideoBest(),e.getVideoDetail(),e.getAdvertiseDetails()},methods:{onLoadFun:function(t){},pagesLog:function(e){var i=this;t("log",i.pages,i.id," at pages/video_details/index.vue:166"),(0,s.pagesLog)({pages:i.pages,video_id:i.id}).then((function(e){e.data.isShow?t("log","不弹窗广告",e," at pages/video_details/index.vue:172"):(t("log","弹窗广告",e," at pages/video_details/index.vue:174"),uni.navigateTo({url:"/pages/advertising/index"}))})).catch((function(e){t("log","用户浏览页面记录失败",e," at pages/video_details/index.vue:180"),i.$util.Tips({title:e})}))},getAdvertiseDetails:function(e){var i=this;uni.showLoading({title:"数据加载中"}),(0,o.getAdvertise)({alias:i.aliasDetails}).then((function(e){t("log","请求广告成功",e.data.images," at pages/video_details/index.vue:197"),i.$set(i,"adImg",e.data),uni.hideLoading()})).catch((function(e){t("log","请求广告失败",e," at pages/video_details/index.vue:201"),uni.hideLoading(),i.$util.Tips({title:e})}))},onChannel:function(e){var i=this;1==e?(i.$set(i,"video_link",i.videoInfo.video_link_one),i.channel=1,t("log","选择播放通道",i.videoInfo.video_link_one," at pages/video_details/index.vue:218")):2==e?(i.$set(i,"video_link",i.videoInfo.video_link_two),i.channel=2):3==e?(i.$set(i,"video_link",i.videoInfo.video_link_three),i.channel=3):i.$set(i,"video_link",i.videoInfo.video_link)},getVideoDetail:function(e){var i=this;(0,d.getVideoDetail)(i.id).then((function(e){t("log","获取电影详情",e," at pages/video_details/index.vue:237");var n=e.data.videoInfo;i.$set(i,"videoInfo",n),i.$set(i,"description",n.description),i.$set(i,"video_link",n.video_link_one)}))},getVideoBest:function(e){var i=this,n=(i.$config.LIMIT,{page:i.page,limit:9});i.isScroll&&(0,d.getVideoBest)(n).then((function(e){t("log","请求精选影片",e," at pages/video_details/index.vue:258"),i.isScroll=e.data.length>=i.limit,i.bastList=i.bastList.concat(e.data),i.page+=1})).catch((function(e){t("log","请求精选影片失败",e," at pages/video_details/index.vue:263"),i.loading=!1,i.loadTitle="加载更多"}))},changeVideo:function(t){var e=this;this.isLogin?(uni.showLoading({title:"数据加载中"}),(0,s.getUserInfo)().then((function(i){if(uni.hideLoading(),0===i.data.spread_count)return e.$util.Tips({title:"暂无名额查看精选影片"});uni.navigateTo({url:"/pages/video_details/index?id=".concat(t.id)})}))):(0,r.toLogin)()},goLink:function(e){var i=this;t("log","广告跳转",e," at pages/video_details/index.vue:300"),(0,s.setUserBrowse)({alias:i.aliasDetails,id:e.id}).then((function(i){t("log","记录广告浏览成功",i," at pages/video_details/index.vue:306"),window.open(e.url)})).catch((function(e){t("log","记录广告浏览失败",e," at pages/video_details/index.vue:316"),i.$util.Tips({title:e})}))},returns:function(t){uni.navigateBack()},scroll:function(t){var e=this,i=t.detail.scrollTop,n=i/200;if(n=n>1?1:n,e.$set(e,"opacity",n),e.$set(e,"scrollY",i),e.lock)e.$set(e,"lock",!1);else for(var a=0;a<e.topArr.length;a++)if(i<e.topArr[a]-f.globalData.navHeight/2+e.heightArr[a]){e.$set(e,"navActive",a);break}}},onPullDownRefresh:function(){},onReachBottom:function(){this.getVideoBest()}};e.default=p}).call(this,i("0de9")["log"])}}]);