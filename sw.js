if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,o)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=o(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"__snowpack__/env.js",revision:"303f8e8516cdfb0a447e7a9dc7c57a3b"},{url:"dist/App.js",revision:"ffc75d23b67a9cc00b7c5679243be49e"},{url:"dist/index.js",revision:"9392af53cdd5021eac99007db5a6e613"},{url:"icons/48-round.png",revision:"b386d7b161daacb76ce55671d9148a39"},{url:"icons/512.png",revision:"f4af615cc6cf227fa98b309884f6849f"},{url:"index.css",revision:"9ce1c8ac2b50f023d1c44b88709fe409"},{url:"index.html",revision:"e154db8040cbd018fb1b4fe43e629306"},{url:"manifest.json",revision:"8858eb3184a80854e01f13533b5c0a5a"},{url:"web_modules/common/index-e66f0a38.js",revision:"ee270837be8919fda4983b1daa884888"},{url:"web_modules/framer-motion.js",revision:"c8f974b5107812382d5777d9e0f0b037"},{url:"web_modules/import-map.json",revision:"b2901021c8c271f5fa4ac7ddccaf7e2f"},{url:"web_modules/react-dom.js",revision:"048dfd07c3966f28523e43e149ff2445"},{url:"web_modules/react.js",revision:"3e775787c89d4f33d80e8de064026612"}],{})}));
//# sourceMappingURL=sw.js.map
