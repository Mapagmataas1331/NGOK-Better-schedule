var Be=Object.defineProperty;var _e=e=>{throw TypeError(e)};var qe=(e,t,o)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var y=(e,t,o)=>qe(e,typeof t!="symbol"?t+"":t,o),se=(e,t,o)=>t.has(e)||_e("Cannot "+o);var c=(e,t,o)=>(se(e,t,"read from private field"),o?o.call(e):t.get(e)),S=(e,t,o)=>t.has(e)?_e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),le=(e,t,o,n)=>(se(e,t,"write to private field"),n?n.call(e,o):t.set(e,o),o),Ut=(e,t,o)=>(se(e,t,"access private method"),o);import{q as ze,c as I,a as f,b,i as D,m as Fe,u as We,t as U,r as W,p as L,o as fe,s as X,f as Z,l as ge,g as je,h as Ye}from"./OpgvYbog.js";import{h as de,X as Ge,ax as Ie,ay as Xe,az as Ze,aa as Je,af as Qe,a8 as $e,W as to,U as eo,ai as oo,ah as no,f as m,q as F,p as R,aA as ro,b as V,g as d,d as N,c as j,r as Y,t as J,s as B,a as q,k as Pe,u as io,x as ue,e as it}from"./D09Fc-Xk.js";import{q as M,w as rt,v as so,f as G,t as nt,b as Ce,C as xe,u as Dt,L as ct,M as bt,N as we,S as Se,T as ye,O as Te,Q as ke,R as Ae,U as He,z as Me,V as De,x as lo,E as st,m as ao,W as ho,X as uo,Y as Oe,Z as co,_ as fo,$ as go,a0 as po,p as T,r as vo,o as vt,P as mo,G as bo,A as _o,F as wo,g as So,h as yo,J as No,I as pe,s as ve,d as pt}from"./HTobD_pp.js";function Io(e,t,o){de&&Ge();var n=e,r=eo,i,s=Ie()?Xe:Ze;Je(()=>{s(r,r=t())&&(i&&Qe(i),i=$e(()=>o(n)))}),de&&(n=to)}function Po(e,t,o=t){var n=Ie();ze(e,"input",r=>{var i=r?e.defaultValue:e.value;if(i=ae(e)?he(i):i,o(i),n&&i!==(i=t())){var s=e.selectionStart,u=e.selectionEnd;e.value=i??"",u!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(u,e.value.length))}}),(de&&e.defaultValue!==e.value||oo(t)==null&&e.value)&&o(ae(e)?he(e.value):e.value),no(()=>{var r=t();ae(e)&&r===he(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function ae(e){var t=e.type;return t==="number"||t==="range"}function he(e){return e===""?null:+e}function Co(e,t){var o=I(),n=m(o);Io(n,()=>t.children,r=>{var i=I(),s=m(i);M(s,()=>t.children??F),f(r,i)}),f(e,o)}function xo(e,t){R(t,!0);let o=b(t,"to",3,"body");const n=ro();let r=N(i);function i(){if(!so||t.disabled)return null;let h=null;return typeof o()=="string"?h=document.querySelector(o()):(o()instanceof HTMLElement||o()instanceof DocumentFragment)&&(h=o()),h}let s;function u(){s&&(We(s),s=null)}rt([()=>d(r),()=>t.disabled],([h,_])=>{if(!h||_){u();return}return s=Fe(Co,{target:h,props:{children:t.children},context:n}),()=>{u()}});var v=I(),l=m(v);{var a=h=>{var _=I(),C=m(_);M(C,()=>t.children??F),f(h,_)};D(l,h=>{t.disabled&&h(a)})}f(e,v),V()}function Un(e,t){const o=[];for(let n=0;n<e.length;n+=t)o.push(e.slice(n,n+t));return o}function Rn(e,t){return e>=0&&e<t.length}function To(e,t,o=!0){if(!(e.length===0||t<0||t>=e.length))return e.length===1&&t===0?e[0]:t===e.length-1?o?e[0]:void 0:e[t+1]}function ko(e,t,o=!0){if(!(e.length===0||t<0||t>=e.length))return e.length===1&&t===0?e[0]:t===0?o?e[e.length-1]:void 0:e[t-1]}function Ao(e,t,o,n=!0){if(e.length===0||t<0||t>=e.length)return;let r=t+o;return n?r=(r%e.length+e.length)%e.length:r=Math.max(0,Math.min(r,e.length-1)),e[r]}function Ho(e,t,o,n=!0){if(e.length===0||t<0||t>=e.length)return;let r=t-o;return n?r=(r%e.length+e.length)%e.length:r=Math.max(0,Math.min(r,e.length-1)),e[r]}function Ee(e,t,o){const r=t.length>1&&Array.from(t).every(l=>l===t[0])?t[0]:t,i=o?e.indexOf(o):-1;let s=Mo(e,Math.max(i,0));r.length===1&&(s=s.filter(l=>l!==o));const v=s.find(l=>l==null?void 0:l.toLowerCase().startsWith(r.toLowerCase()));return v!==o?v:void 0}function Mo(e,t){return e.map((o,n)=>e[(t+n)%e.length])}var Do=U("<span><!></span>");function Oo(e,t){R(t,!0);let o=W(t,["$$slots","$$events","$$legacy","children","child"]);const n={position:"absolute",border:0,width:"1px",display:"inline-block",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0 0 0 0)",whiteSpace:"nowrap",wordWrap:"normal"},r=N(()=>nt(o,{style:n}));var i=I(),s=m(i);{var u=l=>{var a=I(),h=m(a);M(h,()=>t.child,()=>({props:d(r)})),f(l,a)},v=l=>{var a=Do();let h;var _=j(a);M(_,()=>t.children??F),Y(a),J(()=>h=G(a,h,{...d(r)})),f(l,a)};D(s,l=>{t.child?l(u):l(v,!1)})}f(e,i),V()}function Eo(e){const t=Ce("",1e3),o=(e==null?void 0:e.onMatch)??(s=>s.focus()),n=(e==null?void 0:e.getCurrentItem)??(()=>document.activeElement);function r(s,u){var C,k;if(!u.length)return;t.current=t.current+s;const v=n(),l=((k=(C=u.find(A=>A===v))==null?void 0:C.textContent)==null?void 0:k.trim())??"",a=u.map(A=>{var g;return((g=A.textContent)==null?void 0:g.trim())??""}),h=Ee(a,t.current,l),_=u.find(A=>{var g;return((g=A.textContent)==null?void 0:g.trim())===h});return _&&o(_),_}function i(){t.current=""}return{search:t,handleTypeaheadSearch:r,resetTypeahead:i}}function Uo(e){const t=Ce("",1e3);function o(r,i){if(!e.enabled||!i.length)return;t.current=t.current+r;const s=e.getCurrentItem(),u=i.find(h=>h===s)??"",v=i.map(h=>h??""),l=Ee(v,t.current,u),a=i.find(h=>h===l);return a&&e.onMatch(a),a}function n(){t.current=""}return{search:t,handleTypeaheadSearch:o,resetTypeahead:n}}const Ro=[bt,Te,ke],Vo=[ct,Ae,He],Ko=[...Ro,...Vo];var _t,wt,St,yt,Nt,It,Pt,Rt,Vt,Kt;class Ue{constructor(t){y(this,"opts");S(this,_t,B(!1));S(this,wt,B(""));S(this,St,B(null));S(this,yt,B(null));S(this,Nt,B(null));S(this,It,B(""));S(this,Pt,B(null));S(this,Rt,N(()=>this.highlightedNode?this.highlightedNode.getAttribute("data-value"):null));S(this,Vt,N(()=>{if(this.highlightedNode)return this.highlightedNode.id}));S(this,Kt,N(()=>this.highlightedNode?this.highlightedNode.getAttribute("data-label"):null));y(this,"isUsingKeyboard",!1);y(this,"isCombobox",!1);y(this,"bitsAttrs");this.opts=t,this.isCombobox=t.isCombobox,this.bitsAttrs=rn(this),io(()=>{this.opts.open.current||this.setHighlightedNode(null)})}get touchedInput(){return d(c(this,_t))}set touchedInput(t){q(c(this,_t),L(t))}get inputValue(){return d(c(this,wt))}set inputValue(t){q(c(this,wt),L(t))}get inputNode(){return d(c(this,St))}set inputNode(t){q(c(this,St),L(t))}get contentNode(){return d(c(this,yt))}set contentNode(t){q(c(this,yt),L(t))}get triggerNode(){return d(c(this,Nt))}set triggerNode(t){q(c(this,Nt),L(t))}get valueId(){return d(c(this,It))}set valueId(t){q(c(this,It),L(t))}get highlightedNode(){return d(c(this,Pt))}set highlightedNode(t){q(c(this,Pt),L(t))}get highlightedValue(){return d(c(this,Rt))}get highlightedId(){return d(c(this,Vt))}get highlightedLabel(){return d(c(this,Kt))}setHighlightedNode(t,o=!1){this.highlightedNode=t,t&&(this.isUsingKeyboard||o)&&t.scrollIntoView({block:"nearest"})}getCandidateNodes(){const t=this.contentNode;return t?Array.from(t.querySelectorAll(`[${this.bitsAttrs.item}]:not([data-disabled])`)):[]}setHighlightedToFirstCandidate(){this.setHighlightedNode(null);const t=this.getCandidateNodes();t.length&&this.setHighlightedNode(t[0])}getNodeByValue(t){return this.getCandidateNodes().find(n=>n.dataset.value===t)??null}setOpen(t){this.opts.open.current=t}toggleOpen(){this.opts.open.current=!this.opts.open.current}handleOpen(){this.setOpen(!0)}handleClose(){this.setHighlightedNode(null),this.setOpen(!1)}toggleMenu(){this.toggleOpen()}}_t=new WeakMap,wt=new WeakMap,St=new WeakMap,yt=new WeakMap,Nt=new WeakMap,It=new WeakMap,Pt=new WeakMap,Rt=new WeakMap,Vt=new WeakMap,Kt=new WeakMap;var Lt,Bt,qt,zt;class Lo extends Ue{constructor(o){super(o);y(this,"opts");y(this,"isMulti",!1);S(this,Lt,N(()=>this.opts.value.current!==""));S(this,Bt,N(()=>{var n;return this.opts.items.current.length?((n=this.opts.items.current.find(r=>r.value===this.opts.value.current))==null?void 0:n.label)??"":""}));S(this,qt,N(()=>this.opts.items.current.length?this.opts.items.current.filter(n=>!n.disabled).map(n=>n.label):[]));S(this,zt,N(()=>!(this.isMulti||this.opts.items.current.length===0)));this.opts=o,Pe(()=>{!this.opts.open.current&&this.highlightedNode&&this.setHighlightedNode(null)}),rt(()=>this.opts.open.current,()=>{this.opts.open.current&&this.setInitialHighlightedNode()})}get hasValue(){return d(c(this,Lt))}get currentLabel(){return d(c(this,Bt))}get candidateLabels(){return d(c(this,qt))}get dataTypeaheadEnabled(){return d(c(this,zt))}includesItem(o){return this.opts.value.current===o}toggleItem(o,n=o){this.opts.value.current=this.includesItem(o)?"":o,this.inputValue=n}setInitialHighlightedNode(){Oe(()=>{if(this.highlightedNode&&document.contains(this.highlightedNode))return;if(this.opts.value.current!==""){const n=this.getNodeByValue(this.opts.value.current);if(n){this.setHighlightedNode(n,!0);return}}const o=this.getCandidateNodes()[0];o&&this.setHighlightedNode(o,!0)})}}Lt=new WeakMap,Bt=new WeakMap,qt=new WeakMap,zt=new WeakMap;var Ft;class Bo extends Ue{constructor(o){super(o);y(this,"opts");y(this,"isMulti",!0);S(this,Ft,N(()=>this.opts.value.current.length>0));this.opts=o,rt(()=>this.opts.open.current,()=>{this.opts.open.current&&this.setInitialHighlightedNode()})}get hasValue(){return d(c(this,Ft))}includesItem(o){return this.opts.value.current.includes(o)}toggleItem(o,n=o){this.includesItem(o)?this.opts.value.current=this.opts.value.current.filter(r=>r!==o):this.opts.value.current=[...this.opts.value.current,o],this.inputValue=n}setInitialHighlightedNode(){Oe(()=>{if(this.highlightedNode&&document.contains(this.highlightedNode))return;if(this.opts.value.current.length&&this.opts.value.current[0]!==""){const n=this.getNodeByValue(this.opts.value.current[0]);if(n){this.setHighlightedNode(n,!0);return}}const o=this.getCandidateNodes()[0];o&&this.setHighlightedNode(o,!0)})}}Ft=new WeakMap;var ft,gt,at,Re,ce,Wt;class qo{constructor(t,o){S(this,at);y(this,"opts");y(this,"root");S(this,ft);S(this,gt);S(this,Wt,N(()=>({id:this.opts.id.current,disabled:this.root.opts.disabled.current?!0:void 0,"aria-haspopup":"listbox","data-state":De(this.root.opts.open.current),"data-disabled":Me(this.root.opts.disabled.current),"data-placeholder":this.root.hasValue?void 0:"",[this.root.bitsAttrs.trigger]:"",onpointerdown:this.onpointerdown,onkeydown:this.onkeydown,onclick:this.onclick,onpointerup:this.onpointerup})));this.opts=t,this.root=o,Dt({...t,onRefChange:n=>{this.root.triggerNode=n}}),le(this,ft,Eo({getCurrentItem:()=>this.root.highlightedNode,onMatch:n=>{this.root.setHighlightedNode(n)}})),le(this,gt,Uo({getCurrentItem:()=>this.root.isMulti?"":this.root.currentLabel,onMatch:n=>{if(this.root.isMulti||!this.root.opts.items.current)return;const r=this.root.opts.items.current.find(i=>i.label===n);r&&(this.root.opts.value.current=r.value)},enabled:!this.root.isMulti&&this.root.dataTypeaheadEnabled})),this.onkeydown=this.onkeydown.bind(this),this.onpointerdown=this.onpointerdown.bind(this),this.onpointerup=this.onpointerup.bind(this),this.onclick=this.onclick.bind(this)}onkeydown(t){if(this.root.isUsingKeyboard=!0,(t.key===ct||t.key===bt)&&t.preventDefault(),!this.root.opts.open.current){if(t.key===we||t.key===Se||t.key===bt||t.key===ct)t.preventDefault(),this.root.handleOpen();else if(!this.root.isMulti&&this.root.dataTypeaheadEnabled){c(this,gt).handleTypeaheadSearch(t.key,this.root.candidateLabels);return}if(this.root.hasValue)return;const i=this.root.getCandidateNodes();if(!i.length)return;if(t.key===bt){const s=i[0];this.root.setHighlightedNode(s)}else if(t.key===ct){const s=i[i.length-1];this.root.setHighlightedNode(s)}return}if(t.key===ye){this.root.handleClose();return}if((t.key===we||t.key===Se)&&!t.isComposing){t.preventDefault();const i=this.root.highlightedValue===this.root.opts.value.current;if(!this.root.opts.allowDeselect.current&&i&&!this.root.isMulti){this.root.handleClose();return}this.root.highlightedValue!==null&&this.root.toggleItem(this.root.highlightedValue,this.root.highlightedLabel??void 0),!this.root.isMulti&&!i&&this.root.handleClose()}if(t.key===ct&&t.altKey&&this.root.handleClose(),Ko.includes(t.key)){t.preventDefault();const i=this.root.getCandidateNodes(),s=this.root.highlightedNode,u=s?i.indexOf(s):-1,v=this.root.opts.loop.current;let l;if(t.key===bt?l=To(i,u,v):t.key===ct?l=ko(i,u,v):t.key===Ae?l=Ao(i,u,10,v):t.key===Te?l=Ho(i,u,10,v):t.key===ke?l=i[0]:t.key===He&&(l=i[i.length-1]),!l)return;this.root.setHighlightedNode(l);return}const o=t.ctrlKey||t.altKey||t.metaKey,n=t.key.length===1;if(t.code==="Space")return;const r=this.root.getCandidateNodes();if(t.key!==ye){if(!o&&n){c(this,ft).handleTypeaheadSearch(t.key,r);return}this.root.highlightedNode||this.root.setHighlightedToFirstCandidate()}}onclick(t){t.currentTarget.focus()}onpointerdown(t){if(this.root.opts.disabled.current)return;if(t.pointerType==="touch")return t.preventDefault();const o=t.target;o!=null&&o.hasPointerCapture(t.pointerId)&&(o==null||o.releasePointerCapture(t.pointerId)),t.button===0&&t.ctrlKey===!1&&(this.root.opts.open.current===!1?(Ut(this,at,ce).call(this,t),t.preventDefault()):this.root.handleClose())}onpointerup(t){t.preventDefault(),t.pointerType==="touch"&&Ut(this,at,ce).call(this,t)}get props(){return d(c(this,Wt))}}ft=new WeakMap,gt=new WeakMap,at=new WeakSet,Re=function(){this.root.opts.open.current=!0,c(this,gt).resetTypeahead(),c(this,ft).resetTypeahead()},ce=function(t){Ut(this,at,Re).call(this)},Wt=new WeakMap;var Ct,xt,jt,Yt,Gt;class zo{constructor(t,o){y(this,"opts");y(this,"root");S(this,Ct,B(null));S(this,xt,B(!1));S(this,jt,N(()=>{const t=this.root.isCombobox?"--bits-combobox":"--bits-select";return{[`${t}-content-transform-origin`]:"var(--bits-floating-transform-origin)",[`${t}-content-available-width`]:"var(--bits-floating-available-width)",[`${t}-content-available-height`]:"var(--bits-floating-available-height)",[`${t}-anchor-width`]:" var(--bits-floating-anchor-width)",[`${t}-anchor-height`]:"var(--bits-floating-anchor-height)"}}));S(this,Yt,N(()=>({open:this.root.opts.open.current})));S(this,Gt,N(()=>({id:this.opts.id.current,role:"listbox","data-state":De(this.root.opts.open.current),[this.root.bitsAttrs.content]:"",style:{display:"flex",flexDirection:"column",outline:"none",boxSizing:"border-box",pointerEvents:"auto",...d(c(this,jt))},onpointermove:this.onpointermove})));this.opts=t,this.root=o,Dt({...t,onRefChange:n=>{this.root.contentNode=n},deps:()=>this.root.opts.open.current}),lo(()=>{this.root.contentNode=null,this.isPositioned=!1}),rt(()=>this.root.opts.open.current,()=>{this.root.opts.open.current||(this.isPositioned=!1)}),this.onpointermove=this.onpointermove.bind(this),this.handleInteractOutside=this.handleInteractOutside.bind(this)}get viewportNode(){return d(c(this,Ct))}set viewportNode(t){q(c(this,Ct),L(t))}get isPositioned(){return d(c(this,xt))}set isPositioned(t){q(c(this,xt),L(t))}onpointermove(t){this.root.isUsingKeyboard=!1}handleInteractOutside(t){(t.target===this.root.triggerNode||t.target===this.root.inputNode)&&t.preventDefault()}get snippetProps(){return d(c(this,Yt))}get props(){return d(c(this,Gt))}}Ct=new WeakMap,xt=new WeakMap,jt=new WeakMap,Yt=new WeakMap,Gt=new WeakMap;var Xt,Zt,Tt,Jt,Qt;class Fo{constructor(t,o){y(this,"opts");y(this,"root");S(this,Xt,N(()=>this.root.includesItem(this.opts.value.current)));S(this,Zt,N(()=>this.root.highlightedValue===this.opts.value.current));y(this,"prevHighlighted",new ho(()=>this.isHighlighted));S(this,Tt,B(!1));S(this,Jt,N(()=>({selected:this.isSelected,highlighted:this.isHighlighted})));S(this,Qt,N(()=>({id:this.opts.id.current,role:"option","aria-selected":this.root.includesItem(this.opts.value.current)?"true":void 0,"data-value":this.opts.value.current,"data-disabled":Me(this.opts.disabled.current),"data-highlighted":this.root.highlightedValue===this.opts.value.current?"":void 0,"data-selected":this.root.includesItem(this.opts.value.current)?"":void 0,"data-label":this.opts.label.current,[this.root.bitsAttrs.item]:"",onpointermove:this.onpointermove,onpointerdown:this.onpointerdown,onpointerup:this.onpointerup})));this.opts=t,this.root=o,Dt({...t,deps:()=>this.mounted}),rt([()=>this.isHighlighted,()=>this.prevHighlighted.current],()=>{this.isHighlighted?this.opts.onHighlight.current():this.prevHighlighted.current&&this.opts.onUnhighlight.current()}),rt(()=>this.mounted,()=>{this.mounted&&this.root.setInitialHighlightedNode()}),this.onpointerdown=this.onpointerdown.bind(this),this.onpointerup=this.onpointerup.bind(this),this.onpointermove=this.onpointermove.bind(this)}get isSelected(){return d(c(this,Xt))}get isHighlighted(){return d(c(this,Zt))}get mounted(){return d(c(this,Tt))}set mounted(t){q(c(this,Tt),L(t))}handleSelect(){if(this.opts.disabled.current)return;const t=this.opts.value.current===this.root.opts.value.current;if(!this.root.opts.allowDeselect.current&&t&&!this.root.isMulti){this.root.handleClose();return}this.root.toggleItem(this.opts.value.current,this.opts.label.current),!this.root.isMulti&&!t&&this.root.handleClose()}get snippetProps(){return d(c(this,Jt))}onpointerdown(t){t.preventDefault()}onpointerup(t){if(!(t.defaultPrevented||!this.opts.ref.current)){if(t.pointerType==="touch"&&!uo){fe(this.opts.ref.current,"click",()=>{this.handleSelect(),this.root.setHighlightedNode(this.opts.ref.current)},{once:!0});return}t.preventDefault(),this.handleSelect(),t.pointerType==="touch"&&this.root.setHighlightedNode(this.opts.ref.current)}}onpointermove(t){t.pointerType!=="touch"&&this.root.highlightedNode!==this.opts.ref.current&&this.root.setHighlightedNode(this.opts.ref.current)}get props(){return d(c(this,Qt))}}Xt=new WeakMap,Zt=new WeakMap,Tt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap;var $t,te;class Wo{constructor(t,o){y(this,"opts");y(this,"root");S(this,$t,N(()=>this.root.opts.name.current!==""));S(this,te,N(()=>({disabled:go(this.root.opts.disabled.current),required:fo(this.root.opts.required.current),name:this.root.opts.name.current,value:this.opts.value.current,style:co(po),tabindex:-1,onfocus:this.onfocus})));this.opts=t,this.root=o,this.onfocus=this.onfocus.bind(this)}get shouldRender(){return d(c(this,$t))}onfocus(t){var o,n;t.preventDefault(),this.root.isCombobox?(n=this.root.inputNode)==null||n.focus():(o=this.root.triggerNode)==null||o.focus()}get props(){return d(c(this,te))}}$t=new WeakMap,te=new WeakMap;var kt,ee;class jo{constructor(t,o){y(this,"opts");y(this,"content");y(this,"root");S(this,kt,B(0));S(this,ee,N(()=>({id:this.opts.id.current,role:"presentation",[this.root.bitsAttrs.viewport]:"",style:{position:"relative",flex:1,overflow:"auto"}})));this.opts=t,this.content=o,this.root=o.root,Dt({...t,onRefChange:n=>{this.content.viewportNode=n},deps:()=>this.root.opts.open.current})}get prevScrollTop(){return d(c(this,kt))}set prevScrollTop(t){q(c(this,kt),L(t))}get props(){return d(c(this,ee))}}kt=new WeakMap,ee=new WeakMap;var At,oe;class Ve{constructor(t,o){y(this,"opts");y(this,"content");y(this,"root");y(this,"autoScrollInterval",null);y(this,"userScrollTimer",-1);y(this,"isUserScrolling",!1);y(this,"onAutoScroll",st);S(this,At,B(!1));S(this,oe,N(()=>({id:this.opts.id.current,"aria-hidden":ao(!0),style:{flexShrink:0},onpointerdown:this.onpointerdown,onpointermove:this.onpointermove,onpointerleave:this.onpointerleave})));this.opts=t,this.content=o,this.root=o.root,Dt({...t,deps:()=>this.mounted}),rt(()=>this.mounted,()=>{if(!this.mounted){this.isUserScrolling=!1;return}if(this.isUserScrolling)return;const n=this.root.highlightedNode;n==null||n.scrollIntoView({block:"nearest"})}),Pe(()=>{this.mounted||this.clearAutoScrollInterval()}),this.onpointerdown=this.onpointerdown.bind(this),this.onpointermove=this.onpointermove.bind(this),this.onpointerleave=this.onpointerleave.bind(this)}get mounted(){return d(c(this,At))}set mounted(t){q(c(this,At),L(t))}handleUserScroll(){window.clearTimeout(this.userScrollTimer),this.isUserScrolling=!0,this.userScrollTimer=window.setTimeout(()=>{this.isUserScrolling=!1},200)}clearAutoScrollInterval(){this.autoScrollInterval!==null&&(window.clearInterval(this.autoScrollInterval),this.autoScrollInterval=null)}onpointerdown(t){this.autoScrollInterval===null&&(this.autoScrollInterval=window.setInterval(()=>{this.onAutoScroll()},50))}onpointermove(t){this.autoScrollInterval===null&&(this.autoScrollInterval=window.setInterval(()=>{this.onAutoScroll()},50))}onpointerleave(t){this.clearAutoScrollInterval()}get props(){return d(c(this,oe))}}At=new WeakMap,oe=new WeakMap;var Ht,ne;class Yo{constructor(t){y(this,"state");y(this,"content");y(this,"root");S(this,Ht,B(!1));y(this,"handleScroll",(t=!1)=>{if(t||this.state.handleUserScroll(),!this.content.viewportNode)return;const o=this.content.viewportNode.scrollHeight-this.content.viewportNode.clientHeight,n=Number.parseInt(getComputedStyle(this.content.viewportNode).paddingTop,10);this.canScrollDown=Math.ceil(this.content.viewportNode.scrollTop)<o-n});y(this,"handleAutoScroll",()=>{const t=this.content.viewportNode,o=this.root.highlightedNode;!t||!o||(t.scrollTop=t.scrollTop+o.offsetHeight)});S(this,ne,N(()=>({...this.state.props,[this.root.bitsAttrs["scroll-down-button"]]:""})));this.state=t,this.content=t.content,this.root=t.root,this.state.onAutoScroll=this.handleAutoScroll,rt([()=>this.content.viewportNode,()=>this.content.isPositioned,()=>this.root.opts.open.current],()=>{if(!(!this.content.viewportNode||!this.content.isPositioned||!this.root.opts.open.current))return this.handleScroll(!0),fe(this.content.viewportNode,"scroll",()=>this.handleScroll())})}get canScrollDown(){return d(c(this,Ht))}set canScrollDown(t){q(c(this,Ht),L(t))}get props(){return d(c(this,ne))}}Ht=new WeakMap,ne=new WeakMap;var Mt,re;class Go{constructor(t){y(this,"state");y(this,"content");y(this,"root");S(this,Mt,B(!1));y(this,"handleScroll",(t=!1)=>{if(t||this.state.handleUserScroll(),!this.content.viewportNode)return;const o=Number.parseInt(getComputedStyle(this.content.viewportNode).paddingTop,10);this.canScrollUp=this.content.viewportNode.scrollTop-o>.1});y(this,"handleAutoScroll",()=>{!this.content.viewportNode||!this.root.highlightedNode||(this.content.viewportNode.scrollTop=this.content.viewportNode.scrollTop-this.root.highlightedNode.offsetHeight)});S(this,re,N(()=>({...this.state.props,[this.root.bitsAttrs["scroll-up-button"]]:""})));this.state=t,this.content=t.content,this.root=t.root,this.state.onAutoScroll=this.handleAutoScroll,rt([()=>this.content.viewportNode,()=>this.content.isPositioned],()=>{if(!(!this.content.viewportNode||!this.content.isPositioned))return this.handleScroll(!0),fe(this.content.viewportNode,"scroll",()=>this.handleScroll())})}get canScrollUp(){return d(c(this,Mt))}set canScrollUp(t){q(c(this,Mt),L(t))}get props(){return d(c(this,re))}}Mt=new WeakMap,re=new WeakMap;const Ot=new xe("Select.Root | Combobox.Root"),ie=new xe("Select.Content | Combobox.Content");function Xo(e){const{type:t,...o}=e,n=t==="single"?new Lo(o):new Bo(o);return Ot.set(n)}function Zo(e){return ie.set(new zo(e,Ot.get()))}function Jo(e){return new qo(e,Ot.get())}function Qo(e){return new Fo(e,Ot.get())}function $o(e){return new jo(e,ie.get())}function tn(e){return new Go(new Ve(e,ie.get()))}function en(e){return new Yo(new Ve(e,ie.get()))}function on(e){return new Wo(e,Ot.get())}const nn=["trigger","content","item","viewport","scroll-up-button","scroll-down-button","group","group-label","separator","arrow","input","content-wrapper","item-text","value"];function rn(e){const t=e.isCombobox,o={};for(const n of nn)o[n]=t?`data-combobox-${n}`:`data-select-${n}`;return o}var sn=U("<input>");function Ne(e,t){R(t,!0);let o=b(t,"value",15,"");const n=on({value:T.with(()=>o())});Oo(e,{children:(r,i)=>{var s=I(),u=m(s);{var v=l=>{var a=sn();vo(a);let h;J(()=>h=G(a,h,{...n.props})),Po(a,o),f(l,a)};D(u,l=>{n.shouldRender&&l(v)})}f(r,s)},$$slots:{default:!0}}),V()}var ln=U("<div><div><!></div></div>"),an=U("<div><div><!></div></div>");function hn(e,t){R(t,!0);let o=b(t,"id",19,vt),n=b(t,"ref",15,null),r=b(t,"forceMount",3,!1),i=b(t,"side",3,"bottom"),s=b(t,"onInteractOutside",3,st),u=b(t,"onEscapeKeydown",3,st),v=b(t,"preventScroll",3,!1),l=W(t,["$$slots","$$events","$$legacy","id","ref","forceMount","side","onInteractOutside","onEscapeKeydown","children","child","preventScroll"]);const a=Zo({id:T.with(()=>o()),ref:T.with(()=>n(),p=>n(p))}),h=N(()=>nt(l,a.props));function _(p){a.handleInteractOutside(p),!p.defaultPrevented&&(s()(p),!p.defaultPrevented&&a.root.handleClose())}function C(p){u()(p),!p.defaultPrevented&&a.root.handleClose()}var k=I(),A=m(k);{var g=p=>{mo(p,X(()=>d(h),{get side(){return i()},get enabled(){return a.root.opts.open.current},get id(){return o()},onInteractOutside:_,onEscapeKeydown:C,onOpenAutoFocus:H=>H.preventDefault(),onCloseAutoFocus:H=>H.preventDefault(),trapFocus:!1,loop:!1,get preventScroll(){return v()},onPlaced:()=>a.isPositioned=!0,forceMount:!0,popper:(H,x)=>{let O=()=>x==null?void 0:x().props,K=()=>x==null?void 0:x().wrapperProps;var E=I();const z=N(()=>nt(O(),{style:a.props.style}));var ht=m(E);{var Q=$=>{var tt=I(),ut=m(tt),lt=ue(()=>({props:d(z),wrapperProps:K(),...a.snippetProps}));M(ut,()=>t.child,()=>d(lt)),f($,tt)},dt=$=>{var tt=ln();let ut;var lt=j(tt);let et;var ot=j(lt);M(ot,()=>t.children??F),Y(lt),Y(tt),J(()=>{ut=G(tt,ut,{...K()}),et=G(lt,et,{...d(z)})}),f($,tt)};D(ht,$=>{t.child?$(Q):$(dt,!1)})}f(H,E)},$$slots:{popper:!0}}))},P=p=>{var w=I(),H=m(w);{var x=O=>{bo(O,X(()=>d(h),{get side(){return i()},get present(){return a.root.opts.open.current},get id(){return o()},onInteractOutside:_,onEscapeKeydown:C,onOpenAutoFocus:E=>E.preventDefault(),onCloseAutoFocus:E=>E.preventDefault(),trapFocus:!1,loop:!1,get preventScroll(){return v()},onPlaced:()=>a.isPositioned=!0,forceMount:!1,popper:(E,z)=>{let ht=()=>z==null?void 0:z().props,Q=()=>z==null?void 0:z().wrapperProps;var dt=I();const $=N(()=>nt(ht(),{style:a.props.style}));var tt=m(dt);{var ut=et=>{var ot=I(),Et=m(ot),mt=ue(()=>({props:d($),wrapperProps:Q(),...a.snippetProps}));M(Et,()=>t.child,()=>d(mt)),f(et,ot)},lt=et=>{var ot=an();let Et;var mt=j(ot);let be;var Le=j(mt);M(Le,()=>t.children??F),Y(mt),Y(ot),J(()=>{Et=G(ot,Et,{...Q()}),be=G(mt,be,{...d($)})}),f(et,ot)};D(tt,et=>{t.child?et(ut):et(lt,!1)})}f(E,dt)},$$slots:{popper:!0}}))};D(H,O=>{r()||O(x)},!0)}f(p,w)};D(A,p=>{r()?p(g):p(P,!1)})}f(e,k),V()}function me(e,t){R(t,!0);let o=b(t,"mounted",15,!1),n=b(t,"onMountedChange",3,st);_o(()=>(o(!0),n()(!0),()=>{o(!1),n()(!1)})),V()}var dn=U("<div><!></div>"),un=U("<!> <!>",1);function cn(e,t){R(t,!0);let o=b(t,"id",19,vt),n=b(t,"ref",15,null),r=b(t,"label",19,()=>t.value),i=b(t,"disabled",3,!1),s=b(t,"onHighlight",3,st),u=b(t,"onUnhighlight",3,st),v=W(t,["$$slots","$$events","$$legacy","id","ref","value","label","disabled","children","child","onHighlight","onUnhighlight"]);const l=Qo({id:T.with(()=>o()),ref:T.with(()=>n(),g=>n(g)),value:T.with(()=>t.value),disabled:T.with(()=>i()),label:T.with(()=>r()),onHighlight:T.with(()=>s()),onUnhighlight:T.with(()=>u())}),a=N(()=>nt(v,l.props));var h=un(),_=m(h);{var C=g=>{var P=I(),p=m(P),w=ue(()=>({props:d(a),...l.snippetProps}));M(p,()=>t.child,()=>d(w)),f(g,P)},k=g=>{var P=dn();let p;var w=j(P);M(w,()=>t.children??F,()=>l.snippetProps),Y(P),J(()=>p=G(P,p,{...d(a)})),f(g,P)};D(_,g=>{t.child?g(C):g(k,!1)})}var A=it(_,2);me(A,{get mounted(){return l.mounted},set mounted(g){l.mounted=g}}),f(e,h),V()}var fn=U("<div><!></div>");function gn(e,t){R(t,!0);let o=b(t,"id",19,vt),n=b(t,"ref",15,null),r=W(t,["$$slots","$$events","$$legacy","id","ref","children","child"]);const i=$o({id:T.with(()=>o()),ref:T.with(()=>n(),h=>n(h))}),s=N(()=>nt(r,i.props));var u=I(),v=m(u);{var l=h=>{var _=I(),C=m(_);M(C,()=>t.child,()=>({props:d(s)})),f(h,_)},a=h=>{var _=fn();let C;var k=j(_);M(k,()=>t.children??F),Y(_),J(()=>C=G(_,C,{...d(s)},"svelte-uf90i5")),f(h,_)};D(v,h=>{t.child?h(l):h(a,!1)})}f(e,u),V()}var pn=U("<div><!></div>"),vn=U("<!> <!>",1);function mn(e,t){R(t,!0);let o=b(t,"id",19,vt),n=b(t,"ref",15,null),r=W(t,["$$slots","$$events","$$legacy","id","ref","child","children"]);const i=en({id:T.with(()=>o()),ref:T.with(()=>n(),a=>n(a))}),s=N(()=>nt(r,i.props));var u=I(),v=m(u);{var l=a=>{var h=vn(),_=m(h);me(_,{get mounted(){return i.state.mounted},set mounted(g){i.state.mounted=g}});var C=it(_,2);{var k=g=>{var P=I(),p=m(P);M(p,()=>t.child,()=>({props:r})),f(g,P)},A=g=>{var P=pn();let p;var w=j(P);M(w,()=>t.children??F),Y(P),J(()=>p=G(P,p,{...d(s)})),f(g,P)};D(C,g=>{t.child?g(k):g(A,!1)})}f(a,h)};D(v,a=>{i.canScrollDown&&a(l)})}f(e,u),V()}var bn=U("<div><!></div>"),_n=U("<!> <!>",1);function wn(e,t){R(t,!0);let o=b(t,"id",19,vt),n=b(t,"ref",15,null),r=W(t,["$$slots","$$events","$$legacy","id","ref","child","children"]);const i=tn({id:T.with(()=>o()),ref:T.with(()=>n(),a=>n(a))}),s=N(()=>nt(r,i.props));var u=I(),v=m(u);{var l=a=>{var h=_n(),_=m(h);me(_,{get mounted(){return i.state.mounted},set mounted(g){i.state.mounted=g}});var C=it(_,2);{var k=g=>{var P=I(),p=m(P);M(p,()=>t.child,()=>({props:r})),f(g,P)},A=g=>{var P=bn();let p;var w=j(P);M(w,()=>t.children??F),Y(P),J(()=>p=G(P,p,{...d(s)})),f(g,P)};D(C,g=>{t.child?g(k):g(A,!1)})}f(a,h)};D(v,a=>{i.canScrollUp&&a(l)})}f(e,u),V()}var Sn=U("<!> <!>",1);function yn(e,t){R(t,!0);let o=b(t,"value",15),n=b(t,"onValueChange",3,st),r=b(t,"name",3,""),i=b(t,"disabled",3,!1),s=b(t,"open",15,!1),u=b(t,"onOpenChange",3,st),v=b(t,"loop",3,!1),l=b(t,"scrollAlignment",3,"nearest"),a=b(t,"required",3,!1),h=b(t,"items",19,()=>[]),_=b(t,"allowDeselect",3,!1);if(o()===void 0){const w=t.type==="single"?"":[];o(w)}const C=Xo({type:t.type,value:T.with(()=>o(),w=>{o(w),n()(w)}),disabled:T.with(()=>i()),required:T.with(()=>a()),open:T.with(()=>s(),w=>{s(w),u()(w)}),loop:T.with(()=>v()),scrollAlignment:T.with(()=>l()),name:T.with(()=>r()),isCombobox:!1,items:T.with(()=>h()),allowDeselect:T.with(()=>_())});var k=Sn(),A=m(k);wo(A,{children:(w,H)=>{var x=I(),O=m(x);M(O,()=>t.children??F),f(w,x)},$$slots:{default:!0}});var g=it(A,2);{var P=w=>{var H=I(),x=m(H);{var O=K=>{var E=I(),z=m(E);So(z,17,()=>C.opts.value.current,yo,(ht,Q)=>{Ne(ht,{get value(){return d(Q)}})}),f(K,E)};D(x,K=>{C.opts.value.current.length&&K(O)})}f(w,H)},p=w=>{Ne(w,{get value(){return C.opts.value.current},set value(H){C.opts.value.current=H}})};D(g,w=>{Array.isArray(C.opts.value.current)?w(P):w(p,!1)})}f(e,k),V()}var Nn=U("<button><!></button>");function In(e,t){R(t,!0);let o=b(t,"id",19,vt),n=b(t,"ref",15,null),r=b(t,"type",3,"button"),i=W(t,["$$slots","$$events","$$legacy","id","ref","child","children","type"]);const s=Jo({id:T.with(()=>o()),ref:T.with(()=>n(),a=>n(a))}),u=N(()=>nt(i,s.props,{type:r()}));var v=I(),l=m(v);Z(l,()=>No,(a,h)=>{h(a,{get id(){return o()},children:(_,C)=>{var k=I(),A=m(k);{var g=p=>{var w=I(),H=m(w);M(H,()=>t.child,()=>({props:d(u)})),f(p,w)},P=p=>{var w=Nn();let H;var x=j(w);M(x,()=>t.children??F),Y(w),J(()=>H=G(w,H,{...d(u)})),f(p,w)};D(A,p=>{t.child?p(g):p(P,!1)})}f(_,k)},$$slots:{default:!0}})}),f(e,v),V()}function Pn(e,t){const o=ge(t,["children","$$slots","$$events","$$legacy"]);pe(e,X({name:"check"},()=>o,{iconNode:[["path",{d:"M20 6 9 17l-5-5"}]],children:(r,i)=>{var s=I(),u=m(s);ve(u,t,"default",{},null),f(r,s)},$$slots:{default:!0}}))}var Cn=U('<span class="absolute right-2 flex size-3.5 items-center justify-center"><!></span> <!>',1);function Vn(e,t){R(t,!0);let o=b(t,"ref",15,null),n=W(t,["$$slots","$$events","$$legacy","ref","class","value","label","children"]);var r=I(),i=m(r);const s=N(()=>pt("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",t.class));Z(i,()=>cn,(u,v)=>{v(u,X({get value(){return t.value},get class(){return d(s)}},()=>n,{get ref(){return o()},set ref(a){o(a)},children:(a,h)=>{let _=()=>h==null?void 0:h().selected,C=()=>h==null?void 0:h().highlighted;var k=Cn(),A=m(k),g=j(A);{var P=x=>{Pn(x,{class:"size-4"})};D(g,x=>{_()&&x(P)})}Y(A);var p=it(A,2);{var w=x=>{var O=I(),K=m(O);M(K,()=>t.children,()=>({selected:_(),highlighted:C()})),f(x,O)},H=x=>{var O=je();J(()=>Ye(O,t.label||t.value)),f(x,O)};D(p,x=>{t.children?x(w):x(H,!1)})}f(a,k)},$$slots:{default:!0}}))}),f(e,r),V()}var xn=U("<!> <!> <!>",1);function Kn(e,t){R(t,!0);let o=b(t,"ref",15,null),n=b(t,"sideOffset",3,4),r=W(t,["$$slots","$$events","$$legacy","ref","class","sideOffset","portalProps","children"]);var i=I(),s=m(i);Z(s,()=>xo,(u,v)=>{v(u,X(()=>t.portalProps,{children:(l,a)=>{var h=I(),_=m(h);const C=N(()=>pt("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t.class));Z(_,()=>hn,(k,A)=>{A(k,X({get sideOffset(){return n()},get class(){return d(C)}},()=>r,{get ref(){return o()},set ref(g){o(g)},children:(g,P)=>{var p=xn(),w=m(p);Z(w,()=>Hn,(K,E)=>{E(K,{})});var H=it(w,2);const x=N(()=>pt("h-[var(--bits-select-anchor-height)] w-full min-w-[var(--bits-select-anchor-width)] p-1"));Z(H,()=>gn,(K,E)=>{E(K,{get class(){return d(x)},children:(z,ht)=>{var Q=I(),dt=m(Q);M(dt,()=>t.children??F),f(z,Q)},$$slots:{default:!0}})});var O=it(H,2);Z(O,()=>kn,(K,E)=>{E(K,{})}),f(g,p)},$$slots:{default:!0}}))}),f(l,h)},$$slots:{default:!0}}))}),f(e,i),V()}function Ke(e,t){const o=ge(t,["children","$$slots","$$events","$$legacy"]);pe(e,X({name:"chevron-down"},()=>o,{iconNode:[["path",{d:"m6 9 6 6 6-6"}]],children:(r,i)=>{var s=I(),u=m(s);ve(u,t,"default",{},null),f(r,s)},$$slots:{default:!0}}))}var Tn=U("<!> <!>",1);function Ln(e,t){R(t,!0);let o=b(t,"ref",15,null),n=W(t,["$$slots","$$events","$$legacy","ref","class","children"]);var r=I(),i=m(r);const s=N(()=>pt("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1",t.class));Z(i,()=>In,(u,v)=>{v(u,X({get class(){return d(s)}},()=>n,{get ref(){return o()},set ref(l){o(l)},children:(l,a)=>{var h=Tn(),_=m(h);M(_,()=>t.children??F);var C=it(_,2);Ke(C,{class:"size-4 opacity-50"}),f(l,h)},$$slots:{default:!0}}))}),f(e,r),V()}function kn(e,t){R(t,!0);let o=b(t,"ref",15,null),n=W(t,["$$slots","$$events","$$legacy","ref","class"]);var r=I(),i=m(r);const s=N(()=>pt("flex cursor-default items-center justify-center py-1",t.class));Z(i,()=>mn,(u,v)=>{v(u,X({get class(){return d(s)}},()=>n,{get ref(){return o()},set ref(l){o(l)},children:(l,a)=>{Ke(l,{class:"size-4"})},$$slots:{default:!0}}))}),f(e,r),V()}function An(e,t){const o=ge(t,["children","$$slots","$$events","$$legacy"]);pe(e,X({name:"chevron-up"},()=>o,{iconNode:[["path",{d:"m18 15-6-6-6 6"}]],children:(r,i)=>{var s=I(),u=m(s);ve(u,t,"default",{},null),f(r,s)},$$slots:{default:!0}}))}function Hn(e,t){R(t,!0);let o=b(t,"ref",15,null),n=W(t,["$$slots","$$events","$$legacy","ref","class"]);var r=I(),i=m(r);const s=N(()=>pt("flex cursor-default items-center justify-center py-1",t.class));Z(i,()=>wn,(u,v)=>{v(u,X({get class(){return d(s)}},()=>n,{get ref(){return o()},set ref(l){o(l)},children:(l,a)=>{An(l,{class:"size-4"})},$$slots:{default:!0}}))}),f(e,r),V()}const Bn=yn;export{Pn as C,me as M,xo as P,Bn as R,Ln as S,Kn as a,Po as b,Vn as c,Un as d,Rn as i,Io as k,Eo as u};
