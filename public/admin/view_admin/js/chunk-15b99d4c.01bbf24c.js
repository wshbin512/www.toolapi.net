(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b99d4c"],{"0f7c":function(t,e,n){},2373:function(t,e,n){},3793:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("PageHeader",{staticClass:"product_tabs",attrs:{title:"文件管理","hidden-breadcrumb":""}})],1),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("div",{staticClass:"backs",on:{click:t.goBack}},[n("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}),n("span",[t._v("返回上级")])],1),n("Table",{ref:"selection",staticClass:"mt20",attrs:{columns:t.columns4,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},on:{"on-current-change":t.currentChange},scopedSlots:t._u([{key:"filename",fn:function(e){var r=e.row;return[r.isDir?n("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}):n("Icon",{staticClass:"mr5",attrs:{type:"ios-document-outline"}}),n("span",[t._v(t._s(r.filename))])]}},{key:"isWritable",fn:function(e){var r=e.row;return[n("span",{domProps:{textContent:t._s(r.isWritable?"是":"否")}})]}},{key:"action",fn:function(e){var r=e.row;e.index;return[r.isDir?n("a",{on:{click:function(e){return t.open(r)}}},[t._v("打开")]):n("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")])]}}])})],1),n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.title,"mask-closable":!1,width:"900"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[n("Button",{staticClass:"mr5 mb15",attrs:{type:"primary",id:"savefile"},on:{click:t.savefile}},[t._v("保存")]),n("Button",{staticClass:"mr5 mb15",attrs:{id:"undo"},on:{click:t.undofile}},[t._v("撤销")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],ref:"mycode",staticClass:"codesql public_text",domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},a=[],i=n("a34a"),o=n.n(i),u=n("8593"),c=n("56b3"),s=n.n(c);n("0f7c");function l(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){l(i,r,a,o,u,"next",t)}function u(t){l(i,r,a,o,u,"throw",t)}o(void 0)}))}}n("f9d4");var d={name:"opendir",data:function(){return{code:"",modals:!1,spinShow:!1,loading:!1,tabList:[],columns4:[{title:"文件/文件夹名",slot:"filename",minWidth:150,back:"返回上级"},{title:"文件/文件夹路径",key:"real_path",minWidth:150},{title:"文件/文件夹大小",key:"size",minWidth:100},{title:"是否可写",slot:"isWritable",minWidth:100},{title:"更新时间",key:"mtime",minWidth:150},{title:"Action",slot:"action",minWidth:150}],formItem:{dir:"",superior:0,filedir:""},rows:{},pathname:"",title:""}},mounted:function(){this.editor=s.a.fromTextArea(this.$refs.mycode,{value:"http://www.crmeb.com",mode:"text/javascript",theme:"ambiance",indentUnit:4,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0})},created:function(){this.getList()},methods:{currentChange:function(t){t.isDir?this.open(t):this.edit(t)},getList:function(){var t=this;this.loading=!0,Object(u["D"])(this.formItem).then(function(){var e=f(o.a.mark((function e(n){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tabList=r.list,t.dir=r.dir,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},goBack:function(){this.formItem={dir:this.dir,superior:1,filedir:""},this.getList()},open:function(t){this.rows=t,this.formItem={dir:t.path,superior:0,filedir:t.filename},this.getList()},edit:function(t){var e=this;this.modals=!0,this.spinShow=!0,this.pathname=t.pathname,this.title=t.filename,Object(u["E"])(t.pathname).then(function(){var t=f(o.a.mark((function t(n){var r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=n.data,e.code=r.content,e.editor.setValue(e.code),e.spinShow=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},savefile:function(){var t=this,e={comment:this.editor.getValue(),filepath:this.pathname};Object(u["G"])(e).then(function(){var e=f(o.a.mark((function e(n){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(n.msg),t.modals=!1;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},undofile:function(){this.editor.undo()},redofile:function(){this.editor.redo()},refreshfile:function(){this.editor.refresh()}}},m=d,p=(n("e9e1"),n("2877")),h=Object(p["a"])(m,r,a,!1,null,"25f340b3",null);e["default"]=h.exports},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"K",(function(){return u})),n.d(e,"n",(function(){return c})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"C",(function(){return d})),n.d(e,"u",(function(){return m})),n.d(e,"B",(function(){return p})),n.d(e,"z",(function(){return h})),n.d(e,"w",(function(){return v})),n.d(e,"x",(function(){return b})),n.d(e,"y",(function(){return k})),n.d(e,"A",(function(){return y})),n.d(e,"H",(function(){return g})),n.d(e,"L",(function(){return w})),n.d(e,"o",(function(){return x})),n.d(e,"d",(function(){return j})),n.d(e,"f",(function(){return O})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return E})),n.d(e,"g",(function(){return M})),n.d(e,"r",(function(){return T})),n.d(e,"p",(function(){return C})),n.d(e,"q",(function(){return I})),n.d(e,"D",(function(){return A})),n.d(e,"E",(function(){return V})),n.d(e,"G",(function(){return z})),n.d(e,"F",(function(){return $})),n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return P})),n.d(e,"J",(function(){return W})),n.d(e,"t",(function(){return G})),n.d(e,"s",(function(){return L})),n.d(e,"I",(function(){return q})),n.d(e,"v",(function(){return B}));var r=n("b6bd");function a(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function i(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function o(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function u(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function d(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function h(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function v(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function k(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function y(t){return Object(r["a"])({url:t,method:"PUT"})}function g(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function w(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function x(){return Object(r["a"])({url:"system/file",method:"GET"})}function j(){return Object(r["a"])({url:"system/backup",method:"GET"})}function O(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function _(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function E(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function M(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function T(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function C(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function I(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function A(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function V(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function z(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function $(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function S(){return Object(r["a"])({url:"auth",method:"get"})}function P(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function W(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function G(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function L(){return Object(r["a"])({url:"setting/get_user_agreement",method:"get"})}function q(t){return Object(r["a"])({url:"setting/set_user_agreement",method:"post",data:t})}function B(){return Object(r["a"])({url:"setting/group_all",method:"get"})}},e9e1:function(t,e,n){"use strict";var r=n("2373"),a=n.n(r);a.a},f9d4:function(t,e,n){(function(t){t(n("56b3"))})((function(t){"use strict";t.defineMode("javascript",(function(e,n){var r,a,i=e.indentUnit,o=n.statementIndent,u=n.jsonld,c=n.json||u,s=n.typescript,l=n.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function t(t){return{type:t,style:"keyword"}}var e=t("keyword a"),n=t("keyword b"),r=t("keyword c"),a=t("keyword d"),i=t("operator"),o={type:"atom",style:"atom"};return{if:t("if"),while:e,with:e,else:n,do:n,try:n,finally:n,return:a,break:a,continue:a,new:t("new"),delete:r,void:r,throw:r,debugger:t("debugger"),var:t("var"),const:t("var"),let:t("var"),function:t("function"),catch:t("catch"),for:t("for"),switch:t("switch"),case:t("case"),default:t("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:t("this"),class:t("class"),super:t("atom"),yield:r,export:t("export"),import:t("import"),extends:r,await:r}}(),d=/[+\-*&%=<>!?|~^@]/,m=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function p(t){var e,n=!1,r=!1;while(null!=(e=t.next())){if(!n){if("/"==e&&!r)return;"["==e?r=!0:r&&"]"==e&&(r=!1)}n=!n&&"\\"==e}}function h(t,e,n){return r=t,a=n,e}function v(t,e){var n=t.next();if('"'==n||"'"==n)return e.tokenize=b(n),e.tokenize(t,e);if("."==n&&t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return h("number","number");if("."==n&&t.match(".."))return h("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return h(n);if("="==n&&t.eat(">"))return h("=>","operator");if("0"==n&&t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return h("number","number");if(/\d/.test(n))return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),h("number","number");if("/"==n)return t.eat("*")?(e.tokenize=k,k(t,e)):t.eat("/")?(t.skipToEnd(),h("comment","comment")):te(t,e,1)?(p(t),t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),h("regexp","string-2")):(t.eat("="),h("operator","operator",t.current()));if("`"==n)return e.tokenize=y,y(t,e);if("#"==n)return t.skipToEnd(),h("error","error");if("<"==n&&t.match("!--")||"-"==n&&t.match("->"))return t.skipToEnd(),h("comment","comment");if(d.test(n))return">"==n&&e.lexical&&">"==e.lexical.type||(t.eat("=")?"!"!=n&&"="!=n||t.eat("="):/[<>*+\-]/.test(n)&&(t.eat(n),">"==n&&t.eat(n))),h("operator","operator",t.current());if(l.test(n)){t.eatWhile(l);var r=t.current();if("."!=e.lastType){if(f.propertyIsEnumerable(r)){var a=f[r];return h(a.type,a.style,r)}if("async"==r&&t.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return h("async","keyword",r)}return h("variable","variable",r)}}function b(t){return function(e,n){var r,a=!1;if(u&&"@"==e.peek()&&e.match(m))return n.tokenize=v,h("jsonld-keyword","meta");while(null!=(r=e.next())){if(r==t&&!a)break;a=!a&&"\\"==r}return a||(n.tokenize=v),h("string","string")}}function k(t,e){var n,r=!1;while(n=t.next()){if("/"==n&&r){e.tokenize=v;break}r="*"==n}return h("comment","comment")}function y(t,e){var n,r=!1;while(null!=(n=t.next())){if(!r&&("`"==n||"$"==n&&t.eat("{"))){e.tokenize=v;break}r=!r&&"\\"==n}return h("quasi","string-2",t.current())}var g="([{}])";function w(t,e){e.fatArrowAt&&(e.fatArrowAt=null);var n=t.string.indexOf("=>",t.start);if(!(n<0)){if(s){var r=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start,n));r&&(n=r.index)}for(var a=0,i=!1,o=n-1;o>=0;--o){var u=t.string.charAt(o),c=g.indexOf(u);if(c>=0&&c<3){if(!a){++o;break}if(0==--a){"("==u&&(i=!0);break}}else if(c>=3&&c<6)++a;else if(l.test(u))i=!0;else if(/["'\/`]/.test(u))for(;;--o){if(0==o)return;var f=t.string.charAt(o-1);if(f==u&&"\\"!=t.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(e.fatArrowAt=o)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function j(t,e,n,r,a,i){this.indented=t,this.column=e,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function O(t,e){for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0;for(var r=t.context;r;r=r.prev)for(n=r.vars;n;n=n.next)if(n.name==e)return!0}function _(t,e,n,r,a){var i=t.cc;E.state=t,E.stream=a,E.marked=null,E.cc=i,E.style=e,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);while(1){var o=i.length?i.pop():c?N:U;if(o(n,r)){while(i.length&&i[i.length-1].lex)i.pop()();return E.marked?E.marked:"variable"==n&&O(t,r)?"variable-2":e}}}var E={state:null,column:null,marked:null,cc:null};function M(){for(var t=arguments.length-1;t>=0;t--)E.cc.push(arguments[t])}function T(){return M.apply(null,arguments),!0}function C(t,e){for(var n=e;n;n=n.next)if(n.name==t)return!0;return!1}function I(t){var e=E.state;if(E.marked="def",e.context)if("var"==e.lexical.info&&e.context&&e.context.block){var r=A(t,e.context);if(null!=r)return void(e.context=r)}else if(!C(t,e.localVars))return void(e.localVars=new $(t,e.localVars));n.globalVars&&!C(t,e.globalVars)&&(e.globalVars=new $(t,e.globalVars))}function A(t,e){if(e){if(e.block){var n=A(t,e.prev);return n?n==e.prev?e:new z(n,e.vars,!0):null}return C(t,e.vars)?e:new z(e.prev,new $(t,e.vars),!1)}return null}function V(t){return"public"==t||"private"==t||"protected"==t||"abstract"==t||"readonly"==t}function z(t,e,n){this.prev=t,this.vars=e,this.block=n}function $(t,e){this.name=t,this.next=e}var S=new $("this",new $("arguments",null));function P(){E.state.context=new z(E.state.context,E.state.localVars,!1),E.state.localVars=S}function W(){E.state.context=new z(E.state.context,E.state.localVars,!0),E.state.localVars=null}function G(){E.state.localVars=E.state.context.vars,E.state.context=E.state.context.prev}function L(t,e){var n=function(){var n=E.state,r=n.indented;if("stat"==n.lexical.type)r=n.lexical.indented;else for(var a=n.lexical;a&&")"==a.type&&a.align;a=a.prev)r=a.indented;n.lexical=new j(r,E.stream.column(),t,null,n.lexical,e)};return n.lex=!0,n}function q(){var t=E.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function B(t){function e(n){return n==t?T():";"==t||"}"==n||")"==n||"]"==n?M():T(e)}return e}function U(t,e){return"var"==t?T(L("vardef",e),Ot,B(";"),q):"keyword a"==t?T(L("form"),J,U,q):"keyword b"==t?T(L("form"),U,q):"keyword d"==t?E.stream.match(/^\s*$/,!1)?T():T(L("stat"),K,B(";"),q):"debugger"==t?T(B(";")):"{"==t?T(L("}"),W,ft,q,G):";"==t?T():"if"==t?("else"==E.state.lexical.info&&E.state.cc[E.state.cc.length-1]==q&&E.state.cc.pop()(),T(L("form"),J,U,q,It)):"function"==t?T($t):"for"==t?T(L("form"),At,U,q):"class"==t||s&&"interface"==e?(E.marked="keyword",T(L("form","class"==t?t:e),Lt,q)):"variable"==t?s&&"declare"==e?(E.marked="keyword",T(U)):s&&("module"==e||"enum"==e||"type"==e)&&E.stream.match(/^\s*\w/,!1)?(E.marked="keyword","enum"==e?T(Xt):"type"==e?T(Pt,B("operator"),vt,B(";")):T(L("form"),_t,B("{"),L("}"),ft,q,q)):s&&"namespace"==e?(E.marked="keyword",T(L("form"),N,U,q)):s&&"abstract"==e?(E.marked="keyword",T(U)):T(L("stat"),at):"switch"==t?T(L("form"),J,B("{"),L("}","switch"),W,ft,q,q,G):"case"==t?T(N,B(":")):"default"==t?T(B(":")):"catch"==t?T(L("form"),P,D,U,q,G):"export"==t?T(L("stat"),Dt,q):"import"==t?T(L("stat"),Ht,q):"async"==t?T(U):"@"==e?T(N,U):M(L("stat"),N,B(";"),q)}function D(t){if("("==t)return T(Wt,B(")"))}function N(t,e){return F(t,e,!1)}function H(t,e){return F(t,e,!0)}function J(t){return"("!=t?M():T(L(")"),N,B(")"),q)}function F(t,e,n){if(E.state.fatArrowAt==E.stream.start){var r=n?tt:Z;if("("==t)return T(P,L(")"),st(Wt,")"),q,B("=>"),r,G);if("variable"==t)return M(P,_t,B("=>"),r,G)}var a=n?R:Q;return x.hasOwnProperty(t)?T(a):"function"==t?T($t,a):"class"==t||s&&"interface"==e?(E.marked="keyword",T(L("form"),Gt,q)):"keyword c"==t||"async"==t?T(n?H:N):"("==t?T(L(")"),K,B(")"),q,a):"operator"==t||"spread"==t?T(n?H:N):"["==t?T(L("]"),Rt,q,a):"{"==t?lt(ot,"}",null,a):"quasi"==t?M(X,a):"new"==t?T(et(n)):"import"==t?T(N):T()}function K(t){return t.match(/[;\}\)\],]/)?M():M(N)}function Q(t,e){return","==t?T(N):R(t,e,!1)}function R(t,e,n){var r=0==n?Q:R,a=0==n?N:H;return"=>"==t?T(P,n?tt:Z,G):"operator"==t?/\+\+|--/.test(e)||s&&"!"==e?T(r):s&&"<"==e&&E.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?T(L(">"),st(vt,">"),q,r):"?"==e?T(N,B(":"),a):T(a):"quasi"==t?M(X,r):";"!=t?"("==t?lt(H,")","call",r):"."==t?T(it,r):"["==t?T(L("]"),K,B("]"),q,r):s&&"as"==e?(E.marked="keyword",T(vt,r)):"regexp"==t?(E.state.lastType=E.marked="operator",E.stream.backUp(E.stream.pos-E.stream.start-1),T(a)):void 0:void 0}function X(t,e){return"quasi"!=t?M():"${"!=e.slice(e.length-2)?T(X):T(N,Y)}function Y(t){if("}"==t)return E.marked="string-2",E.state.tokenize=y,T(X)}function Z(t){return w(E.stream,E.state),M("{"==t?U:N)}function tt(t){return w(E.stream,E.state),M("{"==t?U:H)}function et(t){return function(e){return"."==e?T(t?rt:nt):"variable"==e&&s?T(wt,t?R:Q):M(t?H:N)}}function nt(t,e){if("target"==e)return E.marked="keyword",T(Q)}function rt(t,e){if("target"==e)return E.marked="keyword",T(R)}function at(t){return":"==t?T(q,U):M(Q,B(";"),q)}function it(t){if("variable"==t)return E.marked="property",T()}function ot(t,e){return"async"==t?(E.marked="property",T(ot)):"variable"==t||"keyword"==E.style?(E.marked="property","get"==e||"set"==e?T(ut):(s&&E.state.fatArrowAt==E.stream.start&&(n=E.stream.match(/^\s*:\s*/,!1))&&(E.state.fatArrowAt=E.stream.pos+n[0].length),T(ct))):"number"==t||"string"==t?(E.marked=u?"property":E.style+" property",T(ct)):"jsonld-keyword"==t?T(ct):s&&V(e)?(E.marked="keyword",T(ot)):"["==t?T(N,dt,B("]"),ct):"spread"==t?T(H,ct):"*"==e?(E.marked="keyword",T(ot)):":"==t?M(ct):void 0;var n}function ut(t){return"variable"!=t?M(ct):(E.marked="property",T($t))}function ct(t){return":"==t?T(H):"("==t?M($t):void 0}function st(t,e,n){function r(a,i){if(n?n.indexOf(a)>-1:","==a){var o=E.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),T((function(n,r){return n==e||r==e?M():M(t)}),r)}return a==e||i==e?T():n&&n.indexOf(";")>-1?M(t):T(B(e))}return function(n,a){return n==e||a==e?T():M(t,r)}}function lt(t,e,n){for(var r=3;r<arguments.length;r++)E.cc.push(arguments[r]);return T(L(e,n),st(t,e),q)}function ft(t){return"}"==t?T():M(U,ft)}function dt(t,e){if(s){if(":"==t)return T(vt);if("?"==e)return T(dt)}}function mt(t,e){if(s&&(":"==t||"in"==e))return T(vt)}function pt(t){if(s&&":"==t)return E.stream.match(/^\s*\w+\s+is\b/,!1)?T(N,ht,vt):T(vt)}function ht(t,e){if("is"==e)return E.marked="keyword",T()}function vt(t,e){return"keyof"==e||"typeof"==e||"infer"==e?(E.marked="keyword",T("typeof"==e?H:vt)):"variable"==t||"void"==e?(E.marked="type",T(gt)):"|"==e||"&"==e?T(vt):"string"==t||"number"==t||"atom"==t?T(gt):"["==t?T(L("]"),st(vt,"]",","),q,gt):"{"==t?T(L("}"),st(kt,"}",",;"),q,gt):"("==t?T(st(yt,")"),bt,gt):"<"==t?T(st(vt,">"),vt):void 0}function bt(t){if("=>"==t)return T(vt)}function kt(t,e){return"variable"==t||"keyword"==E.style?(E.marked="property",T(kt)):"?"==e||"number"==t||"string"==t?T(kt):":"==t?T(vt):"["==t?T(B("variable"),mt,B("]"),kt):"("==t?M(St,kt):void 0}function yt(t,e){return"variable"==t&&E.stream.match(/^\s*[?:]/,!1)||"?"==e?T(yt):":"==t?T(vt):"spread"==t?T(yt):M(vt)}function gt(t,e){return"<"==e?T(L(">"),st(vt,">"),q,gt):"|"==e||"."==t||"&"==e?T(vt):"["==t?T(vt,B("]"),gt):"extends"==e||"implements"==e?(E.marked="keyword",T(vt)):"?"==e?T(vt,B(":"),vt):void 0}function wt(t,e){if("<"==e)return T(L(">"),st(vt,">"),q,gt)}function xt(){return M(vt,jt)}function jt(t,e){if("="==e)return T(vt)}function Ot(t,e){return"enum"==e?(E.marked="keyword",T(Xt)):M(_t,dt,Tt,Ct)}function _t(t,e){return s&&V(e)?(E.marked="keyword",T(_t)):"variable"==t?(I(e),T()):"spread"==t?T(_t):"["==t?lt(Mt,"]"):"{"==t?lt(Et,"}"):void 0}function Et(t,e){return"variable"!=t||E.stream.match(/^\s*:/,!1)?("variable"==t&&(E.marked="property"),"spread"==t?T(_t):"}"==t?M():"["==t?T(N,B("]"),B(":"),Et):T(B(":"),_t,Tt)):(I(e),T(Tt))}function Mt(){return M(_t,Tt)}function Tt(t,e){if("="==e)return T(H)}function Ct(t){if(","==t)return T(Ot)}function It(t,e){if("keyword b"==t&&"else"==e)return T(L("form","else"),U,q)}function At(t,e){return"await"==e?T(At):"("==t?T(L(")"),Vt,q):void 0}function Vt(t){return"var"==t?T(Ot,zt):"variable"==t?T(zt):M(zt)}function zt(t,e){return")"==t?T():";"==t?T(zt):"in"==e||"of"==e?(E.marked="keyword",T(N,zt)):M(N,zt)}function $t(t,e){return"*"==e?(E.marked="keyword",T($t)):"variable"==t?(I(e),T($t)):"("==t?T(P,L(")"),st(Wt,")"),q,pt,U,G):s&&"<"==e?T(L(">"),st(xt,">"),q,$t):void 0}function St(t,e){return"*"==e?(E.marked="keyword",T(St)):"variable"==t?(I(e),T(St)):"("==t?T(P,L(")"),st(Wt,")"),q,pt,G):s&&"<"==e?T(L(">"),st(xt,">"),q,St):void 0}function Pt(t,e){return"keyword"==t||"variable"==t?(E.marked="type",T(Pt)):"<"==e?T(L(">"),st(xt,">"),q):void 0}function Wt(t,e){return"@"==e&&T(N,Wt),"spread"==t?T(Wt):s&&V(e)?(E.marked="keyword",T(Wt)):s&&"this"==t?T(dt,Tt):M(_t,dt,Tt)}function Gt(t,e){return"variable"==t?Lt(t,e):qt(t,e)}function Lt(t,e){if("variable"==t)return I(e),T(qt)}function qt(t,e){return"<"==e?T(L(">"),st(xt,">"),q,qt):"extends"==e||"implements"==e||s&&","==t?("implements"==e&&(E.marked="keyword"),T(s?vt:N,qt)):"{"==t?T(L("}"),Bt,q):void 0}function Bt(t,e){return"async"==t||"variable"==t&&("static"==e||"get"==e||"set"==e||s&&V(e))&&E.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(E.marked="keyword",T(Bt)):"variable"==t||"keyword"==E.style?(E.marked="property",T(s?Ut:$t,Bt)):"number"==t||"string"==t?T(s?Ut:$t,Bt):"["==t?T(N,dt,B("]"),s?Ut:$t,Bt):"*"==e?(E.marked="keyword",T(Bt)):s&&"("==t?M(St,Bt):";"==t||","==t?T(Bt):"}"==t?T():"@"==e?T(N,Bt):void 0}function Ut(t,e){if("?"==e)return T(Ut);if(":"==t)return T(vt,Tt);if("="==e)return T(H);var n=E.state.lexical.prev,r=n&&"interface"==n.info;return M(r?St:$t)}function Dt(t,e){return"*"==e?(E.marked="keyword",T(Qt,B(";"))):"default"==e?(E.marked="keyword",T(N,B(";"))):"{"==t?T(st(Nt,"}"),Qt,B(";")):M(U)}function Nt(t,e){return"as"==e?(E.marked="keyword",T(B("variable"))):"variable"==t?M(H,Nt):void 0}function Ht(t){return"string"==t?T():"("==t?M(N):M(Jt,Ft,Qt)}function Jt(t,e){return"{"==t?lt(Jt,"}"):("variable"==t&&I(e),"*"==e&&(E.marked="keyword"),T(Kt))}function Ft(t){if(","==t)return T(Jt,Ft)}function Kt(t,e){if("as"==e)return E.marked="keyword",T(Jt)}function Qt(t,e){if("from"==e)return E.marked="keyword",T(N)}function Rt(t){return"]"==t?T():M(st(H,"]"))}function Xt(){return M(L("form"),_t,B("{"),L("}"),st(Yt,"}"),q,q)}function Yt(){return M(_t,Tt)}function Zt(t,e){return"operator"==t.lastType||","==t.lastType||d.test(e.charAt(0))||/[,.]/.test(e.charAt(0))}function te(t,e,n){return e.tokenize==v&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||"quasi"==e.lastType&&/\{\s*$/.test(t.string.slice(0,t.pos-(n||0)))}return G.lex=!0,q.lex=!0,{startState:function(t){var e={tokenize:v,lastType:"sof",cc:[],lexical:new j((t||0)-i,0,"block",!1),localVars:n.localVars,context:n.localVars&&new z(null,null,!1),indented:t||0};return n.globalVars&&"object"==typeof n.globalVars&&(e.globalVars=n.globalVars),e},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation(),w(t,e)),e.tokenize!=k&&t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"==r?n:(e.lastType="operator"!=r||"++"!=a&&"--"!=a?r:"incdec",_(e,n,r,a,t))},indent:function(e,r){if(e.tokenize==k)return t.Pass;if(e.tokenize!=v)return 0;var a,u=r&&r.charAt(0),c=e.lexical;if(!/^\s*else\b/.test(r))for(var s=e.cc.length-1;s>=0;--s){var l=e.cc[s];if(l==q)c=c.prev;else if(l!=It)break}while(("stat"==c.type||"form"==c.type)&&("}"==u||(a=e.cc[e.cc.length-1])&&(a==Q||a==R)&&!/^[,\.=+\-*:?[\(]/.test(r)))c=c.prev;o&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,d=u==f;return"vardef"==f?c.indented+("operator"==e.lastType||","==e.lastType?c.info.length+1:0):"form"==f&&"{"==u?c.indented:"form"==f?c.indented+i:"stat"==f?c.indented+(Zt(e,r)?o||i:0):"switch"!=c.info||d||0==n.doubleIndentSwitch?c.align?c.column+(d?0:1):c.indented+(d?0:i):c.indented+(/^(?:case|default)\b/.test(r)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:c?null:"/*",blockCommentEnd:c?null:"*/",blockCommentContinue:c?null:" * ",lineComment:c?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:c?"json":"javascript",jsonldMode:u,jsonMode:c,expressionAllowed:te,skipExpression:function(t){var e=t.cc[t.cc.length-1];e!=N&&e!=H||t.cc.pop()}}})),t.registerHelper("wordChars","javascript",/[\w$]/),t.defineMIME("text/javascript","javascript"),t.defineMIME("text/ecmascript","javascript"),t.defineMIME("application/javascript","javascript"),t.defineMIME("application/x-javascript","javascript"),t.defineMIME("application/ecmascript","javascript"),t.defineMIME("application/json",{name:"javascript",json:!0}),t.defineMIME("application/x-json",{name:"javascript",json:!0}),t.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),t.defineMIME("text/typescript",{name:"javascript",typescript:!0}),t.defineMIME("application/typescript",{name:"javascript",typescript:!0})}))}}]);