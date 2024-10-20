import{p as d,c as q,b as m,l as re,i as ie,d as de,t as G,f as S,g as Be,e as ot,s as ae}from"../chunks/disclose-version.-Vo8L4u_.js";import{t as rt,am as st,an as at,j as he,ao as D,ap as Ee,l as A,o as be,aq as x,g as c,y as J,a8 as V,x as j,z as B,ar as Te,e as ke,A as _e,v as Z,as as it,at as qe}from"../chunks/runtime.BUNW3LXa.js";import{t as Ge,o as lt,g as dt,h as ct,m as Me,j as ze,k as Ne,l as oe,r as ut,n as We,p as ft,q as Se,u as gt,v as vt,w as Fe,x as mt,y as pt,z as _t,A as ht,B as bt,C as Le,D as Ue,E as yt,F as xt,G as wt,H as Ct,I as De,i as ye,a as K,J as fe,K as Qe,c as ce,L as pe,s as ue,M as Ze,N as Pt,d as Ot,O as Tt}from"../chunks/index.kzDBy8Sl.js";import{L as kt,B as Ve,p as Et}from"../chunks/stores.CbBxG70S.js";import{d as et,w as Je}from"../chunks/index.x0V0-Ck4.js";function Dt(t){const e=t.slice();return e.sort($t),At(e)}function At(t){if(t.length<=1)return t.slice();const e=[];for(let l=0;l<t.length;l++){const r=t[l];for(;e.length>=2;){const f=e[e.length-1],n=e[e.length-2];if((f.x-n.x)*(r.y-n.y)>=(f.y-n.y)*(r.x-n.x))e.pop();else break}e.push(r)}e.pop();const o=[];for(let l=t.length-1;l>=0;l--){const r=t[l];for(;o.length>=2;){const f=o[o.length-1],n=o[o.length-2];if((f.x-n.x)*(r.y-n.y)>=(f.y-n.y)*(r.x-n.x))o.pop();else break}o.push(r)}return o.pop(),e.length==1&&o.length==1&&e[0].x==o[0].x&&e[0].y==o[0].y?e:e.concat(o)}function $t(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}function Ht(t){const e=t.getBoundingClientRect();return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.right,y:e.bottom},{x:e.left,y:e.bottom}]}function Mt(t){const e=t.flatMap(o=>Ht(o));return Dt(e)}function zt(t,e){let o=!1;for(let l=0,r=e.length-1;l<e.length;r=l++){const f=e[l].x,n=e[l].y,s=e[r].x,b=e[r].y;n>t.y!=b>t.y&&t.x<(s-f)*(t.y-n)/(b-n)+f&&(o=!o)}return o}const Nt={positioning:{placement:"bottom"},arrowSize:8,defaultOpen:!1,closeOnPointerDown:!0,openDelay:1e3,closeDelay:0,forceVisible:!1,portal:void 0,closeOnEscape:!0,disableHoverableContent:!1,group:void 0},{name:je}=gt("tooltip"),Oe=new Map,St=["trigger","content"];function Vt(t){const e={...Nt,...t},o=Ge(lt(e,"open","ids")),{positioning:l,arrowSize:r,closeOnPointerDown:f,openDelay:n,closeDelay:s,forceVisible:b,portal:C,closeOnEscape:R,disableHoverableContent:O,group:$}=o,T=e.open??Je(e.defaultOpen),g=dt(T,e==null?void 0:e.onOpenChange),k=Je(null),I=Ge({...ct(St),...e.ids});let H=!1;const v=i=>Le?document.getElementById(I[i].get()):null;let a=null,P=null;function w(i){P&&(window.clearTimeout(P),P=null),a||(a=window.setTimeout(()=>{g.set(!0),k.update(u=>u??i),a=null},n.get()))}function W(i){if(a&&(window.clearTimeout(a),a=null),i&&_){k.set("pointer");return}P||(P=window.setTimeout(()=>{g.set(!1),k.set(null),i&&(H=!1),P=null},s.get()))}const Y=et([g,b],([i,u])=>i||u),F=Me(je("trigger"),{stores:[I.content,I.trigger,g],returned:([i,u,p])=>({"aria-describedby":i,id:u,"data-state":p?"open":"closed"}),action:i=>{const u=y=>{R.get()&&y.key===vt.ESCAPE&&(a&&(window.clearTimeout(a),a=null),g.set(!1))};return{destroy:ze(oe(i,"pointerdown",()=>{f.get()&&(g.set(!1),H=!0,a&&(window.clearTimeout(a),a=null))}),oe(i,"pointerenter",y=>{Fe(y)||w("pointer")}),oe(i,"pointerleave",y=>{Fe(y)||a&&(window.clearTimeout(a),a=null)}),oe(i,"focus",()=>{H||w("focus")}),oe(i,"blur",()=>W(!0)),oe(i,"keydown",u),Ne(document,"keydown",u))}}}),X=Me(je("content"),{stores:[Y,g,C,I.content],returned:([i,u,p,y])=>ut({role:"tooltip",hidden:i?void 0:!0,tabindex:-1,style:i?void 0:We({display:"none"}),id:y,"data-portal":ft(p),"data-state":u?"open":"closed"}),action:i=>{let u=Ue,p=Ue;const y=Se([Y,l,C],([ee,se,te])=>{p(),u();const ne=v("trigger");!ee||!ne||rt().then(()=>{p(),u();const le=mt(i,te);le&&(p=pt(i,le).destroy),u=_t(ne,i,se).destroy})});function h(ee){if(!g.get())return;const se=ee.target;if(!ht(se)&&!bt(se))return;const te=v("trigger");te&&se.contains(te)&&W()}const Q=ze(oe(i,"pointerenter",()=>w("pointer")),oe(i,"pointerdown",()=>w("pointer")),Ne(window,"scroll",h,{capture:!0}));return{destroy(){Q(),p(),u(),y()}}}}),M=Me(je("arrow"),{stores:r,returned:i=>({"data-arrow":!0,style:We({position:"absolute",width:`var(--arrow-size, ${i}px)`,height:`var(--arrow-size, ${i}px)`})})});let _=!1;return Se(g,i=>{const u=$.get();if(u===void 0||u===!1)return;if(!i){Oe.get(u)===g&&Oe.delete(u);return}const p=Oe.get(u);p==null||p.set(!1),Oe.set(u,g)}),Se([g,k],([i,u])=>{if(!(!i||!Le))return ze(Ne(document,"mousemove",p=>{const y=v("content"),h=v("trigger");if(!y||!h)return;const Q=O.get()?[h]:[h,y],ee=Mt(Q);_=zt({x:p.clientX,y:p.clientY},ee),u==="pointer"&&(_||W())}))}),{ids:I,elements:{trigger:F,content:X,arrow:M},states:{open:g},options:o}}function tt(){return{NAME:"tooltip",PARTS:["arrow","content","trigger"]}}function jt(t){const{NAME:e,PARTS:o}=tt(),l=yt(e,o),r={...Vt({positioning:{placement:"top",gutter:0},openDelay:700,...xt(t),forceVisible:!0}),getAttrs:l};return st(e,r),{...r,updateOption:wt(r.options)}}function Ie(){const{NAME:t}=tt();return at(t)}function Bt(t){const o={...{side:"top",align:"center",sideOffset:1},...t},{options:{positioning:l}}=Ie();Ct(l)({...o})}function It(t,e){he(e,!1);const o=De(),l=()=>fe(I,"$idValues",o);let r=d(e,"closeOnEscape",24,()=>{}),f=d(e,"portal",24,()=>{}),n=d(e,"closeOnPointerDown",24,()=>{}),s=d(e,"openDelay",24,()=>{}),b=d(e,"closeDelay",24,()=>{}),C=d(e,"open",28,()=>{}),R=d(e,"onOpenChange",24,()=>{}),O=d(e,"disableHoverableContent",24,()=>{}),$=d(e,"group",24,()=>{});const{states:{open:T},updateOption:g,ids:k}=jt({closeOnEscape:r(),portal:f(),closeOnPointerDown:n(),openDelay:s(),closeDelay:b(),forceVisible:!0,defaultOpen:C(),disableHoverableContent:O(),group:$(),onOpenChange:({next:a})=>{var P;return C()!==a&&((P=R())==null||P(a),C(a)),a},positioning:{gutter:0,offset:{mainAxis:1}}}),I=et([k.content,k.trigger],([a,P])=>({content:a,trigger:P}));D(()=>x(C()),()=>{C()!==void 0&&T.set(C())}),D(()=>x(r()),()=>{g("closeOnEscape",r())}),D(()=>x(f()),()=>{g("portal",f())}),D(()=>x(n()),()=>{g("closeOnPointerDown",n())}),D(()=>x(s()),()=>{g("openDelay",s())}),D(()=>x(b()),()=>{g("closeDelay",b())}),D(()=>x($()),()=>{g("group",$())}),D(()=>x(O()),()=>{g("disableHoverableContent",O())}),Ee(),ye();var H=q(),v=A(H);K(v,e,"default",{get ids(){return l()}},null),m(t,H),be()}var Rt=G("<div><!></div>"),qt=G("<div><!></div>"),Gt=G("<div><!></div>"),Wt=G("<div><!></div>"),Ft=G("<div><!></div>");function Lt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]),l=re(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);he(e,!1);const r=De(),f=()=>fe(i,"$content",r),n=()=>fe(u,"$open",r),s=Te();let b=d(e,"transition",24,()=>{}),C=d(e,"transitionConfig",24,()=>{}),R=d(e,"inTransition",24,()=>{}),O=d(e,"inTransitionConfig",24,()=>{}),$=d(e,"outTransition",24,()=>{}),T=d(e,"outTransitionConfig",24,()=>{}),g=d(e,"asChild",8,!1),k=d(e,"id",24,()=>{}),I=d(e,"side",8,"top"),H=d(e,"align",8,"center"),v=d(e,"sideOffset",8,0),a=d(e,"alignOffset",8,0),P=d(e,"collisionPadding",8,8),w=d(e,"avoidCollisions",8,!0),W=d(e,"collisionBoundary",24,()=>{}),Y=d(e,"sameWidth",8,!1),F=d(e,"fitViewport",8,!1),X=d(e,"strategy",8,"absolute"),M=d(e,"overlap",8,!1),_=d(e,"el",28,()=>{});const{elements:{content:i},states:{open:u},ids:p,getAttrs:y}=Ie(),h=Qe(),Q=y("content");D(()=>x(k()),()=>{k()&&p.content.set(k())}),D(()=>f(),()=>{ke(s,f())}),D(()=>c(s),()=>{Object.assign(c(s),Q)}),D(()=>(n(),x(I()),x(H()),x(v()),x(a()),x(P()),x(w()),x(W()),x(Y()),x(F()),x(X()),x(M())),()=>{n()&&Bt({side:I(),align:H(),sideOffset:v(),alignOffset:a(),collisionPadding:P(),avoidCollisions:w(),collisionBoundary:W(),sameWidth:Y(),fitViewport:F(),strategy:X(),overlap:M()})}),Ee(),ye();var ee=q(),se=A(ee);ie(se,()=>g()&&n(),te=>{var ne=q(),le=A(ne);K(le,e,"default",{get builder(){return c(s)}},null),m(te,ne)},te=>{var ne=q(),le=A(ne);ie(le,()=>b()&&n(),Ae=>{var L=Rt();de(L,E=>_(E),()=>_());let xe;var ge=j(L);K(ge,e,"default",{get builder(){return c(s)}},null),B(L),J(()=>xe=ue(L,xe,{...c(s),...l})),ce(L,E=>c(s).action(E)),pe(3,L,b,C),V(()=>S("m-pointerdown",L,h)),V(()=>S("m-pointerenter",L,h)),m(Ae,L)},Ae=>{var L=q(),xe=A(L);ie(xe,()=>R()&&$()&&n(),ge=>{var E=qt();de(E,z=>_(z),()=>_());let we;var ve=j(E);K(ve,e,"default",{get builder(){return c(s)}},null),B(E),J(()=>we=ue(E,we,{...c(s),...l})),ce(E,z=>c(s).action(z)),pe(1,E,R,O),pe(2,E,$,T),V(()=>S("m-pointerdown",E,h)),V(()=>S("m-pointerenter",E,h)),m(ge,E)},ge=>{var E=q(),we=A(E);ie(we,()=>R()&&n(),ve=>{var z=Gt();de(z,N=>_(N),()=>_());let Ce;var me=j(z);K(me,e,"default",{get builder(){return c(s)}},null),B(z),J(()=>Ce=ue(z,Ce,{...c(s),...l})),ce(z,N=>c(s).action(N)),pe(1,z,R,O),V(()=>S("m-pointerdown",z,h)),V(()=>S("m-pointerenter",z,h)),m(ve,z)},ve=>{var z=q(),Ce=A(z);ie(Ce,()=>$()&&n(),me=>{var N=Wt();de(N,U=>_(U),()=>_());let Pe;var $e=j(N);K($e,e,"default",{get builder(){return c(s)}},null),B(N),J(()=>Pe=ue(N,Pe,{...c(s),...l})),ce(N,U=>c(s).action(U)),pe(2,N,$,T),V(()=>S("m-pointerdown",N,h)),V(()=>S("m-pointerenter",N,h)),m(me,N)},me=>{var N=q(),Pe=A(N);ie(Pe,n,$e=>{var U=Ft();de(U,He=>_(He),()=>_());let Re;var nt=j(U);K(nt,e,"default",{get builder(){return c(s)}},null),B(U),J(()=>Re=ue(U,Re,{...c(s),...l})),ce(U,He=>c(s).action(He)),V(()=>S("m-pointerdown",U,h)),V(()=>S("m-pointerenter",U,h)),m($e,U)},null,!0),m(me,N)},!0),m(ve,z)},!0),m(ge,E)},!0),m(Ae,L)},!0),m(te,ne)}),m(t,ee),be()}var Ut=G("<button><!></button>");function Jt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]),l=re(o,["asChild","id","el"]);he(e,!1);const r=De(),f=()=>fe(R,"$trigger",r),n=Te();let s=d(e,"asChild",8,!1),b=d(e,"id",24,()=>{}),C=d(e,"el",28,()=>{});const{elements:{trigger:R},ids:O,getAttrs:$}=Ie(),T=Qe(),g=$("trigger");D(()=>x(b()),()=>{b()&&O.trigger.set(b())}),D(()=>f(),()=>{ke(n,f())}),D(()=>c(n),()=>{Object.assign(c(n),g)}),Ee(),ye();var k=q(),I=A(k);ie(I,s,H=>{var v=q(),a=A(v);K(a,e,"default",{get builder(){return c(n)}},null),m(H,v)},H=>{var v=Ut();de(v,w=>C(w),()=>C());let a;var P=j(v);K(P,e,"default",{get builder(){return c(n)}},null),B(v),J(()=>a=ue(v,a,{...c(n),type:"button",...l})),ce(v,w=>c(n).action(w)),V(()=>S("m-blur",v,T)),V(()=>S("m-focus",v,T)),V(()=>S("m-keydown",v,T)),V(()=>S("m-pointerdown",v,T)),V(()=>S("m-pointerenter",v,T)),V(()=>S("m-pointerleave",v,T)),m(H,v)}),m(t,k),be()}function Kt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]);Ze(t,Be({name:"chevron-left"},()=>o,{iconNode:[["path",{d:"m15 18-6-6 6-6"}]],children:(r,f)=>{var n=q(),s=A(n);K(s,e,"default",{},null),m(r,n)},$$slots:{default:!0}}))}function Xt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]);Ze(t,Be({name:"house"},()=>o,{iconNode:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],children:(r,f)=>{var n=q(),s=A(n);K(s,e,"default",{},null),m(r,n)},$$slots:{default:!0}}))}function Ke(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]),l=re(o,["class","sideOffset","transition","transitionConfig"]);he(e,!1);let r=d(e,"class",8,void 0),f=d(e,"sideOffset",8,4),n=d(e,"transition",8,Pt),s=d(e,"transitionConfig",24,()=>({y:8,duration:150}));ye();var b=_e(()=>Ot("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground",r()));Lt(t,Be({get transition(){return n()},get transitionConfig(){return s()},get sideOffset(){return f()},get class(){return c(b)}},()=>l,{children:(C,R)=>{var O=q(),$=A(O);K($,e,"default",{},null),m(C,O)},$$slots:{default:!0}})),be()}const Xe=It,Ye=Jt;var Yt=G('<!> <span class="sr-only"> </span>',1),Qt=G("<p> </p>"),Zt=G("<!> <!>",1),en=G('<!> <span class="sr-only"> </span>',1),tn=G("<p> </p>"),nn=G("<!> <!>",1),on=G('<div class="flex h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-white to-sky-200 p-4 text-center dark:from-sky-800 dark:to-black md:h-[calc(100dvh_-_4rem)]"><div class="mx-8 my-auto aspect-square h-[100vw] max-h-[calc((100dvh_-_3.5rem)_/_2)] max-w-full drop-shadow-xl"><!></div> <div class="mb-auto w-full max-w-lg transform rounded-lg bg-background/25 p-4 shadow-xl backdrop-blur-lg transition-transform hover:scale-105 hover:shadow-2xl md:my-auto md:p-8"><h1 class="mb-6 text-4xl font-extrabold text-red-700 dark:text-red-400 md:text-5xl"> </h1> <p class="mb-2 text-lg font-medium md:text-xl"> </p> <!> <div class="flex w-full flex-row justify-center space-x-16 md:absolute md:inset-0 md:h-8 md:justify-between md:p-4"><!> <!></div></div></div>');function rn(t,e){he(e,!1);const o=De(),l=()=>fe(Et,"$page",o),r=()=>fe(Tt,"$language",o);let f=Te(),n=Te();D(()=>l(),()=>{ke(f,l().status||500)}),D(()=>l(),()=>{var a;ke(n,((a=l().error)==null?void 0:a.message)||"An unexpected error occurred.")}),Ee(),ye();var s=on(),b=j(s),C=j(b);kt(C,{class:"fill-current text-red-700 dark:text-red-400"}),B(b);var R=Z(b,2),O=j(R),$=j(O);B(O);var T=Z(O,2),g=j(T);B(T);var k=Z(T,2);Ve(k,{href:"https://github.com/Mapagmataas1331/ma/issues",variant:"link",class:"mb-6 text-sm font-medium md:text-base",children:(a,P)=>{it();var w=ot();J(()=>ae(w,r()==="ru"?"Сообщить об ошибке":"Submit an issue")),m(a,w)},$$slots:{default:!0}});var I=Z(k,2),H=j(I);Xe(H,{children:(a,P)=>{var w=Zt(),W=A(w);Ye(W,{asChild:!0,children:qe,$$slots:{default:(F,X)=>{const M=_e(()=>X.builder);var _=_e(()=>[c(M)]);Ve(F,{get builders(){return c(_)},variant:"ghost",size:"icon",class:"shrink-0 hover:bg-blue-200 dark:hover:bg-blue-900",$$events:{click:()=>history.back()},children:(i,u)=>{var p=Yt(),y=A(p);Kt(y,{class:"h-6 w-6"});var h=Z(y,2),Q=j(h);B(h),J(()=>ae(Q,r()==="ru"?"Назад":"Go back")),m(i,p)},$$slots:{default:!0}})}}});var Y=Z(W,2);Ke(Y,{children:(F,X)=>{var M=Qt(),_=j(M);B(M),J(()=>ae(_,r()==="ru"?"Вернуться назад":"Go back")),m(F,M)},$$slots:{default:!0}}),m(a,w)},$$slots:{default:!0}});var v=Z(H,2);Xe(v,{children:(a,P)=>{var w=nn(),W=A(w);Ye(W,{asChild:!0,children:qe,$$slots:{default:(F,X)=>{const M=_e(()=>X.builder);var _=_e(()=>[c(M)]);Ve(F,{get builders(){return c(_)},variant:"ghost",size:"icon",class:"shrink-0 hover:bg-blue-200 dark:hover:bg-blue-900",href:"/",children:(i,u)=>{var p=en(),y=A(p);Xt(y,{class:"h-6 w-6"});var h=Z(y,2),Q=j(h);B(h),J(()=>ae(Q,r()==="ru"?"На главную":"Go home")),m(i,p)},$$slots:{default:!0}})}}});var Y=Z(W,2);Ke(Y,{children:(F,X)=>{var M=tn(),_=j(M);B(M),J(()=>ae(_,r()==="ru"?"Вернутся на главную":"Go home")),m(F,M)},$$slots:{default:!0}}),m(a,w)},$$slots:{default:!0}}),B(I),B(R),B(s),J(()=>{ae($,c(f)),ae(g,c(n))}),m(t,s),be()}function un(t){rn(t,{})}export{un as component};
