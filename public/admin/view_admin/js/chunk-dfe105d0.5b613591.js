(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfe105d0"],{"0524":function(t,e,a){},1336:function(t,e,a){"use strict";a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"g",(function(){return d}));var i=a("b6bd");function r(t){return Object(i["a"])({url:"cms/cms",method:"get",params:t})}function n(t){return Object(i["a"])({url:"cms/cms",method:"post",data:t})}function o(t){return Object(i["a"])({url:"cms/cms/".concat(t),method:"get"})}function s(){return Object(i["a"])({url:"cms/category/create",method:"GET"})}function l(t){return Object(i["a"])({url:"cms/category",method:"GET",params:t})}function c(t){return Object(i["a"])({url:"cms/category/".concat(t,"/edit"),method:"GET"})}function u(t){return Object(i["a"])({url:"cms/category/set_status/".concat(t.id,"/").concat(t.status),method:"put"})}function d(t,e){return Object(i["a"])({url:"cms/cms/relation/".concat(e),method:"put",data:t})}},"7c74":function(t,e,a){"use strict";a("0524")},f164:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-manager"},[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/admin/cms/article/index"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"mr20",domProps:{textContent:t._s(t.$route.params.id?"编辑文章":"添加文章")}})],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"goodsTitle acea-row"},[a("div",{staticClass:"title"},[t._v("文章信息")])]),a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",t._b({staticClass:"mr50"},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"标题：",prop:"title","label-for":"title"}},[a("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入",maxlength:"20","element-id":"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1),a("Col",t._b({staticClass:"mr50"},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"作者：",prop:"author","label-for":"author"}},[a("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入","element-id":"author"},model:{value:t.formValidate.author,callback:function(e){t.$set(t.formValidate,"author",e)},expression:"formValidate.author"}})],1)],1),a("Col",t._b({staticClass:"mr50"},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"文章分类：","label-for":"cid",prop:"cid"}},[a("div",{directives:[{name:"width",rawName:"v-width",value:"90%",expression:"'90%'"}]},[a("Select",{model:{value:t.formValidate.cid,callback:function(e){t.$set(t.formValidate,"cid",e)},expression:"formValidate.cid"}},t._l(t.treeData,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.title))])})),1)],1)])],1),a("Col",t._b({staticClass:"mr50"},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"文章简介：",prop:"synopsis","label-for":"synopsis"}},[a("Input",{staticStyle:{width:"90%"},attrs:{type:"textarea",placeholder:"请输入"},model:{value:t.formValidate.synopsis,callback:function(e){t.$set(t.formValidate,"synopsis",e)},expression:"formValidate.synopsis"}})],1)],1),a("Col",t._b({staticClass:"mr50"},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"图文封面：",prop:"image_input"}},[a("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("单选")}}},[t.formValidate.image_input?a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:t.formValidate.image_input}})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{staticClass:"iconfont",attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1)],1),a("div",{staticClass:"goodsTitle acea-row"},[a("div",{staticClass:"title"},[t._v("文章内容")])]),a("FormItem",{attrs:{label:"文章内容：",prop:"content"}},[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1),a("div",{staticClass:"goodsTitle acea-row"},[a("div",{staticClass:"title"},[t._v("其他设置")])]),a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"banner显示：","label-for":"is_banner"}},[a("RadioGroup",{attrs:{"element-id":"is_banner"},model:{value:t.formValidate.is_banner,callback:function(e){t.$set(t.formValidate,"is_banner",e)},expression:"formValidate.is_banner"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("显示")]),a("Radio",{attrs:{label:0}},[t._v("不显示")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"热门文章：","label-for":"is_hot"}},[a("RadioGroup",{attrs:{"element-id":"is_hot"},model:{value:t.formValidate.is_hot,callback:function(e){t.$set(t.formValidate,"is_hot",e)},expression:"formValidate.is_hot"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("显示")]),a("Radio",{attrs:{label:0}},[t._v("不显示")])],1)],1)],1)],1),a("Button",{staticClass:"submission",attrs:{type:"primary"},on:{click:function(e){return t.onsubmit("formValidate")}}},[t._v("提交")])],1),a("Modal",{attrs:{width:"60%",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1)},r=[],n=a("b096"),o=a.n(n),s=a("7736"),l=a("b0e7"),c=a("196d"),u=a.n(c),d=a("1336");function m(t,e,a,i,r,n,o){try{var s=t[n](o),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(i,r)}function f(t){return function(){var e=this,a=arguments;return new Promise((function(i,r){var n=t.apply(e,a);function o(t){m(n,i,r,o,s,"next",t)}function s(t){m(n,i,r,o,s,"throw",t)}o(void 0)}))}}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={name:"addArticle",components:{uploadPictures:l["a"],VueUeditorWrap:u.a},data:function(){var t=this,e=function(e,a,i){t.formValidate.image_input?i():i(new Error("请上传图文封面"))},a=function(e,a,i){t.formValidate.cid?i():i(new Error("请选择文章分类"))};return{dialog:{},isChoice:"单选",grid:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},loading:!1,formValidate:{id:0,title:"",author:"",image_input:"",content:"",synopsis:"",url:"",is_hot:0,is_banner:0,cid:"",visit:0},ruleValidate:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],cid:[{required:!0,validator:a,trigger:"change",type:"number"}],image_input:[{required:!0,validator:e,trigger:"change"}],content:[{required:!0,message:"请输入文章内容",trigger:"change"}]},value:"",modalPic:!1,template:!1,treeData:[],formValidate2:{type:1},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""}}},computed:h(h({},Object(s["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),watch:{$route:function(t,e){this.$route.params.id?this.getDetails():this.formValidate={id:0,title:"",author:"",image_input:"",content:"",synopsis:"",url:"",is_hot:0,is_banner:0}}},methods:h(h({},Object(s["b"])("admin/page",["close"])),{},{getContent:function(t){this.formValidate.content=t,console.log(this.formValidate.content)},modalPicTap:function(){this.modalPic=!0},getPic:function(t){this.formValidate.image_input=t.att_dir,this.modalPic=!1},getClass:function(){var t=this;Object(d["c"])(this.formValidate2).then(function(){var e=f(o.a.mark((function e(a){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.treeData=a.data;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onsubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(d["d"])(e.formValidate).then(function(){var t=f(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg),setTimeout((function(){e.$router.push({path:"/admin/cms/article/index"})}),500);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}))},getDetails:function(){var t=this;Object(d["f"])(this.$route.params.id?this.$route.params.id:0).then(function(){var e=f(o.a.mark((function e(a){var i,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,r=i.info,t.formValidate={id:r.id,title:r.title,author:r.author,image_input:r.image_input,content:r.content,synopsis:r.synopsis,url:r.url,is_hot:r.is_hot,is_banner:r.is_banner,cid:r.cid,visit:r.visit};case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=a;var i=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return i}),37)}}),mounted:function(){this.$route.params.id&&this.getDetails()},created:function(){this.getClass()}},v=g,w=(a("7c74"),a("5d22")),_=Object(w["a"])(v,i,r,!1,null,"0a3fc316",null);e["default"]=_.exports}}]);