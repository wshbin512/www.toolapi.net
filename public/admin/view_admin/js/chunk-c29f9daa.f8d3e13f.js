(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c29f9daa"],{1119:function(e,t,r){"use strict";r("1cd8")},1388:function(e,t,r){"use strict";r("9f7b")},"1cd8":function(e,t,r){},"31b4":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.FromData?r("div",[r("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:e.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":e.cancel},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[["/marketing/coupon/save.html"===e.FromData.action?r("div",{staticClass:"radio acea-row row-middle"},[r("div",{staticClass:"name ivu-form-item-content"},[e._v("优惠券类型")]),r("Radio-group",{on:{"on-change":e.couponsType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("Radio",{attrs:{label:0}},[e._v("通用券")]),r("Radio",{attrs:{label:1}},[e._v("品类券")]),r("Radio",{attrs:{label:2}},[e._v("商品券")])],1)],1):e._e()],r("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:e.config,rule:Array.from(e.FromData.rules),handleIcon:"false"},on:{"on-submit":e.onSubmit}})],2)],1):e._e()},o=[],s=r("b0a6"),a=r.n(s),i=r("b6bd"),u=r("7736");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={name:"edit",components:{formCreate:a.a.$form()},computed:c({},Object(u["e"])("admin/userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(e,t){200===e.status?t.url=e.data.src:this.Message.error(e.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(e){var t=this,r={};r=e,Object(i["a"])({url:this.FromData.action,method:this.FromData.method,data:r}).then((function(e){t.$parent.getList(),t.$Message.success(e.msg),t.modals=!1,setTimeout((function(){t.$emit("submitFail")}),1e3)})).catch((function(e){t.$Message.error(e.msg)}))},cancel:function(){this.type=0}}},f=m,h=(r("1388"),r("5d22")),v=Object(h["a"])(f,n,o,!1,null,"6f935654",null);t["a"]=v.exports},"5cbd":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("PageHeader",{staticClass:"product_tabs",attrs:{title:e.$route.meta.title,"hidden-breadcrumb":""}})],1),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"状态：","label-for":"status1"}},[r("Select",{attrs:{placeholder:"请选择",clearable:"","element-id":"status1"},on:{"on-change":e.userSearchs},model:{value:e.levelFrom.is_show,callback:function(t){e.$set(e.levelFrom,"is_show",t)},expression:"levelFrom.is_show"}},[r("Option",{attrs:{value:"1"}},[e._v("显示")]),r("Option",{attrs:{value:"0"}},[e._v("不显示")])],1)],1)],1),r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"等级名称：","label-for":"title"}},[r("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入等级名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.title,callback:function(t){e.$set(e.levelFrom,"title",t)},expression:"levelFrom.title"}})],1)],1)],1),r("Row",{attrs:{type:"flex"}},[r("Col",e._b({},"Col",e.grid,!1),[r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-level_add"],expression:"['admin-user-level_add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加会员等级")])],1)],1)],1),r("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"icons",fn:function(e){var t=e.row;e.index;return[r("viewer",[r("div",{staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.icon,expression:"row.icon"}]})])])]}},{key:"is_forevers",fn:function(t){var n=t.row;t.index;return[r("i-switch",{attrs:{value:n.is_forever,"true-value":1,"false-value":0,disabled:!0,size:"large"},model:{value:n.is_forever,callback:function(t){e.$set(n,"is_forever",t)},expression:"row.is_forever"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("永久")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("非永久")])])]}},{key:"is_pays",fn:function(t){var n=t.row;t.index;return[r("i-switch",{attrs:{value:n.is_pay,"true-value":1,"false-value":0,disabled:!0,size:"large"},model:{value:n.is_pay,callback:function(t){e.$set(n,"is_pay",t)},expression:"row.is_pay"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("付费")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("免费")])])]}},{key:"is_shows",fn:function(t){var n=t.row;t.index;return[r("i-switch",{attrs:{value:n.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsShow(n)}},model:{value:n.is_show,callback:function(t){e.$set(n,"is_show",t)},expression:"row.is_show"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("显示")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("隐藏")])])]}},{key:"action",fn:function(t){var n=t.row,o=t.index;return[r("a",{on:{click:function(t){return e.edit(n)}}},[e._v("编辑")]),r("Divider",{attrs:{type:"vertical"}}),[r("Dropdown",{on:{"on-click":function(t){return e.changeMenu(n,t,o)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n                                更多\n                                "),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{attrs:{name:"2"}},[e._v("删除等级")])],1)],1)]]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:e.total,current:e.levelFrom.page,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1)],1),r("task-list",{ref:"tasks"})],1)},o=[],s=r("4838"),a=r.n(s),i=r("7736"),u=r("c24f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{"z-index":1,scrollable:"","footer-hide":"",closable:"",title:"等级任务","mask-closable":!1,width:"950"},on:{"on-cancel":e.handleReset},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[r("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"状态："}},[r("Select",{attrs:{placeholder:"是否显示",clearable:""},on:{"on-change":e.userSearchs},model:{value:e.levelFrom.is_show,callback:function(t){e.$set(e.levelFrom,"is_show",t)},expression:"levelFrom.is_show"}},[r("Option",{attrs:{value:"1"}},[e._v("显示")]),r("Option",{attrs:{value:"0"}},[e._v("不显示")])],1)],1)],1),r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"任务名称：",prop:"status2","label-for":"status2"}},[r("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"请输入任务名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.name,callback:function(t){e.$set(e.levelFrom,"name",t)},expression:"levelFrom.name"}})],1)],1)],1)],1),r("Divider",{attrs:{dashed:""}}),r("Row",{attrs:{type:"flex"}},[r("Col",e._b({staticClass:"mb15"},"Col",e.grid,!1),[r("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加等级任务")])],1),r("Col",{staticClass:"userAlert",attrs:{span:"24"}},[r("Alert",{attrs:{"show-icon":"",closable:""}},[e._v("添加等级任务,任务类型中的{$num}会自动替换成限定数量+系统预设的单位生成任务名")])],1)],1),r("Divider",{attrs:{dashed:""}}),r("Table",{ref:"table",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"is_shows",fn:function(t){var n=t.row;t.index;return[r("i-switch",{attrs:{value:n.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsShow(n)}},model:{value:n.is_show,callback:function(t){e.$set(n,"is_show",t)},expression:"row.is_show"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("显示")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("隐藏")])])]}},{key:"is_musts",fn:function(t){var n=t.row;t.index;return[r("i-switch",{attrs:{value:n.is_must,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsMust(n)}},model:{value:n.is_must,callback:function(t){e.$set(n,"is_must",t)},expression:"row.is_must"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("全部完成")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("达成其一")])])]}},{key:"action",fn:function(t){var n=t.row,o=t.index;return[r("a",{on:{click:function(t){return e.edit(n)}}},[e._v("编辑  | ")]),r("a",{on:{click:function(t){return e.del(n,"删除等级任务",o)}}},[e._v("  删除")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:e.total,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1),r("edit-from",{ref:"edits",attrs:{FromData:e.FromData,titleType:e.titleType},on:{submitFail:e.submitFail}})],1)},c=[],d=r("31b4");function m(e,t,r,n,o,s,a){try{var i=e[s](a),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function a(e){m(s,n,o,a,i,"next",e)}function i(e){m(s,n,o,a,i,"throw",e)}a(void 0)}))}}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={name:"task",components:{editFrom:d["a"]},data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},modals:!1,levelFrom:{is_show:"",name:"",page:1,limit:20},total:0,levelLists:[],loading:!1,columns1:[{title:"ID",key:"id",sortable:!0,width:80},{title:"等级名称",key:"level_name",minWidth:100},{title:"任务名称",key:"name",minWidth:120},{title:"排序",sort:"grade",sortable:!0,minWidth:100},{title:"是否显示",slot:"is_shows",minWidth:110},{title:"务必达成",slot:"is_musts",minWidth:135},{title:"任务说明",key:"illustrate",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,ids:0,modalTitleSs:"",titleType:"task"}},computed:v(v(v({},Object(i["e"])("admin/layout",["isMobile"])),Object(i["e"])("admin/userLevel",["levelId"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:v(v({},Object(i["d"])("admin/userLevel",["getTaskId","getlevelId"])),{},{add:function(){this.ids="",this.getFrom()},getFrom:function(){var e=this,t={id:this.ids,level_id:this.levelId};this.$modalForm(Object(u["c"])(t)).then((function(){return e.getList()}))},edit:function(e){this.ids=e.id,this.getFrom()},handleReset:function(){this.modals=!1},userSearchs:function(){this.getList()},getList:function(){var e=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(u["D"])(this.levelId,this.levelFrom).then(function(){var t=f(a.a.mark((function t(r){var n;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=r.data,e.levelLists=n.list,e.total=r.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},onchangeIsShow:function(e){var t=this,r={id:e.id,is_show:e.is_show};Object(u["C"])(r).then(function(){var e=f(a.a.mark((function e(r){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onchangeIsMust:function(e){var t=this,r={id:e.id,is_must:e.is_must};Object(u["B"])(r).then(function(){var e=f(a.a.mark((function e(r){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},submitFail:function(){this.getList()},del:function(e,t,r){var n=this,o={title:t,num:r,url:"user/user_level/delete_task/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(o).then((function(e){n.$Message.success(e.msg),n.levelLists.splice(r,1)})).catch((function(e){n.$Message.error(e.msg)}))}})},g=b,_=r("5d22"),w=Object(_["a"])(g,l,c,!1,null,"95adbe0c",null),O=w.exports;function j(e,t,r,n,o,s,a){try{var i=e[s](a),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function a(e){j(s,n,o,a,i,"next",e)}function i(e){j(s,n,o,a,i,"throw",e)}a(void 0)}))}}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P={name:"user_level",components:{editFrom:d["a"],taskList:O},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"等级图标",slot:"icons",minWidth:100},{title:"等级名称",key:"name",minWidth:120},{title:"等级",key:"grade",minWidth:100},{title:"享受折扣",key:"discount",minWidth:100},{title:"是否显示",slot:"is_shows",minWidth:120},{title:"等级说明",key:"explain",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],levelFrom:{is_show:"",title:"",page:1,limit:15},levelLists:[],total:0,FromData:null,imgName:"",visible:!1,levelId:0,modalTitleSs:"",titleType:"level",modelTask:!1,num:0}},created:function(){this.getList()},computed:F(F({},Object(i["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:F(F({},Object(i["d"])("admin/userLevel",["getlevelId"])),{},{changeMenu:function(e,t,r){switch(this.levelId=e.id,t){case"1":this.getlevelId(this.levelId),this.$refs.tasks.modals=!0,this.$refs.tasks.getList();break;default:this.del(e,"删除等级",r)}},del:function(e,t,r){var n=this,o={title:t,num:r,url:"user/user_level/delete/".concat(e.id),method:"put",ids:""};this.$modalSure(o).then((function(e){n.$Message.success(e.msg),n.levelLists.splice(r,1)})).catch((function(e){n.$Message.error(e.msg)}))},onchangeIsShow:function(e){var t=this,r={id:e.id,is_show:e.is_show};Object(u["A"])(r).then(function(){var e=y(a.a.mark((function e(r){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getList:function(){var e=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(u["o"])(this.levelFrom).then(function(){var t=y(a.a.mark((function t(r){var n;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=r.data,e.levelLists=n.list,e.total=r.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},add:function(){var e=this;this.levelId=0,this.$modalForm(Object(u["b"])({id:this.levelId})).then((function(){return e.getList()}))},edit:function(e){var t=this;this.levelId=e.id,this.$modalForm(Object(u["b"])({id:this.levelId})).then((function(){return t.getList()})),this.getlevelId(this.levelId)},userSearchs:function(){this.levelFrom.page=1,this.getList()},submitFail:function(){this.getList()}})},$=P,D=(r("1119"),Object(_["a"])($,n,o,!1,null,"5fea5a84",null));t["default"]=D.exports},"9f7b":function(e,t,r){},c24f:function(e,t,r){"use strict";r.d(t,"L",(function(){return o})),r.d(t,"g",(function(){return s})),r.d(t,"n",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"m",(function(){return c})),r.d(t,"o",(function(){return d})),r.d(t,"A",(function(){return m})),r.d(t,"D",(function(){return f})),r.d(t,"C",(function(){return h})),r.d(t,"B",(function(){return v})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"j",(function(){return g})),r.d(t,"F",(function(){return _})),r.d(t,"l",(function(){return w})),r.d(t,"E",(function(){return O})),r.d(t,"Q",(function(){return j})),r.d(t,"I",(function(){return y})),r.d(t,"G",(function(){return k})),r.d(t,"R",(function(){return F})),r.d(t,"H",(function(){return x})),r.d(t,"K",(function(){return P})),r.d(t,"J",(function(){return $})),r.d(t,"M",(function(){return D})),r.d(t,"r",(function(){return I})),r.d(t,"s",(function(){return C})),r.d(t,"N",(function(){return L})),r.d(t,"f",(function(){return M})),r.d(t,"P",(function(){return S})),r.d(t,"y",(function(){return T})),r.d(t,"S",(function(){return W})),r.d(t,"i",(function(){return E})),r.d(t,"O",(function(){return z})),r.d(t,"z",(function(){return R})),r.d(t,"x",(function(){return B})),r.d(t,"w",(function(){return A})),r.d(t,"v",(function(){return U})),r.d(t,"u",(function(){return N})),r.d(t,"t",(function(){return J})),r.d(t,"q",(function(){return H})),r.d(t,"p",(function(){return q})),r.d(t,"k",(function(){return G})),r.d(t,"h",(function(){return K}));var n=r("b6bd");function o(e){return Object(n["a"])({url:"user/user",method:"get",params:e})}function s(e){return Object(n["a"])({url:"user/user/".concat(e,"/edit"),method:"get"})}function a(e){return Object(n["a"])({url:"user/set_status/".concat(e.status,"/").concat(e.id),method:"put"})}function i(e){return Object(n["a"])({url:"marketing/coupon/grant",method:"get",params:e})}function u(e){return Object(n["a"])({url:"user/edit_other/".concat(e),method:"get"})}function l(e){return Object(n["a"])({url:"user/user/".concat(e),method:"get"})}function c(e){return Object(n["a"])({url:"user/one_info/".concat(e.id),method:"get",params:e.datas})}function d(e){return Object(n["a"])({url:"user/user_level/vip_list",method:"get",params:e})}function m(e){return Object(n["a"])({url:"user/user_level/set_show/".concat(e.id,"/").concat(e.is_show),method:"PUT"})}function f(e,t){return Object(n["a"])({url:"user/user_level/task/".concat(e),method:"get",params:t})}function h(e){return Object(n["a"])({url:"user/user_level/set_task_show/".concat(e.id,"/").concat(e.is_show),method:"PUT"})}function v(e){return Object(n["a"])({url:"user/user_level/set_task_must/".concat(e.id,"/").concat(e.is_must),method:"PUT"})}function p(e){return Object(n["a"])({url:"/user/user_level/create_task",method:"get",params:e})}function b(e){return Object(n["a"])({url:"user/user_level/create",method:"get",params:e})}function g(e){return Object(n["a"])({url:"user/give_level/".concat(e),method:"get"})}function _(e){return Object(n["a"])({url:"user/user_group/list",method:"get",params:e})}function w(e){return Object(n["a"])({url:"user/user_group/add/".concat(e),method:"get"})}function O(e){return Object(n["a"])({url:"setting/update_admin",method:"PUT",data:e})}function j(e){return Object(n["a"])({url:"user/set_group",method:"post",data:e})}function y(e){return Object(n["a"])({url:"user/user_label",method:"get",params:e})}function k(e){return Object(n["a"])({url:"user/user_label/add/".concat(e),method:"get"})}function F(e){return Object(n["a"])({url:"user/set_label",method:"post",data:e})}function x(e){return Object(n["a"])({url:"user/user_label_cate/all",method:"get",params:e})}function P(e){return Object(n["a"])({url:"user/user_label_cate/".concat(e,"/edit"),method:"get"})}function $(e){return Object(n["a"])({url:"user/user_label_cate/create",method:"get"})}function D(e){return Object(n["a"])({url:"/user/member_batch/index",method:"get",params:e})}function I(e,t){return Object(n["a"])({url:"/user/member_batch/save/".concat(e),method:"post",data:t})}function C(e,t){return Object(n["a"])({url:"/user/member_batch/set_value/".concat(e),method:"get",params:t})}function L(e,t){return Object(n["a"])({url:"/user/member_card/index/".concat(e),method:"get",params:t})}function M(e){return Object(n["a"])({url:"/export/memberCard/".concat(e),method:"get"})}function S(){return Object(n["a"])({url:"/user/member/ship",method:"get"})}function T(e,t){return Object(n["a"])({url:"/user/member_ship/save/".concat(e),method:"post",data:t})}function W(){return Object(n["a"])({url:"/user/user/syncUsers",method:"get"})}function E(){return Object(n["a"])({url:"/user/user/create",method:"get"})}function z(){return Object(n["a"])({url:"/user/member_scan",method:"get"})}function R(e,t){return Object(n["a"])({url:"user/label/".concat(e),method:"post",data:t})}function B(e){return Object(n["a"])({url:"user/member_right/save/".concat(e.id),method:"post",data:e})}function A(){return Object(n["a"])({url:"user/member/right",method:"get"})}function U(e){return Object(n["a"])({url:"/user/member/record",method:"get",params:e})}function N(e){return Object(n["a"])({url:"user/member_card/set_status",method:"get",params:e})}function J(e){return Object(n["a"])({url:"user/member_ship/set_ship_status",method:"get",params:e})}function H(e,t){return Object(n["a"])({url:"user/member_agreement/save/".concat(e),method:"post",data:t})}function q(){return Object(n["a"])({url:"user/member/agreement",method:"get"})}function G(e){return Object(n["a"])({url:"user/give_level_time/".concat(e),method:"get"})}function K(e){return Object(n["a"])({url:"user/label/".concat(e),method:"get"})}}}]);