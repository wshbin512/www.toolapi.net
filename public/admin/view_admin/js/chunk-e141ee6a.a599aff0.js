(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e141ee6a"],{7864:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("PageHeader",{staticClass:"product_tabs",attrs:{title:"客服话术","hidden-breadcrumb":""}})],1),n("Row",{staticClass:"ivu-mt box-wrapper"},[n("Col",{staticClass:"left-wrapper",attrs:{span:"3"}},[n("Menu",{attrs:{theme:t.theme3,"active-name":t.sortName,width:"auto"}},[n("MenuGroup",t._l(t.labelSort,(function(e,r){return n("MenuItem",{key:r,staticClass:"menu-item",class:r===t.current?"showOn":"",attrs:{name:e.id},nativeOn:{click:function(n){return t.bindMenuItem(e,r)}}},[t._v("\n                        "+t._s(e.name)+"\n                        "),0!=r?n("div",{staticClass:"icon-box"},[n("Icon",{attrs:{type:"ios-more",size:"24"},on:{click:function(n){return n.stopPropagation(),t.showMenu(e)}}})],1):t._e(),0!=r?n("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"right-menu ivu-poptip-inner"},[n("div",{staticClass:"ivu-poptip-body",on:{click:function(n){return t.labelEdit(e)}}},[n("div",{staticClass:"ivu-poptip-body-content"},[n("div",{staticClass:"ivu-poptip-body-content-inner"},[t._v("编辑小组")])])]),n("div",{staticClass:"ivu-poptip-body",on:{click:function(n){return t.deleteSort(e,"删除分类",r)}}},[n("div",{staticClass:"ivu-poptip-body-content"},[n("div",{staticClass:"ivu-poptip-body-content-inner"},[t._v("删除小组")])])])]):t._e()])})),1)],1)],1),n("Col",{ref:"rightBox",attrs:{span:"21"}},[n("Card",{attrs:{bordered:!1,"dis-hover":""}},[n("Row",{staticClass:"mb20",attrs:{type:"flex"}},[n("Col",{attrs:{span:"24"}},[n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-store_service-add"],expression:"['setting-store_service-add']"}],staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加话术")]),n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-store_service-add"],expression:"['setting-store_service-add']"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success",icon:"md-add"},on:{click:t.addSort}},[t._v("添加分类")])],1)],1),n("Table",{attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;t.index;return[n("viewer",[n("div",{staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])])]}},{key:"add_time",fn:function(e){var r=e.row;e.index;return[n("span",[t._v(" "+t._s(r.add_time))])]}},{key:"action",fn:function(e){var r=e.row,i=e.index;return[n("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除客服",i)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.tableFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)],1)],1)},i=[],a=n("b096"),o=n.n(a),c=n("7736"),u=n("90e7");function s(t,e,n,r,i,a,o){try{var c=t[a](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){s(a,r,i,o,c,"next",t)}function c(t){s(a,r,i,o,c,"throw",t)}o(void 0)}))}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"index",filters:{typeFilter:function(t){var e={wechat:"微信用户",routine:"小程序用户"};return e[t]}},computed:f(f({},Object(c["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),data:function(){return{isChat:!0,formValidate3:{page:1,limit:15},total3:0,loading3:!1,modals3:!1,tableList3:[],columns3:[{title:"用户名称",key:"nickname",width:200},{title:"客服头像",slot:"headimgurl"},{title:"操作",slot:"action"}],formValidate5:{page:1,limit:15,uid:0,to_uid:0,id:0},total5:0,loading5:!1,tableList5:[],FromData:null,formValidate:{page:1,limit:15,data:"",type:"",nickname:""},tableList2:[],modals:!1,total:0,tableFrom:{page:1,limit:15,cate_id:0},timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},loading:!1,tableList:[],columns1:[{title:"ID",key:"id",width:80},{title:"详情",key:"message",minWidth:320},{title:"排序",key:"sort",minWidth:60},{title:"添加时间",slot:"add_time",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150}],columns4:[{type:"selection",width:60,align:"center"},{title:"ID",key:"uid",width:80},{title:"微信用户名称",key:"nickname",minWidth:160},{title:"客服头像",slot:"headimgurl",minWidth:60},{title:"用户类型",slot:"user_type",width:100},{title:"性别",slot:"sex",minWidth:60},{title:"地区",slot:"country",minWidth:120},{title:"是否关注公众号",slot:"subscribe",minWidth:120}],loading2:!1,total2:0,addFrom:{uids:[]},selections:[],rows:{},rowRecord:{},theme3:"light",labelSort:[],sortName:"",current:0}},created:function(){this.getUserLabelAll()},methods:{getUserLabelAll:function(t){var e=this;Object(u["bb"])().then((function(n){var r=n.data.data,i={name:"全部",id:""};r.unshift(i),r.forEach((function(t){t.status=!1})),t||(e.sortName=r[0].id,e.tableFrom.cate_id=r[0].id,e.getList()),e.labelSort=r}))},addSort:function(){var t=this;this.$modalForm(Object(u["cb"])()).then((function(){return t.getUserLabelAll()}))},labelEdit:function(t){var e=this;this.$modalForm(Object(u["db"])(t.id)).then((function(){return e.getUserLabelAll(1)}))},deleteSort:function(t,e,n){var r=this,i={title:e,num:n,url:"app/wechat/speechcraftcate/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){r.$Message.success(t.msg),r.labelSort.splice(n,1),r.labelSort=[],r.getUserLabelAll()})).catch((function(t){r.$Message.error(t.msg)}))},showMenu:function(t){console.log("454545"),this.labelSort.forEach((function(e){console.log("rrrr",e.id),console.log("rrrr2",e.id),e.id==t.id?(console.log("ssss",t.status),e.status=!t.status):e.status=!1}))},bindMenuItem:function(t,e){this.current=e,this.labelSort.forEach((function(t){t.status=!1})),this.tableFrom.cate_id=t.id,this.getList()},cancel:function(){this.formValidate={page:1,limit:10,data:"",type:"",nickname:""}},handleReachBottom:function(){var t=this;return new Promise((function(e){t.formValidate.page=t.formValidate.page+1,setTimeout((function(){kefucreateApi(t.formValidate).then(function(){var e=d(o.a.mark((function e(n){var r,i;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.data,r.list.length>0)for(i=0;i<r.list.length;i++)t.tableList2.push(r.list[i]);t.total2=r.count,t.loading2=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$Message.error(e.msg)})),e()}),2e3)}))},look:function(t){this.isChat=!1,this.rowRecord=t,this.getChatlist()},getChatlist:function(){var t=this;this.loading5=!0,this.formValidate5.uid=this.rows.uid,this.formValidate5.to_uid=this.rowRecord.uid,this.formValidate5.id=this.rows.id,kefuChatlistApi(this.formValidate5).then(function(){var e=d(o.a.mark((function e(n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList5=r.list,t.total5=r.count,t.loading5=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading5=!1,t.$Message.error(e.msg)}))},pageChange5:function(t){this.formValidate5.page=t,this.getChatlist()},submitFail:function(){this.getList()},record:function(t){this.rows=t,this.modals3=!0,this.isChat=!0,this.getListRecord()},getListRecord:function(){var t=this;this.loading3=!0,kefuRecordApi(this.formValidate3,this.rows.id).then(function(){var e=d(o.a.mark((function e(n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList3=r.list?r.list:[],t.total3=r.count,t.loading3=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading3=!1,t.$Message.error(e.msg)}))},pageChange3:function(t){this.formValidate3.page=t,this.getListRecord()},edit:function(t){var e=this;this.$modalForm(Object(u["ab"])(t.id)).then((function(){return e.getList()}))},add:function(){var t=this;this.$modalForm(Object(u["Z"])()).then((function(){return t.getList()}))},onSelectTab:function(t){this.selections=t;var e=[];this.selections.map((function(t){e.push(t.uid)})),this.addFrom.uids=e},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.formValidate.page=1,this.getListService()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.formValidate.page=1,this.getListService()},getListService:function(){var t=this;this.loading2=!0,kefucreateApi(this.formValidate).then(function(){var e=d(o.a.mark((function e(n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList2=r.list,t.total2=r.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$Message.error(e.msg)}))},pageChange2:function(t){this.formValidate.page=t,this.getListService(),this.addFrom.uids=[]},userSearchs:function(){this.formValidate.page=1,this.getListService()},del:function(t,e,n){var r=this,i={title:e,num:n,url:"/app/wechat/speechcraft/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){r.$Message.success(t.msg),r.tableList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(u["vb"])(this.tableFrom).then(function(){var e=d(o.a.mark((function e(n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList=r.list,t.total=n.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},onchangeIsShow:function(t){var e=this,n={id:t.id,status:t.status};kefusetStatusApi(n).then(function(){var t=d(o.a.mark((function t(n){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},putRemark:function(){var t=this;if(0===this.addFrom.uids.length)return this.$Message.warning("请选择要添加的客服");kefuAddApi(this.addFrom).then(function(){var e=d(o.a.mark((function e(n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(n.msg),t.modals=!1,t.getList();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))}}},p=m,g=(n("8c0e"),n("5d22")),b=Object(g["a"])(p,r,i,!1,null,"ee596098",null);e["default"]=b.exports},8920:function(t,e,n){},"8c0e":function(t,e,n){"use strict";n("8920")},"90e7":function(t,e,n){"use strict";n.d(e,"p",(function(){return i})),n.d(e,"h",(function(){return a})),n.d(e,"ob",(function(){return o})),n.d(e,"nb",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"O",(function(){return s})),n.d(e,"V",(function(){return d})),n.d(e,"R",(function(){return l})),n.d(e,"S",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"P",(function(){return m})),n.d(e,"sb",(function(){return p})),n.d(e,"T",(function(){return g})),n.d(e,"j",(function(){return b})),n.d(e,"i",(function(){return v})),n.d(e,"a",(function(){return O})),n.d(e,"I",(function(){return j})),n.d(e,"X",(function(){return w})),n.d(e,"H",(function(){return y})),n.d(e,"Y",(function(){return _})),n.d(e,"fb",(function(){return k})),n.d(e,"C",(function(){return x})),n.d(e,"eb",(function(){return C})),n.d(e,"m",(function(){return L})),n.d(e,"k",(function(){return S})),n.d(e,"l",(function(){return V})),n.d(e,"n",(function(){return M})),n.d(e,"o",(function(){return E})),n.d(e,"L",(function(){return P})),n.d(e,"M",(function(){return F})),n.d(e,"J",(function(){return T})),n.d(e,"K",(function(){return $})),n.d(e,"E",(function(){return A})),n.d(e,"w",(function(){return R})),n.d(e,"A",(function(){return D})),n.d(e,"z",(function(){return W})),n.d(e,"r",(function(){return G})),n.d(e,"B",(function(){return U})),n.d(e,"t",(function(){return I})),n.d(e,"y",(function(){return N})),n.d(e,"s",(function(){return B})),n.d(e,"q",(function(){return z})),n.d(e,"D",(function(){return J})),n.d(e,"f",(function(){return q})),n.d(e,"c",(function(){return H})),n.d(e,"d",(function(){return Z})),n.d(e,"pb",(function(){return K})),n.d(e,"qb",(function(){return Q})),n.d(e,"rb",(function(){return X})),n.d(e,"W",(function(){return Y})),n.d(e,"gb",(function(){return tt})),n.d(e,"F",(function(){return et})),n.d(e,"ib",(function(){return nt})),n.d(e,"hb",(function(){return rt})),n.d(e,"jb",(function(){return it})),n.d(e,"kb",(function(){return at})),n.d(e,"lb",(function(){return ot})),n.d(e,"mb",(function(){return ct})),n.d(e,"tb",(function(){return ut})),n.d(e,"ub",(function(){return st})),n.d(e,"G",(function(){return dt})),n.d(e,"e",(function(){return lt})),n.d(e,"vb",(function(){return ft})),n.d(e,"Z",(function(){return ht})),n.d(e,"ab",(function(){return mt})),n.d(e,"x",(function(){return pt})),n.d(e,"u",(function(){return gt})),n.d(e,"U",(function(){return bt})),n.d(e,"bb",(function(){return vt})),n.d(e,"cb",(function(){return Ot})),n.d(e,"db",(function(){return jt})),n.d(e,"v",(function(){return wt})),n.d(e,"Q",(function(){return yt})),n.d(e,"N",(function(){return _t}));var r=n("b6bd");function i(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function a(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function c(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function u(t){return Object(r["a"])({url:"serve/login",method:"post",data:t})}function s(){return Object(r["a"])({url:"serve/info",method:"get"})}function d(t){return Object(r["a"])({url:"serve/sms/open",method:"get",params:t})}function l(t){return Object(r["a"])({url:"serve/opn_express",method:"post",data:t})}function f(t){return Object(r["a"])({url:"serve/open",method:"get",params:t})}function h(t){return Object(r["a"])({url:"serve/checkCode",method:"post",data:t})}function m(t){return Object(r["a"])({url:"serve/modify",method:"post",data:t})}function p(t){return Object(r["a"])({url:"serve/update_phone",method:"post",data:t})}function g(t){return Object(r["a"])({url:"serve/record",method:"get",params:t})}function b(t){return Object(r["a"])({url:"serve/export_temp",method:"get",params:t})}function v(){return Object(r["a"])({url:"serve/export_all",method:"get"})}function O(t){return Object(r["a"])({url:"serve/captcha",method:"post",data:t})}function j(t){return Object(r["a"])({url:"serve/register",method:"post",data:t})}function w(t){return Object(r["a"])({url:"serve/meal_list",method:"get",params:t})}function y(t){return Object(r["a"])({url:"serve/pay_meal",method:"post",data:t})}function _(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function k(){return Object(r["a"])({url:"merchant/store",method:"GET"})}function x(){return Object(r["a"])({url:"merchant/store/address",method:"GET"})}function C(t){return Object(r["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function L(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function S(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function V(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function M(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function E(){return Object(r["a"])({url:"freight/express/sync_express",method:"get"})}function P(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function F(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function T(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function $(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function A(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function R(t){return Object(r["a"])({url:"app/wechat/kefu",method:"get",params:t})}function D(t){return Object(r["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function W(){return Object(r["a"])({url:"app/wechat/kefu/add",method:"get"})}function G(t){return Object(r["a"])({url:"app/wechat/kefu",method:"post",data:t})}function U(t){return Object(r["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function I(t){return Object(r["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function N(t,e){return Object(r["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function B(t){return Object(r["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function z(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function J(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function q(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function H(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function Z(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function K(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function Q(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function X(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function Y(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function tt(){return Object(r["a"])({url:"merchant/store/get_header",method:"get"})}function et(t){return Object(r["a"])({url:"merchant/store",method:"get",params:t})}function nt(t,e){return Object(r["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function rt(t){return Object(r["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function it(t){return Object(r["a"])({url:"merchant/store_staff",method:"get",params:t})}function at(){return Object(r["a"])({url:"merchant/store_staff/create",method:"get"})}function ot(t){return Object(r["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function ct(t,e){return Object(r["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function ut(t){return Object(r["a"])({url:"merchant/verify_order",method:"get",params:t})}function st(t){return Object(r["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function dt(){return Object(r["a"])({url:"merchant/store_list",method:"get"})}function lt(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}function ft(t){return Object(r["a"])({url:"app/wechat/speechcraft",method:"get",params:t})}function ht(){return Object(r["a"])({url:"app/wechat/speechcraft/create",method:"get"})}function mt(t){return Object(r["a"])({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function pt(t){return Object(r["a"])({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function gt(t){return Object(r["a"])({url:"app/feedback",method:"get",params:t})}function bt(t){return Object(r["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function vt(){return Object(r["a"])({url:"app/wechat/speechcraftcate",method:"get"})}function Ot(){return Object(r["a"])({url:"app/wechat/speechcraftcate/create",method:"get"})}function jt(t){return Object(r["a"])({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function wt(t){return Object(r["a"])({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function yt(){return Object(r["a"])({url:"serve/open",method:"get"})}function _t(){return Object(r["a"])({url:"serve/dump_open",method:"get"})}}}]);