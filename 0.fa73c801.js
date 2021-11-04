(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6loI":function(A,e,t){"use strict";(function(A){
/*!
 * hash-wasm (https://www.npmjs.com/package/hash-wasm)
 * (c) Dani Biro
 * @license MIT
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function n(A,e,t,n){return new(t||(t=Promise))((function(a,i){function r(A){try{B(n.next(A))}catch(A){i(A)}}function o(A){try{B(n.throw(A))}catch(A){i(A)}}function B(A){var e;A.done?a(A.value):(e=A.value,e instanceof t?e:new t((function(A){A(e)}))).then(r,o)}B((n=n.apply(A,e||[])).next())}))}t.d(e,"a",(function(){return S}));class a{constructor(){this.mutex=Promise.resolve()}lock(){let A=()=>{};return this.mutex=this.mutex.then(()=>new Promise(A)),new Promise(e=>{A=e})}dispatch(A){return n(this,void 0,void 0,(function*(){const e=yield this.lock();try{return yield Promise.resolve(A())}finally{e()}}))}}var i;const r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:A,o=null!==(i=r.Buffer)&&void 0!==i?i:null,B=r.TextEncoder?new r.TextEncoder:null;function c(A,e){return(15&A)+(A>>6|A>>3&8)<<4|(15&e)+(e>>6|e>>3&8)}function I(A,e){const t=e.length>>1;for(let n=0;n<t;n++){const t=n<<1;A[n]=c(e.charCodeAt(t),e.charCodeAt(t+1))}}const g="a".charCodeAt(0)-10,E="0".charCodeAt(0);function s(A,e,t){let n=0;for(let a=0;a<t;a++){let t=e[a]>>>4;A[n++]=t>9?t+g:t+E,t=15&e[a],A[n++]=t>9?t+g:t+E}return String.fromCharCode.apply(null,A)}const Q=null!==o?A=>{if("string"==typeof A){const e=o.from(A,"utf8");return new Uint8Array(e.buffer,e.byteOffset,e.length)}if(o.isBuffer(A))return new Uint8Array(A.buffer,A.byteOffset,A.length);if(ArrayBuffer.isView(A))return new Uint8Array(A.buffer,A.byteOffset,A.byteLength);throw new Error("Invalid data type!")}:A=>{if("string"==typeof A)return B.encode(A);if(ArrayBuffer.isView(A))return new Uint8Array(A.buffer,A.byteOffset,A.byteLength);throw new Error("Invalid data type!")},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=new Uint8Array(256);for(let A=0;A<l.length;A++)h[l.charCodeAt(A)]=A;function f(A){let e=Math.floor(.75*A.length);const t=A.length;return"="===A[t-1]&&(e-=1,"="===A[t-2]&&(e-=1)),e}function p(A){const e=f(A),t=A.length,n=new Uint8Array(e);let a=0;for(let e=0;e<t;e+=4){const t=h[A.charCodeAt(e)],i=h[A.charCodeAt(e+1)],r=h[A.charCodeAt(e+2)],o=h[A.charCodeAt(e+3)];n[a]=t<<2|i>>4,a+=1,n[a]=(15&i)<<4|r>>2,a+=1,n[a]=(3&r)<<6|63&o,a+=1}return n}const d=new a,u=new Map;function y(A,e){return n(this,void 0,void 0,(function*(){let t=null,a=null,i=!1;if("undefined"==typeof WebAssembly)throw new Error("WebAssembly is not supported in this environment!");const r=()=>new DataView(t.exports.memory.buffer).getUint32(t.exports.STATE_SIZE,!0),o=d.dispatch(()=>n(this,void 0,void 0,(function*(){if(!u.has(A.name)){const e=p(A.data),t=WebAssembly.compile(e);u.set(A.name,t)}const e=yield u.get(A.name);t=yield WebAssembly.instantiate(e,{})}))),B=(A=null)=>{i=!0,t.exports.Hash_Init(A)},g=A=>{if(!i)throw new Error("update() called before init()");(A=>{let e=0;for(;e<A.length;){const n=A.subarray(e,e+16384);e+=n.length,a.set(n),t.exports.Hash_Update(n.length)}})(Q(A))},E=new Uint8Array(2*e),l=(A,n=null)=>{if(!i)throw new Error("digest() called before init()");return i=!1,t.exports.Hash_Final(n),"binary"===A?a.slice(0,e):s(E,a,e)},h=A=>"string"==typeof A?A.length<4096:A.byteLength<16384;let f=h;switch(A.name){case"argon2":case"scrypt":f=()=>!0;break;case"blake2b":case"blake2s":f=(A,e)=>e<=512&&h(A);break;case"blake3":f=(A,e)=>0===e&&h(A);break;case"xxhash64":case"xxhash3":case"xxhash128":f=()=>!1}return yield(()=>n(this,void 0,void 0,(function*(){t||(yield o);const A=t.exports.Hash_GetBuffer(),e=t.exports.memory.buffer;a=new Uint8Array(e,A,16384)})))(),{getMemory:()=>a,writeMemory:(A,e=0)=>{a.set(A,e)},getExports:()=>t.exports,setMemorySize:A=>{t.exports.Hash_SetMemorySize(A);const e=t.exports.Hash_GetBuffer(),n=t.exports.memory.buffer;a=new Uint8Array(n,e,A)},init:B,update:g,digest:l,save:()=>{if(!i)throw new Error("save() can only be called after init() and before digest()");const e=t.exports.Hash_GetState(),n=r(),a=t.exports.memory.buffer,o=new Uint8Array(a,e,n),B=new Uint8Array(4+n);return I(B,A.hash),B.set(o,4),B},load:e=>{if(!(e instanceof Uint8Array))throw new Error("load() expects an Uint8Array generated by save()");const n=t.exports.Hash_GetState(),a=r(),o=4+a,B=t.exports.memory.buffer;if(e.length!==o)throw new Error(`Bad state length (expected ${o} bytes, got ${e.length})`);if(!function(A,e){if(A.length!==2*e.length)return!1;for(let t=0;t<e.length;t++){const n=t<<1;if(e[t]!==c(A.charCodeAt(n),A.charCodeAt(n+1)))return!1}return!0}(A.hash,e.subarray(0,4)))throw new Error("This state was written by an incompatible hash implementation");const I=e.subarray(4);new Uint8Array(B,n,a).set(I),i=!0},calculate:(A,n=null,i=null)=>{if(!f(A,n))return B(n),g(A),l("hex",i);const r=Q(A);return a.set(r),t.exports.Hash_Calculate(r.length,n,i),s(E,a,e)},hashLength:e}}))}function C(A,e,t){return n(this,void 0,void 0,(function*(){const n=yield A.lock(),a=yield y(e,t);return n(),a}))}new a;new a;new DataView(new ArrayBuffer(4));new a;new a;new a;new a;new a;var q={name:"md5",data:"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",hash:"9b0fac7d"};const w=new a;let F=null;function S(A){if(null===F)return C(w,q,16).then(e=>(F=e,F.calculate(A)));try{const e=F.calculate(A);return Promise.resolve(e)}catch(A){return Promise.reject(A)}}new a;new a;new a;new a;new a;new a;new a;new a;new a;new ArrayBuffer(8);new a;new ArrayBuffer(8);new a;new ArrayBuffer(8);new a;new a;new a}).call(this,t("yLpj"))},SNXF:function(A,e,t){"use strict";var n=t("8r9s"),a={name:"Avatar",props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":null!=this.image,"p-avatar-circle":"circle"===this.shape,"p-avatar-lg":"large"===this.size,"p-avatar-xl":"xlarge"===this.size}]},iconClass(){return["p-avatar-icon",this.icon]}}};const i={key:0,class:"p-avatar-text"};!function(A,e){void 0===e&&(e={});var t=e.insertAt;if(A&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=A:a.appendChild(document.createTextNode(A))}}("\n.p-avatar {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 2rem;\n    height: 2rem;\n    font-size: 1rem;\n}\n.p-avatar.p-avatar-image {\n    background-color: transparent;\n}\n.p-avatar.p-avatar-circle {\n    border-radius: 50%;\n}\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n.p-avatar .p-avatar-icon {\n    font-size: 1rem;\n}\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n"),a.render=function(A,e,t,a,r,o){return Object(n.openBlock)(),Object(n.createBlock)("div",{class:o.containerClass},[Object(n.renderSlot)(A.$slots,"default",{},()=>[t.label?(Object(n.openBlock)(),Object(n.createBlock)("span",i,Object(n.toDisplayString)(t.label),1)):t.icon?(Object(n.openBlock)(),Object(n.createBlock)("span",{key:1,class:o.iconClass},null,2)):t.image?(Object(n.openBlock)(),Object(n.createBlock)("img",{key:2,src:t.image},null,8,["src"])):Object(n.createCommentVNode)("",!0)])],2)},e.a=a}}]);