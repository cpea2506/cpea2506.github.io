import{s as z,n as w,d as L,c as V,k as q}from"../chunks/scheduler.1ff1837f.js";import{S as D,i as j,g as v,h as _,A as O,k as i,a as B,f as x,s as k,r as F,j as E,c as y,u as P,B as f,v as J,d as b,b as Q,t as R,F as W,w as K,p as X}from"../chunks/index.86ab406b.js";import{e as H}from"../chunks/each.e59479a4.js";function Y(a){let e,t='<div class="wave waving-left opacity-100 bottom-0 z-50 svelte-1r7kybd"></div> <div class="wave waving-right opacity-50 bottom-[10px] z-40 svelte-1r7kybd"></div> <div class="wave waving-left opacity-20 bottom-[15px] z-30 svelte-1r7kybd"></div> <div class="wave wving-right opacity-70 bottom-5 z-40 svelte-1r7kybd"></div>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(s){e=_(s,"DIV",{class:!0,["data-svelte-h"]:!0}),O(e)!=="svelte-1rrzzw"&&(e.innerHTML=t),this.h()},h(){i(e,"class","relative w-full")},m(s,c){B(s,e,c)},p:w,i:w,o:w,d(s){s&&x(e)}}}class Z extends D{constructor(e){super(),j(this,e,null,Y,z,{})}}function $(a){let e,t,s;return{c(){e=v("img"),this.h()},l(c){e=_(c,"IMG",{class:!0,width:!0,height:!0,alt:!0,src:!0}),this.h()},h(){i(e,"class",t=a[2].class+" shadow-[0_0_15px] shadow-white rounded-full max-w-full h-auto transition hover:scale-125"),i(e,"width","64"),i(e,"height","64"),i(e,"alt",a[1]),L(e.src,s=a[0])||i(e,"src",s)},m(c,u){B(c,e,u)},p(c,[u]){u&4&&t!==(t=c[2].class+" shadow-[0_0_15px] shadow-white rounded-full max-w-full h-auto transition hover:scale-125")&&i(e,"class",t),u&2&&i(e,"alt",c[1]),u&1&&!L(e.src,s=c[0])&&i(e,"src",s)},i:w,o:w,d(c){c&&x(e)}}}function ee(a,e,t){let{src:s}=e,{alt:c}=e;return a.$$set=u=>{t(2,e=V(V({},e),q(u))),"src"in u&&t(0,s=u.src),"alt"in u&&t(1,c=u.alt)},e=q(e),[s,c,e]}class te extends D{constructor(e){super(),j(this,e,ee,$,z,{src:0,alt:1})}}const se=""+new URL("../assets/stars.8e95643e.jpg",import.meta.url).href,ae=""+new URL("../assets/island.96e930a8.png",import.meta.url).href,le=""+new URL("../assets/rust.7387ab07.png",import.meta.url).href,re=""+new URL("../assets/swift.d423acc4.png",import.meta.url).href,ne=""+new URL("../assets/lua.f10eedf5.png",import.meta.url).href,oe=""+new URL("../assets/csharp.6c9be8a3.png",import.meta.url).href,ce=""+new URL("../assets/svelte.cb10df9a.png",import.meta.url).href,ie=""+new URL("../assets/shell.6bbf71a3.png",import.meta.url).href;function T(a,e,t){const s=a.slice();return s[1]=e[t].src,s[2]=e[t].alt,s}function A(a){let e,t;return e=new te({props:{alt:a[2],src:a[1]}}),{c(){F(e.$$.fragment)},l(s){P(e.$$.fragment,s)},m(s,c){J(e,s,c),t=!0},p:w,i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){R(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function ue(a){let e,t,s,c,u,C,I,h,M,m,G,U,g,S,d=H(a[0]),r=[];for(let l=0;l<d.length;l+=1)r[l]=A(T(a,d,l));const N=l=>R(r[l],1,1,()=>{r[l]=null});return g=new Z({}),{c(){e=v("div"),t=v("img"),c=k(),u=v("img"),I=k(),h=v("div");for(let l=0;l<r.length;l+=1)r[l].c();M=k(),m=v("img"),U=k(),F(g.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=E(e);t=_(n,"IMG",{src:!0,alt:!0,class:!0}),c=y(n),u=_(n,"IMG",{alt:!0,class:!0,src:!0}),I=y(n),h=_(n,"DIV",{class:!0});var o=E(h);for(let p=0;p<r.length;p+=1)r[p].l(o);o.forEach(x),M=y(n),m=_(n,"IMG",{src:!0,alt:!0,class:!0}),U=y(n),P(g.$$.fragment,n),n.forEach(x),this.h()},h(){L(t.src,s=se)||i(t,"src",s),i(t,"alt","stars"),i(t,"class","absolute bottom-0 left-0 w-screen h-screen pointer-events-none mix-blend-screen"),i(u,"alt","avatar"),i(u,"class","w-52 rounded-full absolute bottom-[73vh] translate-y-1/2 shadow-[0_0_25px] shadow-yellow-100"),L(u.src,C="https://github.com/cpea2506.png")||i(u,"src",C),i(h,"class","absolute bottom-[16vh] z-10 flex-center gap-2 md:gap-6"),L(m.src,G=ae)||i(m,"src",G),i(m,"alt","island"),i(m,"class","absolute left-1/2 -translate-x-1/2 w-[800px] pointer-events-none bottom-0"),i(e,"class","relative flex flex-col justify-end items-center h-screen-content")},m(l,n){B(l,e,n),f(e,t),f(e,c),f(e,u),f(e,I),f(e,h);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(h,null);f(e,M),f(e,m),f(e,U),J(g,e,null),S=!0},p(l,[n]){if(n&1){d=H(l[0]);let o;for(o=0;o<d.length;o+=1){const p=T(l,d,o);r[o]?(r[o].p(p,n),b(r[o],1)):(r[o]=A(p),r[o].c(),b(r[o],1),r[o].m(h,null))}for(X(),o=d.length;o<r.length;o+=1)N(o);Q()}},i(l){if(!S){for(let n=0;n<d.length;n+=1)b(r[n]);b(g.$$.fragment,l),S=!0}},o(l){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)R(r[n]);R(g.$$.fragment,l),S=!1},d(l){l&&x(e),W(r,l),K(g)}}}function fe(a){for(let e=a.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a}function he(a){return[fe([{alt:"Rust",src:le},{alt:"Swift",src:re},{alt:"Lua",src:ne},{alt:"Csharp",src:oe},{alt:"Svelte",src:ce},{alt:"Shell",src:ie}])]}class ve extends D{constructor(e){super(),j(this,e,he,ue,z,{})}}export{ve as component};
