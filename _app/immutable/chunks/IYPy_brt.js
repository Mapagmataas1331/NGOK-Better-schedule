var K=Object.defineProperty;var N=e=>{throw TypeError(e)};var L=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var T=(e,t,r)=>L(e,typeof t!="symbol"?t+"":t,r),M=(e,t,r)=>t.has(e)||N("Cannot "+r);var B=(e,t,r)=>(M(e,t,"read from private field"),r?r.call(e):t.get(e)),j=(e,t,r)=>t.has(e)?N("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);import{h as a,d as k,i as Q,a as m,t as U,r as E,l as q,n as V,c as X,g as Y}from"./42UYTaT9.js";import{u as Z,p as $,q as tt,r as et,t as rt,b as p,v as D,x as R,y as at,z as ot,e as it,i as st,C as nt,c as lt}from"./BCILilgs.js";import{w as dt,x as ct,e as O,g as _,p as P,f as x,a as W,c as H,y as ut,r as F,t as A,b as ft,z as ht}from"./CHILHeLz.js";function vt(e,t,r,s,d){var c;dt&&ct();var o=(c=t.$$slots)==null?void 0:c[r],n=!1;o===!0&&(o=t[r==="default"?"children":r],n=!0),o===void 0?d!==null&&d(e):o(e,n?()=>s:s)}const gt="data-separator-root";var S;class mt{constructor(t){T(this,"opts");j(this,S,O(()=>({id:this.opts.id.current,role:this.opts.decorative.current?"none":"separator","aria-orientation":et(this.opts.orientation.current),"aria-hidden":tt(this.opts.decorative.current),"data-orientation":$(this.opts.orientation.current),[gt]:""})));this.opts=t,Z(t)}get props(){return _(B(this,S))}}S=new WeakMap;function _t(e){return new mt(e)}var wt=U("<div><!></div>");function bt(e,t){P(t,!0);let r=a(t,"id",19,rt),s=a(t,"ref",15,null),d=a(t,"decorative",3,!1),o=a(t,"orientation",3,"horizontal"),n=E(t,["$$slots","$$events","$$legacy","id","ref","child","children","decorative","orientation"]);const c=_t({ref:p.with(()=>s(),i=>s(i)),id:p.with(()=>r()),decorative:p.with(()=>d()),orientation:p.with(()=>o())}),h=O(()=>at(n,c.props));var v=k(),w=x(v);{var g=i=>{var u=k(),l=x(u);D(l,()=>t.child,()=>({props:_(h)})),m(i,u)},b=i=>{var u=wt();let l;var f=H(u);D(f,()=>t.children??ut),F(u),A(()=>l=R(u,l,{..._(h)})),m(i,u)};Q(w,i=>{t.child?i(g):i(b,!1)})}m(e,v),W()}/**
 * @license lucide-svelte v0.479.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const pt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var kt=V("<svg><!><!></svg>");function At(e,t){const r=q(t,["children","$$slots","$$events","$$legacy"]),s=q(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);P(t,!1);let d=a(t,"name",8,void 0),o=a(t,"color",8,"currentColor"),n=a(t,"size",8,24),c=a(t,"strokeWidth",8,2),h=a(t,"absoluteStrokeWidth",8,!1),v=a(t,"iconNode",24,()=>[]);const w=(...l)=>l.filter((f,y,z)=>!!f&&z.indexOf(f)===y).join(" ");ot();var g=kt();let b;var i=H(g);it(i,1,v,st,(l,f)=>{let y=()=>_(f)[0],z=()=>_(f)[1];var C=k(),G=x(C);nt(G,y,!0,(J,xt)=>{let I;A(()=>I=R(J,I,{...z()}))}),m(l,C)});var u=ft(i);vt(u,t,"default",{},null),F(g),A((l,f)=>b=R(g,b,{...pt,...s,width:n(),height:n(),stroke:o(),"stroke-width":l,class:f}),[()=>h()?Number(c())*24/Number(n()):c(),()=>w("lucide-icon","lucide",d()?`lucide-${d()}`:"",r.class)],ht),m(e,g),W()}function Ot(e,t){P(t,!0);let r=a(t,"ref",15,null),s=a(t,"orientation",3,"horizontal"),d=E(t,["$$slots","$$events","$$legacy","ref","class","orientation"]);var o=k(),n=x(o);const c=O(()=>lt("shrink-0 bg-border",s()==="horizontal"?"h-[1px] w-full":"min-h-full w-[1px]",t.class));X(n,()=>bt,(h,v)=>{v(h,Y({get class(){return _(c)},get orientation(){return s()}},()=>d,{get ref(){return r()},set ref(w){r(w)}}))}),m(e,o),W()}export{At as I,Ot as S,vt as s};
