if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,r,f)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(r.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=f(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-a04dde82"],(function(e){"use strict";e.setCacheNameDetails({prefix:"winner-picker"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"07011243.mp3",revision:"59cc751b1a2135c5f1793051ba13e4bb"},{url:"css/2.02b91852.css",revision:"67d394f4ed23383110203dc287773465"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.9adba964.css",revision:"dc945a194a2a75cfb2ee19049b73ff75"},{url:"curtain.png",revision:"27ccbca4acbfe2e73ca25c846262ad54"},{url:"drumrol.mp3",revision:"8ad421addd4e15dae0fa5e322202154a"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"e835b57857bd1a988369e2be1cd59bdd"},{url:"js/2.67edb537.js",revision:"ffd6039175c2bab7008eb7f863bf6d03"},{url:"js/3.d4ab4fcc.js",revision:"1e9e873c8fec4462aed927592e5cc16d"},{url:"js/4.a34be829.js",revision:"2fa7b3ccfab2847a8d724439de4afc21"},{url:"js/app.afabe259.js",revision:"5383fcc9cee9951ceba4a2e7606def53"},{url:"js/vendor.3492b315.js",revision:"fe11de41182c695d5bf77ea06673bc32"},{url:"manifest.json",revision:"e3e994c1f232271422b67ec34981346e"},{url:"stage.jpg",revision:"82e13e531f09fc1e9ffe533b3d4ad9f3"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
