(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-message_center-index"],{"59f2":function(e,i,t){var a=t("edb6");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("aa32437e",a,!0,{sourceMap:!1,shadowMode:!1})},8784:function(e,i,t){"use strict";t.r(i);var a=t("c404"),n=t("ccb4");for(var s in n)"default"!==s&&function(e){t.d(i,e,(function(){return n[e]}))}(s);t("d172");var o,c=t("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"82604b0c",null,!1,a["a"],o);i["default"]=l.exports},c404:function(e,i,t){"use strict";var a;t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return s})),t.d(i,"a",(function(){return a}));var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[e.list.length?t("v-uni-view",{staticClass:"list"},e._l(e.list,(function(i,a){return t("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goChat(i)}}},[t("v-uni-view",{staticClass:"image-wrap"},[t("v-uni-image",{staticClass:"image",attrs:{src:i.avatar}})],1),t("v-uni-view",{staticClass:"text-wrap"},[t("v-uni-view",{staticClass:"name-wrap"},[t("v-uni-view",{staticClass:"name"},[e._v(e._s(i.nickname))]),t("v-uni-view",[e._v(e._s(i._update_time))])],1),t("v-uni-view",{staticClass:"info-wrap"},[1===i.message_type?t("v-uni-view",{staticClass:"info",domProps:{innerHTML:e._s(i.message)}}):e._e(),2===i.message_type?t("v-uni-view",{staticClass:"info",domProps:{innerHTML:e._s(i.message)}}):e._e(),3===i.message_type?t("v-uni-view",{staticClass:"info"},[e._v("[图片]")]):e._e(),4===i.message_type?t("v-uni-view",{staticClass:"info"},[e._v("[语音]")]):e._e(),5===i.message_type?t("v-uni-view",{staticClass:"info"},[e._v("[商品]")]):e._e(),i.mssage_num?t("v-uni-view",{staticClass:"num"},[e._v(e._s(i.mssage_num))]):e._e()],1)],1)],1)})),1):e.finished&&2===e.page?t("v-uni-view",{staticClass:"empty-wrap"},[t("v-uni-view",{staticClass:"image-wrap"},[t("v-uni-image",{staticClass:"image",attrs:{src:"/static/images/noMessage.png"}})],1),t("v-uni-view",[e._v("亲、暂无消息记录哟！")])],1):e._e()],1)},s=[]},ccb4:function(e,i,t){"use strict";t.r(i);var a=t("e904"),n=t.n(a);for(var s in a)"default"!==s&&function(e){t.d(i,e,(function(){return a[e]}))}(s);i["default"]=n.a},d172:function(e,i,t){"use strict";var a=t("59f2"),n=t.n(a);n.a},e904:function(e,i,t){"use strict";t("99af"),t("4160"),t("ac1f"),t("5319"),t("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=t("f01d"),n={data:function(){return{list:[],page:1,limit:10,loading:!1,finished:!1}},onLoad:function(){this.getList()},onShow:function(){this.getList()},onReachBottom:function(){this.getList()},methods:{getList:function(){var e=this;this.loading||this.finished||(this.loading=!0,uni.showLoading({title:"加载中"}),(0,a.serviceRecord)({page:this.page,limit:this.limit}).then((function(i){var t=i.data;uni.hideLoading(),e.loading=!1,t.forEach((function(i){1===i.message_type&&(i.message=e.replace_em(i.message)),2===i.message_type&&(i.message=e.replace_em(i.message))})),e.list=e.list.concat(t),e.finished=t.length<e.limit,e.page+=1})).catch((function(e){uni.showToast({title:e.msg,icon:"none"})})))},replace_em:function(e){return e=e.replace(/\[em-([a-z_]*)\]/g,"<span class='em em-$1'/></span>"),e},goChat:function(e){uni.navigateTo({url:"/pages/customer_list/chat?uid="+e.to_uid})}}};i.default=n},edb6:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list[data-v-82604b0c]{background-color:#fff}.list .item[data-v-82604b0c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?130?%;padding:0 %?30?%}.list .item ~ .item[data-v-82604b0c]{border-top:%?1?% solid #f5f5f5}.list .image-wrap[data-v-82604b0c]{width:%?88?%;height:%?88?%;border-radius:50%;overflow:hidden}.list .image[data-v-82604b0c]{display:block;width:100%;height:100%}.list .text-wrap[data-v-82604b0c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;margin-left:%?20?%}.list .name-wrap[data-v-82604b0c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?20?%;color:#ccc}.list .name[data-v-82604b0c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;margin-right:%?20?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;color:#333}.list .info-wrap[data-v-82604b0c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?18?%}.list .info[data-v-82604b0c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?24?%;color:#999}.list .num[data-v-82604b0c]{min-width:%?32?%;height:%?32?%;border-radius:%?16?%;margin-left:%?20?%;background-color:#e93323;font-size:%?20?%;line-height:%?32?%;text-align:center;color:#fff}.empty-wrap[data-v-82604b0c]{font-size:%?26?%;text-align:center;color:#999}.empty-wrap .image-wrap[data-v-82604b0c]{width:%?414?%;height:%?336?%;margin:%?80?% auto 0}.empty-wrap .image[data-v-82604b0c]{display:block;width:100%;height:100%}',""]),e.exports=i}}]);