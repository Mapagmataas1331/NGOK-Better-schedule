import{w as l,x as w,y as x,z as G,E as M,A as O,B as D,C as H,D as C,F as E,G as J,N as F,H as K,I as Q,J as U,u as V,q as W,K as L,M as X,O as Y,r as z,g as m,P as Z,k as $,Q as ee,p as se,c as te,t as I,b as ae,h as ne,f as re,j as ie}from"./utils.DjiPo3H_.js";import{l as le,q as P,p as d,a as T,n as oe,f as ce}from"./disclose-version.BX_fekq_.js";import{e as fe,a as ue,s as j}from"./language.CLV-v9o_.js";import{s as _e}from"./entry.0kpAyoHH.js";function de(e,s,a,t,o){var i;l&&w();var r=(i=s.$$slots)==null?void 0:i[a],f=!1;r===!0&&(r=s[a==="default"?"children":a],f=!0),r===void 0?o!==null&&o(e):r(e,f?()=>t:t)}function ge(e,s,a,t,o,r){let f=l;l&&w();var i,u,n=null;l&&x.nodeType===1&&(n=x,w());var v=l?x:e,c;G(()=>{const _=s()||null;var h=F;_!==i&&(c&&(_===null?K(c,()=>{c=null,u=null}):_===u?Q(c):U(c)),_&&_!==u&&(c=O(()=>{if(n=l?n:document.createElementNS(h,_),le(n,n),t){var g=l?D(n):n.appendChild(H());l&&(g===null?C(!1):E(g)),t(n,g)}J.nodes_end=n,v.before(n)})),i=_,i&&(u=i))},M),f&&(C(!0),E(v))}function we(e,s){var a=e.__className,t=R(s);l&&e.getAttribute("class")===t?e.__className=t:(a!==t||l&&e.getAttribute("class")!==t)&&(t===""?e.removeAttribute("class"):e.setAttribute("class",t),e.__className=t)}function Ae(e,s){var a=e.__className,t=R(s);l&&e.className===t?e.__className=t:(a!==t||l&&e.className!==t)&&(s==null?e.removeAttribute("class"):e.className=t,e.__className=t)}function R(e){return e??""}function be(e=!1){const s=L,a=s.l.u;if(!a)return;let t=()=>Z(s.s);if(e){let o=0,r={};const f=$(()=>{let i=!1;const u=s.s;for(const n in u)u[n]!==r[n]&&(r[n]=u[n],i=!0);return i&&o++,o});t=()=>m(f)}a.b.length&&V(()=>{B(s,t),z(a.b)}),W(()=>{const o=X(()=>a.m.map(Y));return()=>{for(const r of o)typeof r=="function"&&r()}}),a.a.length&&W(()=>{B(s,t),z(a.a)})}function B(e,s){if(e.l.s)for(const a of e.l.s)m(a);s()}ee();/**
 * @license lucide-svelte v0.460.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var he=oe("<svg><!><!></svg>");function Se(e,s){const a=P(s,["children","$$slots","$$events","$$legacy"]),t=P(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);se(s,!1);let o=d(s,"name",8,void 0),r=d(s,"color",8,"currentColor"),f=d(s,"size",8,24),i=d(s,"strokeWidth",8,2),u=d(s,"absoluteStrokeWidth",8,!1),n=d(s,"iconNode",24,()=>[]);const v=(...p)=>p.filter((b,N,k)=>!!b&&k.indexOf(b)===N).join(" ");be();var c=he();let _;var h=ne(c);fe(h,1,n,ue,(p,b)=>{let N=()=>m(b)[0],k=()=>m(b)[1];var A=ce(),q=re(A);ge(q,N,!0,(y,pe)=>{let S;I(()=>S=j(y,S,{...k()},void 0,y.namespaceURI===F,y.nodeName.includes("-")))}),T(p,A)});var g=te(h);de(g,s,"default",{},null),ie(c),I(()=>_=j(c,_,{...ve,...t,width:f(),height:f(),stroke:r(),"stroke-width":u()?Number(i())*24/Number(f()):i(),class:v("lucide-icon","lucide",o()?`lucide-${o()}`:"",a.class)},void 0,!0)),T(e,c),ae()}const me=()=>{const e=_e;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Ce={subscribe(e){return me().page.subscribe(e)}};export{Se as I,de as a,Ae as b,be as i,Ce as p,we as s};