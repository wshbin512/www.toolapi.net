(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c027e04"],{"0cbe":function(t,s,a){"use strict";var e=a("97e0"),i=a.n(e);i.a},"5aa7":function(t,s,a){},"7afb":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{title:"直播间管理","hidden-breadcrumb":""}})],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"直播状态："}},[a("RadioGroup",{staticClass:"mr15",attrs:{type:"button"},on:{"on-change":t.selChange},model:{value:t.formValidate.status,callback:function(s){t.$set(t.formValidate,"status",s)},expression:"formValidate.status"}},t._l(t.treeData.withdrawal,(function(s,e){return a("Radio",{key:e,attrs:{label:s.value}},[t._v(t._s(s.title))])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"搜索："}},[a("Input",{staticStyle:{width:"30%"},attrs:{search:"","enter-button":"",placeholder:"请输入直播间名称/ID/主播昵称/微信号","element-id":"name"},on:{"on-search":t.selChange},model:{value:t.formValidate.kerword,callback:function(s){t.$set(t.formValidate,"kerword",s)},expression:"formValidate.kerword"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:function(s){return t.menusAdd("添加直播间")}}},[t._v("添加直播间")]),a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"md-list",type:"success"},on:{click:t.syncRoom}},[t._v("同步直播间")])],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_mer_show",fn:function(s){var e=s.row;s.index;return[a("i-switch",{attrs:{value:e.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(s){return t.onchangeIsShow(e)}},model:{value:e.is_show,callback:function(s){t.$set(e,"is_show",s)},expression:"row.is_show"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"status",fn:function(s){var e=s.row;s.index;return[a("div",[t._v(t._s(t._f("liveReviewStatusFilter")(e.live_status)))])]}},{key:"action",fn:function(s){var e=s.row,i=s.index;return[a("a",{on:{click:function(s){return t.detail(e,"详情")}}},[t._v("详情")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(s){return t.del(e,"删除这条信息",i)}}},[t._v("删除")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(s){return t.addGoods(e)}}},[t._v("添加商品")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"直播间详情",scrollable:"",width:"700","footer-hide":!0},model:{value:t.modals,callback:function(s){t.modals=s},expression:"modals"}},[a("details-from",{ref:"studioDetail"})],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"添加商品",scrollable:"",width:"700","footer-hide":!0},model:{value:t.isShowBox,callback:function(s){t.isShowBox=s},expression:"isShowBox"}},[t.isShowBox?a("goods-list",{ref:"goodslist",attrs:{datas:t.activeItem,ischeckbox:!0,liveStatus:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)},i=[],o=a("2f62"),n=a("47c5"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"divBox"},[a("div",[a("div",{staticClass:"box-container"},[a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("直播间名称：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.name))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("主播微信号：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.anchor_wechat))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("直播间ID：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.room_id))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("主播昵称：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.anchor_name))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("手机号：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.phone))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("直播状态：")]),a("span",{staticClass:"info"},[t._v(t._s(t._f("liveReviewStatusFilter")(t.FormData.live_status)))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("直播开始时间：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.start_time))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("直播结束时间：")]),a("span",{staticClass:"info"},[t._v(t._s(t.FormData.end_time))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("直播间类型：")]),a("span",{staticClass:"info"},[t._v(t._s(t._f("broadcastType")(t.FormData.type)))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("显示类型：")]),a("span",{staticClass:"info"},[t._v(t._s(t._f("broadcastDisplayType")(t.FormData.screen_type)))])]),a("div",{staticClass:"list sp image"},[a("label",{staticClass:"name"},[t._v("背景图：")]),a("img",{staticStyle:{"max-width":"150px",height:"80px"},attrs:{src:t.FormData.cover_img}})]),a("div",{staticClass:"list sp image"},[a("label",{staticClass:"name"},[t._v("分享图：")]),a("img",{staticStyle:{"max-width":"150px",height:"80px"},attrs:{src:t.FormData.share_img}})]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("是否关闭点赞：")]),a("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.close_like)))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("是否关闭货架：")]),a("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.close_goods)))])]),a("div",{staticClass:"list sp"},[a("label",{staticClass:"name"},[t._v("是否关闭评论：")]),a("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.close_comment)))])]),a("div",{staticClass:"list"},[a("label",{staticClass:"name"},[t._v("是否显示直播回放：")]),a("span",{staticClass:"info blue"},[t._v(t._s(t._f("filterClose")(t.FormData.replay_status)))])])])])])},r=[],c={name:"live_detail",data:function(){return{option:{form:{labelWidth:"150px"}},FormData:{},loading:!1}},methods:{getData:function(t){var s=this;this.loading=!0,Object(n["d"])(t).then((function(t){s.FormData=t.data,s.loading=!1})).catch((function(t){s.$Message.error(t.msg),s.loading=!1}))}}},d=c,u=(a("0cbe"),a("2877")),m=Object(u["a"])(d,l,r,!1,null,"8d335d3c",null),f=m.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"item"},[a("span",[t._v("直播间名称：")]),t._v("\n        "+t._s(t.datas.name)+"\n    ")]),a("div",{staticClass:"item"},[a("span",[t._v("直播间ID：")]),t._v("\n        "+t._s(t.datas.id)+"\n    ")]),a("div",{staticClass:"item box"},[t._l(t.goodsList,(function(s,e){return a("div",{key:e,staticClass:"box-item"},[a("img",{attrs:{src:s.image,alt:""}}),a("Icon",{attrs:{type:"ios-close-circle",size:"20"},on:{click:function(s){return t.bindDelete(e)}}})],1)})),a("div",{staticClass:"upload-box",on:{click:function(s){t.modals=!0}}},[a("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)],2),a("Button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.bindSub}},[t._v("提交")]),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",scrollable:"",width:"900","footer-hide":!0},model:{value:t.modals,callback:function(s){t.modals=s},expression:"modals"}},[t.modals?a("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0,liveStatus:!0},on:{getProductId:t.getProductId}}):t._e()],1)],1)},h=[],p=a("c4ad"),_={name:"add_goods",components:{goodsList:p["default"]},props:{datas:{type:Object,default:function(){return{}}}},data:function(){return{modals:!1,goodsList:[]}},methods:{getProductId:function(t){var s=this;this.goodsList=this.goodsList.concat(t),this.$nextTick((function(t){setTimeout((function(){s.modals=!1}),300)}))},bindDelete:function(t){this.goodsList.splice(t,1)},bindSub:function(){var t=[];this.goodsList.map((function(s){t.push(s.product_id)})),this.$emit("getData",t)}}},g=_,b=(a("bab6"),Object(u["a"])(g,v,h,!1,null,"1ccddad0",null)),C=b.exports;function w(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,e)}return a}function y(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?w(a,!0).forEach((function(s){x(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}function x(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}var D={name:"live",components:{detailsFrom:f,addGoods:C,goodsList:p["default"]},data:function(){return{isShowBox:!1,modals:!1,total:0,grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{status:"",kerword:"",page:1,limit:20},treeData:{withdrawal:[{title:"全部",value:""},{title:"直播中",value:1},{title:"未开始",value:2},{title:"已结束",value:3}]},columns1:[{key:"id",title:"直播间ID",minWidth:35},{key:"name",minWidth:35,title:"直播间名称"},{key:"anchor_name",minWidth:35,title:"主播昵称"},{key:"anchor_wechat",minWidth:35,title:"主播微信号"},{key:"start_time",minWidth:35,title:"直播开始时间"},{key:"end_time",minWidth:35,title:"计划结束时间"},{key:"add_time",minWidth:35,title:"创建时间"},{slot:"is_mer_show",title:"显示状态",minWidth:80},{slot:"status",minWidth:35,title:"直播状态"},{key:"sort",minWidth:35,title:"排序"},{slot:"action",fixed:"right",title:"操作",minWidth:120}],tabList:[],loading:!1,activeItem:{}}},computed:y({},Object(o["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(n["j"])(this.formValidate).then((function(s){t.total=s.data.count,t.tabList=s.data.list,t.loading=!1}))},selChange:function(){this.formValidate.page=1,this.getList()},menusAdd:function(){this.$router.push({path:"/admin/marketing/live/add_live_room"})},pageChange:function(t){this.formValidate.page=t,this.getList()},onchangeIsShow:function(t){var s=this,a=t.id,e=t.is_show;Object(n["l"])(a,e).then((function(t){s.$Message.success(t.msg)})).catch((function(t){s.$Message.error(t.msg)}))},detail:function(t){this.modals=!0,this.$refs.studioDetail.getData(t.id)},addGoods:function(t){this.activeItem=t,this.isShowBox=!0},getData:function(t){var s=this;Object(n["k"])({room_id:this.activeItem.id,goods_ids:t}).then((function(t){s.$Message.success(t.msg),s.isShowBox=!1,s.$refs.liveAdd.goodsList=[]})).catch((function(t){s.$Message.error(t.msg),s.isShowBox=!1,s.$refs.liveAdd.goodsList=[]}))},syncRoom:function(){var t=this;Object(n["n"])().then((function(s){t.$Message.success(s.msg),t.getList()})).catch((function(s){t.$Message.error(res.msg)}))},del:function(t,s,a){var e=this,i={title:s,num:a,url:"live/room/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){e.$Message.success(t.msg),e.tabList.splice(a,1),e.getList()})).catch((function(t){e.$Message.error(t.msg)}))},getProductId:function(t){var s=[];t.map((function(t){s.push(t.product_id)})),this.getData(s)}}},k=D,F=(a("cb25"),Object(u["a"])(k,e,i,!1,null,"0483babc",null));s["default"]=F.exports},"97e0":function(t,s,a){},a1a2:function(t,s,a){},bab6:function(t,s,a){"use strict";var e=a("a1a2"),i=a.n(e);i.a},cb25:function(t,s,a){"use strict";var e=a("5aa7"),i=a.n(e);i.a}}]);