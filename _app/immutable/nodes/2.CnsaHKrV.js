import{p as T,t as f,i as M,c as i,a as t,s as zt,b as Ke,d as L,e as W,f as x,g as Et}from"../chunks/DXY0rfsH.js";import{p as Ut,s as ee,t as b,a as qt,b as c,c as Q,g as e,d as l,u as Gt,f as d,e as te,n as z,r as F,h as Xe}from"../chunks/B2PMlZio.js";import{t as Ie,C as At,k as Bt}from"../chunks/DhA_3YI6.js";import{B as Ge,l as Wt,e as Je,i as Ze,c as Ft,s as Ht}from"../chunks/DC8nUZzH.js";import{s as dt,p as Nt}from"../chunks/G6LXMITQ.js";import{o as Vt,a as Yt}from"../chunks/GrwCXr2j.js";import{$ as Me,a as Le,S as Qt,T as Kt,P as Xt,C as Jt,b as Zt,c as et,d as er,e as tr,f as rr,g as ar,R as sr,h as it,v as or,i as lr,j as nr,k as dr,l as tt,B as ir,A as ct,m as ut,n as vt,H as cr,o as ft,p as ur,M as vr,q as fr,r as Ae,s as pt,t as pr,u as Se,w as _r}from"../chunks/CtGbRv2u.js";import{S as mr}from"../chunks/WAdjd4xe.js";import{X as gr}from"../chunks/_fsvTDOQ.js";var hr=f('<div class="absolute top-[20dvh]"><h1 class="mb-4 text-center text-3xl font-bold md:text-4xl"> </h1> <p class=" text-center"> </p></div>'),$r=f(" <!>",1),xr=f("<!> ",1),br=f("<!> <!>",1),yr=f("<!> <!>",1),wr=f("<!> <!>",1),kr=f('<div class="group flex min-h-9 w-full flex-col items-center justify-center rounded-md border-input bg-background px-3 py-2 font-medium shadow-md"><div class="flex w-full items-center justify-between text-sm"><!> <!></div> <!> <!></div>'),Sr=f("<!> <!> <!>",1),Pr=f("<!> <!>",1),Dr=f(" <!>",1),Tr=f("<!> <!>",1),Or=f('<a target="_blank" class="underline"> </a>'),Cr=f("<!> <!>",1),Rr=f("<!> <!>",1),jr=f("<!> <!>",1),Ir=f("<!> <!>",1),Mr=f('<div class="w-full min-w-[320px] max-w-[512px] rounded-md border bg-background p-1 shadow-md"><!></div>'),Lr=f("<div></div>"),zr=f('<!> <p> </p> <p class="font-semibold !text-cyan-700 dark:!text-cyan-400"> </p>',1),Er=f('Лучшая <span class="!text-green-700 dark:!text-green-400">благодарность</span> <a class="font-semibold hover:underline" href="https://ma.cyou/">Автору</a>',1),Ur=f('Best Thanks to the <a class="font-semibold hover:underline" href="https://ma.cyou/">Author</a>',1),qr=f('это подписка на <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331">GitHub</a> и звездочка на <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331/ma">Репозиторий</a>',1),Gr=f('is a subscription on <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331">GitHub</a> and a star on <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331/ma">Repository</a>',1),Ar=f("<!> <!> <!>",1),Br=f("<!> <!>",1),Wr=f('<div><!> <!> <div class="md:1/2 m-1 mt-3 flex w-full flex-col gap-y-2 md:w-[512px]"><div class="flex flex-row gap-0"><!> <!></div> <!></div> <!> <!></div>');function Zr(_t,mt){Ut(mt,!0);const[Be,gt]=zt(),y=()=>Ke(Wt,"$language",Be),rt=()=>Ke(Nt,"$page",Be),We=()=>Ke(or,"$viewport",Be);let p=ee(""),Pe=ee(!1),ze=ee(null);function ht(){l(Pe,!1),Xe().then(()=>{e(ze).focus()})}let U=ee(T({start:Me(Le()),end:Me(Le()).add({days:6})})),$e=ee(""),j=null,De={},ve=ee(T({})),fe=ee(T({})),Fe=ee(!1),O=ee(""),re=ee(null),q=null;const $t=async()=>{l(O,"loading");const r=await it("student");if((r.scheduleError||!r.schedule)&&(e(re)||!j)){l(O,"error"),l(re,T(r.scheduleError)),q&&clearInterval(q);return}j=r.schedule,l(re,T(r.scheduleError)),await Xe(),l(O,"hidden"),l(ve,T(yt())),De=St()},Ee=async(r=!0)=>{bt(),e(p)&&(l(Fe,!0),e(p)&&e(U)&&(He(),r&&l($e,T(e(p)))),q&&clearInterval(q),await Xe(),q=setInterval(async()=>{if(!e(p)){q&&clearInterval(q);return}const a=await it("student");if((a.scheduleError||!a.schedule)&&(e(re)||!j)){l(O,"error"),l(re,T(a.scheduleError)),q&&clearInterval(q);return}if(j=a.schedule,Ie.success(y()==="ru"?"Расписание обновлено в "+new Date().toLocaleString("ru-RU",{hour12:!1}):"Schedule updated at "+new Date().toLocaleString("en-US",{hour12:!1})),!e(p)){q&&clearInterval(q);return}He()},3e5))},xt=()=>{e(p)&&e(U)&&He()},He=()=>{if(!e(U).start||!e(U).end){l(O,"hidden");return}l(O,"loading");const r=ft(e(U).start),a=ft(e(U).end);let s=[],o=r;for(;o<=a;){const v=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),m=o.getFullYear().toString().slice(-2),u=`${v}.${n}.${m}`;s.push(u),o.setDate(o.getDate()+1)}l(fe,T(s.reduce((v,n)=>{if(!j)return l(re,"Error: Schedule is null"),l(O,"error"),{};let m=[];if(De[n])for(let u=De[n];u<De[wt(n)]||u<De[n]+6*3;u+=3){const C=j[u][2],w=j[u][e(ve)[e(p)]],g=j[u+1][e(ve)[e(p)]],_=j[u+2][e(ve)[e(p)]],h=j[u][e(ve)[e(p)]+1];w&&m.push({time:C||"",discipline:w||"",type:g||"",teacher:_||"",auditorium:h||""})}return v[n]=m,v},{}))),l(O,"visible")},bt=()=>{l(O,"hidden"),l(fe,T({})),l(Fe,!1),l(U,T({start:Me(Le()),end:Me(Le()).add({days:6})}))},yt=()=>j?j[0].reduce((r,a,s)=>(s>2&&a&&!r[a]&&(r[a]=s),r),{}):(l(re,"Error: Schedule is null"),l(O,"error"),{}),wt=r=>{const[a,s,o]=r.split("."),v=new Date(`20${o}-${s}-${a}`);v.setDate(v.getDate()+1);const n=String(v.getDate()).padStart(2,"0"),m=String(v.getMonth()+1).padStart(2,"0"),u=v.getFullYear().toString().slice(-2);return`${n}.${m}.${u}`},kt=(r,a="ru")=>{let s=[];a==="ru"?s=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]:s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const[o,v,n]=r.split("."),m=new Date(`20${n}-${v}-${o}`);return s[m.getDay()]||"Неизвестный день!"},St=()=>j?j.reduce((r,a,s)=>{const o=a[0].split(" ")[1];return s>0&&o&&o!=="undefined"&&/\b(\d{2}\.\d{2}\.\d{2})\b/.test(o)&&(r[o]=s),r},{}):(l(re,"Error: Schedule is null"),l(O,"error"),{});Vt(async()=>{$t(),l($e,T(localStorage.getItem("slq")||"")),Gt((a=e($e))=>{localStorage.setItem("slq",a)});const r=rt().url.searchParams.get("q")||rt().url.searchParams.get("group")||"";if(r){const a=decodeURI(r),s=()=>{if(!e(ve)[a]){Ie.error(y()==="ru"?`Некорректная группа передана в URL: "${a}"`:`Incorrect group passed in URL: "${a}"`);return}l(p,T(a)),Ee(),Ie.success(y()==="ru"?`Группа "${a}" успешно загружена из URL`:`"${a}" group are successfully loaded from URL`);const o=new URL(window.location.href);o.searchParams.delete("year"),o.searchParams.delete("group"),o.searchParams.delete("q"),history.replaceState({},"",o.toString())};if(j)s();else{const o=setInterval(()=>{j&&(clearInterval(o),s())},500)}}}),Yt(()=>{q&&clearInterval(q)});var Ue=Wr(),at=Q(Ue);{var Pt=r=>{var a=hr(),s=Q(a),o=Q(s,!0);F(s);var v=c(s,2),n=Q(v,!0);F(v),F(a),b(()=>{x(o,y()==="ru"?"Расписание НГОК":"NGOK Schedule"),x(n,y()==="ru"?"Выберите группу, чтобы увидеть расписание":"Select a group to see the schedule")}),t(r,a)};M(at,r=>{e(O)!=="visible"&&r(Pt)})}var st=c(at,2);Ge(st,{variant:"outline",size:"icon",class:"fixed right-14 top-2.5 z-40 md:right-16 md:top-3.5",onclick:()=>{e(p)?(navigator.clipboard.writeText(`${window.location.origin}?q=${encodeURI(e(p))}`),Ie.success(y()==="ru"?`Ссылка для группы "${e(p)}" скопирована в буфер обмена!`:`Link for "${e(p)}" group copied to clipboard!`)):Ie.error(y()==="ru"?"Сначала выберите группу":"Select a group first")},children:(r,a)=>{Qt(r,{class:"!size-5"})},$$slots:{default:!0}});var Ne=c(st,2),Ve=Q(Ne),ot=Q(Ve);i(ot,()=>sr,(r,a)=>{a(r,{get open(){return e(Pe)},set open(s){l(Pe,T(s))},children:(s,o)=>{var v=wr(),n=d(v);i(n,()=>Kt,(u,C)=>{C(u,{get ref(){return e(ze)},set ref(g){l(ze,T(g))},child:(g,_)=>{let h=()=>_==null?void 0:_().props;const $=te(()=>`w-full justify-between px-3 py-2${e(p)?" rounded-r-none":""}`);Ge(g,Et({variant:"outline",get class(){return e($)}},h,{role:"combobox",get"aria-expanded"(){return e(Pe)},children:(R,P)=>{z();var I=$r(),S=d(I),H=c(S);ar(H,{class:"opacity-50"}),b(()=>x(S,`${(e(p)?e(p):y()==="ru"?"Выберите группу":"Select a group")??""} `)),t(R,I)},$$slots:{default:!0}}))},$$slots:{child:!0}})});var m=c(n,2);i(m,()=>Xt,(u,C)=>{C(u,{class:"z-10 mt-[3px] w-[calc(100dvw-8px)] p-0 md:w-[320px]",children:(w,g)=>{var _=L(),h=d(_);i(h,()=>Jt,($,R)=>{R($,{children:(P,I)=>{var S=yr(),H=d(S);const ae=te(()=>y()==="ru"?"Искать группу":"Search for a group");i(H,()=>Zt,(k,E)=>{E(k,{get placeholder(){return e(ae)},class:"h-9",onfocusin:()=>{We().vw<et.md&&window.scrollTo({top:window.scrollY+e(ze).getBoundingClientRect().top-8,behavior:"smooth"})},onfocusout:()=>{We().vw<et.md&&(l(Pe,!1),window.scrollTo({top:0,behavior:"smooth"}))}})});var xe=c(H,2);i(xe,()=>er,(k,E)=>{E(k,{children:(Ye,nt)=>{var be=br(),ye=d(be);i(ye,()=>tr,(Oe,se)=>{se(Oe,{children:(pe,Ce)=>{z();var oe=W();b(()=>x(oe,y()==="ru"?"Нет результатов":"No results")),t(pe,oe)},$$slots:{default:!0}})});var Te=c(ye,2);i(Te,()=>rr,(Oe,se)=>{se(Oe,{class:"max-h-[256px] overflow-y-auto",children:(pe,Ce)=>{var oe=L(),K=d(oe);Je(K,17,()=>Object.keys(e(ve)),Ze,(de,N)=>{var le=L(),_e=d(le);i(_e,()=>lr,(G,D)=>{D(G,{get value(){return e(N)},onSelect:()=>{l(p,T(e(N))),Ee(),ht()},children:(A,me)=>{var V=xr(),X=d(V);const we=te(()=>Ft(e(p)!==e(N)&&"text-transparent"));At(X,{get class(){return e(we)}});var ie=c(X);b(()=>x(ie,` ${e(N)??""}`)),t(A,V)},$$slots:{default:!0}})}),t(de,le)}),t(pe,oe)},$$slots:{default:!0}})}),t(Ye,be)},$$slots:{default:!0}})}),t(P,S)},$$slots:{default:!0}})}),t(w,_)},$$slots:{default:!0}})}),t(s,v)},$$slots:{default:!0}})});var Dt=c(ot,2);{var Tt=r=>{Ge(r,{variant:"outline",size:"icon",class:"shrink-0 rounded-l-none border-l-0",onclick:()=>{l(p,""),Ee()},children:(a,s)=>{gr(a,{class:"opacity-50"})},$$slots:{default:!0}})};M(Dt,r=>{e(p)&&r(Tt)})}F(Ve);var Ot=c(Ve,2);{var Ct=r=>{var a=L();const s=te(()=>We().vw>=et.md?2:1),o=te(()=>y()==="ru"?"ru":"en");var v=d(a);Bt(v,()=>[e(s),e(o)],n=>{var m=kr(),u=Q(m),C=Q(u);{var w=I=>{var S=W();b((H,ae)=>x(S,`${H??""} - ${ae??""}`),[()=>tt(e(U).start),()=>tt(e(U).end)]),t(I,S)},g=I=>{var S=W();b(()=>x(S,y()==="ru"?"Выберите период":"Select a range")),t(I,S)};M(C,I=>{e(U).start&&e(U).end?I(w):I(g,!1)})}var _=c(C,2);nr(_,{class:"size-4 opacity-50"}),F(u);var h=c(u,2);mr(h,{class:"mt-2 hidden group-hover:block"});var $=c(h,2);const R=te(()=>e(o)==="ru"?0:1),P=te(()=>e(o)==="ru"?"ru":"en");dr($,{get weekStartsOn(){return e(R)},get numberOfMonths(){return e(s)},class:"hidden capitalize group-hover:block",onValueChange:xt,get locale(){return e(P)},get value(){return e(U)},set value(I){l(U,T(I))}}),F(m),t(n,m)}),t(r,a)};M(Ot,r=>{e(Fe)&&r(Ct)})}F(Ne);var lt=c(Ne,2);{var Rt=r=>{var a=L(),s=d(a);i(s,()=>vt,(o,v)=>{v(o,{class:"md:1/2 my-1 w-full md:w-[512px]",children:(n,m)=>{var u=Sr(),C=d(u);ir(C,{class:"size-8"});var w=c(C,2);i(w,()=>ct,(_,h)=>{h(_,{class:"!pl-12",children:($,R)=>{z();var P=W();b(()=>x(P,y()==="ru"?"Возникла проблема":"Error Occurred")),t($,P)},$$slots:{default:!0}})});var g=c(w,2);i(g,()=>ut,(_,h)=>{h(_,{class:"!pl-12",children:($,R)=>{z();var P=W();b(()=>x(P,e(re))),t($,P)},$$slots:{default:!0}})}),t(n,u)},$$slots:{default:!0}})}),t(r,a)},jt=r=>{var a=L(),s=d(a);{var o=n=>{ur(n,{class:"md:1/2 my-1 h-8 w-full md:w-[512px]"})},v=n=>{var m=L(),u=d(m);{var C=w=>{var g=Lr();Je(g,21,()=>Object.entries(e(fe)),Ze,(_,h)=>{let $=()=>e(h)[0],R=()=>e(h)[1];var P=Mr(),I=Q(P);i(I,()=>_r,(S,H)=>{H(S,{children:(ae,xe)=>{var k=Ir(),E=d(k);const Ye=te(()=>$()===tt(Me(Le()))?"bg-green-100 dark:bg-green-800/50":R().length>0?"bg-blue-100 dark:bg-blue-800/50":"mt-4 bg-red-100 p-4 dark:bg-red-800/50");i(E,()=>fr,(be,ye)=>{ye(be,{get class(){return`text-base ${e(Ye)??""}`},children:(Te,Oe)=>{var se=L(),pe=d(se);i(pe,()=>Ae,(Ce,oe)=>{oe(Ce,{children:(K,de)=>{var N=Pr(),le=d(N);i(le,()=>pt,(G,D)=>{D(G,{class:"w-1/3 text-right font-semibold text-foreground",children:(A,me)=>{z();var V=W();b(()=>x(V,$())),t(A,V)},$$slots:{default:!0}})});var _e=c(le,2);i(_e,()=>pt,(G,D)=>{D(G,{class:"w-2/3 text-left font-semibold text-foreground",children:(A,me)=>{z();var V=W();b(X=>x(V,X),[()=>kt($(),y())]),t(A,V)},$$slots:{default:!0}})}),t(K,N)},$$slots:{default:!0}})}),t(Te,se)},$$slots:{default:!0}})});var nt=c(E,2);i(nt,()=>pr,(be,ye)=>{ye(be,{class:"bg-background",children:(Te,Oe)=>{var se=L(),pe=d(se);{var Ce=K=>{var de=jr(),N=d(de);{var le=G=>{var D=L(),A=d(D);i(A,()=>Ae,(me,V)=>{V(me,{children:(X,we)=>{var ie=L(),Qe=d(ie);i(Qe,()=>Se,(ge,he)=>{he(ge,{class:"text-center font-semibold italic",colspan:2,children:(Re,ce)=>{z();var J=Dr();const Y=te(()=>{var ue;return(ue=R()[0])==null?void 0:ue.time});var ke=d(J),B=c(ke);{var je=ue=>{var qe=W();const Z=te(()=>e(Y).includes("-")?e(Y).split("-")[0]:e(Y));b(ne=>x(qe,ne),[()=>e(Z).includes(".")?e(Z).replace(/\./g,":"):e(Z)]),t(ue,qe)};M(B,ue=>{e(Y)&&ue(je)})}b(()=>x(ke,`${(y()==="ru"?"Пары начинаются с":"Lessons start at")??""} `)),t(Re,J)},$$slots:{default:!0}})}),t(X,ie)},$$slots:{default:!0}})}),t(G,D)};M(N,G=>{R()[0].time.startsWith("09:00")||G(le)})}var _e=c(N,2);Je(_e,17,R,Ze,(G,D)=>{var A=Rr(),me=d(A);i(me,()=>Ae,(X,we)=>{we(X,{children:(ie,Qe)=>{var ge=Tr(),he=d(ge);i(he,()=>Se,(ce,J)=>{J(ce,{class:"text-right",children:(Y,ke)=>{z();var B=W();b(je=>x(B,je),[()=>e(D).time.includes(".")?e(D).time.replace(/\./g,":"):e(D).time]),t(Y,B)},$$slots:{default:!0}})});var Re=c(he,2);i(Re,()=>Se,(ce,J)=>{J(ce,{class:"text-left",children:(Y,ke)=>{z();var B=W();b(()=>x(B,e(D).discipline)),t(Y,B)},$$slots:{default:!0}})}),t(ie,ge)},$$slots:{default:!0}})});var V=c(me,2);i(V,()=>Ae,(X,we)=>{we(X,{children:(ie,Qe)=>{var ge=Cr(),he=d(ge);i(he,()=>Se,(ce,J)=>{J(ce,{class:"text-right",children:(Y,ke)=>{var B=L(),je=d(B);{var ue=Z=>{var ne=Or(),Lt=Q(ne,!0);F(ne),b(()=>{Ht(ne,"href",e(D).auditorium),x(Lt,y()==="ru"?"Онлайн":"Online")}),t(Z,ne)},qe=Z=>{var ne=W();b(()=>x(ne,e(D).auditorium)),t(Z,ne)};M(je,Z=>{e(D).auditorium.startsWith("http")?Z(ue):Z(qe,!1)})}t(Y,B)},$$slots:{default:!0}})});var Re=c(he,2);i(Re,()=>Se,(ce,J)=>{J(ce,{class:"text-left",children:(Y,ke)=>{z();var B=W();b(()=>x(B,e(D).teacher)),t(Y,B)},$$slots:{default:!0}})}),t(ie,ge)},$$slots:{default:!0}})}),t(G,A)}),t(K,de)},oe=K=>{var de=L(),N=d(de);i(N,()=>Se,(le,_e)=>{_e(le,{class:"text-center font-semibold italic",colspan:2,children:(G,D)=>{z();var A=W();b(()=>x(A,y()==="ru"?"Нет пар":"No lessons")),t(G,A)},$$slots:{default:!0}})}),t(K,de)};M(pe,K=>{R().length>0?K(Ce):K(oe,!1)})}t(Te,se)},$$slots:{default:!0}})}),t(ae,k)},$$slots:{default:!0}})}),F(P),t(_,P)}),F(g),b((_,h,$)=>dt(g,`mx-auto my-1.5 grid grid-cols-1 justify-items-center gap-x-2 gap-y-3 md:p-2${_??""}${h??""}${$??""}`),[()=>Object.keys(e(fe)).length>1?" lg:grid-cols-2 ":"",()=>Object.keys(e(fe)).length>2?" 2xl:grid-cols-3 ":"",()=>Object.keys(e(fe)).length>3?" min-[1792px]:grid-cols-4":""]),t(w,g)};M(u,w=>{e(O)==="visible"&&e(fe)&&w(C)},!0)}t(n,m)};M(s,n=>{e(O)==="loading"?n(o):n(v,!1)},!0)}t(r,a)};M(lt,r=>{e(O)==="error"?r(Rt):r(jt,!1)})}var It=c(lt,2);{var Mt=r=>{var a=Br(),s=d(a);{var o=n=>{Ge(n,{variant:"outline",class:"md:1/2 my-1 w-full !justify-start py-5 md:w-[512px]",onclick:async()=>{l(p,T(e($e))),Ee()},children:(m,u)=>{var C=zr(),w=d(C);vr(w,{class:"ml-1 mr-2.5 !size-6 !text-cyan-700 dark:!text-cyan-400"});var g=c(w,2),_=Q(g,!0);F(g);var h=c(g,2),$=Q(h,!0);F(h),b(()=>{x(_,y()==="ru"?"Последний запрос: ":"Last query:"),x($,e($e))}),t(m,C)},$$slots:{default:!0}})};M(s,n=>{e($e)&&e(O)!=="loading"&&n(o)})}var v=c(s,2);i(v,()=>vt,(n,m)=>{m(n,{class:"md:1/2 my-1 w-full md:w-[512px]",children:(u,C)=>{var w=Ar(),g=d(w);cr(g,{class:"size-8 !text-green-700 dark:!text-green-400"});var _=c(g,2);i(_,()=>ct,($,R)=>{R($,{class:"!pl-12",children:(P,I)=>{var S=L(),H=d(S);{var ae=k=>{var E=Er();z(3),t(k,E)},xe=k=>{var E=Ur();z(),t(k,E)};M(H,k=>{y()==="ru"?k(ae):k(xe,!1)})}t(P,S)},$$slots:{default:!0}})});var h=c(_,2);i(h,()=>ut,($,R)=>{R($,{class:"!pl-12",children:(P,I)=>{var S=L(),H=d(S);{var ae=k=>{var E=qr();z(3),t(k,E)},xe=k=>{var E=Gr();z(3),t(k,E)};M(H,k=>{y()==="ru"?k(ae):k(xe,!1)})}t(P,S)},$$slots:{default:!0}})}),t(u,w)},$$slots:{default:!0}})}),t(r,a)};M(It,r=>{e(O)!=="visible"&&r(Mt)})}F(Ue),b(()=>dt(Ue,`${(e(p)?"justify-start":"justify-center")??""} mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]`)),t(_t,Ue),qt(),gt()}export{Zr as component};
