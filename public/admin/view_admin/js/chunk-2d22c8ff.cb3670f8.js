(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c8ff"],{f483:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("PageHeader",{staticClass:"product_tabs",attrs:{title:t.$route.meta.title,"hidden-breadcrumb":""}}),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Row",{attrs:{type:"flex"}},[i("Col",t._b({},"Col",t.grid,!1),[i("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-label_add"],expression:"['admin-user-label_add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加主播")])],1)],1),i("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.labelLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"icons",fn:function(t){var e=t.row;t.index;return[i("viewer",[i("div",{staticClass:"tabBox_img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.icon,expression:"row.icon"}]})])])]}},{key:"action",fn:function(e){var n=e.row,r=e.index;return[i("a",{on:{click:function(e){return t.edit(n.id)}}},[t._v("修改")]),i("Divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.del(n,"删除分组",r)}}},[t._v("删除")])]}}])}),i("div",{staticClass:"acea-row row-right page"},[i("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.labelFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},r=[],a=i("b096"),o=i.n(a),s=i("7736"),c=i("47c5");function l(t,e,i,n,r,a,o){try{var s=t[a](o),c=s.value}catch(l){return void i(l)}s.done?e(c):Promise.resolve(c).then(n,r)}function u(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var a=t.apply(e,i);function o(t){l(a,n,r,o,s,"next",t)}function s(t){l(a,n,r,o,s,"throw",t)}o(void 0)}))}}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m={name:"anchor",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"ID",key:"id",minWidth:120},{title:"名称",key:"name",minWidth:300},{title:"电话",key:"phone",minWidth:300},{title:"微信号",key:"wechat",minWidth:300},{title:"操作",slot:"action",fixed:"right",minWidth:120}],labelFrom:{kerword:"",page:1,limit:15},labelLists:[],total:0}},computed:h(h({},Object(s["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{add:function(){var t=this;this.$modalForm(Object(c["b"])(0)).then((function(){return t.getList()}))},edit:function(t){var e=this;this.$modalForm(Object(c["b"])(t)).then((function(){return e.getList()}))},del:function(t,e,i){var n=this,r={title:e,num:i,url:"live/anchor/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(r).then((function(t){n.$Message.success(t.msg),n.labelLists.splice(i,1),n.getList()})).catch((function(t){n.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(c["c"])(this.labelFrom).then(function(){var e=u(o.a.mark((function e(i){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=i.data,t.labelLists=n.list,t.total=n.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.labelFrom.page=t,this.getList()}}},b=m,g=i("5d22"),p=Object(g["a"])(b,n,r,!1,null,"2eb8a63e",null);e["default"]=p.exports}}]);