(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-goods_details_store-index"],{"0da1":function(t,e,a){"use strict";a.r(e);var n=a("a732"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"4c9d":function(t,e,a){"use strict";a.r(e);var n=a("4d3b"),o=a("0da1");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("8b32");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"04ac6498",null,!1,n["a"],r);e["default"]=d.exports},"4d3b":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"container",staticClass:"storeBox"},[t._l(t.storeList,(function(e,n){return a("div",{key:n,staticClass:"storeBox-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.checked(e)}}},[a("div",{staticClass:"store-img"},[a("img",{attrs:{src:e.image,"lazy-load":"true"}})]),a("div",{staticClass:"store-cent-left"},[a("div",{staticClass:"store-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"store-address line1"},[t._v(t._s(e.address)+t._s(", "+e.detailed_address))])]),a("div",{staticClass:"row-right"},[a("div",[a("a",{staticClass:"store-phone acea-row row-center-wrapper",attrs:{href:"tel:"+e.phone}},[a("span",{staticClass:"iconfont icon-dadianhua01"})])]),a("div",{staticClass:"store-distance",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.showMaoLocation(e)}}},[e.range?a("span",{staticClass:"addressTxt"},[t._v("距离"+t._s(e.range)+"千米")]):a("span",{staticClass:"addressTxt"},[t._v("查看地图")]),a("span",{staticClass:"iconfont icon-youjian"})])])])})),a("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],2),a("div",[t.locationShow&&!t.isWeixin?a("iframe",{ref:"geoPage",staticStyle:{display:"none"},attrs:{width:"0",height:"0",frameborder:"0",scrolling:"no",src:"https://apis.map.qq.com/tools/geolocation?key="+t.mapKey+"&referer=myapp"}}):t._e()]),t.mapShow?a("div",{staticClass:"geoPage"},[a("iframe",{attrs:{width:"100%",height:"100%",frameborder:"0",scrolling:"no",src:"https://apis.map.qq.com/uri/v1/geocoder?coord="+t.system_store.latitude+","+t.system_store.longitude+"&referer="+t.mapKey}})]):t._e()])},i=[]},"5dc5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".Loads[data-v-60697522]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-60697522]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-60697522{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-60697522{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-60697522]{-webkit-animation:load-data-v-60697522 3s linear 1s infinite;animation:load-data-v-60697522 3s linear 1s infinite}.loading[data-v-60697522]{-webkit-animation:load-data-v-60697522 linear 1s infinite;animation:load-data-v-60697522 linear 1s infinite}",""]),t.exports=e},"61f7":function(t,e,a){"use strict";var n=a("8082"),o=a.n(n);o.a},6301:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=i,e.getProductCode=r,e.collectAdd=s,e.collectDel=d,e.postCartAdd=c,e.getCategoryList=u,e.getProductslist=l,e.getProductHot=f,e.collectAll=g,e.getGroomList=p,e.getCollectUserList=h,e.getReplyList=v,e.getReplyConfig=m,e.getSearchKeyword=w,e.storeListApi=b;var o=n(a("8d0b"));function i(t){return o.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return o.default.get("product/code/"+t,{})}function s(t,e){return o.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function d(t,e){return o.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function c(t){return o.default.post("cart/add",t)}function u(){return o.default.get("category",{},{noAuth:!0})}function l(t){return o.default.get("products",t,{noAuth:!0})}function f(t,e){return o.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function g(t,e){return o.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function p(t,e){return o.default.get("groom/list/"+t,e,{noAuth:!0})}function h(t){return o.default.get("collect/user",t)}function v(t,e){return o.default.get("reply/list/"+t,e)}function m(t){return o.default.get("reply/config/"+t)}function w(){return o.default.get("search/keyword",{},{noAuth:!0})}function b(t){return o.default.get("store_list",t)}},6764:function(t,e,a){var n=a("927c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("7e11c97a",n,!0,{sourceMap:!1,shadowMode:!1})},8082:function(t,e,a){var n=a("5dc5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("1d9699f2",n,!0,{sourceMap:!1,shadowMode:!1})},"8b32":function(t,e,a){"use strict";var n=a("6764"),o=a.n(n);o.a},"927c":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.geoPage[data-v-04ac6498]{position:fixed;width:100%;height:100%;top:0;z-index:10000}.storeBox[data-v-04ac6498]{width:100%;background-color:#fff;padding:0 %?30?%}.storeBox-box[data-v-04ac6498]{width:100%;height:auto;display:flex;align-items:center;padding:%?23?% 0;justify-content:space-between;border-bottom:1px solid #eee}.store-cent[data-v-04ac6498]{display:flex;align-items:center;width:80%}.store-cent-left[data-v-04ac6498]{width:45%}.store-img[data-v-04ac6498]{width:%?120?%;height:%?120?%;border-radius:%?6?%;margin-right:%?22?%}.store-img img[data-v-04ac6498]{width:100%;height:100%}.store-name[data-v-04ac6498]{color:#282828;font-size:%?30?%;margin-bottom:%?22?%;font-weight:800}.store-address[data-v-04ac6498]{color:#666;font-size:%?24?%}.store-phone[data-v-04ac6498]{width:%?50?%;height:%?50?%;color:#fff;border-radius:50%;background-color:#e83323;margin-bottom:%?22?%;text-decoration:none}.store-phone .icon-dadianhua01[data-v-04ac6498]{font-size:%?22?%}.store-distance[data-v-04ac6498]{font-size:%?22?%;color:#e83323}.iconfont[data-v-04ac6498]{font-size:%?20?%}.row-right[data-v-04ac6498]{display:flex;flex-direction:column;align-items:flex-end;width:33.5%}',""]),t.exports=e},"9ceb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};e.default=n},"9d96":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.loading&&!t.loaded?a("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?a("v-uni-view",[a("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("正在加载中")],1):a("v-uni-view",[t._v("上拉加载更多")])],1):t._e()],1)},i=[]},a732:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("b750")),i=a("6301"),r=(a("2924"),a("6cba"),a("2f62"),{name:"storeList",components:{Loading:o.default},data:function(){return{page:1,limit:20,loaded:!1,loading:!1,storeList:[],mapShow:!1,system_store:{},locationShow:!1,user_latitude:0,user_longitude:0}},onLoad:function(){try{this.user_latitude=uni.getStorageSync("user_latitude"),this.user_longitude=uni.getStorageSync("user_longitude")}catch(t){}},mounted:function(){this.user_latitude&&this.user_longitude?this.getList():this.selfLocation()},methods:{call:function(t){uni.makePhoneCall({phoneNumber:t})},selfLocation:function(){var t=this;uni.getLocation({type:"wgs84",success:function(e){try{uni.setStorageSync("user_latitude",e.latitude),uni.setStorageSync("user_longitude",e.longitude)}catch(a){}t.getList()},complete:function(){t.getList()}})},showMaoLocation:function(t){var e=Number(t.latitude),a=Number(t.longitude);this.$wechat.isWeixin()?this.$wechat.wechatEvevt(["openLocation"],{latitude:e,longitude:a}).then((function(t){})).catch((function(t){})):uni.openLocation({latitude:e,longitude:a,success:function(){}})},checked:function(t){uni.$emit("handClick",{address:t}),uni.navigateBack()},getList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e={latitude:this.user_latitude||"",longitude:this.user_longitude||"",page:this.page,limit:this.limit};(0,i.storeListApi)(e).then((function(e){t.loading=!1,t.loaded=e.data.list.length<t.limit,t.storeList.push.apply(t.storeList,e.data.list.list),t.page=t.page+1})).catch((function(e){t.$util.Tips({title:e})}))}}},onReachBottom:function(){this.getList()}});e.default=r}).call(this,a("5a52")["default"])},b750:function(t,e,a){"use strict";a.r(e);var n=a("9d96"),o=a("e3dd");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("61f7");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"60697522",null,!1,n["a"],r);e["default"]=d.exports},e3dd:function(t,e,a){"use strict";a.r(e);var n=a("9ceb"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a}}]);