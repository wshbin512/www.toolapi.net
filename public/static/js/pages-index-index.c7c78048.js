(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"079f":function(t,i,e){"use strict";e("a9e3"),e("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{speed:10,digit:1e3}},props:{digitTo:{type:Number,default:1e3},digitFrom:{type:Number,default:0},runTime:{type:Number,default:1e3},digitFiex:{type:Number,default:0},digitDelay:{type:Number,default:1e3},modeType:{type:String,default:"RANDOM"},textColor:{type:String,default:"zh_text_black"}},methods:{start:function(){var t=this;if(t.digit=t.digitFrom,"RANDOM"==t.modeType)var i=t.runTime/t.speed,e=setInterval((function(){var n=0;if(0==i)clearInterval(e);else if(1==i){var o=(t.digitTo-t.digit)/i;n=o}else{o=(t.digitTo-t.digit)/i;n=parseFloat(Math.random()*o).toFixed(t.digitFiex)}t.digit=(parseFloat(t.digit)+parseFloat(n)).toFixed(t.digitFiex),i--}),t.speed);else if("AVERAGE"==t.modeType){i=t.runTime/t.speed;var n=(t.digitTo-t.digitFrom)/i,o=0,a=setInterval((function(){t.digit=parseFloat(t.digitFrom+n*o).toFixed(t.digitFiex),i==o&&clearInterval(a),o++}),t.speed)}}},created:function(){var t=this;setTimeout((function(){t.start()}),t.digitDelay)},watch:{digitTo:function(t,i){this.digitFrom=i,this.start()}}};i.default=n},"1fbd":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={zhihuaiDigitJump:e("625b").default},o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"coupon-window",class:1==t.window?"on":"",style:"background-image: url("+t.couponImage+")"}),n("v-uni-view",{staticClass:"bottom",attrs:{hidden:0==t.window}},[n("v-uni-image",{attrs:{src:e("5293")}}),n("v-uni-view",{staticClass:"b-t"},[t._v("欢迎来到印度最多的影视UTV平台")]),n("v-uni-view",{staticClass:"list acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"number"},[n("zhihuai-DigitJump",{attrs:{digitTo:t.regNum,digitFiex:0}})],1),n("v-uni-view",[t._v("注册会员人数")])],1),n("v-uni-view",[n("v-uni-view",{staticClass:"number"},[n("zhihuai-DigitJump",{attrs:{digitTo:t.lineNum,digitFiex:0}})],1),n("v-uni-view",[t._v("在线会员人数")])],1)],1)],1),n("v-uni-view",{staticClass:"times",attrs:{hidden:0==t.window}},[t._v(t._s(t.times)+"s 跳过")]),n("v-uni-view",{staticClass:"mask",attrs:{catchtouchmove:"true",hidden:0==t.window}})],1)},a=[]},"30be":function(t,i,e){"use strict";var n=e("9317"),o=e.n(n);o.a},4309:function(t,i,e){"use strict";e.r(i);var n=e("7573"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"44e77":function(t,i,e){"use strict";e.r(i);var n=e("1fbd"),o=e("bc43");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("9aa1");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"3c829e94",null,!1,n["a"],r);i["default"]=d.exports},5293:function(t,i,e){t.exports=e.p+"static/img/sort-img.89ae42b1.png"},5629:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.no-box[data-v-b1b2ddb0]{height:27px;background:#f5f5f5}.recommend[data-v-b1b2ddb0]{background-color:#fff}.recommend .title[data-v-b1b2ddb0]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-b1b2ddb0]{margin:0 %?28?%}.recommend .title .iconfont[data-v-b1b2ddb0]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-b1b2ddb0]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-b1b2ddb0]{padding:0 %?30?%}.recommend .recommendList .item[data-v-b1b2ddb0]{width:%?335?%;margin-bottom:%?30?%}.recommend .recommendList .item .pictrue[data-v-b1b2ddb0]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue uni-image[data-v-b1b2ddb0]{width:100%;height:100%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-b1b2ddb0]{font-size:%?28?%;color:#282828;margin-top:%?20?%}.recommend .recommendList .item .money[data-v-b1b2ddb0]{font-size:%?20?%;margin-top:%?8?%}.recommend .recommendList .item .money .num[data-v-b1b2ddb0]{font-size:%?28?%}',""]),t.exports=i},"5dc5":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".Loads[data-v-60697522]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-60697522]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-60697522{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-60697522{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-60697522]{-webkit-animation:load-data-v-60697522 3s linear 1s infinite;animation:load-data-v-60697522 3s linear 1s infinite}.loading[data-v-60697522]{-webkit-animation:load-data-v-60697522 linear 1s infinite;animation:load-data-v-60697522 linear 1s infinite}",""]),t.exports=i},"61f7":function(t,i,e){"use strict";var n=e("8082"),o=e.n(n);o.a},"625b":function(t,i,e){"use strict";e.r(i);var n=e("befc"),o=e("b9d0");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("e240");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7596adf0",null,!1,n["a"],r);i["default"]=d.exports},6993:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".zh_text_white[data-v-7596adf0]{color:#fff}.zh_text_black[data-v-7596adf0]{color:#fff}",""]),t.exports=i},7573:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("26cb"),o=e("f30d"),a={computed:(0,n.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(t){(0,o.goShopDetail)(t,this.uid).then((function(i){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};i.default=a},8082:function(t,i,e){var n=e("5dc5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("1d9699f2",n,!0,{sourceMap:!1,shadowMode:!1})},"872f":function(t,i,e){var n=e("e5ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("25b5c8e1",n,!0,{sourceMap:!1,shadowMode:!1})},"8fe2":function(t,i,e){"use strict";(function(t){var n=e("4ea4");e("99af"),e("4160"),e("d81d"),e("fb6a"),e("4e82"),e("a434"),e("b64b"),e("4d63"),e("ac1f"),e("25f0"),e("466d"),e("841c"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o,a=n(e("ade3")),r=n(e("5530")),s=n(e("44e77")),d=e("8573"),c=e("ebfc"),u=n(e("6706")),l=n(e("2f7f")),f=n(e("3a31")),g=e("26cb"),p=e("6301"),v=e("f30d"),h=e("5f0a"),m=n(e("1356")),b=n(e("b750")),w=n(e("d5b8")),y=(getApp(),uni.getSystemInfoSync().statusBarHeight+"px"),x=(o={components:(0,r.default)({recommend:w.default,Loading:b.default,pageFooter:m.default,advertisingWindow:s.default,videoData:l.default,videoSift:f.default},u.default),computed:(0,g.mapGetters)(["isLogin"])},(0,a.default)(o,"computed",{second:function(){return this.num(this.seconds)},minute:function(){return this.num(this.minutes)}}),(0,a.default)(o,"data",(function(){var t;return t={styleConfig:[],tempArr:[],goodType:3,loading:!1,loadend:!1,loadTitle:"下拉加载更多",page:1,limit:this.$config.LIMIT,iSshowH:!1,numConfig:0,code:"",isAdvertisingShow:!0,couponObj:{},couponObjs:{show:!1},shareInfo:{},footConfig:{},isSortType:0,sortList:"",sortAll:[],goodPage:1,goodList:[],sid:0,curSort:0,loaded:!1},(0,a.default)(t,"loading",!1),(0,a.default)(t,"hostProduct",[]),(0,a.default)(t,"hotScroll",!1),(0,a.default)(t,"hotPage",1),(0,a.default)(t,"hotLimit",10),(0,a.default)(t,"domOffsetTop",50),(0,a.default)(t,"isFixed",!1),(0,a.default)(t,"site_config",""),(0,a.default)(t,"minutes",0),(0,a.default)(t,"seconds",5),(0,a.default)(t,"couponImage","/static/images/bg.png"),(0,a.default)(t,"regNum",1e4),(0,a.default)(t,"lineNum",5e3),(0,a.default)(t,"sysHeight",y),t})),(0,a.default)(o,"onLoad",(function(t){var i=this;t.state,t.scope;uni.getLocation({type:"wgs84",success:function(t){try{uni.setStorageSync("user_latitude",t.latitude),uni.setStorageSync("user_longitude",t.longitude)}catch(i){}}}),this.diyData(),this.getIndexData(),this.setOpenShare(),(0,c.getShare)().then((function(t){i.shareInfo=t.data}))})),(0,a.default)(o,"mounted",(function(){this.timer()})),(0,a.default)(o,"watch",{second:{handler:function(t){this.num(t)}},minute:{handler:function(t){this.num(t)}},isLogin:{deep:!0,handler:function(t,i){var e=(new Date).toLocaleDateString();if(t){try{var n=uni.getStorageSync("oldDate")||""}catch(o){}n!=e&&this.getCoupon()}}}}),(0,a.default)(o,"onShow",(function(){var t=this;(0,d.siteConfig)().then((function(i){t.site_config=i.data.record_No})).catch((function(t){}));(new Date).toLocaleDateString();this.isLogin&&this.getCoupon()})),(0,a.default)(o,"onReady",(function(){})),(0,a.default)(o,"methods",{num:function(t){return 0===this.minutes&&this.seconds,0===this.minutes&&0===this.seconds&&(this.isAdvertisingShow=!1),t<10?"0"+t:""+t},timer:function(){var t=this,i=window.setInterval((function(){0===t.seconds&&0!==t.minutes?(t.seconds=59,t.minutes-=1):0===t.minutes&&0===t.seconds?(t.seconds=0,window.clearInterval(i)):t.seconds-=1}),1e3)},goICP:function(){window.open("http://beian.miit.gov.cn/")},bindHeight:function(t){uni.hideLoading(),this.domOffsetTop=t.top,this.sortMpTop=10},goGoodsDetail:function(t){(0,v.goShopDetail)(t,this.uid).then((function(i){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))},get_host_product:function(){var t=this;t.hotScroll||(0,p.getProductHot)(t.hotPage,t.hotLimit).then((function(i){t.hotPage++,t.hotScroll=i.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(i.data)}))},changeSort:function(t,i){this.curSort!=i&&(this.curSort=i,this.sid=t.id,this.goodList=[],this.goodPage=1,this.loaded=!1,this.getGoodsList())},bindSortId:function(t){this.isSortType=-99==t?0:1,this.getProductList(t),0==this.hostProduct.length&&this.get_host_product()},getProductList:function(t){var i=this;this.curSort=0,this.loaded=!1,this.sortAll.length>0?(this.sortAll.forEach((function(e,n){e.id==t&&(i.$set(i,"sortList",e),i.sid=e.children.length?e.children[0].id:"")})),this.goodList=[],this.goodPage=1,this.$nextTick((function(){""!=i.sortList&&i.getGoodsList()}))):(0,p.getCategoryList)().then((function(e){i.sortAll=e.data,e.data.forEach((function(e,n){e.id==t&&(i.sortList=e,i.sid=e.children.length?e.children[0].id:"")})),i.goodList=[],i.goodPage=1,i.$nextTick((function(){""!=i.sortList&&i.getGoodsList()}))}))},getGoodsList:function(){var t=this;this.loading||this.loaded||(this.loading=!0,(0,p.getProductslist)({sid:this.sid,keyword:"",priceOrder:"",salesOrder:"",news:0,page:this.goodPage,limit:10,cid:this.sortList.id}).then((function(i){t.loading=!1,t.loaded=i.data.length<10,t.goodPage++,t.goodList=t.goodList.concat(i.data)})))},getNewCoupon:function(){var t=this,i=uni.getStorageSync("oldUser")||0;i||(0,d.getCouponNewUser)().then((function(i){var e=i.data;e.show?e.list.length&&(t.isCouponShow=!0,t.couponObj=e,uni.setStorageSync("oldUser",1)):uni.setStorageSync("oldUser",1)}))},getCoupon:function(){var t=this,i=uni.getStorageSync("tagDate")||"",e=(new Date).toLocaleDateString();i===e?this.getNewCoupon():(0,d.getCouponV2)().then((function(i){var e=i.data;e.list.length?(t.isCouponShow=!0,t.couponObj=e,uni.setStorageSync("tagDate",(new Date).toLocaleDateString())):t.getNewCoupon()}))},couponClose:function(){this.isCouponShow=!1,uni.getStorageSync("oldUser")||this.getNewCoupon()},onLoadFun:function(){},getQueryString:function(t){var i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),e=new RegExp("(^|/)"+t+"/([^/]*)(/|$)","i"),n=window.location.search.substr(1).match(i),o=window.location.pathname.substr(1).match(e);return null!=n?unescape(n[2]):null!=o?unescape(o[2]):null},objToArr:function(t){var i=Object.keys(t),e=i.map((function(i){return t[i]}));return e},diyData:function(){var t=this;(0,d.getDiy)(0).then((function(i){uni.setNavigationBarTitle({title:i.data.title});var e=[],n=t.objToArr(i.data.value);function o(t,i){return t.timestamp-i.timestamp}n.forEach((function(i,n,o){"pageFoot"==i.name&&o.splice(n,1),"promotionList"==i.name&&(t.numConfig=i.numConfig.val,t.goodType=i.tabConfig.list[0].link.activeVal,t.getGroomList()),"tabNav"==i.name&&uni.showLoading({title:"加载中",mask:!0}),e=o})),e.sort(o),t.styleConfig=e}))},getIndexData:function(){},changeVideo:function(t){uni.navigateTo({url:"/pages/video_details/index?id=".concat(t.id)})},changeBarg:function(t){this.isLogin?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.id,"&bargain=").concat(this.uid)}):(0,h.toLogin)()},changeTab:function(t){this.goodType=t,this.tempArr=[],this.page=1,this.loadend=!1;var i=!0;this.getGroomList(i)},getGroomList:function(t){var i=this,e=this,n=e.goodType;return!e.loadend&&(!e.loading&&(t&&e.$set(e,"iSshowH",!0),void(0,p.getGroomList)(n,{page:e.page,limit:e.limit}).then((function(t){var n=t.data;e.$set(e,"iSshowH",!1);var o=Math.ceil(i.numConfig/i.limit),a=n.list,r=a.length<e.limit||e.page>=o,s=e.$util.SplitArray(a,e.tempArr);e.$set(e,"tempArr",s.slice(0,i.numConfig)),e.loadend=r,e.loadTitle=r?"我也是有底线的":"下拉加载更多",e.page=e.page+1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle="下拉加载更多"}))))},goDetail:function(t){(0,v.goShopDetail)(t,this.uid).then((function(i){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))},setOpenShare:function(){var t=this;t.$wechat.isWeixin()&&(0,c.getShare)().then((function(i){var e=i.data.data,n={desc:e.synopsis,title:e.title,link:location.href,imgUrl:e.img};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)}))}}),(0,a.default)(o,"onReachBottom",(function(){0==this.isSortType?this.getGroomList():this.getGoodsList()})),(0,a.default)(o,"onPageScroll",(function(t){var i=this;t.scrollTop>=this.domOffsetTop?this.isFixed=!0:this.$nextTick((function(){i.isFixed=!1}))})),o);i.default=x}).call(this,e("5a52")["default"])},9317:function(t,i,e){var n=e("5629");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("56b3596d",n,!0,{sourceMap:!1,shadowMode:!1})},"9aa1":function(t,i,e){"use strict";var n=e("872f"),o=e.n(n);o.a},"9ceb":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};i.default=n},"9d96":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.loading&&!t.loaded?e("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?e("v-uni-view",[e("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("正在加载中")],1):e("v-uni-view",[t._v("上拉加载更多")])],1):t._e()],1)},a=[]},b750:function(t,i,e){"use strict";e.r(i);var n=e("9d96"),o=e("e3dd");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("61f7");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"60697522",null,!1,n["a"],r);i["default"]=d.exports},b9d0:function(t,i,e){"use strict";e.r(i);var n=e("079f"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},bc43:function(t,i,e){"use strict";e.r(i);var n=e("daf9"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},befc:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{class:[t.textColor]},[t._v(t._s(t.digit))])},a=[]},c9f9:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"index"},[t._l(t.styleConfig,(function(i,n){return e("v-uni-view",{key:n},[e(i.name,{tag:"component",attrs:{index:n,dataConfig:i,tempArr:t.tempArr,iSshowH:t.iSshowH,isSortType:t.isSortType,isFixed:t.isFixed},on:{changeBarg:function(i){arguments[0]=i=t.$handleEvent(i),t.changeBarg.apply(void 0,arguments)},changeTab:function(i){arguments[0]=i=t.$handleEvent(i),t.changeTab.apply(void 0,arguments)},detail:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail.apply(void 0,arguments)},bindSortId:function(i){arguments[0]=i=t.$handleEvent(i),t.bindSortId.apply(void 0,arguments)},bindHeight:function(i){arguments[0]=i=t.$handleEvent(i),t.bindHeight.apply(void 0,arguments)}}})],1)})),e("videoData",{attrs:{isSortType:t.isSortType},on:{changeVideo:function(i){arguments[0]=i=t.$handleEvent(i),t.changeVideo.apply(void 0,arguments)}}}),e("videoSift",{attrs:{isSortType:t.isSortType},on:{changeVideo:function(i){arguments[0]=i=t.$handleEvent(i),t.changeVideo.apply(void 0,arguments)}}}),1==t.isSortType?e("v-uni-view",{staticClass:"sort-product",style:{marginTop:t.sortMpTop+"px"}},[e("v-uni-scroll-view",{staticStyle:{background:"#fff"},attrs:{"scroll-x":"true"}},[t.sortList.children.length?e("v-uni-view",{staticClass:"sort-box"},t._l(t.sortList.children,(function(i,n){return e("v-uni-view",{key:n,staticClass:"sort-item",class:{on:t.curSort==n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSort(i,n)}}},[i.pic?e("v-uni-image",{attrs:{src:i.pic,mode:""}}):e("v-uni-image",{attrs:{src:"/static/images/sort-img.png",mode:""}}),e("v-uni-view",{staticClass:"txt"},[t._v(t._s(i.cate_name))])],1)})),1):t._e()],1),t.goodList.length?e("v-uni-view",{staticClass:"product-list"},t._l(t.goodList,(function(i,n){return e("v-uni-view",{staticClass:"product-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail(i)}}},[e("v-uni-image",{attrs:{src:i.image}}),i.activity&&"1"===i.activity.type?e("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),i.activity&&"2"===i.activity.type?e("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),i.activity&&"3"===i.activity.type?e("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e(),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"title line1"},[t._v(t._s(i.store_name))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",[t._v("￥")]),t._v(t._s(i.price))],1)],1)],1)})),1):t._e(),e("Loading",{attrs:{loaded:t.loaded,loading:t.loading}}),0==t.goodList.length&&t.loaded?e("v-uni-view",{},[e("v-uni-view",{staticClass:"empty-box"},[e("v-uni-image",{attrs:{src:"/static/images/noShopper.png"}})],1),e("recommend",{attrs:{hostProduct:t.hostProduct}})],1):t._e()],1):t._e(),t.tempArr.length&&"promotionList"==t.styleConfig[t.styleConfig.length-1].name?e("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[e("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),e("advertisingWindow",{attrs:{window:t.isAdvertisingShow,times:t.second,couponImage:t.couponImage,regNum:t.regNum,lineNum:t.lineNum}}),t.site_config?e("v-uni-view",{staticClass:"site-config",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goICP.apply(void 0,arguments)}}},[t._v(t._s(t.site_config))]):t._e(),e("pageFooter")],2)},a=[]},cb97:function(t,i,e){var n=e("cd5b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("74b3bebd",n,!0,{sourceMap:!1,shadowMode:!1})},cd5b:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.sort-product[data-v-5a366828]{margin-top:%?20?%}.sort-product .sort-box[data-v-5a366828]{display:flex;width:100%;border-radius:%?16?%;padding:%?30?% 0}.sort-product .sort-box .sort-item[data-v-5a366828]{width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0}.sort-product .sort-box .sort-item uni-image[data-v-5a366828]{width:%?90?%;height:%?90?%;border-radius:50%}.sort-product .sort-box .sort-item .txt[data-v-5a366828]{color:#272727;font-size:%?24?%;margin-top:%?10?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.sort-product .sort-box .sort-item .pictrues[data-v-5a366828]{width:%?90?%;height:%?90?%;background:#f8f8f8;border-radius:50%;margin:0 auto}.sort-product .sort-box .sort-item .icon-gengduo1[data-v-5a366828]{color:#333}.sort-product .sort-box .sort-item.on .txt[data-v-5a366828]{color:#fc4141}.sort-product .sort-box .sort-item.on uni-image[data-v-5a366828]{border:1px solid #fc4141}.sort-product .product-list[data-v-5a366828]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?30?%;padding:0 %?20?%}.sort-product .product-list .product-item[data-v-5a366828]{position:relative;width:%?344?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%}.sort-product .product-list .product-item uni-image[data-v-5a366828]{width:100%;height:%?344?%;border-radius:%?10?% %?10?% 0 0}.sort-product .product-list .product-item .info[data-v-5a366828]{padding:%?14?% %?16?%}.sort-product .product-list .product-item .info .title[data-v-5a366828]{font-size:%?28?%}.sort-product .product-list .product-item .info .price-box[data-v-5a366828]{font-size:%?34?%;font-weight:700;margin-top:8px;color:#fc4141}.sort-product .product-list .product-item .info .price-box uni-text[data-v-5a366828]{font-size:%?26?%}.empty-box[data-v-5a366828]{text-align:center}.empty-box uni-image[data-v-5a366828]{width:%?414?%;height:%?336?%}.site-config[data-v-5a366828]{margin-top:%?40?%;font-size:%?28?%;text-align:center;color:#666}.site-config.fixed[data-v-5a366828]{position:fixed;bottom:69px;left:0;width:100%}',""]),t.exports=i},cdf0:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"recommend"},[e("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[e("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),e("v-uni-text",{staticClass:"name"},[t._v("热门推荐")]),e("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),e("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(i,n){return e("v-uni-view",{key:n,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(i)}}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:i.image}}),i.activity&&"1"===i.activity.type?e("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),i.activity&&"2"===i.activity.type?e("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),i.activity&&"3"===i.activity.type?e("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e()],1),e("v-uni-view",{staticClass:"name line1"},[t._v(t._s(i.store_name))]),e("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),e("v-uni-text",{staticClass:"num"},[t._v(t._s(i.price))])],1)],1)})),1),t.hostProduct.length<=2?e("v-uni-view",{staticClass:"no-box"}):t._e()],1)},a=[]},d5b8:function(t,i,e){"use strict";e.r(i);var n=e("cdf0"),o=e("4309");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("30be");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"b1b2ddb0",null,!1,n["a"],r);i["default"]=d.exports},daf9:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{window:{type:Boolean|String|Number,default:!1},times:{type:Boolean|String|Number,default:!1},regNum:{type:Number,default:!1},lineNum:{type:Number,default:!1},couponImage:{type:String,default:""}},data:function(){return{}},methods:{close:function(){this.$emit("onColse")}}};i.default=n},e240:function(t,i,e){"use strict";var n=e("f6bf"),o=e.n(n);o.a},e3dd:function(t,i,e){"use strict";e.r(i);var n=e("9ceb"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},e5ed:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.times[data-v-3c829e94]{position:fixed;top:%?20?%;right:%?20?%;padding:%?5?% %?10?%;background:#666;text-align:center;color:#fff;z-index:999}.bottom[data-v-3c829e94]{position:fixed;bottom:%?0?%;right:%?0?%;padding:%?5?% %?10?%;background:hsla(0,0%,40%,.3);text-align:center;color:#fff;z-index:999;width:%?750?%;text-align:center;font-weight:600}.bottom uni-image[data-v-3c829e94]{width:%?200?%;height:%?200?%;margin:%?20?% auto}.bottom .b-t[data-v-3c829e94]{line-height:%?80?%}.bottom .list[data-v-3c829e94]{padding:%?50?%;line-height:%?80?%;margin-bottom:%?20?%;color:#fff}.bottom .list .left[data-v-3c829e94]{border-right:solid %?2?% #fff;margin-right:%?80?%;padding-right:%?80?%}.bottom .list .number[data-v-3c829e94]{font-size:%?48?%}.coupon-window[data-v-3c829e94]{background-repeat:no-repeat;background-size:100% 100%;width:%?750?%;height:100%;position:fixed;top:0;left:0;z-index:99;-webkit-transform:translate3d(0,-200%,0);transform:translate3d(0,-200%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.coupon-window.on[data-v-3c829e94]{-webkit-transform:translateZ(0);transform:translateZ(0)}.coupon-window .couponWinList[data-v-3c829e94]{width:%?750?%;height:%?1000?%;overflow:auto;text-align:center;background:#e6e6e6}.coupon-window .couponWinList uni-image[data-v-3c829e94]{width:%?200?%;height:%?200?%;margin:%?400?% auto 0}.coupon-window .couponWinList .item[data-v-3c829e94]{width:100%;height:%?120?%;background-color:#fff;position:relative;margin-bottom:%?17?%}.coupon-window .couponWinList .item[data-v-3c829e94]::after{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:#f2443a;left:25.5%;bottom:0;margin-bottom:%?-9?%}.coupon-window .couponWinList .item[data-v-3c829e94]::before{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:#f2443a;left:25.5%;top:0;margin-top:%?-9?%}.coupon-window .couponWinList .item .money[data-v-3c829e94]{width:%?130?%;border-right:1px dashed #ddd;height:100%;text-align:center;line-height:%?120?%;font-size:%?26?%;font-weight:700}.coupon-window .couponWinList .item .money .num[data-v-3c829e94]{font-size:%?40?%}.coupon-window .couponWinList .item .text[data-v-3c829e94]{width:%?349?%;font-size:%?22?%;color:#999;padding:0 %?29?%;box-sizing:border-box}.coupon-window .couponWinList .item .text .name[data-v-3c829e94]{font-size:%?26?%;color:#282828;font-weight:700;margin-bottom:%?9?%}.coupon-window .lid[data-v-3c829e94]{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-size:100% 100%;width:%?573?%;height:%?224?%;position:fixed;left:50%;top:20%;margin:%?424?% 0 0 %?-296?%}.coupon-window .lid .bnt[data-v-3c829e94]{font-size:%?29?%;width:%?440?%;height:%?80?%;border-radius:%?40?%;background-color:#f9f1d3;text-align:center;line-height:%?80?%;font-weight:700;margin:%?98?% auto 0 auto}.coupon-window .lid .iconfont[data-v-3c829e94]{color:#fff;font-size:%?60?%;text-align:center;margin-top:%?87?%}',""]),t.exports=i},eca4:function(t,i,e){"use strict";e.r(i);var n=e("c9f9"),o=e("fae6");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("fcff");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"5a366828",null,!1,n["a"],r);i["default"]=d.exports},f6bf:function(t,i,e){var n=e("6993");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("6decd2be",n,!0,{sourceMap:!1,shadowMode:!1})},fae6:function(t,i,e){"use strict";e.r(i);var n=e("8fe2"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},fcff:function(t,i,e){"use strict";var n=e("cb97"),o=e.n(n);o.a}}]);