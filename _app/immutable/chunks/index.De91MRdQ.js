import{e as f,h as a,i as p}from"./utils.BSb6bQwc.js";const r=[];function h(e,o=f){let s=null;const i=new Set;function u(n){if(a(e,n)&&(e=n,s)){const c=!r.length;for(const t of i)t[1](),r.push(t,e);if(c){for(let t=0;t<r.length;t+=2)r[t][0](r[t+1]);r.length=0}}}function b(n){u(n(e))}function l(n,c=f){const t=[n,c];return i.add(t),i.size===1&&(s=o(u,b)||f),n(e),()=>{i.delete(t),i.size===0&&s&&(s(),s=null)}}return{set:u,update:b,subscribe:l}}function _(e){let o;return p(e,s=>o=s)(),o}export{_ as g,h as w};
