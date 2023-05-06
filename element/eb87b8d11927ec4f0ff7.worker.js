!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=4)}([function(t,r,e){"use strict";var n,o=this&&this.__extends||(n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])},n(t,r)},function(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)});Object.defineProperty(r,"__esModule",{value:!0});var a=function(t){function r(r){var e=t.call(this,r)||this;return e.name="ValidationError",e.message=r,e}return o(r,t),r}(Error);r.ValidationError=a},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"];r.decode83=function(t){for(var r=0,e=0;e<t.length;e++){var o=t[e];r=83*r+n.indexOf(o)}return r},r.encode83=function(t,r){for(var e="",o=1;o<=r;o++){var a=Math.floor(t)/Math.pow(83,r-o)%83;e+=n[Math.floor(a)]}return e}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sRGBToLinear=function(t){var r=t/255;return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},r.linearTosRGB=function(t){var r=Math.max(0,Math.min(1,t));return r<=.0031308?Math.round(12.92*r*255+.5):Math.round(255*(1.055*Math.pow(r,1/2.4)-.055)+.5)},r.sign=function(t){return t<0?-1:1},r.signPow=function(t,e){return r.sign(t)*Math.pow(Math.abs(t),e)}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(5);r.decode=n.default,r.isBlurhashValid=n.isBlurhashValid;var o=e(6);r.encode=o.default,function(t){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])}(e(0))},function(t,r,e){"use strict";e.r(r);var n=e(3);const o=self;o.addEventListener("message",(t=>{const{seq:r,imageData:e}=t.data,a=Object(n.encode)(e.data,e.width,e.height,e.width>=e.height?4:3,e.height>=e.width?4:3);o.postMessage({seq:r,blurhash:a})}))},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(1),o=e(2),a=e(0),i=function(t){if(!t||t.length<6)throw new a.ValidationError("The blurhash string must be at least 6 characters");var r=n.decode83(t[0]),e=Math.floor(r/9)+1,o=r%9+1;if(t.length!==4+2*o*e)throw new a.ValidationError("blurhash length mismatch: length is "+t.length+" but it should be "+(4+2*o*e))};r.isBlurhashValid=function(t){try{i(t)}catch(t){return{result:!1,errorReason:t.message}}return{result:!0}};var u=function(t){var r=t>>16,e=t>>8&255,n=255&t;return[o.sRGBToLinear(r),o.sRGBToLinear(e),o.sRGBToLinear(n)]},s=function(t,r){var e=Math.floor(t/361),n=Math.floor(t/19)%19,a=t%19;return[o.signPow((e-9)/9,2)*r,o.signPow((n-9)/9,2)*r,o.signPow((a-9)/9,2)*r]};r.default=function(t,r,e,a){i(t),a|=1;for(var f=n.decode83(t[0]),c=Math.floor(f/9)+1,l=f%9+1,h=(n.decode83(t[1])+1)/166,d=new Array(l*c),M=0;M<d.length;M++)if(0===M){var v=n.decode83(t.substring(2,6));d[M]=u(v)}else{v=n.decode83(t.substring(4+2*M,6+2*M));d[M]=s(v,h*a)}for(var p=4*r,g=new Uint8ClampedArray(p*e),b=0;b<e;b++)for(var m=0;m<r;m++){for(var y=0,w=0,_=0,P=0;P<c;P++)for(M=0;M<l;M++){var O=Math.cos(Math.PI*m*M/r)*Math.cos(Math.PI*b*P/e),B=d[M+P*l];y+=B[0]*O,w+=B[1]*O,_+=B[2]*O}var T=o.linearTosRGB(y),j=o.linearTosRGB(w),x=o.linearTosRGB(_);g[4*m+0+b*p]=T,g[4*m+1+b*p]=j,g[4*m+2+b*p]=x,g[4*m+3+b*p]=255}return g}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(1),o=e(2),a=e(0);r.default=function(t,r,e,i,u){if(i<1||i>9||u<1||u>9)throw new a.ValidationError("BlurHash must have between 1 and 9 components");if(r*e*4!==t.length)throw new a.ValidationError("Width and height must match the pixels array");for(var s=[],f=function(n){for(var a=function(a){var i=0==a&&0==n?1:2,u=function(t,r,e,n){for(var a=0,i=0,u=0,s=4*r,f=0;f<r;f++)for(var c=0;c<e;c++){var l=n(f,c);a+=l*o.sRGBToLinear(t[4*f+0+c*s]),i+=l*o.sRGBToLinear(t[4*f+1+c*s]),u+=l*o.sRGBToLinear(t[4*f+2+c*s])}var h=1/(r*e);return[a*h,i*h,u*h]}(t,r,e,(function(t,o){return i*Math.cos(Math.PI*a*t/r)*Math.cos(Math.PI*n*o/e)}));s.push(u)},u=0;u<i;u++)a(u)},c=0;c<u;c++)f(c);var l,h,d=s[0],M=s.slice(1),v="",p=i-1+9*(u-1);if(v+=n.encode83(p,1),M.length>0){var g=Math.max.apply(Math,M.map((function(t){return Math.max.apply(Math,t)}))),b=Math.floor(Math.max(0,Math.min(82,Math.floor(166*g-.5))));l=(b+1)/166,v+=n.encode83(b,1)}else l=1,v+=n.encode83(0,1);return v+=n.encode83((h=d,(o.linearTosRGB(h[0])<<16)+(o.linearTosRGB(h[1])<<8)+o.linearTosRGB(h[2])),4),M.forEach((function(t){v+=n.encode83(function(t,r){return 19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*o.signPow(t[0]/r,.5)+9.5))))*19+19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*o.signPow(t[1]/r,.5)+9.5))))+Math.floor(Math.max(0,Math.min(18,Math.floor(9*o.signPow(t[2]/r,.5)+9.5))))}(t,l),2)})),v}}]);
//# sourceMappingURL=eb87b8d11927ec4f0ff7.worker.js.map