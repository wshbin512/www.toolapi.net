(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb7aa7d"],{"1ffb":function(t,e,a){"use strict";var i=a("bc35"),n=a.n(i);n.a},"5a78":function(t,e,a){"use strict";var i=a("ffea"),n=a.n(i);n.a},6112:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/admin/setting/pages/devise"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"mr20",domProps:{textContent:t._s("页面设计")}})],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"flex-wrapper"},[a("iframe",{ref:"iframe",staticClass:"iframe-box",attrs:{src:t.iframeUrl,frameborder:"0"}}),a("div",[a("div",{staticClass:"content"},[a("rightConfig",{attrs:{name:t.configName,pageId:t.pageId}})],1)]),a("links")],1)])],1)},n=[],s=a("f478"),r=(a("2f62"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rCom.length?a("div",{staticClass:"right-box"},[a("div",{staticClass:"title-bar"},[t._v("模块配置")]),t.rCom.length?a("div",{staticClass:"mobile-config"},[t._l(t.rCom,(function(e,i){return a("div",{key:i},[a(e.components.name,{tag:"component",attrs:{name:e.configNme,configData:t.configData}})],1)})),t.rCom.length?a("div",{staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{width:"100%",margin:"0 auto",height:"40px"},attrs:{type:"primary"},on:{click:t.saveConfig}},[t._v("保存")])],1):t._e()],2):t._e()]):t._e()}),o=[],c=a("2542");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={name:"rightConfig",components:f({},c["a"]),props:{name:{type:null,default:""},pageId:{type:Number,default:0}},computed:{defultArr:function(){this.$store.dispatch("admin/user/getPageName");var t=this.$store.state.admin.user.pageName;return this.$store.state.admin[t].component}},watch:{name:{handler:function(t,e){this.rCom=[];var a=this.$store.state.admin.user.pageName;if(this.configData=this.$store.state.admin[a].defaultConfig[t],this.rCom=this.$store.state.admin[a].component[t].list,console.log("ggggggeee",this.$store.state.admin[a].component[t]),this.configData.selectConfig){var i=this.configData.selectConfig.type?this.configData.selectConfig.type:"";this.configData.selectConfig.list=this.categoryList,i?this.getByCategory():this.getCategory()}},deep:!0},defultArr:{handler:function(t,e){this.rCom=[];this.objToArray(t);this.rCom=t[this.name].list},deep:!0}},data:function(){return{rCom:[],configData:{},isShow:!0,categoryList:[],status:0}},mounted:function(){this.storeStatus()},methods:{storeStatus:function(){var t=this;Object(s["l"])().then((function(e){t.status=parseInt(e.data.store_status)}))},getCategory:function(){var t=this;Object(s["g"])().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.title,pid:t.pid,activeValue:t.id.toString()})})),t.categoryList=a,t.bus.$emit("upData",a)}))},getByCategory:function(){var t=this;Object(s["f"])().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.cate_name,pid:t.pid,activeValue:t.id.toString()})})),t.categoryList=a,t.bus.$emit("upData",a)}))},saveConfig:function(){var t=this,e=this.$store.state.admin.user.pageName,a=this.$store.state.admin[e].defaultConfig,i=this.$store.state.admin[e].periphery;if("z_tabBar"==this.name){if(!i||!this.status)for(var n=a.z_tabBar.tabBarList.list,r=0;r<n.length;r++)if("/pages/storeList/index"==n[r].link||"pages/storeList/index"==n[r].link)return this.$Message.error("请先开启您的周边功能(/pages/storeList/index)");if(a.z_tabBar.tabBarList.list.length<2)return this.$Message.error("您最少应添加2个导航")}Object(s["e"])(this.pageId,{value:a}).then((function(e){t.$Message.success("保存成功")}))},objToArray:function(t){var e=[];for(var a in t)e.push(t[a]);return e}}},l=g,h=(a("5a78"),a("2877")),m=Object(h["a"])(l,r,o,!1,null,"2636c3b1",null),p=m.exports,b=a("2250"),v={name:"index",components:{rightConfig:p,links:b["default"]},data:function(){return{configName:"",iframeUrl:"",setConfig:"",updataConfig:"",pageId:0}},created:function(){var t=this,e=this.$route.query.id,a=this.$route.query.name;this.setConfig="admin/"+a+"/setConfig",this.updataConfig="admin/"+a+"/updataConfig",this.pageId=parseInt(e),this.iframeUrl="".concat(location.origin,"?type=iframeMakkMinkkJuan"),Object(s["c"])(parseInt(e)).then((function(e){var a=e.data.info.value;t.upData(a)}))},mounted:function(){window.addEventListener("message",this.handleMessage,!1)},methods:{handleMessage:function(t){t.data.name&&(this.configName=t.data.name,this.add(t.data.name))},add:function(t){this.$store.commit(this.setConfig,t)},upData:function(t){this.$store.commit(this.updataConfig,t)}}},C=v,y=(a("1ffb"),Object(h["a"])(C,i,n,!1,null,"648d9125",null));e["default"]=y.exports},bc35:function(t,e,a){},ffea:function(t,e,a){}}]);