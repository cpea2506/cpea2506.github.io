"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[918],{8043:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(7294),l=n(6010),r=n(1944),s=n(7524),i=n(5281),o=n(3117),c=n(5999),d=n(2244);function m(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d.Z,(0,o.Z)({},t,{subLabel:a.createElement(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d.Z,(0,o.Z)({},n,{subLabel:a.createElement(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=n(2263),v=n(9960),b=n(143),p=n(373),h=n(4477);const f={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=f[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(v.Z,{to:n,onClick:l},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,u.Z)(),{pluginId:s}=(0,b.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,p.J)(s),{latestDocSuggestion:c,latestVersionSuggestion:d}=(0,b.Jo)(s),m=null!=c?c:(v=d).docs.find((e=>e.id===v.mainDocId));var v;return a.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:d.label,to:m.path,onClick:()=>o(d.name)})))}function N(e){let{className:t}=e;const n=(0,h.E)();return n.banner?a.createElement(L,{className:t,versionMetadata:n}):null}function Z(e){let{className:t}=e;const n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return a.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function C(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:i.k.common.lastUpdated},a.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var T=n(6114),x=n(1526),H="lastUpdated_vbeJ";function U(e){return a.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(x.Z,e)))}function y(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return a.createElement("div",{className:(0,l.Z)(i.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(T.Z,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",H)},(n||r)&&a.createElement(C,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function A(e){const{content:t}=e,{metadata:n}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:c,tags:d}=n,m=d.length>0,u=!!(r||s||c);return m||u?a.createElement("footer",{className:(0,l.Z)(i.k.docs.docFooter,"docusaurus-mt-lg")},m&&a.createElement(U,{tags:d}),u&&a.createElement(y,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:c,formattedLastUpdatedAt:o})):null}var w=n(9407),I=n(6043),M=n(3743),B="tocCollapsibleButton_TO0P",O="tocCollapsibleButtonExpanded_MG3E";function V(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,o.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",B,!t&&O,n.className)}),a.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var S="tocCollapsible_ETCw",P="tocCollapsibleContent_vkbj",D="tocCollapsibleExpanded_sAul";function R(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,I.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(S,!i&&D,n)},a.createElement(V,{collapsed:i,onClick:o}),a.createElement(I.z,{lazy:!0,className:P,collapsed:i},a.createElement(M.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var z=n(2503),q=n(2802),F=n(8596),j=n(4996);function G(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var J={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Q(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(v.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function X(e){let{children:t,active:n,index:r,addMicrodata:s}=e;return a.createElement("li",(0,o.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Y(){const e=(0,j.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(v.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",J.breadcrumbsItemLink),href:e},a.createElement(G,{className:J.breadcrumbHomeIcon})))}function K(){const e=(0,q.s1)(),t=(0,F.Ns)();return e?a.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,J.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Y,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(X,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(Q,{href:t.href,isLast:l},t.label))})))):null}var W=n(3230),$="docItemContainer_Adtb",ee="docItemCol_GujU",te="tocMobile_aoJ5";function ne(e){var t;const{content:n}=e,{metadata:l,frontMatter:s,assets:i}=n,{keywords:o}=s,{description:c,title:d}=l,m=null!=(t=i.image)?t:s.image;return a.createElement(r.d,{title:d,description:c,keywords:o,image:m})}function ae(e){const{content:t}=e,{metadata:n,frontMatter:r}=t,{hide_title:o,hide_table_of_contents:c,toc_min_heading_level:d,toc_max_heading_level:u}=r,{title:v}=n,b=!o&&void 0===t.contentTitle,p=(0,s.i)(),h=!c&&t.toc&&t.toc.length>0,f=h&&("desktop"===p||"ssr"===p);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.Z)("col",!c&&ee)},a.createElement(N,null),a.createElement("div",{className:$},a.createElement("article",null,a.createElement(K,null),a.createElement(Z,null),h&&a.createElement(R,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,l.Z)(i.k.docs.docTocMobile,te)}),a.createElement("div",{className:(0,l.Z)(i.k.docs.docMarkdown,"markdown")},b&&a.createElement("header",null,a.createElement(z.Z,{as:"h1"},v)),a.createElement(W.Z,null,a.createElement(t,null))),a.createElement(A,e)),a.createElement(m,{previous:n.previous,next:n.next}))),f&&a.createElement("div",{className:"col col--3"},a.createElement(w.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:i.k.docs.docTocDesktop})))}function le(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(r.FG,{className:t},a.createElement(ne,e),a.createElement(ae,e))}},6114:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),l=n(5999),r=n(5281),s=n(3117),i=n(6010),o="iconEdit_eYIM";function c(e){let{className:t,...n}=e;return a.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(c,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(6010),r=n(9960);function s(e){const{permalink:t,title:n,subLabel:s,isNext:i}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&a.createElement("div",{className:"pagination-nav__sublabel"},s),a.createElement("div",{className:"pagination-nav__label"},n))}},9407:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(3117),l=n(7294),r=n(6010),s=n(3743),i="tableOfContents_bqdL";function o(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3117),l=n(7294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}var i=n(6668);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>o(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=c(i,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var v=l.memo(u);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const p=(0,i.L)(),h=null!=d?d:p.tableOfContents.minHeadingLevel,f=null!=u?u:p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:f}}),[o,c,h,f])),l.createElement(v,(0,a.Z)({toc:g,className:n,linkClassName:o},b))}},1526:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(6010),r=n(5999),s=n(3008),i="tags_jXut",o="tag_QGVx";function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:o},a.createElement(s.Z,{label:t,permalink:n}))}))))}},4477:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return s}});var a=n(7294),l=n(902);const r=a.createContext(null);function s(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);