var G=r=>{throw TypeError(r)};var J=(r,n,o)=>n.has(r)||G("Cannot "+o);var l=(r,n,o)=>(J(r,n,"read from private field"),o?o.call(r):n.get(r)),w=(r,n,o)=>n.has(r)?G("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,o),O=(r,n,o,i)=>(J(r,n,"write to private field"),i?i.call(r,o):n.set(r,o),o);import{p as _,c as C,i as $,a as j,t as ee,r as U,f as te,s as ne}from"./disclose-version.1MAZtDoG.js";import{l as W,g as z,p as V,f as F,n as re,t as se,b as X,i as ie,k as oe}from"./utils.CVjiVCGq.js";import{u as ue,g as ce,f as ae,h as fe,j as de,k as H,m as K,a as le,n as me,c as pe}from"./language.MI8Fri8Q.js";import{w as ge,g as L}from"./index.C1-xVPKz.js";const he="data-separator-root";var S,R,x,T,A;class ye{constructor(n){w(this,S);w(this,R);w(this,x);w(this,T);w(this,A,W(()=>({id:l(this,S).current,role:l(this,T).current?"none":"separator","aria-orientation":ce(l(this,x).current),"aria-hidden":ae(l(this,T).current),"data-orientation":fe(l(this,x).current),[he]:""})));O(this,x,n.orientation),O(this,T,n.decorative),O(this,S,n.id),O(this,R,n.ref),ue({id:l(this,S),ref:l(this,R)})}get props(){return z(l(this,A))}}S=new WeakMap,R=new WeakMap,x=new WeakMap,T=new WeakMap,A=new WeakMap;function ve(r){return new ye(r)}var be=ee("<div><!></div>");function we(r,n){V(n,!0);let o=_(n,"id",19,de),i=_(n,"ref",15,null),c=_(n,"decorative",3,!1),g=_(n,"orientation",3,"horizontal"),I=U(n,["$$slots","$$events","$$legacy","id","ref","child","children","decorative","orientation"]);const k=ve({ref:H.with(()=>i(),m=>i(m)),id:H.with(()=>o()),decorative:H.with(()=>c()),orientation:H.with(()=>g())}),h=W(()=>me(I,k.props));var y=C(),P=F(y);$(P,()=>n.child,m=>{var d=C(),v=F(d);K(v,()=>n.child,()=>({props:z(h)})),j(m,d)},m=>{var d=be();let v;var B=ie(d);K(B,()=>n.children??re),oe(d),se(()=>v=le(d,v,{...z(h)})),j(m,d)}),j(r,y),X()}function He(r,n){V(n,!0);let o=_(n,"ref",15,null),i=_(n,"orientation",3,"horizontal"),c=U(n,["$$slots","$$events","$$legacy","ref","class","orientation"]);var g=C(),I=F(g),k=W(()=>pe("bg-border shrink-0",i()==="horizontal"?"h-[1px] w-full":"min-h-full w-[1px]",n.class));te(I,()=>we,(h,y)=>{y(h,ne({get ref(){return o()},set ref(P){o(P)},get class(){return z(k)},get orientation(){return i()}},()=>c))}),j(r,g),X()}function je(...r){return r.filter(Boolean).join(" ")}const M=typeof document<"u";function N(r){const n=ge(r);function o(c){M&&n.set(c)}function i(c){M&&n.update(c)}return{subscribe:n.subscribe,set:o,update:i}}let Q=0;function _e(){const r=N([]),n=N([]);function o(t){r.update(e=>[t,...e])}function i(t){var q;const{message:e,...s}=t,a=typeof(t==null?void 0:t.id)=="number"||t.id&&((q=t.id)==null?void 0:q.length)>0?t.id:Q++,p=t.dismissable===void 0?!0:t.dismissable,u=t.type===void 0?"default":t.type;return L(r).find(E=>E.id===a)?r.update(E=>E.map(D=>D.id===a?{...D,...t,id:a,title:e,dismissable:p,type:u,updated:!0}:{...D,updated:!1})):o({...s,id:a,title:e,dismissable:p,type:u}),a}function c(t){if(t===void 0){r.update(e=>e.map(s=>({...s,dismiss:!0})));return}return r.update(e=>e.map(s=>s.id===t?{...s,dismiss:!0}:s)),t}function g(t){if(t===void 0){r.set([]);return}return r.update(e=>e.filter(s=>s.id!==t)),t}function I(t,e){return i({...e,type:"default",message:t})}function k(t,e){return i({...e,type:"error",message:t})}function h(t,e){return i({...e,type:"success",message:t})}function y(t,e){return i({...e,type:"info",message:t})}function P(t,e){return i({...e,type:"warning",message:t})}function m(t,e){return i({...e,type:"loading",message:t})}function d(t,e){if(!e)return;let s;e.loading!==void 0&&(s=i({...e,promise:t,type:"loading",message:e.loading}));const a=t instanceof Promise?t:t();let p=s!==void 0;return a.then(u=>{if(u&&typeof u.ok=="boolean"&&!u.ok){p=!1;const b=typeof e.error=="function"?e.error(`HTTP error! status: ${u.status}`):e.error;i({id:s,type:"error",message:b})}else if(e.success!==void 0){p=!1;const b=typeof e.success=="function"?e.success(u):e.success;i({id:s,type:"success",message:b})}}).catch(u=>{if(e.error!==void 0){p=!1;const b=typeof e.error=="function"?e.error(u):e.error;i({id:s,type:"error",message:b})}}).finally(()=>{var u;p&&(c(s),s=void 0),(u=e.finally)==null||u.call(e)}),s}function v(t,e){const s=(e==null?void 0:e.id)||Q++;return i({component:t,id:s,...e}),s}function B(t){n.update(e=>e.filter(s=>s.toastId!==t))}function Y(t){if(L(n).find(s=>s.toastId===t.toastId)===void 0){n.update(s=>[t,...s]);return}n.update(s=>s.map(a=>a.toastId===t.toastId?t:a))}function Z(){r.set([]),n.set([])}return{create:i,addToast:o,dismiss:c,remove:g,message:I,error:k,success:h,info:y,warning:P,loading:m,promise:d,custom:v,removeHeight:B,setHeight:Y,reset:Z,toasts:r,heights:n}}const f=_e();function Se(r,n){return f.create({message:r,...n})}const xe=Se,ze=Object.assign(xe,{success:f.success,info:f.info,warning:f.warning,error:f.error,custom:f.custom,message:f.message,promise:f.promise,dismiss:f.dismiss,loading:f.loading}),Ae=r=>({subscribe:r});export{He as S,ze as a,je as c,f as t,Ae as u};
