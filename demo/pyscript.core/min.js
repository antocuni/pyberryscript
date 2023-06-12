const e=(e,t=document)=>[...t.querySelectorAll(e)],t=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const n=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return n(new r[e](t),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new r[a](i),o)};return s})(new Map,e)(0),s="",{toString:o}={},{keys:a}=Object,i=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=o.call(e).slice(8,-1);switch(r){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},c=([e,t])=>0===e&&("function"===t||"symbol"===t),u=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[u,l]=i(n);switch(u){case 0:{let t=n;switch(l){case"bigint":u=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);t=null;break;case"undefined":return s([-1],n)}return s([u,t],n)}case 1:{if(l)return s([l,[...n]],n);const e=[],t=s([u,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(l)switch(l){case"BigInt":return s([l,n.toString()],n);case"Boolean":case"Number":case"String":return s([l,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([u,r],n);for(const t of a(n))!e&&c(i(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([u,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([u,{source:e,flags:t}],n)}case 5:{const t=[],r=s([u,t],n);for(const[r,s]of n)(e||!c(i(r))&&!c(i(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([u,t],n);for(const r of n)!e&&c(i(r))||t.push(o(r));return r}}const{message:f}=n;return s([u,{name:l,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:l,stringify:f}=JSON,p={json:!0,lossy:!0};var h=Object.freeze({__proto__:null,parse:e=>n(l(e)),stringify:e=>f(u(e,p))});
/*! (c) Andrea Giammarchi - ISC */const d="a6752de4-137c-4476-9bf6-53391389a8ac",{Atomics:w,Int32Array:g,Map:y,SharedArrayBuffer:m,Uint16Array:v}=globalThis,{BYTES_PER_ELEMENT:b}=g,{BYTES_PER_ELEMENT:k}=v,{load:E,notify:j,store:A,wait:S}=w,{isArray:$}=Array,{fromCharCode:_}=String,P=new WeakSet,x=new WeakMap;let M=0;const W=(e,{parse:t,stringify:r}=JSON)=>{if(!x.has(e)){const n=(t,...r)=>e.postMessage({[d]:r},{transfer:t});x.set(e,new Proxy(new y,{get:(e,r)=>"then"===r?null:(...e)=>{const s=M++;let o=new m(b),a=new g(o),i=[];P.has(e.at(-1)||i)&&P.delete(i=e.pop()),n(i,s,o,r,e),S(a,0);const c=E(a,0),u=k*c;o=new m(u+u%b),a=new g(o),n([],s,o),S(a,0);let l="";for(let e=new v(o),t=0;t<c;t++)l+=_(E(e,t));return t(l)},set(t,n,s){if(!t.size){const n=new y;e.addEventListener("message",(async({data:e})=>{const s=e?.[d];if($(s)){const[e,o,...a]=s,i=new g(o);if(a.length){const[s,o]=a;if(!t.has(s))throw new Error(`Unsupported action: ${s}`);{const a=r(await t.get(s)(...o));n.set(e,a),A(i,0,a.length)}}else{const t=n.get(e);n.delete(e);for(let e=new v(o),r=0;r<t.length;r++)e[r]=t.charCodeAt(r)}j(i,0)}}))}return!!t.set(n,s)}}))}return x.get(e)},O=e=>W(e,h);O.transfer=W.transfer=(...e)=>(P.add(e),e);const{isArray:T}=Array,{assign:F,create:R,defineProperties:B,defineProperty:N}=Object,{all:L,resolve:C}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),I=(e,t=location.href)=>new URL(e,t).href,J=e=>e.arrayBuffer(),U=e=>e.json(),q=e=>e.text();var z=(...e)=>function(t,r){const n=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[u,l]=o(n);switch(u){case 0:{let t=n;switch(l){case"bigint":u=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);t=null;break;case"undefined":return i([-1],n)}return i([u,t],n)}case 1:{if(l)return i([l,[...n]],n);const e=[],t=i([u,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(l)switch(l){case"BigInt":return i([l,n.toString()],n);case"Boolean":case"Number":case"String":return i([l,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([u,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([u,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([u,{source:e,flags:t}],n)}case 5:{const t=[],r=i([u,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([u,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([u,{name:l,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:u}=JSON,l={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>u(i(e,l))});\n/*! (c) Andrea Giammarchi - ISC */const p="a6752de4-137c-4476-9bf6-53391389a8ac",{Atomics:h,Int32Array:d,Map:w,SharedArrayBuffer:g,Uint16Array:y}=globalThis,{BYTES_PER_ELEMENT:m}=d,{BYTES_PER_ELEMENT:b}=y,{load:v,notify:j,store:k,wait:A}=h,{isArray:E}=Array,{fromCharCode:S}=String,$=new WeakSet,P=new WeakMap;let _=0;const x=(e,{parse:t,stringify:r}=JSON)=>{if(!P.has(e)){const n=(t,...r)=>e.postMessage({[p]:r},{transfer:t});P.set(e,new Proxy(new w,{get:(e,r)=>"then"===r?null:(...e)=>{const s=_++;let o=new g(m),a=new d(o),i=[];$.has(e.at(-1)||i)&&$.delete(i=e.pop()),n(i,s,o,r,e),A(a,0);const c=v(a,0),u=b*c;o=new g(u+u%m),a=new d(o),n([],s,o),A(a,0);let l="";for(let e=new y(o),t=0;t<c;t++)l+=S(v(e,t));return t(l)},set(t,n,s){if(!t.size){const n=new w;e.addEventListener("message",(async({data:e})=>{const s=e?.[p];if(E(s)){const[e,o,...a]=s,i=new d(o);if(a.length){const[s,o]=a;if(!t.has(s))throw new Error(`Unsupported action: ${s}`);{const a=r(await t.get(s)(...o));n.set(e,a),k(i,0,a.length)}}else{const t=n.get(e);n.delete(e);for(let e=new y(o),r=0;r<t.length;r++)e[r]=t.charCodeAt(r)}j(i,0)}}))}return!!t.set(n,s)}}))}return P.get(e)},M=e=>x(e,f);M.transfer=x.transfer=(...e)=>($.add(e),e);const W=e=>e.arrayBuffer(),O=e=>e.json(),F=e=>e.text(),{isArray:T}=Array,{assign:B,create:R,defineProperties:I,defineProperty:L}=Object,{all:N,resolve:J}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),U=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const{withResolvers:z}=Promise;L(globalThis,"Promise",{configurable:!0,value:class extends Promise{withResolvers(){return z.call(this)}}});const C=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),D=new WeakMap,q=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return D.set(t,r),t}}},Y=e=>{const t=e.split("/");return t.pop(),t.join("/")},V=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},G=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},H=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},K=new WeakMap,Q=(e,t,r)=>N((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(T(n))return n.map((r=>({url:H([e,r]),path:H([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:H([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(U(t,K.get(e))))(r,n).then(W).then((r=>e.writeFile(t,s,r)))))),X=(e,t)=>e.runPython(C(t)),Z=(e,t)=>e.runPythonAsync(C(t));function ee(e,t,r){return t=`import js;event=js.__events.get(${r});${t}`,this.run(e,t)}const te=e=>function(t,r,n){return r=`from js import xworker;${r}`,globalThis.xworker=n,this[e](t,r)},re=te("run"),ne=te("runAsync"),se=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var oe={type:["micropython","mpy"],module:()=>"http://localhost:8080/micropython/micropython.mjs",async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=q();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Q(this,a,t.fetch),a},run:X,runAsync:Z,runEvent:ee,runWorker:re,runWorkerAsync:ne,writeFile:se};var ae={type:["pyodide","py"],module:(e="0.22.1")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t){const{stderr:r,stdout:n,get:s}=q(),o=await s(e({stderr:r,stdout:n}));if(t.fetch&&await Q(this,o,t.fetch),t.packages){await o.loadPackage("micropip");const e=await o.pyimport("micropip");await e.install(t.packages),e.destroy()}return o},run:X,runAsync:Z,runEvent:ee,runWorker:re,runWorkerAsync:ne,writeFile:se};const ie="ruby",ce=e=>function(t,r,n){return globalThis.xworker=n,this[e](t,`require "js";xworker=JS::eval("return xworker");${r}`)};var ue={experimental:!0,type:[ie,"rb"],module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Q(this,o,t.fetch),o},run:(e,t)=>e.eval(C(t)),runAsync:(e,t)=>e.evalAsync(C(t)),runEvent(e,t,r){return this.run(e,`require "js";event=JS::eval("return __events.get(${r})");${t}`)},runWorker:ce("run"),runWorkerAsync:ce("runAsync"),writeFile:()=>{throw new Error(`writeFile is not supported in ${ie}`)}};const le=e=>function(t,r,n){return t.global.set("xworker",n),this[e](t,r)};var fe={type:["wasmoon","lua"],module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=q(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Q(this,a,r.fetch),a},run:(e,t)=>e.doStringSync(C(t)),runAsync:(e,t)=>e.doString(C(t)),runEvent(e,t,r){return e.global.set("event",globalThis.__events.get(r)),this.run(e,t)},runWorker:le("run"),runWorkerAsync:le("runAsync"),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=G(e,t),V(e,Y(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const pe=new Map,he=new Map,de=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=pe.get(r),o=/^https?:\\/\\//i.test(n)?n[0]:s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{he.set(t,e);const a=e?.fetch;return a&&K.set(a,o),s(n,e,r)}))}}),we=e=>{for(const t of[].concat(e.type))pe.set(t,e)};for(const e of[oe,ae,ue,fe])we(e);const ge=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);let ye,me,be;const ve=(e,t)=>{addEventListener(e,t||(async t=>{const r=await ye;be=t,me(r,`xworker.on${e}(xworker.event);`,je)}),!!t&&{once:!0})},je={sync:M(self),onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self),get event(){const e=be;if(!e)throw new Error("Unauthorized event access");return be=void 0,e}};ve("message",(({data:{options:e,code:t}})=>{ye=(async()=>{const{type:r,version:n,config:s,async:o}=e,a=await((e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(O);else if(t.endsWith(".toml"))r=fetch(t).then(F).then(ge);else{try{r=JSON.parse(t)}catch(e){r=ge(t)}t=U("./config.txt")}return J(r).then((r=>de[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(r,n),s),i=pe.get(r);return me=i["runWorker"+(o?"Async":"")].bind(i),me(a,t,je),a})(),ve("error"),ve("message"),ve("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:s}=n;if(e.length){const[t,n]=e;(r=F({},r||{type:t,version:n})).type||(r.type=t)}r?.config&&(r.config=I(r.config));const o=fetch(t).then(q).then((e=>s.call(n,{options:r,code:e})));return B(n,{postMessage:{value:(e,...t)=>o.then((()=>s.call(n,e,...t)))},sync:{value:O(n)}})};Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const{withResolvers:D}=Promise;N(globalThis,"Promise",{configurable:!0,value:class extends Promise{withResolvers(){return D.call(this)}}});const X=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),Y=new WeakMap,H=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Y.set(t,r),t}}},Q=e=>{const t=e.split("/");return t.pop(),t.join("/")},V=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},G=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},K=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},Z=new WeakMap,ee=(e,t,r)=>L((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(T(n))return n.map((r=>({url:K([e,r]),path:K([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:K([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(I(t,Z.get(e))))(r,n).then(J).then((r=>e.writeFile(t,s,r)))))),te=(e,t)=>e.runPython(X(t)),re=(e,t)=>e.runPythonAsync(X(t));function ne(e,t,r){return t=`import js;event=js.__events.get(${r});${t}`,this.run(e,t)}const se=e=>function(t,r,n){return r=`from js import xworker;${r}`,globalThis.xworker=n,this[e](t,r)},oe=se("run"),ae=se("runAsync"),ie=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var ce={type:["micropython","mpy"],module:()=>"http://localhost:8080/micropython/micropython.mjs",async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=H();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await ee(this,a,t.fetch),a},run:te,runAsync:re,runEvent:ne,runWorker:oe,runWorkerAsync:ae,writeFile:ie};var ue={type:["pyodide","py"],module:(e="0.22.1")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t){const{stderr:r,stdout:n,get:s}=H(),o=await s(e({stderr:r,stdout:n}));if(t.fetch&&await ee(this,o,t.fetch),t.packages){await o.loadPackage("micropip");const e=await o.pyimport("micropip");await e.install(t.packages),e.destroy()}return o},run:te,runAsync:re,runEvent:ne,runWorker:oe,runWorkerAsync:ae,writeFile:ie};const le="ruby",fe=e=>function(t,r,n){return globalThis.xworker=n,this[e](t,`require "js";xworker=JS::eval("return xworker");${r}`)};var pe={experimental:!0,type:[le,"rb"],module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await ee(this,o,t.fetch),o},run:(e,t)=>e.eval(X(t)),runAsync:(e,t)=>e.evalAsync(X(t)),runEvent(e,t,r){return this.run(e,`require "js";event=JS::eval("return __events.get(${r})");${t}`)},runWorker:fe("run"),runWorkerAsync:fe("runAsync"),writeFile:()=>{throw new Error(`writeFile is not supported in ${le}`)}};const he=e=>function(t,r,n){return t.global.set("xworker",n),this[e](t,r)};var de={type:["wasmoon","lua"],module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=H(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await ee(this,a,r.fetch),a},run:(e,t)=>e.doStringSync(X(t)),runAsync:(e,t)=>e.doString(X(t)),runEvent(e,t,r){return e.global.set("event",globalThis.__events.get(r)),this.run(e,t)},runWorker:he("run"),runWorkerAsync:he("runAsync"),writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=G(e,t),V(e,Q(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const we=new Map,ge=new Map,ye=[],me=[],ve=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=we.get(r),o=/^https?:\/\//i.test(n)?n[0]:s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ge.set(t,e);const a=e?.fetch;return a&&Z.set(a,o),s(n,e,r)}))}}),be=e=>{for(const t of[].concat(e.type))we.set(t,e),ye.push(`script[type="${t}"]`),me.push(`${t}-`)};for(const e of[ce,ue,pe,de])be(e);const ke=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),Ee=(e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(U);else if(t.endsWith(".toml"))r=fetch(t).then(q).then(ke);else{try{r=JSON.parse(t)}catch(e){r=ke(t)}t=I("./config.txt")}return C(r).then((r=>ve[e](r,t)))},je=(e,t="")=>`${e}@${t}`.replace(/@$/,""),Ae=(e,t)=>{const r=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(e);return r.getElementById(t)||((e,t=document)=>t.querySelector(e))(t,r)},Se=new WeakMap,$e={get(){let e=Se.get(this);return e||(e=document.createElement(`${this.type}-script`),Se.set(this,e),We(this)),e},set(e){"string"==typeof e?Se.set(this,Ae(this,e)):(Se.set(this,e),We(this))}},_e=new WeakMap,Pe=new Map,xe=(e,t)=>{const r=e?.value;return r?t+r:""},Me=(e,t,r,n,s)=>{if(!Pe.has(t)){const o={runtime:Ee(r,s),queue:C(),XWorker:z(e,n)};Pe.set(t,o),Pe.has(e)||Pe.set(e,o)}return Pe.get(t)},We=async e=>{if(_e.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,u=je(i,c),l=xe(s,"");let f=xe(r,"|");const p=xe(n,"")||`${u}${f}`;f=f.slice(1),f&&(f=I(f));const h=Me(i,p,u,c,f);_e.set(N(e,"target",$e),h),l&&Se.set(e,Ae(e,l));const d=a?fetch(a).then(q):e.textContent;h.queue=h.queue.then((()=>(async(e,t,r,n)=>{const s=we.get(e.type);s.experimental&&console.warn(`The ${e.type} runtime is experimental`);const[o,a]=await L([_e.get(e).runtime,t]);try{return N(globalThis,"XWorker",{configurable:!0,get:()=>r}),N(document,"currentScript",{configurable:!0,get:()=>e}),s[n?"runAsync":"run"](o,a)}finally{delete globalThis.XWorker,delete document.currentScript}})(e,d,h.XWorker,!!t)))}},Oe=[],Te=e=>{for(const t of Oe)if(e.matches(t)){const{options:r,known:n}=Fe.get(t);if(!n.has(e)){n.add(e);const{type:t,version:s,config:o,env:a,onRuntimeReady:i}=r,c=je(t,s),u=a||`${c}${o?`|${o}`:""}`,{runtime:l,XWorker:f}=Me(t,u,c,s,o);l.then((r=>{const n=we.get(t);i(e,{type:t,runtime:r,XWorker:f,io:Y.get(r),config:structuredClone(ge.get(c)),run:n.run.bind(n,r),runAsync:n.runAsync.bind(n,r)})}))}}},Fe=new Map,Re=(t,r)=>{if(Oe.includes(t))throw new Error(`plugin ${t} already registered`);Oe.push(t),Fe.set(t,{options:r,known:new WeakSet}),e(t).forEach(Te)},Be=z(),Ne=ye.join(","),Le=async e=>{const{runtime:t,queue:r}=Pe.get(e);return(await L([t,r]))[0]};N(globalThis,"pyscript",{value:{env:new Proxy(R(null),{get:(e,t)=>Le(t)})}});let Ce=0;globalThis.__events=new Map;const Ie=async e=>{const{type:r,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of t(`./@*[${me.map((e=>`name()="${e}${r}"`)).join(" or ")}]`,n)){s=s.slice(0,-(r.length+1));const t=await Le(a.getAttribute(`${s}-env`)||s),n=Ce++;try{globalThis.__events.set(n,e),we.get(s).runEvent(t,o,n)}finally{globalThis.__events.delete(n)}}};for(let{name:e,ownerElement:r}of t(`.//@*[${me.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`))e=e.slice(e.indexOf("-")+1),"env"!==e&&r.addEventListener(e,Ie);const Je=new MutationObserver((t=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of t)if("attributes"!==r){for(const t of o)if(1===t.nodeType)if(t.matches(Ne))We(t);else{if(e(Ne,t).forEach(We),!Oe.length)continue;Te(t),e(Oe.join(","),t).forEach(Te)}}else{const e=s.indexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of me)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,Ie)}break}}}})),Ue=e=>(Je.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:qe}=Element.prototype;F(Element.prototype,{attachShadow(e){return Ue(qe.call(this,e))}}),e(Ne,Ue(document)).forEach(We);export{Be as XWorker,Re as registerPlugin};