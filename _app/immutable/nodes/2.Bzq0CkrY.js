import{p as O,t as f,i as M,a as t,s as zt,b as Qe,c as L,d as F,e as x,f as Et}from"../chunks/CHDbkL9n.js";import{p as Ut,s as ee,t as b,a as qt,b as c,c as Q,g as e,d as l,u as Gt,f as d,e as te,n as z,r as H,h as Ke}from"../chunks/BW5O_Kuy.js";import{t as Ce,C as At,k as Bt}from"../chunks/4uajp5PR.js";import{l as Ft,e as Xe,i as Je,c as Ht,s as Nt}from"../chunks/4LsEG6DZ.js";import{c as i}from"../chunks/TqRWhDz0.js";import{s as nt,p as Vt}from"../chunks/CREKsYFf.js";import{o as Wt,a as Yt}from"../chunks/BaNWsKEw.js";import{$ as Re,a as Ie,S as Qt,T as Kt,P as Xt,C as Jt,b as Zt,c as er,d as tr,e as rr,f as ar,R as sr,g as dt,h as or,i as lr,j as nr,k as Ze,B as dr,l as ir,m as it,v as cr,n as ur,M as vr,o as fr,p as qe,q as ct,r as pr,s as Se,t as mr}from"../chunks/DeE7xbg3.js";import{B as Ge}from"../chunks/BEwGYs8X.js";import{A as ut,a as vt,b as ft,H as _r}from"../chunks/BsZPXoma.js";import{S as gr}from"../chunks/DKjgU9O5.js";import{X as hr}from"../chunks/IyBdFYj9.js";var $r=f('<div class="absolute top-[20dvh]"><h1 class="mb-4 text-center text-3xl font-bold md:text-4xl"> </h1> <p class=" text-center"> </p></div>'),xr=f(" <!>",1),br=f("<!> ",1),yr=f("<!> <!>",1),wr=f("<!> <!>",1),kr=f("<!> <!>",1),Sr=f('<div class="group flex min-h-9 w-full flex-col items-center justify-center rounded-md border-input bg-background px-3 py-2 font-medium shadow-md"><div class="flex w-full items-center justify-between text-sm"><!> <!></div> <!> <!></div>'),Pr=f("<!> <!> <!>",1),Dr=f("<!> <!>",1),Or=f(" <!>",1),Tr=f("<!> <!>",1),jr=f('<a target="_blank" class="underline"> </a>'),Cr=f("<!> <!>",1),Rr=f("<!> <!>",1),Ir=f("<!> <!>",1),Mr=f("<!> <!>",1),Lr=f('<div class="w-full min-w-[256px] max-w-[512px] rounded-md border bg-background p-1 shadow-md"><!></div>'),zr=f("<div></div>"),Er=f('<!> <p> </p> <p class="font-semibold !text-cyan-700 dark:!text-cyan-400"> </p>',1),Ur=f('Лучшая <span class="!text-green-700 dark:!text-green-400">благодарность</span> <a class="font-semibold hover:underline" href="https://ma.cyou/">Автору</a>',1),qr=f('Best Thanks to the <a class="font-semibold hover:underline" href="https://ma.cyou/">Author</a>',1),Gr=f('это подписка на <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331">GitHub</a> и звездочка на <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331/ma">Репозиторий</a>',1),Ar=f('is a subscription on <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331">GitHub</a> and a star on <a class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400" href="https://github.com/Mapagmataas1331/ma">Repository</a>',1),Br=f("<!> <!> <!>",1),Fr=f("<!> <!>",1),Hr=f('<div><!> <!> <div class="md:1/2 m-1 mt-3 flex w-full flex-col gap-y-2 md:w-[512px]"><div class="flex flex-row gap-0"><!> <!></div> <!></div> <!> <!></div>');function aa(pt,mt){Ut(mt,!0);const[Ae,_t]=zt(),y=()=>Qe(Ft,"$language",Ae),et=()=>Qe(Vt,"$page",Ae),gt=()=>Qe(cr,"$viewport",Ae),tt={day:0,time:2};let p=ee(""),Me=ee(!1),Be=ee(null);function ht(){l(Me,!1),Ke().then(()=>{e(Be).focus()})}let U=ee(O({start:Re(Ie()),end:Re(Ie()).add({days:6})})),$e=ee(""),R=null,Le={},ve=ee(O({})),fe=ee(O({})),Fe=ee(!1),T=ee(""),re=ee(null),q=null;const $t=async()=>{l(T,"loading");const r=await dt("student");if((r.scheduleError||!r.schedule)&&(e(re)||!R)){l(T,"error"),l(re,O(r.scheduleError)),q&&clearInterval(q);return}R=r.schedule,l(re,O(r.scheduleError)),await Ke(),l(T,"hidden"),l(ve,O(yt())),Le=St()},ze=async(r=!0)=>{bt(),e(p)&&(l(Fe,!0),e(p)&&e(U)&&(He(),r&&l($e,O(e(p)))),q&&clearInterval(q),await Ke(),q=setInterval(async()=>{if(!e(p)){q&&clearInterval(q);return}const a=await dt("student");if((a.scheduleError||!a.schedule)&&(e(re)||!R)){l(T,"error"),l(re,O(a.scheduleError)),q&&clearInterval(q);return}if(R=a.schedule,Ce.success(y()==="ru"?"Расписание обновлено в "+new Date().toLocaleString("ru-RU",{hour12:!1}):"Schedule updated at "+new Date().toLocaleString("en-US",{hour12:!1})),!e(p)){q&&clearInterval(q);return}He()},3e5))},xt=()=>{e(p)&&e(U)&&He()},He=()=>{if(!e(U).start||!e(U).end){l(T,"hidden");return}l(T,"loading");const r=it(e(U).start),a=it(e(U).end);let s=[],o=r;for(;o<=a;){const v=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),_=o.getFullYear().toString().slice(-2),u=`${v}.${n}.${_}`;s.push(u),o.setDate(o.getDate()+1)}l(fe,O(s.reduce((v,n)=>{if(!R)return l(re,"Error: Schedule is null"),l(T,"error"),{};let _=[];if(Le[n])for(let u=Le[n];u<Le[wt(n)];u+=3){const j=R[u][tt.time],w=R[u][e(ve)[e(p)]],g=R[u+1][e(ve)[e(p)]],m=R[u+2][e(ve)[e(p)]],h=R[u][e(ve)[e(p)]+1];w&&_.push({time:j||"",discipline:w||"",type:g||"",teacher:m||"",auditorium:h||""})}return v[n]=_,v},{}))),l(T,"visible")},bt=()=>{l(T,"hidden"),l(fe,O({})),l(Fe,!1),l(U,O({start:Re(Ie()),end:Re(Ie()).add({days:6})}))},yt=()=>R?R[0].reduce((r,a,s)=>(s>2&&a&&!r[a]&&(r[a]=s),r),{}):(l(re,"Error: Schedule is null"),l(T,"error"),{}),wt=r=>{const[a,s,o]=r.split("."),v=new Date(`20${o}-${s}-${a}`);v.setDate(v.getDate()+1);const n=String(v.getDate()).padStart(2,"0"),_=String(v.getMonth()+1).padStart(2,"0"),u=v.getFullYear().toString().slice(-2);return`${n}.${_}.${u}`},kt=(r,a="ru")=>{let s=[];a==="ru"?s=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]:s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const[o,v,n]=r.split("."),_=new Date(`20${n}-${v}-${o}`);return s[_.getDay()]||"Неизвестный день!"},St=()=>R?R.reduce((r,a,s)=>{const o=a[tt.day].split(" ")[1];return s>0&&o&&o!=="undefined"&&/\b(\d{2}\.\d{2}\.\d{2})\b/.test(o)&&(r[o]=s),r},{}):(l(re,"Error: Schedule is null"),l(T,"error"),{});Wt(async()=>{$t(),l($e,O(localStorage.getItem("lq")||"")),Gt((a=e($e))=>{localStorage.setItem("lq",a)});const r=et().url.searchParams.get("q")||et().url.searchParams.get("group")||"";if(r){const a=decodeURI(r),s=()=>{if(!e(ve)[a]){Ce.error(y()==="ru"?`Некорректная группа передана в URL: "${a}"`:`Incorrect group passed in URL: "${a}"`);return}l(p,O(a)),ze(!1),Ce.success(y()==="ru"?`Группа "${a}" успешно загружена из URL`:`"${a}" group are successfully loaded from URL`);const o=new URL(window.location.href);o.searchParams.delete("year"),o.searchParams.delete("group"),o.searchParams.delete("q"),history.replaceState({},"",o.toString())};if(R)s();else{const o=setInterval(()=>{R&&(clearInterval(o),s())},500)}}}),Yt(()=>{q&&clearInterval(q)});var Ee=Hr(),rt=Q(Ee);{var Pt=r=>{var a=$r(),s=Q(a),o=Q(s,!0);H(s);var v=c(s,2),n=Q(v,!0);H(v),H(a),b(()=>{x(o,y()==="ru"?"Расписание НГОК":"NGOK Schedule"),x(n,y()==="ru"?"Выберите группу, чтобы увидеть расписание":"Select a group to see the schedule")}),t(r,a)};M(rt,r=>{e(T)!=="visible"&&r(Pt)})}var at=c(rt,2);Ge(at,{variant:"outline",size:"icon",class:"fixed right-14 top-2.5 z-40 md:right-16 md:top-3.5",onclick:()=>{e(p)?(navigator.clipboard.writeText(`${window.location.origin}?q=${encodeURI(e(p))}`),Ce.success(y()==="ru"?`Ссылка для группы "${e(p)}" скопирована в буфер обмена!`:`Link for "${e(p)}" group copied to clipboard!`)):Ce.error(y()==="ru"?"Сначала выберите группу":"Select a year and group first")},children:(r,a)=>{Qt(r,{class:"!size-5"})},$$slots:{default:!0}});var Ne=c(at,2),Ve=Q(Ne),st=Q(Ve);i(st,()=>sr,(r,a)=>{a(r,{get open(){return e(Me)},set open(s){l(Me,O(s))},children:(s,o)=>{var v=kr(),n=d(v);i(n,()=>Kt,(u,j)=>{j(u,{get ref(){return e(Be)},set ref(g){l(Be,O(g))},child:(g,m)=>{let h=()=>m==null?void 0:m().props;const $=te(()=>`w-full justify-between px-3 py-2${e(p)?" rounded-r-none border-r-0":""}`);Ge(g,Et({variant:"outline",get class(){return e($)}},h,{role:"combobox",get"aria-expanded"(){return e(Me)},children:(C,P)=>{z();var I=xr(),S=d(I),N=c(S);ar(N,{class:"opacity-50"}),b(()=>x(S,`${(e(p)?e(p):y()==="ru"?"Выберите группу":"Select a group")??""} `)),t(C,I)},$$slots:{default:!0}}))},$$slots:{child:!0}})});var _=c(n,2);i(_,()=>Xt,(u,j)=>{j(u,{class:"z-10 mt-[3px] w-[calc(100dvw-8px)] p-0 md:w-[256px]",children:(w,g)=>{var m=L(),h=d(m);i(h,()=>Jt,($,C)=>{C($,{children:(P,I)=>{var S=wr(),N=d(S);const ae=te(()=>y()==="ru"?"Искать группу":"Search for a group");i(N,()=>Zt,(k,E)=>{E(k,{get placeholder(){return e(ae)},class:"h-9"})});var xe=c(N,2);i(xe,()=>er,(k,E)=>{E(k,{children:(We,lt)=>{var be=yr(),ye=d(be);i(ye,()=>tr,(De,se)=>{se(De,{children:(pe,Oe)=>{z();var oe=F();b(()=>x(oe,y()==="ru"?"Нет результатов":"No results")),t(pe,oe)},$$slots:{default:!0}})});var Pe=c(ye,2);i(Pe,()=>rr,(De,se)=>{se(De,{class:"max-h-[256px] overflow-y-auto",children:(pe,Oe)=>{var oe=L(),K=d(oe);Xe(K,17,()=>Object.keys(e(ve)),Je,(de,V)=>{var le=L(),me=d(le);i(me,()=>or,(G,D)=>{D(G,{get value(){return e(V)},onSelect:()=>{l(p,O(e(V))),ze(),ht()},children:(A,_e)=>{var W=br(),X=d(W);const we=te(()=>Ht(e(p)!==e(V)&&"text-transparent"));At(X,{get class(){return e(we)}});var ie=c(X);b(()=>x(ie,` ${e(V)??""}`)),t(A,W)},$$slots:{default:!0}})}),t(de,le)}),t(pe,oe)},$$slots:{default:!0}})}),t(We,be)},$$slots:{default:!0}})}),t(P,S)},$$slots:{default:!0}})}),t(w,m)},$$slots:{default:!0}})}),t(s,v)},$$slots:{default:!0}})});var Dt=c(st,2);{var Ot=r=>{Ge(r,{variant:"outline",size:"icon",class:"shrink-0 rounded-l-none border-l-0",onclick:()=>{l(p,""),ze()},children:(a,s)=>{hr(a,{class:"opacity-50"})},$$slots:{default:!0}})};M(Dt,r=>{e(p)&&r(Ot)})}H(Ve);var Tt=c(Ve,2);{var jt=r=>{var a=L();const s=te(()=>gt().vw>=ir.md?2:1),o=te(()=>y()==="ru"?"ru":"en");var v=d(a);Bt(v,()=>[e(s),e(o)],n=>{var _=Sr(),u=Q(_),j=Q(u);{var w=I=>{var S=F();b((N,ae)=>x(S,`${N??""} - ${ae??""}`),[()=>Ze(e(U).start),()=>Ze(e(U).end)]),t(I,S)},g=I=>{var S=F();b(()=>x(S,y()==="ru"?"Выберите период":"Select a range")),t(I,S)};M(j,I=>{e(U).start&&e(U).end?I(w):I(g,!1)})}var m=c(j,2);lr(m,{class:"size-4 opacity-50"}),H(u);var h=c(u,2);gr(h,{class:"mt-2 hidden group-hover:block"});var $=c(h,2);const C=te(()=>e(o)==="ru"?0:1),P=te(()=>e(o)==="ru"?"ru":"en");nr($,{get weekStartsOn(){return e(C)},get numberOfMonths(){return e(s)},class:"hidden capitalize group-hover:block",onValueChange:xt,get locale(){return e(P)},get value(){return e(U)},set value(I){l(U,O(I))}}),H(_),t(n,_)}),t(r,a)};M(Tt,r=>{e(Fe)&&r(jt)})}H(Ne);var ot=c(Ne,2);{var Ct=r=>{var a=L(),s=d(a);i(s,()=>ft,(o,v)=>{v(o,{class:"md:1/2 my-1 w-full md:w-[512px]",children:(n,_)=>{var u=Pr(),j=d(u);dr(j,{class:"size-8"});var w=c(j,2);i(w,()=>ut,(m,h)=>{h(m,{class:"!pl-12",children:($,C)=>{z();var P=F();b(()=>x(P,y()==="ru"?"Возникла проблема":"Error Occurred")),t($,P)},$$slots:{default:!0}})});var g=c(w,2);i(g,()=>vt,(m,h)=>{h(m,{class:"!pl-12",children:($,C)=>{z();var P=F();b(()=>x(P,e(re))),t($,P)},$$slots:{default:!0}})}),t(n,u)},$$slots:{default:!0}})}),t(r,a)},Rt=r=>{var a=L(),s=d(a);{var o=n=>{ur(n,{class:"md:1/2 my-1 h-8 w-full md:w-[512px]"})},v=n=>{var _=L(),u=d(_);{var j=w=>{var g=zr();Xe(g,21,()=>Object.entries(e(fe)),Je,(m,h)=>{let $=()=>e(h)[0],C=()=>e(h)[1];var P=Lr(),I=Q(P);i(I,()=>mr,(S,N)=>{N(S,{children:(ae,xe)=>{var k=Mr(),E=d(k);const We=te(()=>$()===Ze(Re(Ie()))?"bg-green-100 dark:bg-green-800/50":C().length>0?"bg-blue-100 dark:bg-blue-800/50":"mt-4 bg-red-100 p-4 dark:bg-red-800/50");i(E,()=>fr,(be,ye)=>{ye(be,{get class(){return`text-base ${e(We)??""}`},children:(Pe,De)=>{var se=L(),pe=d(se);i(pe,()=>qe,(Oe,oe)=>{oe(Oe,{children:(K,de)=>{var V=Dr(),le=d(V);i(le,()=>ct,(G,D)=>{D(G,{class:"w-1/3 text-right font-semibold text-foreground",children:(A,_e)=>{z();var W=F();b(()=>x(W,$())),t(A,W)},$$slots:{default:!0}})});var me=c(le,2);i(me,()=>ct,(G,D)=>{D(G,{class:"w-2/3 text-left font-semibold text-foreground",children:(A,_e)=>{z();var W=F();b(X=>x(W,X),[()=>kt($(),y())]),t(A,W)},$$slots:{default:!0}})}),t(K,V)},$$slots:{default:!0}})}),t(Pe,se)},$$slots:{default:!0}})});var lt=c(E,2);i(lt,()=>pr,(be,ye)=>{ye(be,{class:"bg-background",children:(Pe,De)=>{var se=L(),pe=d(se);{var Oe=K=>{var de=Ir(),V=d(de);{var le=G=>{var D=L(),A=d(D);i(A,()=>qe,(_e,W)=>{W(_e,{children:(X,we)=>{var ie=L(),Ye=d(ie);i(Ye,()=>Se,(ge,he)=>{he(ge,{class:"text-center font-semibold italic",colspan:2,children:(Te,ce)=>{z();var J=Or();const Y=te(()=>{var ue;return(ue=C()[0])==null?void 0:ue.time});var ke=d(J),B=c(ke);{var je=ue=>{var Ue=F();const Z=te(()=>e(Y).includes("-")?e(Y).split("-")[0]:e(Y));b(ne=>x(Ue,ne),[()=>e(Z).includes(".")?e(Z).replace(/\./g,":"):e(Z)]),t(ue,Ue)};M(B,ue=>{e(Y)&&ue(je)})}b(()=>x(ke,`${(y()==="ru"?"Пары начинаются с":"Lessons start at")??""} `)),t(Te,J)},$$slots:{default:!0}})}),t(X,ie)},$$slots:{default:!0}})}),t(G,D)};M(V,G=>{C()[0].time!=="09:00 - 10:30"&&G(le)})}var me=c(V,2);Xe(me,17,C,Je,(G,D)=>{var A=Rr(),_e=d(A);i(_e,()=>qe,(X,we)=>{we(X,{children:(ie,Ye)=>{var ge=Tr(),he=d(ge);i(he,()=>Se,(ce,J)=>{J(ce,{class:"text-right",children:(Y,ke)=>{z();var B=F();b(je=>x(B,je),[()=>e(D).time.includes(".")?e(D).time.replace(/\./g,":"):e(D).time]),t(Y,B)},$$slots:{default:!0}})});var Te=c(he,2);i(Te,()=>Se,(ce,J)=>{J(ce,{class:"text-left",children:(Y,ke)=>{z();var B=F();b(()=>x(B,e(D).discipline)),t(Y,B)},$$slots:{default:!0}})}),t(ie,ge)},$$slots:{default:!0}})});var W=c(_e,2);i(W,()=>qe,(X,we)=>{we(X,{children:(ie,Ye)=>{var ge=Cr(),he=d(ge);i(he,()=>Se,(ce,J)=>{J(ce,{class:"text-right",children:(Y,ke)=>{var B=L(),je=d(B);{var ue=Z=>{var ne=jr(),Lt=Q(ne,!0);H(ne),b(()=>{Nt(ne,"href",e(D).auditorium),x(Lt,y()==="ru"?"Онлайн":"Online")}),t(Z,ne)},Ue=Z=>{var ne=F();b(()=>x(ne,e(D).auditorium)),t(Z,ne)};M(je,Z=>{e(D).auditorium.startsWith("http")?Z(ue):Z(Ue,!1)})}t(Y,B)},$$slots:{default:!0}})});var Te=c(he,2);i(Te,()=>Se,(ce,J)=>{J(ce,{class:"text-left",children:(Y,ke)=>{z();var B=F();b(()=>x(B,e(D).teacher)),t(Y,B)},$$slots:{default:!0}})}),t(ie,ge)},$$slots:{default:!0}})}),t(G,A)}),t(K,de)},oe=K=>{var de=L(),V=d(de);i(V,()=>Se,(le,me)=>{me(le,{class:"text-center font-semibold italic",colspan:2,children:(G,D)=>{z();var A=F();b(()=>x(A,y()==="ru"?"Нет пар":"No lessons")),t(G,A)},$$slots:{default:!0}})}),t(K,de)};M(pe,K=>{C().length>0?K(Oe):K(oe,!1)})}t(Pe,se)},$$slots:{default:!0}})}),t(ae,k)},$$slots:{default:!0}})}),H(P),t(m,P)}),H(g),b((m,h,$)=>nt(g,`mx-auto my-1.5 grid grid-cols-1 justify-items-center gap-x-2 gap-y-3 md:p-2${m??""}${h??""}${$??""}`),[()=>Object.keys(e(fe)).length>1?" lg:grid-cols-2 ":"",()=>Object.keys(e(fe)).length>2?" 2xl:grid-cols-3 ":"",()=>Object.keys(e(fe)).length>3?" min-[1792px]:grid-cols-4":""]),t(w,g)};M(u,w=>{e(T)==="visible"&&e(fe)&&w(j)},!0)}t(n,_)};M(s,n=>{e(T)==="loading"?n(o):n(v,!1)},!0)}t(r,a)};M(ot,r=>{e(T)==="error"?r(Ct):r(Rt,!1)})}var It=c(ot,2);{var Mt=r=>{var a=Fr(),s=d(a);{var o=n=>{Ge(n,{variant:"outline",class:"md:1/2 my-1 w-full !justify-start py-5 md:w-[512px]",onclick:async()=>{l(p,O(e($e))),ze()},children:(_,u)=>{var j=Er(),w=d(j);vr(w,{class:"ml-1 mr-2.5 !size-6 !text-cyan-700 dark:!text-cyan-400"});var g=c(w,2),m=Q(g,!0);H(g);var h=c(g,2),$=Q(h,!0);H(h),b(()=>{x(m,y()==="ru"?"Последний запрос: ":"Last query:"),x($,e($e))}),t(_,j)},$$slots:{default:!0}})};M(s,n=>{e($e)&&e(T)!=="loading"&&n(o)})}var v=c(s,2);i(v,()=>ft,(n,_)=>{_(n,{class:"md:1/2 my-1 w-full md:w-[512px]",children:(u,j)=>{var w=Br(),g=d(w);_r(g,{class:"size-8 !text-green-700 dark:!text-green-400"});var m=c(g,2);i(m,()=>ut,($,C)=>{C($,{class:"!pl-12",children:(P,I)=>{var S=L(),N=d(S);{var ae=k=>{var E=Ur();z(3),t(k,E)},xe=k=>{var E=qr();z(),t(k,E)};M(N,k=>{y()==="ru"?k(ae):k(xe,!1)})}t(P,S)},$$slots:{default:!0}})});var h=c(m,2);i(h,()=>vt,($,C)=>{C($,{class:"!pl-12",children:(P,I)=>{var S=L(),N=d(S);{var ae=k=>{var E=Gr();z(3),t(k,E)},xe=k=>{var E=Ar();z(3),t(k,E)};M(N,k=>{y()==="ru"?k(ae):k(xe,!1)})}t(P,S)},$$slots:{default:!0}})}),t(u,w)},$$slots:{default:!0}})}),t(r,a)};M(It,r=>{e(T)!=="visible"&&r(Mt)})}H(Ee),b(()=>nt(Ee,`${(e(p)?"justify-start":"justify-center")??""} mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]`)),t(pt,Ee),qt(),_t()}export{aa as component};
