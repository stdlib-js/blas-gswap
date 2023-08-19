// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,f=n.__lookupGetter__,s=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var u,c,l,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(t,r)||s.call(t,r)?(u=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=u):t[r]=e.value),l="get"in e,p="set"in e,c&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,r,e.get),p&&a&&a.call(t,r,e.set),t};var u=r;function c(t,r,e){u(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&y.call(t,r)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(t){var r,e,n;if(null==t)return g.call(t);e=t[_],r=d(t,_);try{t[_]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[_]=e:delete t[_],n}:function(t){return g.call(t)},v=Boolean.prototype.toString;var m=h();function w(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function O(t){return l(t)||w(t)}function j(){return new Function("return this;")()}c(O,"isPrimitive",l),c(O,"isObject",w);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof I?I:null;function S(t){if(arguments.length){if(!l(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return j()}if(A)return A;if(E)return E;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}var U=S();function T(t,r,e){u(t,r,{configurable:!1,enumerable:!1,get:e})}var N={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function R(t){return Math.abs(t)}function F(t,r){return r&&(2===t||3===t)}function B(t,r){return r&&(1===t||3===t)}function L(t,r,e){var n,i,o,a,f;for(n=t.length,i=e,o=e,f=0;f<n;f++){if(0===t[f])return[e,e];(a=r[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function V(t){return t.re}function k(t){return t.im}function C(t){return"string"==typeof t}c(L,"assign",(function(t,r,e,n){var i,o,a,f,s;for(i=t.length,o=e,a=e,s=0;s<i;s++){if(0===t[s])return n[0]=e,n[1]=e,n;(f=r[s])>0?a+=f*(t[s]-1):f<0&&(o+=f*(t[s]-1))}return n[0]=o,n[1]=a,n}));var P=String.prototype.valueOf;var M=h();function G(t){return"object"==typeof t&&(t instanceof String||(M?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function D(t){return C(t)||G(t)}function Y(t){return"number"==typeof t}function $(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function J(t,r,e){var n=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+$(i):$(i)+t,n&&(t="-"+t)),t}c(D,"isPrimitive",C),c(D,"isObject",G);var W=String.prototype.toLowerCase,X=String.prototype.toUpperCase;function Z(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!isFinite(n)){if(!Y(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=J(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=J(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===X.call(t.specifier)?X.call(e):W.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function q(t){return"string"==typeof t}var z=Math.abs,H=String.prototype.toLowerCase,K=String.prototype.toUpperCase,Q=String.prototype.replace,tt=/e\+(\d)$/,rt=/e-(\d)$/,et=/^(\d+)$/,nt=/^(\d+)e/,it=/\.0$/,ot=/\.0*e/,at=/(\..*[^0])0*e/;function ft(t){var r,e,n=parseFloat(t.arg);if(!isFinite(n)){if(!Y(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":z(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=Q.call(e,at,"$1e"),e=Q.call(e,ot,"e"),e=Q.call(e,it,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=Q.call(e,tt,"e+0$1"),e=Q.call(e,rt,"e-0$1"),t.alternate&&(e=Q.call(e,et,"$1."),e=Q.call(e,nt,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=t.specifier===K.call(t.specifier)?K.call(e):H.call(e)}function st(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function ut(t,r,e){var n=r-t.length;return n<0?t:t=e?t+st(n):st(n)+t}var ct=String.fromCharCode,lt=isNaN,pt=Array.isArray;function ht(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function gt(t){var r,e,n,i,o,a,f,s,u;if(!pt(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",f=1,s=0;s<t.length;s++)if(q(n=t[s]))a+=n;else{if(r=void 0!==n.precision,!(n=ht(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,u=0;u<e.length;u++)switch(i=e.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,lt(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,lt(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Z(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!lt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=lt(o)?String(n.arg):ct(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=ft(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=J(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ut(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function dt(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function _t(t){var r,e,n,i;for(e=[],i=0,n=yt.exec(t);n;)(r=t.slice(i,yt.lastIndex-n[0].length)).length&&e.push(r),e.push(dt(n)),i=yt.lastIndex,n=yt.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function bt(t){return"string"==typeof t}function vt(t){var r,e,n;if(!bt(t))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=_t(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return gt.apply(null,e)}var mt=/[-\/\\^$*+?.()|[\]{}]/g;var wt=/./,Ot=S(),jt=Ot.document&&Ot.document.childNodes,At=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;c(Et,"REGEXP",It);var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};function St(t){return null!==t&&"object"==typeof t}function Ut(t){var r,e,n,i;if(("Object"===(e=b(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=It.exec(n.toString()))return r[1]}return St(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}c(St,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!xt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(St));var Tt="function"==typeof wt||"object"==typeof At||"function"==typeof jt?function(t){return Ut(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Ut(t).toLowerCase():r};function Nt(t){return"function"===Tt(t)}var Rt=RegExp.prototype.exec;var Ft=h();function Bt(t){return"object"==typeof t&&(t instanceof RegExp||(Ft?function(t){try{return Rt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===b(t)))}function Lt(t,r,e){if(!C(t))throw new TypeError(vt("invalid argument. First argument must be a string. Value: `%s`.",t));if(C(r))r=function(t){var r,e;if(!C(t))throw new TypeError(vt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(mt,"\\$&"):(r=(r=t.substring(1,e)).replace(mt,"\\$&"),t=t[0]+r+t.substring(e))}(r),r=new RegExp(r,"g");else if(!Bt(r))throw new TypeError(vt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!C(e)&&!Nt(e))throw new TypeError(vt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",e));return t.replace(r,e)}var Vt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var kt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null;var Pt,Mt="function"==typeof Uint8Array?Uint8Array:void 0;Pt=function(){var t,r,e;if("function"!=typeof Ct)return!1;try{r=new Ct(r=[1,3.14,-3.14,256,257]),e=r,t=(kt&&e instanceof Uint8Array||"[object Uint8Array]"===b(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Mt:function(){throw new Error("not implemented")};var Gt=Pt,Dt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null;var $t,Jt="function"==typeof Uint16Array?Uint16Array:void 0;$t=function(){var t,r,e;if("function"!=typeof Yt)return!1;try{r=new Yt(r=[1,3.14,-3.14,65536,65537]),e=r,t=(Dt&&e instanceof Uint16Array||"[object Uint16Array]"===b(e))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Jt:function(){throw new Error("not implemented")};var Wt,Xt={uint16:$t,uint8:Gt};(Wt=new Xt.uint16(1))[0]=4660;var Zt=52===new Xt.uint8(Wt.buffer)[0],qt="function"==typeof ArrayBuffer;var zt="function"==typeof Float64Array;function Ht(t){return zt&&t instanceof Float64Array||"[object Float64Array]"===b(t)}var Kt="function"==typeof Float64Array?Float64Array:null;var Qt,tr="function"==typeof Float64Array?Float64Array:void 0;Qt=function(){var t,r;if("function"!=typeof Kt)return!1;try{t=Ht(r=new Kt([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?tr:function(){throw new Error("not implemented")};var rr=Qt,er="function"==typeof ArrayBuffer?ArrayBuffer:null;var nr,ir="function"==typeof ArrayBuffer?ArrayBuffer:void 0;nr=function(){var t,r,e,n;if("function"!=typeof er)return!1;try{e=new er(16),n=e,(t=(qt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===b(n))&&"function"==typeof er.isView)&&((r=new rr(e))[0]=-3.14,r[1]=NaN,t=t&&er.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?ir:function(){throw new Error("not implemented")};var or=nr,ar="function"==typeof DataView;var fr="function"==typeof DataView?DataView:null;var sr,ur="function"==typeof DataView?DataView:void 0;sr=function(){var t,r,e,n;if("function"!=typeof fr)return!1;try{e=new or(24),r=new fr(e,8),n=r,(t=(ar&&n instanceof DataView||"[object DataView]"===b(n))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?ur:function(){throw new Error("not implemented")};var cr=sr,lr="function"==typeof BigInt?BigInt:void 0,pr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function hr(){return pr.slice()}function gr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function yr(t,r,e){u(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function dr(t){return Object.keys(Object(t))}var _r=void 0!==Object.keys;function br(t){return"[object Arguments]"===b(t)}var vr=function(){return br(arguments)}();function mr(t){return"number"==typeof t}var wr=Number,Or=wr.prototype.toString;var jr=h();function Ar(t){return"object"==typeof t&&(t instanceof wr||(jr?function(t){try{return Or.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function Er(t){return mr(t)||Ar(t)}function Ir(t){return t!=t}function xr(t){return mr(t)&&Ir(t)}function Sr(t){return Ar(t)&&Ir(t.valueOf())}function Ur(t){return xr(t)||Sr(t)}c(Er,"isPrimitive",mr),c(Er,"isObject",Ar),c(Ur,"isPrimitive",xr),c(Ur,"isObject",Sr);var Tr=Number.POSITIVE_INFINITY,Nr=wr.NEGATIVE_INFINITY,Rr=Math.floor;function Fr(t){return Rr(t)===t}function Br(t){return t<Tr&&t>Nr&&Fr(t)}function Lr(t){return mr(t)&&Br(t)}function Vr(t){return Ar(t)&&Br(t.valueOf())}function kr(t){return Lr(t)||Vr(t)}c(kr,"isPrimitive",Lr),c(kr,"isObject",Vr);var Cr=Object.prototype.propertyIsEnumerable;var Pr=!Cr.call("beep","0");function Mr(t,r){var e;return null!=t&&(!(e=Cr.call(t,r))&&Pr&&D(t)?!xr(r=+r)&&Lr(r)&&r>=0&&r<t.length:e)}var Gr=vr?br:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&Fr(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!Mr(t,"callee")},Dr=Array.prototype.slice;var Yr=Mr((function(){}),"prototype"),$r=!Mr({toString:null},"toString");function Jr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Fr(t.length)&&t.length>=0&&t.length<=9007199254740991}function Wr(t,r,e){var n,i;if(!Jr(t)&&!C(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Lr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(Ur(r)){for(;i<n;i++)if(Ur(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1}function Xr(t){return t.constructor&&t.constructor.prototype===t}var Zr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],qr="undefined"==typeof window?void 0:window;var zr=function(){var t;if("undefined"===Tt(qr))return!1;for(t in qr)try{-1===Wr(Zr,t)&&d(qr,t)&&null!==qr[t]&&"object"===Tt(qr[t])&&Xr(qr[t])}catch(t){return!0}return!1}(),Hr="undefined"!=typeof window;var Kr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Qr=_r?function(){return 2!==(dr(arguments)||"").length}(1,2)?function(t){return Gr(t)?dr(Dr.call(t)):dr(t)}:dr:function(t){var r,e,n,i,o,a,f;if(i=[],Gr(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!St(t))return i;e=Yr&&n}for(o in t)e&&"prototype"===o||!d(t,o)||i.push(String(o));if($r)for(r=function(t){if(!1===Hr&&!zr)return Xr(t);try{return Xr(t)}catch(t){return!1}}(t),f=0;f<Kr.length;f++)a=Kr[f],r&&"constructor"===a||!d(t,a)||i.push(String(a));return i};c(hr,"enum",gr),function(t,r){var e,n,i;for(e=Qr(r),i=0;i<e.length;i++)yr(t,n=e[i],r[n])}(hr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var te=["row-major","column-major"];function re(){return{"row-major":1,"column-major":2}}c((function(){return te.slice()}),"enum",re);var ee=["throw","clamp","wrap"];function ne(){return{throw:1,clamp:2,wrap:3}}c((function(){return ee.slice()}),"enum",ne);var ie={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},oe={"row-major":1,"column-major":2},ae={throw:1,clamp:2,wrap:3};var fe=new Gt(8),se=new cr(fe.buffer);function ue(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<fe.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=Rr(t/4294967296),Zt?(se.setUint32(0,o,Zt),se.setUint32(4,i,Zt)):(se.setUint32(0,i,Zt),se.setUint32(4,o,Zt)),a=0;a<fe.length;a++)r[n]=fe[a],n+=e;return r}c((function(t){var r,e,n,i;return r=new Gt(8),0===t||(i=(4294967295&t)>>>0,n=Rr(t/4294967296),e=new cr(r.buffer),Zt?(e.setUint32(0,i,Zt),e.setUint32(4,n,Zt)):(e.setUint32(0,n,Zt),e.setUint32(4,i,Zt))),r}),"assign",ue);var ce={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},le={"row-major":1,"column-major":2},pe={throw:1,clamp:2,wrap:3};function he(t,r,e,n,i,o){var a,f,s,u,c;if(!(this instanceof he))return new he(t,r,e,n,i,o);for(u=1,c=0;c<e.length;c++)u*=e[c];return f=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*u:null,this._byteLength=f,this._bytesPerElement=function(t){return N[t]||null}(t),this._buffer=r,this._dtype=t,this._length=u,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=Boolean(r.get&&r.set),this._iterationOrder=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0}(n),a=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=L(r,e,n))[1]-o[0]+1}(u,e,n,i,this._iterationOrder),s=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=R(t[0]),a=1;a<e;a++){if(o=R(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:B(s,a),COLUMN_MAJOR_CONTIGUOUS:F(s,a),READONLY:!1},this.__meta_dataview__=null,this}function ge(t){return t instanceof he||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}c(he,"name","ndarray"),T(he.prototype,"byteLength",(function(){return this._byteLength})),T(he.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),T(he.prototype,"data",(function(){return this._buffer})),T(he.prototype,"dtype",(function(){return this._dtype})),T(he.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),T(he.prototype,"length",(function(){return this._length})),T(he.prototype,"ndims",(function(){return this._ndims})),T(he.prototype,"offset",(function(){return this._offset})),T(he.prototype,"order",(function(){return this._order})),T(he.prototype,"shape",(function(){return this._shape.slice()})),T(he.prototype,"strides",(function(){return this._strides.slice()})),c(he.prototype,"get",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(he.prototype,"iget",(function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(he.prototype,"set",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this})),c(he.prototype,"iset",(function(t,r){var e,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this})),c(he.prototype,"toString",(function(){var t,r,e,n,i,o;if(r=this._shape.length,e="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=V(i=this.iget(o))+", "+k(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=V(i=this.iget(o))+", "+k(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=V(i=this.iget(this._length-1-o))+", "+k(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(e+=Lt(Vt[this.dtype],"{{data}}",t),e+=", ",e+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",e+=", ",e+="[ ",0===r)e+="0";else for(o=0;o<r;o++)this._strides[o]<0?e+=-this._strides[o]:e+=this._strides[o],o<r-1&&(e+=", ");return e+=" ]",e+=", ",e+="0",e+=", ",e+="'"+this._order+"'",e+=" )"})),c(he.prototype,"toJSON",(function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(V(e),k(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t})),c(he.prototype,"__array_meta_dataview__","function"==typeof U.BigInt&&"function"==typeof BigInt&&"bigint"==typeof U.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,r,e,n,i,o,a,f,s,u,c,l,p,h;if(s=this._mode||"throw",a=this._submode||[s],e=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===e)return f;for(f=new cr(new or(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,u=0,f.setInt8(u,Zt?1:0),u+=1,f.setInt16(u,ie[n],Zt),u+=2,f.setBigInt64(u,lr(l),Zt),c=8*l,u+=8,h=0;h<l;h++)f.setBigInt64(u,lr(i[h]),Zt),f.setBigInt64(u+c,lr(o[h]*t),Zt),u+=8;for(u+=c,f.setBigInt64(u,lr(this._offset*t),Zt),u+=8,f.setInt8(u,oe[this._order]),u+=1,f.setInt8(u,ae[s]),u+=1,f.setBigInt64(u,lr(p),Zt),u+=8,h=0;h<p;h++)f.setInt8(u,ae[a[h]]),u+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(u,r,Zt),this.__meta_dataview__=f,f}:function(){var t,r,e,n,i,o,a,f,s,u,c,l,p,h,g;if(u=this._mode||"throw",f=this._submode||[u],n=33+16*(p=this._ndims)+(h=f.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new cr(new or(n)),r=new Gt(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,Zt?1:0),c+=1,s.setInt16(c,ce[i],Zt),ue(p,r,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)ue(o[g],r,1,c),ue(a[g]*t,r,1,c+l),c+=8;for(c+=l,ue(this._offset*t,r,1,c),c+=8,s.setInt8(c,le[this._order]),c+=1,s.setInt8(c,pe[u]),ue(h,r,1,c+=1),c+=8,g=0;g<h;g++)s.setInt8(c,pe[f[g]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,s.setInt32(c,e,Zt),this.__meta_dataview__=s,s});var ye="function"==typeof Float32Array;function de(t){return ye&&t instanceof Float32Array||"[object Float32Array]"===b(t)}function _e(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function be(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){if(this instanceof t){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(r,e);return new n}return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}function ve(t,r){for(var e=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}var me=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,we=function(t){return me.exec(t).slice(1)};function Oe(){for(var t="",r=!1,e=arguments.length-1;e>=-1&&!r;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,r="/"===n.charAt(0))}return(r?"/":"")+(t=ve(Ne(t.split("/"),(function(t){return!!t})),!r).join("/"))||"."}function je(t){var r=Ae(t),e="/"===Re(t,-1);return(t=ve(Ne(t.split("/"),(function(t){return!!t})),!r).join("/"))||r||(t="."),t&&e&&(t+="/"),(r?"/":"")+t}function Ae(t){return"/"===t.charAt(0)}function Ee(){var t=Array.prototype.slice.call(arguments,0);return je(Ne(t,(function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function Ie(t,r){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var e=t.length-1;e>=0&&""===t[e];e--);return r>e?[]:t.slice(r,e-r+1)}t=Oe(t).substr(1),r=Oe(r).substr(1);for(var n=e(t.split("/")),i=e(r.split("/")),o=Math.min(n.length,i.length),a=o,f=0;f<o;f++)if(n[f]!==i[f]){a=f;break}var s=[];for(f=a;f<n.length;f++)s.push("..");return(s=s.concat(i.slice(a))).join("/")}function xe(t){var r=we(t),e=r[0],n=r[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function Se(t,r){var e=we(t)[2];return r&&e.substr(-1*r.length)===r&&(e=e.substr(0,e.length-r.length)),e}function Ue(t){return we(t)[3]}var Te={extname:Ue,basename:Se,dirname:xe,sep:"/",delimiter:":",relative:Ie,join:Ee,isAbsolute:Ae,normalize:je,resolve:Oe};function Ne(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}var Re="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)},Fe=be(Object.freeze({__proto__:null,basename:Se,default:Te,delimiter:":",dirname:xe,extname:Ue,isAbsolute:Ae,join:Ee,normalize:je,relative:Ie,resolve:Oe,sep:"/"}));var Be,Le=Object.getPrototypeOf;Be=Nt(Object.getPrototypeOf)?Le:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===b(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ve=Be;function ke(t){return null==t?null:(t=Object(t),Ve(t))}function Ce(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===b(t))return!0;t=ke(t)}return!1}function Pe(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Ce(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}function Me(t,r,e,n,i){var o,a,f,s,u,c;if(t<=0)return n;if(1===e&&1===i){if((s=t%3)>0)for(u=0;u<s;u++)o=r[u],r[u]=n[u],n[u]=o;if(t<3)return n;for(u=s;u<t;u+=3)o=r[u],r[u]=n[u],n[u]=o,o=r[c=u+1],r[c]=n[c],n[c]=o,o=r[c+=1],r[c]=n[c],n[c]=o;return n}for(a=e<0?(1-t)*e:0,f=i<0?(1-t)*i:0,u=0;u<t;u++)o=r[a],r[a]=n[f],n[f]=o,a+=e,f+=i;return n}c(Me,"ndarray",(function(t,r,e,n,i,o,a){var f,s,u,c,l;if(t<=0)return i;if(s=n,u=a,1===e&&1===o){if((c=t%3)>0)for(l=0;l<c;l++)f=r[s],r[s]=i[u],i[u]=f,s+=e,u+=o;if(t<3)return i;for(l=c;l<t;l+=3)f=r[s],r[s]=i[u],i[u]=f,f=r[s+1],r[s+1]=i[u+1],i[u+1]=f,f=r[s+2],r[s+2]=i[u+2],i[u+2]=f,s+=3,u+=3;return i}for(l=0;l<t;l++)f=r[s],r[s]=i[u],i[u]=f,s+=e,u+=o;return i}));var Ge,De=Pe((0,Fe.join)("/home/runner/work/blas-gswap/blas-gswap/node_modules/@stdlib/blas-base-dswap/lib","./native.js"));Ge=Ce(De)?Me:De;const{ndarray:Ye}=Ge;function $e(t,r,e,n,i){var o,a,f,s,u,c;if(t<=0)return n;if(1===e&&1===i){if((s=t%3)>0)for(u=0;u<s;u++)o=r[u],r[u]=n[u],n[u]=o;if(t<3)return n;for(u=s;u<t;u+=3)o=r[u],r[u]=n[u],n[u]=o,o=r[c=u+1],r[c]=n[c],n[c]=o,o=r[c+=1],r[c]=n[c],n[c]=o;return n}for(a=e<0?(1-t)*e:0,f=i<0?(1-t)*i:0,u=0;u<t;u++)o=r[a],r[a]=n[f],n[f]=o,a+=e,f+=i;return n}c($e,"ndarray",(function(t,r,e,n,i,o,a){var f,s,u,c,l;if(t<=0)return i;if(s=n,u=a,1===e&&1===o){if((c=t%3)>0)for(l=0;l<c;l++)f=r[s],r[s]=i[u],i[u]=f,s+=e,u+=o;if(t<3)return i;for(l=c;l<t;l+=3)f=r[s],r[s]=i[u],i[u]=f,f=r[s+1],r[s+1]=i[u+1],i[u+1]=f,f=r[s+2],r[s+2]=i[u+2],i[u+2]=f,s+=3,u+=3;return i}for(l=0;l<t;l++)f=r[s],r[s]=i[u],i[u]=f,s+=e,u+=o;return i}));var Je,We=Pe((0,Fe.join)("/home/runner/work/blas-gswap/blas-gswap/node_modules/@stdlib/blas-base-sswap/lib","./native.js"));Je=Ce(We)?$e:We;const{ndarray:Xe}=Je;function Ze(t,r){return t[r]}function qe(t,r){return t.get(r)}function ze(t,r,e){t[r]=e}function He(t,r,e){t.set(e,r)}function Ke(t){var r=Boolean(t.get&&t.set);return{data:t,accessors:r,getter:r?qe:Ze,setter:r?He:ze}}function Qe(t,r,e,n,i,o,a){var f,s,u,c,l,p,h,g;for(f=r.data,s=i.data,c=r.getter,u=i.setter,p=n,h=a,g=0;g<t;g++)l=c(f,p),u(f,p,c(s,h)),u(s,h,l),p+=e,h+=o;return r}function tn(t,r,e,n,i,o,a){var f,s,u,c,l,p,h;if(t<=0)return i;if(c=Ke(r),l=Ke(i),c.accessors||l.accessors)return Qe(t,c,e,n,l,o,a),l.data;if(s=n,u=a,1===e&&1===o){if((p=t%3)>0)for(h=0;h<p;h++)f=r[s],r[s]=i[u],i[u]=f,s+=e,u+=o;if(t<3)return i;for(h=p;h<t;h+=3)f=r[s],r[s]=i[u],i[u]=f,f=r[s+1],r[s+1]=i[u+1],i[u+1]=f,f=r[s+2],r[s+2]=i[u+2],i[u+2]=f,s+=3,u+=3;return i}for(h=0;h<t;h++)f=r[s],r[s]=i[u],i[u]=f,s+=e,u+=o;return i}function rn(t,r){var e,n,i,o,a,f,s,u;if(a=ge(t),s=ge(r),f=a&&1===t.ndims&&1===t.strides.length,u=s&&1===r.ndims&&1===r.strides.length,f)n=!(e=Ht(t.data))&&de(t.data);else{if(!1!==a||!Jr(t))throw new TypeError(_e("0G73T,F6",t));n=!(e=Ht(t))&&de(t)}if(u)o=!(i=Ht(r.data))&&de(r.data);else{if(!1!==s||!Jr(r))throw new TypeError(_e("0G73U,F7",r));o=!(i=Ht(r))&&de(r)}if(t.length!==r.length)throw new RangeError(_e("0G73S,F8",t.length,r.length));return f&&u?e&&i?(Ye(t.length,t.data,t.strides[0],t.offset,r.data,r.strides[0],r.offset),r):n&&o?(Xe(t.length,t.data,t.strides[0],t.offset,r.data,r.strides[0],r.offset),r):(tn(t.length,t.data,t.strides[0],t.offset,r.data,r.strides[0],r.offset),r):f?(tn(t.length,t.data,t.strides[0],t.offset,r,1,0),r):u?(tn(t.length,t,1,0,r.data,r.strides[0],r.offset),r):(tn(t.length,t,1,0,r,1,0),r)}c((function(t,r,e,n,i){var o,a,f,s,u,c,l,p;if(t<=0)return n;if(s=Ke(r),u=Ke(n),s.accessors||u.accessors)return Qe(t,s,e,a=e<0?(1-t)*e:0,u,i,f=i<0?(1-t)*i:0),u.data;if(1===e&&1===i){if((c=t%3)>0)for(l=0;l<c;l++)o=r[l],r[l]=n[l],n[l]=o;if(t<3)return n;for(l=c;l<t;l+=3)o=r[l],r[l]=n[l],n[l]=o,o=r[p=l+1],r[p]=n[p],n[p]=o,o=r[p+=1],r[p]=n[p],n[p]=o;return n}for(a=e<0?(1-t)*e:0,f=i<0?(1-t)*i:0,l=0;l<t;l++)o=r[a],r[a]=n[f],n[f]=o,a+=e,f+=i;return n}),"ndarray",tn);export{rn as default};
//# sourceMappingURL=mod.js.map
