import{s as z,n as M,i as N}from"../chunks/scheduler.5e18e507.js";import{S as H,i as L,g,m as E,s as k,h as b,j as v,n as w,f as p,c as A,k as _,a as S,y as f,o as P,C as R,d as C,b as D,t as x,B as F,r as G,u as J,v as K,w as Q,p as U}from"../chunks/index.01bba6b4.js";import{e as T}from"../chunks/each.e59479a4.js";import{g as V,a as W}from"../chunks/spread.8a54911c.js";const X=async({fetch:l})=>({posts:await(await l("/api/posts.json")).json()}),ne=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));function Y(l){let t,a,o,i,s,e,u,r,c,n,h;return{c(){t=g("a"),a=g("article"),o=g("h1"),i=E(l[3]),s=k(),e=g("p"),u=E(l[2]),r=k(),c=g("p"),n=E("Created: "),h=E(l[1]),this.h()},l(m){t=b(m,"A",{href:!0,class:!0});var d=v(t);a=b(d,"ARTICLE",{class:!0});var y=v(a);o=b(y,"H1",{class:!0});var B=v(o);i=w(B,l[3]),B.forEach(p),s=A(y),e=b(y,"P",{class:!0});var I=v(e);u=w(I,l[2]),I.forEach(p),r=A(y),c=b(y,"P",{class:!0});var j=v(c);n=w(j,"Created: "),h=w(j,l[1]),j.forEach(p),y.forEach(p),d.forEach(p),this.h()},h(){_(o,"class","mb-2"),_(e,"class","text-gray mb-2"),_(c,"class","text-green"),_(a,"class","post-card-border p-4"),_(t,"href",l[0]),_(t,"class","text-yellow/[.85] hover:text-yellow")},m(m,d){S(m,t,d),f(t,a),f(a,o),f(o,i),f(a,s),f(a,e),f(e,u),f(a,r),f(a,c),f(c,n),f(c,h)},p(m,[d]){d&8&&P(i,m[3]),d&4&&P(u,m[2]),d&2&&P(h,m[1]),d&1&&_(t,"href",m[0])},i:M,o:M,d(m){m&&p(t)}}}function Z(l,t,a){let o,i,s,{meta:e}=t,{path:u}=t;return l.$$set=r=>{"meta"in r&&a(4,e=r.meta),"path"in r&&a(0,u=r.path)},l.$$.update=()=>{l.$$.dirty&16&&a(3,{title:o,description:i,date:s}=e,o,(a(2,i),a(4,e)),(a(1,s),a(4,e)))},[u,s,i,o,e]}class $ extends H{constructor(t){super(),L(this,t,Z,Y,z,{meta:4,path:0})}}function O(l,t,a){const o=l.slice();return o[2]=t[a],o}function q(l){let t,a;const o=[l[2]];let i={};for(let s=0;s<o.length;s+=1)i=N(i,o[s]);return t=new $({props:i}),{c(){G(t.$$.fragment)},l(s){J(t.$$.fragment,s)},m(s,e){K(t,s,e),a=!0},p(s,e){const u=e&1?V(o,[W(s[2])]):{};t.$set(u)},i(s){a||(C(t.$$.fragment,s),a=!0)},o(s){x(t.$$.fragment,s),a=!1},d(s){Q(t,s)}}}function ee(l){let t,a,o,i,s=T(l[0]),e=[];for(let r=0;r<s.length;r+=1)e[r]=q(O(l,s,r));const u=r=>x(e[r],1,1,()=>{e[r]=null});return{c(){t=g("meta"),a=k(),o=g("main");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){const c=R("svelte-1mgx265",document.head);t=b(c,"META",{name:!0,content:!0}),c.forEach(p),a=A(r),o=b(r,"MAIN",{class:!0});var n=v(o);for(let h=0;h<e.length;h+=1)e[h].l(n);n.forEach(p),this.h()},h(){document.title="Captain's Blog Posts",_(t,"name","description"),_(t,"content","All treasures I've collected"),_(o,"class","px-[4vw]")},m(r,c){f(document.head,t),S(r,a,c),S(r,o,c);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(o,null);i=!0},p(r,[c]){if(c&1){s=T(r[0]);let n;for(n=0;n<s.length;n+=1){const h=O(r,s,n);e[n]?(e[n].p(h,c),C(e[n],1)):(e[n]=q(h),e[n].c(),C(e[n],1),e[n].m(o,null))}for(U(),n=s.length;n<e.length;n+=1)u(n);D()}},i(r){if(!i){for(let c=0;c<s.length;c+=1)C(e[c]);i=!0}},o(r){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)x(e[c]);i=!1},d(r){r&&(p(a),p(o)),p(t),F(e,r)}}}function te(l,t,a){let o,{data:i}=t;return l.$$set=s=>{"data"in s&&a(1,i=s.data)},l.$$.update=()=>{l.$$.dirty&2&&a(0,{posts:o}=i,o)},[o,i]}class le extends H{constructor(t){super(),L(this,t,te,ee,z,{data:1})}}export{le as component,ne as universal};