var Fe=Object.defineProperty;var ie=r=>{throw TypeError(r)};var Ve=(r,t,e)=>t in r?Fe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var N=(r,t,e)=>Ve(r,typeof t!="symbol"?t+"":t,e),ne=(r,t,e)=>t.has(r)||ie("Cannot "+e);var c=(r,t,e)=>(ne(r,t,"read from private field"),e?e.call(r):t.get(r)),P=(r,t,e)=>t.has(r)?ie("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),K=(r,t,e,a)=>(ne(r,t,"write to private field"),a?a.call(r,e):t.set(r,e),e);import{p as oe,h as _,d as D,i as Z,a as v,t as M,r as V,c as ot,g as gt,l as je,s as ze,e as Be,f as m,b as We}from"../chunks/DZG8QBda.js";import{C as ce,u as $,F as xt,g as tt,J as bt,S as Ke,K as qe,L as Ue,M as Je,w as Le,N as Qe,h as I,f as J,n as Xe,j as O,k as et,m as at,P as Ye,c as Wt,I as Ze,a as $e,B as ta,l as ea}from"../chunks/rcaffY7Y.js";import{e as k,g as u,s as le,w as aa,d as de,p as j,f as S,a as z,c as s,m as W,r as i,t as F,K as ra,b as n,n as L}from"../chunks/BjlOfhaz.js";import{S as Q}from"../chunks/D4Fc3bb2.js";import{u as sa,C as ia}from"../chunks/BhcaFGqk.js";const na="data-accordion-root",ue="data-accordion-trigger",oa="data-accordion-content",la="data-accordion-item",da="data-accordion-header";var lt;class he{constructor(t){N(this,"opts");N(this,"rovingFocusGroup");P(this,lt,k(()=>({id:this.opts.id.current,"data-orientation":tt(this.opts.orientation.current),"data-disabled":xt(this.opts.disabled.current),[na]:""})));this.opts=t,$(this.opts),this.rovingFocusGroup=sa({rootNodeId:this.opts.id,candidateAttr:ue,loop:this.opts.loop,orientation:this.opts.orientation})}get props(){return u(c(this,lt))}}lt=new WeakMap;class ca extends he{constructor(e){super(e);N(this,"opts");N(this,"isMulti",!1);this.opts=e,this.includesItem=this.includesItem.bind(this),this.toggleItem=this.toggleItem.bind(this)}includesItem(e){return this.opts.value.current===e}toggleItem(e){this.opts.value.current=this.includesItem(e)?"":e}}var G;class ua extends he{constructor(e){super(e);P(this,G);N(this,"isMulti",!0);K(this,G,e.value),this.includesItem=this.includesItem.bind(this),this.toggleItem=this.toggleItem.bind(this)}includesItem(e){return c(this,G).current.includes(e)}toggleItem(e){this.includesItem(e)?c(this,G).current=c(this,G).current.filter(a=>a!==e):c(this,G).current=[...c(this,G).current,e]}}G=new WeakMap;var dt,ct,ut;class ha{constructor(t){N(this,"opts");N(this,"root");P(this,dt,k(()=>this.root.includesItem(this.opts.value.current)));P(this,ct,k(()=>this.opts.disabled.current||this.root.opts.disabled.current));P(this,ut,k(()=>({id:this.opts.id.current,"data-state":bt(this.isActive),"data-disabled":xt(this.isDisabled),"data-orientation":tt(this.root.opts.orientation.current),[la]:""})));this.opts=t,this.root=t.rootState,this.updateValue=this.updateValue.bind(this),$({...t,deps:()=>this.isActive})}get isActive(){return u(c(this,dt))}get isDisabled(){return u(c(this,ct))}updateValue(){this.root.toggleItem(this.opts.value.current)}get props(){return u(c(this,ut))}}dt=new WeakMap,ct=new WeakMap,ut=new WeakMap;var B,H,ht;class ma{constructor(t,e){N(this,"opts");N(this,"itemState");P(this,B);P(this,H,k(()=>this.opts.disabled.current||this.itemState.opts.disabled.current||c(this,B).opts.disabled.current));P(this,ht,k(()=>({id:this.opts.id.current,disabled:u(c(this,H)),"aria-expanded":Je(this.itemState.isActive),"aria-disabled":Ue(u(c(this,H))),"data-disabled":xt(u(c(this,H))),"data-state":bt(this.itemState.isActive),"data-orientation":tt(c(this,B).opts.orientation.current),[ue]:"",tabindex:0,onclick:this.onclick,onkeydown:this.onkeydown})));this.opts=t,this.itemState=e,K(this,B,e.root),this.onkeydown=this.onkeydown.bind(this),this.onclick=this.onclick.bind(this),$(t)}onclick(t){if(!u(c(this,H))){if(t.button!==0)return t.preventDefault();this.itemState.updateValue()}}onkeydown(t){if(!u(c(this,H))){if(t.key===Ke||t.key===qe){t.preventDefault(),this.itemState.updateValue();return}c(this,B).rovingFocusGroup.handleKeydown(this.opts.ref.current,t)}}get props(){return u(c(this,ht))}}B=new WeakMap,H=new WeakMap,ht=new WeakMap;var q,U,X,Y,mt,vt,pt;class va{constructor(t,e){N(this,"opts");N(this,"item");P(this,q);P(this,U,!1);P(this,X,le(0));P(this,Y,le(0));P(this,mt,k(()=>this.opts.forceMount.current||this.item.isActive));P(this,vt,k(()=>({open:this.item.isActive})));P(this,pt,k(()=>({id:this.opts.id.current,"data-state":bt(this.item.isActive),"data-disabled":xt(this.item.isDisabled),"data-orientation":tt(this.item.root.opts.orientation.current),[oa]:"",style:{"--bits-accordion-content-height":`${u(c(this,Y))}px`,"--bits-accordion-content-width":`${u(c(this,X))}px`}})));this.opts=t,this.item=e,this.item=e,K(this,U,this.item.isActive),$(t),aa(()=>{const a=requestAnimationFrame(()=>{K(this,U,!1)});return()=>{cancelAnimationFrame(a)}}),Le([()=>this.present,()=>this.opts.ref.current],([a,o])=>{o&&Qe(()=>{if(!this.opts.ref.current)return;K(this,q,c(this,q)||{transitionDuration:o.style.transitionDuration,animationName:o.style.animationName}),o.style.transitionDuration="0s",o.style.animationName="none";const g=o.getBoundingClientRect();if(de(c(this,Y),oe(g.height)),de(c(this,X),oe(g.width)),!c(this,U)){const{animationName:p,transitionDuration:x}=c(this,q);o.style.transitionDuration=x,o.style.animationName=p}})})}get present(){return u(c(this,mt))}get snippetProps(){return u(c(this,vt))}get props(){return u(c(this,pt))}}q=new WeakMap,U=new WeakMap,X=new WeakMap,Y=new WeakMap,mt=new WeakMap,vt=new WeakMap,pt=new WeakMap;var ft;class pa{constructor(t,e){N(this,"opts");N(this,"item");P(this,ft,k(()=>({id:this.opts.id.current,role:"heading","aria-level":this.opts.level.current,"data-heading-level":this.opts.level.current,"data-state":bt(this.item.isActive),"data-orientation":tt(this.item.root.opts.orientation.current),[da]:""})));this.opts=t,this.item=e,$(t)}get props(){return u(c(this,ft))}}ft=new WeakMap;const me=new ce("Accordion.Root"),_t=new ce("Accordion.Item");function fa(r){const{type:t,...e}=r,a=t==="single"?new ca(e):new ua(e);return me.set(a)}function ga(r){const t=me.get();return _t.set(new ha({...r,rootState:t}))}function xa(r){return new ma(r,_t.get())}function ba(r){return new va(r,_t.get())}function _a(r){return new pa(r,_t.get())}var wa=M("<div><!></div>");function ya(r,t){j(t,!0);let e=_(t,"disabled",3,!1),a=_(t,"value",15),o=_(t,"ref",15,null),g=_(t,"id",19,J),p=_(t,"onValueChange",3,Xe),x=_(t,"loop",3,!0),w=_(t,"orientation",3,"vertical"),b=V(t,["$$slots","$$events","$$legacy","disabled","children","child","type","value","ref","id","onValueChange","loop","orientation"]);a()===void 0&&a(t.type==="single"?"":[]);const T=fa({type:t.type,value:I.with(()=>a(),h=>{a(h),p()(h)}),id:I.with(()=>g()),disabled:I.with(()=>e()),loop:I.with(()=>x()),orientation:I.with(()=>w()),ref:I.with(()=>o(),h=>o(h))}),y=k(()=>at(b,T.props));var d=D(),l=S(d);{var f=h=>{var A=D(),R=S(A);O(R,()=>t.child,()=>({props:u(y)})),v(h,A)},C=h=>{var A=wa();let R;var E=s(A);O(E,()=>t.children??W),i(A),F(()=>R=et(A,R,{...u(y)})),v(h,A)};Z(l,h=>{t.child?h(f):h(C,!1)})}v(r,d),z()}var Aa=M("<div><!></div>");function Ia(r,t){j(t,!0);let e=_(t,"id",19,J),a=_(t,"disabled",3,!1),o=_(t,"value",19,J),g=_(t,"ref",15,null),p=V(t,["$$slots","$$events","$$legacy","id","disabled","value","children","child","ref"]);const x=ga({value:I.with(()=>o()),disabled:I.with(()=>a()),id:I.with(()=>e()),ref:I.with(()=>g(),l=>g(l))}),w=k(()=>at(p,x.props));var b=D(),T=S(b);{var y=l=>{var f=D(),C=S(f);O(C,()=>t.child,()=>({props:u(w)})),v(l,f)},d=l=>{var f=Aa();let C;var h=s(f);O(h,()=>t.children??W),i(f),F(()=>C=et(f,C,{...u(w)})),v(l,f)};Z(T,l=>{t.child?l(y):l(d,!1)})}v(r,b),z()}var ka=M("<div><!></div>");function Sa(r,t){j(t,!0);let e=_(t,"id",19,J),a=_(t,"level",3,2),o=_(t,"ref",15,null),g=V(t,["$$slots","$$events","$$legacy","id","level","children","child","ref"]);const p=_a({id:I.with(()=>e()),level:I.with(()=>a()),ref:I.with(()=>o(),d=>o(d))}),x=k(()=>at(g,p.props));var w=D(),b=S(w);{var T=d=>{var l=D(),f=S(l);O(f,()=>t.child,()=>({props:u(x)})),v(d,l)},y=d=>{var l=ka();let f;var C=s(l);O(C,()=>t.children??W),i(l),F(()=>f=et(l,f,{...u(x)})),v(d,l)};Z(b,d=>{t.child?d(T):d(y,!1)})}v(r,w),z()}var Pa=M("<button><!></button>");function Ca(r,t){j(t,!0);let e=_(t,"disabled",3,!1),a=_(t,"ref",15,null),o=_(t,"id",19,J),g=V(t,["$$slots","$$events","$$legacy","disabled","ref","id","children","child"]);const p=xa({disabled:I.with(()=>e()),id:I.with(()=>o()),ref:I.with(()=>a(),d=>a(d))}),x=k(()=>at(g,p.props));var w=D(),b=S(w);{var T=d=>{var l=D(),f=S(l);O(f,()=>t.child,()=>({props:u(x)})),v(d,l)},y=d=>{var l=Pa();let f;var C=s(l);O(C,()=>t.children??W),i(l),F(()=>f=et(l,f,{type:"button",...u(x)})),v(d,l)};Z(b,d=>{t.child?d(T):d(y,!1)})}v(r,w),z()}var Ta=M("<div><!></div>");function Da(r,t){j(t,!0);let e=_(t,"ref",15,null),a=_(t,"id",19,J),o=_(t,"forceMount",3,!1),g=V(t,["$$slots","$$events","$$legacy","child","ref","id","forceMount","children"]);const p=ba({forceMount:I.with(()=>o()),id:I.with(()=>a()),ref:I.with(()=>e(),x=>e(x))});Ye(r,{forceMount:!0,get present(){return p.present},get id(){return a()},presence:(w,b)=>{let T=()=>b==null?void 0:b().present;var y=D();const d=k(()=>at(g,p.props,{hidden:o()?void 0:!T().current}));var l=S(y);{var f=h=>{var A=D(),R=S(A),E=ra(()=>({props:u(d),...p.snippetProps}));O(R,()=>t.child,()=>u(E)),v(h,A)},C=h=>{var A=Ta();let R;var E=s(A);O(E,()=>t.children??W),i(A),F(()=>R=et(A,R,{...u(d)})),v(h,A)};Z(l,h=>{t.child?h(f):h(C,!1)})}v(w,y)},$$slots:{presence:!0}}),z()}var Ra=M('<div class="pb-4 pt-0"><!></div>');function Na(r,t){j(t,!0);let e=_(t,"ref",15,null),a=V(t,["$$slots","$$events","$$legacy","ref","class","children"]);var o=D(),g=S(o);const p=k(()=>Wt("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",t.class));ot(g,()=>Da,(x,w)=>{w(x,gt({get class(){return u(p)}},()=>a,{get ref(){return e()},set ref(b){e(b)},children:(b,T)=>{var y=Ra(),d=s(y);O(d,()=>t.children??W),i(y),v(b,y)},$$slots:{default:!0}}))}),v(r,o),z()}function Oa(r,t){j(t,!0);let e=_(t,"ref",15,null),a=V(t,["$$slots","$$events","$$legacy","ref","class"]);var o=D(),g=S(o);const p=k(()=>Wt("border-b",t.class));ot(g,()=>Ia,(x,w)=>{w(x,gt({get class(){return u(p)}},()=>a,{get ref(){return e()},set ref(b){e(b)}}))}),v(r,o),z()}var Ma=M("<!> <!>",1);function Ea(r,t){j(t,!0);let e=_(t,"ref",15,null),a=_(t,"level",3,3),o=V(t,["$$slots","$$events","$$legacy","ref","class","level","children"]);var g=D(),p=S(g);ot(p,()=>Sa,(x,w)=>{w(x,{get level(){return a()},class:"flex",children:(b,T)=>{var y=D(),d=S(y);const l=k(()=>Wt("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t.class));ot(d,()=>Ca,(f,C)=>{C(f,gt({get class(){return u(l)}},()=>o,{get ref(){return e()},set ref(h){e(h)},children:(h,A)=>{var R=Ma(),E=S(R);O(E,()=>t.children??W);var rt=n(E,2);ia(rt,{class:"size-4 shrink-0 text-muted-foreground transition-transform duration-200"}),v(h,R)},$$slots:{default:!0}}))}),v(b,y)},$$slots:{default:!0}})}),v(r,g),z()}const Ga=ya;function Ha(r,t){const e=je(t,["children","$$slots","$$events","$$legacy"]);Ze(r,gt({name:"github"},()=>e,{iconNode:[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]],children:(o,g)=>{var p=D(),x=S(p);$e(x,t,"default",{},null),v(o,p)},$$slots:{default:!0}}))}var Fa=M('<div class="flex w-full flex-col p-2 md:p-4"><a href="https://nickparts.ru/how-to-install-webapp/" class="text-sm font-medium italic hover:underline md:text-base">nickparts.ru/how-to-install-webapp</a> <iframe title="nickparts.ru/how-to-install-webapp" src="https://nickparts.ru/how-to-install-webapp#content" frameborder="0" class="h-[64dvh] w-full"></iframe></div>'),Va=M("<!> <!>",1),ja=M("<!> ",1),za=M('<div class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"><div class="my-1 bg-background/75 p-2 pb-4 shadow-md md:m-4 md:rounded-md md:p-4 md:pb-6"><h1 class="mb-1 ml-1 text-lg font-semibold md:mb-2 md:ml-2 md:text-2xl"> </h1> <!> <div class="flex w-full flex-col p-2 md:p-4"><p class="ml-1 p-px text-lg font-semibold md:text-lg"> </p> <p class="mb-px p-px text-sm font-normal md:text-base">- <a href="/home/" class="font-semibold italic text-cyan-700 hover:underline dark:text-cyan-400"> </a> </p> <p class="mb-px p-px text-sm font-normal md:text-base">- <a href="/" class="font-semibold italic text-cyan-700 hover:underline dark:text-cyan-400"> </a> </p> <p class="mb-px p-px text-sm font-normal md:text-base">- <a href="/teacher/" class="font-semibold italic text-cyan-700 hover:underline dark:text-cyan-400"> </a> </p></div> <!> <div class="flex w-full flex-col p-2 md:p-4"><p class="ml-1 p-px text-sm font-medium md:text-base"> </p> <p class="p-px text-sm font-normal md:text-base"> </p></div> <div class="flex w-full flex-col items-center justify-center p-2 md:p-4"><p class="mb-2 text-center text-sm font-medium italic md:text-lg"> </p> <img src="https://avatars.dzeninfra.ru/get-zen_doc/9846546/pub_64abce0f285e1f488d2ebf92_64abf2e26b91d965cf1202d6/scale_1200" alt="miska risa" class="w-full max-w-[512px]"> <!></div> <h1 id="news" class="mb-1 ml-1 text-lg font-semibold md:mb-2 md:ml-2 md:text-2xl"> </h1> <div class="mb-2 border-2 md:mb-4"><h1 class="my-1 ml-2 text-lg font-semibold text-green-700 dark:text-green-400 md:my-2 md:text-xl"> </h1> <!> <div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6"><p class="ml-1 p-px text-base font-medium md:text-lg"> </p> <p class="p-px text-sm font-normal md:text-base"> </p> <p class="p-px text-sm font-normal md:text-base"> </p> <p class="p-px text-sm font-normal md:text-base"> </p></div> <div class="flex w-full flex-col items-center justify-center pb-4 md:pb-6"><img src="/12-03-25_stats.png" alt="12.03.25 stats" class="w-full max-w-[640px]"></div></div> <div class="mb-2 border-2 md:mb-4"><h1 class="my-1 ml-2 text-lg font-semibold text-red-700 dark:text-red-400 md:my-2 md:text-xl"> </h1> <!> <div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6"><p class="ml-1 p-px text-base font-medium md:text-lg"> </p> <p class="p-px text-sm font-normal md:text-base"> </p> <p class="p-px text-sm font-normal md:text-base"> <a class="italic !text-cyan-700 hover:underline dark:!text-cyan-400" href="https://t.me/mapagmataas">@mapagmataas</a></p></div></div> <div class="border-2"><h1 class="my-1 ml-2 text-lg font-semibold text-green-700 dark:text-green-400 md:my-2 md:text-xl"> </h1> <!> <div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6"><p class="ml-1 p-px text-base font-medium md:text-lg"> </p> <p class="p-px text-sm font-normal md:text-base"> </p> <p class="p-px text-sm font-normal md:text-base"> <a class="italic !text-cyan-700 hover:underline dark:!text-cyan-400" href="https://t.me/mapagmataas">@mapagmataas</a></p></div> <!> <div class="flex w-full flex-col items-center justify-center p-2 pb-4 md:p-4 md:pb-6"><p class="mb-2 text-center text-sm font-medium italic md:text-lg"> </p> <img src="https://ru.meming.world/images/ru/a/a4/The_World_If.jpg" alt="The World If" class="w-full max-w-[512px]"></div></div></div></div>');function La(r){const[t,e]=ze(),a=()=>We(ea,"$language",t);var o=za(),g=s(o),p=s(g),x=s(p,!0);i(p);var w=n(p,2);Q(w,{});var b=n(w,2),T=s(b),y=s(T,!0);i(T);var d=n(T,2),l=n(s(d)),f=s(l,!0);i(l);var C=n(l);i(d);var h=n(d,2),A=n(s(h)),R=s(A,!0);i(A);var E=n(A);i(h);var rt=n(h,2),wt=n(s(rt)),ve=s(wt,!0);i(wt);var pe=n(wt);i(rt),i(b);var Kt=n(b,2);Ga(Kt,{type:"single",children:(jt,Ee)=>{Oa(jt,{value:"item-1",children:(st,zt)=>{var it=Va(),se=S(it);Ea(se,{class:"ml-2 text-base font-semibold md:ml-3 md:text-xl",children:(Bt,He)=>{L();var nt=Be();F(()=>m(nt,a()==="ru"?"Установка как веб-приложение":"Setup as a web application")),v(Bt,nt)},$$slots:{default:!0}});var Ge=n(se,2);Na(Ge,{children:(Bt,He)=>{var nt=Fa();v(Bt,nt)},$$slots:{default:!0}}),v(st,it)},$$slots:{default:!0}})},$$slots:{default:!0}});var yt=n(Kt,2),At=s(yt),fe=s(At,!0);i(At);var qt=n(At,2),ge=s(qt,!0);i(qt),i(yt);var It=n(yt,2),kt=s(It),xe=s(kt,!0);i(kt);var be=n(kt,4);ta(be,{variant:"default",href:"https://github.com/Mapagmataas1331",class:"!my-4 w-fit font-semibold shadow-md md:!my-8",children:(jt,Ee)=>{var st=ja(),zt=S(st);Ha(zt,{class:"mr-1 !size-5"});var it=n(zt);F(()=>m(it,` ${(a()==="ru"?"Подписаться":"Subscribe")??""}`)),v(jt,st)},$$slots:{default:!0}}),i(It);var St=n(It,2),_e=s(St,!0);i(St);var Pt=n(St,2),Ct=s(Pt),we=s(Ct,!0);i(Ct);var Ut=n(Ct,2);Q(Ut,{});var Jt=n(Ut,2),Tt=s(Jt),ye=s(Tt,!0);i(Tt);var Dt=n(Tt,2),Ae=s(Dt,!0);i(Dt);var Rt=n(Dt,2),Ie=s(Rt,!0);i(Rt);var Lt=n(Rt,2),ke=s(Lt,!0);i(Lt),i(Jt),L(2),i(Pt);var Nt=n(Pt,2),Ot=s(Nt),Se=s(Ot,!0);i(Ot);var Qt=n(Ot,2);Q(Qt,{});var Xt=n(Qt,2),Mt=s(Xt),Pe=s(Mt,!0);i(Mt);var Et=n(Mt,2),Ce=s(Et,!0);i(Et);var Yt=n(Et,2),Te=s(Yt);L(),i(Yt),i(Xt),i(Nt);var Zt=n(Nt,2),Gt=s(Zt),De=s(Gt,!0);i(Gt);var $t=n(Gt,2);Q($t,{});var Ht=n($t,2),Ft=s(Ht),Re=s(Ft,!0);i(Ft);var Vt=n(Ft,2),Ne=s(Vt,!0);i(Vt);var te=n(Vt,2),Oe=s(te);L(),i(te),i(Ht);var ee=n(Ht,2);Q(ee,{});var ae=n(ee,2),re=s(ae),Me=s(re,!0);i(re),L(2),i(ae),i(Zt),i(g),i(o),F(()=>{m(x,a()==="ru"?"Привет, на связи автор сайта!":"Hi, the site creator is here!"),m(y,a()==="ru"?"• Карта сайта:":"• With the last update, there are now:"),m(f,a()==="ru"?"Главная страница (эта страница)":"Home page (this page)"),m(C,` :
				${(a()==="ru"?"Здесь я буду иногда рассказывать о новых функциях, обновлениях и прочем.":"Here I will sometimes tell you about new features, updates and other things.")??""}`),m(R,a()==="ru"?"Страница для просмотра расписания студентам ":"Schedule viewer for students"),m(E,` :
				${(a()==="ru"?"На ней студент может в удобном формате просматривать расписание своей группы.":"On this page, a student can view their group schedule in a convenient format.")??""}`),m(ve,a()==="ru"?"Страница для просмотра расписания преподавателям":"Schedule viewer for teachers"),m(pe,` :
				${(a()==="ru"?"А тут уже преподаватель может просматривать своё расписание.":"And here, the teacher can view their schedule.")??""}`),m(fe,a()==="ru"?"• Я делаю это все один, вас много, а подписок на GitHub мало":"• I’m handling all of this solo, yet you still haven’t hit that GitHub subscribe button"),m(ge,a()==="ru"?"Пожалуйста, уделите минутку своего времени 🥺":"Please spare a minute of your time 🥺"),m(xe,a()==="ru"?"Всем кто подписался, от меня миска риса и большое спасибо!":"A bowl of rice and best wishes to everyone who subscribed!"),m(_e,a()==="ru"?"# Новости и События":"# News and Events"),m(we,a()==="ru"?"Обновление 12.03.25":"Update 12.03.25"),m(ye,a()==="ru"?"• В общем, вроде как всё, что заметил, починил и всё работает.":"• Overall, I fixed everything I noticed and now everything is working."),m(Ae,a()==="ru"?"Опять же, если что-то заметите — пишите. Кроме исправлений, удалил старую версию расписания, поскольку нужные для неё таблицы удалили.":"Again, if you notice anything, please let me know. Additionally, I removed the old schedule version since the necessary tables for it were deleted."),m(Ie,a()==="ru"?"Всем, кто написал добрые слова, подписался на GitHub или просто изредка проверял, заработал ли сайт — огромное спасибо!":"A huge thank you to everyone who wrote kind words, followed on GitHub, or simply checked occasionally if the site was running!"),m(ke,a()==="ru"?"Без вас этого обновления, как и сайта, никогда бы и не было! Поскольку колледжу, похоже, абсолютно безразлична жизнь этого ресурса(":"Without you, neither this update nor the site would have been possible! It seems the college is completely indifferent to the life of this resource ("),m(Se,a()==="ru"?"Поломка 07.03.25":"Issue 07.03.25"),m(Pe,a()==="ru"?"• Кто-то в коллеже опять решил изменить рабочее расписание...":"• Someone in the collage once again decided to change the working schedule..."),m(Ce,a()==="ru"?"У меня пока что нету свободного времени на обновление.":"For now, I have no free time to update."),m(Te,`${(a()==="ru"?"Если вы хотите мне помочь / ускорить работу над обновлением - помогите разузнать что изменилось в расписании и что вообще с ним планируется, или если у вас уже есть информация - сообщите мне в Telegram":"If you want to help me / speed up the work on the update - help me understand what has changed in the schedule and what is planned with it, or if you already have information - message me in Telegram")??""} `),m(De,a()==="ru"?"Обновление 16.02.25":"Update 16.02.25"),m(Re,a()==="ru"?"• Я постарался и за день обновил сайт под новую версию расписания.":"• I worked diligently to update the site with the new schedule within a day."),m(Ne,a()==="ru"?"Теперь вместо выбора курса и группы идет только выбор группы. Версия для преподавателей работает в тестовом режиме.":"Now, year and group selections has been replaced by only group-selection. A version for teachers works in test mode."),m(Oe,`${(a()==="ru"?"Из-за приоритета скорости могут возникать мелкие ошибки. Если заметите что‑нибудь странное, пишите в Telegram":"Since speed was our top priority, you might encounter some minor glitches. If you do, please message me on Telegram")??""} `),m(Me,a()==="ru"?"Мир, если бы меня заранее предупреждали об изменениях в расписании:":"Imagine a world where I was warned about schedule changes ahead of time:")}),v(r,o),e()}export{La as component};
