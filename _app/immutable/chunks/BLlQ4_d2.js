import{u as p,k as w,s as Z,g as y,d as m,e as k,t as d}from"./CHILHeLz.js";import{p as x,o as M,h as b,n as T,a as E}from"./42UYTaT9.js";import{n as A,b as G,w as g,d as R,f as H,g as L,s as C,h as I}from"./BCILilgs.js";function J(t){p(()=>w(()=>t()))}function _(t,s=1e4,e=A){let c=null,n=Z(x(t));function l(){return window.setTimeout(()=>{m(n,x(t)),e(t)},s)}return p(()=>()=>{c&&clearTimeout(c)}),G.with(()=>y(n),r=>{m(n,x(r)),e(r),c&&clearTimeout(c),c=l()})}function K(t){const s=k(()=>t.enabled()),e=_(!1,300,r=>{var a;y(s)&&((a=t.setIsPointerInTransit)==null||a.call(t,r))});let c=Z(null);function n(){m(c,null),e.current=!1}function l(r,a){const h=r.currentTarget;if(!L(h))return;const o={x:r.clientX,y:r.clientY},u=j(o,h.getBoundingClientRect()),i=q(o,u),f=B(a.getBoundingClientRect()),v=F([...i,...f]);m(c,x(v)),e.current=!0}return g([t.triggerNode,t.contentNode,t.enabled],([r,a,h])=>{if(!r||!a||!h)return;const o=i=>{l(i,a)},u=i=>{l(i,r)};return R(M(r,"pointerleave",o),M(a,"pointerleave",u))}),g(()=>y(c),()=>M(document,"pointermove",a=>{var f,v;if(!y(c))return;const h=a.target;if(!H(h))return;const o={x:a.clientX,y:a.clientY},u=((f=t.triggerNode())==null?void 0:f.contains(h))||((v=t.contentNode())==null?void 0:v.contains(h)),i=!z(o,y(c));u?n():i&&(n(),t.onPointerExit())})),{isPointerInTransit:e}}function j(t,s){const e=Math.abs(s.top-t.y),c=Math.abs(s.bottom-t.y),n=Math.abs(s.right-t.x),l=Math.abs(s.left-t.x);switch(Math.min(e,c,n,l)){case l:return"left";case n:return"right";case e:return"top";case c:return"bottom";default:throw new Error("unreachable")}}function q(t,s,e=5){const c=e*1.5;switch(s){case"top":return[{x:t.x-e,y:t.y+e},{x:t.x,y:t.y-c},{x:t.x+e,y:t.y+e}];case"bottom":return[{x:t.x-e,y:t.y-e},{x:t.x,y:t.y+c},{x:t.x+e,y:t.y-e}];case"left":return[{x:t.x+e,y:t.y-e},{x:t.x-c,y:t.y},{x:t.x+e,y:t.y+e}];case"right":return[{x:t.x-e,y:t.y-e},{x:t.x+c,y:t.y},{x:t.x-e,y:t.y+e}]}}function B(t){const{top:s,right:e,bottom:c,left:n}=t;return[{x:n,y:s},{x:e,y:s},{x:e,y:c},{x:n,y:c}]}function z(t,s){const{x:e,y:c}=t;let n=!1;for(let l=0,r=s.length-1;l<s.length;r=l++){const a=s[l].x,h=s[l].y,o=s[r].x,u=s[r].y;h>c!=u>c&&e<(o-a)*(c-h)/(u-h)+a&&(n=!n)}return n}function F(t){const s=t.slice();return s.sort((e,c)=>e.x<c.x?-1:e.x>c.x?1:e.y<c.y?-1:e.y>c.y?1:0),S(s)}function S(t){if(t.length<=1)return t.slice();const s=[];for(let c=0;c<t.length;c++){const n=t[c];for(;s.length>=2;){const l=s[s.length-1],r=s[s.length-2];if((l.x-r.x)*(n.y-r.y)>=(l.y-r.y)*(n.x-r.x))s.pop();else break}s.push(n)}s.pop();const e=[];for(let c=t.length-1;c>=0;c--){const n=t[c];for(;e.length>=2;){const l=e[e.length-1],r=e[e.length-2];if((l.x-r.x)*(n.y-r.y)>=(l.y-r.y)*(n.x-r.x))e.pop();else break}e.push(n)}return e.pop(),s.length===1&&e.length===1&&s[0].x===e[0].x&&s[0].y===e[0].y?s:s.concat(e)}var X=T('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M12.9,77.5c-1.7,0-11-.6-11.9-1.4-.2-.2-.4-.6-.2-.9.1-.4.3-.9,3.9-.9,2,0,4.6-.2,5.9-.4l1.7-.2v-4.6c0-6.2,0-7.7,3.8-7.7s2.6-.2,3.4-.4l1-.2v-2.8c0-8.7,1-16.6,2.9-23.7,1.5-5.6,2.4-7.4,3.8-7.4s2.3,1.8,3.8,7.4c1.5,5.4,2.2,9.7,3.1,19.1v.8h3.5v-2.5c0-2.8.1-3.6.8-5.2,1.5-3.8,2.7-9.6,5.8-28.5.7-4,1.7-9.8,2.4-12.7q1.1-4.9,1.8-4.9c.8,0,.8.8.9,1.7.2,3.6-1.9,25-3.1,33.5-.8,5.6-2.1,11.7-3.1,14.5-.5,1.3-.5,2.1-.5,5,0,4.3-.4,6.2-1.3,7.2-.7.7-3.2.8-5.3.8h0c-1.5,0-4.1,0-4.9-.7-1.1-.9-1.6-2.7-1.6-6.3s-.9-11-1.9-15.8c-.1-.7-.3-1.4-.4-1.9-.3.9-.6,2.2-.9,3.6-.9,4-1.5,9.8-1.7,16.6,0,2.2-.2,6.1-.5,7-.5,1-1.5,1-1.9,1s-.6,0-1,0h-.6c-1-.2-2.4-.3-3.5-.4h-1.5c0-.1-.1,4.5-.1,4.5,0,2.1-.2,5.7-.4,6.1-.2.4-.8.5-1.8.5Z"></path><path d="M48.3,1.5c0,0,.1.4.1,1,.2,3.3-1.8,24.5-3.1,33.3-.8,5.7-2.1,11.7-3,14.3-.5,1.4-.6,2.3-.6,5.2s-.3,5.9-1.1,6.7c-.4.4-2.6.6-4.7.6s-4-.2-4.5-.5c-.9-.7-1.3-2.5-1.3-5.7s-.9-11.1-1.9-15.9c-.5-2.3-.9-4.1-1-4.1-.2,0-1.1,2.7-1.8,5.9-.9,4.1-1.6,9.9-1.7,16.7,0,3.9-.3,6.2-.5,6.7-.2.4-.5.6-1.2.6s-.5,0-.9,0c-1-.1-2.8-.3-4.1-.4l-2.3-.2-.2,5.4c0,3-.2,5.6-.3,5.7,0,0-.5.1-1.2.1-3,0-10.9-.8-11.4-1.2-.3-.3.9-.5,3.2-.5,2,0,4.7-.2,6-.4l2.4-.3v-5.3c0-6.6.1-6.9,3-6.9s2.7-.2,3.6-.4l1.6-.3v-3.4c0-8.6.9-16.5,2.8-23.5,1.2-4.5,2.1-6.8,3-6.8.9,0,1.8,2.3,3,6.9,1.5,5.4,2.1,9.6,3.1,19v1.5h5v-3.2c0-2.7,0-3.4.7-4.9,1.5-3.9,2.8-10,5.9-28.6.7-4.1,1.7-9.8,2.4-12.6.7-3.1.9-4.3,1.1-4.3M48.3,0c-1.3,0-1.6,1.2-1.8,2.1-.2.7-.4,1.8-.8,3.3-.6,2.9-1.7,8.6-2.4,12.7-3.1,18.8-4.3,24.6-5.8,28.3-.7,1.8-.8,2.7-.8,5.5v1.7h-2c-.9-9.6-1.6-14-3.1-19.4-1.5-5.5-2.5-8-4.5-8-2,0-3,2.4-4.5,7.9-1.9,7.1-2.9,15.1-2.9,23.9v2.1h-.4c-.8.3-2.3.4-3.3.4-4.5,0-4.5,2.1-4.5,8.4v4h-1.1c-1.3.4-3.9.5-5.9.6h0c-3.1,0-4.2.3-4.6,1.4-.2.6,0,1.3.4,1.7.4.4.8.7,5.6,1.2,2.6.3,5.3.4,6.8.4s1.9,0,2.4-.9c.2-.3.4-.8.5-6.5v-3.8c.1,0,.9,0,.9,0,1.1,0,2.5.2,3.5.4h.6c.4.1.8.1,1.1.1,1.6,0,2.3-.8,2.6-1.4,0,0,0,0,0,0,.1-.3.4-1.1.6-7.2.2-6.7.8-12.4,1.7-16.4,0-.2,0-.4.1-.5.9,4.7,1.6,11.2,1.6,14.4s.5,5.8,1.9,6.9c.3.2,1.1.9,5.4.9s5.5-.7,5.8-1c1.2-1.2,1.6-3.2,1.6-7.8s.1-3.6.5-4.7c.9-2.8,2.3-8.9,3.1-14.6,1.2-8.5,3.3-30,3.1-33.6,0-.9-.1-2.4-1.6-2.4h0Z"></path></g><g><path d="M83.7,77.7c-.6,0-.9,0-1.1-.2-.3-.3-.5-.5-.6-6v-4.5c0,0-3.4.1-3.4.1-.9,0-1.7,0-2.3,0-1.6,0-2.5-.2-3-1.1-.3-.7-.5-2.2-.6-7.8-.1-5.1-.3-7.5-.8-10.8-.4-3-1.2-6.3-1.7-8.3-.9,4-2.3,13.8-2.3,18.2s-.1,3-.7,4.2c-.9,1.8-1.3,1.8-5.8,1.8-4,0-5.1-.3-5.6-1.1-.8-1.3-1-3.2-1-6.9s0-3.5-.9-5.7c-.6-1.5-1.3-4.2-1.7-6.7-.7-4.2-1.9-15.5-2.1-21.1-.1-3.4,0-3.5.2-3.7.1-.1.3-.2.5-.2.6,0,1.1,0,3.5,12.8,1.6,8.6,2.5,11.9,3.9,14.8,1.4,2.9,1.4,3.2,1.5,6.4v2.4h3.4l.5-4.5c.6-5.9,3.1-22.8,6.5-22.8s2.2,1.7,3.6,6.4c2,6.8,3,15,3,23.6v3.8s1.5,0,1.5,0c1.8,0,5.9.2,6.5,2.2.2.7.2,4.3.2,6.1v4.5l3,.3c1.9.2,4.9.4,6.6.4,3.1,0,3.3.4,3.5.7.1.2.2.5,0,.8-.6,1.2-14.3,2-14.5,2Z"></path><path d="M50.8,18.7c.2,0,1.7,6.5,2.7,12.2,1.6,8.5,2.5,12,3.9,15,1.3,2.8,1.4,3,1.5,6.1v3.2h4.9l.5-5.2c1.2-11.7,4-22.2,5.8-22.2s1.4,1,2.8,5.9c2,6.8,3,14.9,3,23.4v4.5h2.3c3.2,0,5.5.7,5.8,1.7.1.4.2,3.1.2,5.9v5.2l3.7.3c2,.2,5,.4,6.7.4s3,.2,2.9.4c-.2.4-11,1.6-13.8,1.6s-.6,0-.6,0c-.2-.2-.3-2-.4-5.5v-5.3c0,0-4.2.2-4.2.2-.9,0-1.6,0-2.2,0-1.6,0-2.1-.2-2.3-.7-.3-.6-.4-2.5-.5-7.5-.1-5.1-.3-7.6-.8-10.9-.6-4.3-2-9.9-2.5-10.3,0,0,0,0,0,0-.8,0-3,15-3,20.4s-.1,2.8-.6,3.9c-.7,1.3-.7,1.3-5.2,1.3-3.2,0-4.6-.2-4.9-.7-.7-1.2-.9-3-.9-6.5s0-3.7-1-6c-.6-1.4-1.2-4.1-1.7-6.5-.7-4.2-1.9-15.4-2.1-21,0-1.7,0-3.2,0-3.2M50.8,17.2c-.4,0-.8.2-1.1.5-.4.5-.6.6-.4,4.3.3,5.7,1.4,17,2.2,21.2.4,2.5,1.2,5.3,1.8,6.8.8,2.1.9,2.2.9,5.5s.3,5.8,1.1,7.3c.6,1.2,2.1,1.4,6.2,1.4h.1c4.5,0,5.3,0,6.4-2.2.7-1.4.8-2.4.8-4.6,0-3.4.8-10.1,1.6-14.7.3,1.5.7,3.3.9,4.9.5,3.2.6,5.6.8,10.7,0,5.7.3,7.2.6,8,0,0,0,0,0,0,.7,1.5,2.4,1.5,3.6,1.5s1.3,0,2.3,0h2.6c0-.1,0,3.6,0,3.6,0,5.9.3,6.1.9,6.6.4.4,1,.4,1.6.4,1.5,0,5.1-.3,8-.6,6.6-.7,6.7-1,7.1-1.8.2-.5.2-1-.1-1.5-.4-.6-.9-1-4.1-1s-4.6-.2-6.5-.4l-2.3-.2v-3.8c0-.9,0-5.4-.3-6.3-.6-2.4-4.8-2.7-7.2-2.7h-.8v-3.1c0-8.7-1.1-16.9-3.1-23.8-1.4-4.7-2-7-4.3-7s-2.8.9-4.6,7.8c-1.1,4.3-2.1,10.1-2.7,15.7l-.4,3.9h-1.9v-1.7c-.2-3.3-.3-3.8-1.6-6.7-1.4-2.9-2.2-6.1-3.8-14.7-.5-2.7-1.1-5.8-1.7-8.3-.3-1.2-.5-2.2-.7-2.9-.3-1.1-.6-2.2-1.8-2.2h0Z"></path></g><g><path d="M38.8,98.2c-.4,0-.7-.3-.7-.7l-.7-10.6c-.3-4.9-.7-11.2-.4-13.3.8-5.2,4.6-9.7,9.1-10.9.8-.2,1.7-.3,2.6-.3,3.5,0,7,1.7,9.3,4.4,3.2,3.7,3.9,7.3,3.3,16.7-.2,2.7-.5,7.1-.9,7.9-.2.4-.5,1-1.1,1h0c-.7,0-.9-.7-1.2-1.6-.6-1.8-1.8-10.5-1.8-12.5s-.8-5-2.1-6.8c-1.4-2-3.5-3.1-5.9-3.1s-5.7,1.9-6.9,4.7c-.6,1.4-.9,3.6-1,7.9,0,1.2-.1,2.7-.2,4.2-.1,2.6-.2,5.3-.4,7.1l-.3,5.1c0,.4-.3.7-.7.7h0Z"></path><path d="M48.7,63.2c3.2,0,6.5,1.6,8.7,4.2,3.1,3.6,3.7,7,3.1,16.2-.2,3.7-.6,7.1-.9,7.6-.2.4-.3.6-.4.6s-.3-.3-.5-1.1c-.5-1.7-1.8-10.3-1.8-12.2s-.9-5.4-2.2-7.2c-1.6-2.3-4.1-3.4-6.5-3.4s-6.2,1.8-7.6,5.2c-.6,1.4-.9,3.7-1.1,8.2-.2,3.4-.4,8.5-.6,11.3l-.3,5.1-.7-10.6c-.5-7-.6-11.5-.4-13.2.7-4.9,4.3-9.2,8.6-10.3.8-.2,1.6-.3,2.4-.3M48.7,61.7c-1,0-1.9.1-2.8.4-4.8,1.2-8.8,6-9.7,11.5-.3,2.2,0,8.5.4,13.5l.7,10.6c0,.8.7,1.4,1.5,1.4s0,0,0,0c.8,0,1.4-.6,1.5-1.4l.3-5.1c.1-1.8.2-4.5.4-7.1,0-1.5.1-3,.2-4.2.2-4.2.4-6.4,1-7.7,1.1-2.6,3.4-4.3,6.2-4.3s4,1,5.3,2.8c1.1,1.6,1.9,4.3,1.9,6.4s1.3,10.8,1.8,12.7c.3.9.6,2.1,1.9,2.1s1.5-1,1.8-1.5c.6-1.2.9-7.4,1-8.2.6-9.6-.2-13.3-3.5-17.3-2.4-2.9-6.1-4.7-9.8-4.7h0Z"></path></g><g><path d="M53.7,49.4c-1.4-1.4-3.2-2.1-5.1-2.1s-3.7.8-5.1,2.1c-1.4,1.4-2.1,3.2-2.1,5.1s.7,3.8,2.1,5.1c1.4,1.4,3.2,2.1,5.1,2.1s3.5-.7,4.9-1.9l-.3-.3c-1.3,1.2-2.9,1.8-4.6,1.8s-3.5-.7-4.8-2c-1.3-1.3-2-3-2-4.8s.7-3.5,2-4.8c1.3-1.3,3-2,4.8-2s3.5.7,4.8,2c1.3,1.3,2,3,2,4.8s-.6,3.4-1.8,4.6l.3.3c1.2-1.3,1.9-3.1,1.9-4.9s-.7-3.8-2.1-5.1Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path><path d="M43.2,56.9l-.4.2c.6,1.6,1.9,2.8,3.4,3.5l.2-.4c-1.5-.6-2.6-1.8-3.2-3.2Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path><path d="M54.1,52.3l.4-.2c-.6-1.6-1.9-2.8-3.4-3.5l-.2.4c1.5.6,2.6,1.8,3.2,3.2Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path><path d="M48.6,48.6v-.4c-1.7,0-3.3.7-4.5,1.9-1.2,1.2-1.9,2.8-1.9,4.5h.4c0-1.6.6-3.1,1.7-4.2,1.1-1.1,2.6-1.7,4.2-1.7Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path><path d="M54.9,54.6h-.4c0,1.6-.6,3.1-1.7,4.2-1.1,1.1-2.6,1.7-4.2,1.7v.4c1.7,0,3.3-.7,4.5-1.9,1.2-1.2,1.9-2.8,1.9-4.5Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path><g><path d="M48.6,54.2c-.2,0-.4.2-.4.4s.2.4.4.4.4-.2.4-.4-.2-.4-.4-.4Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path><path d="M48.7,49.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3,5.3-2.4,5.3-5.3-2.4-5.3-5.3-5.3ZM52.9,52.6l.2.4-.7.3-.2-.4.7-.3ZM51.8,51.1l.3.3-1.1,1.1-.3-.3,1.1-1.1ZM50.2,50.1l.4.2-.3.7-.4-.2.3-.7ZM48.4,49.8h.4v1.6h-.4v-1.6ZM44.4,52.6l.7.3-.2.4-.7-.3.2-.4ZM43.9,54.4h1.6v.4h-1.6v-.4ZM44.4,56.6l-.2-.4.7-.3.2.4-.7.3ZM45.4,58.1l-.3-.3,1.1-1.1.3.3-1.1,1.1ZM46.3,52.5l-1.1-1.1.3-.3,1.1,1.1-.3.3ZM47,50.1l.3.7-.4.2-.3-.7.4-.2ZM47,59l-.4-.2.3-.7.4.2-.3.7ZM48.8,59.3h-.4v-1.6h.4v1.6ZM48.6,55.4c-.4,0-.8-.4-.8-.8s.4-.8.8-.8,0,0,0,0l1-2.5.4.2-1,2.5c.1.1.2.2.3.4h1.8v.4h-1.8c0,.3-.4.6-.8.6ZM50.2,59l-.3-.7.4-.2.3.7-.4.2ZM51.8,58.1l-1.1-1.1.3-.3,1.1,1.1-.3.3ZM52.9,56.6l-.7-.3.2-.4.7.3-.2.4ZM51.7,54.8v-.4h1.6v.4h-1.6Z" style="stroke-miterlimit: 10; stroke-width: .2px;"></path></g></g></svg>');function N(t,s){let e=b(s,"class",8,"");var c=X();d(()=>C(c,0,I(e()))),E(t,c)}export{N as L,_ as b,J as o,K as u};
