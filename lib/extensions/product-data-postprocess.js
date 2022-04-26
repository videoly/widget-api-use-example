!function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r,n){t.exports=n(7)},,function(t,r,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function o(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=n(3),u=e(i),c=function(){function t(){o(this,t),this.name="base-extension",u.default.extensions.push(this)}return t.prototype.register=function(){},t}();r.default=c},function(t,r){t.exports=VideolyWidget},,,,function(t,r,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function o(t,r){for(var n=Object.getOwnPropertyNames(r),e=0;e<n.length;e++){var o=n[e],i=Object.getOwnPropertyDescriptor(r,o);i&&i.configurable&&void 0===t[o]&&Object.defineProperty(t,o,i)}return t}function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function u(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?t:r}function c(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):o(t,r))}r.__esModule=!0;var a=n(2),s=e(a),p=n(3),f=e(p),l=n(8),v=e(l),h=n(60),y=e(h),d=function(t){function r(){i(this,r);var n=u(this,t.call(this));return n.name="product-data-postprocess",n}return c(r,t),r.prototype.register=function(){var r=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.prototype.register.call(this,n),f.default.mediator.on("box:after-parse-values",function(t,e){if(e>0){var o=f.default.propertiesMap;for(var i in n){var u=Object.hasOwnProperty.call(n,i),c=o[i],a=t.properties[i];if(u&&c&&a){var s=n[i];t.properties[i]=s.reduce(function(t,n){return r[n.action].apply(r,[t].concat(n.arguments||[]))},t.properties[i])}}}})},r.prototype.replace=function(t,r,n){return String(t).replace(r,n)},r.prototype.match=function t(r,n){var e=new RegExp(n),t=String(r).match(e);return t?t[0]:""},r.prototype.replaceWithRegexp=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=new RegExp(r,n);return String(t).replace(o,e)},r.prototype.jsonParse=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return JSON.parse(t)},r.prototype.reverse=function(t){return(0,y.default)(t)},r.prototype.get=function(t,r,n){return(0,v.default)(t,r,n)},r.prototype.split=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return String(t).split(r,n)},r.prototype.fjellsportIdPreparation=function(t){var r=t.match(/^(.+?)(?=@@)/),n=t.match(/vdly(mdl.+?)(?=@@)/),e=t.match(/vdly(id.+)/);return null!==r&&r[1]&&(null!==n&&n[1]||null!==e&&e[1])?r[1]+"-"+(n&&n[1]?n[1]:e[1]):""},r}(s.default),_=new d;r.default=_},function(t,r,n){function e(t,r,n){var e=null==t?void 0:o(t,r);return void 0===e?n:e}var o=n(9);t.exports=e},function(t,r,n){function e(t,r){r=o(r,t);for(var n=0,e=r.length;null!=t&&n<e;)t=t[i(r[n++])];return n&&n==e?t:void 0}var o=n(10),i=n(59);t.exports=e},function(t,r,n){function e(t,r){return o(t)?t:i(t,r)?[t]:u(c(t))}var o=n(11),i=n(12),u=n(21),c=n(56);t.exports=e},function(t,r){var n=Array.isArray;t.exports=n},function(t,r,n){function e(t,r){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(c.test(t)||!u.test(t)||null!=r&&t in Object(r))}var o=n(11),i=n(13),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=e},function(t,r,n){function e(t){return"symbol"==typeof t||i(t)&&o(t)==u}var o=n(14),i=n(20),u="[object Symbol]";t.exports=e},function(t,r,n){function e(t){return null==t?void 0===t?a:c:s&&s in Object(t)?i(t):u(t)}var o=n(15),i=n(18),u=n(19),c="[object Null]",a="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=e},function(t,r,n){var e=n(16),o=e.Symbol;t.exports=o},function(t,r,n){var e=n(17),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},function(t,r){(function(r){var n="object"==typeof r&&r&&r.Object===Object&&r;t.exports=n}).call(r,function(){return this}())},function(t,r,n){function e(t){var r=u.call(t,a),n=t[a];try{t[a]=void 0;var e=!0}catch(t){}var o=c.call(t);return e&&(r?t[a]=n:delete t[a]),o}var o=n(15),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,a=o?o.toStringTag:void 0;t.exports=e},function(t,r){function n(t){return o.call(t)}var e=Object.prototype,o=e.toString;t.exports=n},function(t,r){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,r,n){var e=n(22),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=e(function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(o,function(t,n,e,o){r.push(e?o.replace(i,"$1"):n||t)}),r});t.exports=u},function(t,r,n){function e(t){var r=o(t,function(t){return n.size===i&&n.clear(),t}),n=r.cache;return r}var o=n(23),i=500;t.exports=e},function(t,r,n){function e(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(i);var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return n.cache=i.set(o,u)||i,u};return n.cache=new(e.Cache||o),n}var o=n(24),i="Expected a function";e.Cache=o,t.exports=e},function(t,r,n){function e(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}var o=n(25),i=n(50),u=n(53),c=n(54),a=n(55);e.prototype.clear=o,e.prototype.delete=i,e.prototype.get=u,e.prototype.has=c,e.prototype.set=a,t.exports=e},function(t,r,n){function e(){this.size=0,this.__data__={hash:new o,map:new(u||i),string:new o}}var o=n(26),i=n(41),u=n(49);t.exports=e},function(t,r,n){function e(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}var o=n(27),i=n(37),u=n(38),c=n(39),a=n(40);e.prototype.clear=o,e.prototype.delete=i,e.prototype.get=u,e.prototype.has=c,e.prototype.set=a,t.exports=e},function(t,r,n){function e(){this.__data__=o?o(null):{},this.size=0}var o=n(28);t.exports=e},function(t,r,n){var e=n(29),o=e(Object,"create");t.exports=o},function(t,r,n){function e(t,r){var n=i(t,r);return o(n)?n:void 0}var o=n(30),i=n(36);t.exports=e},function(t,r,n){function e(t){if(!u(t)||i(t))return!1;var r=o(t)?h:s;return r.test(c(t))}var o=n(31),i=n(33),u=n(32),c=n(35),a=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,p=Function.prototype,f=Object.prototype,l=p.toString,v=f.hasOwnProperty,h=RegExp("^"+l.call(v).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=e},function(t,r,n){function e(t){if(!i(t))return!1;var r=o(t);return r==c||r==a||r==u||r==s}var o=n(14),i=n(32),u="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",s="[object Proxy]";t.exports=e},function(t,r){function n(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}t.exports=n},function(t,r,n){function e(t){return!!i&&i in t}var o=n(34),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=e},function(t,r,n){var e=n(16),o=e["__core-js_shared__"];t.exports=o},function(t,r){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var e=Function.prototype,o=e.toString;t.exports=n},function(t,r){function n(t,r){return null==t?void 0:t[r]}t.exports=n},function(t,r){function n(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}t.exports=n},function(t,r,n){function e(t){var r=this.__data__;if(o){var n=r[t];return n===i?void 0:n}return c.call(r,t)?r[t]:void 0}var o=n(28),i="__lodash_hash_undefined__",u=Object.prototype,c=u.hasOwnProperty;t.exports=e},function(t,r,n){function e(t){var r=this.__data__;return o?void 0!==r[t]:u.call(r,t)}var o=n(28),i=Object.prototype,u=i.hasOwnProperty;t.exports=e},function(t,r,n){function e(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===r?i:r,this}var o=n(28),i="__lodash_hash_undefined__";t.exports=e},function(t,r,n){function e(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}var o=n(42),i=n(43),u=n(46),c=n(47),a=n(48);e.prototype.clear=o,e.prototype.delete=i,e.prototype.get=u,e.prototype.has=c,e.prototype.set=a,t.exports=e},function(t,r){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,r,n){function e(t){var r=this.__data__,n=o(r,t);if(n<0)return!1;var e=r.length-1;return n==e?r.pop():u.call(r,n,1),--this.size,!0}var o=n(44),i=Array.prototype,u=i.splice;t.exports=e},function(t,r,n){function e(t,r){for(var n=t.length;n--;)if(o(t[n][0],r))return n;return-1}var o=n(45);t.exports=e},function(t,r){function n(t,r){return t===r||t!==t&&r!==r}t.exports=n},function(t,r,n){function e(t){var r=this.__data__,n=o(r,t);return n<0?void 0:r[n][1]}var o=n(44);t.exports=e},function(t,r,n){function e(t){return o(this.__data__,t)>-1}var o=n(44);t.exports=e},function(t,r,n){function e(t,r){var n=this.__data__,e=o(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this}var o=n(44);t.exports=e},function(t,r,n){var e=n(29),o=n(16),i=e(o,"Map");t.exports=i},function(t,r,n){function e(t){var r=o(this,t).delete(t);return this.size-=r?1:0,r}var o=n(51);t.exports=e},function(t,r,n){function e(t,r){var n=t.__data__;return o(r)?n["string"==typeof r?"string":"hash"]:n.map}var o=n(52);t.exports=e},function(t,r){function n(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}t.exports=n},function(t,r,n){function e(t){return o(this,t).get(t)}var o=n(51);t.exports=e},function(t,r,n){function e(t){return o(this,t).has(t)}var o=n(51);t.exports=e},function(t,r,n){function e(t,r){var n=o(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this}var o=n(51);t.exports=e},function(t,r,n){function e(t){return null==t?"":o(t)}var o=n(57);t.exports=e},function(t,r,n){function e(t){if("string"==typeof t)return t;if(u(t))return i(t,e)+"";if(c(t))return p?p.call(t):"";var r=t+"";return"0"==r&&1/t==-a?"-0":r}var o=n(15),i=n(58),u=n(11),c=n(13),a=1/0,s=o?o.prototype:void 0,p=s?s.toString:void 0;t.exports=e},function(t,r){function n(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}t.exports=n},function(t,r,n){function e(t){if("string"==typeof t||o(t))return t;var r=t+"";return"0"==r&&1/t==-i?"-0":r}var o=n(13),i=1/0;t.exports=e},function(t,r){function n(t){return null==t?t:o.call(t)}var e=Array.prototype,o=e.reverse;t.exports=n}]);