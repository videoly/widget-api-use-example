!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(68)},2:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var s=n(3),u=o(s),i=function(){function e(){r(this,e),this.name="base-extension",u.default.extensions.push(this)}return e.prototype.register=function(){},e}();t.default=i},3:function(e,t){e.exports=VideolyWidget},68:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],s=Object.getOwnPropertyDescriptor(t,r);s&&s.configurable&&void 0===e[r]&&Object.defineProperty(e,r,s)}return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}t.__esModule=!0;var a=n(2),c=o(a),f=n(3),l=o(f),p=function(e){function t(){s(this,t);var n=u(this,e.call(this));return n.name="xhr-requester",n}return i(t,e),t.prototype.register=function(){for(var t,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];(t=e.prototype.register).call.apply(t,[this].concat(o)),l.default.mediator.on("http-request",this.request,!1)},t.prototype.request=function(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="json",n.timeout=1e4,n.withCredentials=!0,n.onload=function(){return 200===n.status?void t(n.response):void(l.default.DEBUG&&(console.warn("Videoly server respond with status "+n.status),console.log("Response body ",n.response)))},n.onerror=function(){l.default.DEBUG&&console.error("Videoly request is not successful. Status code - "+n.status)},n.ontimeout=function(){l.default.DEBUG&&console.warn("Videoly request reached timeout (10000). ResponseURL - "+n.responseURL)},n.send()},t}(c.default),d=new p;t.default=d}});