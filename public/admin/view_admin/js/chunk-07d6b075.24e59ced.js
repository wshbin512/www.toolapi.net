(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07d6b075"],{"3bf6":function(t,e,a){},"505f":function(t,e,a){"use strict";var s=a("3bf6"),r=a.n(s);r.a},a584:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(e,s){return a("Col",{key:s,staticClass:"ivu-mb",attrs:{xl:e.col,lg:6,md:12,sm:24,xs:24}},[a("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[a("div",{staticClass:"card_box"},[a("div",{staticClass:"card_box_cir",class:{one:s%5==0,two:s%5==1,three:s%5==2,four:s%5==3,five:s%5==4}},[a("div",{staticClass:"card_box_cir1",class:{one1:s%5==0,two1:s%5==1,three1:s%5==2,four1:s%5==3,five1:s%5==4}},[a("Icon",{attrs:{type:e.className}})],1)]),a("div",{staticClass:"card_box_txt"},[a("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),a("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)},r=[],i={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}},n=i,o=(a("fda6"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"55fe0a19",null);e["a"]=l.exports},caa0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{title:"交易数据-商品统计","hidden-breadcrumb":""}})],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("search-from",{attrs:{typeName:t.typeName},on:{getTypeNum:t.getTypeNum,getSeachTime:t.getSeachTime}})],1),t.cardLists.length>=0?a("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),a("Card",{staticClass:"dashboard-console-visit",attrs:{bordered:!1,"dis-hover":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{span:"8"}},[a("Avatar",{directives:[{name:"color",rawName:"v-color",value:"#1890ff",expression:"'#1890ff'"},{name:"bg-color",rawName:"v-bg-color",value:"#e6f7ff",expression:"'#e6f7ff'"}],attrs:{icon:"ios-podium",size:"small"}}),a("span",{staticClass:"ivu-pl-8"},[t._v("图表展示")])],1),a("Col",{staticClass:"ivu-text-right",attrs:{span:"16"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,type:"daterange",placement:"bottom-end",placeholder:"Select date"},model:{value:t.visitDate,callback:function(e){t.visitDate=e},expression:"visitDate"}})],1)],1)],1),a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[a("h4",[t._v("访问量趋势")]),a("div",{directives:[{name:"height",rawName:"v-height",value:240,expression:"240"}],ref:"visitChart"})])],1)],1),a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{span:"12"}},[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"ivu-pl-8"},[t._v("最近交易数据")])]),a("Table",{attrs:{height:"200",columns:t.columns1,data:t.data2,"highlight-row":""}})],1)],1),a("Col",{attrs:{span:"12"}},[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"ivu-pl-8"},[t._v("交易类型")])]),a("Table",{attrs:{height:"200",columns:t.columns1,data:t.data2,"highlight-row":""}})],1)],1)],1)],1)},r=[],i=a("a34a"),n=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table_box"},[a("Form",{ref:"DataList",staticClass:"tabform",attrs:{model:t.DataList,rules:t.rules,"label-width":t.labelWidth,"label-position":t.labelPosition}},[a("Row",{attrs:{gutter:24,type:"flex",justify:"end"}},[a("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[a("FormItem",{attrs:{label:"订单状态："}},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.DataList.status)}},model:{value:t.DataList.status,callback:function(e){t.$set(t.DataList,"status",e)},expression:"DataList.status"}},t._l(t.typeName,(function(e,s){return a("Radio",{key:s,attrs:{label:e.label}},[t._v(t._s(e.name+"("+e.num+")"))])})),1)],1)],1),a("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"创建时间："}},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(e){return t.timeChange(t.DataList.data)}},model:{value:t.DataList.data,callback:function(e){t.$set(t.DataList,"data",e)},expression:"DataList.data"}},[a("Radio",{attrs:{label:"today"}},[t._v("今天")]),a("Radio",{attrs:{label:"yesterday"}},[t._v("昨天")]),a("Radio",{attrs:{label:"lately7"}},[t._v("最近7天")]),a("Radio",{attrs:{label:"lately30"}},[t._v("最近30天")])],1)],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{staticClass:"tab_data"},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.value2,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"Select date"}})],1)],1)],1),"/admin/echarts/trade/order"===t.$route.path?a("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[a("FormItem",{attrs:{label:"订单类型："}},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(e){return t.onClickTab(t.currentTab)}},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[a("Radio",{attrs:{label:""}},[t._v("全部")]),a("Radio",{attrs:{label:"1"}},[t._v("普通")]),a("Radio",{attrs:{label:"2"}},[t._v("拼团")]),a("Radio",{attrs:{label:"3"}},[t._v("砍价")]),a("Radio",{attrs:{label:"4"}},[t._v("秒杀")])],1)],1)],1):t._e()],1)],1)],1)},l=[],c=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b={name:"searchFrom",props:{typeName:Array},data:function(){return{currentTab:"",grid:{xl:8,lg:8,md:8,sm:24,xs:24},DataList:{status:"",data:"",real_name:""},rules:{},statusType:"",time:"",value2:[]}},computed:d({},Object(c["e"])("admin/layout",["isMobile"]),{},Object(c["e"])("admin/order",["orderChartType"]),{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{selectChange:function(t){this.$emit("getTypeNum",t)},timeChange:function(t){this.$emit("getSeachTime",t)},orderSearch:function(t){this.getOrderNum(t),this.$emit("getList")},onClickTab:function(){this.$emit("onChangeType",this.currentTab)},handleSubmit:function(){this.$emit("on-submit",this.data)},Refresh:function(){this.$emit("getList")},handleReset:function(){this.$refs.form.resetFields(),this.$emit("on-reset")}}},h=b,p=(a("505f"),a("2877")),f=Object(p["a"])(h,o,l,!1,null,"402eb444",null),v=f.exports,y=a("a584"),g=a("f8b7"),C=a("313e"),w=a.n(C);function x(t,e,a,s,r,i,n){try{var o=t[i](n),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(s,r)}function D(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var i=t.apply(e,a);function n(t){x(i,s,r,n,o,"next",t)}function o(t){x(i,s,r,n,o,"throw",t)}n(void 0)}))}}function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(a,!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function L(t){var e=new Date(t),a=e.getHours()<10?"0"+e.getHours():e.getHours(),s=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();return"".concat(a,":").concat(s)}var P={name:"order",data:function(){return{typeStatus:0,typeName:[],visitDate:"",xData:[],y1Data:[],y2Data:[],tablists:null,cardLists:[{className:"layui-bg-blue",col:4,count:3,field:"件",name:"订单数量"},{className:"layui-bg-blue",col:4,count:3,field:"件",name:"订单数量"}],columns1:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],data2:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}},components:{searchFrom:v,cardsData:y["a"]},computed:O({},Object(c["e"])("admin/order",["orderStatus","orderTime"])),mounted:function(){this.getTabs(),this.handleGetData(),this.handleSetVisitChart()},methods:{getTabs:function(){var t=this;Object(g["k"])({}).then(function(){var e=D(n.a.mark((function e(a){return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:200===a.status?(t.tablists=a.data,t.typeName=[{name:"全部",num:t.tablists.all,label:""},{name:"未支付",num:t.tablists.unpaid,label:0},{name:"未发货",num:t.tablists.unshipped,label:1},{name:"待收货",num:t.tablists.untake,label:2},{name:"待评价",num:t.tablists.unevaluate,label:3},{name:"交易完成",num:t.tablists.complete,label:4},{name:"退款中",num:t.tablists.refunding,label:-1},{name:"已退款",num:t.tablists.refund,label:-2}]):t.$Message.error(a.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onChangeType:function(t){console.log(t)},getSeachTime:function(t){console.log(t)},getTypeNum:function(t){this.typeStatus=t,console.log(this.typeStatus)},getData:function(){console.log(this.orderTime),console.log(this.orderStatus)},handleGetData:function(){var t=(new Date).getTime();this.xData=[L(t),L(t-3e5),L(t-6e5),L(t-9e5),L(t-12e5),L(t-15e5),L(t-18e5),L(t-21e5),L(t-24e5),L(t-27e5),L(t-3e6)].reverse(),this.y1Data=[45,169,400,285,316,148,150,234,158,100,266],this.y2Data=[15,39,152,94,102,86,39,38,95,30,86]},handleSetVisitChart:function(){this.visitChart=w.a.init(this.$refs.visitChart),this.visitChart.setOption({xAxis:{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},data:this.xData,boundaryGap:!1},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},legend:{data:["浏览量（PV）","访客数（UV）"],x:"right"},series:[{data:this.y1Data,name:"浏览量（PV）",type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}},{data:this.y2Data,name:"访客数（UV）",type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:20,right:20,bottom:20,top:40,containLabel:!0},tooltip:{trigger:"axis"}})},handleResize:function(){this.visitChart.resize()}},beforeDestroy:function(){this.visitChart&&(this.visitChart.dispose(),this.visitChart=null)}},S=P,j=Object(p["a"])(S,s,r,!1,null,"5baea402",null);e["default"]=j.exports},d8a6:function(t,e,a){},fda6:function(t,e,a){"use strict";var s=a("d8a6"),r=a.n(s);r.a}}]);