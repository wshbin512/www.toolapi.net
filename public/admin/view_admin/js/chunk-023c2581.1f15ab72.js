(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-023c2581"],{"0c2d":function(t,e,a){"use strict";var r=a("dd8c"),i=a.n(r);i.a},"0d42":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return o}));var r=a("b6bd");function i(t){return Object(r["a"])({url:"marketing/discounts/save",method:"post",data:t})}function n(t){return Object(r["a"])({url:"marketing/discounts/list",method:"get",params:t})}function s(t){return Object(r["a"])({url:"marketing/discounts/set_status/".concat(t.id,"/").concat(t.status),method:"get",params:t})}function o(t){return Object(r["a"])({url:"marketing/discounts/info/"+t,method:"get"})}},"61f7":function(t,e,a){"use strict";function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(a,!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in a)if(new RegExp("(".concat(r,")")).test(e)){var i=a[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:o(i))}return e}function o(t){return("00"+t).substr(t.length)}a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return d})),a.d(e,"b",(function(){return u}));var l={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var c=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i({required:!0,message:t,type:"string"},e)}function u(t){return _.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(d,"请输入%s"),c(u,"%s格式不正确");var _=Object.keys(l).reduce((function(t,e){return t[e]=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s="range"===e?{min:t[0],max:t[1]}:n({},e,t);return i({message:a.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},s,{},r)},c(t[e],l[e]),t}),{})},"862a":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a34a"),_Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),vuex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2f62"),_components_goodsList_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c4ad"),_components_uploadPictures__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b0e7"),_api_discounts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("0d42"),_formRule_discountsFrom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("c52d"),_api_product__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("c4c8"),_api_marketing__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b7be"),_utils_validate__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("61f7");function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function asyncGeneratorStep(t,e,a,r,i,n,s){try{var o=t[n](s),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(r,i)}function _asyncToGenerator(t){return function(){var e=this,a=arguments;return new Promise((function(r,i){var n=t.apply(e,a);function s(t){asyncGeneratorStep(n,r,i,s,o,"next",t)}function o(t){asyncGeneratorStep(n,r,i,s,o,"throw",t)}s(void 0)}))}}function ownKeys(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(a,!0).forEach((function(e){_defineProperty(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ownKeys(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _defineProperty(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}__webpack_exports__["a"]={name:"lotteryCreate",components:{goodsList:_components_goodsList_index__WEBPACK_IMPORTED_MODULE_2__["default"],uploadPictures:_components_uploadPictures__WEBPACK_IMPORTED_MODULE_3__["a"]},data:function(){var t,e=this;return t={ggModel:!1,modals:!1,loading:!1,manyFormValidate:[],selectProductAttrList:[],header:[{type:"selection",width:60,align:"center"},{title:"图片",slot:"image",width:120,align:"center"},{title:"规格",key:"value",align:"center",minWidth:120},{title:"售价",key:"ot_price",align:"center",minWidth:120},{title:"优惠价",key:"price",align:"center",minWidth:120,render:function(t,a){return t("div",[t("InputNumber",{props:{min:1,value:a.row.price},on:{"on-change":function(t){console.log(t),a.row.price=t,e.manyFormValidate[a.index]=a.row,console.log(e.selectProductAttrList),e.selectProductAttrList.forEach((function(t,r){t.value===a.row.value&&e.selectProductAttrList.splice(r,1,a.row)}))}}})])}}],userLabelList:[],userLevelListApi:[],submitOpen:!1,spinShow:!1,addGoodsModel:!1,editData:{},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},isChoice:"单选",current:0,modalPic:!1,modal_loading:!1,images:[],templateList:[{id:0,name:"非付费会员"},{id:1,name:"付费会员"}],columns:[{title:"商品名称",slot:"store_name",width:300,align:"center"},{title:"参与规格",slot:"attr",align:"center",minWidth:120},{title:"操作",slot:"setting",align:"center",width:180}],goodsAddType:"",specsMainData:[],specsData:[],formValidate:{title:"",type:0,image:"",is_time:0,is_limit:0,limit_num:0,link_ids:[],time:[],sort:0,free_shipping:1,status:1,products:[]},ruleValidate:_formRule_discountsFrom__WEBPACK_IMPORTED_MODULE_5__["a"],currentid:"",picTit:"",tableIndex:0,copy:0,editIndex:null,id:""},_defineProperty(t,"copy",0),_defineProperty(t,"rate_price",0),t},filters:{typeName:function(t){return 1==t?"未中奖":2==t?"积分":3==t?"余额":4==t?"红包":5==t?"优惠券":6==t?"商品":void 0}},computed:_objectSpread({},Object(vuex__WEBPACK_IMPORTED_MODULE_1__["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:135},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){console.log(this.$route.query),this.$route.query.id&&(this.id=this.$route.query.id,this.current=0,console.log(this.$route.query.copy),this.copy=this.$route.query.copy||0,this.getInfo()),this.labelListApi()},methods:{selectOne:function(t){console.log(t),this.selectProductAttrList=t},getAttr:function(){if(console.log(this.selectProductAttrList),!this.selectProductAttrList.length)return this.$Message.warning("请先选择规格");var t;t="Main"===this.goodsAddType?this.specsMainData:this.specsData,this.$set(t[this.tabIndex],"attr",this.selectProductAttrList),this.$set(t[this.tabIndex],"items",this.selectProductAttrList[0].items),console.log(t[this.tabIndex]),this.ggModel=!1},clearOne:function(t){console.log(t)},changeRatePrice:function(){var t=!0,e=!1,a=void 0;try{for(var r,i=this.manyFormValidate[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var n=r.value;this.$set(n,"price",this.rate_price)}}catch(s){e=!0,a=s}finally{try{t||null==i.return||i.return()}finally{if(e)throw a}}},generate:function(t,e){var a=this;Object(_api_marketing__WEBPACK_IMPORTED_MODULE_7__["O"])(t,e).then((function(t){for(var e=JSON.parse(JSON.stringify(t.data.info.attrs)),r=JSON.parse(JSON.stringify(t.data.info.items)),i=0;i<e.length;i++){var n=e[i];n.items=r}console.log(e);var s="Main"===a.goodsAddType?a.specsMainData[a.tabIndex].attr||[]:a.specsData[a.tabIndex].attr||[];if(console.log(s),a.selectProductAttrList=[],s.length)for(var o=0;o<s.length;o++)for(var l=s[o],c=0;c<e.length;c++)l.value===e[c].value&&(a.$set(e[c],"price",l.price),a.$set(e[c],"_checked",!0),a.selectProductAttrList.push(e[c]));a.manyFormValidate=e,console.log(a.manyFormValidate),a.ggModel=!0})).catch((function(t){a.$Message.error(t.msg)}))},getProductId:function(t){var e=this;if("Main"===this.goodsAddType&&(t.length>1||this.specsMainData.length>0))this.$Message.warning("最多添加一个商品");else{for(var a=JSON.parse(JSON.stringify(t)),r=0;r<a.length;r++)a[r].attr=[];this.$nextTick((function(t){if("Main"===e.goodsAddType){var r=e.concat_arr(e.specsData,a);if(console.log(r),r.length)return e.$Message.warning("已存在搭配商品");e.specsMainData=e.specsMainData.concat(a)}else{console.log(e.specsData,a);var i=e.concat_arr(e.specsData,a),n=e.concat_arr(e.specsMainData,a);if(console.log(i),i.length||n.length)return e.$Message.warning("已存在相同主商品/搭配商品");e.specsData=e.specsData.concat(a)}e.modals=!1}))}},labelListApi:function(){var t=this;Object(_api_product__WEBPACK_IMPORTED_MODULE_6__["m"])().then((function(e){t.userLabelList=e.data.list,t.userLabelList.map((function(t){t.id=t.id+""}))}))},onchangeTime:function(t){var e=this;console.log(t),this.$nextTick((function(){e.$set(e.formValidate,"time",t),console.log(e.formValidate.time)}))},getInfo:function(){var t=this;this.spinShow=!0,Object(_api_discounts__WEBPACK_IMPORTED_MODULE_4__["b"])(this.id).then((function(e){t.spinShow=!1,t.formValidate=e.data,t.formValidate.link_ids=e.data.link_ids||[],t.formValidate.time=e.data.time||[];for(var a=0;a<e.data.products.length;a++){var r=e.data.products[a];1==r.type?t.specsMainData.push(r):t.specsData.push(r)}}))},next:function(t){var e,a=this;if(1===this.formValidate.type&&!this.specsMainData.length)return this.$Message.warning("请选择主商品");if(0===this.formValidate.type&&!this.specsData.length)return this.$Message.warning("请选择套餐商品");if(this.specsMainData.forEach((function(t){t.type=1})),this.specsData.forEach((function(t){t.type=0})),1==this.formValidate.type?(console.log(this.specsMainData),e=this.specsMainData.concat(this.specsData)):e=this.specsData,e.length<2)return this.$Message.warning("套餐内商品不能少于2个");for(var r=0;r<e.length;r++){var i=e[r];if(!i.items)return console.log(i),this.$Message.warning("请选择 ".concat(i.store_name," 的规格"))}if(this.formValidate.products=e,this.submitOpen)return!1;this.$refs[t].validate((function(t){if(!t)return!1;a.submitOpen=!0,a.id&&!a.copy?Object(_api_discounts__WEBPACK_IMPORTED_MODULE_4__["d"])(a.formValidate).then(function(){var t=_asyncToGenerator(_Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function t(e){return _Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.$Message.success(e.msg),setTimeout((function(){a.submitOpen=!1,a.$router.push({path:"/admin/marketing/store_discounts/index"})}),500);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){a.submitOpen=!1,a.$Message.error(t.msg)})):Object(_api_discounts__WEBPACK_IMPORTED_MODULE_4__["d"])(a.formValidate).then(function(){var t=_asyncToGenerator(_Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function t(e){return _Users_wshbin_Sites_h5_admin_lbh_nrlse_cn_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e),a.$Message.success(e.msg),setTimeout((function(){a.submitOpen=!1,a.$router.push({path:"/admin/marketing/store_discounts/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){a.submitOpen=!1,a.$Message.error(t.msg)}))}))},concat_arr:function(t,e){for(var a=[],r=0;r<t.length;r++){for(var i=t[r],n=i.product_id,s=!1,o=0;o<e.length;o++){var l=e[o],c=l.product_id;if(c==n){s=!0;break}}s&&a.push(i)}return a},modalPicTap:function(t,e,a){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e||"",this.tableIndex=a},getPic:function(t){switch(this.picTit){case"danFrom":this.formValidate.image=t.att_dir;break;default:this.specsData[this.tableIndex].image=t.att_dir}this.modalPic=!1},handleRemove:function(){this.formValidate.image=""},validate:function(t,e,a){return!1!==e||(this.$Message.error(a),!1)},cancel:function(){this.modals=!1},addGoods:function(t){this.goodsAddType=t,this.modals=!0},editGoods:function(t,e,a){this.goodsAddType=a,this.tabIndex=e,this.generate(t.product_id,0)},deleteGoods:function(t,e){"Main"===e?this.specsMainData.splice(t,1):this.specsData.splice(t,1)},sumArr:function sumArr(arr,name){for(var arrData=[],i=0;i<arr.length;i++)arrData.push(arr[i][name]);return eval(arrData.join("+"))},addGoodsData:function(t){console.log(t),console.log(this.editIndex,t),console.log(this.specsData),null!=this.editIndex?this.specsData.concat(t):this.specsData.length<8?this.specsData.push(t):this.$Message.warning("最多添加8个奖品"),this.addGoodsModel=!1,this.editIndex=null,console.log(this.prize,t)},onDragDrop:function(t,e){var a;console.log(t,e),(a=this.specsData).splice.apply(a,[e,1].concat(_toConsumableArray(this.specsData.splice(t,1,this.specsData[e]))))},formatDate:function(t){if(t){var e=new Date(1e3*t);return Object(_utils_validate__WEBPACK_IMPORTED_MODULE_8__["a"])(e,"yyyy-MM-dd hh:mm")}return""}}}},a24d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/admin/marketing/store_discounts/index"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"mr20",domProps:{textContent:t._s(t.$route.query.id?"编辑套餐信息":"添加套餐信息")}})],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[a("Col",{attrs:{span:"23"}},[a("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{rules:t.ruleValidate,model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},on:{"on-validate":t.validate},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐名称：",prop:"title","label-for":"title"}},[a("Input",{staticClass:"perW30",attrs:{placeholder:"请输入套餐名称","element-id":"title",maxlength:20},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐时间：",prop:1==t.formValidate.is_time?"time":""}},[a("RadioGroup",{attrs:{"element-id":"is_time"},model:{value:t.formValidate.is_time,callback:function(e){t.$set(t.formValidate,"is_time",e)},expression:"formValidate.is_time"}},[a("Radio",{attrs:{label:0}},[t._v("不限时")]),a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("限时")])],1),1==t.formValidate.is_time?a("div",{staticClass:"acea-row row-middle"},[a("DatePicker",{staticClass:"perW30",attrs:{editable:!1,type:"daterange",format:"yyyy-MM-dd",placeholder:"请选择套餐时间"},on:{"on-change":t.onchangeTime},model:{value:t.formValidate.time,callback:function(e){t.$set(t.formValidate,"time",e)},expression:"formValidate.time"}})],1):t._e()],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐类型：",prop:"type","label-for":"type"}},[a("RadioGroup",{attrs:{"element-id":"type"},model:{value:t.formValidate.type,callback:function(e){t.$set(t.formValidate,"type",e)},expression:"formValidate.type"}},[a("Radio",{staticClass:"radio",attrs:{label:0}},[t._v("固定套餐")]),a("Radio",{attrs:{label:1}},[t._v("搭配套餐")])],1),a("div",{staticClass:"ml100 grey"},[t._v("\n                  "+t._s(0==t.formValidate.type?"套餐内所有商品打包销售，消费者需成套购买整个套餐":"套餐内主商品必选，搭配商品任意选择1件及以上即可购买套餐")+"\n                ")])],1)],1),1==t.formValidate.type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐主商品：",prop:"products","label-for":"products"}},[a("Table",{attrs:{data:t.specsMainData,columns:t.columns,border:""},on:{"on-drag-drop":t.onDragDrop},scopedSlots:t._u([{key:"store_name",fn:function(e){var r=e.row;e.index;return[a("div",{staticClass:"product-data"},[a("img",{staticClass:"image",attrs:{src:r.image}}),a("div",[t._v(t._s(r.store_name))])])]}},{key:"attr",fn:function(e){var r=e.row;e.index;return t._l(r.attr,(function(e,r){return a("div",{key:r},[t._v("\n                      "+t._s(e.value)+" | "+t._s(e.price)+"\n                    ")])}))}},{key:"setting",fn:function(e){var r=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.editGoods(r,i,"Main")}}},[t._v("设置规格")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.deleteGoods(i,"Main")}}},[t._v("删除")])]}}],null,!1,3091246719)}),t.specsMainData.length<1?a("Button",{staticClass:"submission mr15 mt20",attrs:{type:"primary"},on:{click:function(e){return t.addGoods("Main")}}},[t._v("添加商品")]):t._e()],1)],1):t._e(),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:1==t.formValidate.type?"套餐搭配商品：":"套餐商品",prop:"products","label-for":"products"}},[a("Table",{attrs:{data:t.specsData,columns:t.columns,border:""},on:{"on-drag-drop":t.onDragDrop},scopedSlots:t._u([{key:"store_name",fn:function(e){var r=e.row;e.index;return[a("div",{staticClass:"product-data"},[a("img",{staticClass:"image",attrs:{src:r.image}}),a("div",[t._v(t._s(r.store_name))])])]}},{key:"attr",fn:function(e){var r=e.row;e.index;return t._l(r.attr,(function(e,r){return a("div",{key:r},[t._v("\n                      "+t._s(e.value)+" | "+t._s(e.price)+"\n                    ")])}))}},{key:"setting",fn:function(e){var r=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.editGoods(r,i,"Other")}}},[t._v("设置规格")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.deleteGoods(i,"Other")}}},[t._v("删除")])]}}])}),t.specsData.length<50?a("Button",{staticClass:"submission mr15 mt20",attrs:{type:"primary"},on:{click:function(e){return t.addGoods("Other")}}},[t._v("添加商品")]):t._e()],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{prop:"image"}},[a("div",{staticClass:"custom-label",attrs:{slot:"label"},slot:"label"},[a("div",[a("div",[t._v("套餐主图")]),a("div",[t._v("(750*750)")])]),a("div",[t._v("：")])]),a("div",{staticClass:"acea-row"},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]}),a("Button",{staticClass:"btndel",attrs:{shape:"circle",icon:"md-close"},nativeOn:{click:function(e){return t.handleRemove()}}})],1):a("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danFrom")}}},[a("Icon",{staticClass:"iconfonts",attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐数量：",prop:1==t.formValidate.is_limit?"limit_num":"","label-for":"limit_num"}},[a("RadioGroup",{attrs:{"element-id":"is_limit"},model:{value:t.formValidate.is_limit,callback:function(e){t.$set(t.formValidate,"is_limit",e)},expression:"formValidate.is_limit"}},[a("Radio",{attrs:{label:0}},[t._v("不限量")]),a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("限量")])],1),1==t.formValidate.is_limit?a("InputNumber",{staticClass:"perW30",attrs:{placeholder:"请输入限量数量","element-id":"limit_num",min:0,max:99999,precision:0},model:{value:t.formValidate.limit_num,callback:function(e){t.$set(t.formValidate,"limit_num",e)},expression:"formValidate.limit_num"}}):t._e()],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"关联用户标签：",prop:"link_ids"}},[a("div",{staticClass:"acea-row row-middle"},[a("Select",{staticClass:"perW30",attrs:{multiple:"",placeholder:"关联用户标签"},model:{value:t.formValidate.link_ids,callback:function(e){t.$set(t.formValidate,"link_ids",e)},expression:"formValidate.link_ids"}},t._l(t.userLabelList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.label_name))])})),1)],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序：","label-for":"sort"}},[a("InputNumber",{staticClass:"perW30",attrs:{placeholder:"请输入排序序号","element-id":"sort",min:0,max:999999,precision:0},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐包邮：",prop:"free_shipping","label-for":"status"}},[a("i-switch",{attrs:{size:"large","element-id":"free_shipping","false-value":0,"true-value":1},model:{value:t.formValidate.free_shipping,callback:function(e){t.$set(t.formValidate,"free_shipping",e)},expression:"formValidate.free_shipping"}},[a("span",{attrs:{slot:"close","false-value":"0"},slot:"close"},[t._v("否")]),a("span",{attrs:{slot:"open","true-value":"1"},slot:"open"},[t._v("是")])]),a("div",{staticClass:"ml100 grey"},[t._v("\n                  不包邮时，将按照商品的运费模板进行计算\n                ")])],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"套餐状态：",prop:"status","label-for":"status"}},[a("i-switch",{attrs:{size:"large","element-id":"status","false-value":0,"true-value":1},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")]),a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")])])],1)],1)],1),a("FormItem",[a("Button",{staticClass:"submission",attrs:{type:"primary",loading:t.submitOpen},on:{click:function(e){return t.next("formValidate")}}},[t.submitOpen?a("div",[t._v("提交中")]):a("div",[t._v("提交")])])],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)],1),a("Modal",{attrs:{width:"60%",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice},on:{getPic:t.getPic}}):t._e()],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.modals?a("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0},on:{getProductId:t.getProductId}}):t._e()],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"规格设置",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.ggModel,callback:function(e){t.ggModel=e},expression:"ggModel"}},[a("div",{staticClass:"df"},[a("span",[t._v(" 批量设置：")]),a("InputNumber",{staticClass:"m10",attrs:{min:0},model:{value:t.rate_price,callback:function(e){t.rate_price=e},expression:"rate_price"}}),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.changeRatePrice()}}},[a("div",[t._v("批量添加")])])],1),t.ggModel?a("Table",{attrs:{data:t.manyFormValidate,columns:t.header,border:"",height:"500"},on:{"on-selection-change":t.selectOne},scopedSlots:t._u([{key:"image",fn:function(t){var e=t.row;t.index;return[a("div",{staticClass:"product-data"},[a("img",{staticClass:"image",attrs:{src:e.pic}})])]}}],null,!1,1116546709)}):t._e(),a("Button",{staticClass:"mt10",attrs:{type:"primary",long:""},on:{click:function(e){return t.getAttr()}}},[a("div",[t._v("提交")])])],1)],1)},i=[],n=a("862a"),s=n["a"],o=(a("0c2d"),a("2877")),l=Object(o["a"])(s,r,i,!1,null,"11ac6b14",null);e["default"]=l.exports},c52d:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r={title:[{required:!0,message:"请输入套餐名称",trigger:"blur"}],type:[{required:!0,type:"number",message:"请选择套餐类型",trigger:"change"}],time:[{required:!0,validator:i,trigger:"change"}],limit_num:[{required:!0,type:"number",message:"请输入套餐数量",trigger:"blur"}],image:[{required:!0,message:"请上传套餐主图",trigger:"change"}]};function i(t,e,a){if(console.log(e),Array.isArray(e))e.map((function(t){if(""===t)return a("日期不能为空")}));else if(""===e)return a("日期不能为空");return a()}},dd8c:function(t,e,a){}}]);