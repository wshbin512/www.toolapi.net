(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video_cate-index"],{"0011":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-footer[data-v-30ad9c36]{position:fixed;bottom:0;z-index:30;display:flex;align-items:center;width:100%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-30ad9c36]{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column}.page-footer .foot-item uni-image[data-v-30ad9c36]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-30ad9c36]{font-size:%?24?%}',""]),t.exports=e},1356:function(t,e,i){"use strict";i.r(e);var a=i("8649"),n=i("638d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("dbac");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"30ad9c36",null,!1,a["a"],r);e["default"]=d.exports},"38c3":function(t,e,i){"use strict";i.r(e);var a=i("5fb1"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"4e42":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"navTabBox"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"serch-wrapper acea-row row-middle"},[i("v-uni-navigator",{staticClass:"input fillet on acea-row row-middle",attrs:{url:"/pages/video_search/index","hover-class":"none"}},[i("v-uni-text",{staticClass:"iconfont icon-sousuo"}),t._v("智能搜索")],1)],1)],1),i("v-uni-view",{staticClass:"longTab"},[i("v-uni-scroll-view",{staticStyle:{"white-space":"nowrap",display:"flex"},attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.tabLeft,"show-scrollbar":"true"}},[t._l(t.tabTitle,(function(e,a){return i("v-uni-view",{key:a,staticClass:"longItem",class:a===t.tabClick?"click":"",style:"width:"+t.isWidth+"px",attrs:{url:"/pages/video_list/index?cid="+e.id+"&title="+e.cate_name,"data-index":a,id:"id"+a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.longClick(e,a)}}},[t._v(t._s(e.cate_name))])})),i("v-uni-view",{staticClass:"underlineBox",style:"transform:translateX("+t.isLeft+"px);width:"+t.isWidth+"px"},[i("v-uni-view",{staticClass:"underline"})],1)],2)],1),1==t.isSortType?i("v-uni-view",{staticClass:"sort-product"},[i("v-uni-scroll-view",{staticStyle:{background:"#fff"},attrs:{"scroll-x":"true"}},[t.sortList.children.length?i("v-uni-view",{staticClass:"sort-box"},t._l(t.sortList.children,(function(e,a){return i("v-uni-view",{key:a,staticClass:"sort-item",class:{on:t.curSort==a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeSort(e,a)}}},[e.pic?i("v-uni-image",{attrs:{src:e.pic,mode:""}}):i("v-uni-image",{attrs:{src:"/static/images/sort-img.png",mode:""}}),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(e.cate_name))])],1)})),1):t._e()],1),t.goodList.length?i("v-uni-view",{staticClass:"product-list"},[t._l(t.goodList,(function(e,a){return i("v-uni-view",{staticClass:"product-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goGoodsDetail(e)}}},[i("v-uni-image",{attrs:{src:e.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1)})),t._l(t.goodList,(function(e,a){return i("v-uni-view",{staticClass:"product-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goGoodsDetail(e)}}},[i("v-uni-image",{attrs:{src:e.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1)})),t._l(t.goodList,(function(e,a){return i("v-uni-view",{staticClass:"product-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goGoodsDetail(e)}}},[i("v-uni-image",{attrs:{src:e.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1)}))],2):t._e(),i("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],1):i("v-uni-view",{staticClass:"sort-product"},[i("v-uni-view",{staticClass:"product-list"},[i("v-uni-view",{staticClass:"product-item"},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1),i("v-uni-view",{staticClass:"product-item"},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1),i("v-uni-view",{staticClass:"product-item"},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1),i("v-uni-view",{staticClass:"product-item"},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1),i("v-uni-view",{staticClass:"product-item"},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1),i("v-uni-view",{staticClass:"product-item"},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title line1"},[t._v("影片标题")])],1)],1)],1)],1),i("pageFooter")],1)},o=[]},"565e":function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530")),o=i("26cb"),r=i("ebfc"),s={name:"pageFooter",props:{curTitle:{type:String|Number}},computed:(0,n.default)({},(0,o.mapState)({configData:function(t){return t.app.pageFooter}})),watch:{configData:{handler:function(t,e){var i=this,a=uni.createSelectorQuery().in(this);this.newData=t,this.$nextTick((function(){a.select("#target").boundingClientRect((function(t){i.footHeight=t.height+20})).exec()}))},deep:!0}},created:function(){var t=this;(0,r.getNavigation)().then((function(e){uni.setStorageSync("pageFoot",e.data),t.$store.commit("FOOT_UPLOAD",e.data)}))},mounted:function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e,this.newData=this.$store.state.app.pageFooter},data:function(){return{newData:{},activeRouter:"/",footHeight:0}},methods:{goRouter:function(t){t.name!=this.curTitle&&uni.reLaunch({url:t.link})}}};e.default=s},"5dc5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".Loads[data-v-60697522]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-60697522]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-60697522{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-60697522{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-60697522]{-webkit-animation:load-data-v-60697522 3s linear 1s infinite;animation:load-data-v-60697522 3s linear 1s infinite}.loading[data-v-60697522]{-webkit-animation:load-data-v-60697522 linear 1s infinite;animation:load-data-v-60697522 linear 1s infinite}",""]),t.exports=e},"5fb1":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("99af"),i("4160"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("ade3")),r=i("6301"),s=i("26cb"),d=a(i("1356")),c=a(i("b750")),u=(n={computed:(0,s.mapGetters)(["isLogin","uid"]),components:{Loading:c.default,pageFooter:d.default},data:function(){return{tabTitle:[],tabLeft:0,isWidth:0,tabClick:0,isLeft:0,fixedTop:0,isTop:0,isSortType:0,curSort:0,goodPage:1,goodList:[],loaded:!1,loading:!1,sid:15,cid:13,sortList:"",image:"https://crmen.oss-cn-shenzhen.aliyuncs.com/0072020200719090731176772.jpg"}}},(0,o.default)(n,"computed",(0,s.mapGetters)(["isLogin"])),(0,o.default)(n,"created",(function(){var t=this;t.getAllCategory(),uni.getSystemInfo({success:function(e){t.isWidth=e.windowWidth/5}})})),(0,o.default)(n,"onLoad",(function(t){this.getProductList(this.cid)})),(0,o.default)(n,"onShow",(function(){})),(0,o.default)(n,"mounted",(function(){var t=this;this.$nextTick((function(){t.isTop=0}))})),(0,o.default)(n,"methods",{longClick:function(t,e){this.tabTitle.length>5&&(this.tabLeft=(e-2)*this.isWidth),this.tabClick=e,this.isLeft=e*this.isWidth,t.id,this.getProductList(t.id)},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/video_details/index?id=".concat(t.id)})},changeSort:function(t,e){this.curSort!=e&&(this.curSort=e,this.sid=t.id,this.goodList=[],this.goodPage=1,this.loaded=!1,this.getGoodsList())},getProductList:function(t){var e=this;this.curSort=0,this.loaded=!1,(0,r.getCategoryList)().then((function(i){e.sortAll=i.data,i.data.forEach((function(i,a){i.id==t&&(e.sortList=i,e.sid=i.children.length?i.children[0].id:"")})),e.goodList=[],e.goodPage=1,e.$nextTick((function(){""!=e.sortList&&e.getGoodsList(t)}))}))},getGoodsList:function(t){var e=this;this.loading||this.loaded||(this.loading=!0,this.sortList.id,(0,r.getProductslist)({sid:this.sid,keyword:"",priceOrder:"",salesOrder:"",news:0,page:this.goodPage,limit:10,cid:this.sortList.id}).then((function(i){e.loading=!1,e.loaded=i.data.length<10,e.goodPage++,e.goodList=e.goodList.concat(i.data),e.isSortType=-99==t?0:1})))},getAllCategory:function(){var t=this,e=this;(0,r.getCategoryList)().then((function(i){e.tabTitle=i.data,setTimeout((function(i){var a=uni.createSelectorQuery().in(t);a.select(".navTabBox").boundingClientRect((function(t){e.domOffsetTop=t.top,e.$emit("bindHeight",t)})).exec()}),1e3)}))}}),n);e.default=u}).call(this,i("5a52")["default"])},"61f7":function(t,e,i){"use strict";var a=i("8082"),n=i.n(a);n.a},6301:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=o,e.getProductCode=r,e.collectAdd=s,e.collectDel=d,e.postCartAdd=c,e.getCategoryList=u,e.getProductslist=l,e.getProductHot=f,e.collectAll=v,e.getGroomList=g,e.getCollectUserList=p,e.getReplyList=h,e.getReplyConfig=m,e.getSearchKeyword=w,e.storeListApi=b;var n=a(i("8d0b"));function o(t){return n.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return n.default.get("product/code/"+t,{})}function s(t,e){return n.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function d(t,e){return n.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function c(t){return n.default.post("cart/add",t)}function u(){return n.default.get("category",{},{noAuth:!0})}function l(t){return n.default.get("products",t,{noAuth:!0})}function f(t,e){return n.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function v(t,e){return n.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function g(t,e){return n.default.get("groom/list/"+t,e,{noAuth:!0})}function p(t){return n.default.get("collect/user",t)}function h(t,e){return n.default.get("reply/list/"+t,e)}function m(t){return n.default.get("reply/config/"+t)}function w(){return n.default.get("search/keyword",{},{noAuth:!0})}function b(t){return n.default.get("store_list",t)}},"638c":function(t,e,i){var a=i("0011");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("559a6f8f",a,!0,{sourceMap:!1,shadowMode:!1})},"638d":function(t,e,i){"use strict";i.r(e);var a=i("565e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},8082:function(t,e,i){var a=i("5dc5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1d9699f2",a,!0,{sourceMap:!1,shadowMode:!1})},8649:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{style:{height:t.footHeight+"px"}}),i("v-uni-view",[i("v-uni-view",{staticClass:"page-footer",style:{"background-color":t.configData.bgColor.color[0].item},attrs:{id:"target"}},t._l(t.configData.menuList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"foot-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goRouter(e)}}},[e.link==t.activeRouter?[i("v-uni-image",{attrs:{src:e.imgList[0]}}),i("v-uni-view",{staticClass:"txt",style:{color:t.configData.activeTxtColor.color[0].item}},[t._v(t._s(e.name))])]:[i("v-uni-image",{attrs:{src:e.imgList[1]}}),i("v-uni-view",{staticClass:"txt",style:{color:t.configData.txtColor.color[0].item}},[t._v(t._s(e.name))])]],2)})),1)],1)],1)},o=[]},"9ceb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};e.default=a},"9d96":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.loading&&!t.loaded?i("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?i("v-uni-view",[i("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("正在加载中")],1):i("v-uni-view",[t._v("上拉加载更多")])],1):t._e()],1)},o=[]},aa88:function(t,e,i){var a=i("eabe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e5c09624",a,!0,{sourceMap:!1,shadowMode:!1})},ad48:function(t,e,i){"use strict";var a=i("aa88"),n=i.n(a);n.a},b750:function(t,e,i){"use strict";i.r(e);var a=i("9d96"),n=i("e3dd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("61f7");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"60697522",null,!1,a["a"],r);e["default"]=d.exports},dbac:function(t,e,i){"use strict";var a=i("638c"),n=i.n(a);n.a},e3dd:function(t,e,i){"use strict";i.r(e);var a=i("9ceb"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},eabe:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4fe73897]{background:linear-gradient(90deg,#ff8d1a 50%,#ff8d1a)}.header[data-v-4fe73897]{width:100%;height:%?100?%;background:linear-gradient(90deg,#ff8d1a 50%,#ff8d1a)}.header .serch-wrapper[data-v-4fe73897]{padding:%?20?% %?20?% 0 %?40?%}.header .serch-wrapper .logo[data-v-4fe73897]{width:%?152?%;height:%?60?%;margin-right:%?20?%}.header .serch-wrapper .logo uni-image[data-v-4fe73897]{width:100%;height:100%}.header .serch-wrapper .input[data-v-4fe73897]{flex:1;height:%?58?%;padding:0 0 0 %?30?%;background:#f7f7f7;border:1px solid #f1f1f1;color:#bbb;font-size:%?28?%}.header .serch-wrapper .input .iconfont[data-v-4fe73897]{margin-right:%?20?%}.header .serch-wrapper .input.on[data-v-4fe73897]{width:100%}.header .serch-wrapper .input.fillet[data-v-4fe73897]{border-radius:%?10?%}.header .serch-wrapper .input.row-center[data-v-4fe73897]{padding:0}.sort-product[data-v-4fe73897]{margin-top:%?20?%}.sort-product .sort-box[data-v-4fe73897]{display:flex;width:100%;border-radius:%?0?%;padding:%?30?% 0;background:linear-gradient(90deg,rgba(255,141,26,.8) 50%,rgba(255,141,26,.8))}.sort-product .sort-box .sort-item[data-v-4fe73897]{width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0}.sort-product .sort-box .sort-item uni-image[data-v-4fe73897]{width:%?90?%;height:%?90?%;border-radius:50%}.sort-product .sort-box .sort-item .txt[data-v-4fe73897]{color:#272727;font-size:%?24?%;margin-top:%?10?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.sort-product .sort-box .sort-item .pictrues[data-v-4fe73897]{width:%?90?%;height:%?90?%;background:#f8f8f8;border-radius:50%;margin:0 auto}.sort-product .sort-box .sort-item .icon-gengduo1[data-v-4fe73897]{color:#333}.sort-product .sort-box .sort-item.on .txt[data-v-4fe73897]{color:#fff}.sort-product .sort-box .sort-item.on uni-image[data-v-4fe73897]{border:1px solid #fff}.sort-product .product-list[data-v-4fe73897]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?30?%;padding:0 %?20?%}.sort-product .product-list .product-item[data-v-4fe73897]{position:relative;width:%?224?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%}.sort-product .product-list .product-item uni-image[data-v-4fe73897]{width:100%;height:%?224?%;border-radius:%?10?% %?10?% 0 0}.sort-product .product-list .product-item .info[data-v-4fe73897]{padding:%?14?% %?16?%}.sort-product .product-list .product-item .info .title[data-v-4fe73897]{font-size:%?28?%;color:#666}.sort-product .product-list .product-item .info .price-box[data-v-4fe73897]{font-size:%?34?%;font-weight:700;margin-top:8px;color:#fc4141}.sort-product .product-list .product-item .info .price-box uni-text[data-v-4fe73897]{font-size:%?26?%}.navTabBox[data-v-4fe73897]{width:100%;background:linear-gradient(90deg,#ff8d1a 50%,#ff8d1a);color:#fff;padding-bottom:%?20?%}.navTabBox.isFixed[data-v-4fe73897]{z-index:45;position:fixed;left:0;width:100%;padding-top:%?20?%;top:0}.navTabBox .longTab[data-v-4fe73897]{width:100%}.navTabBox .longTab .longItem[data-v-4fe73897]{height:%?50?%;display:inline-block;line-height:%?50?%;text-align:center;font-size:%?30?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.navTabBox .longTab .longItem.click[data-v-4fe73897]{font-weight:700}.navTabBox .longTab .underlineBox[data-v-4fe73897]{height:3px;width:20%;display:flex;align-content:center;justify-content:center;transition:.5s}.navTabBox .longTab .underlineBox .underline[data-v-4fe73897]{width:%?33?%;height:%?4?%;background-color:#fff}.child-box[data-v-4fe73897]{width:100%;position:relative;background-color:#fff;box-shadow:0 2px 5px 1px rgba(0,0,0,.02)}.child-box .wrapper[data-v-4fe73897]{display:flex;align-items:center;padding:%?20?% 0;background:#fff}.child-box .child-item[data-v-4fe73897]{flex-shrink:0;width:%?140?%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:%?10?%}.child-box .child-item uni-image[data-v-4fe73897]{width:%?90?%;height:%?90?%;border-radius:50%}.child-box .child-item .txt[data-v-4fe73897]{font-size:%?24?%;color:#282828;text-align:center;margin-top:%?10?%}.child-box .child-item.on uni-image[data-v-4fe73897]{border:1px solid rgba(233,51,35,.6)}.child-box .child-item.on .txt[data-v-4fe73897]{color:#e93323}body.?%PAGE?%[data-v-4fe73897]{background:linear-gradient(90deg,#ff8d1a 50%,#ff8d1a)}',""]),t.exports=e},f8ff:function(t,e,i){"use strict";i.r(e);var a=i("4e42"),n=i("38c3");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ad48");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4fe73897",null,!1,a["a"],r);e["default"]=d.exports}}]);