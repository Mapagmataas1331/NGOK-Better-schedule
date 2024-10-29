import{j as De,p as d,c as G,b as m,k as fe,l as re,i as ie,d as de,t as q,f as S,g as Ne,e as ot,s as ae}from"../chunks/disclose-version.BH04v4EY.js";import{t as rt,C as st,D as at,k as he,F as E,G as Ee,o as A,q as be,H as x,g as u,y as J,I as V,x as j,z as N,J as Te,f as ke,B as _e,w as Z,K as it,L as Ge}from"../chunks/utils.DoWZESi3.js";import{t as qe,o as lt,g as dt,h as ut,m as Me,j as ze,k as Be,l as oe,r as ct,n as Fe,p as ft,q as Se,u as gt,v as vt,w as Le,x as mt,y as pt,z as _t,A as ht,B as bt,C as We,D as Ue,E as yt,F as xt,G as wt,H as Ct,i as ye,s as K,I as Qe,a as ue,J as pe,b as ce,K as Ze,L as Pt,d as Ot,M as Tt}from"../chunks/index.DXWn1xnI.js";import{L as kt,B as Ve,p as Dt}from"../chunks/stores.BEN02Cya.js";import{d as et,w as Je}from"../chunks/index.Bj_6Sl8i.js";function Et(t){const e=t.slice();return e.sort($t),At(e)}function At(t){if(t.length<=1)return t.slice();const e=[];for(let l=0;l<t.length;l++){const r=t[l];for(;e.length>=2;){const f=e[e.length-1],n=e[e.length-2];if((f.x-n.x)*(r.y-n.y)>=(f.y-n.y)*(r.x-n.x))e.pop();else break}e.push(r)}e.pop();const o=[];for(let l=t.length-1;l>=0;l--){const r=t[l];for(;o.length>=2;){const f=o[o.length-1],n=o[o.length-2];if((f.x-n.x)*(r.y-n.y)>=(f.y-n.y)*(r.x-n.x))o.pop();else break}o.push(r)}return o.pop(),e.length==1&&o.length==1&&e[0].x==o[0].x&&e[0].y==o[0].y?e:e.concat(o)}function $t(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}function Ht(t){const e=t.getBoundingClientRect();return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.right,y:e.bottom},{x:e.left,y:e.bottom}]}function Mt(t){const e=t.flatMap(o=>Ht(o));return Et(e)}function zt(t,e){let o=!1;for(let l=0,r=e.length-1;l<e.length;r=l++){const f=e[l].x,n=e[l].y,s=e[r].x,b=e[r].y;n>t.y!=b>t.y&&t.x<(s-f)*(t.y-n)/(b-n)+f&&(o=!o)}return o}const Bt={positioning:{placement:"bottom"},arrowSize:8,defaultOpen:!1,closeOnPointerDown:!0,openDelay:1e3,closeDelay:0,forceVisible:!1,portal:void 0,closeOnEscape:!0,disableHoverableContent:!1,group:void 0},{name:je}=gt("tooltip"),Oe=new Map,St=["trigger","content"];function Vt(t){const e={...Bt,...t},o=qe(lt(e,"open","ids")),{positioning:l,arrowSize:r,closeOnPointerDown:f,openDelay:n,closeDelay:s,forceVisible:b,portal:C,closeOnEscape:R,disableHoverableContent:O,group:$}=o,T=e.open??Je(e.defaultOpen),g=dt(T,e==null?void 0:e.onOpenChange),k=Je(null),I=qe({...ut(St),...e.ids});let H=!1;const v=i=>We?document.getElementById(I[i].get()):null;let a=null,P=null;function w(i){P&&(window.clearTimeout(P),P=null),a||(a=window.setTimeout(()=>{g.set(!0),k.update(c=>c??i),a=null},n.get()))}function F(i){if(a&&(window.clearTimeout(a),a=null),i&&_){k.set("pointer");return}P||(P=window.setTimeout(()=>{g.set(!1),k.set(null),i&&(H=!1),P=null},s.get()))}const Y=et([g,b],([i,c])=>i||c),L=Me(je("trigger"),{stores:[I.content,I.trigger,g],returned:([i,c,p])=>({"aria-describedby":i,id:c,"data-state":p?"open":"closed"}),action:i=>{const c=y=>{R.get()&&y.key===vt.ESCAPE&&(a&&(window.clearTimeout(a),a=null),g.set(!1))};return{destroy:ze(oe(i,"pointerdown",()=>{f.get()&&(g.set(!1),H=!0,a&&(window.clearTimeout(a),a=null))}),oe(i,"pointerenter",y=>{Le(y)||w("pointer")}),oe(i,"pointerleave",y=>{Le(y)||a&&(window.clearTimeout(a),a=null)}),oe(i,"focus",()=>{H||w("focus")}),oe(i,"blur",()=>F(!0)),oe(i,"keydown",c),Be(document,"keydown",c))}}}),X=Me(je("content"),{stores:[Y,g,C,I.content],returned:([i,c,p,y])=>ct({role:"tooltip",hidden:i?void 0:!0,tabindex:-1,style:i?void 0:Fe({display:"none"}),id:y,"data-portal":ft(p),"data-state":c?"open":"closed"}),action:i=>{let c=Ue,p=Ue;const y=Se([Y,l,C],([ee,se,te])=>{p(),c();const ne=v("trigger");!ee||!ne||rt().then(()=>{p(),c();const le=mt(i,te);le&&(p=pt(i,le).destroy),c=_t(ne,i,se).destroy})});function h(ee){if(!g.get())return;const se=ee.target;if(!ht(se)&&!bt(se))return;const te=v("trigger");te&&se.contains(te)&&F()}const Q=ze(oe(i,"pointerenter",()=>w("pointer")),oe(i,"pointerdown",()=>w("pointer")),Be(window,"scroll",h,{capture:!0}));return{destroy(){Q(),p(),c(),y()}}}}),M=Me(je("arrow"),{stores:r,returned:i=>({"data-arrow":!0,style:Fe({position:"absolute",width:`var(--arrow-size, ${i}px)`,height:`var(--arrow-size, ${i}px)`})})});let _=!1;return Se(g,i=>{const c=$.get();if(c===void 0||c===!1)return;if(!i){Oe.get(c)===g&&Oe.delete(c);return}const p=Oe.get(c);p==null||p.set(!1),Oe.set(c,g)}),Se([g,k],([i,c])=>{if(!(!i||!We))return ze(Be(document,"mousemove",p=>{const y=v("content"),h=v("trigger");if(!y||!h)return;const Q=O.get()?[h]:[h,y],ee=Mt(Q);_=zt({x:p.clientX,y:p.clientY},ee),c==="pointer"&&(_||F())}))}),{ids:I,elements:{trigger:L,content:X,arrow:M},states:{open:g},options:o}}function tt(){return{NAME:"tooltip",PARTS:["arrow","content","trigger"]}}function jt(t){const{NAME:e,PARTS:o}=tt(),l=yt(e,o),r={...Vt({positioning:{placement:"top",gutter:0},openDelay:700,...xt(t),forceVisible:!0}),getAttrs:l};return st(e,r),{...r,updateOption:wt(r.options)}}function Ie(){const{NAME:t}=tt();return at(t)}function Nt(t){const o={...{side:"top",align:"center",sideOffset:1},...t},{options:{positioning:l}}=Ie();Ct(l)({...o})}function It(t,e){he(e,!1);const o=De(),l=()=>fe(I,"$idValues",o);let r=d(e,"closeOnEscape",24,()=>{}),f=d(e,"portal",24,()=>{}),n=d(e,"closeOnPointerDown",24,()=>{}),s=d(e,"openDelay",24,()=>{}),b=d(e,"closeDelay",24,()=>{}),C=d(e,"open",28,()=>{}),R=d(e,"onOpenChange",24,()=>{}),O=d(e,"disableHoverableContent",24,()=>{}),$=d(e,"group",24,()=>{});const{states:{open:T},updateOption:g,ids:k}=jt({closeOnEscape:r(),portal:f(),closeOnPointerDown:n(),openDelay:s(),closeDelay:b(),forceVisible:!0,defaultOpen:C(),disableHoverableContent:O(),group:$(),onOpenChange:({next:a})=>{var P;return C()!==a&&((P=R())==null||P(a),C(a)),a},positioning:{gutter:0,offset:{mainAxis:1}}}),I=et([k.content,k.trigger],([a,P])=>({content:a,trigger:P}));E(()=>x(C()),()=>{C()!==void 0&&T.set(C())}),E(()=>x(r()),()=>{g("closeOnEscape",r())}),E(()=>x(f()),()=>{g("portal",f())}),E(()=>x(n()),()=>{g("closeOnPointerDown",n())}),E(()=>x(s()),()=>{g("openDelay",s())}),E(()=>x(b()),()=>{g("closeDelay",b())}),E(()=>x($()),()=>{g("group",$())}),E(()=>x(O()),()=>{g("disableHoverableContent",O())}),Ee(),ye();var H=G(),v=A(H);K(v,e,"default",{get ids(){return l()}},null),m(t,H),be()}var Rt=q("<div><!></div>"),Gt=q("<div><!></div>"),qt=q("<div><!></div>"),Ft=q("<div><!></div>"),Lt=q("<div><!></div>");function Wt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]),l=re(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);he(e,!1);const r=De(),f=()=>fe(i,"$content",r),n=()=>fe(c,"$open",r),s=Te();let b=d(e,"transition",24,()=>{}),C=d(e,"transitionConfig",24,()=>{}),R=d(e,"inTransition",24,()=>{}),O=d(e,"inTransitionConfig",24,()=>{}),$=d(e,"outTransition",24,()=>{}),T=d(e,"outTransitionConfig",24,()=>{}),g=d(e,"asChild",8,!1),k=d(e,"id",24,()=>{}),I=d(e,"side",8,"top"),H=d(e,"align",8,"center"),v=d(e,"sideOffset",8,0),a=d(e,"alignOffset",8,0),P=d(e,"collisionPadding",8,8),w=d(e,"avoidCollisions",8,!0),F=d(e,"collisionBoundary",24,()=>{}),Y=d(e,"sameWidth",8,!1),L=d(e,"fitViewport",8,!1),X=d(e,"strategy",8,"absolute"),M=d(e,"overlap",8,!1),_=d(e,"el",28,()=>{});const{elements:{content:i},states:{open:c},ids:p,getAttrs:y}=Ie(),h=Qe(),Q=y("content");E(()=>x(k()),()=>{k()&&p.content.set(k())}),E(()=>f(),()=>{ke(s,f())}),E(()=>u(s),()=>{Object.assign(u(s),Q)}),E(()=>(n(),x(I()),x(H()),x(v()),x(a()),x(P()),x(w()),x(F()),x(Y()),x(L()),x(X()),x(M())),()=>{n()&&Nt({side:I(),align:H(),sideOffset:v(),alignOffset:a(),collisionPadding:P(),avoidCollisions:w(),collisionBoundary:F(),sameWidth:Y(),fitViewport:L(),strategy:X(),overlap:M()})}),Ee(),ye();var ee=G(),se=A(ee);ie(se,()=>g()&&n(),te=>{var ne=G(),le=A(ne);K(le,e,"default",{get builder(){return u(s)}},null),m(te,ne)},te=>{var ne=G(),le=A(ne);ie(le,()=>b()&&n(),Ae=>{var W=Rt();de(W,D=>_(D),()=>_());let xe;var ge=j(W);K(ge,e,"default",{get builder(){return u(s)}},null),N(W),J(()=>xe=ce(W,xe,{...u(s),...l})),ue(W,D=>u(s).action(D)),pe(3,W,b,C),V(()=>S("m-pointerdown",W,h)),V(()=>S("m-pointerenter",W,h)),m(Ae,W)},Ae=>{var W=G(),xe=A(W);ie(xe,()=>R()&&$()&&n(),ge=>{var D=Gt();de(D,z=>_(z),()=>_());let we;var ve=j(D);K(ve,e,"default",{get builder(){return u(s)}},null),N(D),J(()=>we=ce(D,we,{...u(s),...l})),ue(D,z=>u(s).action(z)),pe(1,D,R,O),pe(2,D,$,T),V(()=>S("m-pointerdown",D,h)),V(()=>S("m-pointerenter",D,h)),m(ge,D)},ge=>{var D=G(),we=A(D);ie(we,()=>R()&&n(),ve=>{var z=qt();de(z,B=>_(B),()=>_());let Ce;var me=j(z);K(me,e,"default",{get builder(){return u(s)}},null),N(z),J(()=>Ce=ce(z,Ce,{...u(s),...l})),ue(z,B=>u(s).action(B)),pe(1,z,R,O),V(()=>S("m-pointerdown",z,h)),V(()=>S("m-pointerenter",z,h)),m(ve,z)},ve=>{var z=G(),Ce=A(z);ie(Ce,()=>$()&&n(),me=>{var B=Ft();de(B,U=>_(U),()=>_());let Pe;var $e=j(B);K($e,e,"default",{get builder(){return u(s)}},null),N(B),J(()=>Pe=ce(B,Pe,{...u(s),...l})),ue(B,U=>u(s).action(U)),pe(2,B,$,T),V(()=>S("m-pointerdown",B,h)),V(()=>S("m-pointerenter",B,h)),m(me,B)},me=>{var B=G(),Pe=A(B);ie(Pe,n,$e=>{var U=Lt();de(U,He=>_(He),()=>_());let Re;var nt=j(U);K(nt,e,"default",{get builder(){return u(s)}},null),N(U),J(()=>Re=ce(U,Re,{...u(s),...l})),ue(U,He=>u(s).action(He)),V(()=>S("m-pointerdown",U,h)),V(()=>S("m-pointerenter",U,h)),m($e,U)},null,!0),m(me,B)},!0),m(ve,z)},!0),m(ge,D)},!0),m(Ae,W)},!0),m(te,ne)}),m(t,ee),be()}var Ut=q("<button><!></button>");function Jt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]),l=re(o,["asChild","id","el"]);he(e,!1);const r=De(),f=()=>fe(R,"$trigger",r),n=Te();let s=d(e,"asChild",8,!1),b=d(e,"id",24,()=>{}),C=d(e,"el",28,()=>{});const{elements:{trigger:R},ids:O,getAttrs:$}=Ie(),T=Qe(),g=$("trigger");E(()=>x(b()),()=>{b()&&O.trigger.set(b())}),E(()=>f(),()=>{ke(n,f())}),E(()=>u(n),()=>{Object.assign(u(n),g)}),Ee(),ye();var k=G(),I=A(k);ie(I,s,H=>{var v=G(),a=A(v);K(a,e,"default",{get builder(){return u(n)}},null),m(H,v)},H=>{var v=Ut();de(v,w=>C(w),()=>C());let a;var P=j(v);K(P,e,"default",{get builder(){return u(n)}},null),N(v),J(()=>a=ce(v,a,{...u(n),type:"button",...l})),ue(v,w=>u(n).action(w)),V(()=>S("m-blur",v,T)),V(()=>S("m-focus",v,T)),V(()=>S("m-keydown",v,T)),V(()=>S("m-pointerdown",v,T)),V(()=>S("m-pointerenter",v,T)),V(()=>S("m-pointerleave",v,T)),m(H,v)}),m(t,k),be()}function Kt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]);Ze(t,Ne({name:"chevron-left"},()=>o,{iconNode:[["path",{d:"m15 18-6-6 6-6"}]],children:(r,f)=>{var n=G(),s=A(n);K(s,e,"default",{},null),m(r,n)},$$slots:{default:!0}}))}function Xt(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]);Ze(t,Ne({name:"house"},()=>o,{iconNode:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],children:(r,f)=>{var n=G(),s=A(n);K(s,e,"default",{},null),m(r,n)},$$slots:{default:!0}}))}function Ke(t,e){const o=re(e,["children","$$slots","$$events","$$legacy"]),l=re(o,["class","sideOffset","transition","transitionConfig"]);he(e,!1);let r=d(e,"class",8,void 0),f=d(e,"sideOffset",8,4),n=d(e,"transition",8,Pt),s=d(e,"transitionConfig",24,()=>({y:8,duration:150}));ye();var b=_e(()=>Ot("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground",r()));Wt(t,Ne({get transition(){return n()},get transitionConfig(){return s()},get sideOffset(){return f()},get class(){return u(b)}},()=>l,{children:(C,R)=>{var O=G(),$=A(O);K($,e,"default",{},null),m(C,O)},$$slots:{default:!0}})),be()}const Xe=It,Ye=Jt;var Yt=q('<!> <span class="sr-only"> </span>',1),Qt=q("<p> </p>"),Zt=q("<!> <!>",1),en=q('<!> <span class="sr-only"> </span>',1),tn=q("<p> </p>"),nn=q("<!> <!>",1),on=q('<div class="flex h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-white to-sky-200 p-4 text-center dark:from-sky-800 dark:to-black md:h-[calc(100dvh_-_4rem)]"><div class="mx-8 my-auto aspect-square h-[100vw] max-h-[calc((100dvh_-_3.5rem)_/_2)] max-w-full drop-shadow-xl"><!></div> <div class="mb-auto w-full max-w-lg transform rounded-lg bg-background/25 p-4 shadow-xl backdrop-blur-lg transition-transform hover:scale-105 hover:shadow-2xl md:my-auto md:p-8"><h1 class="mb-6 text-4xl font-extrabold text-red-700 dark:text-red-400 md:text-5xl"> </h1> <p class="mb-2 text-lg font-medium md:text-xl"> </p> <!> <div class="flex w-full flex-row justify-center space-x-16 md:absolute md:inset-0 md:h-8 md:justify-between md:p-4"><!> <!></div></div></div>');function rn(t,e){he(e,!1);const o=De(),l=()=>fe(Dt,"$page",o),r=()=>fe(Tt,"$language",o);let f=Te(),n=Te();E(()=>l(),()=>{ke(f,l().status||500)}),E(()=>l(),()=>{var a;ke(n,((a=l().error)==null?void 0:a.message)||"An unexpected error occurred.")}),Ee(),ye();var s=on(),b=j(s),C=j(b);kt(C,{class:"fill-current text-red-700 dark:text-red-400"}),N(b);var R=Z(b,2),O=j(R),$=j(O,!0);N(O);var T=Z(O,2),g=j(T,!0);N(T);var k=Z(T,2);Ve(k,{href:"https://github.com/Mapagmataas1331/ma/issues",variant:"link",class:"mb-6 text-sm font-medium md:text-base",children:(a,P)=>{it();var w=ot();J(()=>ae(w,r()==="ru"?"Сообщить об ошибке":"Submit an issue")),m(a,w)},$$slots:{default:!0}});var I=Z(k,2),H=j(I);Xe(H,{children:(a,P)=>{var w=Zt(),F=A(w);Ye(F,{asChild:!0,children:Ge,$$slots:{default:(L,X)=>{const M=_e(()=>X.builder);var _=_e(()=>[u(M)]);Ve(L,{get builders(){return u(_)},variant:"ghost",size:"icon",class:"shrink-0 hover:bg-blue-200 dark:hover:bg-blue-900",$$events:{click:()=>history.back()},children:(i,c)=>{var p=Yt(),y=A(p);Kt(y,{class:"h-6 w-6"});var h=Z(y,2),Q=j(h,!0);N(h),J(()=>ae(Q,r()==="ru"?"Назад":"Go back")),m(i,p)},$$slots:{default:!0}})}}});var Y=Z(F,2);Ke(Y,{children:(L,X)=>{var M=Qt(),_=j(M,!0);N(M),J(()=>ae(_,r()==="ru"?"Вернуться назад":"Go back")),m(L,M)},$$slots:{default:!0}}),m(a,w)},$$slots:{default:!0}});var v=Z(H,2);Xe(v,{children:(a,P)=>{var w=nn(),F=A(w);Ye(F,{asChild:!0,children:Ge,$$slots:{default:(L,X)=>{const M=_e(()=>X.builder);var _=_e(()=>[u(M)]);Ve(L,{get builders(){return u(_)},variant:"ghost",size:"icon",class:"shrink-0 hover:bg-blue-200 dark:hover:bg-blue-900",href:"/",children:(i,c)=>{var p=en(),y=A(p);Xt(y,{class:"h-6 w-6"});var h=Z(y,2),Q=j(h,!0);N(h),J(()=>ae(Q,r()==="ru"?"На главную":"Go home")),m(i,p)},$$slots:{default:!0}})}}});var Y=Z(F,2);Ke(Y,{children:(L,X)=>{var M=tn(),_=j(M,!0);N(M),J(()=>ae(_,r()==="ru"?"Вернутся на главную":"Go home")),m(L,M)},$$slots:{default:!0}}),m(a,w)},$$slots:{default:!0}}),N(I),N(R),N(s),J(()=>{ae($,u(f)),ae(g,u(n))}),m(t,s),be()}function cn(t){rn(t,{})}export{cn as component};
