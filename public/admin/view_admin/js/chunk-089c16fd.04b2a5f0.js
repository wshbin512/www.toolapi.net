(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-089c16fd"],{"4b65":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("PageHeader",{staticClass:"product_tabs",attrs:{title:t.$route.meta.title,"hidden-breadcrumb":""}})],1),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{attrs:{"label-width":80},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{label:"协议名称："}},[r("Input",{model:{value:t.agreement.title,callback:function(e){t.$set(t.agreement,"title",e)},expression:"agreement.title"}})],1),r("FormItem",{attrs:{label:"协议内容："}},[r("vue-ueditor-wrap",{attrs:{config:t.ueConfig},model:{value:t.agreement.content,callback:function(e){t.$set(t.agreement,"content",e)},expression:"agreement.content"}})],1),r("FormItem",{attrs:{label:"开启状态："}},[r("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:t.agreement.status,callback:function(e){t.$set(t.agreement,"status",e)},expression:"agreement.status"}},[r("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:t.memberAgreementSave}},[t._v("保存")])],1)],1),t.spinShow?r("Spin",{attrs:{fix:""}}):t._e()],1)],1)},u=[],a=r("196d"),c=r.n(a),o=r("c24f"),s={components:{VueUeditorWrap:c.a},data:function(){return{ueConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},id:0,agreement:{title:"",content:"",status:1},spinShow:!1}},created:function(){this.memberAgreement()},methods:{memberAgreement:function(){var t=this;this.spinShow=!0,Object(o["p"])().then((function(e){t.spinShow=!1;var r=e.data,n=r.title,u=r.content,a=r.status,c=r.id;t.agreement.title=n,t.agreement.content=u,t.agreement.status=a,t.id=c})).catch((function(e){t.$Message.error(e),t.spinShow=!1}))},memberAgreementSave:function(){var t=this;this.$Spin.show(),Object(o["q"])(this.id,this.agreement).then((function(e){t.$Spin.hide(),t.$Message.success("保存成功"),t.memberAgreement()})).catch((function(e){t.$Spin.hide(),t.$Message.error(e)}))}}},i=s,d=r("5d22"),m=Object(d["a"])(i,n,u,!1,null,null,null);e["default"]=m.exports},c24f:function(t,e,r){"use strict";r.d(e,"L",(function(){return u})),r.d(e,"g",(function(){return a})),r.d(e,"n",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"e",(function(){return s})),r.d(e,"d",(function(){return i})),r.d(e,"m",(function(){return d})),r.d(e,"o",(function(){return m})),r.d(e,"A",(function(){return l})),r.d(e,"D",(function(){return f})),r.d(e,"C",(function(){return b})),r.d(e,"B",(function(){return h})),r.d(e,"c",(function(){return g})),r.d(e,"b",(function(){return p})),r.d(e,"j",(function(){return _})),r.d(e,"F",(function(){return O})),r.d(e,"l",(function(){return j})),r.d(e,"E",(function(){return v})),r.d(e,"Q",(function(){return w})),r.d(e,"I",(function(){return k})),r.d(e,"G",(function(){return S})),r.d(e,"R",(function(){return $})),r.d(e,"H",(function(){return U})),r.d(e,"K",(function(){return x})),r.d(e,"J",(function(){return C})),r.d(e,"M",(function(){return F})),r.d(e,"r",(function(){return I})),r.d(e,"s",(function(){return A})),r.d(e,"N",(function(){return E})),r.d(e,"f",(function(){return P})),r.d(e,"P",(function(){return y})),r.d(e,"y",(function(){return H})),r.d(e,"S",(function(){return M})),r.d(e,"i",(function(){return T})),r.d(e,"O",(function(){return D})),r.d(e,"z",(function(){return J})),r.d(e,"x",(function(){return R})),r.d(e,"w",(function(){return q})),r.d(e,"v",(function(){return z})),r.d(e,"u",(function(){return B})),r.d(e,"t",(function(){return L})),r.d(e,"q",(function(){return W})),r.d(e,"p",(function(){return G})),r.d(e,"k",(function(){return K})),r.d(e,"h",(function(){return N}));var n=r("b6bd");function u(t){return Object(n["a"])({url:"user/user",method:"get",params:t})}function a(t){return Object(n["a"])({url:"user/user/".concat(t,"/edit"),method:"get"})}function c(t){return Object(n["a"])({url:"user/set_status/".concat(t.status,"/").concat(t.id),method:"put"})}function o(t){return Object(n["a"])({url:"marketing/coupon/grant",method:"get",params:t})}function s(t){return Object(n["a"])({url:"user/edit_other/".concat(t),method:"get"})}function i(t){return Object(n["a"])({url:"user/user/".concat(t),method:"get"})}function d(t){return Object(n["a"])({url:"user/one_info/".concat(t.id),method:"get",params:t.datas})}function m(t){return Object(n["a"])({url:"user/user_level/vip_list",method:"get",params:t})}function l(t){return Object(n["a"])({url:"user/user_level/set_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function f(t,e){return Object(n["a"])({url:"user/user_level/task/".concat(t),method:"get",params:e})}function b(t){return Object(n["a"])({url:"user/user_level/set_task_show/".concat(t.id,"/").concat(t.is_show),method:"PUT"})}function h(t){return Object(n["a"])({url:"user/user_level/set_task_must/".concat(t.id,"/").concat(t.is_must),method:"PUT"})}function g(t){return Object(n["a"])({url:"/user/user_level/create_task",method:"get",params:t})}function p(t){return Object(n["a"])({url:"user/user_level/create",method:"get",params:t})}function _(t){return Object(n["a"])({url:"user/give_level/".concat(t),method:"get"})}function O(t){return Object(n["a"])({url:"user/user_group/list",method:"get",params:t})}function j(t){return Object(n["a"])({url:"user/user_group/add/".concat(t),method:"get"})}function v(t){return Object(n["a"])({url:"setting/update_admin",method:"PUT",data:t})}function w(t){return Object(n["a"])({url:"user/set_group",method:"post",data:t})}function k(t){return Object(n["a"])({url:"user/user_label",method:"get",params:t})}function S(t){return Object(n["a"])({url:"user/user_label/add/".concat(t),method:"get"})}function $(t){return Object(n["a"])({url:"user/set_label",method:"post",data:t})}function U(t){return Object(n["a"])({url:"user/user_label_cate/all",method:"get",params:t})}function x(t){return Object(n["a"])({url:"user/user_label_cate/".concat(t,"/edit"),method:"get"})}function C(t){return Object(n["a"])({url:"user/user_label_cate/create",method:"get"})}function F(t){return Object(n["a"])({url:"/user/member_batch/index",method:"get",params:t})}function I(t,e){return Object(n["a"])({url:"/user/member_batch/save/".concat(t),method:"post",data:e})}function A(t,e){return Object(n["a"])({url:"/user/member_batch/set_value/".concat(t),method:"get",params:e})}function E(t,e){return Object(n["a"])({url:"/user/member_card/index/".concat(t),method:"get",params:e})}function P(t){return Object(n["a"])({url:"/export/memberCard/".concat(t),method:"get"})}function y(){return Object(n["a"])({url:"/user/member/ship",method:"get"})}function H(t,e){return Object(n["a"])({url:"/user/member_ship/save/".concat(t),method:"post",data:e})}function M(){return Object(n["a"])({url:"/user/user/syncUsers",method:"get"})}function T(){return Object(n["a"])({url:"/user/user/create",method:"get"})}function D(){return Object(n["a"])({url:"/user/member_scan",method:"get"})}function J(t,e){return Object(n["a"])({url:"user/label/".concat(t),method:"post",data:e})}function R(t){return Object(n["a"])({url:"user/member_right/save/".concat(t.id),method:"post",data:t})}function q(){return Object(n["a"])({url:"user/member/right",method:"get"})}function z(t){return Object(n["a"])({url:"/user/member/record",method:"get",params:t})}function B(t){return Object(n["a"])({url:"user/member_card/set_status",method:"get",params:t})}function L(t){return Object(n["a"])({url:"user/member_ship/set_ship_status",method:"get",params:t})}function W(t,e){return Object(n["a"])({url:"user/member_agreement/save/".concat(t),method:"post",data:e})}function G(){return Object(n["a"])({url:"user/member/agreement",method:"get"})}function K(t){return Object(n["a"])({url:"user/give_level_time/".concat(t),method:"get"})}function N(t){return Object(n["a"])({url:"user/label/".concat(t),method:"get"})}}}]);