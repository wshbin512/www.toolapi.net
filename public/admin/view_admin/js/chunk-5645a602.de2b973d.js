(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5645a602"],{"09c0":function(t,e,a){"use strict";var n=a("3a98"),r=a.n(n);r.a},"3a98":function(t,e,a){},"3e0f":function(t,e,a){"use strict";var n=a("d500"),r=a.n(n);r.a},cd05:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"f",(function(){return s})),a.d(e,"i",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return u})),a.d(e,"l",(function(){return d})),a.d(e,"j",(function(){return m})),a.d(e,"o",(function(){return f})),a.d(e,"k",(function(){return h})),a.d(e,"a",(function(){return p})),a.d(e,"n",(function(){return b})),a.d(e,"m",(function(){return g})),a.d(e,"h",(function(){return v}));var n=a("b6bd");function r(){return Object(n["a"])({url:"finance/finance/bill_type",method:"get"})}function i(t){return Object(n["a"])({url:"finance/finance/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"finance/finance/commission_list",method:"get",params:t})}function s(t){return Object(n["a"])({url:"finance/finance/user_info/".concat(t),method:"get"})}function c(t,e){return Object(n["a"])({url:"finance/finance/extract_list/".concat(t),method:"get",params:e})}function l(t){return Object(n["a"])({url:"finance/extract",method:"get",params:t})}function u(t){return Object(n["a"])({url:"finance/extract/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(n["a"])({url:"finance/extract/refuse/".concat(t),method:"put",data:e})}function m(t){return Object(n["a"])({url:"finance/recharge",method:"get",params:t})}function f(t){return Object(n["a"])({url:"finance/recharge/user_recharge",method:"get",params:t})}function h(t){return Object(n["a"])({url:"finance/recharge/".concat(t,"/refund_edit"),method:"get"})}function p(t){return Object(n["a"])({url:"finance/audit/".concat(t,"/audit_edit"),method:"get"})}function b(t){return Object(n["a"])({url:"export/userFinance",method:"get",params:t})}function g(t){return Object(n["a"])({url:"export/userCommission",method:"get",params:t})}function v(t){return Object(n["a"])({url:"export/userRecharge",method:"get",params:t})}},d500:function(t,e,a){},e9f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{attrs:{title:"佣金记录","hidden-breadcrumb":""}})],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"时间选择："}},[a("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.date)}},model:{value:t.formValidate.date,callback:function(e){t.$set(t.formValidate,"date",e)},expression:"formValidate.date"}},t._l(t.fromList.fromTxt,(function(e,n){return a("Radio",{key:n,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1),a("Col",{staticClass:"mr10",attrs:{xl:5,lg:8,md:10,sm:11,xs:24}},[a("FormItem",{attrs:{label:"昵称/ID："}},[a("Input",{attrs:{"enter-button":"",placeholder:"请输入","element-id":"nickname",clearable:""},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1)],1),a("Col",{attrs:{xl:8,lg:12,md:13,sm:12,xs:24}},[a("FormItem",{staticClass:"tab_data",attrs:{label:"佣金范围："}},[a("Input",{staticClass:"mr10",attrs:{"enter-button":"",placeholder:"￥","element-id":"price_min",clearable:""},model:{value:t.formValidate.price_min,callback:function(e){t.$set(t.formValidate,"price_min",e)},expression:"formValidate.price_min"}}),a("span",{staticClass:"mr10"},[t._v("一")]),a("Input",{attrs:{"enter-button":"",placeholder:"￥","element-id":"price_max",clearable:""},model:{value:t.formValidate.price_max,callback:function(e){t.$set(t.formValidate,"price_max",e)},expression:"formValidate.price_max"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.userSearchs}},[t._v("搜索")]),a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["export-userCommission"],expression:"['export-userCommission']"}],staticClass:"export",attrs:{icon:"ios-share-outline"},on:{click:t.exports}},[t._v("导出")])],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},on:{"on-sort-change":t.sortChanged},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.row;e.index;return[a("a",{on:{click:function(e){return t.Info(n)}}},[t._v("详情")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("commission-details",{ref:"commission"})],1)},r=[],i=a("a34a"),o=a.n(i),s=a("2f62"),c=a("cd05"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"用户详情","mask-closable":!1,width:"700"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),a("div",{staticClass:"acea-row"},[a("div",{staticClass:"dashboard-workplace-header-tip"},[a("div",{staticClass:"dashboard-workplace-header-tip-desc"},[a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[t._v("姓名："+t._s(t.detailsData.nickname))]),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[t._v("上级推广人："+t._s(t.detailsData.spread_name?t.detailsData.spread_name:"无"))]),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[t._v("佣金总收入："+t._s(t.detailsData.number))]),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[t._v("用户余额："+t._s(t.detailsData.now_money))]),a("span",{staticClass:"dashboard-workplace-header-tip-desc-sp"},[t._v("创建时间："+t._s(t.detailsData.add_time))])])])]),a("Divider",{attrs:{dashed:""}}),a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{staticClass:"tab_data",attrs:{label:"时间范围："}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{editable:!1,format:"yyyy-MM-dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1),a("Col",{attrs:{span:"4"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.userSearchs}},[t._v("搜索")])],1)],1)],1),a("Divider",{attrs:{dashed:""}}),a("Table",{ref:"table",staticClass:"table",attrs:{columns:t.columns,data:t.tabList,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},u=[];function d(t,e,a,n,r,i,o){try{var s=t[i](o),c=s.value}catch(l){return void a(l)}s.done?e(c):Promise.resolve(c).then(n,r)}function m(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function o(t){d(i,n,r,o,s,"next",t)}function s(t){d(i,n,r,o,s,"throw",t)}o(void 0)}))}}function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b={name:"commissionDetails",data:function(){return{modals:!1,spinShow:!1,detailsData:{},Ids:0,loading:!1,formValidate:{nickname:"",start_time:"",end_time:"",page:1,limit:20},total:0,columns:[{title:"佣金金额",key:"number",minWidth:80},{title:"获得时间",key:"_add_time",minWidth:150},{title:"备注",key:"mark",minWidth:330}],tabList:[]}},computed:h({},Object(s["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"left"}}),mounted:function(){this.Ids&&this.getList()},methods:{onchangeTime:function(t){this.formValidate.start_time=t[0],this.formValidate.end_time=t[1]},getDetails:function(t){var e=this;this.Ids=t,this.spinShow=!0,Object(c["f"])(t).then(function(){var t=m(o.a.mark((function t(a){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:200===a.status?(n=a.data,e.detailsData=n.user_info,e.spinShow=!1):(e.spinShow=!1,e.$Message.error(a.msg));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(c["i"])(this.Ids,this.formValidate).then(function(){var e=m(o.a.mark((function e(a){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data,t.tabList=n.data,t.total=n.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()}}},g=b,v=(a("09c0"),a("2877")),y=Object(v["a"])(g,l,u,!1,null,"3c37197c",null),w=y.exports,x=a("2e83");function _(t,e,a,n,r,i,o){try{var s=t[i](o),c=s.value}catch(l){return void a(l)}s.done?e(c):Promise.resolve(c).then(n,r)}function O(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function o(t){_(i,n,r,o,s,"next",t)}function s(t){_(i,n,r,o,s,"throw",t)}o(void 0)}))}}function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(a,!0).forEach((function(e){V(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function V(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var C={name:"commissionRecord",components:{commissionDetails:w},data:function(){return{timeVal:[],total:0,loading:!1,tabList:[],formValidate:{nickname:"",price_max:"",price_min:"",excel:0,page:1,limit:20},fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},columns:[{title:"昵称/姓名/ID",key:"nickname",minWidth:150},{title:"总佣金金额",key:"sum_number",sortable:"custom",minWidth:120},{title:"账户余额",key:"now_money",minWidth:100},{title:"账户佣金",key:"brokerage_price",sortable:"custom",minWidth:120},{title:"提现到账佣金",key:"extract_price",minWidth:150},{title:"时间",key:"time",minWidth:150},{title:"操作",slot:"action",fixed:"right",minWidth:100}]}},computed:j({},Object(s["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(c["g"])(this.formValidate).then(function(){var e=O(o.a.mark((function e(a){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data,t.tabList=n.list,t.total=n.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},selectChange:function(t){this.formValidate.page=1,this.formValidate.date=t,this.timeVal=[],this.getList()},onchangeTime:function(t){this.timeVal=t,this.formValidate.date=this.timeVal.join("-"),this.formValidate.page=1,t[0]||(this.formValidate.date=""),this.getList()},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},exports:function(){var t=O(o.a.mark((function t(){var e,a,n,r,i,s,c;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],a=[],n=[],r="",i=JSON.parse(JSON.stringify(this.formValidate)),i.page=1,s=0;case 4:if(!(s<i.page+1)){t.next=21;break}return t.next=7,this.getExcelData(i);case 7:if(c=t.sent,r||(r=c.filename),a.length||(a=c.filekey),e.length||(e=c.header),!c.export.length){t.next=16;break}n=n.concat(c.export),i.page++,t.next=18;break;case 16:return Object(x["a"])(e,a,r,n),t.abrupt("return");case 18:s++,t.next=4;break;case 21:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getExcelData:function(t){return new Promise((function(e,a){Object(c["m"])(t).then((function(t){return e(t.data)}))}))},Info:function(t){this.$refs.commission.modals=!0,this.$refs.commission.getDetails(t.uid),this.$refs.commission.getList(t.uid)},sortChanged:function(t){"sum_number"==t.key?delete this.formValidate.brokerage_price:delete this.formValidate.sum_number,this.formValidate[t.key]=t.order,this.getList()}}},P=C,D=(a("3e0f"),Object(v["a"])(P,n,r,!1,null,"5d37735d",null));e["default"]=D.exports}}]);