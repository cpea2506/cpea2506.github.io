var He=Object.defineProperty;var Fe=(r,e,t)=>e in r?He(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var he=(r,e,t)=>(Fe(r,typeof e!="symbol"?e+"":e,t),t);import{n as _e,s as Ke,S as Ge,i as Ye,a as Me,e as I,c as Xe,b as V,g as H,t as j,d as F,f as C,h as D,j as Ze,k as Qe,o as be,l as xe,m as et,p as tt,q as me,r as K,u as nt,v as rt,w as st,x as q,y as x,z,A as B,B as Ie}from"./chunks/index-db7c227e.js";const M=[];function ae(r,e=_e){let t;const i=new Set;function s(a){if(Ke(r,a)&&(r=a,t)){const c=!M.length;for(const l of i)l[1](),M.push(l,r);if(c){for(let l=0;l<M.length;l+=2)M[l][0](M[l+1]);M.length=0}}}function u(a){s(a(r))}function n(a,c=_e){const l=[a,c];return i.add(l),i.size===1&&(t=e(s)||_e),a(r),()=>{i.delete(l),i.size===0&&(t(),t=null)}}return{set:s,update:u,subscribe:n}}class se{constructor(e,t){he(this,"name","HttpError");he(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class je{constructor(e,t){this.status=e,this.location=t}}function at(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function it(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class ot extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Ce="",Je="";function ct(r){Ce=r.base,Je=r.assets||Ce}function Ne(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function ye(){return{x:pageXOffset,y:pageYOffset}}function Te(r){return r.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function De(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ve(r){const e=ae(r);let t=!0;function i(){t=!0,e.update(n=>n)}function s(n){t=!1,e.set(n)}function u(n){let a;return e.subscribe(c=>{(a===void 0||t&&c!==a)&&n(a=c)})}return{notify:i,set:s,subscribe:u}}function lt(){const{set:r,subscribe:e}=ae(!1);let t;async function i(){clearTimeout(t);const s=await fetch(`${Je}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:u}=await s.json(),n=u!=="1660680663988";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:i}}function ft(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const ve=window.fetch;function ut(r,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${ft(e.body)}"]`);const s=document.querySelector(i);if(s&&s.textContent){const{body:u,...n}=JSON.parse(s.textContent);return Promise.resolve(new Response(u,n))}return ve(r,e)}const dt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function pt(r){const e=[],t=[];let i=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,n,a)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),t.push(c[2]),"(?:/(.*))?";const l=n===a.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((m,R)=>{if(R%2){const U=dt.exec(m);if(!U)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,ee,te]=U;return e.push(ee),t.push(te),$?"(.*?)":"([^/]+?)"}return l&&m.includes(".")&&(i=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:t}}function ht(r,e,t,i){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],a=t[u],c=r[u+1]||"";if(a){const l=i[a];if(!l)throw new Error(`Missing "${a}" param matcher`);if(!l(c))return}s[n]=c}return s}function _t(r,e,t){return Object.entries(e).map(([i,[s,u,n,a]])=>{const{pattern:c,names:l,types:m}=pt(i),R={id:i,exec:U=>{const $=c.exec(U);if($)return ht($,l,m,t)},errors:s.map(U=>r[U]),layouts:u.map(U=>r[U]),leaf:r[n],uses_server_data:!!a};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R})}function mt(r,e){return new se(r,e)}function gt(r){let e,t,i;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[4]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=I()},l(n){e&&x(e.$$.fragment,n),t=I()},m(n,a){e&&z(e,n,a),V(n,t,a),i=!0},p(n,a){const c={};if(a&2&&(c.data=n[1]),a&16&&(c.errors=n[4]),s!==(s=n[0][0])){if(e){H();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){i||(e&&C(e.$$.fragment,n),i=!0)},o(n){e&&j(e.$$.fragment,n),i=!1},d(n){n&&D(t),e&&B(e,n)}}}function wt(r){let e,t,i;var s=r[0][0];function u(n){return{props:{data:n[1],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=I()},l(n){e&&x(e.$$.fragment,n),t=I()},m(n,a){e&&z(e,n,a),V(n,t,a),i=!0},p(n,a){const c={};if(a&2&&(c.data=n[1]),a&1053&&(c.$$scope={dirty:a,ctx:n}),s!==(s=n[0][0])){if(e){H();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){i||(e&&C(e.$$.fragment,n),i=!0)},o(n){e&&j(e.$$.fragment,n),i=!1},d(n){n&&D(t),e&&B(e,n)}}}function bt(r){let e,t,i;var s=r[0][1];function u(n){return{props:{data:n[2],errors:n[4]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=I()},l(n){e&&x(e.$$.fragment,n),t=I()},m(n,a){e&&z(e,n,a),V(n,t,a),i=!0},p(n,a){const c={};if(a&4&&(c.data=n[2]),a&16&&(c.errors=n[4]),s!==(s=n[0][1])){if(e){H();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){i||(e&&C(e.$$.fragment,n),i=!0)},o(n){e&&j(e.$$.fragment,n),i=!1},d(n){n&&D(t),e&&B(e,n)}}}function yt(r){let e,t,i;var s=r[0][1];function u(n){return{props:{data:n[2],$$slots:{default:[vt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=I()},l(n){e&&x(e.$$.fragment,n),t=I()},m(n,a){e&&z(e,n,a),V(n,t,a),i=!0},p(n,a){const c={};if(a&4&&(c.data=n[2]),a&1033&&(c.$$scope={dirty:a,ctx:n}),s!==(s=n[0][1])){if(e){H();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){i||(e&&C(e.$$.fragment,n),i=!0)},o(n){e&&j(e.$$.fragment,n),i=!1},d(n){n&&D(t),e&&B(e,n)}}}function vt(r){let e,t,i;var s=r[0][2];function u(n){return{props:{data:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=I()},l(n){e&&x(e.$$.fragment,n),t=I()},m(n,a){e&&z(e,n,a),V(n,t,a),i=!0},p(n,a){const c={};if(a&8&&(c.data=n[3]),s!==(s=n[0][2])){if(e){H();const l=e;j(l.$$.fragment,1,0,()=>{B(l,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){i||(e&&C(e.$$.fragment,n),i=!0)},o(n){e&&j(e.$$.fragment,n),i=!1},d(n){n&&D(t),e&&B(e,n)}}}function kt(r){let e,t,i,s;const u=[yt,bt],n=[];function a(c,l){return c[0][2]?0:1}return e=a(r),t=n[e]=u[e](r),{c(){t.c(),i=I()},l(c){t.l(c),i=I()},m(c,l){n[e].m(c,l),V(c,i,l),s=!0},p(c,l){let m=e;e=a(c),e===m?n[e].p(c,l):(H(),j(n[m],1,1,()=>{n[m]=null}),F(),t=n[e],t?t.p(c,l):(t=n[e]=u[e](c),t.c()),C(t,1),t.m(i.parentNode,i))},i(c){s||(C(t),s=!0)},o(c){j(t),s=!1},d(c){n[e].d(c),c&&D(i)}}}function qe(r){let e,t=r[6]&&ze(r);return{c(){e=xe("div"),t&&t.c(),this.h()},l(i){e=et(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=tt(e);t&&t.l(s),s.forEach(D),this.h()},h(){me(e,"id","svelte-announcer"),me(e,"aria-live","assertive"),me(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(i,s){V(i,e,s),t&&t.m(e,null)},p(i,s){i[6]?t?t.p(i,s):(t=ze(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&D(e),t&&t.d()}}}function ze(r){let e;return{c(){e=nt(r[7])},l(t){e=rt(t,r[7])},m(t,i){V(t,e,i)},p(t,i){i&128&&st(e,t[7])},d(t){t&&D(e)}}}function $t(r){let e,t,i,s,u;const n=[wt,gt],a=[];function c(m,R){return m[0][1]?0:1}e=c(r),t=a[e]=n[e](r);let l=r[5]&&qe(r);return{c(){t.c(),i=Me(),l&&l.c(),s=I()},l(m){t.l(m),i=Xe(m),l&&l.l(m),s=I()},m(m,R){a[e].m(m,R),V(m,i,R),l&&l.m(m,R),V(m,s,R),u=!0},p(m,[R]){let U=e;e=c(m),e===U?a[e].p(m,R):(H(),j(a[U],1,1,()=>{a[U]=null}),F(),t=a[e],t?t.p(m,R):(t=a[e]=n[e](m),t.c()),C(t,1),t.m(i.parentNode,i)),m[5]?l?l.p(m,R):(l=qe(m),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(m){u||(C(t),u=!0)},o(m){j(t),u=!1},d(m){a[e].d(m),m&&D(i),l&&l.d(m),m&&D(s)}}}function Et(r,e,t){let{stores:i}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:a=null}=e,{data_2:c=null}=e,{errors:l}=e;Ze("__svelte__",i),Qe(i.page.notify);let m=!1,R=!1,U=null;return be(()=>{const $=i.page.subscribe(()=>{m&&(t(6,R=!0),t(7,U=document.title||"untitled page"))});return t(5,m=!0),$}),r.$$set=$=>{"stores"in $&&t(8,i=$.stores),"page"in $&&t(9,s=$.page),"components"in $&&t(0,u=$.components),"data_0"in $&&t(1,n=$.data_0),"data_1"in $&&t(2,a=$.data_1),"data_2"in $&&t(3,c=$.data_2),"errors"in $&&t(4,l=$.errors)},r.$$.update=()=>{r.$$.dirty&768&&i.page.set(s)},[u,n,a,c,l,m,R,U,i,s]}class Rt extends Ge{constructor(e){super(),Ye(this,e,Et,$t,Ke,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const Lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),St=function(r){return"/"+r},Be={},X=function(e,t,i){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=St(s),s in Be)return;Be[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":Lt,u||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),u)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Ut={},ie=[()=>X(()=>import("./chunks/0-bb1b442c.js"),["_app/immutable/chunks/0-bb1b442c.js","_app/immutable/chunks/_layout-ea160761.js","_app/immutable/components/pages/_layout.svelte-330fd3b1.js","_app/immutable/assets/+layout-04487631.css","_app/immutable/chunks/index-db7c227e.js"]),()=>X(()=>import("./chunks/1-454f7d4b.js"),["_app/immutable/chunks/1-454f7d4b.js","_app/immutable/components/error.svelte-f06440ba.js","_app/immutable/chunks/index-db7c227e.js"]),()=>X(()=>import("./chunks/2-30948883.js"),["_app/immutable/chunks/2-30948883.js","_app/immutable/components/pages/_page.svelte-74c43b0b.js","_app/immutable/assets/+page-da06e8c0.css","_app/immutable/chunks/index-db7c227e.js"]),()=>X(()=>import("./chunks/3-6eb1fa4f.js"),["_app/immutable/chunks/3-6eb1fa4f.js","_app/immutable/chunks/_page-ecbbfad2.js","_app/immutable/components/pages/blogs/_page.svelte-ee539ee5.js","_app/immutable/chunks/index-db7c227e.js"]),()=>X(()=>import("./chunks/4-c833b88b.js"),["_app/immutable/chunks/4-c833b88b.js","_app/immutable/components/pages/blogs/posts/lmao/_page.md-af1dad2c.js","_app/immutable/chunks/index-db7c227e.js","_app/immutable/chunks/_post-bbbfc42f.js"]),()=>X(()=>import("./chunks/5-2bc7df8e.js"),["_app/immutable/chunks/5-2bc7df8e.js","_app/immutable/components/pages/blogs/posts/rustCode/_page.md-af3bb2cd.js","_app/immutable/chunks/index-db7c227e.js","_app/immutable/chunks/_post-bbbfc42f.js"])],At={"":[[1],[0],2],blogs:[[1],[0],3],"blogs/posts/lmao":[[1],[0],4],"blogs/posts/rustCode":[[1],[0],5]},We="sveltekit:scroll",W="sveltekit:index",ge=_t(ie,At,Ut),Ot=ie[0](),Pt=ie[1]();let Q={};try{Q=JSON.parse(sessionStorage[We])}catch{}function we(r){Q[r]=ye()}function It({target:r,session:e,base:t,trailing_slash:i}){var Ae;const s=[],u={url:Ve({}),page:Ve({}),navigating:ae(null),session:ae(e),updated:lt()},n={id:null,promise:null},a={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,session_id:0,url:null},l=!1,m=!0,R=!1,U=1,$=null,ee,te,ke=!1;u.session.subscribe(async o=>{te=o,!(!ke||(U+=1,!c.branch.some(g=>g==null?void 0:g.uses.session)))&&fe(new URL(location.href),[])}),ke=!0;let G=!0,T=(Ae=history.state)==null?void 0:Ae[W];T||(T=Date.now(),history.replaceState({...history.state,[W]:T},"",location.href));const oe=Q[T];oe&&(history.scrollRestoration="manual",scrollTo(oe.x,oe.y));let ce=!1,le,$e;async function Ee(o,{noscroll:p=!1,replaceState:g=!1,keepfocus:f=!1,state:d={}},E){if(typeof o=="string"&&(o=new URL(o,Ne(document))),G)return de({url:o,scroll:p?ye():null,keepfocus:f,redirect_chain:E,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await Z(o)}async function Re(o){const p=Ue(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return n.promise=Se(p),n.id=p.id,n.promise}async function fe(o,p,g,f){var y,A,L;const d=Ue(o),E=$e={};let h=d&&await Se(d);if(!h&&o.origin===location.origin&&o.pathname===location.pathname&&(h=await re({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!h)return await Z(o),!1;if(o=(d==null?void 0:d.url)||o,$e!==E)return!1;if(s.length=0,h.type==="redirect")if(p.length>10||p.includes(o.pathname))h=await re({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return G?Ee(new URL(h.location,o).href,{},[...p,o.pathname]):await Z(new URL(h.location,location.href)),!1;else((A=(y=h.props)==null?void 0:y.page)==null?void 0:A.status)>=400&&await u.updated.check()&&await Z(o);if(R=!0,g&&g.details){const{details:S}=g,v=S.replaceState?0:1;S.state[W]=T+=v,history[S.replaceState?"replaceState":"pushState"](S.state,"",o)}if(l?(c=h.state,h.props.page&&(h.props.page.url=o),ee.$set(h.props)):Le(h),g){const{scroll:S,keepfocus:v}=g;if(!v){const b=document.body,_=b.getAttribute("tabindex");b.tabIndex=-1,b.focus({preventScroll:!0}),setTimeout(()=>{var w;(w=getSelection())==null||w.removeAllRanges()}),_!==null?b.setAttribute("tabindex",_):b.removeAttribute("tabindex")}if(await Ie(),m){const b=o.hash&&document.getElementById(o.hash.slice(1));S?scrollTo(S.x,S.y):b?b.scrollIntoView():scrollTo(0,0)}}else await Ie();n.promise=null,n.id=null,m=!0,h.props.page&&(le=h.props.page);const k=h.state.branch.at(-1);G=((L=k==null?void 0:k.node.shared)==null?void 0:L.router)!==!1,f&&f(),R=!1}function Le(o){c=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),le=o.props.page,ee=new Rt({target:r,props:{...o.props,stores:u},hydrate:!0}),G){const g={from:null,to:new URL(location.href)};a.after_navigate.forEach(f=>f(g))}l=!0}async function ne({url:o,params:p,branch:g,status:f,error:d,routeId:E,validation_errors:h}){const k=g.filter(Boolean),y={type:"loaded",state:{url:o,params:p,branch:g,error:d,session_id:U},props:{components:k.map(v=>v.node.component),errors:h}};let A={},L=!1;for(let v=0;v<k.length;v+=1)Object.assign(A,k[v].data),c.branch.some(b=>b===k[v])||(y.props[`data_${v}`]=k[v].data,L=!0);if(!c.url||o.href!==c.url.href||c.error!==d||L){y.props.page={error:d,params:p,routeId:E,status:f,url:o,data:A};const v=(b,_)=>{Object.defineProperty(y.props.page,b,{get:()=>{throw new Error(`$page.${b} has been replaced by $page.url.${_}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return y}async function ue({node:o,parent:p,url:g,params:f,routeId:d,server_data:E}){var v,b;const h={params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1};function k(..._){for(const w of _){const{href:O}=new URL(w,g);h.dependencies.add(O)}}let y=null;o.server&&(h.dependencies.add(g.href),h.url=!0);const A={};for(const _ in f)Object.defineProperty(A,_,{get(){return h.params.add(_),f[_]},enumerable:!0});const L=te,S=new ot(g);if((v=o.shared)!=null&&v.load){const _={routeId:d,params:A,data:E,get url(){return h.url=!0,S},get session(){return h.session=!0,L},async fetch(w,O){let P;typeof w=="string"?P=w:(P=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O});const J=new URL(P,g).href;return k(J),l?ve(J,O):ut(P,O)},setHeaders:()=>{},depends:k,get parent(){return h.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};y=(b=await o.shared.load.call(null,_))!=null?b:null}return{node:o,data:y||E,uses:h}}async function Se({id:o,url:p,params:g,route:f}){if(n.id===o&&n.promise)return n.promise;const{errors:d,layouts:E,leaf:h}=f,k=c.url&&{url:o!==c.url.pathname+c.url.search,params:Object.keys(g).filter(_=>c.params[_]!==g[_]),session:U!==c.session_id};[...d,...E,h].forEach(_=>_==null?void 0:_().catch(()=>{}));const y=[...E,h],A=[];for(let _=0;_<y.length;_++)if(!y[_])A.push(!1);else{const w=c.branch[_],O=!w||k.url&&w.uses.url||k.params.some(P=>w.uses.params.has(P))||k.session&&w.uses.session||Array.from(w.uses.dependencies).some(P=>s.some(J=>J(P)))||w.uses.parent&&A.includes(!0);A.push(O)}let L=null;if(f.uses_server_data){try{const _=await ve(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(L=await _.json(),!_.ok)throw L}catch{throw new Error("TODO render fallback error page")}if(L.type==="redirect")return L}const S=L==null?void 0:L.nodes,v=y.map(async(_,w)=>Promise.resolve().then(async()=>{var Y;if(!_)return;const O=await _(),P=c.branch[w];if(A[w]||!P||O!==P.node){const N=S==null?void 0:S[w];if(N!=null&&N.status)throw mt(N.status,N.message);if(N!=null&&N.error)throw N.error;return await ue({node:O,url:p,params:g,routeId:f.id,parent:async()=>{var Pe;const Oe={};for(let pe=0;pe<w;pe+=1)Object.assign(Oe,(Pe=await v[pe])==null?void 0:Pe.data);return Oe},server_data:(Y=N==null?void 0:N.data)!=null?Y:null})}else return P}));for(const _ of v)_.catch(()=>{});const b=[];for(let _=0;_<y.length;_+=1)if(y[_])try{b.push(await v[_])}catch(w){const O=w;if(O instanceof je)return{type:"redirect",location:O.location};const P=w instanceof se?w.status:500;for(;_--;)if(d[_]){let J,Y=_;for(;!b[Y];)Y-=1;try{return J={node:await d[_](),data:{},uses:{params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1}},await ne({url:p,params:g,branch:b.slice(0,Y+1).concat(J),status:P,error:O,routeId:f.id})}catch{continue}}return await re({status:P,error:O,url:p,routeId:f.id})}else b.push(void 0);return await ne({url:p,params:g,branch:b,status:200,error:null,routeId:f.id})}async function re({status:o,error:p,url:g,routeId:f}){const d={},E=await ue({node:await Ot,url:g,params:d,routeId:f,parent:()=>Promise.resolve({}),server_data:null}),h={node:await Pt,data:null,uses:{params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1}};return await ne({url:g,params:d,branch:[E,h],status:o,error:p,routeId:f})}function Ue(o){if(o.origin!==location.origin||!o.pathname.startsWith(t))return;const p=decodeURI(o.pathname.slice(t.length)||"/");for(const g of ge){const f=g.exec(p);if(f){const d=new URL(o.origin+at(o.pathname,i)+o.search+o.hash);return{id:d.pathname+d.search,route:g,params:it(f),url:d}}}}async function de({url:o,scroll:p,keepfocus:g,redirect_chain:f,details:d,accepted:E,blocked:h}){const k=c.url;let y=!1;const A={from:k,to:o,cancel:()=>y=!0};if(a.before_navigate.forEach(L=>L(A)),y){h();return}we(T),E(),l&&u.navigating.set({from:c.url,to:o}),await fe(o,f,{scroll:p,keepfocus:g,details:d},()=>{const L={from:k,to:o};a.after_navigate.forEach(S=>S(L)),u.navigating.set(null)})}function Z(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{be(()=>(a.after_navigate.push(o),()=>{const p=a.after_navigate.indexOf(o);a.after_navigate.splice(p,1)}))},before_navigate:o=>{be(()=>(a.before_navigate.push(o),()=>{const p=a.before_navigate.indexOf(o);a.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(R||!l)&&(m=!1)},goto:(o,p={})=>Ee(o,p,[]),invalidate:o=>{if(o===void 0){for(const p of c.branch)p==null||p.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:p}=new URL(o,location.href);s.push(g=>g===p)}return $||($=Promise.resolve().then(async()=>{await fe(new URL(location.href),[]),$=null})),$},prefetch:async o=>{const p=new URL(o,Ne(document));await Re(p)},prefetch_routes:async o=>{const g=(o?ge.filter(f=>o.some(d=>f.exec(d))):ge).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",f=>{let d=!1;const E={from:c.url,to:null,cancel:()=>d=!0};a.before_navigate.forEach(h=>h(E)),d?(f.preventDefault(),f.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(T);try{sessionStorage[We]=JSON.stringify(Q)}catch{}}});const o=f=>{const d=Te(f);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&Re(De(d))};let p;const g=f=>{clearTimeout(p),p=setTimeout(()=>{var d;(d=f.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",f=>{if(!G||f.button||f.which!==1||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||f.defaultPrevented)return;const d=Te(f);if(!d||!d.href)return;const E=d instanceof SVGAElement,h=De(d);if(!E&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||k.includes("external")||d.hasAttribute("sveltekit:reload")||(E?d.target.baseVal:d.target))return;const[y,A]=h.href.split("#");if(A!==void 0&&y===location.href.split("#")[0]){ce=!0,we(T),u.page.set({...le,url:h}),u.page.notify();return}de({url:h,scroll:d.hasAttribute("sveltekit:noscroll")?ye():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>f.preventDefault(),blocked:()=>f.preventDefault()})}),addEventListener("popstate",f=>{if(f.state&&G){if(f.state[W]===T)return;de({url:new URL(location.href),scroll:Q[f.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=f.state[W]},blocked:()=>{const d=T-f.state[W];history.go(d)}})}}),addEventListener("hashchange",()=>{ce&&(ce=!1,history.replaceState({...history.state,[W]:++T},"",location.href))});for(const f of document.querySelectorAll("link"))f.rel==="icon"&&(f.href=f.href);addEventListener("pageshow",f=>{f.persisted&&u.navigating.set(null)})},_hydrate:async({status:o,error:p,node_ids:g,params:f,routeId:d})=>{const E=new URL(location.href);let h;try{const k=(S,v)=>{const b=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return b!=null&&b.textContent?JSON.parse(b.textContent):v},y=k("server_data",[]),A=k("validation_errors",void 0),L=g.map(async(S,v)=>{var b;return ue({node:await ie[S](),url:E,params:f,routeId:d,parent:async()=>{const _={};for(let w=0;w<v;w+=1)Object.assign(_,(await L[w]).data);return _},server_data:(b=y[v])!=null?b:null})});h=await ne({url:E,params:f,branch:await Promise.all(L),status:o,error:p!=null&&p.__is_http_error?new se(p.status,p.message):p,validation_errors:A,routeId:d})}catch(k){const y=k;if(y instanceof je){await Z(new URL(k.location,location.href));return}h=await re({status:y instanceof se?y.status:500,error:y,url:E,routeId:d})}Le(h)}}}function jt(r){r.client}function Tt(r){}async function Dt({paths:r,target:e,session:t,route:i,spa:s,trailing_slash:u,hydrate:n}){const a=It({target:e,session:t,base:r.base,trailing_slash:u});jt({client:a}),ct(r),n&&await a._hydrate(n),i&&(s&&a.goto(location.href,{replaceState:!0}),a._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Tt as set_public_env,Dt as start};
