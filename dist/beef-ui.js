!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("beef-ui",[],e):"object"==typeof exports?exports["beef-ui"]=e():t["beef-ui"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=8)}([function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+g+'~="'+t.id+'"]');if(r){if(b)return h;r.parentNode.removeChild(r)}if(m){var i=p++;r=d||(d=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),v.ssrId&&t.setAttribute(g,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(13),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,b=!1,h=function(){},v=null,g="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){b=n,v=o||{};var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=f[a.id];s.refs--,n.push(s)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,d=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,e){return f.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:s,options:c}}},function(t,e,n){"use strict";e.a={name:"bf-btn-line",data:function(){return{}},props:{btn1Msg:{default:"线性按钮一"}},methods:{},mounted:function(){}}},function(t,e,n){"use strict";var r=n(5);e.a={name:"bf-btn",data:function(){return{}},props:{icon:{type:String},iconPosition:{type:String,default:"left",validator:function(t){return!("left"!==t&&"right"!==t)}},loading:{type:Boolean,default:!1}},components:{"bf-icon":r.a},methods:{btn2ClickTrigger:function(){this.$emit("click")}}}},function(t,e,n){"use strict";function r(t){n(19)}var o=n(6),i=n(21),a=n(2),s=r,u=a(o.a,i.a,!1,s,null,null);e.a=u.exports},function(t,e,n){"use strict";e.a={name:"bf-icon",data:function(){return{}},props:{iconName:{}}}},function(t,e,n){"use strict";e.a={name:"bf-btn-group",data:function(){return{}},mounted:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=this.$el.children[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value,a=i.nodeName.toLowerCase();"button"!==a&&console.warn("bf-btn-group的子元素应该是bf-btn,您写的"+a+"不应该出现在该位置")}}catch(t){e=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw n}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n(15),i=n(23),a=n(28),s=[r.a,o.a,i.a,a.a],u=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.forEach(function(e){t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&u(window.Vue),e.default={install:u,btn1:r.a,btn2:o.a,btnGroup:i.a,bfIcon:a.a}},function(t,e,n){"use strict";var r=n(10);r.a.install=function(t){return t.component(r.a.name,r.a)},e.a=r.a},function(t,e,n){"use strict";function r(t){n(11)}var o=n(3),i=n(14),a=n(2),s=r,u=a(o.a,i.a,!1,s,"data-v-e8a2417e",null);e.a=u.exports},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("2065f5b6",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".wrapper[data-v-e8a2417e]{display:inline-block}.button[data-v-e8a2417e]{display:block;position:relative;width:180px;height:50px;line-height:46px;text-align:center;text-decoration:none;font-family:微软雅黑;border:2px solid #8f6848;-o-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:.6s ease;-webkit-transition:.6s ease;-moz-transition:.6s ease;-o-transition:.6s ease}.button[data-v-e8a2417e]:hover{border:2px solid #4e4e4e;color:#fff;background-color:#4e4e4e;text-decoration:none}.button .line[data-v-e8a2417e]{display:block;position:absolute;background:none;transition:.7s ease;-webkit-transition:.7s ease;-moz-transition:.7s ease;-o-transition:.7s ease}.button:hover .line[data-v-e8a2417e]{background:#4e4e4e}.button .line-top[data-v-e8a2417e]{height:2px;width:0;left:-110%;top:-2px}.button:hover .line-top[data-v-e8a2417e]{width:100%;left:-2px}.button .line-right[data-v-e8a2417e]{width:2px;height:0;right:-2px;top:-110%}.button:hover .line-right[data-v-e8a2417e]{height:100%;top:-2px}.button .line-bottom[data-v-e8a2417e]{width:0;height:2px;bottom:-2px;right:-110%}.button:hover .line-bottom[data-v-e8a2417e]{width:100%;right:-2px}.button .line-left[data-v-e8a2417e]{width:2px;height:0;left:-2px;bottom:-110%}.button:hover .line-left[data-v-e8a2417e]{height:100%;bottom:-2px}",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],u=i[2],c=i[3],f={id:t+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("a",{staticClass:"button",attrs:{href:"#",id:"btn1"}},[n("span",{staticClass:"line line-top"}),t._v(" "),n("span",{staticClass:"line line-right"}),t._v(" "),n("span",{staticClass:"line line-bottom"}),t._v(" "),n("span",{staticClass:"line line-left"}),t._v("\n    "+t._s(t.btn1Msg)+"\n    ")])])},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";var r=n(16);r.a.install=function(t){return t.component(r.a.name,r.a)},e.a=r.a},function(t,e,n){"use strict";function r(t){n(17)}var o=n(4),i=n(22),a=n(2),s=r,u=a(o.a,i.a,!1,s,null,null);e.a=u.exports},function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("1c05eff8",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"@keyframes loadingSpin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.bf-btn{font-size:14px;height:32px;padding:0 1em;border-radius:4px;border:1px solid #999;background:#fff;cursor:pointer;display:inline-flex;justify-content:center;align-items:center;vertical-align:middle}.bf-btn:hover{border-color:#666}.bf-btn:active{background-color:#eee}.bf-btn:focus{outline:none}.bf-btn>.bficon{order:1;margin-right:.2em}.bf-btn>.slot-wrapper{order:2}.bf-btn.icon-right>.slot-wrapper{order:1}.bf-btn.icon-right>.bficon{order:2;margin-right:0;margin-left:.2em}.bf-btn>.loading{animation:loadingSpin 1s infinite linear}",""])},function(t,e,n){var r=n(20);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("d5def802",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".bf-icon{width:1em;height:1em}",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"bf-icon"},[n("use",{attrs:{"xlink:href":"#i-"+t.iconName}})])},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"bf-btn",class:(r={},r["icon-"+t.iconPosition]=!0,r),on:{click:t.btn2ClickTrigger}},[t.icon&&!t.loading?n("bf-icon",{staticClass:"bficon",attrs:{"icon-name":t.icon}}):t._e(),t._v(" "),t.loading?n("bf-icon",{staticClass:"loading bficon",attrs:{"icon-name":"loading"}}):t._e(),t._v(" "),n("div",{staticClass:"slot-wrapper"},[t._t("default")],2)],1);var r},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";var r=n(24);r.a.install=function(t){return t.component(r.a.name,r.a)},e.a=r.a},function(t,e,n){"use strict";function r(t){n(25)}var o=n(7),i=n(27),a=n(2),s=r,u=a(o.a,i.a,!1,s,null,null);e.a=u.exports},function(t,e,n){var r=n(26);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("5247469e",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".bf-btn-group{display:inline-flex;vertical-align:middle}.bf-btn-group>.bf-btn{border-radius:0}.bf-btn-group>.bf-btn:not(:first-child){margin-left:-1px}.bf-btn-group>.bf-btn:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}.bf-btn-group>.bf-btn:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px}.bf-btn-group>.bf-btn:hover{position:relative;z-index:1}",""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"bf-btn-group"},[t._t("default")],2)},o=[],i={render:r,staticRenderFns:o};e.a=i},function(t,e,n){"use strict";var r=n(5);r.a.install=function(t){return t.component(r.a.name,r.a)},e.a=r.a}])});
//# sourceMappingURL=beef-ui.js.map