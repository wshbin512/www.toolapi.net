(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3a20344"],{"51c0":function(t,e,r){"use strict";var n=r("a86e"),o=r.n(n);o.a},"6d86":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("PageHeader",{staticClass:"product_tabs",attrs:{title:t.$route.meta.title,"hidden-breadcrumb":""}})],1),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Table",{staticClass:"mt25",attrs:{columns:t.thead,data:t.tbody,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"image",fn:function(t){var e=t.row;return[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"image-wrap"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])]}},{key:"status",fn:function(e){var n=e.row;return[r("i-switch",{attrs:{value:n.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.statusChange(n)}},model:{value:n.status,callback:function(e){t.$set(n,"status",e)},expression:"row.status"}},[r("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])]}},{key:"action",fn:function(e){var n=e.row;return[r("a",{on:{click:function(e){return t.edit(n)}}},[t._v("编辑")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.page,"page-size":t.limit,"show-elevator":"","show-total":""},on:{"on-change":t.pageChange}})],1)],1),r("Modal",{attrs:{title:"编辑会员权益","footer-hide":""},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[r("Form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":80}},[r("Input",{staticStyle:{display:"none"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),r("Input",{staticStyle:{display:"none"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),r("Input",{staticStyle:{display:"none"},model:{value:t.form.right_type,callback:function(e){t.$set(t.form,"right_type",e)},expression:"form.right_type"}}),r("FormItem",{attrs:{label:"权益名称",prop:"title"}},[r("Input",{attrs:{placeholder:"请输入权益名称",disabled:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("FormItem",{attrs:{label:"展示名称",prop:"show_title"}},[r("Input",{attrs:{placeholder:"请输入展示名称"},model:{value:t.form.show_title,callback:function(e){t.$set(t.form,"show_title",e)},expression:"form.show_title"}})],1),r("FormItem",{attrs:{label:"权益图标",prop:"image"}},[r("div",{staticClass:"image-group",on:{click:t.callImage}},[t.form.image?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.form.image,expression:"form.image"}]}):r("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1),r("Input",{staticStyle:{display:"none"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),r("FormItem",{attrs:{label:"权益简介",prop:"show_title"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:10},placeholder:"请输入权益简介"},model:{value:t.form.explain,callback:function(e){t.$set(t.form,"explain",e)},expression:"form.explain"}})],1),r("FormItem",{directives:[{name:"show",rawName:"v-show",value:"coupon"!==t.form.right_type&&"vip_price"!==t.form.right_type,expression:"form.right_type !== 'coupon' && form.right_type !== 'vip_price'"}],attrs:{label:"offline"===t.form.right_type||"express"===t.form.right_type||"vip_price"===t.form.right_type?"折扣数(%)":"积分倍数",prop:"number"}},[r("InputNumber",{attrs:{min:1},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.formSubmit("form")}}},[t._v("提交")])],1)],1)],1),r("Modal",{attrs:{width:"800px",scrollable:"","footer-hide":"",closable:"",title:"选择权益图标"},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[r("uploadPictures",{directives:[{name:"show",rawName:"v-show",value:t.modal2,expression:"modal2"}],attrs:{isChoice:"单选",gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}})],1)],1)},o=[],a=r("2f62"),u=r("c24f"),i=r("b0e7");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m={components:{uploadPictures:i["a"]},data:function(){return{thead:[{title:"权益名称",key:"title"},{title:"展示名称",key:"show_title"},{title:"权益图标（80x80）",slot:"image"},{title:"权益简介",key:"explain"},{title:"权益状态",slot:"status"},{title:"操作",slot:"action"}],tbody:[],loading:!1,total:0,page:1,limit:30,modal1:!1,form:{id:"",right_type:"",title:"",show_title:"",image:"",explain:"",number:1,status:1},rules:{title:[{required:!0,message:"请输入权益名称",trigger:"blur"}],show_title:[{required:!0,message:"请输入展示名称",trigger:"blur"}],image:[{required:!0,message:"请上传权益图标"}],explain:[{required:!0,message:"请输入权益简介",trigger:"blur"}],number:[{required:!0,type:"integer",message:"请输入正整数"}]},modal2:!1,gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8}}},computed:c({},Object(a["e"])("media",["isMobile"])),created:function(){this.getRightList()},methods:{getRightList:function(){var t=this;this.loading=!0,Object(u["w"])().then((function(e){var r=e.data,n=r.count,o=r.list;t.loading=!1,t.total=n,t.tbody=o})).catch((function(e){t.loading=!1,t.$Message.error(e)}))},statusChange:function(t){this.form.id=t.id,this.form.right_type=t.right_type,this.form.title=t.title,this.form.show_title=t.show_title,this.form.image=t.image,this.form.explain=t.explain,this.form.number=t.number,this.form.status=t.status,this.rightSave()},edit:function(t){this.modal1=!0,this.form.id=t.id,this.form.status=t.status,this.form.right_type=t.right_type,this.form.title=t.title,this.form.show_title=t.show_title,this.form.image=t.image,this.form.explain=t.explain,this.form.number=t.number},pageChange:function(t){this.page=t,this.getRightList()},rightSave:function(){var t=this;Object(u["x"])(this.form).then((function(e){t.modal1=!1,t.getRightList(),t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)}))},formSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&e.rightSave()}))},callImage:function(){this.modal2=!0},getPic:function(t){this.form.image=t.att_dir,this.modal2=!1}}},d=m,f=(r("51c0"),r("2877")),h=Object(f["a"])(d,n,o,!1,null,"36a1625f",null);e["default"]=h.exports},a86e:function(t,e,r){},c24f:function(t,e,r){"use strict";r.d(e,"L",(function(){return o})),r.d(e,"g",(function(){return a})),r.d(e,"n",(function(){return u})),r.d(e,"a",(function(){return i})),r.d(e,"e",(function(){return s})),r.d(e,"d",(function(){return c})),r.d(e,"m",(function(){return l})),r.d(e,"o",(function(){return m})),r.d(e,"A",(function(){return d})),r.d(e,"D",(function(){return f})),r.d(e,"C",(function(){return h})),r.d(e,"B",(function(){return g})),r.d(e,"c",(function(){return p})),r.d(e,"b",(function(){return b})),r.d(e,"j",(function(){return _})),r.d(e,"F",(function(){return v})),r.d(e,"l",(function(){return O})),r.d(e,"E",(function(){return j})),r.d(e,"Q",(function(){return w})),r.d(e,"I",(function(){return y})),r.d(e,"G",(function(){return x})),r.d(e,"R",(function(){return k})),r.d(e,"H",(function(){return P})),r.d(e,"K",(function(){return I})),r.d(e,"J",(function(){return C})),r.d(e,"M",(function(){return $})),r.d(e,"r",(function(){return S})),r.d(e,"s",(function(){return F})),r.d(e,"N",(function(){return z})),r.d(e,"f",(function(){return M})),r.d(e,"P",(function(){return N})),r.d(e,"y",(function(){return R})),r.d(e,"S",(function(){return q})),r.d(e,"i",(function(){return B})),r.d(e,"O",(function(){return D})),r.d(e,"z",(function(){return L})),r.d(e,"x",(function(){return T})),r.d(e,"w",(function(){return U})),r.d(e,"v",(function(){return E})),r.d(e,"u",(function(){return J})),r.d(e,"t",(function(){return H})),r.d(e,"q",(function(){return A})),r.d(e,"p",(function(){return G})),r.d(e,"k",(function(){return K})),r.d(e,"h",(function(){return Q}));var n=r("b6bd");function o(t){return Object(n["a"])({url:"user/user",method:"get",params:t})}function a(t){return Object(n["a"])({url:"user/user/".concat(t,"/edit"),method:"get"})}function u(t){return Object(n["a"])({url:"user/set_status/".concat(t.status,"/").concat(t.id),method:"put"})}function i(t){return Object(n["a"])({url:"marketing/coupon/grant",method:"get",params:t})}function s(t){return Object(n["a"])({url:"user/edit_other/".concat(t),method:"get"})}function c(t){return Object(n["a"])({url:"user/user/".concat(t),method:"get"})}function l(t){return Object(n["a"])({url:"user/one_info/".concat(t.id),method:"get",params:t.datas})}function m(t){return Object(n["a"])({url:"user/user_level/vip_list",method:"get",params:t})}function d(t){return Object(n["a"])({url:"user/user_level/set_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function f(t,e){return Object(n["a"])({url:"user/user_level/task/".concat(t),method:"get",params:e})}function h(t){return Object(n["a"])({url:"user/user_level/set_task_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function g(t){return Object(n["a"])({url:"user/user_level/set_task_must/".concat(t.id,"/").concat(t.is_must),method:"PUT"})}function p(t){return Object(n["a"])({url:"/user/user_level/create_task",method:"get",params:t})}function b(t){return Object(n["a"])({url:"user/user_level/create",method:"get",params:t})}function _(t){return Object(n["a"])({url:"user/give_level/".concat(t),method:"get"})}function v(t){return Object(n["a"])({url:"user/user_group/list",method:"get",params:t})}function O(t){return Object(n["a"])({url:"user/user_group/add/".concat(t),method:"get"})}function j(t){return Object(n["a"])({url:"setting/update_admin",method:"PUT",data:t})}function w(t){return Object(n["a"])({url:"user/set_group",method:"post",data:t})}function y(t){return Object(n["a"])({url:"user/user_label",method:"get",params:t})}function x(t){return Object(n["a"])({url:"user/user_label/add/".concat(t),method:"get"})}function k(t){return Object(n["a"])({url:"user/set_label",method:"post",data:t})}function P(t){return Object(n["a"])({url:"user/user_label_cate/all",method:"get",params:t})}function I(t){return Object(n["a"])({url:"user/user_label_cate/".concat(t,"/edit"),method:"get"})}function C(t){return Object(n["a"])({url:"user/user_label_cate/create",method:"get"})}function $(t){return Object(n["a"])({url:"/user/member_batch/index",method:"get",params:t})}function S(t,e){return Object(n["a"])({url:"/user/member_batch/save/".concat(t),method:"post",data:e})}function F(t,e){return Object(n["a"])({url:"/user/member_batch/set_value/".concat(t),method:"get",params:e})}function z(t,e){return Object(n["a"])({url:"/user/member_card/index/".concat(t),method:"get",params:e})}function M(t){return Object(n["a"])({url:"/export/memberCard/".concat(t),method:"get"})}function N(){return Object(n["a"])({url:"/user/member/ship",method:"get"})}function R(t,e){return Object(n["a"])({url:"/user/member_ship/save/".concat(t),method:"post",data:e})}function q(){return Object(n["a"])({url:"/user/user/syncUsers",method:"get"})}function B(){return Object(n["a"])({url:"/user/user/create",method:"get"})}function D(){return Object(n["a"])({url:"/user/member_scan",method:"get"})}function L(t,e){return Object(n["a"])({url:"user/label/".concat(t),method:"post",data:e})}function T(t){return Object(n["a"])({url:"user/member_right/save/".concat(t.id),method:"post",data:t})}function U(){return Object(n["a"])({url:"user/member/right",method:"get"})}function E(t){return Object(n["a"])({url:"/user/member/record",method:"get",params:t})}function J(t){return Object(n["a"])({url:"user/member_card/set_status",method:"get",params:t})}function H(t){return Object(n["a"])({url:"user/member_ship/set_ship_status",method:"get",params:t})}function A(t,e){return Object(n["a"])({url:"user/member_agreement/save/".concat(t),method:"post",data:e})}function G(){return Object(n["a"])({url:"user/member/agreement",method:"get"})}function K(t){return Object(n["a"])({url:"user/give_level_time/".concat(t),method:"get"})}function Q(t){return Object(n["a"])({url:"user/label/".concat(t),method:"get"})}}}]);