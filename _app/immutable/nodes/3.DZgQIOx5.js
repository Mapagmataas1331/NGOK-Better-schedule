import{s as V,i as C,a as n,t as q,c as W,b as P,d as c,e as X}from"../chunks/disclose-version.dS-yRulu.js";import{i as Y,e as D,B as T,a as H,l as Z}from"../chunks/button.CbBzcVgG.js";import{p as I,a as ee,f as B,s as g,t as y,g as t,m as z,b as G,c as m,n as F,r as i,d as te}from"../chunks/utils.BSb6bQwc.js";import{f as ae,c as se,b as re}from"../chunks/fetchTableData.JhWmgOXU.js";var oe=q('<div class="mb-4 w-full min-w-[256px] p-4 md:w-2/3 lg:w-1/2 2xl:w-1/3"><h2 class="mb-4 text-center text-2xl font-semibold"> </h2> <p class="mb-1 text-lg"> </p> <blockquote class="mb-1 italic"> </blockquote> <blockquote class="italic"> </blockquote></div> <!>',1),le=q('<div class="mb-0.5 grid grid-cols-3 border-l-2 md:grid-cols-6"></div>'),ne=q("<!> <!>",1),ce=q('<div class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-2 py-2 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"><!></div>');function me(J,K){I(K,!1);const M=V(),v=()=>X(Z,"$language",M),E={},_={},d=z({}),w=z({}),N=async()=>{for(let e=1;e<=4;(e+=1)-1){const a=await ae(String(e));if(a.scheduleError||!a.schedule)return;E[e]=a.schedule}Object.entries(E).forEach(([e,a])=>{a[1].forEach((s,o)=>{s.toLowerCase()==="преподаватели"&&(_[e]||(_[e]=[]),_[e].push(o))})}),Object.entries(E).forEach(([e,a])=>{a.forEach((s,o)=>{_[e].forEach(r=>{s[r]&&(t(d)[s[r]]||G(d,t(d)[s[r]]=[]),t(d)[s[r]].push({year:e,col:r,row:o}))})})})};Y();var j=ce(),Q=m(j);C(Q,()=>!(Object.keys(t(d)).length>0),e=>{var a=oe(),s=B(a),o=m(s),r=m(o,!0);i(o);var l=g(o,2),O=m(l,!0);i(l);var h=g(l,2),x=m(h,!0);i(h);var k=g(h,2),p=m(k,!0);i(k),i(s);var u=g(s,2);T(u,{variant:"outline",class:"my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3",onclick:async()=>{await N()},children:(f,$)=>{F();var b=P();y(()=>c(b,v()==="ru"?"Сканировать":"Fetch")),n(f,b)},$$slots:{default:!0}}),y(()=>{c(r,v()==="ru"?"Эта страница нужна для просмотра всех имен преподавателей и их упоминаний в расписании.":"This page is needed to view all teacher names and their mentions in the schedule."),c(O,v()==="ru"?"После сканирования будет доступен список преподавателей, при нажатии на них будет открыт список их упоминаний, а по нажатию на упоминания будет открыта новая вкладка с таблицей рассписания на нужной ячейки.":"After scanning, a list of teachers will be available, and clicking on them will open a list of their mentions, and clicking on mentions will open a new tab with tables of schedules on the necessary cells."),c(x,v()==="ru"?"Просьба не злоупотреблять сканированием, поскольку на 1 сканирование тратяться 4 api запроса, и если вы оказались здесь случаенно - покинуть страницу и сделать вид что ничего не было.":"Please do not abuse scanning, as 1 scan consumes 4 api requests, and if you happen to be here by chance - leave the page and make it look like nothing happened."),c(p,v()==="ru"?"Для повторного сканирования - перезагрузите страницу.":"For a repeated scan - reload the page.")}),n(e,a)},e=>{var a=W(),s=B(a);D(s,1,()=>Object.entries(t(d)).sort(),H,(o,r)=>{let l=()=>t(r)[0],O=()=>t(r)[1];var h=ne(),x=B(h);T(x,{variant:"outline",class:"mb-0.5 w-full min-w-[256px] font-semibold md:w-2/3 lg:w-1/2 2xl:w-1/3",onclick:()=>G(w,t(w)[l()]=!t(w)[l()]),children:(p,u)=>{F();var f=P();y(()=>c(f,l())),n(p,f)},$$slots:{default:!0}});var k=g(x,2);C(k,()=>t(w)[l()],p=>{var u=le();D(u,5,O,H,(f,$)=>{let b=()=>t($).year,L=()=>t($).col,S=()=>t($).row;var R=te(()=>re(b(),S()+1,L()+1));T(f,{variant:"ghost",target:"_blank",get href(){return t(R)},children:(U,ie)=>{F();var A=P();y(()=>c(A,`${b()??""}-${se(L()+1)??""}/${S()+1}`)),n(U,A)},$$slots:{default:!0}})}),i(u),n(p,u)}),n(o,h)}),n(e,a)}),i(j),n(J,j),ee()}export{me as component};
