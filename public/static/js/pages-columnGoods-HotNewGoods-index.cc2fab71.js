(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-columnGoods-HotNewGoods-index"],{"1ad1":function(t,i,e){"use strict";var n=e("cb25"),a=e.n(n);a.a},2963:function(t,i,e){"use strict";(function(t){var n=e("4ea4");e("99af"),e("c975"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("ad46")),o=n(e("8731")),r=e("6301"),s=e("f30d"),c=n(e("89af")),u={name:"HotNewGoods",components:{GoodList:o.default,emptyPage:a.default,home:c.default},props:{},data:function(){return{imgUrls:[],goodsList:[],name:"",icon:"",type:0,autoplay:!0,circular:!0,interval:3e3,duration:500,page:1,limit:8,isScroll:!0}},onLoad:function(t){this.type=t.type,this.titleInfo(),this.getIndexGroomList()},methods:{titleInfo:function(){"1"===this.type?(this.name="精品推荐",this.icon="icon-jingpintuijian",uni.setNavigationBarTitle({title:"精品推荐"})):"2"===this.type?(this.name="热门榜单",this.icon="icon-remen",uni.setNavigationBarTitle({title:"热门榜单"})):"3"===this.type?(this.name="首发新品",this.icon="icon-xinpin",uni.setNavigationBarTitle({title:"首发新品"})):"4"===this.type&&(this.name="促销单品",this.icon="icon-xinpin",uni.setNavigationBarTitle({title:"促销单品"}))},goPages:function(t){var i=t.link||"";(0,s.goPage)().then((function(t){-1!=i.indexOf("http")?location.href=i:(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(i),uni.navigateTo({url:i}))}))},getIndexGroomList:function(){if(this.isScroll){var t=this,i=this.type;(0,r.getGroomList)(i,{page:this.page,limit:this.limit}).then((function(i){t.imgUrls=i.data.banner,t.goodsList=t.goodsList.concat(i.data.list),t.isScroll=i.data.list.length>=t.limit,t.page++})).catch((function(i){t.$util.Tips({title:i})}))}}},onReachBottom:function(){this.getIndexGroomList()}};i.default=u}).call(this,e("5a52")["default"])},3409:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{"touch-action":"none"}},[e("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?e("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===t.homeActive?"on":""},[e("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),e("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),e("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),e("v-uni-view",{staticClass:"pictrueBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},o=[]},"4c01":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("26cb"),a={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var i=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(i.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};i.default=a},"5eeb":function(t,i,e){"use strict";e.r(i);var n=e("4c01"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"61e3":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goodList .item[data-v-71e4a12e]{position:relative;padding-left:%?30?%}.goodList .item .pictrue[data-v-71e4a12e]{width:%?180?%;height:%?180?%;position:relative}.goodList .item .pictrue uni-image[data-v-71e4a12e]{width:100%;height:100%;border-radius:%?20?%}.goodList .item .pictrue .numPic[data-v-71e4a12e]{position:absolute;left:%?7?%;top:%?7?%;width:%?50?%;height:%?50?%;border-radius:50%}.goodList .item .underline[data-v-71e4a12e]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #f5f5f5}.goodList .item:nth-last-child(1) .underline[data-v-71e4a12e]{border-bottom:0}.goodList .item .text[data-v-71e4a12e]{font-size:%?30?%;color:#222;width:%?489?%}.goodList .item .text .money[data-v-71e4a12e]{font-size:%?26?%;font-weight:700;margin-top:%?50?%}.goodList .item .text .money .num[data-v-71e4a12e]{font-size:%?34?%}.goodList .item .text .vip-money[data-v-71e4a12e]{font-size:%?24?%;color:#282828;font-weight:700;margin-top:%?15?%}.goodList .item .text .vip-money uni-image[data-v-71e4a12e]{width:%?66?%;height:%?25?%;margin-right:%?8?%;margin-left:%?8?%}.goodList .item .text .vip-money .num[data-v-71e4a12e]{font-size:%?22?%;color:#aaa;font-weight:400;margin-top:%?-2?%}.goodList .item .text .vip-money .num ~ .num[data-v-71e4a12e]{margin-left:%?22?%}.goodList .item .iconfont[data-v-71e4a12e]{position:absolute;right:%?30?%;width:%?50?%;height:%?50?%;border-radius:50%;font-size:%?30?%;bottom:%?38?%}',""]),t.exports=i},6242:function(t,i,e){var n=e("61e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("3d3906bf",n,!0,{sourceMap:!1,shadowMode:!1})},6301:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.getProductDetail=o,i.getProductCode=r,i.collectAdd=s,i.collectDel=c,i.postCartAdd=u,i.getCategoryList=d,i.getProductslist=l,i.getProductHot=f,i.collectAll=v,i.getGroomList=p,i.getCollectUserList=g,i.getReplyList=m,i.getReplyConfig=h,i.getSearchKeyword=b,i.storeListApi=A;var a=n(e("8d0b"));function o(t){return a.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return a.default.get("product/code/"+t,{})}function s(t,i){return a.default.post("collect/add",{id:t,product:void 0===i?"product":i})}function c(t,i){return a.default.post("collect/del",{id:t,category:void 0===i?"product":i})}function u(t){return a.default.post("cart/add",t)}function d(){return a.default.get("category",{},{noAuth:!0})}function l(t){return a.default.get("products",t,{noAuth:!0})}function f(t,i){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===i?4:i},{noAuth:!0})}function v(t,i){return a.default.post("collect/all",{id:t,category:void 0===i?"product":i})}function p(t,i){return a.default.get("groom/list/"+t,i,{noAuth:!0})}function g(t){return a.default.get("collect/user",t)}function m(t,i){return a.default.get("reply/list/"+t,i)}function h(t){return a.default.get("reply/config/"+t)}function b(){return a.default.get("search/keyword",{},{noAuth:!0})}function A(t){return a.default.get("store_list",t)}},6391:function(t,i,e){"use strict";var n=e("6242"),a=e.n(n);a.a},6887:function(t,i){t.exports="data:image/png;base64,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"},"6b41":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"empty-box"},[e("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),e("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},o=[]},"755b":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-3a6b2cbf] .empty-box{background-color:#f5f5f5}.swiper[data-v-3a6b2cbf],\nuni-swiper[data-v-3a6b2cbf],\nuni-swiper-item[data-v-3a6b2cbf],\n.slide-image[data-v-3a6b2cbf]{width:100%;height:%?280?%}.quality-recommend .wrapper[data-v-3a6b2cbf]{background:#fff}.quality-recommend .title[data-v-3a6b2cbf]{height:%?120?%;font-size:%?32?%;color:#282828;background-color:#f5f5f5}.quality-recommend .title .name[data-v-3a6b2cbf]{margin:0 %?20?%}.quality-recommend .title .name .iconfont[data-v-3a6b2cbf]{margin-right:%?10?%}.quality-recommend .title .line[data-v-3a6b2cbf]{width:%?230?%;height:%?2?%;background-color:#e9e9e9}.txt-bar[data-v-3a6b2cbf]{padding:%?20?% 0;text-align:center;font-size:%?26?%;color:#666;background-color:#f5f5f5}',""]),t.exports=i},"75cb":function(t,i,e){var n=e("755b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("a4f84638",n,!0,{sourceMap:!1,shadowMode:!1})},"764f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-4bff0b6f]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=i},8731:function(t,i,e){"use strict";e.r(i);var n=e("dd6b"),a=e("e3dc");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("6391");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"71e4a12e",null,!1,n["a"],r);i["default"]=c.exports},"89af":function(t,i,e){"use strict";e.r(i);var n=e("3409"),a=e("5eeb");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("1ad1");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4bff0b6f",null,!1,n["a"],r);i["default"]=c.exports},"9fe8":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-box[data-v-244d8f0e]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-244d8f0e]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-244d8f0e]{font-size:%?26?%;color:#999}',""]),t.exports=i},a101:function(t,i,e){"use strict";var n=e("75cb"),a=e.n(n);a.a},ad46:function(t,i,e){"use strict";e.r(i);var n=e("6b41"),a=e("bdd8");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("c373");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"244d8f0e",null,!1,n["a"],r);i["default"]=c.exports},ae41:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("26cb"),a=e("f30d"),o={computed:(0,n.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(t){var i=this;(0,a.goPage)().then((function(e){(0,a.goShopDetail)(t,i.uid).then((function(i){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}))}}};i.default=o},bdd8:function(t,i,e){"use strict";e.r(i);var n=e("d4d7"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},c278:function(t,i,e){var n=e("9fe8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7a1883c2",n,!0,{sourceMap:!1,shadowMode:!1})},c373:function(t,i,e){"use strict";var n=e("c278"),a=e.n(n);a.a},cb25:function(t,i,e){var n=e("764f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2145704a",n,!0,{sourceMap:!1,shadowMode:!1})},d255:function(t,i,e){"use strict";e.r(i);var n=e("db03"),a=e("fda2");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("a101");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3a6b2cbf",null,!1,n["a"],r);i["default"]=c.exports},d4d7:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{title:{type:String,default:"暂无记录"}}};i.default=n},db03:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"quality-recommend"},[e("div",{staticClass:"slider-banner swiper"},[e("v-uni-view",{staticClass:"swiper"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(255,255,255,0.6)","indicator-active-color":"#fff"}},[t._l(t.imgUrls,(function(i,n){return[e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:i.img},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPages(i)}}})],1)]}))],2)],1)],1),e("div",{staticClass:"title acea-row row-center-wrapper"},[e("div",{staticClass:"line"}),e("div",{staticClass:"name"},[e("span",{staticClass:"iconfont",class:t.icon}),t._v(t._s(t.name))]),e("div",{staticClass:"line"})]),e("v-uni-view",{staticClass:"wrapper"},[e("GoodList",{attrs:{bastList:t.goodsList,"is-sort":!1}}),t.goodsList.length>0&&!t.isScroll?e("v-uni-view",{staticClass:"txt-bar"},[t._v("我是有底线的~")]):t._e(),0!=t.goodsList.length||t.isScroll?t._e():e("emptyPage",{attrs:{title:"暂无数据~"}})],1),e("home")],1)},o=[]},dd6b:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"goodList"},[t._l(t.bastList,(function(i,a){return[n("v-uni-view",{key:a+"_0",staticClass:"item acea-row row-between-wrapper",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(i)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:i.image}}),i.activity&&"1"===i.activity.type?n("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("秒杀")]):t._e(),i.activity&&"2"===i.activity.type?n("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("砍价")]):t._e(),i.activity&&"3"===i.activity.type?n("span",{staticClass:"pictrue_log pictrue_log_class"},[t._v("拼团")]):t._e()],1),n("v-uni-view",{staticClass:"underline"},[n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"line1"},[t._v(t._s(i.store_name))]),n("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(i.price))])],1),i.is_vip&&i.vip_price&&i.vip_price>0?n("v-uni-view",{staticClass:"vip-money acea-row row-middle"},[t._v("￥"+t._s(i.vip_price||0)),n("v-uni-image",{attrs:{src:e("6887")}}),n("v-uni-text",{staticClass:"num"},[t._v("已售"+t._s(i.sales)+t._s(i.unit_name))])],1):n("v-uni-view",{staticClass:"vip-money acea-row row-middle"},[n("v-uni-text",{staticClass:"num"},[t._v("已售"+t._s(i.sales)+t._s(i.unit_name))])],1)],1)],1),n("v-uni-view",{staticClass:"iconfont icon-gouwuche cart-color acea-row row-center-wrapper"})],1)]}))],2)},o=[]},e3dc:function(t,i,e){"use strict";e.r(i);var n=e("ae41"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},f30d:function(t,i,e){"use strict";e("99af"),e("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.goShopDetail=a,i.goPage=o;var n=getApp();function a(t,i){return new Promise((function(e){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(i)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):e(t)}))}function o(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))}},fda2:function(t,i,e){"use strict";e.r(i);var n=e("2963"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);