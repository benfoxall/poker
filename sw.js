if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build-manifest.json",revision:"2de13d77563505792bb1952f23fa1d7e"},{url:"dist/index.js",revision:"05d83480919ea2c6d8882bf875e0e666"},{url:"icons/48-round.png",revision:"b386d7b161daacb76ce55671d9148a39"},{url:"icons/512.png",revision:"f4af615cc6cf227fa98b309884f6849f"},{url:"index.css",revision:"10c7e93f202c6d50ec73d8fe01d9400a"},{url:"index.html",revision:"1883cd6515038406058767d651443e3d"},{url:"manifest.json",revision:"ac581448dd4ea08a689d4ae3cd2bddc7"}],{})}));
//# sourceMappingURL=sw.js.map