(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bf9df30"],{"28bd":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/admin/marketing/store_combination/index"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"mr20",domProps:{textContent:t._s(t.$route.params.id?"编辑拼团商品":"添加拼团商品")}})],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[a("Col",{attrs:{span:"20"}},[a("Steps",{attrs:{current:t.current}},[a("Step",{attrs:{title:"选择拼团商品"}}),a("Step",{attrs:{title:"填写基础信息"}}),a("Step",{attrs:{title:"修改商品详情"}})],1)],1),a("Col",{attrs:{span:"23"}},[a("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},on:{"on-validate":t.validate},nativeOn:{submit:function(t){t.preventDefault()}}},[0===t.current?a("FormItem",{attrs:{label:"选择商品：",prop:"image_input"}},[a("div",{staticClass:"picBox",on:{click:t.changeGoods}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])]):t._e(),a("Row",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{prop:"image"}},[a("div",{staticClass:"custom-label",attrs:{slot:"label"},slot:"label"},[a("div",[a("div",[t._v("商品主图")]),a("div",[t._v("(750*750)")])]),a("div",[t._v("：")])]),a("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("dan","danFrom")}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{prop:"images"}},[a("div",{staticClass:"custom-label",attrs:{slot:"label"},slot:"label"},[a("div",[a("div",[t._v("商品轮播图")]),a("div",[t._v("(750*750)")])]),a("div",[t._v("：")])]),a("div",{staticClass:"acea-row"},[t._l(t.formValidate.images,(function(e,r){return a("div",{key:r,staticClass:"pictrue",attrs:{draggable:"true"},on:{dragstart:function(a){return t.handleDragStart(a,e)},dragover:function(a){return a.preventDefault(),t.handleDragOver(a,e)},dragenter:function(a){return t.handleDragEnter(a,e)},dragend:function(a){return t.handleDragEnd(a,e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]}),a("Button",{staticClass:"btndel",attrs:{shape:"circle",icon:"md-close"},nativeOn:{click:function(e){return t.handleRemove(r)}}})],1)})),t.formValidate.images.length<10?a("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(e){return t.modalPicTap("duo")}}},[a("Icon",{attrs:{type:"ios-camera-outline",size:"26"}})],1):t._e()],2)])],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"拼团名称：",prop:"title","label-for":"title"}},[a("Input",{attrs:{placeholder:"请输入拼团名称","element-id":"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"拼团简介：",prop:"info","label-for":"info"}},[a("Input",{attrs:{placeholder:"请输入拼团简介",type:"textarea",rows:4,"element-id":"info"},model:{value:t.formValidate.info,callback:function(e){t.$set(t.formValidate,"info",e)},expression:"formValidate.info"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团时间：",prop:"section_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("DatePicker",{staticClass:"perW30",attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择活动时间",value:t.formValidate.section_time},on:{"on-change":t.onchangeTime},model:{value:t.formValidate.section_time,callback:function(e){t.$set(t.formValidate,"section_time",e)},expression:"formValidate.section_time"}}),a("div",{staticClass:"ml10 grey"},[t._v("设置活动开启结束时间，用户可以在设置时间内发起参与拼团")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"运费模板：",prop:"temp_id"}},[a("div",{staticClass:"acea-row row-middle"},[a("Select",{staticClass:"perW35",model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.templateList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1),a("div",{staticClass:"ml10 grey"},[a("router-link",{attrs:{to:{path:"/admin/setting/freight/shipping_templates/list"}}},[t._v("添加运费模板")])],1)],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团时效(单位 小时)：",prop:"effective_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"请输入拼团时效(单位 小时)","element-id":"effective_time"},model:{value:t.formValidate.effective_time,callback:function(e){t.$set(t.formValidate,"effective_time",e)},expression:"formValidate.effective_time"}}),a("div",{staticClass:"ml10 grey"},[t._v("用户发起拼团后开始计时，需在设置时间内邀请到规定好友人数参团，超过时效时间，则系统判定拼团失败，自动发起退款")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"拼团人数：",prop:"people"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"请输入拼团人数",precision:0,"element-id":"people"},on:{"on-change":t.peopleChange},model:{value:t.formValidate.people,callback:function(e){t.$set(t.formValidate,"people",e)},expression:"formValidate.people"}}),a("div",{staticClass:"ml10 grey"},[t._v("单次拼团需要参与的用户数")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"总购买数量限制：",prop:"num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入总数量限制",precision:0,"element-id":"num"},model:{value:t.formValidate.num,callback:function(e){t.$set(t.formValidate,"num",e)},expression:"formValidate.num"}}),a("div",{staticClass:"ml10 grey"},[t._v("该商品活动期间内，用户可购买的最大数量。例如设置为4，表示本次活动有效期内，每个用户最多可购买4件")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单次购买数量限制：",prop:"once_num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{min:1,placeholder:"请输入单次购买数量限制",precision:0,"element-id":"once_num"},model:{value:t.formValidate.once_num,callback:function(e){t.$set(t.formValidate,"once_num",e)},expression:"formValidate.once_num"}}),a("div",{staticClass:"ml10 grey"},[t._v("用户参与拼团时，一次购买最大数量限制。例如设置为2，表示每次参与拼团时，用户一次购买数量最大可选择2个")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单位：",prop:"unit_name","label-for":"unit_name"}},[a("Input",{staticClass:"perW20",attrs:{placeholder:"请输入单位","element-id":"unit_name"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"补齐人数："}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW10",attrs:{placeholder:"请输入补齐人数",min:0,max:t.formValidate.people-1,precision:0},on:{"on-change":t.peopleNumchange},model:{value:t.formValidate.peopleNum,callback:function(e){t.$set(t.formValidate,"peopleNum",e)},expression:"formValidate.peopleNum"}}),a("div",{staticClass:"ml10 grey"},[t._v("当用户参与拼团后，成团时效内未成团情况下，设置补齐人数可虚拟成团。例如：成团人数为10人，补齐人数为4人，真实用户需要参与6人成团才可以在最后未成团时自动补齐虚拟人员")])],1)])],1),a("Col",{directives:[{name:"show",rawName:"v-show"}],attrs:{span:"24"}},[a("FormItem",{attrs:{label:"虚拟成团比例(%)：",prop:"virtual"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW10",attrs:{min:0,disabled:"",placeholder:"请输入虚拟成团比例",precision:0,max:100,"element-id":"virtual",formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},model:{value:t.formValidate.virtual,callback:function(e){t.$set(t.formValidate,"virtual",e)},expression:"formValidate.virtual"}}),a("div",{staticClass:"ml10 grey"},[t._v("拼团结束前若用户发起的活动未成团，并且现有人数比例大于设置比例，自动补齐人数，拼团成功。100%为不自动补齐")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序："}},[a("InputNumber",{staticClass:"perW10",attrs:{placeholder:"请输入排序","element-id":"sort",precision:0},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"热门推荐：",props:"is_hot","label-for":"is_hot"}},[a("RadioGroup",{attrs:{"element-id":"is_hot"},model:{value:t.formValidate.is_host,callback:function(e){t.$set(t.formValidate,"is_host",e)},expression:"formValidate.is_host"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"活动状态：",props:"is_show","label-for":"is_show"}},[a("RadioGroup",{attrs:{"element-id":"status"},model:{value:t.formValidate.is_show,callback:function(e){t.$set(t.formValidate,"is_show",e)},expression:"formValidate.is_show"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"规格选择："}},[a("Table",{attrs:{data:t.specsData,columns:t.columns,border:""},on:{"on-selection-change":t.changeCheckbox},scopedSlots:t._u([{key:"pic",fn:function(e){var r=e.row,i=e.index;return[a("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danTable",i)}}},[r.pic?a("div",{staticClass:"pictrue pictrueTab"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.pic,expression:"row.pic"}]})]):a("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[a("Icon",{staticClass:"iconfont",attrs:{type:"ios-camera-outline",size:"21"}})],1)])]}}])})],1)],1)],1),a("Row",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}]},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"内容："}},[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.formValidate.description,callback:function(e){t.$set(t.formValidate,"description",e)},expression:"formValidate.description"}})],1)],1)],1),a("FormItem",[a("Button",{directives:[{name:"show",rawName:"v-show",value:0!==t.current,expression:"current!==0"}],staticClass:"submission mr15",attrs:{disabled:t.$route.params.id&&1===t.current},on:{click:t.step}},[t._v("上一步")]),a("Button",{staticClass:"submission",attrs:{type:"primary",disabled:t.submitOpen&&2===t.current},domProps:{textContent:t._s(2===t.current?"提交":"下一步")},on:{click:function(e){return t.next("formValidate")}}})],1)],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.modals?a("goods-list",{ref:"goodslist",on:{getProductId:t.getProductId}}):t._e()],1),a("Modal",{attrs:{width:"800px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic,getPicD:t.getPicD}}):t._e()],1)],1)},i=[],n=a("a34a"),o=a.n(n),s=a("2f62"),l=a("c4ad"),c=a("ef0d"),u=a("6625"),d=a.n(u),m=a("b0e7"),p=a("b7be"),f=a("c4c8");function g(t){return v(t)||b(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function v(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function w(t,e,a,r,i,n,o){try{var s=t[n](o),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function _(t){return function(){var e=this,a=arguments;return new Promise((function(r,i){var n=t.apply(e,a);function o(t){w(n,r,i,o,s,"next",t)}function s(t){w(n,r,i,o,s,"throw",t)}o(void 0)}))}}function V(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?V(a,!0).forEach((function(e){k(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y={name:"storeCombinationCreate",components:{UeditorWrap:c["a"],goodsList:l["default"],uploadPictures:m["a"],VueUeditorWrap:d.a},data:function(){return{submitOpen:!1,spinShow:!1,isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},modals:!1,modal_loading:!1,images:[],templateList:[],columns:[],specsData:[],picTit:"",tableIndex:0,formValidate:{images:[],info:"",title:"",image:"",unit_name:"",price:0,effective_time:24,stock:1,sales:0,sort:0,postage:0,is_postage:0,is_host:0,is_show:0,section_time:[],description:"",id:0,product_id:0,people:2,once_num:1,num:1,temp_id:"",attrs:[],items:[],virtual:100,peopleNum:0},ruleValidate:{image:[{required:!0,message:"请选择主图",trigger:"change"}],images:[{required:!0,type:"array",message:"请选择主图",trigger:"change"},{type:"array",min:1,message:"Choose two hobbies at best",trigger:"change"}],title:[{required:!0,message:"请输入拼团名称",trigger:"blur"}],info:[{required:!0,message:"请输入拼团简介",trigger:"blur"}],section_time:[{required:!0,type:"array",message:"请选择活动时间",trigger:"change"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入拼团价",trigger:"blur"}],cost:[{required:!0,type:"number",message:"请输入成本价",trigger:"blur"}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"}],give_integral:[{required:!0,type:"number",message:"请输入赠送积分",trigger:"blur"}],effective_time:[{required:!0,type:"number",message:"请输入拼团时效(单位 小时)",trigger:"blur"}],people:[{required:!0,type:"number",message:"请输入拼团人数",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入购买数量限制",trigger:"blur"}],once_num:[{required:!0,type:"number",message:"请输入单次购买数量限制",trigger:"blur"}],virtual:[{required:!0,type:"number",message:"请输入虚拟成团比例",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change",type:"number"}]},copy:0}},watch:{"formValidate.peopleNum":function(t){console.log(t)}},computed:C({},Object(s["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:155},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo()),this.productGetTemplate()},methods:{peopleChange:function(t){t<2&&(this.formValidate.people=2,this.$set(this.formValidate,"people",2))},peopleNumchange:function(t){0!=t&&(this.formValidate.virtual=Math.floor((this.formValidate.people-t)/this.formValidate.people*100))},productAttrs:function(t){var e=this,a=this;Object(p["x"])(t.id,3).then((function(t){var r=t.data.info,i={type:"selection",width:60,align:"center"};a.specsData=r.attrs,a.specsData.forEach((function(t,e){a.$set(a.specsData[e],"id",e)})),a.formValidate.items=r.items,a.columns=r.header,console.log("111111111",e.columns),a.columns.unshift(i),a.inputChange(r)})).catch((function(t){a.$Message.error(t.msg)}))},inputChange:function(t){var e=this,a=[];t.header.forEach((function(t,e){1===t.type&&a.push({index:e,key:t.key,title:t.title})})),a.forEach((function(t,a){var r=t.title,i=t.key,n={title:r,key:i,align:"center",minWidth:100,render:function(t,a){return t("div",[t("InputNumber",{props:{min:0,value:"price"===i?a.row.price:a.row.quota},on:{"on-change":function(t){"price"===i?a.row.price=t:a.row.quota=t,e.specsData[a.index]=a.row,e.formValidate.attrs&&e.formValidate.attrs.length&&e.formValidate.attrs.forEach((function(t,r){t.id===a.row.id&&e.formValidate.attrs.splice(r,1,a.row)}))}}})])}};e.columns.splice(t.index,1,n)}))},changeCheckbox:function(t){this.formValidate.attrs=t},productGetTemplate:function(){var t=this;Object(f["t"])().then((function(e){t.templateList=e.data}))},validate:function(t,e,a){!1===e&&this.$Message.error(a)},getProductId:function(t){var e=this;this.modal_loading=!1,this.modals=!1,setTimeout((function(){e.formValidate={images:t.slider_image,info:t.store_info,title:t.store_name,image:t.image,unit_name:t.unit_name,price:0,effective_time:24,stock:t.stock,sales:t.sales,sort:t.sort,postage:t.postage,is_postage:t.is_postage,is_host:t.is_hot,is_show:0,section_time:[],description:t.description,id:0,people:2,num:1,once_num:1,product_id:t.id,temp_id:t.temp_id,virtual:100,peopleNum:0},e.productAttrs(t)}),500)},cancel:function(){this.modals=!1},onchangeTime:function(t){this.formValidate.section_time=t},getInfo:function(){var t=this;this.spinShow=!0,Object(p["h"])(this.$route.params.id).then(function(){var e=_(o.a.mark((function e(a){var r,i,n,s,l,c;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(c in r=t,i=a.data.info,n={type:"selection",width:60,align:"center"},t.formValidate=i,100!==parseInt(t.formValidate.virtual)?t.formValidate.peopleNum=Math.floor(t.formValidate.people-t.formValidate.virtual/100*t.formValidate.people):t.formValidate.peopleNum=0,t.$set(t.formValidate,"items",i.attrs.items),t.columns=i.attrs.header,t.columns.unshift(n),t.specsData=i.attrs.value,r.specsData.forEach((function(t,e){r.$set(r.specsData[e],"id",e)})),s=i.attrs,l=[],i.attrs.value)i.attrs.value[c]._checked&&l.push(i.attrs.value[c]);r.formValidate.attrs=l,r.inputChange(s),t.spinShow=!1;case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},next:function(t){var e=this,a=this;2===this.current?this.$refs[t].validate((function(t){if(!t)return!1;1==e.copy&&(e.formValidate.copy=1),e.formValidate.id=Number(e.$route.params.id)||0,e.submitOpen=!0,console.log(e.formValidate),Object(p["g"])(e.formValidate).then(function(){var t=_(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.submitOpen=!1,e.$Message.success(a.msg),setTimeout((function(){e.$router.push({path:"/admin/marketing/store_combination/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitOpen=!1,e.$Message.error(t.msg)}))})):1===this.current?this.$refs[t].validate((function(t){if(!t)return e.$Message.warning("请完善您的信息");if(a.formValidate.people<2)return a.$Message.error("拼团人数必须大于2");if(a.formValidate.num<0)return a.$Message.error("购买数量限制必须大于0");if(a.formValidate.once_num<0)return a.$Message.error("单次购买数量限制必须大于0");if(!a.formValidate.attrs)return a.$Message.error("请选择属性规格");for(var r in a.formValidate.attrs)if(a.formValidate.attrs[r].quota<=0)return a.$Message.error("拼团限量必须大于0");e.current+=1})):this.formValidate.image?this.current+=1:this.$Message.warning("请选择商品")},step:function(){this.current--},getContent:function(t){this.formValidate.description=t},modalPicTap:function(t,e,a){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e,this.tableIndex=a},getPic:function(t){switch(this.picTit){case"danFrom":this.formValidate.image=t.att_dir;break;default:this.formValidate.attrs&&this.formValidate.attrs.length&&this.$set(this.specsData[this.tableIndex],"_checked",!0),this.specsData[this.tableIndex].pic=t.att_dir}this.modalPic=!1},getPicD:function(t){var e=this;this.images=t,this.images.map((function(t){e.formValidate.images.push(t.att_dir),e.formValidate.images=e.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(t){this.images.splice(t,1),this.formValidate.images.splice(t,1)},changeGoods:function(){this.modals=!0},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){if(t.dataTransfer.effectAllowed="move",e!==this.dragging){var a=g(this.formValidate.images),r=a.indexOf(this.dragging),i=a.indexOf(e);a.splice.apply(a,[i,0].concat(g(a.splice(r,1)))),this.formValidate.images=a}},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=a;var r=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return r}),37)}}},x=y,O=(a("7092"),a("2877")),j=Object(O["a"])(x,r,i,!1,null,"175fb978",null);e["default"]=j.exports},7092:function(t,e,a){"use strict";var r=a("a942"),i=a.n(r);i.a},a942:function(t,e,a){},b7be:function(t,e,a){"use strict";a.d(e,"p",(function(){return i})),a.d(e,"m",(function(){return n})),a.d(e,"l",(function(){return o})),a.d(e,"q",(function(){return s})),a.d(e,"o",(function(){return l})),a.d(e,"r",(function(){return c})),a.d(e,"y",(function(){return u})),a.d(e,"z",(function(){return d})),a.d(e,"s",(function(){return m})),a.d(e,"n",(function(){return p})),a.d(e,"J",(function(){return f})),a.d(e,"c",(function(){return g})),a.d(e,"f",(function(){return h})),a.d(e,"e",(function(){return b})),a.d(e,"b",(function(){return v})),a.d(e,"a",(function(){return w})),a.d(e,"d",(function(){return _})),a.d(e,"i",(function(){return V})),a.d(e,"j",(function(){return C})),a.d(e,"F",(function(){return k})),a.d(e,"h",(function(){return y})),a.d(e,"g",(function(){return x})),a.d(e,"k",(function(){return O})),a.d(e,"w",(function(){return j})),a.d(e,"C",(function(){return I})),a.d(e,"B",(function(){return P})),a.d(e,"A",(function(){return $})),a.d(e,"D",(function(){return E})),a.d(e,"u",(function(){return D})),a.d(e,"v",(function(){return T})),a.d(e,"E",(function(){return F})),a.d(e,"x",(function(){return N})),a.d(e,"t",(function(){return M})),a.d(e,"K",(function(){return S})),a.d(e,"I",(function(){return U})),a.d(e,"G",(function(){return q})),a.d(e,"H",(function(){return R}));var r=a("b6bd");function i(t){return Object(r["a"])({url:"marketing/coupon/list",method:"get",params:t})}function n(t){return Object(r["a"])({url:"marketing/coupon/create/".concat(t),method:"get"})}function o(t){return Object(r["a"])({url:"product/category/tree/".concat(t),method:"get"})}function s(t){return Object(r["a"])({url:"marketing/coupon/save_coupon",method:"post",data:t})}function l(t){return Object(r["a"])({url:"marketing/coupon/".concat(t,"/edit"),method:"get"})}function c(t){return Object(r["a"])({url:"marketing/coupon/issue/".concat(t),method:"get"})}function u(t){return Object(r["a"])({url:"marketing/coupon/released",method:"get",params:t})}function d(t){return Object(r["a"])({url:"marketing/coupon/released/issue_log/".concat(t),method:"get"})}function m(t){return Object(r["a"])({url:"marketing/coupon/status/".concat(t.id,"/").concat(t.status),method:"get"})}function p(t){return Object(r["a"])({url:"marketing/coupon/copy/".concat(t),method:"get"})}function f(t){return Object(r["a"])({url:"/marketing/coupon/user",method:"get",params:t})}function g(t){return Object(r["a"])({url:"marketing/bargain",method:"get",params:t})}function h(t){return Object(r["a"])({url:"marketing/bargain_list",method:"get",params:t})}function b(t){return Object(r["a"])({url:"marketing/bargain_list_info/".concat(t),method:"get"})}function v(t){return Object(r["a"])({url:"marketing/bargain/".concat(t),method:"get"})}function w(t){return Object(r["a"])({url:"marketing/bargain/".concat(t.id),method:"POST",data:t})}function _(t){return Object(r["a"])({url:"marketing/bargain/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function V(t){return Object(r["a"])({url:"marketing/combination",method:"get",params:t})}function C(t){return Object(r["a"])({url:"marketing/combination/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function k(){return Object(r["a"])({url:"marketing/combination/statistics",method:"GET"})}function y(t){return Object(r["a"])({url:"marketing/combination/".concat(t),method:"get"})}function x(t){return Object(r["a"])({url:"marketing/combination/".concat(t.id),method:"POST",data:t})}function O(t){return Object(r["a"])({url:"marketing/combination/combine/list",method:"GET",params:t})}function j(t){return Object(r["a"])({url:"marketing/combination/order_pink/".concat(t),method:"GET"})}function I(t){return Object(r["a"])({url:"marketing/seckill",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"marketing/seckill/".concat(t),method:"GET"})}function $(t){return Object(r["a"])({url:"marketing/seckill/".concat(t.id),method:"post",data:t})}function E(t){return Object(r["a"])({url:"marketing/seckill/set_status/".concat(t.id,"/").concat(t.status),method:"put"})}function D(t){return Object(r["a"])({url:"marketing/integral",method:"GET",params:t})}function T(t){return Object(r["a"])({url:"marketing/integral/statistics",method:"GET",params:t})}function F(){return Object(r["a"])({url:"marketing/seckill/time_list",method:"GET"})}function N(t,e){return Object(r["a"])({url:"product/product/attrs/".concat(t,"/").concat(e),method:"GET"})}function M(t){return Object(r["a"])({url:"marketing/coupon/released/".concat(t),method:"DELETE"})}function S(t){return Object(r["a"])({url:"export/userPoint",method:"get",params:t})}function U(t){return Object(r["a"])({url:"export/storeBargain",method:"get",params:t})}function q(t){return Object(r["a"])({url:"export/storeCombination",method:"get",params:t})}function R(t){return Object(r["a"])({url:"export/storeSeckill",method:"get",params:t})}},ef0d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1)},i=[],n=a("6625"),o=a.n(n),s={name:"index",components:{VueUeditorWrap:o.a},props:{content:""},watch:{content:{handler:function(t){console.log(t)},deep:!0}},data:function(){return{contents:this.content,myConfig:{autoHeightEnabled:!1,initialFrameHeight:200,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""}}},methods:{addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=a;var r=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return r}),37,t)}},created:function(){}},l=s,c=a("2877"),u=Object(c["a"])(l,r,i,!1,null,"c76d99ca",null);e["a"]=u.exports}}]);