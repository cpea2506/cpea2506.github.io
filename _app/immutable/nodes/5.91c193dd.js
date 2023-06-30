import{s as L,d as W,u as J,g as K,e as Q,h as fe,n as D}from"../chunks/scheduler.5e18e507.js";import{S as q,i as O,g as v,h as C,j,f as h,k as $,a as b,d as w,t as S,r as N,s as I,u as P,c as V,y as A,v as E,w as M,m as T,n as y,o as H,e as ne,p as he,b as ge,C as me,D as pe,x as B}from"../chunks/index.c51d088b.js";import{e as se}from"../chunks/each.e59479a4.js";import{p as ce}from"../chunks/stores.033dc862.js";import{I as F}from"../chunks/Icon.e653ab29.js";const _e=(o,e)=>e.stargazers_count-o.stargazers_count,$e=o=>!o.fork,de=o=>o.fork,ve=async({fetch:o})=>{let n=await(await o("https://api.github.com/users/cpea2506/repos")).json();n=n.sort(_e);const s=await(await o("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")).json();return{repos:n,languages:s}},pt=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));function Ce(o){let e,n;const t=o[1].default,s=W(t,o,o[0],null);return{c(){e=v("div"),s&&s.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var r=j(e);s&&s.l(r),r.forEach(h),this.h()},h(){$(e,"class","auto-rows-max space-y-4 sm:grid sm:grid-flow-row sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 sm:space-x-0 sm:space-y-0 md:grid-cols-3 lg:gap-x-6")},m(a,r){b(a,e,r),s&&s.m(e,null),n=!0},p(a,[r]){s&&s.p&&(!n||r&1)&&J(s,t,a,a[0],n?Q(t,a[0],r,null):K(a[0]),null)},i(a){n||(w(s,a),n=!0)},o(a){S(s,a),n=!1},d(a){a&&h(e),s&&s.d(a)}}}function be(o,e,n){let{$$slots:t={},$$scope:s}=e;return o.$$set=a=>{"$$scope"in a&&n(0,s=a.$$scope)},[s,t]}class ze extends q{constructor(e){super(),O(this,e,be,Ce,L,{})}}const we={a:{viewBox:"0 0 1024 1024"},c:'<path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>'},ke={a:{viewBox:"0 0 496 512"},c:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>'},Se={a:{viewBox:"0 0 16 16",fill:"currentColor"},c:'<path d="M14 4a2 2 0 1 0-2.47 1.94V7a.48.48 0 0 1-.27.44L8.49 8.88l-2.76-1.4A.49.49 0 0 1 5.46 7V5.94a2 2 0 1 0-1 0V7a1.51 1.51 0 0 0 .82 1.34L8 9.74v1.32a2 2 0 1 0 1 0V9.74l2.7-1.36A1.49 1.49 0 0 0 12.52 7V5.92A2 2 0 0 0 14 4zM4 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.47 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>'},Ae={a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>'},xe={a:{viewBox:"0 0 512 512"},c:'<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>'};function Ne(o){let e;return{c(){e=T(o[1])},l(n){e=y(n,o[1])},m(n,t){b(n,e,t)},p(n,t){t&2&&H(e,n[1])},d(n){n&&h(e)}}}function Pe(o){let e;return{c(){e=T(o[2])},l(n){e=y(n,o[2])},m(n,t){b(n,e,t)},p(n,t){t&4&&H(e,n[2])},d(n){n&&h(e)}}}function Ee(o){let e;return{c(){e=T(o[5])},l(n){e=y(n,o[5])},m(n,t){b(n,e,t)},p:D,d(n){n&&h(e)}}}function Me(o){let e,n;return e=new F({props:{src:xe,color:o[4],$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p(t,s){const a={};s&264&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Ie(o){let e;return{c(){e=T(o[3])},l(n){e=y(n,o[3])},m(n,t){b(n,e,t)},p(n,t){t&8&&H(e,n[3])},d(n){n&&h(e)}}}function Ve(o){let e,n,t,s,a,r,i,c,m,l,u,f;t=new F({props:{src:we,color:o[1]>0?"#ffc900":"#eceef0",$$slots:{default:[Ne]},$$scope:{ctx:o}}}),a=new F({props:{src:Se,color:"#eceef0",$$slots:{default:[Pe]},$$scope:{ctx:o}}}),i=new F({props:{src:Ae,color:"#9ca3b2",$$slots:{default:[Ee]},$$scope:{ctx:o}}});let _=o[4]&&Me(o);return u=new F({props:{src:ke,color:"#eceef0"}}),{c(){e=v("div"),n=v("div"),N(t.$$.fragment),s=I(),N(a.$$.fragment),r=I(),N(i.$$.fragment),c=I(),_&&_.c(),m=I(),l=v("a"),N(u.$$.fragment),this.h()},l(p){e=C(p,"DIV",{class:!0});var d=j(e);n=C(d,"DIV",{class:!0});var k=j(n);P(t.$$.fragment,k),s=V(k),P(a.$$.fragment,k),r=V(k),P(i.$$.fragment,k),c=V(k),_&&_.l(k),k.forEach(h),m=V(d),l=C(d,"A",{class:!0,href:!0,target:!0});var R=j(l);P(u.$$.fragment,R),R.forEach(h),d.forEach(h),this.h()},h(){$(n,"class","flex grow"),$(l,"class","flex-items-center mr-2 gap-1"),$(l,"href",o[0]),$(l,"target","_blank"),$(e,"class","m-1 flex font-medium")},m(p,d){b(p,e,d),A(e,n),E(t,n,null),A(n,s),E(a,n,null),A(n,r),E(i,n,null),A(n,c),_&&_.m(n,null),A(e,m),A(e,l),E(u,l,null),f=!0},p(p,[d]){const k={};d&2&&(k.color=p[1]>0?"#ffc900":"#eceef0"),d&258&&(k.$$scope={dirty:d,ctx:p}),t.$set(k);const R={};d&260&&(R.$$scope={dirty:d,ctx:p}),a.$set(R);const g={};d&256&&(g.$$scope={dirty:d,ctx:p}),i.$set(g),p[4]&&_.p(p,d),(!f||d&1)&&$(l,"href",p[0])},i(p){f||(w(t.$$.fragment,p),w(a.$$.fragment,p),w(i.$$.fragment,p),w(_),w(u.$$.fragment,p),f=!0)},o(p){S(t.$$.fragment,p),S(a.$$.fragment,p),S(i.$$.fragment,p),S(_),S(u.$$.fragment,p),f=!1},d(p){p&&h(e),M(t),M(a),M(i),_&&_.d(),M(u)}}}function De(o,e,n){var u;let t;fe(o,ce,f=>n(7,t=f));let{href:s}=e,{stargazersCount:a}=e,{forksCount:r}=e,{size:i}=e,{language:c}=e;const m=(u=t.data.languages[c])==null?void 0:u.color,l=i/1e3>1?`${Math.floor(i/1e3)} mb`:`${i} kb`;return o.$$set=f=>{"href"in f&&n(0,s=f.href),"stargazersCount"in f&&n(1,a=f.stargazersCount),"forksCount"in f&&n(2,r=f.forksCount),"size"in f&&n(6,i=f.size),"language"in f&&n(3,c=f.language)},[s,a,r,c,m,l,i]}class je extends q{constructor(e){super(),O(this,e,De,Ve,L,{href:0,stargazersCount:1,forksCount:2,size:6,language:3})}}function Be(o){let e,n;const t=o[3].default,s=W(t,o,o[2],null);return{c(){e=v("span"),s&&s.c(),this.h()},l(a){e=C(a,"SPAN",{class:!0});var r=j(e);s&&s.l(r),r.forEach(h),this.h()},h(){$(e,"class","font-bold tracking-wide md:text-base "+o[0])},m(a,r){b(a,e,r),s&&s.m(e,null),n=!0},p(a,[r]){s&&s.p&&(!n||r&4)&&J(s,t,a,a[2],n?Q(t,a[2],r,null):K(a[2]),null)},i(a){n||(w(s,a),n=!0)},o(a){S(s,a),n=!1},d(a){a&&h(e),s&&s.d(a)}}}function Re(o,e,n){let{$$slots:t={},$$scope:s}=e,{hover:a=!1}=e;const r=a?"text-white hover:animate-text hover:from-green hover:via-yellow hover:to-red hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent":"animate-text from-green via-yellow to-red bg-gradient-to-r bg-clip-text text-transparent";return o.$$set=i=>{"hover"in i&&n(1,a=i.hover),"$$scope"in i&&n(2,s=i.$$scope)},[r,a,s,t]}class ue extends q{constructor(e){super(),O(this,e,Re,Be,L,{hover:1})}}function Ge(o){let e;return{c(){e=T(o[1])},l(n){e=y(n,o[1])},m(n,t){b(n,e,t)},p(n,t){t&2&&H(e,n[1])},d(n){n&&h(e)}}}function oe(o){let e,n;return{c(){e=v("span"),n=T(o[4]),this.h()},l(t){e=C(t,"SPAN",{class:!0});var s=j(e);n=y(s,o[4]),s.forEach(h),this.h()},h(){$(e,"class","text-xs font-medium tracking-wide md:text-sm")},m(t,s){b(t,e,s),A(e,n)},p(t,s){s&16&&H(n,t[4])},d(t){t&&h(e)}}}function Le(o){let e,n,t,s,a,r,i,c,m,l;a=new ue({props:{hover:!0,$$slots:{default:[Ge]},$$scope:{ctx:o}}});let u=o[4]&&oe(o);return m=new je({props:{href:o[0],stargazersCount:o[2],forksCount:o[3],size:o[5],language:o[6]}}),{c(){e=v("div"),n=v("div"),t=v("div"),s=v("a"),N(a.$$.fragment),r=I(),u&&u.c(),i=I(),c=v("div"),N(m.$$.fragment),this.h()},l(f){e=C(f,"DIV",{class:!0});var _=j(e);n=C(_,"DIV",{class:!0});var p=j(n);t=C(p,"DIV",{class:!0});var d=j(t);s=C(d,"A",{href:!0});var k=j(s);P(a.$$.fragment,k),k.forEach(h),r=V(d),u&&u.l(d),d.forEach(h),p.forEach(h),i=V(_),c=C(_,"DIV",{class:!0});var R=j(c);P(m.$$.fragment,R),R.forEach(h),_.forEach(h),this.h()},h(){$(s,"href",o[0]),$(t,"class","flex flex-col gap-1"),$(n,"class","h-full rounded-t-md bg-white/10 p-2 pl-5 transition-colors hover:bg-white/20"),$(c,"class","px-2"),$(e,"class","hover:shadow-blue/25 border-blue/25 flex flex-col justify-between rounded-md border bg-white/5 shadow-lg transition-colors")},m(f,_){b(f,e,_),A(e,n),A(n,t),A(t,s),E(a,s,null),A(t,r),u&&u.m(t,null),A(e,i),A(e,c),E(m,c,null),l=!0},p(f,[_]){const p={};_&130&&(p.$$scope={dirty:_,ctx:f}),a.$set(p),(!l||_&1)&&$(s,"href",f[0]),f[4]?u?u.p(f,_):(u=oe(f),u.c(),u.m(t,null)):u&&(u.d(1),u=null);const d={};_&1&&(d.href=f[0]),_&4&&(d.stargazersCount=f[2]),_&8&&(d.forksCount=f[3]),_&32&&(d.size=f[5]),_&64&&(d.language=f[6]),m.$set(d)},i(f){l||(w(a.$$.fragment,f),w(m.$$.fragment,f),l=!0)},o(f){S(a.$$.fragment,f),S(m.$$.fragment,f),l=!1},d(f){f&&h(e),M(a),u&&u.d(),M(m)}}}function qe(o,e,n){let{href:t}=e,{name:s}=e,{stargazersCount:a}=e,{forksCount:r}=e,{description:i}=e,{size:c}=e,{language:m}=e;return o.$$set=l=>{"href"in l&&n(0,t=l.href),"name"in l&&n(1,s=l.name),"stargazersCount"in l&&n(2,a=l.stargazersCount),"forksCount"in l&&n(3,r=l.forksCount),"description"in l&&n(4,i=l.description),"size"in l&&n(5,c=l.size),"language"in l&&n(6,m=l.language)},[t,s,a,r,i,c,m]}class Oe extends q{constructor(e){super(),O(this,e,qe,Le,L,{href:0,name:1,stargazersCount:2,forksCount:3,description:4,size:5,language:6})}}function ae(o,e,n){const t=o.slice();return t[3]=e[n],t}const Te=o=>({}),re=o=>({}),ye=o=>({}),le=o=>({});function Fe(o){let e;const n=o[1].title,t=W(n,o,o[2],re);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&4)&&J(t,n,s,s[2],e?Q(n,s[2],a,Te):K(s[2]),re)},i(s){e||(w(t,s),e=!0)},o(s){S(t,s),e=!1},d(s){t&&t.d(s)}}}function ie(o){let e,n;return e=new Oe({props:{href:o[3].html_url,stargazersCount:o[3].stargazers_count,forksCount:o[3].forks_count,name:o[3].name,description:o[3].description,size:o[3].size,language:o[3].language}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},p(t,s){const a={};s&1&&(a.href=t[3].html_url),s&1&&(a.stargazersCount=t[3].stargazers_count),s&1&&(a.forksCount=t[3].forks_count),s&1&&(a.name=t[3].name),s&1&&(a.description=t[3].description),s&1&&(a.size=t[3].size),s&1&&(a.language=t[3].language),e.$set(a)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function He(o){let e,n,t=se(o[0]),s=[];for(let r=0;r<t.length;r+=1)s[r]=ie(ae(o,t,r));const a=r=>S(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ne()},l(r){for(let i=0;i<s.length;i+=1)s[i].l(r);e=ne()},m(r,i){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(r,i);b(r,e,i),n=!0},p(r,i){if(i&1){t=se(r[0]);let c;for(c=0;c<t.length;c+=1){const m=ae(r,t,c);s[c]?(s[c].p(m,i),w(s[c],1)):(s[c]=ie(m),s[c].c(),w(s[c],1),s[c].m(e.parentNode,e))}for(he(),c=t.length;c<s.length;c+=1)a(c);ge()}},i(r){if(!n){for(let i=0;i<t.length;i+=1)w(s[i]);n=!0}},o(r){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)S(s[i]);n=!1},d(r){r&&h(e),me(s,r)}}}function We(o){let e,n,t,s,a,r,i;const c=o[1].icon,m=W(c,o,o[2],le);return s=new ue({props:{$$slots:{default:[Fe]},$$scope:{ctx:o}}}),r=new ze({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){e=v("div"),n=v("div"),m&&m.c(),t=I(),N(s.$$.fragment),a=I(),N(r.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var u=j(e);n=C(u,"DIV",{class:!0});var f=j(n);m&&m.l(f),t=V(f),P(s.$$.fragment,f),f.forEach(h),a=V(u),P(r.$$.fragment,u),u.forEach(h),this.h()},h(){$(n,"class","mb-2 items-center gap-1 text-lg font-semibold"),$(e,"class","flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8")},m(l,u){b(l,e,u),A(e,n),m&&m.m(n,null),A(n,t),E(s,n,null),A(e,a),E(r,e,null),i=!0},p(l,[u]){m&&m.p&&(!i||u&4)&&J(m,c,l,l[2],i?Q(c,l[2],u,ye):K(l[2]),le);const f={};u&4&&(f.$$scope={dirty:u,ctx:l}),s.$set(f);const _={};u&5&&(_.$$scope={dirty:u,ctx:l}),r.$set(_)},i(l){i||(w(m,l),w(s.$$.fragment,l),w(r.$$.fragment,l),i=!0)},o(l){S(m,l),S(s.$$.fragment,l),S(r.$$.fragment,l),i=!1},d(l){l&&h(e),m&&m.d(l),M(s),M(r)}}}function Je(o,e,n){let{$$slots:t={},$$scope:s}=e,{repos:a}=e;return o.$$set=r=>{"repos"in r&&n(0,a=r.repos),"$$scope"in r&&n(2,s=r.$$scope)},[a,t,s]}class G extends q{constructor(e){super(),O(this,e,Je,We,L,{repos:0})}}function Ke(o){let e,n="🌛";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-14kb8dn"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function Qe(o){let e,n="Neovim";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1qr7wb7"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function Ue(o){let e,n="🎮";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1uifxow"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function Xe(o){let e,n="Games";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1r2j5he"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function Ye(o){let e,n="🧠";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-djw6rs"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function Ze(o){let e,n="Problem Solving";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1nahla"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function et(o){let e,n="🍎";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-cnfquo"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function tt(o){let e,n="Apple";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1yqo90h"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function nt(o){let e,n=".";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1992pcg"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function st(o){let e,n="dotfiles";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1maizrb"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function ot(o){let e,n="📦";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-fsa43t"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function at(o){let e,n="Others";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-gbv0wo"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function rt(o){let e,n="🙋🏼‍♂️";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1afk1ze"&&(e.textContent=n),this.h()},h(){$(e,"slot","icon")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function lt(o){let e,n="External Contributions";return{c(){e=v("span"),e.textContent=n,this.h()},l(t){e=C(t,"SPAN",{slot:!0,["data-svelte-h"]:!0}),B(e)!=="svelte-1npa0s5"&&(e.textContent=n),this.h()},h(){$(e,"slot","title")},m(t,s){b(t,e,s)},p:D,d(t){t&&h(e)}}}function it(o){let e,n,t,s,a,r,i,c,m,l,u,f,_,p,d,k,R;return s=new G({props:{repos:o[0].neovim,$$slots:{title:[Qe],icon:[Ke]},$$scope:{ctx:o}}}),r=new G({props:{repos:o[0].games,$$slots:{title:[Xe],icon:[Ue]},$$scope:{ctx:o}}}),c=new G({props:{repos:o[0].problemSolving,$$slots:{title:[Ze],icon:[Ye]},$$scope:{ctx:o}}}),l=new G({props:{repos:o[0].apple,$$slots:{title:[tt],icon:[et]},$$scope:{ctx:o}}}),f=new G({props:{repos:o[0].dotfiles,$$slots:{title:[st],icon:[nt]},$$scope:{ctx:o}}}),p=new G({props:{repos:o[0].others,$$slots:{title:[at],icon:[ot]},$$scope:{ctx:o}}}),k=new G({props:{repos:o[0].externalContributions,$$slots:{title:[lt],icon:[rt]},$$scope:{ctx:o}}}),{c(){e=v("meta"),n=I(),t=v("main"),N(s.$$.fragment),a=I(),N(r.$$.fragment),i=I(),N(c.$$.fragment),m=I(),N(l.$$.fragment),u=I(),N(f.$$.fragment),_=I(),N(p.$$.fragment),d=I(),N(k.$$.fragment),this.h()},l(g){const z=pe("svelte-13fajvk",document.head);e=C(z,"META",{name:!0,content:!0}),z.forEach(h),n=V(g),t=C(g,"MAIN",{class:!0});var x=j(t);P(s.$$.fragment,x),a=V(x),P(r.$$.fragment,x),i=V(x),P(c.$$.fragment,x),m=V(x),P(l.$$.fragment,x),u=V(x),P(f.$$.fragment,x),_=V(x),P(p.$$.fragment,x),d=V(x),P(k.$$.fragment,x),x.forEach(h),this.h()},h(){document.title="Captain's Works",$(e,"name","description"),$(e,"content","All treasures I've made"),$(t,"class","my-4 flex flex-col gap-8")},m(g,z){A(document.head,e),b(g,n,z),b(g,t,z),E(s,t,null),A(t,a),E(r,t,null),A(t,i),E(c,t,null),A(t,m),E(l,t,null),A(t,u),E(f,t,null),A(t,_),E(p,t,null),A(t,d),E(k,t,null),R=!0},p(g,[z]){const x={};z&1&&(x.repos=g[0].neovim),z&8&&(x.$$scope={dirty:z,ctx:g}),s.$set(x);const U={};z&1&&(U.repos=g[0].games),z&8&&(U.$$scope={dirty:z,ctx:g}),r.$set(U);const X={};z&1&&(X.repos=g[0].problemSolving),z&8&&(X.$$scope={dirty:z,ctx:g}),c.$set(X);const Y={};z&1&&(Y.repos=g[0].apple),z&8&&(Y.$$scope={dirty:z,ctx:g}),l.$set(Y);const Z={};z&1&&(Z.repos=g[0].dotfiles),z&8&&(Z.$$scope={dirty:z,ctx:g}),f.$set(Z);const ee={};z&1&&(ee.repos=g[0].others),z&8&&(ee.$$scope={dirty:z,ctx:g}),p.$set(ee);const te={};z&1&&(te.repos=g[0].externalContributions),z&8&&(te.$$scope={dirty:z,ctx:g}),k.$set(te)},i(g){R||(w(s.$$.fragment,g),w(r.$$.fragment,g),w(c.$$.fragment,g),w(l.$$.fragment,g),w(f.$$.fragment,g),w(p.$$.fragment,g),w(k.$$.fragment,g),R=!0)},o(g){S(s.$$.fragment,g),S(r.$$.fragment,g),S(c.$$.fragment,g),S(l.$$.fragment,g),S(f.$$.fragment,g),S(p.$$.fragment,g),S(k.$$.fragment,g),R=!1},d(g){g&&(h(n),h(t)),h(e),M(s),M(r),M(c),M(l),M(f),M(p),M(k)}}}function ft(o,e,n){let t;fe(o,ce,r=>n(1,t=r));const s=t.data.repos,a={games:[],apple:[],dotfiles:[],neovim:[],problemSolving:[],externalContributions:[],others:[]};return s.filter($e).forEach(r=>{const i=c=>r.topics.includes(c);switch(!0){case i("apple"):a.apple.push(r);break;case i("game"):a.games.push(r);break;case i("neovim"):a.neovim.push(r);break;case i("dotfiles"):a.dotfiles.push(r);break;case i("problem-solving"):a.problemSolving.push(r);break;default:a.others.push(r);break}n(0,a.externalContributions=s.filter(de),a)}),[a]}class _t extends q{constructor(e){super(),O(this,e,ft,it,L,{})}}export{_t as component,pt as universal};
