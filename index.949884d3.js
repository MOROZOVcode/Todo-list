!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const s=new Uint8Array(16);function i(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function o(t,e=0){return(r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]).toLowerCase()}var a=function(t,n,s){if(e.randomUUID&&!n&&!t)return e.randomUUID();const r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){s=s||0;for(let t=0;t<16;++t)n[s+t]=r[t];return n}return o(r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c,u,h,l=c={};function d(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}function p(t){if(u===setTimeout)return setTimeout(t,0);if((u===d||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}!function(){try{u="function"==typeof setTimeout?setTimeout:d}catch(t){u=d}try{h="function"==typeof clearTimeout?clearTimeout:f}catch(t){h=f}}();var g,m=[],y=!1,v=-1;function w(){y&&g&&(y=!1,g.length?m=g.concat(m):v=-1,m.length&&E())}function E(){if(!y){var t=p(w);y=!0;for(var e=m.length;e;){for(g=m,m=[];++v<e;)g&&g[v].run();v=-1,e=m.length}g=null,y=!1,function(t){if(h===clearTimeout)return clearTimeout(t);if((h===f||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}(t)}}function T(t,e){this.fun=t,this.array=e}function b(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new T(t,e)),1!==m.length||y||p(E)},T.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};const I=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},S=function(t){return function(t){const e=I(t);return _.encodeByteArray(e,!0)}(t).replace(/\./g,"")},C=function(t){try{return _.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){try{return"object"==typeof indexedDB}catch(t){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,N=()=>{try{return D()||(()=>{if(void 0===c||void 0===c.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&C(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},k=t=>{const e=(t=>{var e,n;return null===(n=null===(e=N())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(M,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new x(s,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(F(n)&&F(r)){if(!V(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function F(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}class U{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new R;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:B})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=B){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=B){return this.instances.has(t)}getOptions(t=B){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===B?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=B){return this.component?this.component.multipleInstances?t:B:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class j{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=[];var K,G;(G=K||(K={}))[G.DEBUG=0]="DEBUG",G[G.VERBOSE=1]="VERBOSE",G[G.INFO=2]="INFO",G[G.WARN=3]="WARN",G[G.ERROR=4]="ERROR",G[G.SILENT=5]="SILENT";const H={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},z=K.INFO,Q={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},W=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Q[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class X{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?H[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}constructor(t){this.name=t,this._logLevel=z,this._logHandler=W,this._userLogHandler=null,$.push(this)}}let Y,J;const Z=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,st=new WeakMap;let it={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return tt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||et.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return at(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function rt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(J||(J=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ct(this),e),at(Z.get(this))}:function(...e){return at(t.apply(ct(this),e))}:function(e,...n){const s=t.call(ct(this),e,...n);return et.set(s,e.sort?e.sort():[e]),at(s)}}function ot(t){return"function"==typeof t?rt(t):(t instanceof IDBTransaction&&function(t){if(tt.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));tt.set(t,e)}(t),e=t,(Y||(Y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,it):t);var e}function at(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(at(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&Z.set(e,t)})).catch((()=>{})),st.set(e,t),e}(t);if(nt.has(t))return nt.get(t);const e=ot(t);return e!==t&&(nt.set(t,e),st.set(e,t)),e}const ct=t=>st.get(t);function ut(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=at(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(at(o.result),t.oldVersion,t.newVersion,at(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const ht=["get","getKey","getAll","getAllKeys","count"],lt=["put","add","delete","clear"],dt=new Map;function ft(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(dt.get(e))return dt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=lt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!ht.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return dt.set(e,r),r}it=(t=>({...t,get:(e,n,s)=>ft(e,n)||t.get(e,n,s),has:(e,n)=>!!ft(e,n)||t.has(e,n)}))(it);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const gt="@firebase/app",mt="0.9.0",yt=new X("@firebase/app"),vt="[DEFAULT]",wt={[gt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Et=new Map,Tt=new Map;function bt(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(Tt.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Tt.set(e,t);for(const e of Et.values())bt(e,t);return!0}function _t(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St=new O("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new U("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:vt,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw St.create("bad-app-name",{appName:String(i)});var r;if(n||(n=null===(r=N())||void 0===r?void 0:r.config),!n)throw St.create("no-options");const o=Et.get(i);if(o){if(V(n,o.options)&&V(s,o.config))return o;throw St.create("duplicate-app",{appName:i})}const a=new j(i);for(const t of Tt.values())a.addComponent(t);const c=new Ct(n,s,a);return Et.set(i,c),c}function Dt(t=vt){const e=Et.get(t);if(!e&&t===vt)return At();if(!e)throw St.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let i=null!==(s=wt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void yt.warn(t.join(" "))}It(new U(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt="firebase-heartbeat-store";let Rt=null;function Lt(){return Rt||(Rt=ut("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(kt)}}).catch((t=>{throw St.create("idb-open",{originalErrorMessage:t.message})}))),Rt}async function xt(t,e){try{const n=(await Lt()).transaction(kt,"readwrite"),s=n.objectStore(kt);return await s.put(e,Ot(t)),n.done}catch(t){if(t instanceof x)yt.warn(t.message);else{const e=St.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});yt.warn(e.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Vt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Vt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=S(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ft(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Vt(){return(new Date).toISOString().substring(0,10)}class Ft{async runIndexedDBEnvironmentCheck(){return!!A()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Lt()).transaction(kt).objectStore(kt).get(Ot(t))}catch(t){if(t instanceof x)yt.warn(t.message);else{const e=St.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});yt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return xt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return xt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Pt(t){return S(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;Ut="",It(new U("platform-logger",(t=>new pt(t)),"PRIVATE")),It(new U("heartbeat",(t=>new Mt(t)),"PRIVATE")),Nt(gt,mt,Ut),Nt(gt,mt,"esm2017"),Nt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Nt("firebase","9.15.0","app");var Bt,qt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},jt={},$t=$t||{},Kt=qt||self;function Gt(){}function Ht(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function zt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Qt="closure_uid_"+(1e9*Math.random()>>>0),Wt=0;function Xt(t,e,n){return t.call.apply(t.bind,arguments)}function Yt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Jt(t,e,n){return(Jt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xt:Yt).apply(null,arguments)}function Zt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function te(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function ee(){this.s=this.s,this.o=this.o}ee.prototype.s=!1,ee.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Qt)&&t[Qt]||(t[Qt]=++Wt))},ee.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ne=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function se(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ie(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Ht(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var oe=function(){if(!Kt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Kt.addEventListener("test",Gt,e),Kt.removeEventListener("test",Gt,e)}catch(t){}return t}();function ae(t){return/^[\s\xa0]*$/.test(t)}var ce=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ue(t,e){return t<e?-1:t>e?1:0}function he(){var t=Kt.navigator;return t&&(t=t.userAgent)?t:""}function le(t){return-1!=he().indexOf(t)}function de(t){return de[" "](t),t}de[" "]=Gt;var fe,pe,ge=le("Opera"),me=le("Trident")||le("MSIE"),ye=le("Edge"),ve=ye||me,we=le("Gecko")&&!(-1!=he().toLowerCase().indexOf("webkit")&&!le("Edge"))&&!(le("Trident")||le("MSIE"))&&!le("Edge"),Ee=-1!=he().toLowerCase().indexOf("webkit")&&!le("Edge");function Te(){var t=Kt.document;return t?t.documentMode:void 0}t:{var be="",Ie=(pe=he(),we?/rv:([^\);]+)(\)|;)/.exec(pe):ye?/Edge\/([\d\.]+)/.exec(pe):me?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pe):Ee?/WebKit\/(\S+)/.exec(pe):ge?/(?:Version)[ \/]?(\S+)/.exec(pe):void 0);if(Ie&&(be=Ie?Ie[1]:""),me){var _e=Te();if(null!=_e&&_e>parseFloat(be)){fe=String(_e);break t}}fe=be}var Se,Ce={};function Ae(){return function(t){var e=Ce;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ce(String(fe)).split("."),n=ce("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ue(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ue(0==i[2].length,0==r[2].length)||ue(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Kt.document&&me){var De=Te();Se=De||(parseInt(fe,10)||void 0)}else Se=void 0;var Ne=Se;function ke(t,e){if(re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(we){t:{try{de(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Re[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ke.X.h.call(this)}}te(ke,re);var Re={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),xe=0;function Oe(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++xe,this.ba=this.ea=!1}function Me(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ve(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Fe(t){const e={};for(const n in t)e[n]=t[n];return e}const Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ue(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Pe.length;e++)n=Pe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Be(t){this.src=t,this.g={},this.h=0}function qe(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ne(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Me(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function je(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}Be.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=je(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Oe(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var $e="closure_lm_"+(1e6*Math.random()|0),Ke={};function Ge(t,e,n,s,i){if(s&&s.once)return ze(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ge(t,e[r],n,s,i);return null}return n=tn(n),t&&t[Le]?t.N(e,n,zt(s)?!!s.capture:!!s,i):He(t,e,n,!1,s,i)}function He(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=zt(i)?!!i.capture:!!i,a=Je(t);if(a||(t[$e]=a=new Be(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ye;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)oe||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Xe(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function ze(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ze(t,e[r],n,s,i);return null}return n=tn(n),t&&t[Le]?t.O(e,n,zt(s)?!!s.capture:!!s,i):He(t,e,n,!0,s,i)}function Qe(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Qe(t,e[r],n,s,i);else s=zt(s)?!!s.capture:!!s,n=tn(n),t&&t[Le]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=je(r=t.g[e],n,s,i))&&(Me(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Je(t))&&(e=t.g[e.toString()],t=-1,e&&(t=je(e,n,s,i)),(n=-1<t?e[t]:null)&&We(n))}function We(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Le])qe(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xe(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Je(e))?(qe(n,t),0==n.h&&(n.src=null,e[$e]=null)):Me(t)}}}function Xe(t){return t in Ke?Ke[t]:Ke[t]="on"+t}function Ye(t,e){if(t.ba)t=!0;else{e=new ke(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&We(t),t=n.call(s,e)}return t}function Je(t){return(t=t[$e])instanceof Be?t:null}var Ze="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(t){return"function"==typeof t?t:(t[Ze]||(t[Ze]=function(e){return t.handleEvent(e)}),t[Ze])}function en(){ee.call(this),this.i=new Be(this),this.P=this,this.I=null}function nn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new re(e,t);else if(e instanceof re)e.target=e.target||t;else{var i=e;Ue(e=new re(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=sn(o,s,!0,e)&&i}if(i=sn(o=e.g=t,s,!0,e)&&i,i=sn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=sn(o=e.g=n[r],s,!1,e)&&i}function sn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&qe(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}te(en,ee),en.prototype[Le]=!0,en.prototype.removeEventListener=function(t,e,n,s){Qe(this,t,e,n,s)},en.prototype.M=function(){if(en.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Me(n[s]);delete e.g[t],e.h--}}this.I=null},en.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},en.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var rn=Kt.JSON.stringify;function on(){var t=fn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var an,cn=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new un),(t=>t.reset()));class un{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function hn(t){Kt.setTimeout((()=>{throw t}),0)}function ln(t,e){an||function(){var t=Kt.Promise.resolve(void 0);an=function(){t.then(pn)}}(),dn||(an(),dn=!0),fn.add(t,e)}var dn=!1,fn=new class{add(t,e){const n=cn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function pn(){for(var t;t=on();){try{t.h.call(t.g)}catch(t){hn(t)}var e=cn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dn=!1}function gn(t,e){en.call(this),this.h=t||1,this.g=e||Kt,this.j=Jt(this.lb,this),this.l=Date.now()}function mn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function yn(t,e,n){if("function"==typeof t)n&&(t=Jt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Jt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Kt.setTimeout(t,e||0)}function vn(t){t.g=yn((()=>{t.g=null,t.i&&(t.i=!1,vn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}te(gn,en),(Bt=gn.prototype).ca=!1,Bt.R=null,Bt.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nn(this,"tick"),this.ca&&(mn(this),this.start()))}},Bt.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Bt.M=function(){gn.X.M.call(this),mn(this),delete this.g};class wn extends ee{l(t){this.h=arguments,this.g?this.i=!0:vn(this)}M(){super.M(),this.g&&(Kt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function En(t){ee.call(this),this.h=t,this.g={}}te(En,ee);var Tn=[];function bn(t,e,n,s){Array.isArray(n)||(n&&(Tn[0]=n.toString()),n=Tn);for(var i=0;i<n.length;i++){var r=Ge(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function In(t){Ve(t.g,(function(t,e){this.g.hasOwnProperty(e)&&We(t)}),t),t.g={}}function _n(){this.g=!0}function Sn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return rn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}En.prototype.M=function(){En.X.M.call(this),In(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},_n.prototype.Aa=function(){this.g=!1},_n.prototype.info=function(){};var Cn={},An=null;function Dn(){return An=An||new en}function Nn(t){re.call(this,Cn.Pa,t)}function kn(t){const e=Dn();nn(e,new Nn(e))}function Rn(t,e){re.call(this,Cn.STAT_EVENT,t),this.stat=e}function Ln(t){const e=Dn();nn(e,new Rn(e,t))}function xn(t,e){re.call(this,Cn.Qa,t),this.size=e}function On(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Kt.setTimeout((function(){t()}),e)}Cn.Pa="serverreachability",te(Nn,re),Cn.STAT_EVENT="statevent",te(Rn,re),Cn.Qa="timingevent",te(xn,re);var Mn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Vn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Fn(){}function Pn(t){return t.h||(t.h=t.i())}function Un(){}Fn.prototype.h=null;var Bn,qn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jn(){re.call(this,"d")}function $n(){re.call(this,"c")}function Kn(){}function Gn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new En(this),this.O=zn,t=ve?125:void 0,this.T=new gn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Hn}function Hn(){this.i=null,this.g="",this.h=!1}te(jn,re),te($n,re),te(Kn,Fn),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},Bn=new Kn;var zn=45e3,Qn={},Wn={};function Xn(t,e,n){t.K=1,t.v=gs(hs(e)),t.s=n,t.P=!0,Yn(t,null)}function Yn(t,e){t.F=Date.now(),es(t),t.A=hs(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ds(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Hn,t.g=Ai(t.l,n?e:null,!t.s),0<t.N&&(t.L=new wn(Jt(t.La,t,t.g),t.N)),bn(t.S,t.g,"readystatechange",t.ib),e=t.H?Fe(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),kn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function Jn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Zn(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=ts(t,n),s==Wn){4==e&&(t.o=4,Ln(14),i=!1),Sn(t.j,t.m,null,"[Incomplete Response]");break}if(s==Qn){t.o=4,Ln(15),Sn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Sn(t.j,t.m,s,null),os(t,s)}Jn(t)&&s!=Wn&&s!=Qn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ln(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wi(e),e.K=!0,Ln(11))):(Sn(t.j,t.m,n,"[Invalid Chunked Response]"),rs(t),is(t))}function ts(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Wn:(n=Number(e.substring(n,s)),isNaN(n)?Qn:(s+=1)+n>e.length?Wn:(e=e.substr(s,n),t.C=s+n,e))}function es(t){t.V=Date.now()+t.O,ns(t,t.O)}function ns(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=On(Jt(t.gb,t),e)}function ss(t){t.B&&(Kt.clearTimeout(t.B),t.B=null)}function is(t){0==t.l.G||t.I||bi(t.l,t)}function rs(t){ss(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,mn(t.T),In(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function os(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Os(n.h,t)))if(!t.J&&Os(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ti(n),li(n)}vi(n),Ln(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=On(Jt(n.cb,n),6e3));if(1>=xs(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else _i(n,11)}else if((t.J||n.g==t)&&Ti(n),!ae(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Ms(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,ps(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Ci(s,s.H?s.ka:null,s.V),o.J){Vs(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ss(a),es(a)),s.g=o}else yi(s);0<n.i.length&&fi(n)}else"stop"!=u[0]&&"close"!=u[0]||_i(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_i(n,7):hi(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}kn()}catch(t){}}function as(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ht(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Ht(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Ht(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Bt=Gn.prototype).setTimeout=function(t){this.O=t},Bt.ib=function(t){t=t.target;const e=this.L;e&&3==ii(t)?e.l():this.La(t)},Bt.La=function(t){try{if(t==this.g)t:{const h=ii(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||ve||this.g&&(this.h.h||this.g.fa()||ri(this.g)))){this.I||4!=h||7==e||kn(),ss(this);var n=this.g.aa();this.Y=n;e:if(Jn(this)){var s=ri(this.g);t="";var i=s.length,r=4==ii(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rs(this),is(this);var o="";break e}this.h.i=new Kt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ln(12),rs(this),is(this);break t}Sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,os(this,n)}this.P?(Zn(this,h,o),ve&&this.i&&3==h&&(bn(this.S,this.T,"tick",this.hb),this.T.start())):(Sn(this.j,this.m,o,null),os(this,o)),4==h&&rs(this),this.i&&!this.I&&(4==h?bi(this.l,this):(this.i=!1,es(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ln(12)):(this.o=0,Ln(13)),rs(this),is(this)}}}catch(t){}},Bt.hb=function(){if(this.g){var t=ii(this.g),e=this.g.fa();this.C<e.length&&(ss(this),Zn(this,t,e),this.i&&4!=t&&es(this))}},Bt.cancel=function(){this.I=!0,rs(this)},Bt.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(kn(),Ln(17)),rs(this),this.o=2,is(this)):ns(this,this.V-t)};var cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=void 0!==e?e:t.h,ls(this,t.j),this.s=t.s,this.g=t.g,ds(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fs(this,n),this.o=t.o}else t&&(n=String(t).match(cs))?(this.h=!!e,ls(this,n[1]||"",!0),this.s=ms(n[2]||""),this.g=ms(n[3]||"",!0),ds(this,n[4]),this.l=ms(n[5]||"",!0),fs(this,n[6]||"",!0),this.o=ms(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}function hs(t){return new us(t)}function ls(t,e,n){t.j=n?ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ds(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fs(t,e,n){e instanceof _s?(t.i=e,function(t,e){e&&!t.j&&(Ss(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Cs(this,e),Ds(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ys(e,bs)),t.i=new _s(e,t.h))}function ps(t,e,n){t.i.set(e,n)}function gs(t){return ps(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ys(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,vs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ys(e,ws,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ys(e,ws,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ys(n,"/"==n.charAt(0)?Ts:Es,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ys(n,Is)),t.join("")};var ws=/[#\/\?@]/g,Es=/[#\?:]/g,Ts=/[#\?]/g,bs=/[#\?@]/g,Is=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ss(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Cs(t,e){Ss(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function As(t,e){return Ss(t),e=Ns(t,e),t.g.has(e)}function Ds(t,e,n){Cs(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),se(n)),t.h+=n.length)}function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Bt=_s.prototype).add=function(t,e){Ss(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Bt.forEach=function(t,e){Ss(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Bt.oa=function(){Ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Bt.W=function(t){Ss(this);let e=[];if("string"==typeof t)As(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Bt.set=function(t,e){return Ss(this),this.i=null,As(this,t=Ns(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Bt.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Bt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ks(t){this.l=t||Rs,Kt.PerformanceNavigationTiming?t=0<(t=Kt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Kt.g&&Kt.g.Ga&&Kt.g.Ga()&&Kt.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rs=10;function Ls(t){return!!t.h||!!t.g&&t.g.size>=t.j}function xs(t){return t.h?1:t.g?t.g.size:0}function Os(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ms(t,e){t.g?t.g.add(e):t.h=e}function Vs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Fs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return se(t.i)}function Ps(){}function Us(){this.g=new Ps}function Bs(t,e,n){const s=n||"";try{as(t,(function(t,n){let i=t;zt(t)&&(i=rn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function qs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function js(t){this.l=t.ac||null,this.j=t.jb||!1}function $s(t,e){en.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ks.prototype.cancel=function(){if(this.i=Fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ps.prototype.stringify=function(t){return Kt.JSON.stringify(t,void 0)},Ps.prototype.parse=function(t){return Kt.JSON.parse(t,void 0)},te(js,Fn),js.prototype.g=function(){return new $s(this.l,this.j)},js.prototype.i=function(t){return function(){return t}}({}),te($s,en);var Ks=0;function Gs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Hs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zs(t)}function zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Bt=$s.prototype).open=function(t,e){if(this.readyState!=Ks)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zs(this)},Bt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Kt).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Bt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Hs(this)),this.readyState=Ks},Bt.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Kt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Bt.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hs(this):zs(this),3==this.readyState&&Gs(this)}},Bt.Va=function(t){this.g&&(this.response=this.responseText=t,Hs(this))},Bt.Ua=function(t){this.g&&(this.response=t,Hs(this))},Bt.ga=function(){this.g&&Hs(this)},Bt.setRequestHeader=function(t,e){this.v.append(t,e)},Bt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Bt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($s.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Qs=Kt.JSON.parse;function Ws(t){en.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xs,this.K=this.L=!1}te(Ws,en);var Xs="",Ys=/^https?$/i,Js=["POST","PUT"];function Zs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ti(t),ni(t)}function ti(t){t.D||(t.D=!0,nn(t,"complete"),nn(t,"error"))}function ei(t){if(t.h&&void 0!==$t&&(!t.C[1]||4!=ii(t)||2!=t.aa()))if(t.v&&4==ii(t))yn(t.Ha,0,t);else if(nn(t,"readystatechange"),4==ii(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(cs)[1]||null;if(!i&&Kt.self&&Kt.self.location){var r=Kt.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ys.test(i?i.toLowerCase():"")}n=s}if(n)nn(t,"complete"),nn(t,"success");else{t.m=6;try{var o=2<ii(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",ti(t)}}finally{ni(t)}}}function ni(t,e){if(t.g){si(t);const n=t.g,s=t.C[0]?Gt:null;t.g=null,t.C=null,e||nn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function si(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Kt.clearTimeout(t.A),t.A=null)}function ii(t){return t.g?t.g.readyState:0}function ri(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function oi(t){let e="";return Ve(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ai(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=oi(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ps(t,e,n))}function ci(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ui(t){this.Ca=0,this.i=[],this.j=new _n,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ci("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ci("baseRetryDelayMs",5e3,t),this.bb=ci("retryDelaySeedMs",1e4,t),this.$a=ci("forwardChannelMaxRetries",2,t),this.ta=ci("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ks(t&&t.concurrentRequestLimit),this.Fa=new Us,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function hi(t){if(di(t),3==t.G){var e=t.U++,n=hs(t.F);ps(n,"SID",t.I),ps(n,"RID",e),ps(n,"TYPE","terminate"),gi(t,n),(e=new Gn(t,t.j,e,void 0)).K=2,e.v=gs(hs(n)),n=!1,Kt.navigator&&Kt.navigator.sendBeacon&&(n=Kt.navigator.sendBeacon(e.v.toString(),"")),!n&&Kt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ai(e.l,null),e.g.da(e.v)),e.F=Date.now(),es(e)}Si(t)}function li(t){t.g&&(wi(t),t.g.cancel(),t.g=null)}function di(t){li(t),t.u&&(Kt.clearTimeout(t.u),t.u=null),Ti(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Kt.clearTimeout(t.m),t.m=null)}function fi(t){Ls(t.h)||t.m||(t.m=!0,ln(t.Ja,t),t.C=0)}function pi(t,e){var n;n=e?e.m:t.U++;const s=hs(t.F);ps(s,"SID",t.I),ps(s,"RID",n),ps(s,"AID",t.T),gi(t,s),t.o&&t.s&&ai(s,t.o,t.s),n=new Gn(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=mi(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ms(t.h,n),Xn(n,s,e)}function gi(t,e){t.ia&&Ve(t.ia,(function(t,n){ps(e,n,t)})),t.l&&as({},(function(t,n){ps(e,n,t)}))}function mi(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Jt(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Bs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function yi(t){t.g||t.u||(t.Z=1,ln(t.Ia,t),t.A=0)}function vi(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=On(Jt(t.Ia,t),Ii(t,t.A)),t.A++,!0)}function wi(t){null!=t.B&&(Kt.clearTimeout(t.B),t.B=null)}function Ei(t){t.g=new Gn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=hs(t.sa);ps(e,"RID","rpc"),ps(e,"SID",t.I),ps(e,"CI",t.L?"0":"1"),ps(e,"AID",t.T),ps(e,"TYPE","xmlhttp"),gi(t,e),t.o&&t.s&&ai(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=gs(hs(e)),n.s=null,n.P=!0,Yn(n,t)}function Ti(t){null!=t.v&&(Kt.clearTimeout(t.v),t.v=null)}function bi(t,e){var n=null;if(t.g==e){Ti(t),wi(t),t.g=null;var s=2}else{if(!Os(t.h,e))return;n=e.D,Vs(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;nn(s=Dn(),new xn(s,n)),fi(t)}else yi(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(xs(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=On(Jt(t.Ja,t,e),Ii(t,t.C)),t.C++,0)))}(t,e)||2==s&&vi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:_i(t,5);break;case 4:_i(t,10);break;case 3:_i(t,6);break;default:_i(t,2)}}function Ii(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function _i(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=Jt(t.kb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),Kt.location&&"http"==Kt.location.protocol||ls(n,"https"),gs(n)),function(t,e){const n=new _n;if(Kt.Image){const s=new Image;s.onload=Zt(qs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zt(qs,n,s,"TestLoadImage: error",!1,e),s.onabort=Zt(qs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zt(qs,n,s,"TestLoadImage: timeout",!1,e),Kt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Ln(2);t.G=0,t.l&&t.l.va(e),Si(t),di(t)}function Si(t){if(t.G=0,t.la=[],t.l){const e=Fs(t.h);0==e.length&&0==t.i.length||(ie(t.la,e),ie(t.la,t.i),t.h.i.length=0,se(t.i),t.i.length=0),t.l.ua()}}function Ci(t,e,n){var s=n instanceof us?hs(n):new us(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),ds(s,s.m);else{var i=Kt.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new us(null,void 0);s&&ls(r,s),e&&(r.g=e),i&&ds(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ps(s,n,e),ps(s,"VER",t.ma),gi(t,s),s}function Ai(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new Ws(new js({jb:!0})):new Ws(t.ra)).Ka(t.H),e}function Di(){}function Ni(){if(me&&!(10<=Number(Ne)))throw Error("Environmental error: no available transport.")}function ki(t,e){en.call(this),this.g=new ui(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ae(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ae(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new xi(this)}function Ri(t){jn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Li(){$n.call(this),this.status=1}function xi(t){this.g=t}(Bt=Ws.prototype).Ka=function(t){this.L=t},Bt.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bn.g(),this.C=this.u?Pn(this.u):Pn(Bn),this.g.onreadystatechange=Jt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Zs(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Kt.FormData&&t instanceof Kt.FormData,!(0<=ne(Js,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{si(this),0<this.B&&((this.K=function(t){return me&&Ae()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Jt(this.qa,this)):this.A=yn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Zs(this,t)}},Bt.qa=function(){void 0!==$t&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nn(this,"timeout"),this.abort(8))},Bt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nn(this,"complete"),nn(this,"abort"),ni(this))},Bt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ni(this,!0)),Ws.X.M.call(this)},Bt.Ha=function(){this.s||(this.F||this.v||this.l?ei(this):this.fb())},Bt.fb=function(){ei(this)},Bt.aa=function(){try{return 2<ii(this)?this.g.status:-1}catch(t){return-1}},Bt.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Bt.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Qs(e)}},Bt.Ea=function(){return this.m},Bt.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Bt=ui.prototype).ma=8,Bt.G=1,Bt.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Gn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Fe(r),Ue(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=mi(this,i,e),ps(n=hs(this.F),"RID",t),ps(n,"CVER",22),this.D&&ps(n,"X-HTTP-Session-Id",this.D),gi(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(oi(r)))+"&"+e:this.o&&ai(n,this.o,r)),Ms(this.h,i),this.Ya&&ps(n,"TYPE","init"),this.O?(ps(n,"$req",e),ps(n,"SID","null"),i.Z=!0,Xn(i,n,null)):Xn(i,n,e),this.G=2}}else 3==this.G&&(t?pi(this,t):0==this.i.length||Ls(this.h)||pi(this))},Bt.Ia=function(){if(this.u=null,Ei(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=On(Jt(this.eb,this),t)}},Bt.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ln(10),li(this),Ei(this))},Bt.cb=function(){null!=this.v&&(this.v=null,li(this),vi(this),Ln(19))},Bt.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ln(2)):(this.j.info("Failed to ping google.com"),Ln(1))},(Bt=Di.prototype).xa=function(){},Bt.wa=function(){},Bt.va=function(){},Bt.ua=function(){},Bt.Ra=function(){},Ni.prototype.g=function(t,e){return new ki(t,e)},te(ki,en),ki.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ln(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ci(t,null,t.V),fi(t)},ki.prototype.close=function(){hi(this.g)},ki.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=rn(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&fi(e)},ki.prototype.M=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,ki.X.M.call(this)},te(Ri,jn),te(Li,$n),te(xi,Di),xi.prototype.xa=function(){nn(this.g,"a")},xi.prototype.wa=function(t){nn(this.g,new Ri(t))},xi.prototype.va=function(t){nn(this.g,new Li)},xi.prototype.ua=function(){nn(this.g,"b")},Ni.prototype.createWebChannel=Ni.prototype.g,ki.prototype.send=ki.prototype.u,ki.prototype.open=ki.prototype.m,ki.prototype.close=ki.prototype.close,Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,Vn.COMPLETE="complete",Un.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",en.prototype.listen=en.prototype.N,Ws.prototype.listenOnce=Ws.prototype.O,Ws.prototype.getLastError=Ws.prototype.Oa,Ws.prototype.getLastErrorCode=Ws.prototype.Ea,Ws.prototype.getStatus=Ws.prototype.aa,Ws.prototype.getResponseJson=Ws.prototype.Sa,Ws.prototype.getResponseText=Ws.prototype.fa,Ws.prototype.send=Ws.prototype.da,Ws.prototype.setWithCredentials=Ws.prototype.Ka;var Oi=jt.createWebChannelTransport=function(){return new Ni},Mi=jt.getStatEventTarget=function(){return Dn()},Vi=jt.ErrorCode=Mn,Fi=jt.EventType=Vn,Pi=jt.Event=Cn,Ui=jt.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Bi=jt.FetchXmlHttpFactory=js,qi=jt.WebChannel=Un,ji=jt.XhrIo=Ws;const $i="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Ki.UNAUTHENTICATED=new Ki(null),Ki.GOOGLE_CREDENTIALS=new Ki("google-credentials-uid"),Ki.FIRST_PARTY=new Ki("first-party-uid"),Ki.MOCK_USER=new Ki("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Gi="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new X("@firebase/firestore");function zi(){return Hi.logLevel}function Qi(t,...e){if(Hi.logLevel<=K.DEBUG){const n=e.map(Yi);Hi.debug(`Firestore (${Gi}): ${t}`,...n)}}function Wi(t,...e){if(Hi.logLevel<=K.ERROR){const n=e.map(Yi);Hi.error(`Firestore (${Gi}): ${t}`,...n)}}function Xi(t,...e){if(Hi.logLevel<=K.WARN){const n=e.map(Yi);Hi.warn(`Firestore (${Gi}): ${t}`,...n)}}function Yi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw Wi(e),new Error(e)}function Zi(t,e){t||Ji()}function tr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nr extends x{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ki.UNAUTHENTICATED)))}shutdown(){}}class or{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class ar{start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Qi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Qi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Qi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Zi("string"==typeof e.accessToken),new ir(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Zi(null===t||"string"==typeof t),new Ki(t)}constructor(t){this.t=t,this.currentUser=Ki.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class cr{I(){return this.g?this.g():(Zi(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Ki.FIRST_PARTY,this.p=new Map}}class ur{getToken(){return Promise.resolve(new cr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ki.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}}class hr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lr{start(t,e){const n=t=>{null!=t.error&&Qi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Qi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Qi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):Qi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Zi("string"==typeof t.token),this.A=t.token,new hr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=dr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function pr(t,e){return t<e?-1:t>e?1:0}function gr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{static now(){return mr.fromMillis(Date.now())}static fromDate(t){return mr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new mr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?pr(this.nanoseconds,t.nanoseconds):pr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new nr(er.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new nr(er.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new nr(er.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new nr(er.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static fromTimestamp(t){return new yr(t)}static min(){return new yr(new mr(0,0))}static max(){return new yr(new mr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{get length(){return this.len}isEqual(t){return 0===vr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Ji(),void 0===n?n=t.length-e:n>t.length-e&&Ji(),this.segments=t,this.offset=e,this.len=n}}class wr extends vr{construct(t,e,n){return new wr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new nr(er.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new wr(e)}static emptyPath(){return new wr([])}}const Er=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tr extends vr{construct(t,e,n){return new Tr(t,e,n)}static isValidIdentifier(t){return Er.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new nr(er.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new nr(er.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new nr(er.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new nr(er.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tr(e)}static emptyPath(){return new Tr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{static fromPath(t){return new br(wr.fromString(t))}static fromName(t){return new br(wr.fromString(t).popFirst(5))}static empty(){return new br(wr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===wr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return wr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new br(new wr(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Ir.UNKNOWN_ID=-1;function _r(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=yr.fromTimestamp(1e9===s?new mr(n+1,0):new mr(n,s));return new Cr(i,br.empty(),e)}function Sr(t){return new Cr(t.readTime,t.key,-1)}class Cr{static min(){return new Cr(yr.min(),br.empty(),-1)}static max(){return new Cr(yr.max(),br.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Ar(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=br.comparator(t.documentKey,e.documentKey),0!==n?n:pr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nr{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t){if(t.code!==er.FAILED_PRECONDITION||t.message!==Dr)throw t;Qi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ji(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Rr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Rr?e:Rr.resolve(e)}catch(t){return Rr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Rr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Rr.reject(e)}static resolve(t){return new Rr(((e,n)=>{e(t)}))}static reject(t){return new Rr(((e,n)=>{n(t)}))}static waitFor(t){return new Rr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Rr.resolve(!1);for(const n of t)e=e.next((t=>t?Rr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Rr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Rr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}xr.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Mr{static empty(){return new Mr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Mr&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){return null==t}function Br(t){return 0===t&&1/t==-1/0}function qr(t){return"number"==typeof t&&Number.isInteger(t)&&!Br(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{static fromBase64String(t){const e=atob(t);return new jr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new jr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}jr.EMPTY_BYTE_STRING=new jr("");const $r=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(Zi(!!t),"string"==typeof t){let e=0;const n=$r.exec(t);if(Zi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Gr(t.seconds),nanos:Gr(t.nanos)}}function Gr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Hr(t){return"string"==typeof t?jr.fromBase64String(t):jr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Qr(t){const e=t.mapValue.fields.__previous_value__;return zr(e)?Qr(e):e}function Wr(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new mr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zr(t)?4:lo(t)?9007199254740991:10:Ji()}function Jr(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wr(t).isEqual(Wr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Kr(t.timestampValue),s=Kr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Hr(t.bytesValue).isEqual(Hr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Gr(t.geoPointValue.latitude)===Gr(e.geoPointValue.latitude)&&Gr(t.geoPointValue.longitude)===Gr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Gr(t.integerValue)===Gr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Gr(t.doubleValue),s=Gr(e.doubleValue);return n===s?Br(n)===Br(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return gr(t.arrayValue.values||[],e.arrayValue.values||[],Jr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Vr(n)!==Vr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Jr(n[t],s[t])))return!1;return!0}(t,e);default:return Ji()}}function Zr(t,e){return void 0!==(t.values||[]).find((t=>Jr(t,e)))}function to(t,e){if(t===e)return 0;const n=Yr(t),s=Yr(e);if(n!==s)return pr(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Gr(t.integerValue||t.doubleValue),s=Gr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return eo(t.timestampValue,e.timestampValue);case 4:return eo(Wr(t),Wr(e));case 5:return pr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Hr(t),s=Hr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=pr(n[t],s[t]);if(0!==e)return e}return pr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=pr(Gr(t.latitude),Gr(e.latitude));return 0!==n?n:pr(Gr(t.longitude),Gr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=to(n[t],s[t]);if(e)return e}return pr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Xr.mapValue&&e===Xr.mapValue)return 0;if(t===Xr.mapValue)return 1;if(e===Xr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=pr(s[t],r[t]);if(0!==e)return e;const o=to(n[s[t]],i[r[t]]);if(0!==o)return o}return pr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Ji()}}function eo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return pr(t,e);const n=Kr(t),s=Kr(e),i=pr(n.seconds,s.seconds);return 0!==i?i:pr(n.nanos,s.nanos)}function no(t){return so(t)}function so(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Kr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,br.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=so(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${so(t.fields[i])}`;return n+"}"}(t.mapValue):Ji()}function io(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ro(t){return!!t&&"integerValue"in t}function oo(t){return!!t&&"arrayValue"in t}function ao(t){return!!t&&"nullValue"in t}function co(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uo(t){return!!t&&"mapValue"in t}function ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ho(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(t,e){this.position=t,this.inclusive=e}}function po(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?br.comparator(br.fromName(o.referenceValue),n.key):to(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function go(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{}class yo extends mo{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new So(t,e,n):"array-contains"===e?new No(t,n):"in"===e?new ko(t,n):"not-in"===e?new Ro(t,n):"array-contains-any"===e?new Lo(t,n):new yo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Co(t,n):new Ao(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(to(e,this.value)):null!==e&&Yr(this.value)===Yr(e)&&this.matchesComparison(to(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ji()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class vo extends mo{static create(t,e){return new vo(t,e)}matches(t){return wo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function wo(t){return"and"===t.op}function Eo(t){return To(t)&&wo(t)}function To(t){for(const e of t.filters)if(e instanceof vo)return!1;return!0}function bo(t){if(t instanceof yo)return t.field.canonicalString()+t.op.toString()+no(t.value);{const e=t.filters.map((t=>bo(t))).join(",");return`${t.op}(${e})`}}function Io(t,e){return t instanceof yo?function(t,e){return e instanceof yo&&t.op===e.op&&t.field.isEqual(e.field)&&Jr(t.value,e.value)}(t,e):t instanceof vo?function(t,e){return e instanceof vo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Io(n,e.filters[s])),!0)}(t,e):void Ji()}function _o(t){return t instanceof yo?function(t){return`${t.field.canonicalString()} ${t.op} ${no(t.value)}`}(t):t instanceof vo?function(t){return t.op.toString()+" {"+t.getFilters().map(_o).join(" ,")+"}"}(t):"Filter"}class So extends yo{matches(t){const e=br.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=br.fromName(n.referenceValue)}}class Co extends yo{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Do("in",e)}}class Ao extends yo{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Do("not-in",e)}}function Do(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>br.fromName(t.referenceValue)))}class No extends yo{matches(t){const e=t.data.field(this.field);return oo(e)&&Zr(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class ko extends yo{matches(t){const e=t.data.field(this.field);return null!==e&&Zr(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Ro extends yo{matches(t){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zr(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Lo extends yo{matches(t){const e=t.data.field(this.field);return!(!oo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zr(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Oo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{insert(t,e){return new Mo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Fo.BLACK,null,null))}remove(t){return new Mo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Fo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vo(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Fo.EMPTY}}class Vo{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Fo{copy(t,e,n,s,i){return new Fo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Fo.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Fo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Fo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ji();if(this.right.isRed())throw Ji();const t=this.left.check();if(t!==this.right.check())throw Ji();return t+(this.isRed()?0:1)}constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Fo.RED,this.left=null!=s?s:Fo.EMPTY,this.right=null!=i?i:Fo.EMPTY,this.size=this.left.size+1+this.right.size}}Fo.EMPTY=null,Fo.RED=!0,Fo.BLACK=!1,Fo.EMPTY=new class{get key(){throw Ji()}get value(){throw Ji()}get color(){throw Ji()}get left(){throw Ji()}get right(){throw Ji()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Fo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Uo(this.data.getIterator())}getIteratorFrom(t){return new Uo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Po))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Po(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Mo(this.comparator)}}class Uo{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{static empty(){return new Bo([])}unionWith(t){let e=new Po(Tr.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Bo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Tr.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{static empty(){return new qo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!uo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ho(e)}setAll(t){let e=Tr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=ho(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());uo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Jr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Fr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new qo(ho(this.value))}constructor(t){this.value=t}}function jo(t){const e=[];return Fr(t.fields,((t,n)=>{const s=new Tr([t]);if(uo(n)){const t=jo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Bo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $o{static newInvalidDocument(t){return new $o(t,0,yr.min(),yr.min(),yr.min(),qo.empty(),0)}static newFoundDocument(t,e,n,s){return new $o(t,1,e,yr.min(),n,s,0)}static newNoDocument(t,e){return new $o(t,2,e,yr.min(),yr.min(),qo.empty(),0)}static newUnknownDocument(t,e){return new $o(t,3,e,yr.min(),yr.min(),qo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(yr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof $o&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $o(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ft=null}}function Go(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ko(t,e,n,s,i,r,o)}function Ho(t){const e=tr(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>bo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ur(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>no(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>no(t))).join(",")),e.ft=t}return e.ft}function zo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Oo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Io(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!go(t.startAt,e.startAt)&&go(t.endAt,e.endAt)}function Qo(t){return br.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Xo(t,e,n,s,i,r,o,a){return new Wo(t,e,n,s,i,r,o,a)}function Yo(t){return new Wo(t)}function Jo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Zo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ta(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ea(t){return null!==t.collectionGroup}function na(t){const e=tr(t);if(null===e.dt){e.dt=[];const t=ta(e),n=Zo(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new xo(t)),e.dt.push(new xo(Tr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new xo(Tr.keyField(),t))}}}return e.dt}function sa(t){const e=tr(t);if(!e._t)if("F"===e.limitType)e._t=Go(e.path,e.collectionGroup,na(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of na(e)){const e="desc"===n.dir?"asc":"desc";t.push(new xo(n.field,e))}const n=e.endAt?new fo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new fo(e.startAt.position,e.startAt.inclusive):null;e._t=Go(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function ia(t,e){e.getFirstInequalityField(),ta(t);const n=t.filters.concat([e]);return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ra(t,e,n){return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oa(t,e){return zo(sa(t),sa(e))&&t.limitType===e.limitType}function aa(t){return`${Ho(sa(t))}|lt:${t.limitType}`}function ca(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>_o(t))).join(", ")}]`),Ur(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>no(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>no(t))).join(",")),`Target(${e})`}(sa(t))}; limitType=${t.limitType})`}function ua(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):br.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of na(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=po(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,na(t),e))&&!(t.endAt&&!function(t,e,n){const s=po(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,na(t),e))}(t,e)}function ha(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function la(t){return(e,n)=>{let s=!1;for(const i of na(t)){const t=da(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function da(t,e,n){const s=t.field.isKeyField()?br.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?to(s,i):Ji()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ji()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function pa(t){return{integerValue:""+t}}function ga(t,e){return qr(e)?pa(e):fa(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this._=void 0}}function ya(t,e,n){return t instanceof Ea?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ta?ba(t,e):t instanceof Ia?_a(t,e):function(t,e){const n=wa(t,e),s=Ca(n)+Ca(t.gt);return ro(n)&&ro(t.gt)?pa(s):fa(t.yt,s)}(t,e)}function va(t,e,n){return t instanceof Ta?ba(t,e):t instanceof Ia?_a(t,e):n}function wa(t,e){var n;return t instanceof Sa?ro(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class Ea extends ma{}class Ta extends ma{constructor(t){super(),this.elements=t}}function ba(t,e){const n=Aa(e);for(const e of t.elements)n.some((t=>Jr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ia extends ma{constructor(t){super(),this.elements=t}}function _a(t,e){let n=Aa(e);for(const e of t.elements)n=n.filter((t=>!Jr(t,e)));return{arrayValue:{values:n}}}class Sa extends ma{constructor(t,e){super(),this.yt=t,this.gt=e}}function Ca(t){return Gr(t.integerValue||t.doubleValue)}function Aa(t){return oo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.field=t,this.transform=e}}class Na{constructor(t,e){this.version=t,this.transformResults=e}}class ka{static none(){return new ka}static exists(t){return new ka(void 0,t)}static updateTime(t){return new ka(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Ra(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class La{}function xa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new $a(t.key,ka.none()):new Pa(t.key,t.data,ka.none());{const n=t.data,s=qo.empty();let i=new Po(Tr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Ua(t.key,s,new Bo(i.toArray()),ka.none())}}function Oa(t,e,n){t instanceof Pa?function(t,e,n){const s=t.value.clone(),i=qa(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ua?function(t,e,n){if(!Ra(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=qa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ba(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n,s){return t instanceof Pa?function(t,e,n,s){if(!Ra(t.precondition,e))return n;const i=t.value.clone(),r=ja(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ua?function(t,e,n,s){if(!Ra(t.precondition,e))return n;const i=ja(t.fieldTransforms,s,e),r=e.data;return r.setAll(Ba(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Ra(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Va(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=wa(s.transform,t||null);null!=i&&(null===n&&(n=qo.empty()),n.set(s.field,i))}return n||null}function Fa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&gr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ta&&e instanceof Ta||t instanceof Ia&&e instanceof Ia?gr(t.elements,e.elements,Jr):t instanceof Sa&&e instanceof Sa?Jr(t.gt,e.gt):t instanceof Ea&&e instanceof Ea}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends La{getFieldMask(){return null}constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Ua extends La{getFieldMask(){return this.fieldMask}constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Ba(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function qa(t,e,n){const s=new Map;Zi(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,va(o,a,n[i]))}return s}function ja(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,ya(t,r,e))}return s}class $a extends La{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ka extends La{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ha,za;function Qa(t){switch(t){default:return Ji();case er.CANCELLED:case er.UNKNOWN:case er.DEADLINE_EXCEEDED:case er.RESOURCE_EXHAUSTED:case er.INTERNAL:case er.UNAVAILABLE:case er.UNAUTHENTICATED:return!1;case er.INVALID_ARGUMENT:case er.NOT_FOUND:case er.ALREADY_EXISTS:case er.PERMISSION_DENIED:case er.FAILED_PRECONDITION:case er.ABORTED:case er.OUT_OF_RANGE:case er.UNIMPLEMENTED:case er.DATA_LOSS:return!0}}function Wa(t){if(void 0===t)return Wi("GRPC error has no .code"),er.UNKNOWN;switch(t){case Ha.OK:return er.OK;case Ha.CANCELLED:return er.CANCELLED;case Ha.UNKNOWN:return er.UNKNOWN;case Ha.DEADLINE_EXCEEDED:return er.DEADLINE_EXCEEDED;case Ha.RESOURCE_EXHAUSTED:return er.RESOURCE_EXHAUSTED;case Ha.INTERNAL:return er.INTERNAL;case Ha.UNAVAILABLE:return er.UNAVAILABLE;case Ha.UNAUTHENTICATED:return er.UNAUTHENTICATED;case Ha.INVALID_ARGUMENT:return er.INVALID_ARGUMENT;case Ha.NOT_FOUND:return er.NOT_FOUND;case Ha.ALREADY_EXISTS:return er.ALREADY_EXISTS;case Ha.PERMISSION_DENIED:return er.PERMISSION_DENIED;case Ha.FAILED_PRECONDITION:return er.FAILED_PRECONDITION;case Ha.ABORTED:return er.ABORTED;case Ha.OUT_OF_RANGE:return er.OUT_OF_RANGE;case Ha.UNIMPLEMENTED:return er.UNIMPLEMENTED;case Ha.DATA_LOSS:return er.DATA_LOSS;default:return Ji()}}(za=Ha||(Ha={}))[za.OK=0]="OK",za[za.CANCELLED=1]="CANCELLED",za[za.UNKNOWN=2]="UNKNOWN",za[za.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",za[za.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",za[za.NOT_FOUND=5]="NOT_FOUND",za[za.ALREADY_EXISTS=6]="ALREADY_EXISTS",za[za.PERMISSION_DENIED=7]="PERMISSION_DENIED",za[za.UNAUTHENTICATED=16]="UNAUTHENTICATED",za[za.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",za[za.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",za[za.ABORTED=10]="ABORTED",za[za.OUT_OF_RANGE=11]="OUT_OF_RANGE",za[za.UNIMPLEMENTED=12]="UNIMPLEMENTED",za[za.INTERNAL=13]="INTERNAL",za[za.UNAVAILABLE=14]="UNAVAILABLE",za[za.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Fr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Pr(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Mo(br.comparator);function Ja(){return Ya}const Za=new Mo(br.comparator);function tc(...t){let e=Za;for(const n of t)e=e.insert(n.key,n);return e}function ec(t){let e=Za;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function nc(){return ic()}function sc(){return ic()}function ic(){return new Xa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const rc=new Mo(br.comparator),oc=new Po(br.comparator);function ac(...t){let e=oc;for(const n of t)e=e.add(n);return e}const cc=new Po(pr);function uc(){return cc}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,lc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hc(yr.min(),s,uc(),Ja(),ac())}constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}}class lc{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new lc(n,e,ac(),ac(),ac())}constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class fc{constructor(t,e){this.targetId=t,this.Et=e}}class pc{constructor(t,e,n=jr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class gc{get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=ac(),e=ac(),n=ac();return this.Rt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ji()}})),new lc(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=vc()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}constructor(){this.At=0,this.Rt=vc(),this.bt=jr.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}}class mc{Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Ji()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,s=this.Yt(e);if(s){const t=s.target;if(Qo(t))if(0===n){const n=new br(t.path);this.Qt(e,n,$o.newNoDocument(n,yr.min()))}else Zi(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const i=this.Yt(s);if(i){if(n.current&&Qo(i.target)){const e=new br(i.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,$o.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=ac();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new hc(t,e,this.Ut,this.Lt,n);return this.Lt=Ja(),this.qt=yc(),this.Ut=new Po(pr),s}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const s=this.Wt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new gc,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Po(pr),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||Qi("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new gc),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Ja(),this.qt=yc(),this.Ut=new Po(pr)}}function yc(){return new Mo(br.comparator)}function vc(){return new Mo(br.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={asc:"ASCENDING",desc:"DESCENDING"},Ec={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tc={and:"AND",or:"OR"};class bc{constructor(t,e){this.databaseId=t,this.wt=e}}function Ic(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _c(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Sc(t,e){return Ic(t,e.toTimestamp())}function Cc(t){return Zi(!!t),yr.fromTimestamp(function(t){const e=Kr(t);return new mr(e.seconds,e.nanos)}(t))}function Ac(t,e){return function(t){return new wr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Dc(t){const e=wr.fromString(t);return Zi(Qc(e)),e}function Nc(t,e){return Ac(t.databaseId,e.path)}function kc(t,e){const n=Dc(e);if(n.get(1)!==t.databaseId.projectId)throw new nr(er.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new nr(er.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new br(Oc(n))}function Rc(t,e){return Ac(t.databaseId,e)}function Lc(t){const e=Dc(t);return 4===e.length?wr.emptyPath():Oc(e)}function xc(t){return new wr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oc(t){return Zi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Mc(t,e,n){return{name:Nc(t,e),fields:n.value.mapValue.fields}}function Vc(t,e){let n;if(e instanceof Pa)n={update:Mc(t,e.key,e.value)};else if(e instanceof $a)n={delete:Nc(t,e.key)};else if(e instanceof Ua)n={update:Mc(t,e.key,e.data),updateMask:zc(e.fieldMask)};else{if(!(e instanceof Ka))return Ji();n={verify:Nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ea)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ta)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ia)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Sa)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Ji()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Sc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ji()}(t,e.precondition)),n}function Fc(t,e){return{documents:[Rc(t,e.path)]}}function Pc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Rc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return Hc(vo.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Kc(t.field),direction:qc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.wt||Ur(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Uc(t){let e=Lc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Zi(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Bc(t);return e instanceof vo&&Eo(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new xo(Gc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ur(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new fo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new fo(n,e)}(n.endAt)),Xo(e,i,o,r,a,"F",c,u)}function Bc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gc(t.unaryFilter.field);return yo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gc(t.unaryFilter.field);return yo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gc(t.unaryFilter.field);return yo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gc(t.unaryFilter.field);return yo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ji()}}(t):void 0!==t.fieldFilter?function(t){return yo.create(Gc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ji()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return vo.create(t.compositeFilter.filters.map((t=>Bc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ji()}}(t.compositeFilter.op))}(t):Ji()}function qc(t){return wc[t]}function jc(t){return Ec[t]}function $c(t){return Tc[t]}function Kc(t){return{fieldPath:t.canonicalString()}}function Gc(t){return Tr.fromServerFormat(t.fieldPath)}function Hc(t){return t instanceof yo?function(t){if("=="===t.op){if(co(t.value))return{unaryFilter:{field:Kc(t.field),op:"IS_NAN"}};if(ao(t.value))return{unaryFilter:{field:Kc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(co(t.value))return{unaryFilter:{field:Kc(t.field),op:"IS_NOT_NAN"}};if(ao(t.value))return{unaryFilter:{field:Kc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kc(t.field),op:jc(t.op),value:t.value}}}(t):t instanceof vo?function(t){const e=t.getFilters().map((t=>Hc(t)));return 1===e.length?e[0]:{compositeFilter:{op:$c(t.op),filters:e}}}(t):Ji()}function zc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Xc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yc=Xc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Oa(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ma(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ma(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sc();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=xa(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(yr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ac())}isEqual(t){return this.batchId===t.batchId&&gr(this.mutations,t.mutations,((t,e)=>Fa(t,e)))&&gr(this.baseMutations,t.baseMutations,((t,e)=>Fa(t,e)))}constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}}class Zc{static from(t,e,n){Zi(t.mutations.length===n.length);let s=rc;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Zc(t,e,n,s)}constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{withSequenceNumber(t){return new eu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new eu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new eu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,s,i=yr.min(),r=yr.min(),o=jr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.ie=t}}function su(t){const e=Uc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ra(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Gr(t.integerValue));else if("doubleValue"in t){const n=Gr(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Br(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Hr(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?lo(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Ji()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),br.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}iu.Ie=new iu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{addToCollectionParentIndex(t,e){return this.Je.add(e),Rr.resolve()}getCollectionParents(t,e){return Rr.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return Rr.resolve()}deleteFieldIndex(t,e){return Rr.resolve()}getDocumentsMatchingTarget(t,e){return Rr.resolve(null)}getIndexType(t,e){return Rr.resolve(0)}getFieldIndexes(t,e){return Rr.resolve([])}getNextCollectionGroupToUpdate(t){return Rr.resolve(null)}getMinOffset(t,e){return Rr.resolve(Cr.min())}getMinOffsetFromCollectionGroup(t,e){return Rr.resolve(Cr.min())}updateCollectionGroup(t,e,n){return Rr.resolve()}updateIndexEntries(t,e){return Rr.resolve()}constructor(){this.Je=new ou}}class ou{add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Po(wr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Po(wr.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class au{static withCacheSize(t){return new au(t,au.DEFAULT_COLLECTION_PERCENTILE,au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */au.DEFAULT_COLLECTION_PERCENTILE=10,au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,au.DEFAULT=new au(41943040,au.DEFAULT_COLLECTION_PERCENTILE,au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),au.DISABLED=new au(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{next(){return this.bn+=2,this.bn}static Pn(){return new cu(0)}static vn(){return new cu(-1)}constructor(t){this.bn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,$o.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Rr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Xa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ma(n.mutation,t,Bo.empty(),mr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ac()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ac()){const s=nc();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=tc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=nc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ac())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Ja();const r=ic(),o=ic();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ua)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Ma(o.mutation,e,o.mutation.getFieldMask(),mr.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new hu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ic();let s=new Mo(((t,e)=>t-e)),i=ac();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Bo.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||ac()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=sc();c.forEach((t=>{if(!i.has(t)){const s=xa(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Rr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return br.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ea(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Rr.resolve(nc());let o=-1,a=i;return r.next((e=>Rr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Rr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ac()))).next((t=>({batchId:o,changes:ec(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new br(e)).next((t=>{let e=tc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=tc();return this.indexManager.getCollectionParents(t,s).next((r=>Rr.forEach(r,(r=>{const o=function(t,e){return new Wo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,$o.newInvalidDocument(n)))}));let n=tc();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&Ma(r.mutation,i,Bo.empty(),mr.now()),ua(e,i)&&(n=n.insert(s,i))})),n}))}constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{getBundleMetadata(t,e){return Rr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Cc(n.createTime)}),Rr.resolve()}getNamedQuery(t,e){return Rr.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:su(t.bundledQuery),readTime:Cc(t.readTime)}}(e)),Rr.resolve()}constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{getOverlay(t,e){return Rr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=nc();return Rr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.oe(t,e,s)})),Rr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Rr.resolve()}getOverlaysForCollection(t,e,n){const s=nc(),i=e.length+1,r=new br(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Rr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Mo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=nc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=nc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Rr.resolve(o)}oe(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new tu(e,n));let i=this.es.get(e);void 0===i&&(i=ac(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}constructor(){this.overlays=new Mo(br.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new gu(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new gu(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new br(new wr([])),n=new gu(e,t),s=new gu(e,t+1),i=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new br(new wr([])),n=new gu(e,t),s=new gu(e,t+1);let i=ac();return this.rs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new gu(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ns=new Po(gu.ss),this.rs=new Po(gu.os)}}class gu{static ss(t,e){return br.comparator(t.key,e.key)||pr(t._s,e._s)}static os(t,e){return pr(t._s,e._s)||br.comparator(t.key,e.key)}constructor(t,e){this.key=t,this._s=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{checkEmpty(t){return Rr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Jc(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.gs=this.gs.add(new gu(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Rr.resolve(r)}lookupMutationBatch(t,e){return Rr.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),i=s<0?0:s;return Rr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Rr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Rr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gu(e,0),s=new gu(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);i.push(e)})),Rr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Po(pr);return e.forEach((t=>{const e=new gu(t,0),s=new gu(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),Rr.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;br.isDocumentKey(i)||(i=i.child(""));const r=new gu(new br(i),0);let o=new Po(pr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),r),Rr.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Zi(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Rr.forEach(e.mutations,(s=>{const i=new gu(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new gu(e,0),s=this.gs.firstAfterOrEqual(n);return Rr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Rr.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Po(gu.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Rr.resolve(n?n.document.mutableCopy():$o.newInvalidDocument(e))}getEntries(t,e){let n=Ja();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():$o.newInvalidDocument(t))})),Rr.resolve(n)}getAllFromCollection(t,e,n){let s=Ja();const i=new br(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ar(Sr(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Rr.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Ji()}As(t,e){return Rr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new vu(this)}getSize(t){return Rr.resolve(this.size)}constructor(t){this.Es=t,this.docs=new Mo(br.comparator),this.size=0}}class vu extends uu{applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),Rr.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}constructor(t){super(),this.Yn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Rr.resolve()}getLastRemoteSnapshotVersion(t){return Rr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Rr.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Rr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Rr.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new cu(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Rr.resolve()}updateTargetData(t,e){return this.Dn(e),Rr.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Rr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Rr.waitFor(i).next((()=>s))}getTargetCount(t){return Rr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Rr.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Rr.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Rr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Rr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Rr.resolve(n)}containsKey(t,e){return Rr.resolve(this.Ps.containsKey(e))}constructor(t){this.persistence=t,this.Rs=new Xa((t=>Ho(t)),zo),this.lastRemoteSnapshotVersion=yr.min(),this.highestTargetId=0,this.bs=0,this.Ps=new pu,this.targetCount=0,this.vs=cu.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new mu(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Qi("MemoryPersistence","Starting transaction:",t);const s=new Tu(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return Rr.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Vs={},this.overlays={},this.Ss=new xr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new wu(this),this.indexManager=new ru,this.remoteDocumentCache=function(t){return new yu(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new nu(e),this.Ns=new du(this.yt)}}class Tu extends Nr{constructor(t){super(),this.currentSequenceNumber=t}}class bu{static Bs(t){return new bu(t)}get Ls(){if(this.$s)return this.$s;throw Ji()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Rr.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Rr.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Rr.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Rr.forEach(this.Ls,(n=>{const s=br.fromPath(n);return this.qs(t,s).next((t=>{t||e.removeEntry(s,yr.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return Rr.or([()=>Rr.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}constructor(t){this.persistence=t,this.Fs=new pu,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{static Ci(t,e){let n=ac(),s=ac();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Iu(t,e.fromCache,n,s)}constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((i=>i||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(Jo(e))return Rr.resolve(null);let n=sa(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=ra(e,null,"F"),n=sa(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=ac(...s);return this.Ni.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,ra(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,s){return Jo(e)||s.isEqual(yr.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Mi(t,e):(zi()<=K.DEBUG&&Qi("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ca(e)),this.Bi(t,r,e,_r(s,-1)))}))}Fi(t,e){let n=new Po(la(t));return e.forEach(((e,s)=>{ua(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(t,e){return zi()<=K.DEBUG&&Qi("QueryEngine","Using full collection scan to execute query:",ca(e)),this.Ni.getDocumentsMatchingQuery(t,e,Cr.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}constructor(t,e,n,s){this.persistence=t,this.Li=e,this.yt=s,this.qi=new Mo(pr),this.Ui=new Xa((t=>Ho(t)),zo),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}}function Cu(t,e,n,s){return new Su(t,e,n,s)}async function Au(t,e){const n=tr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ac();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Du(t){const e=tr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Nu(t,e,n){let s=ac(),i=ac();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Ja();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(yr.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Qi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:s,zi:i}}))}function ku(t,e){const n=tr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ru(t,e){const n=tr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((i=>i?(s=i,Rr.resolve(s)):n.Cs.allocateTargetId(t).next((i=>(s=new eu(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qi.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Lu(t,e,n){const s=tr(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Lr(t))throw t;Qi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function xu(t,e,n){const s=tr(t);let i=yr.min(),r=ac();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=tr(t),i=s.Ui.get(n);return void 0!==i?Rr.resolve(s.qi.get(i)):s.Cs.getTargetData(e,n)}(s,t,sa(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?i:yr.min(),n?r:ac()))).next((t=>(Ou(s,ha(e),t),{documents:t,Hi:r})))))}function Ou(t,e,n){let s=t.Ki.get(e)||yr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class Mu{er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=uc()}}class Vu{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Mu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Lr=new Mu,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Qi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Qi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends class{get co(){return!1}ao(t,e,n,s,i){const r=this.ho(t,e);Qi("RestConnection","Sending: ",r,n);const o={};return this.lo(o,s,i),this.fo(t,r,o,n).then((t=>(Qi("RestConnection","Received: ",t),t)),(e=>{throw Xi("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,s,i,r){return this.ao(t,e,n,s,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Gi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Uu[t];return`${this.oo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,s){return new Promise(((i,r)=>{const o=new ji;o.setWithCredentials(!0),o.listenOnce(Fi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Vi.NO_ERROR:const e=o.getResponseJson();Qi("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Vi.TIMEOUT:Qi("Connection",'RPC "'+t+'" timed out'),r(new nr(er.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:const n=o.getStatus();if(Qi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(er).indexOf(e)>=0?e:er.UNKNOWN}(e.status);r(new nr(t,e.message))}else r(new nr(er.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new nr(er.UNAVAILABLE,"Connection failed."));break;default:Ji()}}finally{Qi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Oi(),r=Mi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Bi({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");Qi("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,h=!1;const l=new Bu({Hr:t=>{h?Qi("Connection","Not sending because WebChannel is closed:",t):(u||(Qi("Connection","Opening WebChannel transport."),c.open(),u=!0),Qi("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,qi.EventType.OPEN,(()=>{h||Qi("Connection","WebChannel transport opened.")})),d(c,qi.EventType.CLOSE,(()=>{h||(h=!0,Qi("Connection","WebChannel transport closed"),l.io())})),d(c,qi.EventType.ERROR,(t=>{h||(h=!0,Xi("Connection","WebChannel transport errored:",t),l.io(new nr(er.UNAVAILABLE,"The operation could not be completed")))})),d(c,qi.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Zi(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Qi("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ha[t];if(void 0!==e)return Wa(e)}(t),n=i.message;void 0===e&&(e=er.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,l.io(new nr(e,n)),c.close()}else Qi("Connection","WebChannel received:",n),l.ro(n)}})),d(r,Pi.STAT_EVENT,(t=>{t.stat===Ui.PROXY?Qi("Connection","Detected buffering proxy"):t.stat===Ui.NOPROXY&&Qi("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new bc(t,!0)}class Ku{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&Qi("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===er.RESOURCE_EXHAUSTED?(Wi(e.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===er.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new nr(er.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return Qi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Qi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,s,i,r,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ku(t,e)}}class Hu extends Gu{jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ji()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.wt?(Zi(void 0===e||"string"==typeof e),jr.fromBase64String(e||"")):(Zi(void 0===e||e instanceof Uint8Array),jr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?er.UNKNOWN:Wa(t.code);return new nr(e,t.message||"")}(o);n=new pc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=kc(t,s.document.name),r=Cc(s.document.updateTime),o=s.document.createTime?Cc(s.document.createTime):yr.min(),a=new qo({mapValue:{fields:s.document.fields}}),c=$o.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new dc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=kc(t,s.document),r=s.readTime?Cc(s.readTime):yr.min(),o=$o.newNoDocument(i,r),a=s.removedTargetIds||[];n=new dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=kc(t,s.document),r=s.removedTargetIds||[];n=new dc([],r,i,null)}else{if(!("filter"in e))return Ji();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new Ga(s),r=t.targetId;n=new fc(r,i)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return yr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yr.min():e.readTime?Cc(e.readTime):yr.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=xc(this.yt),e.addTarget=function(t,e){let n;const s=e.target;return n=Qo(s)?{documents:Fc(t,s)}:{query:Pc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=_c(t,e.resumeToken):e.snapshotVersion.compareTo(yr.min())>0&&(n.readTime=Ic(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ji()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=xc(this.yt),e.removeTarget=t,this.Bo(e)}constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.yt=i}}class zu extends Gu{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Zi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(Zi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Cc(t.updateTime):Cc(e);return n.isEqual(yr.min())&&(n=Cc(e)),new Na(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Cc(t.commitTime);return this.listener.Zo(n,e)}return Zi(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=xc(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Vc(this.yt,t)))};this.Bo(e)}constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.yt=i,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends class{}{su(){if(this.nu)throw new nr(er.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.ao(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===er.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nr(er.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection._o(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===er.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nr(er.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=s,this.nu=!1}}class Wu{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Wi(e),this.ou=!1):Qi("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{rh(this)&&(Qi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=tr(t);e._u.add(4),await Ju(e),e.gu.set("Unknown"),e._u.delete(4),await Yu(e)}(this))}))})),this.gu=new Wu(n,s)}}async function Yu(t){if(rh(t))for(const e of t.wu)await e(!0)}async function Ju(t){for(const e of t.wu)await e(!1)}function Zu(t,e){const n=tr(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ih(n)?sh(n):Ih(n).ko()&&eh(n,e))}function th(t,e){const n=tr(t),s=Ih(n);n.du.delete(e),s.ko()&&nh(n,e),0===n.du.size&&(s.ko()?s.Fo():rh(n)&&n.gu.set("Unknown"))}function eh(t,e){t.yu.Ot(e.targetId),Ih(t).zo(e)}function nh(t,e){t.yu.Ot(e),Ih(t).Ho(e)}function sh(t){t.yu=new mc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ih(t).start(),t.gu.uu()}function ih(t){return rh(t)&&!Ih(t).No()&&t.du.size>0}function rh(t){return 0===tr(t)._u.size}function oh(t){t.yu=void 0}async function ah(t){t.du.forEach(((e,n)=>{eh(t,e)}))}async function ch(t,e){oh(t),ih(t)?(t.gu.hu(e),sh(t)):t.gu.set("Unknown")}async function uh(t,e,n){if(t.gu.set("Online"),e instanceof pc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){Qi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hh(t,n)}else if(e instanceof dc?t.yu.Kt(e):e instanceof fc?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(yr.min()))try{const e=await Du(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(s);i&&t.du.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(jr.EMPTY_BYTE_STRING,n.snapshotVersion)),nh(t,e);const s=new eu(n.target,e,1,n.sequenceNumber);eh(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Qi("RemoteStore","Failed to raise snapshot:",e),await hh(t,e)}}async function hh(t,e,n){if(!Lr(e))throw e;t._u.add(1),await Ju(t),t.gu.set("Offline"),n||(n=()=>Du(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Qi("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Yu(t)}))}function lh(t,e){return e().catch((n=>hh(t,n,e)))}async function dh(t){const e=tr(t),n=_h(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;fh(e);)try{const t=await ku(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,ph(e,t)}catch(t){await hh(e,t)}gh(e)&&mh(e)}function fh(t){return rh(t)&&t.fu.length<10}function ph(t,e){t.fu.push(e);const n=_h(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function gh(t){return rh(t)&&!_h(t).No()&&t.fu.length>0}function mh(t){_h(t).start()}async function yh(t){_h(t).eu()}async function vh(t){const e=_h(t);for(const n of t.fu)e.Xo(n.mutations)}async function wh(t,e,n){const s=t.fu.shift(),i=Zc.from(s,e,n);await lh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await dh(t)}async function Eh(t,e){e&&_h(t).Yo&&await async function(t,e){if(Qa(n=e.code)&&n!==er.ABORTED){const n=t.fu.shift();_h(t).Mo(),await lh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await dh(t)}var n}(t,e),gh(t)&&mh(t)}async function Th(t,e){const n=tr(t);n.asyncQueue.verifyOperationInProgress(),Qi("RemoteStore","RemoteStore received new credentials");const s=rh(n);n._u.add(3),await Ju(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Yu(n)}async function bh(t,e){const n=tr(t);e?(n._u.delete(2),await Yu(n)):e||(n._u.add(2),await Ju(n),n.gu.set("Unknown"))}function Ih(t){return t.pu||(t.pu=function(t,e,n){const s=tr(t);return s.su(),new Hu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,n)}(t.datastore,t.asyncQueue,{Yr:ah.bind(null,t),Zr:ch.bind(null,t),Wo:uh.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),ih(t)?sh(t):t.gu.set("Unknown")):(await t.pu.stop(),oh(t))}))),t.pu}function _h(t){return t.Iu||(t.Iu=function(t,e,n){const s=tr(t);return s.su(),new zu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,n)}(t.datastore,t.asyncQueue,{Yr:yh.bind(null,t),Zr:Eh.bind(null,t),tu:vh.bind(null,t),Zo:wh.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await dh(t)):(await t.Iu.stop(),t.fu.length>0&&(Qi("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Sh{static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Sh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nr(er.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Ch(t,e){if(Wi("AsyncQueue",`${e}: ${t}`),Lr(t))return new nr(er.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{static emptySet(t){return new Ah(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ah))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ah;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||br.comparator(e.key,n.key):(t,e)=>br.comparator(t.key,e.key),this.keyedMap=tc(),this.sortedSet=new Mo(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Ji():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Tu=new Mo(br.comparator)}}class Nh{static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Nh(t,e,Ah.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.Au=void 0,this.listeners=[]}}class Rh{constructor(){this.queries=new Xa((t=>aa(t)),oa),this.onlineState="Unknown",this.Ru=new Set}}async function Lh(t,e){const n=tr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new kh),i)try{r.Au=await n.onListen(s)}catch(t){const n=Ch(t,`Initialization of query '${ca(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Vh(n)}async function xh(t,e){const n=tr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Oh(t,e){const n=tr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(s=!0);i.Au=t}}s&&Vh(n)}function Mh(t,e,n){const s=tr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Vh(t){t.Ru.forEach((t=>{t.next()}))}class Fh{Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Nh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Nh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph{constructor(t){this.key=t}}class Uh{constructor(t){this.key=t}}class Bh{get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Dh,s=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=ua(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ji()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Nh(this.query,t.Qu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Dh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=ac(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Uh(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Ph(n))})),e}tc(t){this.qu=t.Hi,this.Ku=ac();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Nh.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ac(),this.mutatedKeys=ac(),this.Gu=la(t),this.Qu=new Ah(this.Gu)}}class qh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class jh{constructor(t){this.key=t,this.nc=!1}}class $h{get isPrimaryClient(){return!0===this.dc}constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new Xa((t=>aa(t)),oa),this.rc=new Map,this.oc=new Set,this.uc=new Mo(br.comparator),this.cc=new Map,this.ac=new pu,this.hc={},this.lc=new Map,this.fc=cu.vn(),this.onlineState="Unknown",this.dc=void 0}}async function Kh(t,e){const n=cl(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const t=await Ru(n.localStore,sa(e));n.isPrimaryClient&&Zu(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Gh(n,e,s,"current"===r,t.resumeToken)}return i}async function Gh(t,e,n,s,i){t._c=(e,n,s)=>async function(t,e,n,s){let i=e.view.Wu(n);i.$i&&(i=await xu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return nl(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const r=await xu(t.localStore,e,!0),o=new Bh(e,r.Hi),a=o.Wu(r.documents),c=lc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);nl(t,n,u.Xu);const h=new qh(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Hh(t,e){const n=tr(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter((t=>!oa(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Lu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),th(n.remoteStore,s.targetId),tl(n,s.targetId)})).catch(kr)):(tl(n,s.targetId),await Lu(n.localStore,s.targetId,!0))}async function zh(t,e){const n=tr(t);try{const t=await function(t,e){const n=tr(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(jr.EMPTY_BYTE_STRING,yr.min()).withLastLimboFreeSnapshotVersion(yr.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,r)&&o.push(n.Cs.updateTargetData(t,u))}));let a=Ja(),c=ac();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Nu(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(yr.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Rr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.qi=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(Zi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?Zi(s.nc):t.removedDocuments.size>0&&(Zi(s.nc),s.nc=!1))})),await rl(n,t,e)}catch(t){await kr(t)}}function Qh(t,e,n){const s=tr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const i=s.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=tr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(s=!0)})),s&&Vh(n)}(s.eventManager,e),t.length&&s.sc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Wh(t,e,n){const s=tr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let t=new Mo(br.comparator);t=t.insert(r,$o.newNoDocument(r,yr.min()));const n=ac().add(r),i=new hc(yr.min(),new Map,new Po(pr),t,n);await zh(s,i),s.uc=s.uc.remove(r),s.cc.delete(e),il(s)}else await Lu(s.localStore,e,!1).then((()=>tl(s,e,n))).catch(kr)}async function Xh(t,e){const n=tr(t),s=e.batch.batchId;try{const t=await function(t,e){const n=tr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Rr.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Zi(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ac();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);Zh(n,s,null),Jh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await rl(n,t)}catch(t){await kr(t)}}async function Yh(t,e,n){const s=tr(t);try{const t=await function(t,e){const n=tr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Zi(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Zh(s,e,n),Jh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await rl(s,t)}catch(t){await kr(t)}}function Jh(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Zh(t,e,n){const s=tr(t);let i=s.hc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||el(t,e)}))}function el(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(th(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),il(t))}function nl(t,e,n){for(const s of n)s instanceof Ph?(t.ac.addReference(s.key,e),sl(t,s)):s instanceof Uh?(Qi("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||el(t,s.key)):Ji()}function sl(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(Qi("SyncEngine","New document in limbo: "+n),t.oc.add(s),il(t))}function il(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new br(wr.fromString(e)),s=t.fc.next();t.cc.set(s,new jh(n)),t.uc=t.uc.insert(n,s),Zu(t.remoteStore,new eu(sa(Yo(n.path)),s,2,xr.at))}}async function rl(t,e,n){const s=tr(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Iu.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.sc.Wo(i),await async function(t,e){const n=tr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Rr.forEach(e,(e=>Rr.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Rr.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Lr(t))throw t;Qi("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.qi=n.qi.insert(e,i)}}}(s.localStore,r))}async function ol(t,e){const n=tr(t);if(!n.currentUser.isEqual(e)){Qi("SyncEngine","User change. New user:",e.toKey());const t=await Au(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new nr(er.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await rl(n,t.ji)}}function al(t,e){const n=tr(t),s=n.cc.get(e);if(s&&s.nc)return ac().add(s.key);{let t=ac();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function cl(t){const e=tr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=al.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wh.bind(null,e),e.sc.Wo=Oh.bind(null,e.eventManager),e.sc.wc=Mh.bind(null,e.eventManager),e}function ul(t){const e=tr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yh.bind(null,e),e}class hl{async initialize(t){this.yt=$u(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Cu(this.persistence,new _u,t.initialUser,this.yt)}yc(t){return new Eu(bu.Bs,this.yt)}gc(t){return new Vu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ll{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Qh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ol.bind(null,this.syncEngine),await bh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Rh}createDatastore(t){const e=$u(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new qu(s));var s;return function(t,e,n,s){return new Qu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Qh(this.syncEngine,t,0),r=Pu.C()?new Pu:new Fu,new Xu(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new $h(t,e,n,s,i,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=tr(t);Qi("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Ju(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e,n){if(!n)throw new nr(er.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fl(t){if(!br.isDocumentKey(t))throw new nr(er.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pl(t){if(br.isDocumentKey(t))throw new nr(er.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ji()}function ml(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new nr(er.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gl(t);throw new nr(er.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yl=new Map;class vl{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new nr(er.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new nr(er.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new nr(er.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{get app(){if(!this._app)throw new nr(er.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new nr(er.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rr;switch(t.type){case"gapi":const e=t.client;return new ur(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new nr(er.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=yl.get(t);e&&(Qi("ComponentProvider","Removing Datastore"),yl.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1}}function El(t,e,n,s={}){var i;const r=(t=ml(t,wl))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Xi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Ki.MOCK_USER;else{e=L(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new nr(er.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ki(r)}t._authCredentials=new or(new ir(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Il(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tl(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class bl{withConverter(t){return new bl(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Il extends bl{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tl(this.firestore,null,new br(t))}withConverter(t){return new Il(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Yo(n)),this._path=n,this.type="collection"}}function _l(t,e,...n){if(t=P(t),1===arguments.length&&(e=fr.R()),dl("doc","path",e),t instanceof wl){const s=wr.fromString(e,...n);return fl(s),new Tl(t,null,new br(s))}{if(!(t instanceof Tl||t instanceof Il))throw new nr(er.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(wr.fromString(e,...n));return fl(s),new Tl(t.firestore,t instanceof Il?t.converter:null,new br(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Wi("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cl{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nr(er.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ch(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ki.UNAUTHENTICATED,this.clientId=fr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Qi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Qi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Al(t,e){t.asyncQueue.verifyOperationInProgress(),Qi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Au(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Dl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nl(t);Qi("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Th(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Th(e.remoteStore,n))),t.onlineComponents=e}async function Nl(t){return t.offlineComponents||(Qi("FirestoreClient","Using default OfflineComponentProvider"),await Al(t,new hl)),t.offlineComponents}async function kl(t){return t.onlineComponents||(Qi("FirestoreClient","Using default OnlineComponentProvider"),await Dl(t,new ll)),t.onlineComponents}function Rl(t){return kl(t).then((t=>t.syncEngine))}async function Ll(t){const e=await kl(t),n=e.eventManager;return n.onListen=Kh.bind(null,e.syncEngine),n.onUnlisten=Hh.bind(null,e.syncEngine),n}function xl(t,e,n={}){const s=new sr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new Sl({next:n=>{e.enqueueAndForget((()=>xh(t,o))),n.fromCache&&"server"===s.source?i.reject(new nr(er.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Fh(n,r,{includeMetadataChanges:!0,Nu:!0});return Lh(t,o)}(await Ll(t),t.asyncQueue,e,n,s))),s.promise}class Ol{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=ju();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new sr;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Lr(t))throw t;Qi("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw Wi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=Sh.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(s),s}zc(){this.Kc&&Ji()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ku(this,"async_queue_retry"),this.Wc=()=>{const t=ju();t&&Qi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=ju();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class Ml extends wl{_terminate(){return this._firestoreClient||Pl(this),this._firestoreClient.terminate()}constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ol,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}}function Vl(t,e){const n="string"==typeof t?t:e||"(default)",s=_t("object"==typeof t?t:Dt(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=k("firestore");t&&El(s,...t)}return s}function Fl(t){return t._firestoreClient||Pl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pl(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Or(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Cl(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ul{static fromBase64String(t){try{return new Ul(jr.fromBase64String(t))}catch(t){throw new nr(er.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ul(jr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new nr(er.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tr(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ql{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pr(this._lat,t._lat)||pr(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new nr(er.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new nr(er.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=/^__.*__$/;class Kl{toMutation(t,e){return null!==this.fieldMask?new Ua(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pa(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}class Gl{toMutation(t,e){return new Ua(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Hl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ji()}}class zl{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new zl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.ua(t),s}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return ud(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Hl(this.sa)&&$l.test(t))throw this.ha('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=s,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=r||[]}}class Ql{da(t,e,n,s=!1){return new zl({sa:t,methodName:e,fa:n,path:Tr.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||$u(t)}}function Wl(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new Ql(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xl(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);rd("Data must be an object, but it was:",o,s);const a=sd(s,o);let c,u;if(r.merge)c=new Bo(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=od(e,s,n);if(!o.contains(i))throw new nr(er.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);hd(t,i)||t.push(i)}c=new Bo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Kl(new qo(a),c,u)}class Yl extends ql{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yl}}class Jl extends ql{_toFieldTransform(t){return new Da(t.path,new Ea)}isEqual(t){return t instanceof Jl}}function Zl(t,e,n,s){const i=t.da(1,e,n);rd("Data must be an object, but it was:",i,s);const r=[],o=qo.empty();Fr(s,((t,s)=>{const a=cd(e,t,n);s=P(s);const c=i.ca(a);if(s instanceof Yl)r.push(a);else{const t=nd(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Bo(r);return new Gl(o,a,i.fieldTransforms)}function td(t,e,n,s,i,r){const o=t.da(1,e,n),a=[od(e,s,n)],c=[i];if(r.length%2!=0)throw new nr(er.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(od(e,r[t])),c.push(r[t+1]);const u=[],h=qo.empty();for(let t=a.length-1;t>=0;--t)if(!hd(u,a[t])){const e=a[t];let n=c[t];n=P(n);const s=o.ca(e);if(n instanceof Yl)u.push(e);else{const t=nd(n,s);null!=t&&(u.push(e),h.set(e,t))}}const l=new Bo(u);return new Gl(h,l,o.fieldTransforms)}function ed(t,e,n,s=!1){return nd(n,t.da(s?4:3,e))}function nd(t,e){if(id(t=P(t)))return rd("Unsupported field value:",e,t),sd(t,e);if(t instanceof ql)return function(t,e){if(!Hl(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=nd(i,e.aa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=P(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ga(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mr.fromDate(t);return{timestampValue:Ic(e.yt,n)}}if(t instanceof mr){const n=new mr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ic(e.yt,n)}}if(t instanceof jl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ul)return{bytesValue:_c(e.yt,t._byteString)};if(t instanceof Tl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ac(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${gl(t)}`)}(t,e)}function sd(t,e){const n={};return Pr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,((t,s)=>{const i=nd(s,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function id(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mr||t instanceof jl||t instanceof Ul||t instanceof Tl||t instanceof ql)}function rd(t,e,n){if(!id(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=gl(n);throw"an object"===s?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function od(t,e,n){if((e=P(e))instanceof Bl)return e._internalPath;if("string"==typeof e)return cd(t,e);throw ud("Field path arguments must be of type string or ",t,!1,void 0,n)}const ad=new RegExp("[~\\*/\\[\\]]");function cd(t,e,n){if(e.search(ad)>=0)throw ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bl(...e.split("."))._internalPath}catch(s){throw ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ud(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new nr(er.INVALID_ARGUMENT,a+t+c)}function hd(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{get id(){return this._key.path.lastSegment()}get ref(){return new Tl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fd("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}}class dd extends ld{data(){return super.data()}}function fd(t,e){return"string"==typeof e?cd(t,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new nr(er.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gd{}class md extends gd{}class yd extends md{static _create(t,e,n){return new yd(t,e,n)}_apply(t){const e=this._parse(t);return bd(t._query,e),new bl(t.firestore,t.converter,ia(t._query,e))}_parse(t){const e=Wl(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new nr(er.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Td(o,r);const e=[];for(const n of o)e.push(Ed(s,t,n));a={arrayValue:{values:e}}}else a=Ed(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Td(o,r),a=ed(n,"where",o,"in"===r||"not-in"===r);return yo.create(i,r,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value);return n}constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}}class vd extends gd{static _create(t,e){return new vd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:vo.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const t of s)bd(n,t),n=ia(n,t)}(t._query,e),new bl(t.firestore,t.converter,ia(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(t,e){super(),this.type=t,this._queryConstraints=e}}class wd extends md{static _create(t,e){return new wd(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new nr(er.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new nr(er.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new xo(e,n);return function(t,e){if(null===Zo(t)){const n=ta(t);null!==n&&Id(t,n,e.field)}}(t,s),s}(t._query,this._field,this._direction);return new bl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Wo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}}function Ed(t,e,n){if("string"==typeof(n=P(n))){if(""===n)throw new nr(er.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ea(e)&&-1!==n.indexOf("/"))throw new nr(er.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(wr.fromString(n));if(!br.isDocumentKey(s))throw new nr(er.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return io(t,new br(s))}if(n instanceof Tl)return io(t,n._key);throw new nr(er.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gl(n)}.`)}function Td(t,e){if(!Array.isArray(t)||0===t.length)throw new nr(er.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new nr(er.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function bd(t,e){if(e.isInequality()){const n=ta(t),s=e.field;if(null!==n&&!n.isEqual(s))throw new nr(er.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=Zo(t);null!==i&&Id(t,s,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new nr(er.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new nr(er.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Id(t,e,n){if(!n.isEqual(e))throw new nr(er.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _d{convertValue(t,e="none"){switch(Yr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Hr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ji()}}convertObject(t,e){const n={};return Fr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new jl(Gr(t.latitude),Gr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Qr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Wr(t));default:return null}}convertTimestamp(t){const e=Kr(t);return new mr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=wr.fromString(t);Zi(Qc(n));const s=new Mr(n.get(1),n.get(3)),i=new br(n.popFirst(5));return s.isEqual(e)||Wi(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cd{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Ad extends ld{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fd("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class Dd extends Ad{data(t={}){return super.data(t)}}class Nd{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Dd(this._firestore,this._userDataWriter,n.key,n,new Cd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new nr(er.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Dd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Cd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Dd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Cd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:kd(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Cd(s.hasPendingWrites,s.fromCache),this.query=n}}function kd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ji()}}class Rd extends _d{convertBytes(t){return new Ul(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tl(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Ld(t,e){return function(t,e){const n=new sr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=ul(t);try{const t=await function(t,e){const n=tr(t),s=mr.now(),i=e.reduce(((t,e)=>t.add(e.key)),ac());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Ja(),c=ac();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Va(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Ua(t.key,e,jo(e.value.mapValue),ka.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:ec(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.hc[t.currentUser.toKey()];s||(s=new Mo(pr)),s=s.insert(e,n),t.hc[t.currentUser.toKey()]=s}(s,t.batchId,n),await rl(s,t.changes),await dh(s.remoteStore)}catch(t){const e=Ch(t,"Failed to persist write");n.reject(e)}}(await Rl(t),e,n))),n.promise}(Fl(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd{set(t,e,n){this._verifyNotCommitted();const s=Od(t,this._firestore),i=Sd(s.converter,e,n),r=Xl(this._dataReader,"WriteBatch.set",s._key,i,null!==s.converter,n);return this._mutations.push(r.toMutation(s._key,ka.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Od(t,this._firestore);let r;return r="string"==typeof(e=P(e))||e instanceof Bl?td(this._dataReader,"WriteBatch.update",i._key,e,n,s):Zl(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(r.toMutation(i._key,ka.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Od(t,this._firestore);return this._mutations=this._mutations.concat(new $a(e._key,ka.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new nr(er.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Wl(t)}}function Od(t,e){if((t=P(t)).firestore!==e)throw new nr(er.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Gi=t}("9.15.0"),It(new U("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Ml(new ar(t.getProvider("auth-internal")),new lr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new nr(er.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Nt($i,"3.8.0",t),Nt($i,"3.8.0","esm2017")}();const Md={apiKey:"AIzaSyDjnP0mURxbRQeo7rzj3UL4To_UzkSDHdE",authDomain:"todo-9ffce.firebaseapp.com",projectId:"todo-9ffce",storageBucket:"todo-9ffce.appspot.com",messagingSenderId:"267563520710",appId:"1:267563520710:web:f765d69ec7bec2c0903dc7"};const Vd=document.querySelector(".js-input"),Fd=document.querySelector(".js-btn"),Pd=document.querySelector(".js-clear-btn"),Ud={todosIds:[],todosById:{},addTodo:function({title:t}){const e={title:t,done:!1,id:a()};return this.todosIds.push(e.id),this.todosById[e.id]=e,e},setTodos:function(t){this.todosIds=[],this.todosById={},t.forEach((t=>{this.todosIds.push(t.id),this.todosById[t.id]=t}))},getTodos:function(){return{todosById:this.todosById,todosIds:this.todosIds}},toggleTodo:function(t){this.todosById[t].done=!this.todosById[t].done},getTodo:function(t){return this.todosById[t]}},Bd=(qd=".js-output",jd=function(t){Ud.toggleTodo(t),$d.update(Ud.getTodo(t)),document.getElementById(t+1).classList.toggle("cross-line")},{node:document.querySelector(qd),renderTodos:function({todosIds:t,todosById:e}){t.forEach((t=>{this.addTodo(e[t])}))},clearTodos:function(){this.node.innerHTML=""},addTodo:function(t){const e=document.createElement("div"),n=document.createElement("input"),s=document.createElement("label");n.setAttribute("type","checkbox"),n.setAttribute("id",t.id),n.onclick=()=>{jd(t.id)},t.done&&(n.setAttribute("checked",!0),e.classList.add("cross-line")),e.setAttribute("id",t.id+1),s.innerText=t.title,s.setAttribute("for",t.id),e.append(n,s),this.node.append(e)}});var qd,jd;const $d={key:"todos",db:Vl(At(Md)),pull:async function(){const t=function(t,e,...n){let s=[];e instanceof gd&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof vd)).length,n=t.filter((t=>t instanceof yd)).length;if(e>1||e>0&&n>0)throw new nr(er.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const e of s)t=e._apply(t);return t}(function(t,e,...n){if(t=P(t),dl("collection","path",e),t instanceof wl){const s=wr.fromString(e,...n);return pl(s),new Il(t,null,s)}{if(!(t instanceof Tl||t instanceof Il))throw new nr(er.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(wr.fromString(e,...n));return pl(s),new Il(t.firestore,null,s)}}(this.db,this.key),function(t,e="asc"){const n=e,s=fd("orderBy",t);return wd._create(s,n)}("createdAt")),e=await function(t){t=ml(t,bl);const e=ml(t.firestore,Ml),n=Fl(e),s=new Rd(e);return pd(t._query),xl(n,t._query).then((n=>new Nd(e,s,t,n)))}(t),n=[];return e.forEach((t=>{n.push({id:t.id,title:t.data().title,done:t.data().done})})),n},push:async function(t){try{await function(t,e,n){t=ml(t,Tl);const s=ml(t.firestore,Ml),i=Sd(t.converter,e,n);return Ld(s,[Xl(Wl(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ka.none())])}(_l(this.db,this.key,t.id),{title:t.title,done:t.done,createdAt:new Jl("serverTimestamp")})}catch(t){console.error("Error adding document: ",t)}},delete:async function({todosIds:t}){const e=(Fl(n=ml(n=this.db,Ml)),new xd(n,(t=>Ld(n,t))));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var n;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.forEach((t=>{const n=_l(this.db,this.key,t);e.delete(n)})),await e.commit()},update:async function(t){const e=_l(this.db,this.key,t.id);await function(t,e,n,...s){t=ml(t,Tl);const i=ml(t.firestore,Ml),r=Wl(i);let o;return o="string"==typeof(e=P(e))||e instanceof Bl?td(r,"updateDoc",t._key,e,n,s):Zl(r,"updateDoc",t._key,e),Ld(i,[o.toMutation(t._key,ka.exists(!0))])}(e,{done:t.done})}};$d.pull().then((t=>{Ud.setTodos(t),Bd.renderTodos(Ud.getTodos())})),Fd.addEventListener("click",(function(){const t=Vd.value,e=Ud.addTodo({title:t});Bd.addTodo(e),$d.push(e)})),Pd.addEventListener("click",(function(){$d.delete(Ud.getTodos()),Ud.setTodos([]),Bd.clearTodos()}))}();