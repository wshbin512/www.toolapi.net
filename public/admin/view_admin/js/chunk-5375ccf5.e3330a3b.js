(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5375ccf5"],{"06bb":function(t,e,n){},5334:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{attrs:{title:"运费模版",width:"70%",if:"isTemplate"},on:{"on-cancel":t.cancel},model:{value:t.isTemplate,callback:function(e){t.isTemplate=e},expression:"isTemplate"}},[n("div",{staticClass:"Modals"},[n("Form",{ref:"formData",staticClass:"form",attrs:{"label-width":t.labelWidth,"label-position":t.labelPosition}},[n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[n("FormItem",{attrs:{label:"模板名称：",prop:"name"}},[n("Input",{attrs:{type:"text",placeholder:"请输入模板名称",maxlength:20},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1)],1),n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[n("FormItem",{attrs:{label:"计费方式：",props:"state","label-for":"state"}},[n("RadioGroup",{staticClass:"radio",attrs:{"element-id":"state"},on:{"on-change":t.changeRadio},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[n("Radio",{attrs:{label:1}},[t._v("按件数")]),n("Radio",{attrs:{label:2}},[t._v("按重量")]),n("Radio",{attrs:{label:3}},[t._v("按体积")])],1)],1)],1)],1),n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[n("FormItem",{staticClass:"label",attrs:{label:"配送区域及运费：",props:"state","label-for":"state"}},[n("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.templateList,"no-data-text":"暂无数据",border:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.row,i=e.index;return["默认全国"!==r.regionName?n("a",{on:{click:function(e){return t.delCity(r,"配送区域",i,1)}}},[t._v("删除")]):t._e()]}}])}),n("Row",{staticClass:"addTop",attrs:{type:"flex"}},[n("Col",[n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.addCity(1)}}},[t._v("单独添加配送区域")])],1)],1)],1)],1)],1),n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[n("FormItem",{attrs:{label:"指定包邮：",prop:"store_name","label-for":"store_name"}},[n("Radio-group",{staticClass:"radio",model:{value:t.formData.appoint_check,callback:function(e){t.$set(t.formData,"appoint_check",e)},expression:"formData.appoint_check"}},[n("Radio",{attrs:{label:1}},[t._v("开启")]),n("Radio",{attrs:{label:0}},[t._v("关闭")])],1),1===t.formData.appoint_check?n("Table",{ref:"table",staticClass:"addTop ivu-mt",attrs:{columns:t.columns2,data:t.appointList,"no-data-text":"暂无数据",border:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.row,i=e.index;return["默认全国"!==r.regionName?n("a",{on:{click:function(e){return t.delCity(r,"配送区域",i,2)}}},[t._v("删除")]):t._e()]}}],null,!1,2581293667)}):t._e(),1===t.formData.appoint_check?n("Row",{staticClass:"addTop",attrs:{type:"flex"}},[n("Col",[n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.addCity(2)}}},[t._v("单独指定包邮")])],1)],1):t._e()],1)],1)],1),n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[n("FormItem",{attrs:{label:"排序：",prop:"store_name","label-for":"store_name"}},[n("InputNumber",{attrs:{min:0,placeholder:"输入值越大越靠前"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1)],1)],1),n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",[n("FormItem",{attrs:{prop:"store_name","label-for":"store_name"}},[n("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(t.id?"立即修改":"立即提交"))])],1)],1)],1)],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"})]),n("city",{ref:"city",attrs:{type:t.type,selectArr:t.selectArr},on:{selectCity:t.selectCity}})],1)},i=[],c=n("7736"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{staticClass:"modal",attrs:{title:"选择可配送区域",width:"50%",mask:!0},model:{value:t.addressModal,callback:function(e){t.addressModal=e},expression:"addressModal"}},[n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{staticClass:"item",attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[n("div",{staticClass:"acea-row row-right row-middle"},[n("Checkbox",{on:{"on-change":t.allCheckbox},model:{value:t.iSselect,callback:function(e){t.iSselect=e},expression:"iSselect"}},[t._v("全选")]),n("div",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])],1)])],1),n("Row",{attrs:{gutter:24,type:"flex",loading:t.loading}},t._l(t.cityList,(function(e,r){return e.isShow?n("Col",{key:r,staticClass:"item",attrs:{xl:6,lg:6,md:6,sm:8,xs:6}},[n("div",{on:{mouseenter:function(e){return t.enter(r)},mouseleave:function(e){return t.leave()}}},[n("Checkbox",{attrs:{label:e.name},on:{"on-change":function(e){return t.checkedClick(r)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"item.checked"}},[t._v(t._s(e.name))]),n("span",{staticClass:"red"},[t._v("("+t._s((e.count||0)+"/"+e.childNum)+")")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeCity===r,expression:"activeCity===index"}],staticClass:"city"},[n("div",{staticClass:"checkBox"},[n("div",{staticClass:"arrow"}),n("div",t._l(e.children,(function(e,i){return n("Checkbox",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"city.isShow"}],key:i,staticClass:"itemn",attrs:{label:e.name},on:{"on-change":function(e){return t.primary(r,i)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"city.checked"}},[t._v(t._s(e.name))])})),1)])])],1)]):t._e()})),1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:t.close}},[t._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1),t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},a=[],s=n("90e7");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={name:"city",props:{type:{type:Number,default:0},selectArr:{type:Array,default:[]}},data:function(){return{iSselect:!1,addressModal:!1,cityList:[],activeCity:-1,loading:!1}},computed:l(l({},Object(c["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{enter:function(t){this.activeCity=t},leave:function(){this.activeCity=null},getCityList:function(){var t=this;this.loading=!0,Object(s["qb"])().then((function(e){t.loading=!1,console.log(t.selectArr),e.data.forEach((function(e,n,r){e.isShow=!0,e.children.forEach((function(e,n){e.isShow=!0,t.selectArr.length>0&&t.selectArr.forEach((function(t,n){t.children.forEach((function(t,n){e.city_id==t.city_id&&(e.isShow=!1)}))}))}))})),e.data.forEach((function(t,e,n){var r=0,i=0;t.children.forEach((function(t,e){t.isShow?i++:r++})),r==t.children.length&&(t.isShow=!1),t.childNum=i})),t.cityList=e.data}))},allCheckbox:function(){var t=this,e=this.iSselect;t.cityList.forEach((function(n,r){t.$set(t.cityList[r],"checked",e),e?t.$set(t.cityList[r],"count",t.cityList[r].children.length):t.$set(t.cityList[r],"count",0),t.cityList[r].children.forEach((function(n,i){t.$set(t.cityList[r].children[i],"checked",e)}))}))},empty:function(){var t=this;t.cityList.forEach((function(e,n){t.$set(t.cityList[n],"checked",!1),t.cityList[n].children.forEach((function(e,r){t.$set(t.cityList[n].children[r],"checked",!1)})),t.$set(t.cityList[n],"count",0)})),this.iSselect=!1},checkedClick:function(t){var e=this;e.cityList[t].checked?(e.$set(e.cityList[t],"count",e.cityList[t].childNum),e.cityList[t].children.forEach((function(n,r){e.$set(e.cityList[t].children[r],"checked",!0)}))):(e.$set(e.cityList[t],"count",0),e.$set(e.cityList[t],"checked",!1),e.cityList[t].children.forEach((function(n,r){e.$set(e.cityList[t].children[r],"checked",!1)})),e.iSselect=!1)},primary:function(t,e){var n=!1,r=0;this.cityList[t].children.forEach((function(t,e){t.checked&&(n=!0,r++)})),this.$set(this.cityList[t],"count",r),this.$set(this.cityList[t],"checked",n)},confirm:function(){var t=this,e=[];if(t.cityList.forEach((function(n,r){var i={};n.checked&&(i={name:n.name,city_id:n.city_id,children:[]}),t.cityList[r].children.forEach((function(t,e){t.checked&&i.children.push({city_id:t.city_id})})),void 0!==i.city_id&&e.push(i)})),console.log(e),0===e.length)return t.$Message.error("至少选择一个省份或者城市");this.$emit("selectCity",e,this.type),t.addressModal=!1,this.cityList=[]},close:function(){this.addressModal=!1,this.cityList=[]}},mounted:function(){}},f=p,m=(n("b951"),n("5d22")),h=Object(m["a"])(f,o,a,!1,null,"667ba7ac",null),b=h.exports;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O={name:"freightTemplate",components:{city:b},props:{},data:function(){var t=this;return{isTemplate:!1,columns:[{title:"可配送区域",key:"regionName",minWidth:100,render:function(e,n){return e("Input",{props:{type:"text",readonly:!0,size:"small",value:t.templateList[n.index].regionName}})}},{title:"首件",key:"first",minWidth:70,render:function(e,n){return e("Input",{props:{type:"number",size:"small",value:t.templateList[n.index].first},on:{"on-change":function(e){t.templateList[n.index].first=e.target.value}}})}},{title:"运费（元）",key:"price",minWidth:70,render:function(e,n){return e("Input",{props:{type:"number",size:"small",value:t.templateList[n.index].price},on:{"on-change":function(e){t.templateList[n.index].price=e.target.value}}})}},{title:"续件",key:"continue",minWidth:70,render:function(e,n){return e("Input",{props:{type:"number",size:"small",value:t.templateList[n.index].continue},on:{"on-change":function(e){t.templateList[n.index].continue=e.target.value}}})}},{title:"续费（元）",key:"continue_price",minWidth:70,render:function(e,n){return e("Input",{props:{type:"number",size:"small",value:t.templateList[n.index].continue_price},on:{"on-change":function(e){t.templateList[n.index].continue_price=e.target.value}}})}},{title:"操作",slot:"action",minWidth:70}],columns2:[{title:"选择地区",key:"placeName",minWidth:250,render:function(e,n){return e("Input",{props:{type:"text",readonly:!0,size:"small",value:t.appointList[n.index].placeName}})}},{title:"包邮件数",key:"a_num",minWidth:100,render:function(e,n){return e("Input",{props:{type:"number",size:"small",value:t.appointList[n.index].a_num},on:{"on-change":function(e){t.appointList[n.index].a_num=e.target.value}}})}},{title:"包邮金额（元）",key:"a_price",minWidth:100,render:function(e,n){return e("Input",{props:{type:"number",size:"small",value:t.appointList[n.index].a_price},on:{"on-change":function(e){t.appointList[n.index].a_price=e.target.value}}})}},{title:"操作",slot:"action",minWidth:100}],templateList:[{region:[{name:"默认全国",city_id:0}],regionName:"默认全国",first:1,price:0,continue:1,continue_price:0}],appointList:[],type:1,formData:{type:1,sort:0,name:"",appoint_check:0},id:0,addressModal:!1,indeterminate:!0,checkAll:!1,checkAllGroup:[],activeCity:-1,provinceAllGroup:[],index:-1,displayData:"",currentProvince:"",selectArr:[],noShippingArr:[],yesShippingArr:[]}},computed:y(y({},Object(c["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{editFrom:function(t){var e=this;this.id=t,Object(s["W"])(t).then((function(t){var n=t.data.formData;e.templateList=t.data.templateList,e.appointList=t.data.appointList,e.formData={type:n.type,sort:n.sort,name:n.name,appoint_check:n.appoint_check},e.headerType()}))},selectCity:function(t,e){var n=t.map((function(t){return t.name})).join(";");switch(e){case 1:this.templateList.push({region:t,regionName:n,first:1,price:0,continue:1,continue_price:0}),this.noShippingArr=this.noShippingArr.concat(t);break;case 2:this.appointList.push({place:t,placeName:n,a_num:0,a_price:0}),this.yesShippingArr=this.yesShippingArr.concat(t);break}},addCity:function(t){this.selectArr=1==t?this.noShippingArr:this.yesShippingArr,this.$refs.city.addressModal=!0,this.type=t,this.$refs.city.getCityList()},changeRadio:function(){this.headerType()},headerType:function(){var t=this;2===this.formData.type?(t.columns[1].title="首件重量(KG)",t.columns[3].title="续件重量(KG)",t.columns2[1].title="包邮重量(KG)"):3===this.formData.type?(t.columns[1].title="首件体积(m³)",t.columns[3].title="续件体积(m³)",t.columns2[1].title="包邮体积(m³)"):(t.columns[1].title="首件",t.columns[3].title="续件",t.columns2[1].title="包邮件数")},handleSubmit:function(){var t=this,e=this;if(!e.formData.name.trim().length)return e.$Message.error("请填写模板名称");for(var n=0;n<e.templateList.length;n++){if(e.templateList[n].first<=0)return e.$Message.error("首件/重量/体积应大于0");if(e.templateList[n].price<0)return e.$Message.error("运费应大于等于0");if(e.templateList[n].continue<=0)return e.$Message.error("续件/重量/体积应大于0");if(e.templateList[n].continue_price<0)return e.$Message.error("续费应大于等于0")}if(1===e.formData.appoint_check)for(var r=0;r<e.appointList.length;r++){if(e.appointList[r].a_num<=0)return e.$Message.error("包邮件数应大于0");if(e.appointList[r].a_price<0)return e.$Message.error("包邮金额应大于等于0")}var i={appoint_info:e.appointList,region_info:e.templateList,sort:e.formData.sort,type:e.formData.type,name:e.formData.name,appoint:e.formData.appoint_check};Object(s["rb"])(e.id,i).then((function(e){t.isTemplate=!1,t.$parent.getList(),t.formData={type:1,sort:0,name:"",appoint_check:0},t.appointList=[],t.addressModal=!1,t.templateList=[{region:[{name:"默认全国",city_id:0}],regionName:"默认全国",first:1,price:0,continue:1,continue_price:0}],t.$Message.success(e.msg)}))},delCity:function(t,e,n,r){var i=this,c={title:e,num:n,url:"setting/shipping_templates/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(c).then((function(t){i.$Message.success(t.msg),1===r?i.templateList.splice(n,1):i.appointList.splice(n,1)})).catch((function(t){i.$Message.error(t.msg)}))},cancel:function(){this.noShippingArr=[],this.yesShippingArr=[],this.selectArr=[],this.formData={type:1,sort:0,name:"",appoint_check:0},this.appointList=[],this.addressModal=!1,this.templateList=[{region:[{name:"默认全国",city_id:0}],regionName:"默认全国",first:0,price:0,continue:0,continue_price:0}]},address:function(){this.addressModal=!0},enter:function(t){this.activeCity=t},leave:function(){this.activeCity=null}},mounted:function(){console.log(123),console.log(this.templateList)}},_=O,j=(n("800c"),Object(m["a"])(_,r,i,!1,null,null,null));e["a"]=j.exports},"800c":function(t,e,n){"use strict";n("06bb")},8411:function(t,e,n){},"90e7":function(t,e,n){"use strict";n.d(e,"p",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"ob",(function(){return o})),n.d(e,"nb",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"O",(function(){return u})),n.d(e,"V",(function(){return l})),n.d(e,"R",(function(){return d})),n.d(e,"S",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"P",(function(){return m})),n.d(e,"sb",(function(){return h})),n.d(e,"T",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return y})),n.d(e,"a",(function(){return v})),n.d(e,"I",(function(){return O})),n.d(e,"X",(function(){return _})),n.d(e,"H",(function(){return j})),n.d(e,"Y",(function(){return k})),n.d(e,"fb",(function(){return x})),n.d(e,"C",(function(){return L})),n.d(e,"eb",(function(){return w})),n.d(e,"m",(function(){return C})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return $})),n.d(e,"n",(function(){return S})),n.d(e,"o",(function(){return E})),n.d(e,"L",(function(){return M})),n.d(e,"M",(function(){return T})),n.d(e,"J",(function(){return P})),n.d(e,"K",(function(){return A})),n.d(e,"E",(function(){return R})),n.d(e,"w",(function(){return N})),n.d(e,"A",(function(){return I})),n.d(e,"z",(function(){return G})),n.d(e,"r",(function(){return W})),n.d(e,"B",(function(){return z})),n.d(e,"t",(function(){return F})),n.d(e,"y",(function(){return B})),n.d(e,"s",(function(){return U})),n.d(e,"q",(function(){return K})),n.d(e,"D",(function(){return q})),n.d(e,"f",(function(){return J})),n.d(e,"c",(function(){return H})),n.d(e,"d",(function(){return Q})),n.d(e,"pb",(function(){return V})),n.d(e,"qb",(function(){return X})),n.d(e,"rb",(function(){return Y})),n.d(e,"W",(function(){return Z})),n.d(e,"gb",(function(){return tt})),n.d(e,"F",(function(){return et})),n.d(e,"ib",(function(){return nt})),n.d(e,"hb",(function(){return rt})),n.d(e,"jb",(function(){return it})),n.d(e,"kb",(function(){return ct})),n.d(e,"lb",(function(){return ot})),n.d(e,"mb",(function(){return at})),n.d(e,"tb",(function(){return st})),n.d(e,"ub",(function(){return ut})),n.d(e,"G",(function(){return lt})),n.d(e,"e",(function(){return dt})),n.d(e,"vb",(function(){return pt})),n.d(e,"Z",(function(){return ft})),n.d(e,"ab",(function(){return mt})),n.d(e,"x",(function(){return ht})),n.d(e,"u",(function(){return bt})),n.d(e,"U",(function(){return gt})),n.d(e,"bb",(function(){return yt})),n.d(e,"cb",(function(){return vt})),n.d(e,"db",(function(){return Ot})),n.d(e,"v",(function(){return _t})),n.d(e,"Q",(function(){return jt})),n.d(e,"N",(function(){return kt}));var r=n("b6bd");function i(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function c(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function a(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function s(t){return Object(r["a"])({url:"serve/login",method:"post",data:t})}function u(){return Object(r["a"])({url:"serve/info",method:"get"})}function l(t){return Object(r["a"])({url:"serve/sms/open",method:"get",params:t})}function d(t){return Object(r["a"])({url:"serve/opn_express",method:"post",data:t})}function p(t){return Object(r["a"])({url:"serve/open",method:"get",params:t})}function f(t){return Object(r["a"])({url:"serve/checkCode",method:"post",data:t})}function m(t){return Object(r["a"])({url:"serve/modify",method:"post",data:t})}function h(t){return Object(r["a"])({url:"serve/update_phone",method:"post",data:t})}function b(t){return Object(r["a"])({url:"serve/record",method:"get",params:t})}function g(t){return Object(r["a"])({url:"serve/export_temp",method:"get",params:t})}function y(){return Object(r["a"])({url:"serve/export_all",method:"get"})}function v(t){return Object(r["a"])({url:"serve/captcha",method:"post",data:t})}function O(t){return Object(r["a"])({url:"serve/register",method:"post",data:t})}function _(t){return Object(r["a"])({url:"serve/meal_list",method:"get",params:t})}function j(t){return Object(r["a"])({url:"serve/pay_meal",method:"post",data:t})}function k(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function x(){return Object(r["a"])({url:"merchant/store",method:"GET"})}function L(){return Object(r["a"])({url:"merchant/store/address",method:"GET"})}function w(t){return Object(r["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function C(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function D(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function $(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function S(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function E(){return Object(r["a"])({url:"freight/express/sync_express",method:"get"})}function M(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function T(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function P(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function A(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function R(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function N(t){return Object(r["a"])({url:"app/wechat/kefu",method:"get",params:t})}function I(t){return Object(r["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function G(){return Object(r["a"])({url:"app/wechat/kefu/add",method:"get"})}function W(t){return Object(r["a"])({url:"app/wechat/kefu",method:"post",data:t})}function z(t){return Object(r["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function F(t){return Object(r["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function B(t,e){return Object(r["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function U(t){return Object(r["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function K(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function q(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function J(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function H(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function Q(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function V(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function X(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function Y(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function Z(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function tt(){return Object(r["a"])({url:"merchant/store/get_header",method:"get"})}function et(t){return Object(r["a"])({url:"merchant/store",method:"get",params:t})}function nt(t,e){return Object(r["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function rt(t){return Object(r["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function it(t){return Object(r["a"])({url:"merchant/store_staff",method:"get",params:t})}function ct(){return Object(r["a"])({url:"merchant/store_staff/create",method:"get"})}function ot(t){return Object(r["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function at(t,e){return Object(r["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function st(t){return Object(r["a"])({url:"merchant/verify_order",method:"get",params:t})}function ut(t){return Object(r["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function lt(){return Object(r["a"])({url:"merchant/store_list",method:"get"})}function dt(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}function pt(t){return Object(r["a"])({url:"app/wechat/speechcraft",method:"get",params:t})}function ft(){return Object(r["a"])({url:"app/wechat/speechcraft/create",method:"get"})}function mt(t){return Object(r["a"])({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function ht(t){return Object(r["a"])({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function bt(t){return Object(r["a"])({url:"app/feedback",method:"get",params:t})}function gt(t){return Object(r["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function yt(){return Object(r["a"])({url:"app/wechat/speechcraftcate",method:"get"})}function vt(){return Object(r["a"])({url:"app/wechat/speechcraftcate/create",method:"get"})}function Ot(t){return Object(r["a"])({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function _t(t){return Object(r["a"])({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function jt(){return Object(r["a"])({url:"serve/open",method:"get"})}function kt(){return Object(r["a"])({url:"serve/dump_open",method:"get"})}},b951:function(t,e,n){"use strict";n("8411")}}]);