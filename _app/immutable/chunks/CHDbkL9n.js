import{S as x,Q as Ee,R as Pe,T as S,V as Te,g as m,U as b,d as P,W as D,X as M,Y as Se,Z as Re,_ as oe,$ as ee,a0 as U,a1 as Y,a2 as ce,A as de,a3 as _e,a4 as q,a5 as Ie,a6 as $,a7 as Ne,a8 as Ae,o as E,x as w,q as re,a9 as K,aa as z,ab as Le,ac as Oe,ad as F,ae as O,af as xe,ag as De,ah as Me,ai as Ce,aj as Ve,ak as je,v as G,p as qe,i as Be,a as Ue,m as Ye,E as $e,al as Ke,am as We,an as ne,w as ae,ao as He,H as Fe,k as Z,y as X,B as ve,ap as ze,K as Ge,aq as Ze,ar as Xe,e as ie,M as Qe,as as pe,at as Je,au as ke,L as he,j as er,av as rr,aw as tr,ax as se,ay as V,az as nr}from"./BW5O_Kuy.js";function L(e,r=null,t){if(typeof e!="object"||e===null||x in e)return e;const a=Re(e);if(a!==Ee&&a!==Pe)return e;var n=new Map,i=oe(e),d=S(0);i&&n.set("length",S(e.length));var v;return new Proxy(e,{defineProperty(l,s,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&Se();var f=n.get(s);return f===void 0?(f=S(o.value),n.set(s,f)):P(f,L(o.value,v)),!0},deleteProperty(l,s){var o=n.get(s);if(o===void 0)s in l&&n.set(s,S(b));else{if(i&&typeof s=="string"){var f=n.get("length"),u=Number(s);Number.isInteger(u)&&u<f.v&&P(f,u)}P(o,b),ue(d)}return!0},get(l,s,o){var _;if(s===x)return e;var f=n.get(s),u=s in l;if(f===void 0&&(!u||(_=D(l,s))!=null&&_.writable)&&(f=S(L(u?l[s]:b,v)),n.set(s,f)),f!==void 0){var c=m(f);return c===b?void 0:c}return Reflect.get(l,s,o)},getOwnPropertyDescriptor(l,s){var o=Reflect.getOwnPropertyDescriptor(l,s);if(o&&"value"in o){var f=n.get(s);f&&(o.value=m(f))}else if(o===void 0){var u=n.get(s),c=u==null?void 0:u.v;if(u!==void 0&&c!==b)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return o},has(l,s){var c;if(s===x)return!0;var o=n.get(s),f=o!==void 0&&o.v!==b||Reflect.has(l,s);if(o!==void 0||M!==null&&(!f||(c=D(l,s))!=null&&c.writable)){o===void 0&&(o=S(f?L(l[s],v):b),n.set(s,o));var u=m(o);if(u===b)return!1}return f},set(l,s,o,f){var g;var u=n.get(s),c=s in l;if(i&&s==="length")for(var _=o;_<u.v;_+=1){var h=n.get(_+"");h!==void 0?P(h,b):_ in l&&(h=S(b),n.set(_+"",h))}u===void 0?(!c||(g=D(l,s))!=null&&g.writable)&&(u=S(void 0),P(u,L(o,v)),n.set(s,u)):(c=u.v!==b,P(u,L(o,v)));var y=Reflect.getOwnPropertyDescriptor(l,s);if(y!=null&&y.set&&y.set.call(f,o),!c){if(i&&typeof s=="string"){var I=n.get("length"),R=Number(s);Number.isInteger(R)&&R>=I.v&&P(I,R+1)}ue(d)}return!0},ownKeys(l){m(d);var s=Reflect.ownKeys(l).filter(u=>{var c=n.get(u);return c===void 0||c.v!==b});for(var[o,f]of n)f.v!==b&&!(o in l)&&s.push(o);return s},setPrototypeOf(){Te()}})}function ue(e,r=1){P(e,e.v+r)}function wr(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ar=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function yr(e){return ar.includes(e)}const ir={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function gr(e){return e=e.toLowerCase(),ir[e]??e}const sr=["touchstart","touchmove"];function ur(e){return sr.includes(e)}const fr=["textarea","script","style","title"];function mr(e){return fr.includes(e)}function Er(e,r){if(r){const t=document.body;e.autofocus=!0,ee(()=>{document.activeElement===t&&e.focus()})}}let fe=!1;function lr(){fe||(fe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function be(e){var r=ce,t=M;U(null),Y(null);try{return e()}finally{U(r),Y(t)}}function Pr(e,r,t,a=t){e.addEventListener(r,()=>be(t));const n=e.__on_r;n?e.__on_r=()=>{n(),a(!0)}:e.__on_r=()=>a(!0),lr()}const we=new Set,Q=new Set;function ye(e,r,t,a={}){function n(i){if(a.capture||j.call(r,i),!i.cancelBubble)return be(()=>t==null?void 0:t.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ee(()=>{r.addEventListener(e,n,a)}):r.addEventListener(e,n,a),n}function Tr(e,r,t,a={}){var n=ye(r,e,t,a);return()=>{e.removeEventListener(r,n,a)}}function Sr(e,r,t,a,n){var i={capture:a,passive:n},d=ye(e,r,t,i);(r===document.body||r===window||r===document)&&_e(()=>{r.removeEventListener(e,d,i)})}function Rr(e){for(var r=0;r<e.length;r++)we.add(e[r]);for(var t of Q)t(e)}function j(e){var R;var r=this,t=r.ownerDocument,a=e.type,n=((R=e.composedPath)==null?void 0:R.call(e))||[],i=n[0]||e.target,d=0,v=e.__root;if(v){var l=n.indexOf(v);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var s=n.indexOf(r);if(s===-1)return;l<=s&&(d=l)}if(i=n[d]||e.target,i!==r){de(e,"currentTarget",{configurable:!0,get(){return i||t}});var o=ce,f=M;U(null),Y(null);try{for(var u,c=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var h=i["__"+a];if(h!==void 0&&!i.disabled)if(oe(h)){var[y,...I]=h;y.apply(i,[e,...I])}else h.call(i,e)}catch(g){u?c.push(g):u=g}if(e.cancelBubble||_===r||_===null)break;i=_}if(u){for(let g of c)queueMicrotask(()=>{throw g});throw u}}finally{e.__root=r,delete e.currentTarget,U(o),Y(f)}}}function ge(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function T(e,r){var t=M;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Ir(e,r){var t=(r&Ne)!==0,a=(r&Ae)!==0,n,i=!e.startsWith("<!>");return()=>{if(E)return T(w,null),w;n===void 0&&(n=ge(i?e:"<!>"+e),t||(n=q(n)));var d=a||Ie?document.importNode(n,!0):n.cloneNode(!0);if(t){var v=q(d),l=d.lastChild;T(v,l)}else T(d,d);return d}}function Nr(e,r,t="svg"){var a=!e.startsWith("<!>"),n=`<${t}>${a?e:"<!>"+e}</${t}>`,i;return()=>{if(E)return T(w,null),w;if(!i){var d=ge(n),v=q(d);i=q(v)}var l=i.cloneNode(!0);return T(l,l),l}}function Ar(e=""){if(!E){var r=$(e+"");return T(r,r),r}var t=w;return t.nodeType!==3&&(t.before(t=$()),K(t)),T(t,t),t}function Lr(){if(E)return T(w,null),w;var e=document.createDocumentFragment(),r=document.createComment(""),t=$();return e.append(r,t),T(r,t),e}function Or(e,r){if(E){M.nodes_end=w,re();return}e!==null&&e.before(r)}function xr(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function or(e,r){return me(e,r)}function Dr(e,r){z(),r.intro=r.intro??!1;const t=r.target,a=E,n=w;try{for(var i=q(t);i&&(i.nodeType!==8||i.data!==Le);)i=Oe(i);if(!i)throw F;O(!0),K(i),re();const d=me(e,{...r,anchor:i});if(w===null||w.nodeType!==8||w.data!==xe)throw De(),F;return O(!1),d}catch(d){if(d===F)return r.recover===!1&&Me(),z(),Ce(t),O(!1),or(e,r);throw d}finally{O(a),K(n)}}const A=new Map;function me(e,{target:r,anchor:t,props:a={},events:n,context:i,intro:d=!0}){z();var v=new Set,l=f=>{for(var u=0;u<f.length;u++){var c=f[u];if(!v.has(c)){v.add(c);var _=ur(c);r.addEventListener(c,j,{passive:_});var h=A.get(c);h===void 0?(document.addEventListener(c,j,{passive:_}),A.set(c,1)):A.set(c,h+1)}}};l(Ve(we)),Q.add(l);var s=void 0,o=je(()=>{var f=t??r.appendChild($());return G(()=>{if(i){qe({});var u=Be;u.c=i}n&&(a.$$events=n),E&&T(f,null),s=e(f,a)||{},E&&(M.nodes_end=w),i&&Ue()}),()=>{var _;for(var u of v){r.removeEventListener(u,j);var c=A.get(u);--c===0?(document.removeEventListener(u,j),A.delete(u)):A.set(u,c)}Q.delete(l),f!==t&&((_=f.parentNode)==null||_.removeChild(f))}});return J.set(s,o),s}let J=new WeakMap;function Mr(e,r){const t=J.get(e);return t?(J.delete(e),t(r)):Promise.resolve()}function Cr(e,r,t=!1){E&&re();var a=e,n=null,i=null,d=b,v=t?$e:0,l=!1;const s=(f,u=!0)=>{l=!0,o(u,f)},o=(f,u)=>{if(d===(d=f))return;let c=!1;if(E){const _=a.data===Ke;!!d===_&&(a=We(),K(a),O(!1),c=!0)}d?(n?ne(n):u&&(n=G(()=>u(a))),i&&ae(i,()=>{i=null})):(i?ne(i):u&&(i=G(()=>u(a))),n&&ae(n,()=>{n=null})),c&&O(!0)};Ye(()=>{l=!1,r(s),l||o(null,null)},v),E&&(a=w)}function le(e,r){return e===r||(e==null?void 0:e[x])===r}function Vr(e={},r,t,a){return He(()=>{var n,i;return Fe(()=>{n=i,i=[],Z(()=>{e!==t(...i)&&(r(e,...i),n&&le(t(...n),e)&&r(null,...n))})}),()=>{ee(()=>{i&&le(t(...i),e)&&r(null,...i)})}}),e}let B=!1,k=Symbol();function jr(e,r,t){const a=t[r]??(t[r]={store:null,source:ve(void 0),unsubscribe:X});if(a.store!==e&&!(k in t))if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=X;else{var n=!0;a.unsubscribe=ze(e,i=>{n?a.source.v=i:P(a.source,i)}),n=!1}return e&&k in t?Ge(e):m(a.source)}function qr(e,r,t){let a=t[r];return a&&a.store!==e&&(a.unsubscribe(),a.unsubscribe=X),e}function Br(){const e={};function r(){_e(()=>{for(var t in e)e[t].unsubscribe();de(e,k,{enumerable:!1,value:!0})})}return[e,r]}function cr(e){var r=B;try{return B=!1,[e(),B]}finally{B=r}}const dr={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ur(e,r,t){return new Proxy({props:e,exclude:r},dr)}const _r={get(e,r){if(!e.exclude.includes(r))return m(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=pr({get[r](){return e.props[r]}},r,pe)),e.special[r](t),se(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),se(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Yr(e,r){return new Proxy({props:e,exclude:r,special:{},version:S(0)},_r)}const vr={get(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(V(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,t){let a=e.props.length;for(;a--;){let n=e.props[a];V(n)&&(n=n());const i=D(n,r);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(V(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const n=D(a,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===x||r===he)return!1;for(let t of e.props)if(V(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){V(t)&&(t=t());for(const a in t)r.includes(a)||r.push(a)}return r}};function $r(...e){return new Proxy({props:e},vr)}function pr(e,r,t,a){var te;var n=(t&tr)!==0,i=!er||(t&rr)!==0,d=(t&ke)!==0,v=(t&nr)!==0,l=!1,s;d?[s,l]=cr(()=>e[r]):s=e[r];var o=x in e||he in e,f=d&&(((te=D(e,r))==null?void 0:te.set)??(o&&r in e&&(p=>e[r]=p)))||void 0,u=a,c=!0,_=!1,h=()=>(_=!0,c&&(c=!1,v?u=Z(a):u=a),u);s===void 0&&a!==void 0&&(f&&i&&Ze(),s=h(),f&&f(s));var y;if(i)y=()=>{var p=e[r];return p===void 0?h():(c=!0,_=!1,p)};else{var I=(n?ie:Qe)(()=>e[r]);I.f|=Xe,y=()=>{var p=m(I);return p!==void 0&&(u=void 0),p===void 0?u:p}}if(!(t&pe))return y;if(f){var R=e.$$legacy;return function(p,N){return arguments.length>0?((!i||!N||R||l)&&f(N?y():p),p):y()}}var g=!1,W=ve(s),C=ie(()=>{var p=y(),N=m(W);return g?(g=!1,N):W.v=p});return n||(C.equals=Je),function(p,N){if(arguments.length>0){const H=N?m(C):i&&d?L(p):p;return C.equals(H)||(g=!0,P(W,H),_&&u!==void 0&&(u=H),Z(()=>m(C))),p}return m(C)}}const hr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hr);export{gr as A,yr as B,lr as C,Sr as D,qr as E,Or as a,jr as b,Lr as c,Ar as d,xr as e,$r as f,pr as g,Vr as h,Cr as i,Dr as j,Pr as k,Yr as l,or as m,Nr as n,Tr as o,L as p,T as q,Ur as r,Br as s,Ir as t,Mr as u,mr as v,wr as w,ye as x,Rr as y,Er as z};
