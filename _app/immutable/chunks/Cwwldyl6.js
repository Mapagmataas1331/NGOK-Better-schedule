import{x as P,y as z,z as B,A as O,B as R,C as U,D as W,E as G,F as J,U as Z,k as $,G as K,f as I,m as D,p as Q,H as X,a as Y,g as ee,e as ne,I as te,J as A}from"./l9_l0KjY.js";import{q as se,d as k,a as w,h as re,i as oe,m as ie,u as ue,l as fe,g as ce}from"./BNrqeJGM.js";import{m as L,w as le,I as ae,a as de}from"./4bHth-hY.js";import{c as ge}from"./eiRpMl07.js";function me(e,n,r){P&&z();var i=e,o=Z,f,c=B()?O:R;U(()=>{c(o,o=n())&&(f&&W(f),f=G(()=>r(i)))}),P&&(i=J)}function xe(e,n,r=n){var i=B();se(e,"input",o=>{var f=o?e.defaultValue:e.value;if(f=T(e)?E(f):f,r(f),i&&f!==(f=n())){var c=e.selectionStart,g=e.selectionEnd;e.value=f??"",g!==null&&(e.selectionStart=c,e.selectionEnd=Math.min(g,e.value.length))}}),(P&&e.defaultValue!==e.value||$(n)==null&&e.value)&&r(T(e)?E(e.value):e.value),K(()=>{var o=n();T(e)&&o===E(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function T(e){var n=e.type;return n==="number"||n==="range"}function E(e){return e===""?null:+e}function he(e,n){var r=k(),i=I(r);me(i,()=>n.children,o=>{var f=k(),c=I(f);L(c,()=>n.children??D),w(o,f)}),w(e,r)}function Ce(e,n){Q(n,!0);let r=re(n,"to",3,"body");const i=X();let o=ne(f);function f(){if(!ge||n.disabled)return null;let a=null;return typeof r()=="string"?a=document.querySelector(r()):(r()instanceof HTMLElement||r()instanceof DocumentFragment)&&(a=r()),a}let c;function g(){c&&(ue(c),c=null)}le([()=>ee(o),()=>n.disabled],([a,_])=>{if(!a||_){g();return}return c=ie(he,{target:a,props:{children:n.children},context:i}),()=>{g()}});var p=k(),d=I(p);{var y=a=>{var _=k(),M=I(_);L(M,()=>n.children??D),w(a,_)};oe(d,a=>{n.disabled&&a(y)})}w(e,p),Y()}function Te(e,n){const r=[];for(let i=0;i<e.length;i+=n)r.push(e.slice(i,i+n));return r}function Ee(e,n){return e>=0&&e<n.length}function Pe(e,n,r=!0){if(!(e.length===0||n<0||n>=e.length))return e.length===1&&n===0?e[0]:n===e.length-1?r?e[0]:void 0:e[n+1]}function Se(e,n,r=!0){if(!(e.length===0||n<0||n>=e.length))return e.length===1&&n===0?e[0]:n===0?r?e[e.length-1]:void 0:e[n-1]}function Ae(e,n,r,i=!0){if(e.length===0||n<0||n>=e.length)return;let o=n+r;return i?o=(o%e.length+e.length)%e.length:o=Math.max(0,Math.min(o,e.length-1)),e[o]}function He(e,n,r,i=!0){if(e.length===0||n<0||n>=e.length)return;let o=n-r;return i?o=(o%e.length+e.length)%e.length:o=Math.max(0,Math.min(o,e.length-1)),e[o]}function Ne(e,n,r){const o=n.length>1&&Array.from(n).every(d=>d===n[0])?n[0]:n,f=r?e.indexOf(r):-1;let c=pe(e,Math.max(f,0));o.length===1&&(c=c.filter(d=>d!==r));const p=c.find(d=>d==null?void 0:d.toLowerCase().startsWith(o.toLowerCase()));return p!==r?p:void 0}function pe(e,n){return e.map((r,i)=>e[(n+i)%e.length])}function qe(e,n){const r=fe(n,["children","$$slots","$$events","$$legacy"]);ae(e,ce({name:"check"},()=>r,{iconNode:[["path",{d:"M20 6 9 17l-5-5"}]],children:(o,f)=>{var c=k(),g=I(c);de(g,n,"default",{},null),w(o,c)},$$slots:{default:!0}}))}function Be(...e){return e.filter(Boolean).join(" ")}const H=typeof document<"u";function N(e){const n=te(e);function r(o){H&&n.set(o)}function i(o){H&&n.update(o)}return{subscribe:n.subscribe,set:r,update:i}}let q=0;function ve(){const e=N([]),n=N([]);function r(s){e.update(t=>[s,...t])}function i(s){var S;const{message:t,...u}=s,m=typeof(s==null?void 0:s.id)=="number"||s.id&&((S=s.id)==null?void 0:S.length)>0?s.id:q++,v=s.dismissable===void 0?!0:s.dismissable,l=s.type===void 0?"default":s.type;return A(e).find(x=>x.id===m)?e.update(x=>x.map(C=>C.id===m?{...C,...s,id:m,title:t,dismissable:v,type:l,updated:!0}:{...C,updated:!1})):r({...u,id:m,title:t,dismissable:v,type:l}),m}function o(s){if(s===void 0){e.update(t=>t.map(u=>({...u,dismiss:!0})));return}return e.update(t=>t.map(u=>u.id===s?{...u,dismiss:!0}:u)),s}function f(s){if(s===void 0){e.set([]);return}return e.update(t=>t.filter(u=>u.id!==s)),s}function c(s,t){return i({...t,type:"default",message:s})}function g(s,t){return i({...t,type:"error",message:s})}function p(s,t){return i({...t,type:"success",message:s})}function d(s,t){return i({...t,type:"info",message:s})}function y(s,t){return i({...t,type:"warning",message:s})}function a(s,t){return i({...t,type:"loading",message:s})}function _(s,t){if(!t)return;let u;t.loading!==void 0&&(u=i({...t,promise:s,type:"loading",message:t.loading}));const m=s instanceof Promise?s:s();let v=u!==void 0;return m.then(l=>{if(l&&typeof l.ok=="boolean"&&!l.ok){v=!1;const b=typeof t.error=="function"?t.error(`HTTP error! status: ${l.status}`):t.error;i({id:u,type:"error",message:b})}else if(t.success!==void 0){v=!1;const b=typeof t.success=="function"?t.success(l):t.success;i({id:u,type:"success",message:b})}}).catch(l=>{if(t.error!==void 0){v=!1;const b=typeof t.error=="function"?t.error(l):t.error;i({id:u,type:"error",message:b})}}).finally(()=>{var l;v&&(o(u),u=void 0),(l=t.finally)==null||l.call(t)}),u}function M(s,t){const u=(t==null?void 0:t.id)||q++;return i({component:s,id:u,...t}),u}function V(s){n.update(t=>t.filter(u=>u.toastId!==s))}function F(s){if(A(n).find(u=>u.toastId===s.toastId)===void 0){n.update(u=>[s,...u]);return}n.update(u=>u.map(m=>m.toastId===s.toastId?s:m))}function j(){e.set([]),n.set([])}return{create:i,addToast:r,dismiss:o,remove:f,message:c,error:g,success:p,info:d,warning:y,loading:a,promise:_,custom:M,removeHeight:V,setHeight:F,reset:j,toasts:e,heights:n}}const h=ve();function _e(e,n){return h.create({message:e,...n})}const be=_e,De=Object.assign(be,{success:h.success,info:h.info,warning:h.warning,error:h.error,custom:h.custom,message:h.message,promise:h.promise,dismiss:h.dismiss,loading:h.loading}),Le=e=>({subscribe:e});export{qe as C,Ce as P,xe as a,He as b,h as c,Be as d,Te as e,Ae as f,Ne as g,Ee as i,me as k,Pe as n,Se as p,De as t,Le as u};
