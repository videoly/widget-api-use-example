!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(5)},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var i=n(3),u=o(i),c=function(){function e(){r(this,e),this.name="base-extension",u.default.extensions.push(this)}return e.prototype.register=function(){},e}();t.default=c},function(e,t){e.exports=VideolyWidget},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}t.__esModule=!0;var s=n(2),f=o(s),a=function(e){function t(){i(this,t);var n=u(this,e.call(this));return n.name="custom-ga-reporter",n.before="video-catcher",n}return c(t,e),t.prototype.register=function(){e.prototype.register.call(this),console.log("console.log from CustomGAReporter")},t}(f.default),l=new a;t.default=l}]);