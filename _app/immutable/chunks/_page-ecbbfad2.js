const s=async({fetch:o})=>({posts:await(await o("api/posts.json")).json()}),n=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{n as _,s as l};
