(function(t){function e(e){for(var n,o,i=e[0],l=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuetify-extra/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;s.push(["b36b","chunk-vendors"]),a()})({"23b0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg9:"",xl8:""}},[a(t.type,{tag:"component",scopedSlots:t._u([{key:t.titlePosition,fn:function(){return[t._t(t.titlePosition)]},proxy:!0}],null,!0)},[t._t("default")],2)],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("outside"),a("v-card",{staticClass:"mx-auto pa-xs-auto pa-sm-5 pa-md-8",attrs:{elevation:1}},[t._t("inside"),t._t("default")],2)],2)},o=[],i=a("2877"),l=a("6544"),u=a.n(l),c=a("b0af"),d={},p=Object(i["a"])(d,s,o,!1,null,null,null),f=p.exports;u()(p,{VCard:c["a"]});var v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$slots["outside"]?a("h1",{staticClass:"headline pa-3 font-weight-light"},[t._t("outside")],2):t._e(),a("v-card",{staticClass:"mx-auto pa-xs-auto pa-sm-5 pa-md-8",attrs:{elevation:1}},[t.$slots["inside"]?a("v-card-title",{staticClass:"font-weight-light"},[t._t("inside")],2):t._e(),t.$slots["inside"]?a("v-divider"):t._e(),t._t("default")],2)],1)},m=[],b=a("99d9"),y=a("ce7e"),_={},g=Object(i["a"])(_,v,m,!1,null,null,null),h=g.exports;u()(g,{VCard:c["a"],VCardTitle:b["c"],VDivider:y["a"]});var x={props:{titlePosition:{type:String,default:"inside"},simpleTitle:{type:Boolean,default:!1}},components:{EmptyFormat:f,SimpleTitle:h},data:function(){return{drawer:!1}},computed:{type:function(){return this.simpleTitle?"simple-title":"empty-format"}}},w=x,k=a("a523"),V=a("0e8f"),C=a("a722"),T=Object(i["a"])(w,n,r,!1,null,null,null);e["default"]=T.exports;u()(T,{VContainer:k["a"],VFlex:V["a"],VLayout:C["a"]})},"4ad2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{color:t.type,timeout:4e3,vertical:"vertical"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a(t.type,{tag:"component"},[t._v(t._s(t.message))]),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Chiudi")])],1)},r=[],s=a("fe83"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-icon",{attrs:{left:"",color:"white"}},[t._v("mdi-information-outline")]),t._t("default")],2)},i=[],l=a("2877"),u=a("6544"),c=a.n(u),d=a("132d"),p={},f=Object(l["a"])(p,o,i,!1,null,null,null),v=f.exports;c()(f,{VIcon:d["a"]});var m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-icon",{attrs:{left:"",color:"white"}},[t._v("mdi-close-circle")]),t._t("default")],2)},b=[],y={},_=Object(l["a"])(y,m,b,!1,null,null,null),g=_.exports;c()(_,{VIcon:d["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-icon",{attrs:{left:"",color:"white"}},[t._v("mdi-alert")]),t._t("default")],2)},x=[],w={},k=Object(l["a"])(w,h,x,!1,null,null,null),V=k.exports;c()(k,{VIcon:d["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},T=[],j={},I=Object(l["a"])(j,C,T,!1,null,null,null),S=I.exports,O={components:{Info:v,Error:g,Warning:V,Empty:S},data:function(){return{snackbar:!1,message:"",type:"empty"}},methods:{show:function(t){this.snackbar=!0,this.message=t.message,this.type=t.type?t.type:this.type}},beforeMount:function(){var t=this;s["a"].EventBus.$on("AppMessageShow",(function(e){t.show(e)}))}},E=O,$=a("8336"),L=a("2db4"),M=Object(l["a"])(E,n,r,!1,null,"34bb6339",null);e["default"]=M.exports;c()(M,{VBtn:$["a"],VSnackbar:L["a"]})},"61b1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md6:"",lg5:"",xl4:""}},[a("v-card",{staticClass:"card--flex-toolbar"},[a("v-app-bar",{attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"display-1 text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v(t._s(t.loginLabel))])])],1),a("v-card-text",[a("v-text-field",{attrs:{label:t.userLabel,required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{type:"password",label:t.passwordLabel,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",[a("v-btn",{attrs:{block:"",text:""},on:{click:function(e){return t.login()}}},[t._v(t._s(t.loginLabel))])],1)],1)],1)],1)],1)},r=[],s={props:{userLabel:{type:String,default:"User"},passwordLabel:{type:String,default:"Password"},loginLabel:{type:String,default:"Login"}},data:function(){return{username:"",password:""}},methods:{login:function(){var t=null;t={username:this.username,password:this.password},this.$emit("login",t)}}},o=s,i=a("2877"),l=a("6544"),u=a.n(l),c=a("40dc"),d=a("8336"),p=a("b0af"),f=a("99d9"),v=a("a523"),m=a("0e8f"),b=a("a722"),y=a("8654"),_=a("2a7f"),g=Object(i["a"])(o,n,r,!1,null,null,null);e["default"]=g.exports;u()(g,{VAppBar:c["a"],VBtn:d["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["b"],VContainer:v["a"],VFlex:m["a"],VLayout:b["a"],VTextField:y["a"],VToolbarTitle:_["b"]})},"97a0":function(t,e,a){var n={"./AppBar.vue":"dd38","./AppSnackbar.vue":"4ad2","./CardPage.vue":"23b0","./LoginForm.vue":"61b1"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="97a0"},b36b:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("app-bar",{attrs:{"menu-items":t.mItems}}),a("v-container",[a("v-card",{attrs:{outlined:"",tile:""}},[a("v-card-title",{staticClass:"font-weight-light"},[t._v("Test App Bar")]),a("v-card-text",[a("v-checkbox",{attrs:{label:"Home",value:t.menuItems[0]},model:{value:t.mItems,callback:function(e){t.mItems=e},expression:"mItems"}}),a("v-checkbox",{attrs:{label:"Fake",value:t.menuItems[1]},model:{value:t.mItems,callback:function(e){t.mItems=e},expression:"mItems"}})],1)],1),t.mItems?a("json-tree",{attrs:{data:t.mItems}}):t._e()],1),a("login-form",{on:{login:t.getLoginData}}),a("v-container",[t.jsonEmitted?a("json-tree",{attrs:{data:t.jsonEmitted}}):t._e()],1),a("v-container",[a("v-card",{attrs:{outlined:"",tile:""}},[a("v-card-title",{staticClass:"font-weight-light"},[t._v("Test App Message Snackbar")]),a("v-card-text",[a("v-text-field",{staticClass:"mt-3 pa-6",attrs:{outlined:""},model:{value:t.textMessage,callback:function(e){t.textMessage=e},expression:"textMessage"}}),a("v-radio-group",{attrs:{mandatory:!1},model:{value:t.snackbarType,callback:function(e){t.snackbarType=e},expression:"snackbarType"}},[a("v-radio",{attrs:{label:"Error",value:"error"}}),a("v-radio",{attrs:{label:"Info",value:"info"}}),a("v-radio",{attrs:{label:"Warning",value:"warning"}}),a("v-radio",{attrs:{label:"Default",value:"empty"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$appMessage.show({message:t.textMessage,type:t.snackbarType})}}},[t._v("Popup Message")])],1)],1)],1),a("app-snackbar"),a("card-page",{attrs:{"simple-title":""},scopedSlots:t._u([{key:"outside",fn:function(){return[t._v("Simple title outside card not working")]},proxy:!0},{key:"inside",fn:function(){return[t._v("Simple title inside card work")]},proxy:!0}])},[a("v-card-text",[t._v("Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.")])],1),a("card-page",{attrs:{"simple-title":"","title-position":"outside"},scopedSlots:t._u([{key:"outside",fn:function(){return[t._v("Simple title outside card work")]},proxy:!0},{key:"inside",fn:function(){return[t._v("Simple title inside card not work")]},proxy:!0}])},[a("v-card-text",[t._v("Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.")])],1),a("card-page",{scopedSlots:t._u([{key:"outside",fn:function(){return[a("h2",[t._v("Custom title outside card not working")])]},proxy:!0},{key:"inside",fn:function(){return[a("h2",[t._v("Custom title inside card work")])]},proxy:!0}])},[a("v-card-text",[t._v("Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.")])],1),a("card-page",{attrs:{"title-position":"outside"},scopedSlots:t._u([{key:"outside",fn:function(){return[a("h2",[t._v("Custom title outside card work")])]},proxy:!0},{key:"inside",fn:function(){return[a("h2",[t._v("Custom title inside card not work")])]},proxy:!0}])},[a("v-card-text",[t._v("Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.")])],1)],1)],1)},s=[],o={name:"App",data:function(){return{jsonEmitted:null,mItems:[],textMessage:"Hello World!",snackbarType:null,menuItems:[{title:"Home",icon:"mdi-home",to:"/vuetify-extra/"},{title:"Fake",icon:"mdi-bug",to:"/vuetify-extra/fake-url"}]}},methods:{getLoginData:function(t){this.jsonEmitted=t}}},i=o,l=a("2877"),u=a("6544"),c=a.n(u),d=a("7496"),p=a("8336"),f=a("b0af"),v=a("99d9"),m=a("ac7c"),b=a("a523"),y=a("a75b"),_=a("67b6"),g=a("43a6"),h=a("8654"),x=Object(l["a"])(i,r,s,!1,null,null,null),w=x.exports;c()(x,{VApp:d["a"],VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCheckbox:m["a"],VContainer:b["a"],VContent:y["a"],VRadio:_["a"],VRadioGroup:g["a"],VTextField:h["a"]});var k=a("f309");n["a"].use(k["a"]);var V=new k["a"]({icons:{iconfont:"mdi"}}),C=a("fe83");n["a"].use(C["a"]);var T=a("7fab");n["a"].component("json-tree",T["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:V,render:function(t){return t(w)}}).$mount("#app")},dd38:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",fixed:"",temporary:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.menuItems,(function(e,n){return a("v-list-item",t._b({key:n,attrs:{exact:""}},"v-list-item",t.routerProps(e.to),!1),[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-toolbar",{attrs:{fixed:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer"),t._l(t.menuItems,(function(e,n){return a("v-toolbar-items",{key:n,staticClass:"hidden-sm-and-down"},[a("v-btn",t._b({attrs:{text:"",exact:""}},"v-btn",t.routerProps(e.to),!1),[a("v-icon",{attrs:{left:""},domProps:{innerHTML:t._s(e.icon)}}),t._v(" "+t._s(e.title)+" ")],1)],1)}))],2)],1)},r=[],s=a("ade3"),o={props:{menuItems:{type:Array,default:function(){return[{title:"Home",icon:"mdi-home",to:"/"}]}}},data:function(){return{drawer:!1}},methods:{routerProps:function(t){var e="undefined"===typeof this.$route?"href":"to";return Object(s["a"])({},e,t)}}},i=o,l=a("2877"),u=a("6544"),c=a.n(u),d=a("5bc1"),p=a("8336"),f=a("132d"),v=a("8860"),m=a("da13"),b=a("5d23"),y=a("34c3"),_=a("f774"),g=a("2fa4"),h=a("71d9"),x=a("2a7f"),w=Object(l["a"])(i,n,r,!1,null,null,null);e["default"]=w.exports;c()(w,{VAppBarNavIcon:d["a"],VBtn:p["a"],VIcon:f["a"],VList:v["a"],VListItem:m["a"],VListItemContent:b["a"],VListItemIcon:y["a"],VListItemTitle:b["b"],VNavigationDrawer:_["a"],VSpacer:g["a"],VToolbar:h["a"],VToolbarItems:x["a"]})},fe83:function(t,e,a){"use strict";(function(t){a("4160"),a("d3b7"),a("ac1f"),a("5319"),a("1276"),a("159b"),a("ddb0");function n(t){n.installed||(n.installed=!0,o.keys().forEach((function(e){var a=o(e),n=e.split("/").pop().replace(/\.\w+$/,"");t.component(n,a.default||a)})),this.EventBus=new t,t.prototype.$appMessage={show:function(t){r.EventBus.$emit("AppMessageShow",t)}})}var r={install:n},s=null;"undefined"!==typeof window?s=window.Vue:"undefined"!==typeof t&&(s=t.Vue),s&&s.use(r);var o=a("97a0");e["a"]=r}).call(this,a("c8ba"))}});
//# sourceMappingURL=app.47ab99b4.js.map